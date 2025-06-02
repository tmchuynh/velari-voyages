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
  }, [searchQuery, selectedLanguage, crewMembers]);

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
        <h1>The Ones Who Lead The Way</h1>
        <h5>
          Passionate Locals. Expert Storytellers. Your Gateway to Authentic
          Experiences.
        </h5>
        <blockquote>
          "Our guides don't just show you places; they open doors to experiences
          that would otherwise remain hidden."
          <cite>— Alexandra Chen, Head of Guide Relations</cite>
        </blockquote>
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
        filteredCrewMembers.map((member, index) => (
          <div key={index}>
            <Card className="mb-6">
              <CardContent>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="mb-2 text-muted-foreground text-sm">
                  {member.role} | {member.experienceYears} years of experience
                </p>
                <p className="mb-2">
                  Languages:{" "}
                  {(member.languages || []).join(", ") || "Not specified"}
                </p>
                <p>{member.bio || "No bio available."}</p>
              </CardContent>
            </Card>
          </div>
        ))
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
