"use client";

import { RestaurantMenu } from "@/lib/types/types";
import { getRestaurantMenuByName } from "@/lib/utils/get";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantMenuPage() {
  const searchParams = useSearchParams();
  const restaurant = searchParams.get("restaurant");
  const city = searchParams.get("city");

  const [restaurantData, setRestaurantData] = useState<RestaurantMenu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!restaurant || !city) {
        console.error("Restaurant or city not provided in search params");
        return;
      }

      try {
        const data = await getRestaurantMenuByName(city, restaurant);
        if (data && data.length > 0) {
          restaurantData.push(...data);
        }
        if (restaurantData.length === 0) {
          console.warn(`No menu found for restaurant: ${restaurant}`);
        }
        setRestaurantData(data);
      } catch (error) {
        console.error("Failed to fetch restaurant data:", error);
      }
    };

    fetchData();
  }, [restaurant]);

  console.log("Restaurant Data:", restaurantData);
  if (!restaurantData || restaurantData.length === 0) {
    return (
      <div>
        <h1>Restaurant Menu</h1>
        <p>No menu available for this restaurant.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <p>This page will display the menu for a specific restaurant.</p>
    </div>
  );
}
