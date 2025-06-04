"use client";

import Loading from "@/components/Loading";
import { RestaurantMenu } from "@/lib/types/types";
import {
  formatKebebToTitleCase,
  formatNumberToCurrency,
} from "@/lib/utils/format.ts";
import { getRestaurantMenuByName } from "@/lib/utils/get.ts";
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

          <section>
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
                  <div className="gap-4 grid lg:grid-cols-2">
                    <section>
                      {menu.category
                        .slice(0, split)
                        .map((menuCategory, itemIndex) => (
                          <section key={itemIndex} className="mt-4">
                            <h3>{menuCategory.name}</h3>
                            {menuCategory.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="py-1 w-full">
                                <div className="flex-col space-y-1">
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-wrap items-center">
                                      <h4 className="no-underline">
                                        {item.name}
                                      </h4>
                                      {item.isVegetarian && (
                                        <span className="ml-2 text-green-600">
                                          (Vegetarian)
                                        </span>
                                      )}
                                      {item.isVegan && (
                                        <span className="ml-2 text-green-600">
                                          (Vegan)
                                        </span>
                                      )}
                                      {item.isGlutenFree && (
                                        <span className="ml-2 text-blue-600">
                                          (Gluten Free)
                                        </span>
                                      )}
                                      {item.isHalal && (
                                        <span className="ml-2 text-purple-600">
                                          (Halal)
                                        </span>
                                      )}
                                      {item.isKosher && (
                                        <span className="ml-2 text-orange-600">
                                          (Kosher)
                                        </span>
                                      )}
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
                    <section>
                      {menu.category
                        .slice(split, menu.category.length)
                        .map((menuCategory, itemIndex) => (
                          <section key={itemIndex} className="mt-4">
                            <h3>{menuCategory.name}</h3>
                            {menuCategory.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="py-1">
                                <div className="flex-col space-y-1">
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-wrap items-center">
                                      <h4 className="no-underline">
                                        {item.name}
                                      </h4>
                                      {item.isVegetarian && (
                                        <span className="ml-2 text-green-600">
                                          (Vegetarian)
                                        </span>
                                      )}
                                      {item.isVegan && (
                                        <span className="ml-2 text-green-600">
                                          (Vegan)
                                        </span>
                                      )}
                                      {item.isGlutenFree && (
                                        <span className="ml-2 text-blue-600">
                                          (Gluten Free)
                                        </span>
                                      )}
                                      {item.isHalal && (
                                        <span className="ml-2 text-purple-600">
                                          (Halal)
                                        </span>
                                      )}
                                      {item.isKosher && (
                                        <span className="ml-2 text-orange-600">
                                          (Kosher)
                                        </span>
                                      )}
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
                </div>
              );
            })}
          </section>
        </div>
      )}
    </>
  );
}
