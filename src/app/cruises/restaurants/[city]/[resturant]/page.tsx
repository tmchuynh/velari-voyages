"use client";

import Loading from "@/components/Loading";
import RestaurantIconKey from "@/components/RestaurantIconKey";
import RestaurantHours from "@/components/ui/RestaurantHours";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useSmallScreen from "@/hooks/useSmallScreen";
import { Restaurant, RestaurantMenu } from "@/lib/types/types";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import {
  formatKebebToTitleCase,
  formatNumberToCurrency,
} from "@/lib/utils/format.ts";
import {
  getRestaurantByName,
  getRestaurantMenuByName,
} from "@/lib/utils/get.ts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStarOfDavid } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";
import { GiMeat } from "react-icons/gi";
import { RiPlantFill, RiSeedlingFill } from "react-icons/ri";

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

          <div className="gap-4 grid lg:grid-cols-9 my-8">
            {" "}
            {isSmallScreen ? (
              <RestaurantIconKey compact className="my-4" />
            ) : (
              <RestaurantIconKey className="lg:col-span-5 mb-15" />
            )}
            <RestaurantHours
              openingHours={restaurantInfo?.openingHours}
              variant="page"
              className="lg:col-span-4"
            />
          </div>

          <section className="divide-y-2 divide-secondary">
            {restaurantData.map((menu, index) => {
              let split = 4; // Default split value

              if (menu.category.length > 5) {
                split = 5;
              } else if (menu.category.length === 2) {
                split = 1;
              } else {
                split = 2;
              }

              return (
                <div key={index} className="mb-8">
                  <h2>{menu.title}</h2>
                  <p>{menu.description}</p>
                  <section className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                    {menu.category.map((menuCategory, itemIndex) => (
                      <section key={itemIndex} className="mt-4">
                        <h3 className="underline underline-offset-4 decoration-tertiary">
                          {menuCategory.name}
                        </h3>
                        {menuCategory.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="py-1 w-full">
                            <div className="flex-col space-y-1">
                              <div className="flex justify-between md:items-center">
                                <div className="flex flex-col flex-wrap lg:flex-auto justify-center gap-2 w-full h-full">
                                  <h4 className="w-10/12 no-underline">
                                    {item.name}
                                  </h4>
                                  <div>
                                    {item.isVegetarian && (
                                      <Tooltip>
                                        <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                                          <RiPlantFill />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Vegetarian Options</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    )}
                                    {item.isVegan && (
                                      <Tooltip>
                                        <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                                          <RiSeedlingFill />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Vegan Options</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    )}
                                    {item.isGlutenFree && (
                                      <Tooltip>
                                        <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                                          <FaWheatAwn />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Gluten-Free Options</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    )}
                                    {item.isHalal && (
                                      <Tooltip>
                                        <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                                          <GiMeat />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Halal Options</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    )}
                                    {item.isKosher && (
                                      <Tooltip>
                                        <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                                          <FaStarOfDavid />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Kosher Options</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    )}
                                  </div>
                                </div>
                                <p>
                                  {formatNumberToCurrency(item.price, 2, 2)}
                                </p>
                              </div>
                              <div>
                                {item.description && (
                                  <p>{" - " + item.description}</p>
                                )}
                              </div>
                            </div>
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
