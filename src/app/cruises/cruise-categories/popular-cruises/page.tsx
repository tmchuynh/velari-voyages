"use client";

import CruiseInfo from "@/components/cards/CruiseInfo";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cruiseDepartureLocations } from "@/lib/constants/info/city";
import { Cruise } from "@/lib/interfaces/services/cruises";
import { capitalize, formatNumberToCurrency } from "@/lib/utils/format";
import { getAllCruises } from "@/lib/utils/get";
import { featuredArray, groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function PopularTours() {
  const [allCruises, setAllCruises] = useState<Cruise[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
        // Process cruises to set hasPopularDestination flag
        const processedData = data.map((cruise) => ({
          ...cruise,
          hasPopularDestination:
            cruise.departureLocation?.isPopular ||
            cruise.arrivalLocation?.isPopular ||
            false,
        }));
        setAllCruises(featuredArray(processedData));
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCruises();
  }, []);

  // Extract unique filter options
  const filterOptions = useMemo(() => {
    if (!allCruises.length)
      return {
        durations: [],
        categories: [],
        prices: { min: 0, max: 0 },
      };

    const categories = [
      ...new Set(
        groupAndSortByProperties(allCruises, "tourCategoryId").map(
          (cruise) => cruise.tourCategoryId
        )
      ),
    ];
    console.log("Categories:", categories);
    // Ensure categories are sorted alphabetically
    categories.sort((a, b) => a.localeCompare(b));
    console.log("Sorted Categories:", categories);
    const allTags = new Set<string>();
    allCruises.forEach((cruise) =>
      cruise.tags?.forEach((tag: string) => allTags.add(tag))
    );

    const prices = allCruises.map((cruise) => {
      const priceValue = cruise.basePrice;
      return isNaN(priceValue) ? 0 : priceValue;
    });

    // Add departure and arrival locations
    const departureLocations = [
      ...new Set(
        allCruises
          .map((cruise) => cruise.departureLocation?.city)
          .filter(Boolean)
      ),
    ];

    const arrivalLocations = [
      ...new Set(
        allCruises.map((cruise) => cruise.arrivalLocation?.city).filter(Boolean)
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
  }, [allCruises]);

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

    return allCruises.filter((cruise) => {
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
  }, [allCruises, filters]);

  if (loading || !filters) {
    return <Loading />;
  }

  const popularTours = featuredArray(allCruises);

  console.log("Popular Tours Data:", allCruises);
  console.log("Filtered Tours Data:", filteredTours);
  console.log("Popular Tours", popularTours);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Popular Tours</h1>
        <p>
          Explore our most popular tours that have captivated travelers from
          around the world. Each cruise offers a unique experience, showcasing
          the beauty and culture of our destinations.
        </p>
      </header>

      {/* Filter Panel */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2>Filter Tours</h2>
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
              </div>

              <div className="flex justify-between items-end mt-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  Showing {filteredTours.length} of {allCruises.length} tours
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
        <h2>Featured Tours</h2>
        {allCruises && (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {filteredTours.map((cruise, index) => {
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
                  country={cruise.departureLocation.country || "Not specified"}
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
