"use client";

import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cruiseDepartureLocations } from "@/lib/constants/info/city";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cruise } from "@/lib/interfaces/services/cruises";
import { getAllCruises } from "@/lib/utils/get/cruises";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cruises() {
  const router = useRouter();
  const [allCruises, setAllCruises] = useState<Cruise[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("city");
  const [popularSort, setPopularSort] = useState("first"); // "first", "last", "none"
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCruises = async () => {
      try {
        const data = await getAllCruises();
        // Process cruises to set hasPopularDestination flag
        const processedData = data.map((cruise) => ({
          ...cruise,
          hasPopularDestination:
            cruise.departureLocation?.isPopular ||
            cruise.arrivalLocation?.isPopular ||
            false,
        }));
        setAllCruises(processedData);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCruises();
  }, []);

  // Filter destinations based on search
  const filteredDestinations = cruiseDepartureLocations.filter((item) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      item.departureLocation.city.toLowerCase().includes(query) ||
      item.departureLocation.country.toLowerCase().includes(query) ||
      (item.departureLocation.region &&
        item.departureLocation.region.toLowerCase().includes(query)) ||
      (item.departureLocation.state &&
        item.departureLocation.state.toLowerCase().includes(query)) ||
      item.arrivalLocation.city.toLowerCase().includes(query) ||
      item.arrivalLocation.country.toLowerCase().includes(query) ||
      (item.arrivalLocation.region &&
        item.arrivalLocation.region.toLowerCase().includes(query)) ||
      (item.arrivalLocation.state &&
        item.arrivalLocation.state.toLowerCase().includes(query)) ||
      item.category.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  // Determine secondary sort field
  const secondarySortField = sortBy === "country" ? "region" : "country";

  // First sort by the selected criterion (city or country)
  const sortedDestinations = groupAndSortByProperties(
    filteredDestinations,
    sortBy as keyof (typeof allCruises)[0],
    secondarySortField as keyof (typeof allCruises)[0],
    true,
    false,
    false,
    true
  );

  // Then apply popularity sorting if selected
  if (popularSort !== "none") {
    sortedDestinations.sort((a, b) => {
      // If one is popular and the other is not, sort accordingly
      if (a.isPopular !== b.isPopular) {
        if (popularSort === "first") {
          return a.isPopular ? -1 : 1;
        } else {
          return a.isPopular ? 1 : -1;
        }
      }

      // If both have the same popularity status, maintain the original sort order
      return 0;
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Luxurious Destinations</h1>
        <h5>
          Exclusive retreats crafted for unparalleled comfort and elegance
        </h5>
        <blockquote>
          "Every destination felt like a private paradise—luxury redefined in
          every detail. Paragon Trails transformed our travel dreams into
          unforgettable realities." — Emily Carter, Santorini & Amalfi Coast
        </blockquote>
        <p>
          Discover the epitome of luxury travel with Paragon Trails, where every
          destination is a masterpiece of elegance and comfort. From the
          sun-kissed shores of Santorini to the breathtaking Amalfi Coast, our
          exclusive retreats are designed to redefine your travel experience.
          Immerse yourself in the beauty of these iconic locations, where every
          detail is meticulously crafted to ensure your journey is nothing short
          of extraordinary. Whether you're exploring the ancient ruins of Rome
          or savoring the culinary delights of Tuscany, Paragon Trails offers a
          seamless blend of luxury and adventure. Join us as we take you on a
          journey through the world's most luxurious destinations, where every
          moment is an unforgettable experience. Let Paragon Trails transform
          your travel dreams into reality, creating memories that will last a
          lifetime. Experience the world like never before with our curated
          selection of luxurious retreats, where comfort meets elegance in every
          detail. Discover the art of luxury travel with Paragon Trails, where
          every destination is a gateway to unparalleled comfort and
          sophistication.
        </p>
      </header>

      <section>
        <ContactDepartmentCard department="Ports & Itinerary Planning" />
      </section>

      <div className="space-y-4 mb-8">
        <div className="flex md:flex-row flex-col justify-between items-start gap-4">
          <div className="w-full">
            <Label>
              <strong>Search</strong>
            </Label>
            <Input
              type="text"
              className="mt-2"
              placeholder="Search by city, country, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="space-y-2">
              <Label>
                <strong>Sort by:</strong>
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sort option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city">City</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>
                <strong>Popular:</strong>
              </Label>
              <Select value={popularSort} onValueChange={setPopularSort}>
                <SelectTrigger>
                  <SelectValue placeholder="Select popularity filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No priority</SelectItem>
                  <SelectItem value="first">Show first</SelectItem>
                  <SelectItem value="last">Show last</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground text-sm">
          {filteredDestinations.length} destinations found
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedDestinations.map((item, index) => (
          <Card
            key={index}
            className="group relative shadow-md hover:shadow-lg p-6 border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
          >
           <CardContent> 
            <h2
              className="w-7/8 underline-offset-2 hover:underline"
              onClick={() => {
                // Use query parameters instead of path parameters
                const queryParams = new URLSearchParams({
                  country: item.country,
                  city: item.city,
                });

                router.push(
                  `/cruises/cruise-categories/velari-voyages-cruises/${
                    item.country
                  }/${item.city
                  }?${queryParams.toString()}`
                );
              }}
            >
              {item.city} - {item.country}
            </h2>

            {item.isPopular && (
              <Badge
                size={"sm"}
                variant={"outline"}
                className="top-4 right-4 absolute uppercase"
              >
                Popular
              </Badge>
            )}

            <Button
              size={"sm"}
              className="mt-7"
              onClick={() =>
                router.push(
                  `/cruises/cruise-categories/velari-voyages-cruises/${item.departureLocation.country}/${item.departureLocation.city}?city=${item.departureLocation.city}&country=${item.departureLocation.country}`
                )
              }
            >
              View Tours
            </Button></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
