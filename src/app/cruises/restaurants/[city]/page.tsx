"use client";

import RestaurantDetailsCard from "@/components/cards/RestaurantDetailsCard";
import Loading from "@/components/Loading";
import RestaurantIconKey from "@/components/RestaurantIconKey";
import { Restaurant } from "@/lib/types/types";
import { capitalize } from "@/lib/utils/format";
import { getAllRestaurantsFromCity } from "@/lib/utils/get/restaurants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CityRestaurantsPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");

  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!city) {
      console.error("City not provided in search params");
      return;
    }
    const fetchRestaurants = async () => {
      try {
        const data = await getAllRestaurantsFromCity(city);
        setAllRestaurants(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load restaurants:", error);
      }
    };
    fetchRestaurants();
  }, [city, setAllRestaurants]);

  console.log("All Restaurants:", allRestaurants);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {city && (
        <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
          <header>
            <h1> Restaurants in {capitalize(city)}</h1>
            <h5> Explore the best dining options in {capitalize(city)}.</h5>
          </header>

          <RestaurantIconKey compact className="my-4" />

          <section>
            {allRestaurants.length > 0 && (
              <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {allRestaurants.map((restaurant, index) => (
                  <RestaurantDetailsCard
                    restaurant={restaurant}
                    city={city}
                    key={index}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
