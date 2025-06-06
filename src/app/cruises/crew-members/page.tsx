"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { CrewMember } from "@/lib/interfaces/people/staff";
import { getAllTeamMembers } from "@/lib/utils/get/crew-members";
import { getRoleDescription } from "@/lib/utils/get/role-description";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function CrewMembers() {
  const [showFilters, setShowFilters] = useState(false);
  const [crewMembers, setAllCrewMembers] = useState<CrewMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination state for each role
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({});
  const itemsPerPage = 6; // Number of crew members per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getAllTeamMembers();
        setAllCrewMembers(data);

        // Initialize pagination for each role
        const roles = [...new Set(data.map((member) => member.role))];
        const initialPages = roles.reduce(
          (acc, role) => {
            acc[role] = 1;
            return acc;
          },
          {} as Record<string, number>,
        );
        setCurrentPages(initialPages);
      } catch (error) {
        console.error("Failed to load crew members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Tour Guides Data:", crewMembers);

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [selectedExperience, setSelectedExperience] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  const allLanguages = [
    ...new Set(crewMembers.flatMap((guide) => guide.languages || [])),
  ].sort();
  const allRoles = [...new Set(crewMembers.map((guide) => guide.role))].sort();
  const allExperiences = [
    ...new Set(crewMembers.map((guide) => guide.experienceYears)),
  ].sort();

  // Extract unique values for location filters and department
  const allCities = [
    ...new Set(crewMembers.map((member) => member.city)),
  ].sort();
  const allCountries = [
    ...new Set(crewMembers.map((member) => member.country)),
  ].sort();
  const allRegions = [
    ...new Set(crewMembers.map((member) => member.region).filter(Boolean)),
  ].sort();
  const allStates = [
    ...new Set(crewMembers.map((member) => member.state).filter(Boolean)),
  ].sort();
  const allDepartments = [
    ...new Set(crewMembers.map((member) => member.department)),
  ].sort();

  // Filter tour guides based on selected filters
  const filteredCrewMembers = useMemo(() => {
    return crewMembers.filter((guide) => {
      // Filter by search query (name)
      if (
        searchQuery &&
        !guide.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filter by language
      if (
        selectedLanguage !== "all" &&
        !(guide.languages || []).includes(selectedLanguage)
      ) {
        return false;
      }

      // Filter by role
      if (selectedRole !== "all" && guide.role !== selectedRole) {
        return false;
      }

      // Filter by experience
      if (
        selectedExperience !== "all" &&
        guide.experienceYears !== parseInt(selectedExperience)
      ) {
        return false;
      }

      // Filter by city
      if (selectedCity !== "all" && guide.city !== selectedCity) {
        return false;
      }

      // Filter by country
      if (selectedCountry !== "all" && guide.country !== selectedCountry) {
        return false;
      }

      // Filter by region
      if (selectedRegion !== "all" && guide.region !== selectedRegion) {
        return false;
      }

      // Filter by state
      if (selectedState !== "all" && guide.state !== selectedState) {
        return false;
      }

      // Filter by department
      if (
        selectedDepartment !== "all" &&
        guide.department !== selectedDepartment
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
    selectedCity,
    selectedCountry,
    selectedRegion,
    selectedState,
    selectedDepartment,
    crewMembers,
  ]);

  // Group crew members by role
  const crewMembersByRole = useMemo(() => {
    return filteredCrewMembers.reduce(
      (groups, member) => {
        const role = member.role;
        if (!groups[role]) {
          groups[role] = [];
        }
        groups[role].push(member);
        return groups;
      },
      {} as Record<string, CrewMember[]>,
    );
  }, [filteredCrewMembers]);

  // Get sorted role names for display
  const sortedRoles = useMemo(() => {
    return Object.keys(crewMembersByRole).sort();
  }, [crewMembersByRole]);

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <Loading />;
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLanguage("all");
    setSelectedRole("all");
    setSelectedExperience("all");
    setSelectedCity("all");
    setSelectedCountry("all");
    setSelectedRegion("all");
    setSelectedState("all");
    setSelectedDepartment("all");
    scrollToSection("filter-section");
  };

  // Handle page change for a specific role
  const handlePageChange = (role: string, page: number) => {
    setCurrentPages((prev) => ({
      ...prev,
      [role]: page,
    }));
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Command & Concierge at Sea</h1>
        <h5>
          Meet the experienced professionals who ensure your voyage is seamless,
          safe, and exceptional.
        </h5>
        <blockquote>
          "Our crew is dedicated to delivering impeccable service and expert
          navigation, making every journey aboard your private yacht
          unforgettable." — Samantha R., Yacht Charter Specialist
        </blockquote>
        <p>
          Whether you're looking for a skilled captain to navigate your yacht or
          a professional crew to enhance your sailing experience, we have a
          variety of options to suit your needs. Our crew members are carefully
          selected for their expertise, professionalism, and passion for the
          sea. Browse through our crew profiles to find the perfect match for
          your yacht charter, and let us help you create an unforgettable
          sailing adventure.
        </p>
      </header>

      <section id="filter-section">
        <div className="flex justify-between items-center mb-4">
          <h2>Filter Crew Members</h2>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="icon"
            size={"sm"}
            className="flex items-center gap-2"
          >
            <FaFilter />
          </Button>
        </div>
        {showFilters && (
          <Card>
            <CardContent>
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <h2 className="col-span-full mb-4">Find Your Perfect Crew</h2>

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
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
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

                <div>
                  <Label htmlFor="filter-language">Filter by Language</Label>
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
                        <SelectItem key={experience} value={`${experience}`}>
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

                {/* Filter by city */}
                <div>
                  <Label htmlFor="filter-city">Filter by City</Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger id="filter-city">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      {allCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Filter by country */}
                <div>
                  <Label htmlFor="filter-country">Filter by Country</Label>
                  <Select
                    value={selectedCountry}
                    onValueChange={setSelectedCountry}
                  >
                    <SelectTrigger id="filter-country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                      {allCountries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Filter by region (if available) */}
                {allRegions.length > 0 && (
                  <div>
                    <Label htmlFor="filter-region">Filter by Region</Label>
                    <Select
                      value={selectedRegion}
                      onValueChange={setSelectedRegion}
                    >
                      <SelectTrigger id="filter-region">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Regions</SelectItem>
                        {allRegions.map((region) => (
                          <SelectItem key={region} value={`${region}`}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Filter by state (if available) */}
                {allStates.length > 0 && (
                  <div>
                    <Label htmlFor="filter-state">Filter by State</Label>
                    <Select
                      value={selectedState}
                      onValueChange={setSelectedState}
                    >
                      <SelectTrigger id="filter-state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All States</SelectItem>
                        {allStates.map((state) => (
                          <SelectItem key={state} value={`${state}`}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="col-span-1 md:col-span-2 lg:col-span-1"
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
      </section>

      {filteredCrewMembers.length > 0 ? (
        <div className="space-y-12">
          {sortedRoles.map((role) => {
            const members = crewMembersByRole[role];
            const totalMembers = members.length;
            const totalPages = Math.ceil(totalMembers / itemsPerPage);
            const currentPage = currentPages[role] || 1;
            const startIdx = (currentPage - 1) * itemsPerPage;
            const endIdx = Math.min(startIdx + itemsPerPage, totalMembers);
            const currentMembers = members.slice(startIdx, endIdx);

            return (
              <div
                key={role}
                id={role.toLowerCase().replace(/\s+/g, "-")}
                className="mb-12"
              >
                <div className="flex justify-between items-center pb-2 border-b">
                  <h2>{role}s</h2>
                  <Badge>
                    {totalMembers} {totalMembers === 1 ? "member" : "members"}
                  </Badge>
                </div>
                <p>{getRoleDescription(role)}</p>

                <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-6">
                  {currentMembers.map((member, index) => (
                    <Card
                      key={`${member.name}-${index}`}
                      className="flex flex-col justify-between p-0 h-full overflow-hidden"
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-3 mb-3">
                          <Image
                            src={member.profileImage}
                            alt={member.name}
                            width={150}
                            height={150}
                            className="rounded-full w-24 h-24 object-cover"
                          />
                          <div className="flex flex-col justify-center">
                            <h3 className="mb-2 font-semibold text-xl">
                              {member.name}
                            </h3>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant={"defaultFaded"}>
                                {member.department}
                              </Badge>
                              {member.experienceYears &&
                                member.experienceYears >= 10 && (
                                  <Badge variant={"secondary"}>Senior</Badge>
                                )}
                            </div>
                          </div>
                        </div>

                        {member.bio && <p>{member.bio}</p>}

                        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-4">
                          {member.languages && member.languages.length > 0 && (
                            <div>
                              <h5 className="font-medium">Languages:</h5>{" "}
                              {member.languages.join(", ")}
                            </div>
                          )}
                          <div>
                            <h5 className="font-medium">Location:</h5>{" "}
                            {member.city},
                            {member.state ? ` ${member.state},` : " "}
                            {member.country}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination for this role */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-4">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() =>
                              handlePageChange(
                                role,
                                Math.max(1, currentPage - 1)
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
                              onClick={() => handlePageChange(role, i + 1)}
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
                                role,
                                Math.min(totalPages, currentPage + 1)
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
                  </div>
                )}

                <div className="text-right mt-2 text-gray-500 text-sm">
                  Showing {startIdx + 1}-{endIdx} of {totalMembers} members
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-12 text-center">
          <h3 className="mb-4 font-semibold text-xl">
            No crew members match your filter criteria
          </h3>
          <Button variant={"accent"} onClick={clearFilters}>
            Reset All Filters
          </Button>
        </div>
      )}

      {/* Quick navigation to roles */}
      {/* {filteredCrewMembers.length > 0 && (
        <div className="bottom-6 sticky flex justify-center mt-12">
          <div className="flex gap-2 bg-white shadow-lg px-4 py-2 border rounded-full max-w-full overflow-x-auto">
            {sortedRoles.map((role) => (
              <Button
                key={role}
                variant="ghost"
                size="sm"
                className="whitespace-nowrap"
                onClick={() =>
                  scrollToSection(role.toLowerCase().replace(/\s+/g, "-"))
                }
              >
                {role}s
              </Button>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}
