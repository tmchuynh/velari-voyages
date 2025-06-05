"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cruiseCategoryMap } from "@/lib/constants/info/cruiseCategories";
import { CrewMember } from "@/lib/interfaces/people/staff";
import { CruiseVessel } from "@/lib/interfaces/services/cruises";
import { getCrewMemberData } from "@/lib/utils/get/crew-members";
import { getVesselForCruise } from "@/lib/utils/get/vessels";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  FaAnchor,
  FaCheck,
  FaEnvelope,
  FaFilter,
  FaPhone,
  FaPrint,
  FaShip,
  FaUser,
} from "react-icons/fa";

export default function BookingConfirmationPage() {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<any>(null);
  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [contactPersonnel, setContactPersonnel] = useState<CrewMember[]>([]);
  const [vessel, setVessel] = useState<CruiseVessel | null>(null);

  // Filter state for crew members
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [selectedExperience, setSelectedExperience] = useState<string>("all");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  // Pagination state for each department
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({});
  const itemsPerPage = 3; // Number of crew members per page

  // Active tab
  const [activeTab, setActiveTab] = useState<string>("booking");

  useEffect(() => {
    // Retrieve booking data from sessionStorage
    const storedBookingData = sessionStorage.getItem("bookingData");

    if (!storedBookingData) {
      // No booking data found, redirect to booking page after short delay
      setTimeout(() => {
        router.push("/book-your-trip-today");
      }, 1500);
      return;
    }

    const bookingInfo = JSON.parse(storedBookingData);
    setBookingData(bookingInfo);

    // Get vessel information based on cruise category and departure city
    if (bookingInfo.cruiseCategory && bookingInfo.departureCity) {
      const cruiseVessel = getVesselForCruise(
        bookingInfo.departureCity,
        bookingInfo.cruiseCategory,
      );
      setVessel(cruiseVessel);
    }

    // Fetch crew members based on the departure city
    const fetchCrewMembers = async () => {
      try {
        if (bookingInfo.departureCity) {
          const crewData = await getCrewMemberData(bookingInfo.departureCity);
          setCrewMembers(crewData);

          // Set key contact personnel - select captain, guest relations manager, and medical officer
          const keyContacts = crewData
            .filter(
              (member) =>
                member.role === "Captain" ||
                member.role === "Guest Relations Manager" ||
                member.role === "Chief Medical Officer" ||
                member.role === "Hospitality Director",
            )
            .slice(0, 3); // Limit to 3 key contacts

          setContactPersonnel(keyContacts);

          // Initialize pagination for each department
          const departments = [
            ...new Set(crewData.map((member) => member.department)),
          ];
          const initialPages = departments.reduce(
            (acc, dept) => {
              acc[dept] = 1;
              return acc;
            },
            {} as Record<string, number>,
          );
          setCurrentPages(initialPages);
        }
      } catch (error) {
        console.error("Failed to load crew members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrewMembers();
  }, [router]);

  // Extract unique values for filters
  const allLanguages = useMemo(() => {
    return [
      ...new Set(crewMembers.flatMap((crew) => crew.languages || [])),
    ].sort();
  }, [crewMembers]);

  const allRoles = useMemo(() => {
    return [...new Set(crewMembers.map((crew) => crew.role))].sort();
  }, [crewMembers]);

  const allExperiences = useMemo(() => {
    return [...new Set(crewMembers.map((crew) => crew.experienceYears))].sort(
      (a = 0, b = 0) => a - b,
    );
  }, [crewMembers]);

  const allDepartments = useMemo(() => {
    return [...new Set(crewMembers.map((crew) => crew.department))].sort();
  }, [crewMembers]);

  // Filter crew members based on selected filters
  const filteredCrewMembers = useMemo(() => {
    return crewMembers.filter((crew) => {
      // Filter by search query (name)
      if (
        searchQuery &&
        !crew.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filter by language
      if (
        selectedLanguage !== "all" &&
        !(crew.languages || []).includes(selectedLanguage)
      ) {
        return false;
      }

      // Filter by role
      if (selectedRole !== "all" && crew.role !== selectedRole) {
        return false;
      }

      // Filter by experience
      if (
        selectedExperience !== "all" &&
        crew.experienceYears !== parseInt(selectedExperience)
      ) {
        return false;
      }

      // Filter by department
      if (
        selectedDepartment !== "all" &&
        crew.department !== selectedDepartment
      ) {
        return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedLanguage,
    selectedRole,
    selectedExperience,
    selectedDepartment,
    crewMembers,
  ]);

  // Group crew members by department
  const crewMembersByDepartment = useMemo(() => {
    return filteredCrewMembers.reduce(
      (groups, member) => {
        const department = member.department;
        if (!groups[department]) {
          groups[department] = [];
        }
        groups[department].push(member);
        return groups;
      },
      {} as Record<string, CrewMember[]>,
    );
  }, [filteredCrewMembers]);

  // Get sorted department names for display
  const sortedDepartments = useMemo(() => {
    return Object.keys(crewMembersByDepartment).sort();
  }, [crewMembersByDepartment]);

  // Handle page change for a specific department
  const handlePageChange = (department: string, page: number) => {
    setCurrentPages((prev) => ({
      ...prev,
      [department]: page,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLanguage("all");
    setSelectedRole("all");
    setSelectedExperience("all");
    setSelectedDepartment("all");
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <Loading />;
  }

  if (!bookingData) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh]">
        <h2 className="mb-4 font-bold text-2xl">No Booking Found</h2>
        <p className="mb-6">We couldn't find any booking information.</p>
        <p className="mb-6 text-muted-foreground">
          Redirecting to booking page...
        </p>
        <Button onClick={() => router.push("/book-your-trip-today")}>
          Return to Booking Page
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto py-8 container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-3xl">Booking Confirmation</h1>
        <Button
          onClick={handlePrint}
          variant="outline"
          className="print:hidden"
        >
          <FaPrint className="mr-2" /> Print Confirmation
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="print:hidden"
      >
        <TabsList className="mb-6">
          <TabsTrigger value="booking">Booking Details</TabsTrigger>
          <TabsTrigger value="vessel">Your Vessel</TabsTrigger>
          <TabsTrigger value="crew">Crew Members</TabsTrigger>
        </TabsList>

        <TabsContent value="booking">
          <div className="gap-6 grid md:grid-cols-3">
            <div className="space-y-6 md:col-span-2">
              <Card className="print:border-none">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-green-50 mb-4 px-3 py-1 rounded-full text-green-700">
                        <FaCheck size={12} />
                        <span className="font-medium text-sm">
                          Booking Confirmed
                        </span>
                      </div>
                      <h2 className="font-bold text-2xl">
                        {bookingData.cruiseName}
                      </h2>
                      <p className="text-muted-foreground">
                        {bookingData.cruiseDuration} • Departing from{" "}
                        {bookingData.departureCity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        Booking #{bookingData.bookingNumber}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {new Date(bookingData.bookingDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="gap-6 grid md:grid-cols-2 mb-6">
                    <div>
                      <h3 className="mb-2 font-semibold text-lg">
                        Passenger Information
                      </h3>
                      <div className="space-y-1">
                        <p>
                          <span className="font-medium">Name:</span>{" "}
                          {bookingData.firstName} {bookingData.lastName}
                        </p>
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          {bookingData.email}
                        </p>
                        <p>
                          <span className="font-medium">Phone:</span>{" "}
                          {bookingData.phone}
                        </p>
                        <p>
                          <span className="font-medium">Passengers:</span>{" "}
                          {bookingData.passengers}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-lg">
                        Cruise Details
                      </h3>
                      <div className="space-y-1">
                        <p>
                          <span className="font-medium">Cruise:</span>{" "}
                          {bookingData.cruiseName}
                        </p>
                        <p>
                          <span className="font-medium">Duration:</span>{" "}
                          {bookingData.cruiseDuration}
                        </p>
                        <p>
                          <span className="font-medium">Departure:</span>{" "}
                          {bookingData.departureCity}
                        </p>
                        <p>
                          <span className="font-medium">Date:</span>{" "}
                          {new Date(bookingData.travelDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                            },
                          )}
                        </p>
                        {vessel && (
                          <p>
                            <span className="font-medium">Vessel:</span>{" "}
                            {vessel.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {bookingData.specialRequests && (
                    <div className="mb-6">
                      <h3 className="mb-2 font-semibold text-lg">
                        Special Requests
                      </h3>
                      <p className="bg-gray-50 p-3 rounded-md">
                        {bookingData.specialRequests}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="mb-2 font-semibold text-lg">
                      Selected Packages
                    </h3>
                    {bookingData.selectedPackagesDetails &&
                    bookingData.selectedPackagesDetails.length > 0 ? (
                      <div className="space-y-3">
                        {bookingData.selectedPackagesDetails.map((pkg: any) => (
                          <div
                            key={pkg.id}
                            className="flex justify-between p-3 border rounded-md"
                          >
                            <div>
                              <h4 className="font-medium">{pkg.name}</h4>
                              <p className="text-muted-foreground text-sm">
                                {pkg.description}
                              </p>
                            </div>
                            <p className="font-medium">${pkg.price}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">
                        No packages selected
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-4 font-semibold text-lg">
                    Payment Summary
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          {bookingData.cruiseName} ({bookingData.passengers}{" "}
                          {parseInt(bookingData.passengers) === 1
                            ? "person"
                            : "people"}
                          )
                        </TableCell>
                        <TableCell className="text-right">
                          $
                          {bookingData.cruisePrice *
                            parseInt(bookingData.passengers)}
                        </TableCell>
                      </TableRow>
                      {bookingData.selectedPackagesDetails &&
                        bookingData.selectedPackagesDetails.map((pkg: any) => (
                          <TableRow key={pkg.id}>
                            <TableCell>{pkg.name}</TableCell>
                            <TableCell className="text-right">
                              ${pkg.price}
                            </TableCell>
                          </TableRow>
                        ))}
                      <TableRow>
                        <TableCell className="font-bold">Total</TableCell>
                        <TableCell className="text-right font-bold">
                          ${bookingData.totalPrice}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-4 font-semibold text-lg">
                    Your Contact Personnel
                  </h3>
                  <div className="space-y-4">
                    {contactPersonnel.length > 0 ? (
                      contactPersonnel.map((member) => (
                        <div
                          key={member.name}
                          className="flex items-center gap-3 p-3 border rounded-md"
                        >
                          <Image
                            src={member.profileImage}
                            alt={member.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-medium">{member.name}</h4>
                            <p className="text-muted-foreground text-sm">
                              {member.role} • {member.department}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground">
                        Contact information will be provided closer to your
                        departure date.
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-2 font-semibold text-lg">
                      Important Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        • Please arrive at the port at least 3 hours before
                        departure
                      </p>
                      <p>
                        • Bring your booking confirmation and valid
                        identification
                      </p>
                      <p>• Check-in closes 1 hour before departure</p>
                    </div>

                    {vessel && (
                      <Button
                        variant="outline"
                        className="mt-4 w-full"
                        onClick={() => setActiveTab("vessel")}
                      >
                        <FaShip className="mr-2" /> View Your Vessel Details
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold text-lg">Need Help?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-muted-foreground" />
                      <p>+1-800-VELARI-VOYAGES</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-muted-foreground" />
                      <p>support@velarivoyages.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="vessel">
          {vessel ? (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="flex items-center gap-2 font-bold text-2xl">
                    <FaAnchor className="text-primary" /> {vessel.name}
                  </h2>
                  <p className="text-muted-foreground">{vessel.type}</p>
                </div>
                <Badge variant="outline" className="text-sm">
                  Built {vessel.yearBuilt}
                </Badge>
              </div>

              <div className="relative rounded-lg w-full overflow-hidden aspect-video">
                <Image
                  src={vessel.imageUrl}
                  alt={vessel.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="gap-6 grid md:grid-cols-3">
                <Card className="md:col-span-2">
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold text-lg">
                      Vessel Description
                    </h3>
                    <p>{vessel.description}</p>

                    <h3 className="mt-6 mb-4 font-semibold text-lg">
                      Key Amenities
                    </h3>
                    <div className="gap-2 grid grid-cols-2">
                      {vessel.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center bg-gray-50 p-2 rounded-md"
                        >
                          <FaCheck className="mr-2 text-green-500" size={12} />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold text-lg">
                      Vessel Specifications
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between pb-2 border-b">
                        <p className="font-medium">Passenger Capacity</p>
                        <p>{vessel.capacity.toLocaleString()}</p>
                      </div>
                      <div className="flex justify-between pb-2 border-b">
                        <p className="font-medium">Length</p>
                        <p>{vessel.length}</p>
                      </div>
                      <div className="flex justify-between pb-2 border-b">
                        <p className="font-medium">Top Speed</p>
                        <p>{vessel.topSpeed}</p>
                      </div>
                      <div className="flex justify-between pb-2">
                        <p className="font-medium">Year Built</p>
                        <p>{vessel.yearBuilt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center">
              <h3 className="mb-4 font-semibold text-xl">
                Vessel information is not available
              </h3>
              <p className="mx-auto mb-6 max-w-md text-muted-foreground">
                Details about your cruise vessel will be provided closer to your
                departure date.
              </p>
              <Button variant="outline" onClick={() => setActiveTab("booking")}>
                Return to Booking Details
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="crew">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="flex items-center gap-2 font-bold text-2xl">
                <FaShip className="text-primary" /> Your Cruise Crew
              </h2>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 print:hidden"
              >
                <FaFilter size={14} />
                {showFilters ? "Hide Filters" : "Filter Crew"}
              </Button>
            </div>

            {showFilters && (
              <Card className="print:hidden">
                <CardContent className="pt-6">
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Search by name */}
                    <div>
                      <Label htmlFor="search-name">Search by Name</Label>
                      <Input
                        id="search-name"
                        placeholder="Crew member name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    {/* Filter by role */}
                    <div>
                      <Label htmlFor="filter-role">Filter by Role</Label>
                      <Select
                        value={selectedRole}
                        onValueChange={setSelectedRole}
                      >
                        <SelectTrigger id="filter-role">
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Roles</SelectItem>
                          {allRoles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Filter by language */}
                    <div>
                      <Label htmlFor="filter-language">
                        Filter by Language
                      </Label>
                      <Select
                        value={selectedLanguage}
                        onValueChange={setSelectedLanguage}
                      >
                        <SelectTrigger id="filter-language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Languages</SelectItem>
                          {allLanguages.map((language) => (
                            <SelectItem key={language} value={language}>
                              {language}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Filter by experience */}
                    <div>
                      <Label htmlFor="filter-experience">
                        Filter by Experience
                      </Label>
                      <Select
                        value={selectedExperience}
                        onValueChange={setSelectedExperience}
                      >
                        <SelectTrigger id="filter-experience">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Experience</SelectItem>
                          {allExperiences.map((experience) => (
                            <SelectItem
                              key={experience}
                              value={`${experience}`}
                            >
                              {experience} Years
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Filter by department */}
                    <div>
                      <Label htmlFor="filter-department">
                        Filter by Department
                      </Label>
                      <Select
                        value={selectedDepartment}
                        onValueChange={setSelectedDepartment}
                      >
                        <SelectTrigger id="filter-department">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Departments</SelectItem>
                          {allDepartments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="mt-auto"
                    >
                      Clear Filters
                    </Button>
                  </div>

                  <div className="mt-4 text-muted-foreground text-sm">
                    Showing {filteredCrewMembers.length} of {crewMembers.length}{" "}
                    crew members
                  </div>
                </CardContent>
              </Card>
            )}

            {filteredCrewMembers.length === 0 ? (
              <div className="py-12 text-center">
                <h3 className="mb-4 font-semibold text-xl">
                  No crew members match your filter criteria
                </h3>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              sortedDepartments.map((department) => {
                const members = crewMembersByDepartment[department];
                const totalMembers = members.length;
                const totalPages = Math.ceil(totalMembers / itemsPerPage);
                const currentPage = currentPages[department] || 1;
                const startIdx = (currentPage - 1) * itemsPerPage;
                const endIdx = Math.min(startIdx + itemsPerPage, totalMembers);
                const currentMembers = members.slice(startIdx, endIdx);

                return (
                  <div key={department} className="mb-8">
                    <div className="flex justify-between items-center mb-4 pb-2 border-b">
                      <h3 className="font-semibold text-xl">{department}</h3>
                      <Badge>
                        {totalMembers}{" "}
                        {totalMembers === 1 ? "member" : "members"}
                      </Badge>
                    </div>

                    <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3">
                      {currentMembers.map((member) => (
                        <Card
                          key={`${member.name}-${member.role}`}
                          className="overflow-hidden"
                        >
                          <CardContent className="p-4">
                            <div className="flex gap-3">
                              <Image
                                src={member.profileImage}
                                alt={member.name}
                                width={60}
                                height={60}
                                className="rounded-full object-cover"
                              />
                              <div>
                                <h4 className="font-semibold">{member.name}</h4>
                                <p className="text-muted-foreground text-sm">
                                  {member.role}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {member.experienceYears && (
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {member.experienceYears} years
                                    </Badge>
                                  )}
                                  {member.languages &&
                                    member.languages.length > 0 && (
                                      <Badge
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {member.languages.length} languages
                                      </Badge>
                                    )}
                                </div>
                              </div>
                            </div>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="link"
                                  className="mt-2 p-0 h-auto"
                                >
                                  View details
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="flex items-center gap-2">
                                    <FaUser className="text-primary" />
                                    {member.name}
                                  </DialogTitle>
                                  <DialogDescription>
                                    {member.role} • {member.department}
                                  </DialogDescription>
                                </DialogHeader>

                                <div className="flex items-start gap-4 mt-2">
                                  <Image
                                    src={member.profileImage}
                                    alt={member.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full object-cover"
                                  />
                                  <div className="space-y-2">
                                    <p>{member.bio}</p>
                                    <div>
                                      <h4 className="font-medium">
                                        Languages:
                                      </h4>
                                      <p>{member.languages?.join(", ")}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-medium">
                                        Experience:
                                      </h4>
                                      <p>{member.experienceYears} years</p>
                                    </div>
                                    <div>
                                      <h4 className="font-medium">Location:</h4>
                                      <p>
                                        {member.city}, {member.country}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Pagination for this department */}
                    {totalPages > 1 && (
                      <Pagination className="mt-4">
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() =>
                                handlePageChange(
                                  department,
                                  Math.max(1, currentPage - 1),
                                )
                              }
                              className={
                                currentPage === 1
                                  ? "pointer-events-none opacity-50"
                                  : "cursor-pointer"
                              }
                            />
                          </PaginationItem>

                          {Array.from({ length: totalPages }).map((_, i) => (
                            <PaginationItem key={i}>
                              <PaginationLink
                                isActive={currentPage === i + 1}
                                onClick={() =>
                                  handlePageChange(department, i + 1)
                                }
                                className="cursor-pointer"
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          ))}

                          <PaginationItem>
                            <PaginationNext
                              onClick={() =>
                                handlePageChange(
                                  department,
                                  Math.min(totalPages, currentPage + 1),
                                )
                              }
                              className={
                                currentPage === totalPages
                                  ? "pointer-events-none opacity-50"
                                  : "cursor-pointer"
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}

                    <div className="text-right mt-2 text-gray-500 text-sm">
                      Showing {startIdx + 1}-{endIdx} of {totalMembers} crew
                      members
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Print version that always shows (but is only visible when printing) */}
      <div className="print:block hidden">
        <div className="mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-bold text-2xl">{bookingData.cruiseName}</h2>
              <p className="text-gray-600">
                {bookingData.cruiseDuration} • Departing from{" "}
                {bookingData.departureCity}
              </p>
              <p className="mt-1">
                Sailing:{" "}
                {new Date(bookingData.travelDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
              {vessel && (
                <p className="mt-1">
                  <span className="font-medium">Vessel:</span> {vessel.name} (
                  {vessel.type})
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="font-bold">Booking #{bookingData.bookingNumber}</p>
              <p className="text-gray-600">
                {new Date(bookingData.bookingDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="mb-6 py-4 border-t border-b">
            <h3 className="mb-2 font-bold">Passenger Information</h3>
            <p>
              <span className="font-medium">Name:</span> {bookingData.firstName}{" "}
              {bookingData.lastName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {bookingData.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {bookingData.phone}
            </p>
            <p>
              <span className="font-medium">Passengers:</span>{" "}
              {bookingData.passengers}
            </p>
          </div>

          {bookingData.specialRequests && (
            <div className="mb-6">
              <h3 className="mb-2 font-bold">Special Requests</h3>
              <p>{bookingData.specialRequests}</p>
            </div>
          )}

          <h3 className="mb-2 font-bold">Booking Summary</h3>
          <table className="mb-6 w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Item</th>
                <th className="text-right py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">
                  {bookingData.cruiseName} ({bookingData.passengers}{" "}
                  {parseInt(bookingData.passengers) === 1 ? "person" : "people"}
                  )
                </td>
                <td className="text-right py-2">
                  ${bookingData.cruisePrice * parseInt(bookingData.passengers)}
                </td>
              </tr>
              {bookingData.selectedPackagesDetails &&
                bookingData.selectedPackagesDetails.map((pkg: any) => (
                  <tr key={pkg.id} className="border-b">
                    <td className="py-2">{pkg.name}</td>
                    <td className="text-right py-2">${pkg.price}</td>
                  </tr>
                ))}
              <tr>
                <td className="py-2 font-bold">Total</td>
                <td className="text-right py-2 font-bold">
                  ${bookingData.totalPrice}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mb-6">
            <h3 className="mb-2 font-bold">Key Contact Personnel</h3>
            <div className="space-y-2">
              {contactPersonnel.slice(0, 2).map((member) => (
                <p key={member.name}>
                  <span className="font-medium">{member.role}:</span>{" "}
                  {member.name}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-bold">Important Information</h3>
            <ul className="list-disc list-inside">
              <li>
                Please arrive at the port at least 3 hours before departure
              </li>
              <li>Bring your booking confirmation and valid identification</li>
              <li>Check-in closes 1 hour before departure</li>
              <li>For assistance, call +1-800-VELARI-VOYAGES</li>
            </ul>
          </div>
        </div>

        {vessel && (
          <div className="mb-8 pb-4 border-b">
            <h3 className="mb-2 font-bold">Your Vessel</h3>
            <p>
              <span className="font-medium">Name:</span> {vessel.name}
            </p>
            <p>
              <span className="font-medium">Type:</span> {vessel.type}
            </p>
            <p>
              <span className="font-medium">Capacity:</span>{" "}
              {vessel.capacity.toLocaleString()} passengers
            </p>
            <p>
              <span className="font-medium">Key Amenities:</span>{" "}
              {vessel.amenities.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
