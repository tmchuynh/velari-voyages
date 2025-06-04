"use client";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { cityFiles } from "@/lib/constants/info/city.ts";
import { Restaurant } from "@/lib/types/types";
import { capitalize, formatTitleToKebabCase } from "@/lib/utils/format.ts";
import { getAllRestaurantsFromCity } from "@/lib/utils/get.ts";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RestaurantPage() {
  const [cityRestaurants, setCityRestaurants] = useState<
    { city: string; restaurants: Restaurant[] }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("");

  // State to track selected filter labels
  const [selectedCityLabel, setSelectedCityLabel] =
    useState<string>("All Cities");
  const [selectedPriceLabel, setSelectedPriceLabel] =
    useState<string>("All Price Ranges");
  const [selectedCuisineLabel, setSelectedCuisineLabel] =
    useState<string>("All Cuisines");

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

  const allRestaurants: Restaurant[] = filteredCityRestaurants.flatMap(
    (city) => city.restaurants
  );

  if (loading) {
    return <Loading />;
  }

  if (error || allRestaurants.length === 0) {
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
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mb-8">
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
      </div>

      <div>
        {/* Display restaurants organized by city */}
        {filteredCityRestaurants.length === 0 ? (
          <div className="py-8 text-center">
            <p>No restaurants match your selected filters.</p>
          </div>
        ) : (
          filteredCityRestaurants.map(({ city, restaurants }) => (
            <div key={city} className="mb-12">
              <h2 className="mb-4 pb-2 border-b font-semibold text-2xl">
                {city}
              </h2>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {restaurants.map((restaurant, index) => {
                  const fileName =
                    formatTitleToKebabCase(restaurant.name) + "Menu";

                  return (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        {restaurant.images && restaurant.images.length > 0 ? (
                          <Image
                            src={restaurant.images[0]}
                            alt={restaurant.name}
                            className="w-full h-full object-cover object-center"
                            fill
                          />
                        ) : (
                          <div className="flex justify-center items-center bg-gray-200 w-full h-full">
                            No image available
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h2 className="mb-2 font-bold text-xl">
                          {restaurant.name}
                        </h2>
                        <p className="mb-1 text-gray-500 text-sm">
                          Cuisine: {restaurant.cuisine}
                        </p>
                        <p className="mb-3 text-gray-500 text-sm">
                          Price Range: {restaurant.priceRange}
                        </p>
                        <p className="mb-4 text-sm line-clamp-2">
                          {restaurant.description}
                        </p>

                        <Link
                          href={`/cruises/restaurants/${restaurant.name
                            .toLowerCase()
                            .replace(
                              /\s+/g,
                              "-"
                            )}?restaurant=${fileName}&city=${city}`}
                          className="text-primary text-sm hover:underline"
                        >
                          View Menu & Details
                        </Link>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
