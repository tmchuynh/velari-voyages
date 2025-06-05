"use client";

import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
import { cruiseDepartureLocations } from "@/lib/constants/info/city";
import { Cruise } from "@/lib/interfaces/services/cruises";
import { getAllCruises } from "@/lib/utils/get/cruises";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cruises() {
  const router = useRouter();
  const [allCruises, setAllCruises] = useState<Cruise[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("city");
  const [popularSort, setPopularSort] = useState("first"); // "first", "last", "none"
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    // Reset to first page when search query or sort options change
    setCurrentPage(1);
  }, [searchQuery, sortBy, popularSort, itemsPerPage]);

  useEffect(() => {
    const fetchCruises = async () => {
      try {
        const data = await getAllCruises();
        setAllCruises(data);
      } catch (error) {
        console.error("Failed to load cruises:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCruises();
  }, []);

  // Filter destinations based on search
  const filteredDestinations = cruiseDepartureLocations.filter((item) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      item.city.toLowerCase().includes(query) ||
      item.country.toLowerCase().includes(query) ||
      (item.region && item.region.toLowerCase().includes(query)) ||
      (item.state && item.state.toLowerCase().includes(query))
    );
  });

  // Determine secondary sort field
  const secondarySortField = sortBy === "country" ? "region" : "country";

  // First sort by the selected criterion (city or country)
  const sortedDestinations = groupAndSortByProperties(
    filteredDestinations,
    sortBy as keyof (typeof cruiseDepartureLocations)[0],
    secondarySortField as keyof (typeof cruiseDepartureLocations)[0],
    true,
    false,
    false,
    true,
  );

  // Then apply popularity sorting if selected
  if (popularSort !== "none") {
    sortedDestinations.sort((a, b) => {
      // If one is popular and the other is not, sort accordingly
      if (a.isPopular !== b.isPopular) {
        if (popularSort === "first") {
          return a.isPopular ? -1 : 1;
        } else {
          return a.isPopular ? 1 : -1;
        }
      }

      // If both have the same popularity status, maintain the original sort order
      return 0;
    });
  }

  // Pagination calculations
  const totalItems = sortedDestinations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentPageItems = sortedDestinations.slice(startIndex, endIndex);

  // Generate page numbers for pagination display
  const getPageNumbers = () => {
    // For fewer pages, show all numbers
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // For many pages, use ellipsis for better UX
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "ellipsis", totalPages];
    } else if (currentPage >= totalPages - 2) {
      return [
        1,
        "ellipsis",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      return [
        1,
        "ellipsis",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "ellipsis",
        totalPages,
      ];
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Luxurious Destinations</h1>
        <h5>
          Exclusive retreats crafted for unparalleled comfort and elegance
        </h5>
        <blockquote>
          "Every destination felt like a private paradise—luxury redefined in
          every detail. Paragon Trails transformed our travel dreams into
          unforgettable realities." — Emily Carter, Santorini & Amalfi Coast
        </blockquote>
        <p>
          Discover the epitome of luxury travel with Paragon Trails, where every
          destination is a masterpiece of elegance and comfort. From the
          sun-kissed shores of Santorini to the breathtaking Amalfi Coast, our
          exclusive retreats are designed to redefine your travel experience.
          Immerse yourself in the beauty of these iconic locations, where every
          detail is meticulously crafted to ensure your journey is nothing short
          of extraordinary. Whether you're exploring the ancient ruins of Rome
          or savoring the culinary delights of Tuscany, Paragon Trails offers a
          seamless blend of luxury and adventure. Join us as we take you on a
          journey through the world's most luxurious destinations, where every
          moment is an unforgettable experience. Let Paragon Trails transform
          your travel dreams into reality, creating memories that will last a
          lifetime. Experience the world like never before with our curated
          selection of luxurious retreats, where comfort meets elegance in every
          detail. Discover the art of luxury travel with Paragon Trails, where
          every destination is a gateway to unparalleled comfort and
          sophistication.
        </p>
      </header>

      <section>
        <ContactDepartmentCard department="Ports & Itinerary Planning" />
        <ContactDepartmentCard department="Shore Excursions & Transfers" />
      </section>

      <div className="space-y-4 mb-8">
        <div className="flex md:flex-row flex-col justify-between items-start gap-4">
          <div className="w-full">
            <Label>
              <strong>Search</strong>
            </Label>
            <Input
              type="text"
              className="mt-2"
              placeholder="Search by city, country, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="space-y-2">
              <Label>
                <strong>Sort by:</strong>
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sort option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city">City</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>
                <strong>Popular:</strong>
              </Label>
              <Select value={popularSort} onValueChange={setPopularSort}>
                <SelectTrigger>
                  <SelectValue placeholder="Select popularity filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No priority</SelectItem>
                  <SelectItem value="first">Show first</SelectItem>
                  <SelectItem value="last">Show last</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>
                <strong>Display:</strong>
              </Label>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => setItemsPerPage(Number(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Items per page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">8 per page</SelectItem>
                  <SelectItem value="12">12 per page</SelectItem>
                  <SelectItem value="16">16 per page</SelectItem>
                  <SelectItem value="24">24 per page</SelectItem>
                  <SelectItem value="48">48 per page</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentPageItems.map((item, index) => (
          <div
            key={index}
            className="group relative shadow-md hover:shadow-lg p-6 border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
          >
            <h2
              className="w-2/3 font-semibold text-2xl underline-offset-2 hover:underline cursor-pointer"
              onClick={() => {
                // Use query parameters instead of path parameters
                const queryParams = new URLSearchParams({
                  departureLocationCity: item.city,
                  departureLocationCountry: item.country,
                });

                router.push(
                  `/cruises/cruise-categories/velari-voyages-cruises/cruise/${
                    item.city
                  }?${queryParams.toString()}`,
                );
              }}
            >
              {item.city}
            </h2>

            {item.isPopular && (
              <Badge
                size={"sm"}
                variant={"outline"}
                className="top-4 right-4 absolute uppercase"
              >
                Popular
              </Badge>
            )}

            <Button
              size={"sm"}
              className="mt-7"
              onClick={() =>
                router.push(
                  `/cruises/cruise-categories/velari-voyages-cruises/${item.country}/${item.city}?city=${item.city}&country=${item.country}`,
                )
              }
            >
              View All Cruises
            </Button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground text-sm">
              Showing {startIndex + 1}-{endIndex} of {totalItems} destinations
            </p>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {getPageNumbers().map((page, i) => (
                  <PaginationItem key={i}>
                    {page === "ellipsis" ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page as number);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        setCurrentPage(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
}
