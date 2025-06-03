"use client";

import { generalCruiseFAQs } from "@/lib/constants/info/faqs";
import { useEffect, useState } from "react";
import { cruiseDepartureLocations } from "@/lib/constants/info/city";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import {
  getAllCities,
  getAllResturantsFromCity,
  getAllResturantMenusFromCity,
  getResturantMenuByName,
} from "@/lib/utils/get";
import { Location, Resturant, ResturantMenu } from "@/lib/types/types";

// Interface for city data with restaurants and menus
interface CityData {
  city: Location;
  restaurants: Resturant[];
  menus: ResturantMenu[];
  isExpanded: boolean;
}

export default function FrequentlyAskedQuestions() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [citiesData, setCitiesData] = useState<CityData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch all cities and their data
    const fetchAllCityData = async () => {
      try {
        setLoading(true);
        const citiesWithData: CityData[] = [];

        // For each city, fetch restaurants and menus
        for (const city of cruiseDepartureLocations) {
          const cityRestaurants = await getAllResturantsFromCity(city.city);

          for (const restaurant of cityRestaurants) {
            // Fetch menus for each restaurant
            const menus = await getResturantMenuByName(
              city.city,
              restaurant.name
            );
            restaurant.menus = menus; // Attach menus to restaurant
          }

          citiesWithData.push({
            city,
            restaurants: cityRestaurants,
            isExpanded: false,
          });
        }

        setCitiesData(citiesWithData);
      } catch (error) {
        console.error("Error fetching city data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCityData();
  }, []);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleCityExpansion = (index: number) => {
    setCitiesData((prevData) =>
      prevData.map((cityData, i) =>
        i === index
          ? { ...cityData, isExpanded: !cityData.isExpanded }
          : cityData
      )
    );
  };

  console.log("Cities Data:", citiesData);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Frequently Asked Questions</h1>
        <h5>Your questions answered, so you can focus on your journey</h5>
        <blockquote>
          "From booking to boarding, every detail was handled with care and
          professionalism. I felt supported every step of the way." – Sarah L.,
          Frequent Traveler
        </blockquote>
      </header>

      <div className="space-y-4 mb-12">
        {generalCruiseFAQs.map((faq, index) => (
          <div
            key={index}
            className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
          >
            <button
              className="flex justify-between items-center p-5 w-full font-medium text-left focus:outline-none"
              onClick={() => toggleQuestion(index)}
              aria-expanded={expandedIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3>{faq.question}</h3>
              <span className="text-primary">
                {expandedIndex === index ? (
                  <FaArrowUp className="inline" />
                ) : (
                  <FaArrowDown className="inline" />
                )}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              aria-hidden={expandedIndex !== index}
            >
              <div className="p-5 border-t-2 border-tertiary">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="mb-6 font-bold text-2xl">
          Our Port Cities and Dining Options
        </h2>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="border-primary border-t-2 border-b-2 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {citiesData.map((cityData, cityIndex) => (
              <div
                key={cityIndex}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCityExpansion(cityIndex)}
                  className="flex justify-between items-center bg-background hover:bg-muted p-4 w-full text-left transition-colors"
                >
                  <h3 className="font-medium text-xl">
                    {cityData.city.city}, {cityData.city.country}
                  </h3>
                  <span>
                    {cityData.isExpanded ? (
                      <FaArrowUp className="text-primary" />
                    ) : (
                      <FaArrowDown className="text-primary" />
                    )}
                  </span>
                </button>

                {cityData.isExpanded && (
                  <div className="p-4">
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">
                        About {cityData.city.city}
                      </h4>
                      <p className="mb-2 text-sm italic">
                        "{cityData.city.quote}"
                      </p>
                      <p className="text-sm">{cityData.city.additionalInfo}</p>
                    </div>

                    <div className="mt-6">
                      <h4 className="mb-4 font-medium">
                        Restaurants ({cityData.restaurants.length})
                      </h4>

                      {cityData.restaurants.length > 0 ? (
                        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          {cityData.restaurants.map((restaurant, resIndex) => (
                            <div
                              key={resIndex}
                              className="p-3 border rounded-md"
                            >
                              <h5 className="font-medium">{restaurant.name}</h5>
                              <p className="text-muted-foreground text-sm">
                                {restaurant.description}
                              </p>

                              {/* Find menus for this restaurant */}
                              <div className="mt-2">
                                <h6 className="font-medium text-primary text-xs uppercase tracking-wide">
                                  Menu Items
                                </h6>
                                <ul className="mt-1 text-sm list-disc list-inside">
                                  {cityData.menus
                                    .filter(
                                      (menu) =>
                                        menu.restaurantId === restaurant.id
                                    )
                                    .slice(0, 3) // Show only first 3 items
                                    .map((menuItem, menuIndex) => (
                                      <li key={menuIndex}>{menuItem.name}</li>
                                    ))}
                                  {cityData.menus.filter(
                                    (menu) =>
                                      menu.restaurantId === restaurant.id
                                  ).length > 3 && (
                                    <li className="mt-1 text-primary text-xs list-none">
                                      + more items...
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          No restaurants available for this city.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
