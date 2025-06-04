"use client";

import CruiseInfo from "@/components/cards/CruiseInfo";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { Slider } from "@/components/ui/slider";
import { cruiseDepartureLocations } from "@/lib/constants/info/city.ts";
import { Cruise } from "@/lib/interfaces/services/cruises";
import { capitalize, formatNumberToCurrency } from "@/lib/utils/format.ts";
import { getAllCruises } from "@/lib/utils/get/cruises";
import { groupAndSortByProperties, popularArray } from "@/lib/utils/sort";
import { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function PopularTours() {
  const [popularCruises, setPopularCruises] = useState<Cruise[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9); // Default to 9 items per page (3x3 grid)

  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [filters, setFilters] = useState({
    departureLocation: "all",
    arrivalLocation: "all",
    category: "all",
    minPrice: 0,
    maxPrice: 0,
    rating: 0,
    tourCategoryId: "all",
  });

  useEffect(() => {
    const fetchCruises = async () => {
      try {
        const data = await getAllCruises();
        setPopularCruises(popularArray(data));
        // Initialize filters with fetched data
        if (data.length > 0) {
          const prices = data.map((cruise) => cruise.basePrice);
          setFilters((prev) => ({
            ...prev,
            minPrice: Math.min(...prices),
            maxPrice: Math.max(...prices),
          }));
        }
        setInitialized(true);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCruises();
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const filterOptions = useMemo(() => {
    if (!popularCruises.length)
      return {
        durations: [],
        categories: [],
        prices: { min: 0, max: 0 },
      };

    const categories = [
      ...new Set(
        groupAndSortByProperties(popularCruises, "tourCategoryId").map(
          (cruise) => cruise.tourCategoryId
        )
      ),
    ];
    categories.sort((a, b) => a.localeCompare(b));
    const allTags = new Set<string>();
    popularCruises.forEach((cruise) =>
      cruise.tags?.forEach((tag: string) => allTags.add(tag))
    );

    const prices = popularCruises.map((cruise) => {
      const priceValue = cruise.basePrice;
      return isNaN(priceValue) ? 0 : priceValue;
    });

    // Add departure and arrival locations
    const departureLocations = [
      ...new Set(
        popularCruises
          .map((cruise) => cruise.departureLocation?.city)
          .filter(Boolean)
      ),
    ];

    const arrivalLocations = [
      ...new Set(
        popularCruises
          .map((cruise) => cruise.arrivalLocation?.city)
          .filter(Boolean)
      ),
    ];

    return {
      categories,
      departureLocations,
      arrivalLocations,
      prices: {
        min: Math.min(...prices),
        max: Math.max(...prices),
      },
    };
  }, [popularCruises]);

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const resetFilters = () => {
    setFilters({
      departureLocation: "all",
      arrivalLocation: "all",
      category: "all",
      minPrice: filterOptions.prices.min,
      maxPrice: filterOptions.prices.max,
      rating: 0,
      tourCategoryId: "all",
    });
  };

  useEffect(() => {
    if (!initialized && filterOptions.prices.max > 0) {
      setFilters({
        departureLocation: "all",
        arrivalLocation: "all",
        category: "all",
        minPrice: filterOptions.prices.min,
        maxPrice: filterOptions.prices.max,
        rating: 0,
        tourCategoryId: "all",
      });
      setInitialized(true);
    }
  }, [filterOptions, initialized]);

  // Apply filters to tours
  const filteredTours = useMemo(() => {
    if (!filters) return [];

    return popularCruises.filter((cruise) => {
      // Price filter
      const tourPrice = cruise.basePrice;
      if (tourPrice < filters.minPrice || tourPrice > filters.maxPrice)
        return false;

      // Rating filter
      if (filters.rating > 0 && cruise.rating < filters.rating) return false;

      // Category filter
      if (
        filters.tourCategoryId !== "all" &&
        cruise.tourCategoryId !== filters.tourCategoryId
      )
        return false;

      // Departure location filter
      if (
        filters.departureLocation !== "all" &&
        cruise.departureLocation?.city !== filters.departureLocation
      )
        return false;

      // Arrival location filter
      if (
        filters.arrivalLocation !== "all" &&
        cruise.arrivalLocation?.city !== filters.arrivalLocation
      )
        return false;

      return true;
    });
  }, [popularCruises, filters]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);

  // Get current page cruises
  const currentCruises = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTours.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTours, currentPage, itemsPerPage]);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Show at most 5 page numbers

    if (totalPages <= maxPagesToShow) {
      // If there are 5 or fewer pages, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Add ellipsis if current page is more than 3
      if (currentPage > 3) {
        pageNumbers.push(-1); // Use -1 to represent ellipsis
      }

      // Add current page and pages around it
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pageNumbers.push(i);
      }

      // Add ellipsis if current page is less than totalPages - 2
      if (currentPage < totalPages - 2) {
        pageNumbers.push(-2); // Use -2 to represent ellipsis
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  if (loading || !filters) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Popular Cruises</h1>
        <p>
          Explore our most popular tours that have captivated travelers from
          around the world. Each cruise offers a unique experience, showcasing
          the beauty and culture of our destinations.
        </p>
      </header>

      {/* Filter Panel */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2>Filter Cruises</h2>
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
          <Card className="mb-6">
            <CardContent>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
                {/* Price filter - replaced with slider */}
                <div className="space-y-4 col-span-1 md:col-span-2">
                  <div className="flex justify-between">
                    <Label>
                      <strong>Price Range</strong>
                    </Label>
                    <span className="text-sm">
                      {formatNumberToCurrency(filters.minPrice)} -{" "}
                      {formatNumberToCurrency(filters.maxPrice)}
                    </span>
                  </div>
                  <Slider
                    min={filterOptions.prices.min}
                    max={filterOptions.prices.max}
                    step={50}
                    value={[filters.minPrice, filters.maxPrice]}
                    onValueChange={(values) => {
                      if (Array.isArray(values) && values.length === 2) {
                        handleFilterChange("minPrice", values[0]);
                        handleFilterChange("maxPrice", values[1]);
                      }
                    }}
                    className="py-4"
                  />
                </div>

                {/* Rating filter */}
                <div className="space-y-2">
                  <Label htmlFor="rating-filter">
                    <strong>Minimum Rating</strong>
                  </Label>
                  <Select
                    value={filters.rating.toString()}
                    onValueChange={(value) =>
                      handleFilterChange("rating", Number(value))
                    }
                  >
                    <SelectTrigger id="rating-filter">
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any rating</SelectItem>
                      <SelectItem value="1">★ and above</SelectItem>
                      <SelectItem value="2">★★ and above</SelectItem>
                      <SelectItem value="3">★★★ and above</SelectItem>
                      <SelectItem value="4">★★★★ and above</SelectItem>
                      <SelectItem value="5">★★★★★ only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category filter */}
                <div className="space-y-2">
                  <Label htmlFor="category-filter">
                    <strong>Tour Category</strong>
                  </Label>
                  <Select
                    value={filters.tourCategoryId}
                    onValueChange={(value) =>
                      handleFilterChange("tourCategoryId", value)
                    }
                  >
                    <SelectTrigger id="category-filter">
                      <SelectValue placeholder="Any category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any category</SelectItem>
                      {filterOptions.categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {capitalize(category)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Departure Location filter */}
                <div className="space-y-2">
                  <Label htmlFor="departure-filter">
                    <strong>Departure Location</strong>
                  </Label>
                  <Select
                    value={filters.departureLocation}
                    onValueChange={(value) =>
                      handleFilterChange("departureLocation", value)
                    }
                  >
                    <SelectTrigger id="departure-filter">
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any location</SelectItem>
                      {filterOptions.departureLocations?.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Arrival Location filter */}
                <div className="space-y-2">
                  <Label htmlFor="arrival-filter">
                    <strong>Arrival Location</strong>
                  </Label>
                  <Select
                    value={filters.arrivalLocation}
                    onValueChange={(value) =>
                      handleFilterChange("arrivalLocation", value)
                    }
                  >
                    <SelectTrigger id="arrival-filter">
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any location</SelectItem>
                      {filterOptions.arrivalLocations?.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Items per page selector */}
                <div className="space-y-2">
                  <Label htmlFor="items-per-page">
                    <strong>Cruises per page</strong>
                  </Label>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number(value));
                      setCurrentPage(1); // Reset to first page when changing items per page
                    }}
                  >
                    <SelectTrigger id="items-per-page">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between items-end mt-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  Showing {filteredTours.length} of {popularCruises.length}{" "}
                  popular cruises
                </div>
                <Button
                  variant="destructive"
                  onClick={resetFilters}
                  className="mr-2"
                >
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <section className="mt-6">
        <h2>Featured Cruises</h2>
        {filteredTours.length > 0 ? (
          <>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
              {currentCruises.map((cruise, index) => {
                if (!cruise) {
                  console.warn(`Tour data is missing for index: ${index}`);
                  return null; // Skip rendering this cruise if data is missing
                }
                if (!cruise.departureLocation || !cruise.arrivalLocation) {
                  console.warn(
                    `Tour is missing departure or arrival location: ${cruise.title}`
                  );
                  return null; // Skip rendering if location data is missing
                }

                // Find city info based on departure location
                const departureInfo = cruiseDepartureLocations.find(
                  (attraction) =>
                    attraction.city.toLowerCase() ===
                      cruise.departureLocation.city.toLowerCase() ||
                    attraction.country.toLowerCase() ===
                      cruise.departureLocation.country.toLowerCase()
                );

                if (!departureInfo) {
                  console.warn(
                    `Departure location information not found for cruise: ${cruise.title}`
                  );
                  return null;
                }

                return (
                  <CruiseInfo
                    cruise={cruise}
                    key={index}
                    city={cruise.departureLocation.city || "Not specified"}
                    country={
                      cruise.departureLocation.country || "Not specified"
                    }
                  />
                );
              })}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        currentPage > 1 && handlePageChange(currentPage - 1)
                      }
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {getPageNumbers().map((pageNumber, index) => (
                    <PaginationItem key={index}>
                      {pageNumber < 0 ? (
                        <span className="px-4 py-2">...</span>
                      ) : (
                        <PaginationLink
                          isActive={currentPage === pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className="cursor-pointer"
                        >
                          {pageNumber}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        currentPage < totalPages &&
                        handlePageChange(currentPage + 1)
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

            <div className="mt-4 text-center text-muted-foreground text-sm">
              Showing{" "}
              {Math.min(
                (currentPage - 1) * itemsPerPage + 1,
                filteredTours.length
              )}{" "}
              - {Math.min(currentPage * itemsPerPage, filteredTours.length)} of{" "}
              {filteredTours.length} cruises
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <h3 className="font-semibold text-xl">
              No cruises match your filter criteria
            </h3>
            <Button onClick={resetFilters} className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
