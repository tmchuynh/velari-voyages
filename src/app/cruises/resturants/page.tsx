"use client";
import { Card } from "@/components/ui/card";
import { cityFiles } from "@/lib/constants/info/city";
import { Resturant } from "@/lib/types/types";
import { getAllResturantsFromCity } from "@/lib/utils/get";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResturantPage() {
  const [cityResturants, setCityResturants] = useState<
    { city: string; resturants: Resturant[] }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cityResturants: { city: string; resturants: Resturant[] }[] = [];
        const city: string = "";

        for (const city of cityFiles) {
          try {
            const data = await getAllResturantsFromCity(city);
            if (data.length > 0) {
              cityResturants.push({ city, resturants: data });
            }
          } catch (cityError) {
            console.error(`Error loading restaurants for ${city}:`, cityError);
          }
          setCityResturants(cityResturants);
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

  console.log("City Restaurants:", cityResturants);
  const allResturants: Resturant[] = cityResturants.flatMap(
    (city) => city.resturants
  );
  console.log("All Restaurants:", allResturants);

  if (loading) {
    return (
      <div className="mx-auto p-6 container">
        <h1 className="mb-6 font-bold text-3xl">Restaurants</h1>
        <p>Loading restaurants...</p>
      </div>
    );
  }

  if (error || allResturants.length === 0) {
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
        {allResturants.map((restaurant, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              {restaurant.images && restaurant.images.length > 0 ? (
                <Image
                  src={restaurant.images[0]}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
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
                href={`/cruises/resturants/${restaurant.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}?resturant=${restaurant.name}`}
                className="text-primary text-sm hover:underline"
              >
                View Menu & Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
