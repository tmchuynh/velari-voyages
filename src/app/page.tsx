"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cruiseDepartureLocations } from "@/lib/constants/info/city.ts";
import { testimonials } from "@/lib/constants/info/testimonials";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const sortedDestinations = groupAndSortByProperties(
    cruiseDepartureLocations,
    "isPopular",
    "city"
  );

  const featuresList = [
    {
      title: "Luxury Ocean Suites",
      description:
        "Indulge in spacious staterooms with private balconies and premium amenities for the ultimate comfort at sea.",
      icon: "🛳️",
    },
    {
      title: "Global Destinations",
      description:
        "Explore breathtaking ports of call across the Mediterranean, Caribbean, Alaska, and exotic locations worldwide.",
      icon: "🌏",
    },
    {
      title: "Gourmet Dining",
      description:
        "Savor world-class cuisine prepared by renowned chefs using fresh, locally-sourced ingredients from our ports of call.",
      icon: "🍽️",
    },
    {
      title: "Curated Shore Excursions",
      description:
        "Discover local cultures and hidden gems with our expertly guided tours at each destination.",
      icon: "🏛️",
    },
    {
      title: "Onboard Entertainment",
      description:
        "Enjoy Broadway-caliber shows, live music, casinos, and enrichment programs throughout your voyage.",
      icon: "🎭",
    },
    {
      title: "Personalized Service",
      description:
        "Experience attentive care from our professional crew dedicated to making your journey extraordinary.",
      icon: "👨‍✈️",
    },
  ];
  return (
    <main className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Hero Section */}
      <div>
        <div className="flex md:flex-row flex-col items-center">
          <div className="space-y-6 md:w-1/2">
            <h1>Experience Luxury at Sea</h1>
            <p>
              Embark on unforgettable voyages with Velari Voyages, your premier
              cruise line offering extraordinary journeys to the world's most
              captivating destinations.
            </p>
            <div className="flex sm:flex-row flex-col gap-4">
              <Button>Book Your Cruise</Button>
              <Button>View Destinations</Button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2">
            <div className="relative shadow-2xl rounded-lg w-full h-64 md:h-96 overflow-hidden">
              {/* Replace with actual cruise ship image */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/30" />
              <div className="w-full h-full">
                {/* Placeholder for cruise image */}
                <div className="flex justify-center items-center h-full">
                  Cruise Ship Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section>
        <div>
          <div className="mb-16 text-center">
            <h2>Why Choose Velari Voyages</h2>
            <p>
              We combine luxury amenities with extraordinary destinations to
              create unforgettable cruise experiences.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="shadow-lg hover:shadow-xl p-6 rounded-lg transition-shadow"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className="">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section>
        <div>
          <div className="mb-16 text-center">
            <h2>Popular Destinations</h2>
            <p>Discover our most beloved ports of call.</p>

            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {sortedDestinations.map((trail, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl p-6 rounded-lg min-h-[12rem] transition-shadow"
                >
                  <CardContent className="relative flex flex-col justify-center items-center h-full">
                    {trail.isPopular && (
                      <Badge className="top-1 right-1 absolute uppercase">
                        popular
                      </Badge>
                    )}
                    <h3>
                      {trail.city}, {trail.country}
                    </h3>
                    {trail.quote && <p>{trail.quote}</p>}
                    {trail.subtitle && <p className="mt-2">{trail.subtitle}</p>}
                    {trail.quote && (
                      <blockquote className="mt-4 italic">
                        "{trail.quote}"
                      </blockquote>
                    )}

                    <Button
                      className="mt-4"
                      onClick={() =>
                        router.push(
                          `/cruises/cruise-categories/velari-voyages-cruises/${trail.country}/${trail.city}?city=${trail.city}&country=${trail.country}`
                        )
                      }
                    >
                      Explore {trail.city}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button>Explore All Destinations</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div>
          <div className="mb-16 text-center">
            <h2>What Our Passengers Say</h2>
            <p>Experiences from fellow cruise enthusiasts.</p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="shadow-lg p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full w-12 h-12"></div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote>"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div>
        <h2>Ready to Set Sail?</h2>
        <p>
          Join thousands of travelers who have experienced the luxury and wonder
          of cruising with Velari Voyages.
        </p>
        <div className="flex sm:flex-row flex-col justify-center gap-4">
          <Button>Book Your Voyage</Button>
          <Button>Contact Us</Button>
        </div>
      </div>
    </main>
  );
}
