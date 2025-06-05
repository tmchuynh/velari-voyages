"use client";

import Loading from "@/components/Loading";
import MenuItemDisplay from "@/components/MenuItemDisplay";
import RestaurantHours from "@/components/RestaurantHours";
import RestaurantInfoCard from "@/components/RestaurantInfoCard";
import useSmallScreen from "@/hooks/useSmallScreen";
import { Restaurant, RestaurantMenu } from "@/lib/types/types";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatKebebToTitleCase } from "@/lib/utils/format.ts";
import {
  getRestaurantByName,
  getRestaurantMenuByName,
} from "@/lib/utils/get/restaurants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantMenuPage() {
  const searchParams = useSearchParams();
  const restaurant = searchParams.get("restaurant");
  const city = searchParams.get("city");
  const [loading, setLoading] = useState(true);
  const isSmallScreen = useSmallScreen();

  console.log("Restaurant:", restaurant?.replace("Menu", ""));
  console.log("City:", city);

  const [restaurantData, setRestaurantData] = useState<RestaurantMenu[]>([]);
  const [restaurantInfo, setRestaurantInfo] = useState<Restaurant>();

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

  useEffect(() => {
    if (restaurant && city) {
      setLoading(true);
      const getRestaurantData = async () => {
        try {
          const data = await getRestaurantByName(city, restaurant);
          setRestaurantInfo(data);
          if (!data) {
            console.warn(`No restaurant found with name: ${restaurant}`);
          }
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch restaurant data:", error);
        } finally {
          setLoading(false);
        }
      };
      getRestaurantData();
    }
  }, [
    restaurant,
    city,
    setRestaurantInfo,
    setLoading,
    restaurantData.length > 0,
  ]);

  console.log("Restaurant Info:", restaurantInfo);

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
            {restaurantInfo && (
              <>
                <blockquote>{restaurantInfo.description}</blockquote>
                <h5>{displayRatingStars(restaurantInfo.rating)}</h5>
              </>
            )}
          </header>

          <div className="gap-4 grid lg:grid-cols-2 my-8">
            {restaurantInfo && (
              <RestaurantInfoCard restaurantInfo={restaurantInfo} />
            )}
            {isSmallScreen ? (
              <RestaurantHours
                openingHours={restaurantInfo?.openingHours}
                variant="compact"
              />
            ) : (
              <RestaurantHours
                openingHours={restaurantInfo?.openingHours}
                variant="page"
              />
            )}
          </div>

          <section className="divide-y-2 divide-secondary">
            {restaurantData.map((menu, index) => {
              return (
                <div key={index} className="mb-8">
                  <h2 className="mb-0">{menu.title}</h2>
                  <p>{menu.description}</p>
                  <section className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                    {menu.category.map((menuCategory, itemIndex) => (
                      <section key={itemIndex} className="mt-4">
                        <h3 className="mb-2 underline underline-offset-4 decoration-tertiary">
                          {menuCategory.name}
                        </h3>
                        <h5 className="mb-3 w-5/6">
                          {menuCategory.description}
                        </h5>
                        {menuCategory.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="py-1 w-full">
                            <MenuItemDisplay
                              item={item}
                              menuTitle={menu.title}
                              categoryName={menuCategory.name}
                            />
                          </div>
                        ))}
                      </section>
                    ))}
                  </section>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </>
  );
}
