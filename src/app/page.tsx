"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cruiseDepartureLocations } from "@/lib/constants/info/city.ts";
import { testimonials } from "@/lib/constants/info/testimonials";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useSmallScreen from "@/hooks/useSmallScreen";
import useMediumScreen from "@/hooks/useMediumScreen";

export default function HomePage() {
  const router = useRouter();
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();
  const sortedDestinations = groupAndSortByProperties(
    cruiseDepartureLocations,
    "isPopular",
    "city"
  );

  const featuresList = [
    {
      title: "Luxury Meets Exploration",
      description:
        "We combine premium accommodations, personalized service, and exquisite dining with breathtaking destinations for a seamless, indulgent experience at sea.",
      icon: "🌊",
    },
    {
      title: "Curated Itineraries",
      description:
        "Every voyage is thoughtfully planned to include iconic ports, hidden gems, and immersive cultural excursions you won't find on standard cruise lines.",
      icon: "🗺️",
    },
    {
      title: "Uncompromising Comfort",
      description:
        "From oceanview suites to spa-level amenities, our ships are designed for relaxation and refinement — no detail is overlooked.",
      icon: "🛌",
    },
    {
      title: "World-Class Service",
      description:
        "Our handpicked crew delivers attentive, discreet service that anticipates your every need, ensuring an exceptional onboard experience.",
      icon: "⭐",
    },
    {
      title: "Sustainable Voyaging",
      description:
        "We’re committed to responsible travel, incorporating eco-conscious practices and supporting the preservation of the places we visit.",
      icon: "♻️",
    },
    {
      title: "Tailored Experiences",
      description:
        "Whether it’s a romantic getaway, family escape, or solo retreat, we offer flexible, customizable packages to match your travel style and goals.",
      icon: "🎯",
    },
  ];

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
            <Button onClick={() => router.push("/cruises")}>
              View Destinations
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:w-1/2">
          <div className="relative shadow-2xl rounded-lg w-full h-64 md:h-96 overflow-hidden">
            {/* Replace with actual cruise ship image */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/30" />
            <div className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                alt="City"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section>
        <div>
          <div className="mb-16">
            <h2>Why Choose Velari Voyages</h2>
            <h5>
              Elevating Every Journey with Style, Comfort, and Distinction
            </h5>
            {isSmallScreen ? (
              <p>
                At Velari Voyages, we redefine the cruise experience by blending
                luxury with adventure, offering a unique blend of world-class
                service and breathtaking destinations.
              </p>
            ) : isMediumScreen ? (
              <p>
                We combine immersive itineraries, exclusive shore excursions,
                and indulgent onboard comforts—from gourmet cuisine to spa
                sanctuaries—offering guests a journey that transcends
                traditional cruising and delivers a truly unforgettable
                experience in every destination we explore.
              </p>
            ) : (
              <>
                {" "}
                <p>
                  From the moment you step aboard, Velari Voyages welcomes you
                  into a realm where every moment is designed with precision,
                  elegance, and intent.
                </p>
                <p>
                  Our ships are more than vessels—they are floating sanctuaries
                  of sophistication, where five-star amenities, world-class
                  service, and immersive cultural experiences converge. Every
                  suite, every plate, every excursion is a reflection of our
                  commitment to excellence. Whether you’re sipping champagne on
                  a private balcony as the sun sets over Santorini or exploring
                  the vibrant markets of Southeast Asia with expert local
                  guides, each detail is curated to elevate your journey.
                </p>
                <p>
                  We don’t just take you to breathtaking destinations—we
                  transform how you experience them. With Velari Voyages, your
                  voyage is not just a trip—it’s a passage into a world of
                  timeless beauty, refined comfort, and unforgettable discovery.
                </p>
              </>
            )}
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
