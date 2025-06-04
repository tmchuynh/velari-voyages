"use client";
import Loading from "@/components/Loading";
import { Card } from "@/components/ui/card";
import { cityFiles } from "@/lib/constants/info/city";
import { Restaurant } from "@/lib/types/types";
import { formatTitleToKebabCase } from "@/lib/utils/format";
import { getAllRestaurantsFromCity } from "@/lib/utils/get";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RestaurantPage() {
  const [cityRestaurants, setCityRestaurants] = useState<
    { city: string; restaurants: Restaurant[] }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cityRestaurants: { city: string; restaurants: Restaurant[] }[] =
          [];
        const city: string = "";

        for (const city of cityFiles) {
          try {
            const data = await getAllRestaurantsFromCity(city);
            if (data.length > 0) {
              cityRestaurants.push({ city, restaurants: data });
            }
          } catch (cityError) {
            console.error(`Error loading restaurants for ${city}:`, cityError);
          }
          setCityRestaurants(cityRestaurants);
        }
      } catch (error) {
        console.error("Failed to load restaurants:", error);
        setError("Failed to load restaurant data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("City Restaurants:", cityRestaurants);
  const allRestaurants: Restaurant[] = cityRestaurants.flatMap(
    (city) => city.restaurants
  );
  console.log("All Restaurants:", allRestaurants);

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

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cityRestaurants.map(({ city, restaurants }, index) =>
          restaurants.map((restaurant, index) => {
            const fileName = formatTitleToKebabCase(restaurant.name) + "Menu";

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
                  <h2 className="mb-2 font-bold text-xl">{restaurant.name}</h2>
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
          })
        )}
      </div>
    </div>
  );
}
