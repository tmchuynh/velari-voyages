"use client";
import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import CruiseInfo from "@/components/cards/CruiseInfo";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cruiseDepartureLocations } from "@/lib/constants/info/city.ts";
import {
  capitalize,
  formatKebebToTitleCase,
  formatNumberToCurrency,
} from "@/lib/utils/format.ts";
// import { Cruise } from "@/lib/interfaces/services/cruises"; // Cruise type becomes unused if filters/cruises logic is commented
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getCruises, getCruisesByLocation } from "@/lib/utils/get/cruises";
import { /*useRouter,*/ useSearchParams } from "next/navigation"; // useRouter becomes unused
import { useEffect, useMemo, /*useMemo,*/ useState } from "react"; // useMemo becomes unused if filterOptions/filteredCruises are commented
import { FaFilter } from "react-icons/fa";

export default function CityCruisesPage() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const city = searchParams.get("city");
  const [cruises, setCruises] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1500,
    rating: 0,
    tags: [] as string[],
    tourCategoryId: "all",
  });

  const cityInfo = cruiseDepartureLocations.find(
    (attraction) =>
      attraction.city.toLowerCase() ===
      formatKebebToTitleCase(city || "")?.toLowerCase(),
  );

  useEffect(() => {
    async function loadTours() {
      if (city) {
        const cityName = Array.isArray(city) ? city[0] : city;
        setLoading(true);
        try {
          // Get the city information object first
          const cityInfo = cruiseDepartureLocations.find(
            (location) =>
              location.city.toLowerCase() ===
              formatKebebToTitleCase(
                decodeURIComponent(cityName),
              )?.toLowerCase(),
          );

          // Use the city information to get cruises if possible
          if (cityInfo) {
            const tourData = await getCruisesByLocation(cityInfo);
            if (tourData && tourData.length > 0) {
              setCruises(tourData);
            } else {
              // Fall back to direct city name lookup
              const fallbackData = await getCruises(
                decodeURIComponent(cityName),
              );
              setCruises(fallbackData);
            }
          } else {
            // Direct lookup without city info
            const tourData = await getCruises(decodeURIComponent(cityName));
            setCruises(tourData);
          }
        } catch (error) {
          console.error("Failed to load cruise data:", error);
        } finally {
          setLoading(false);
        }
      }
    }

    loadTours();
  }, [city]);

  const handleTagToggle = (tag: string) => {
    setFilters((prev) => {
      const updatedTags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags: updatedTags };
    });
  };

  const filterOptions = useMemo(() => {
    if (!cruises.length)
      return {
        rating: 0,
        categories: [],
        tags: [],
        tourCategoryId: "all",
        prices: { min: 0, max: 0 },
      };

    const categories = [...new Set(cruises.map((tour) => tour.tourCategoryId))];
    const allTags = new Set<string>();
    cruises.forEach((tour) =>
      tour.tags?.forEach((tag: string) => allTags.add(tag)),
    );

    const currentCruisePrices = cruises
      .map((tour) => tour.basePrice)
      .filter((price) => typeof price === "number" && !isNaN(price));

    return {
      categories,
      tags: Array.from(allTags),
      prices: {
        min: Math.min(...currentCruisePrices),
        max: Math.max(...currentCruisePrices),
      },
    };
  }, [cruises]);

  // Add useEffect to update filters when cruise data is loaded
  useEffect(() => {
    if (filterOptions.prices.max > 0) {
      setFilters((prev) => ({
        ...prev,
        minPrice: filterOptions.prices.min,
        maxPrice: filterOptions.prices.max,
      }));
    }
  }, [filterOptions.prices.min, filterOptions.prices.max]);

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const filteredCruises = useMemo(() => {
    return cruises.filter((tour) => {
      // Price filter
      const tourPrice = tour.basePrice;
      if (tourPrice < filters.minPrice || tourPrice > filters.maxPrice)
        return false;

      // Rating filter
      if (filters.rating > 0 && tour.rating < filters.rating) return false;

      // Tags filter
      if (
        filters.tags.length > 0 &&
        !filters.tags.some((tag) => tour.tags?.includes(tag))
      )
        return false;

      // Category filter
      if (
        filters.tourCategoryId !== "all" &&
        tour.tourCategoryId !== filters.tourCategoryId
      )
        return false;

      return true;
    });
  }, [cruises, filters]);

  const resetFilters = () => {
    setFilters({
      minPrice: filterOptions.prices.min,
      maxPrice: filterOptions.prices.max,
      rating: 0,
      tags: [],
      tourCategoryId: "all",
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Calculate pagination
  const totalItems = filteredCruises.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentCruises = filteredCruises.slice(startIndex, endIndex);

  // Navigate to specific page
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>
          Cruises Departing from{" "}
          {city ? decodeURIComponent(Array.isArray(city) ? city[0] : city) : ""}
          : {cityInfo?.subtitle}
        </h1>
        <blockquote>{cityInfo?.quote}</blockquote>
      </header>

      <section>
        <ContactDepartmentCard department="Ports & Itinerary Planning" />
        <ContactDepartmentCard department="Shore Excursions & Transfers" />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2>Available Cruises for {city}</h2>
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
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tags filter */}
                <div className="space-y-2 col-span-1 md:col-span-2 lg:col-span-3">
                  <Label>
                    <strong>Tags</strong>
                  </Label>
                  <div className="gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
                    {filterOptions.tags.map((tag) => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tag-${tag}`}
                          checked={filters.tags.includes(tag)}
                          onCheckedChange={() => handleTagToggle(tag)}
                        />
                        <Label
                          htmlFor={`tag-${tag}`}
                          className="cursor-pointer"
                        >
                          {capitalize(tag)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end mt-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  Showing {filteredCruises.length} of {cruises.length} cruises
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
      </section>

      <div className="flex justify-between items-center mb-4">
        <div className="text-muted-foreground text-sm">
          Showing {totalItems > 0 ? startIndex + 1 : 0} - {endIndex} out of{" "}
          {totalItems} cruises
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {itemsPerPage} per page
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[3, 6, 9, 12, 24].map((value) => (
              <DropdownMenuItem
                key={value}
                onClick={() => {
                  setItemsPerPage(value);
                  setCurrentPage(1); // Reset to first page when changing items per page
                }}
              >
                {value} per page
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentCruises.map((tour, index) => (
          <CruiseInfo
            key={index}
            cruise={tour}
            city={`${city}`}
            country={`${country}`}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => goToPage(currentPage - 1)}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages adjacent to current
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              }

              // Show ellipses for gaps in pagination
              if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <PaginationItem key={page}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              return null;
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() => goToPage(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
