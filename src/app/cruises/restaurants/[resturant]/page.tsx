"use client";

import Loading from "@/components/Loading";
import { RestaurantMenu } from "@/lib/types/types";
import { formatKebebToTitleCase } from "@/lib/utils/format";
import { getRestaurantMenuByName } from "@/lib/utils/get";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantMenuPage() {
  const searchParams = useSearchParams();
  const restaurant = searchParams.get("restaurant");
  const city = searchParams.get("city");
  const [loading, setLoading] = useState(true);

  console.log("Restaurant:", restaurant?.replace("Menu", ""));
  console.log("City:", city);

  const [restaurantData, setRestaurantData] = useState<RestaurantMenu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!restaurant || !city) {
        console.error("Restaurant or city not provided in search params");
        return;
      }

      setLoading(true);

      try {
        const data = await getRestaurantMenuByName(city, restaurant);
        if (data && data.length > 0) {
          restaurantData.push(...data);
        }
        if (restaurantData.length === 0) {
          console.warn(`No menu found for restaurant: ${restaurant}`);
        }
        setRestaurantData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch restaurant data:", error);
      }
    };

    fetchData();
  }, [restaurant]);

  if (loading) {
    return <Loading />;
  }

  console.log("Restaurant Data:", restaurantData);
  if (!restaurantData || restaurantData.length === 0) {
    return (
      <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
        <header>
          <h1>The menu for {restaurant} will be uploaded soon!</h1>
        </header>
      </div>
    );
  }

  return (
    <>
      {restaurant && (
        <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
          <header>
            <h1>
              {formatKebebToTitleCase(restaurant).replace("menu", "")} Menu
            </h1>
          </header>
        </div>
      )}
    </>
  );
}
