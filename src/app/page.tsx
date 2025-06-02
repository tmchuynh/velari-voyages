"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cruiseDepartureLocations } from "@/lib/constants/info/city";
import { testimonials } from "@/lib/constants/info/testimonials";
import { groupAndSortByProperties } from "@/lib/utils/sort";

export default function HomePage() {
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
            <h1>Discover Nature's Finest Trails</h1>
            <p>
              Experience breathtaking adventures with Paragon Trails, your
              premier guide to the world's most beautiful hiking destinations.
            </p>
            <div className="flex sm:flex-row flex-col gap-4">
              <button>Plan Your Adventure</button>
              <button>View Trails</button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2">
            <div className="relative shadow-2xl rounded-lg w-full h-64 md:h-96 overflow-hidden">
              {/* Replace with actual trail image */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/30" />
              <div className="w-full h-full">
                {/* Placeholder for image */}
                <div className="flex justify-center items-center h-full">
                  Trail Image
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
            <h2>Why Choose Paragon Trails</h2>
            <p>
              We combine expert knowledge with passion for nature to create
              unforgettable experiences.
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

      {/* Popular Trails Section */}
      <section>
        <div>
          <div className="mb-16 text-center">
            <h2>Popular Trails</h2>
            <p>Discover our most beloved destinations.</p>

            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {sortedDestinations.map((trail, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl p-6 rounded-lg transition-shadow"
                >
                  <CardContent>
                    <h3 className="font-semibold text-xl">{trail.city}</h3>
                    <p className="text-muted-foreground text-sm">
                      {trail.state}, {trail.country}
                    </p>
                    <p className="mt-2">{trail.subtitle}</p>
                    {trail.quote && (
                      <blockquote className="mt-4 italic">
                        "{trail.quote}"
                      </blockquote>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button>Explore All Trails</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div>
          <div className="mb-16 text-center">
            <h2>What Adventurers Say</h2>
            <p>Stories from fellow trail enthusiasts.</p>
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
        <h2>Ready to Start Your Adventure?</h2>
        <p>
          Join thousands of nature lovers who have discovered the world's most
          beautiful trails with us.
        </p>
        <div className="flex sm:flex-row flex-col justify-center gap-4">
          <button>Book a Trail Guide</button>
          <button>Contact Us</button>
        </div>
      </div>
    </main>
  );
}
