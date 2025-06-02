"use client";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TeamMember } from "@/lib/interfaces/people/staff";
import { getAllTeamMembers } from "@/lib/utils/get";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function CrewMembers() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [crewMembers, setAllCrewMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getAllTeamMembers();
        setAllCrewMembers(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
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

  const allLanguages = [
    ...new Set(crewMembers.flatMap((guide) => guide.languages || [])),
  ].sort();
  const allRoles = [...new Set(crewMembers.map((guide) => guide.role))].sort();
  const allExperiences = [
    ...new Set(crewMembers.map((guide) => guide.experienceYears)),
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

      return true;
    });
  }, [
    searchQuery,
    selectedLanguage,
    selectedRole,
    selectedExperience,
    crewMembers,
  ]);

  // Group crew members by role
  const crewMembersByRole = useMemo(() => {
    return filteredCrewMembers.reduce((groups, member) => {
      const role = member.role;
      if (!groups[role]) {
        groups[role] = [];
      }
      groups[role].push(member);
      return groups;
    }, {} as Record<string, TeamMember[]>);
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
    scrollToSection("filter-section");
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

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2>Filter Vehicles</h2>
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
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <h2 className="mb-4">Find Your Perfect Guide</h2>

                {/* Search by name */}
                <div>
                  <Label htmlFor="search-name">Search by Name</Label>
                  <Input
                    id="search-name"
                    placeholder="Guide name..."
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
                          {experience}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>

                {/* <div className="flex justify-between items-end mt-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  Showing{" "}
                  {filteredCrewMembers.reduce((category) => category, 0)} of{" "}
                  {allCrewMembers.reduce((category) => category, 0)}{" "}
                  vehicles
                </div>
                <Button
                  variant="destructive"
                  onClick={clearFilters}
                  className="mr-2"
                >
                  Reset Filters
                </Button>
              </div> */}
              </div>
            </CardContent>
          </Card>
        )}
      </section>

      {filteredCrewMembers.length > 0 ? (
        <div className="space-y-12">
          {sortedRoles.map((role) => (
            <div key={role} className="mb-8">
              <h2 className="mb-6 pb-2 border-b border-border">{role}s</h2>
              <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {crewMembersByRole[role].map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between shadow-md hover:shadow-lg border border-border rounded-lg h-full transition-shadow duration-300"
                  >
                    <div className="p-5 border-tertiary border-b-2">
                      <h3 className="mb-1 font-bold text-xl">{member.name}</h3>
                    </div>
                    {member.bio && <p>{member.bio}</p>}
                    {member.experienceYears && (
                      <strong className="mb-3 text-fancy text-sm">
                        {member.experienceYears} Years Experience
                      </strong>
                    )}
                    <div className="mb-4">
                      <strong>Languages:</strong>
                      <p className="text-sm">{member.languages.join(", ")}</p>
                    </div>
                    <Image
                      src={member.profileImage || "/images/default-avatar.png"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
    </div>
  );
}
