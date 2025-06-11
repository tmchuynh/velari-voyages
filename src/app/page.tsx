"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { cruiseDepartureLocations } from "@/lib/constants/info/city.ts";
import { testimonials } from "@/lib/constants/info/testimonials";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useSmallScreen from "@/hooks/useSmallScreen";
import useMediumScreen from "@/hooks/useMediumScreen";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Hero Section */}
      <div className="flex md:flex-row flex-col items-center gap-7 mb-10 md:mb-16">
        <div className="space-y-6 md:w-1/2">
          <header className="mb-8">
            <h1 className="text-left">Sail Beyond Expectations</h1>
            <h5 className="text-left">Where Luxury Meets Discovery</h5>
            <p>
              Step aboard Velari Voyages and enter a world where refined
              elegance, personalized service, and breathtaking destinations
              redefine the cruising experience. Our curated journeys blend
              five-star comfort with immersive exploration, offering you the
              freedom to travel the world without compromise.
            </p>
          </header>
          <div className="flex sm:flex-row flex-col gap-4">
            <Button>Book Your Cruise</Button>
            <Button onClick={() => router.push("#")}>View Destinations</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
