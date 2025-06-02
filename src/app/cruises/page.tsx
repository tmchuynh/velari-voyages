"use client";

import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cruiseDepartureLocations } from "@/lib/constants/info/city";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CruisesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("city");
  const [popularSort, setPopularSort] = useState("first"); // "first", "last", "none"

  const filteredDestinations = cruiseDepartureLocations.filter((item) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      item.city.toLowerCase().includes(query) ||
      item.country.toLowerCase().includes(query) ||
      (item.region && item.region.toLowerCase().includes(query)) ||
      (item.state && item.state.toLowerCase().includes(query))
    );
  });

  const secondarySortField = sortBy === "country" ? "region" : "country";

  const sortedDestinations = groupAndSortByProperties(
    filteredDestinations,
    sortBy as keyof (typeof cruiseDepartureLocations)[0],
    secondarySortField as keyof (typeof cruiseDepartureLocations)[0],
    true,
    false,
    false,
    true
  );

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

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Explore Our Exclusive Cruises</h1>
        <h5>
          Discover the world’s most breathtaking destinations with our curated
          cruise experiences.
        </h5>
        <blockquote>
          "The sea, once it casts its spell, holds one in its net of wonder
          forever."
        </blockquote>
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
          <div
            key={index}
            className="group relative shadow-md hover:shadow-lg p-6 border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
          >
            <h2
              className="w-2/3 font-semibold text-2xl underline-offset-2 hover:underline"
              onClick={() => {
                // Use query parameters instead of path parameters
                const queryParams = new URLSearchParams({
                  city: item.city,
                  country: item.country,
                });

                if (item.region) {
                  queryParams.append("region", item.region as string);
                }

                if (item.state && item.state !== item.region) {
                  queryParams.append("state", item.state);
                }

                router.push(
                  `/luxurious-destinations/${
                    item.city
                  }/details?${queryParams.toString()}`
                );
              }}
            >
              {item.city}
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

            <p>
              {(() => {
                const locationParts = [];

                // Add state only if it exists
                if (item.state) locationParts.push(item.state);

                // Add region only if it exists AND is different from state
                if (item.region && item.region !== item.state)
                  locationParts.push(item.region);

                // Always add country if it exists
                if (item.country) locationParts.push(item.country);

                return locationParts.join(", ");
              })()}
            </p>

            <Button
              size={"sm"}
              className="mt-7"
              onClick={() =>
                router.push(
                  `/luxurious-destinations/${item.country}/${item.city}/tours?city=${item.city}&country=${item.country}`
                )
              }
            >
              View Tours
            </Button>
          </div>
        ))}
      </div>

      <h2>Featured Cruises</h2>
      {/* Placeholder for cruise listings */}
      <p>Coming soon! Stay tuned for our exclusive cruise offerings.</p>
    </div>
  );
}
