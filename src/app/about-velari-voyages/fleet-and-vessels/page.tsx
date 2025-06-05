"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cruiseVessels } from "@/lib/constants/info/fleetsAndVessels";
import { getVesselTypeDescription } from "@/lib/utils/get/cruises";
import { useState } from "react";

export default function FleetAndVessels() {
  // Group vessels by type
  const vesselsByType = cruiseVessels.reduce(
    (acc, vessel) => {
      const type = vessel.type;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(vessel);
      return acc;
    },
    {} as Record<string, typeof cruiseVessels>
  );

  // Get all vessel types
  const vesselTypes = Object.keys(vesselsByType);

  // Pagination state for each vessel type
  const [currentPages, setCurrentPages] = useState<Record<string, number>>(
    vesselTypes.reduce(
      (acc, type) => {
        acc[type] = 1;
        return acc;
      },
      {} as Record<string, number>
    )
  );

  // Items per page
  const itemsPerPage = 3;

  // Handle page change
  const handlePageChange = (type: string, page: number) => {
    setCurrentPages((prev) => ({
      ...prev,
      [type]: page,
    }));
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 pb-16 w-10/12 md:w-11/12">
      <header className="mb-10">
        <h1>The Velari Fleet: Crafted for the Journey</h1>
        <h5>Where Design, Discovery, and Discretion Set Sail</h5>
        <h5>
          {cruiseVessels.length} vessels across {vesselTypes.length} categories
        </h5>
        <blockquote>
          "A vessel is not just a means of travel — it's where the journey
          begins, where stories unfold, and where elegance moves with purpose."
          <footer className="mt-2 font-semibold">
            — Founding Director, Velari Voyages
          </footer>
        </blockquote>
      </header>

      <div className="mb-12">
        <p>
          At Velari Voyages, every ship is more than a mode of transport — it's
          a curated space for exploration, reflection, and elevated comfort. Our
          fleet of boutique vessels is intentionally designed to serve the
          modern explorer: intimate in scale, rich in character, and equipped
          for access to the world's most remarkable coastlines and hidden
          harbors. Whether sailing the Adriatic, navigating the Amazon, or
          cruising through the remote polar regions, each voyage is shaped by
          seamless luxury, cultural immersion, and a deep respect for place.
          This is travel without compromise — refined, responsible, and entirely
          personal.
        </p>
        <p>
          Our diverse fleet offers experiences tailored to every type of
          traveler, from intimate river cruises to luxury ocean voyages.
        </p>
      </div>

      {/* Display vessels by type */}
      {vesselTypes.map((type) => {
        const vessels = vesselsByType[type];
        const totalPages = Math.ceil(vessels.length / itemsPerPage);
        const currentPage = currentPages[type];
        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;
        const currentVessels = vessels.slice(startIdx, endIdx);

        return (
          <section key={type} className="mb-16">
            <div className="flex justify-between items-center pb-2 border-b">
              <h2>{type}s</h2> <Badge>{vessels.length} vessels</Badge>
            </div>
            <p>{getVesselTypeDescription(type)}</p>

            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
              {currentVessels.map((vessel) => (
                <Card
                  key={vessel.name}
                  className="flex flex-col justify-between p-0 h-full overflow-hidden"
                >
                  <CardContent className="pt-6">
                    <h3>{vessel.name}</h3>

                    <p>{vessel.description}</p>

                    <div className="space-y-2 mt-4 text-sm">
                      <div className="flex items-center gap-2 justce">
                        <h5>Home Port:</h5> {vessel.homePort.city},{" "}
                        {vessel.homePort.country}
                      </div>
                      <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                          <h5 className="font-medium">Capacity:</h5>{" "}
                          {vessel.capacity} passengers
                        </div>
                        <div className="gap-5 grid grid-cols-2 lg:col-span-3">
                          <div>
                            <h5 className="font-medium">Length:</h5>{" "}
                            {vessel.length}m
                          </div>
                          <div>
                            <h5 className="font-medium">Built:</h5>{" "}
                            {vessel.yearBuilt}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-3">
                      {vessel.isLuxuryVessel && (
                        <Badge variant={"outline"} size={"sm"}>
                          Luxury
                        </Badge>
                      )}
                      {vessel.isPetFriendly && (
                        <Badge variant={"outline"} size={"sm"}>
                          Pet Friendly
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted pb-6 border-t">
                    <p>
                      Speed: {vessel.speed} knots • Width: {vessel.width}m
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-6">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        handlePageChange(type, Math.max(1, currentPage - 1))
                      }
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={currentPage === i + 1}
                        onClick={() => handlePageChange(type, i + 1)}
                        className="cursor-pointer"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(
                          type,
                          Math.min(totalPages, currentPage + 1)
                        )
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </section>
        );
      })}

      <section>
        <h2>Our Fleet Philosophy</h2>
        <p>
          At Velari Voyages, we believe the vessel is not merely a means of
          arrival — it is a destination in itself. Every ship in our fleet is a
          reflection of our core philosophy: that the quality of your
          surroundings shapes the quality of your journey. That’s why our fleet
          isn’t built around size or spectacle — it’s built around purpose,
          experience, and perspective.
        </p>
        <p>
          We’ve thoughtfully curated a diverse collection of vessels — from our
          elegantly appointed flagship mega-yachts to agile expedition-class
          ships and river cruisers that navigate the world’s most storied inland
          waterways. Each class is designed to match a distinct style of travel,
          whether that’s indulgent leisure, cultural immersion, remote
          discovery, or serene retreat.
        </p>
        <p>
          Yet across this diversity, there is a singular thread that unites them
          all: our uncompromising standards for service, design, and
          sustainability. Every Velari vessel is operated with the highest
          levels of crew-to-guest ratios, eco-conscious technologies, and
          refined onboard programming. Materials are chosen not only for their
          luxury but for their longevity and environmental integrity. Interiors
          are designed to inspire calm and curiosity, with an emphasis on
          natural light, intuitive flow, and unobstructed connection to the sea.
        </p>
        <p>
          We approach fleet design not as an arms race, but as a craft —
          selecting and shaping each ship to feel less like a hotel and more
          like a sanctuary. A place where every moment — from the first welcome
          aboard to the quiet sunrise on deck — feels considered, elevated, and
          personal.
        </p>
        <p>
          Because to us, the voyage doesn’t begin at the destination. It begins
          the moment you step on board.
        </p>
      </section>
    </div>
  );
}
