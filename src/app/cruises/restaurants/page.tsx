"use client";
import RestaurantCard from "@/components/cards/RestaruantCard";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { cityFiles } from "@/lib/constants/info/city.ts";
import { Restaurant } from "@/lib/types/types";
import { capitalize } from "@/lib/utils/format.ts";
import { getAllRestaurantsFromCity } from "@/lib/utils/get/restaurants";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantPage() {
  const router = useRouter();
  const [cityRestaurants, setCityRestaurants] = useState<
    { city: string; restaurants: Restaurant[] }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [previousPageCities, setPreviousPageCities] = useState<Set<string>>(
    new Set()
  );
  const [paginatedData, setPaginatedData] = useState<{
    restaurants: {
      city: string;
      restaurants: Restaurant[];
      continued?: boolean;
    }[];
    citiesToTrack: Set<string>;
  }>({ restaurants: [], citiesToTrack: new Set() });

  // State to track selected filter labels
  const [selectedCityLabel, setSelectedCityLabel] =
    useState<string>("All Cities");
  const [selectedPriceLabel, setSelectedPriceLabel] =
    useState<string>("All Price Ranges");
  const [selectedCuisineLabel, setSelectedCuisineLabel] =
    useState<string>("All Cuisines");
  const [selectedItemsPerPageLabel, setSelectedItemsPerPageLabel] =
    useState<string>("9 per page");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cityRestaurants: { city: string; restaurants: Restaurant[] }[] =
          [];

        for (const city of cityFiles) {
          try {
            const data = await getAllRestaurantsFromCity(city);
            if (data.length > 0) {
              cityRestaurants.push({ city, restaurants: data });
            }
          } catch (cityError) {
            console.error(`Error loading restaurants for ${city}:`, cityError);
          }
        }
        setCityRestaurants(cityRestaurants);
      } catch (error) {
        console.error("Failed to load restaurants:", error);
        setError("Failed to load restaurant data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Extracting filter options
  const getCities = () => {
    return Array.from(new Set(cityRestaurants.map((item) => item.city)));
  };

  const getPriceRanges = () => {
    return Array.from(
      new Set(
        cityRestaurants.flatMap((city) =>
          city.restaurants.map((restaurant) => restaurant.priceRange)
        )
      )
    ).filter(Boolean);
  };

  const getCuisines = () => {
    return Array.from(
      new Set(
        cityRestaurants.flatMap((city) =>
          city.restaurants.map((restaurant) => restaurant.cuisine)
        )
      )
    ).filter(Boolean);
  };

  // Apply filters to restaurants
  const filteredCityRestaurants = cityRestaurants
    .filter(({ city }) => !selectedCity || city === selectedCity)
    .map(({ city, restaurants }) => ({
      city,
      restaurants: restaurants.filter(
        (restaurant) =>
          (!selectedPriceRange ||
            restaurant.priceRange === selectedPriceRange) &&
          (!selectedCuisine || restaurant.cuisine === selectedCuisine)
      ),
    }))
    .filter(({ restaurants }) => restaurants.length > 0);

  // Calculate total restaurants for pagination
  const totalRestaurants = filteredCityRestaurants.reduce(
    (total, city) => total + city.restaurants.length,
    0
  );
  const totalPages = Math.ceil(totalRestaurants / itemsPerPage);

  // Function to calculate which restaurants to display based on pagination
  const calculatePaginatedData = () => {
    let startIndex = 0;
    let endIndex = 0;
    let countSoFar = 0;
    const paginatedRestaurants: {
      city: string;
      restaurants: Restaurant[];
      continued?: boolean;
    }[] = [];
    const citiesToTrack = new Set<string>();

    // Process each city
    for (const cityData of filteredCityRestaurants) {
      const { city, restaurants } = cityData;
      const cityRestaurantsCount = restaurants.length;

      // If we've already passed all restaurants needed for this page, break
      if (countSoFar >= currentPage * itemsPerPage) {
        break;
      }

      // If this city starts before or on the current page
      if (
        countSoFar + cityRestaurantsCount >
        (currentPage - 1) * itemsPerPage
      ) {
        startIndex = Math.max(0, (currentPage - 1) * itemsPerPage - countSoFar);
        endIndex = Math.min(
          cityRestaurantsCount,
          currentPage * itemsPerPage - countSoFar
        );

        // Check if this city was displayed on the previous page
        const continued = previousPageCities.has(city) && currentPage > 1;

        if (startIndex < endIndex) {
          paginatedRestaurants.push({
            city,
            restaurants: restaurants.slice(startIndex, endIndex),
            continued,
          });

          citiesToTrack.add(city);
        }
      }

      countSoFar += cityRestaurantsCount;
    }

    return { paginatedRestaurants, citiesToTrack };
  };

  // Update pagination data when filters, page, or items per page change
  useEffect(() => {
    const { paginatedRestaurants, citiesToTrack } = calculatePaginatedData();
    setPaginatedData({
      restaurants: paginatedRestaurants,
      citiesToTrack,
    });
  }, [
    currentPage,
    itemsPerPage,
    filteredCityRestaurants.length,
    selectedCity,
    selectedPriceRange,
    selectedCuisine,
  ]);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    // Store the current cities before changing page
    if (page > 1 && currentPage !== page) {
      setPreviousPageCities(paginatedData.citiesToTrack);
    } else if (page === 1) {
      // Reset when returning to first page
      setPreviousPageCities(new Set());
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate pagination links
  const renderPaginationLinks = () => {
    const pages = [];

    // Always show first page
    pages.push(
      <PaginationItem key="first">
        <PaginationLink
          onClick={() => handlePageChange(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed
    if (currentPage > 3) {
      pages.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show current page and neighbors
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 1 || i === totalPages) continue; // Skip first and last as they're always shown
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page if more than one page
    if (totalPages > 1) {
      pages.push(
        <PaginationItem key="last">
          <PaginationLink
            onClick={() => handlePageChange(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  // Reset to page 1 when filters or items per page change
  useEffect(() => {
    setCurrentPage(1);
    setPreviousPageCities(new Set());
  }, [selectedCity, selectedPriceRange, selectedCuisine, itemsPerPage]);

  if (loading) {
    return <Loading />;
  }

  if (error || filteredCityRestaurants.length === 0) {
    return (
      <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
        <header>
          <h1>Restaurants</h1>
          <p>{error || "No restaurants available."}</p>
        </header>
      </div>
    );
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1 className="mb-6 font-bold text-3xl">Our Restaurants</h1>

      {/* Filters section */}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-4 mb-8">
        <div>
          <Label htmlFor="city-filter" className="block mb-2">
            City
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="justify-between">
                {selectedCityLabel}
                <ChevronDown className="opacity-50 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[25rem]">
              <DropdownMenuItem
                onClick={() => {
                  setSelectedCity("");
                  setSelectedCityLabel("All Cities");
                }}
              >
                All Cities
              </DropdownMenuItem>
              {getCities().map((city) => (
                <DropdownMenuItem
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setSelectedCityLabel(city);
                  }}
                >
                  {capitalize(city)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <Label htmlFor="price-filter" className="block mb-2">
            Price
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="justify-between">
                {selectedPriceLabel}
                <ChevronDown className="opacity-50 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[25rem]">
              <DropdownMenuItem
                onClick={() => {
                  setSelectedPriceRange("");
                  setSelectedPriceLabel("All Price Ranges");
                }}
              >
                All Price Ranges
              </DropdownMenuItem>
              {getPriceRanges().map((price) => (
                <DropdownMenuItem
                  key={price}
                  onClick={() => {
                    setSelectedPriceRange(price);
                    setSelectedPriceLabel(price);
                  }}
                >
                  {price}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <Label htmlFor="cuisine-filter" className="block mb-2">
            Cuisine
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="justify-between">
                {selectedCuisineLabel}
                <ChevronDown className="opacity-50 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[25rem]">
              <DropdownMenuItem
                onClick={() => {
                  setSelectedCuisine("");
                  setSelectedCuisineLabel("All Cuisines");
                }}
              >
                All Cuisines
              </DropdownMenuItem>
              {getCuisines().map((cuisine) => (
                <DropdownMenuItem
                  key={cuisine}
                  onClick={() => {
                    setSelectedCuisine(cuisine);
                    setSelectedCuisineLabel(cuisine);
                  }}
                >
                  {cuisine}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <Label htmlFor="pagination-filter" className="block mb-2">
            Display
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="justify-between">
                {selectedItemsPerPageLabel}
                <ChevronDown className="opacity-50 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {[6, 9, 12, 15].map((count) => (
                <DropdownMenuItem
                  key={count}
                  onClick={() => {
                    setItemsPerPage(count);
                    setSelectedItemsPerPageLabel(`${count} per page`);
                  }}
                >
                  {count} per page
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div>
        {/* Display restaurants organized by city */}
        {paginatedData.restaurants.length === 0 ? (
          <div className="py-8 text-center">
            <p>No restaurants match your selected filters.</p>
          </div>
        ) : (
          paginatedData.restaurants.map(({ city, restaurants, continued }) => (
            <div
              key={`${city}-${continued ? "continued" : "initial"}`}
              className="mb-12"
            >
              <div className="flex justify-between items-center">
                <h2 className="mb-0 uppercase">
                  {city} Restaurants{" "}
                  {continued && (
                    <span className="text-sm lowercase">(continued)</span>
                  )}
                </h2>
                <Button
                  size="sm"
                  onClick={() =>
                    router.push(`/cruises/restaurants/${city}?city=${city}`)
                  }
                >
                  View All
                </Button>
              </div>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {restaurants.map((restaurant, index) => (
                  <RestaurantCard
                    restaurant={restaurant}
                    city={city}
                    key={index}
                  />
                ))}
              </div>
            </div>
          ))
        )}

        {/* Pagination controls */}
        {totalRestaurants > 0 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {renderPaginationLinks()}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
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
    </div>
  );
}
