"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CompanyHistoryAndMissionsPage() {
  const router = useRouter();

  return (
    <div className="mx-auto px-4 py-8 container">
      <h1 className="mb-6 font-bold text-3xl">Company History and Missions</h1>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-2xl">
          Three Decades of Purposeful Travel Design
        </h2>
        <p className="mb-4 text-lg">
          At Velari Voyages, travel is never just about where you go — it's
          about how you experience the world. Since our founding in 1994, we've
          been dedicated to designing journeys that are immersive, elegant, and
          deeply personal. Our work is guided by one belief: that exceptional
          travel should be as intentional as it is inspiring.
        </p>
        <p className="mb-4 text-lg">
          This is our story — how we began, what drives us, and where we're
          going next.
        </p>
        <Button onClick={() => router.push("/about-velari-voyages")}>
          Learn More About Us
        </Button>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-2xl">Our Origins</h2>
        <p className="mb-4 text-lg">
          Velari Voyages was founded in 1994 by a small group of industry
          professionals with a shared dissatisfaction for commoditized tourism.
          In a market dominated by group itineraries and generic experiences, we
          recognized a need for something more discerning — custom travel design
          rooted in authenticity, cultural depth, and elevated service.
        </p>
        <p className="mb-4 text-lg">
          Operating initially from a modest office in Santa Barbara, California,
          we focused on a handful of clients, crafting individualized
          itineraries across Europe and Southeast Asia. Our reputation for
          excellence spread quickly, driven solely by referrals and
          word-of-mouth.
        </p>
        <Button
          onClick={() => router.push("/about-velari-voyages/our-founders")}
        >
          Meet Our Founders
        </Button>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 font-semibold text-2xl">
          Timeline of Key Milestones
        </h2>
        <div className="space-y-8">
          {/* Timeline items */}
          <div className="flex">
            <div className="w-24 font-bold text-xl">1994</div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Velari Voyages is founded
              </h3>
              <p className="text-lg">
                We launch with a mission to offer custom, luxury travel
                experiences that put the traveler — not the destination — at the
                center of every journey.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() =>
                  router.push(
                    "/about-velari-voyages/company-history-and-missions/founding-story"
                  )
                }
              >
                Read Founding Story
              </Button>
            </div>
          </div>

          <div className="flex">
            <div className="w-24 font-bold text-xl">1998</div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Expansion into South America & the Mediterranean
              </h3>
              <p className="text-lg">
                Client demand leads to curated itineraries in Argentina, Peru,
                Morocco, and southern Europe.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() =>
                  router.push(
                    "/cruises/cruise-categories/mediterranean-cruises"
                  )
                }
              >
                View Mediterranean Cruises
              </Button>
            </div>
          </div>

          <div className="flex">
            <div className="w-24 font-bold text-xl">2005</div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Launch of "Private Cultural Access" program
              </h3>
              <p className="text-lg">
                We establish exclusive local partnerships for behind-the-scenes
                access to historic sites, private tastings, artisan studios, and
                cultural performances.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() =>
                  router.push("/cruises/cruise-categories/cultural-experiences")
                }
              >
                Explore Cultural Experiences
              </Button>
            </div>
          </div>

          <div className="flex">
            <div className="w-24 font-bold text-xl">2010</div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Global recognition and first major award
              </h3>
              <p className="text-lg">
                Velari Voyages is named "Best Custom Travel Designer" by Luxury
                Travel Weekly and is featured in Condé Nast Traveler's
                "Specialist List."
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() =>
                  router.push("/about-velari-voyages/awards-and-recognition")
                }
              >
                View All Awards
              </Button>
            </div>
          </div>

          <div className="flex">
            <div className="w-24 font-bold text-xl">2014</div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Client base surpasses 10,000 global travelers
              </h3>
              <p className="text-lg">
                The milestone reflects a growing reputation among discerning
                travelers, family offices, and executive clientele.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-24 font-bold text-xl">2017</div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Launch of Sustainability & Heritage Commitment
              </h3>
              <p className="text-lg">
                We formalize our sustainability practices, prioritizing
                eco-sensitive vendors, carbon-conscious planning, and
                community-driven tourism initiatives.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() =>
                  router.push("/about-velari-voyages/sustainability-commitment")
                }
              >
                Our Sustainability Practices
              </Button>
            </div>
          </div>

          <div className="flex">
            <div className="w-24 font-bold text-xl">2020</div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Reinvention through private, flexible travel
              </h3>
              <p className="text-lg">
                In response to global shifts, we adapt to offer long-stay
                retreats, private accommodations, and wellness-oriented escapes.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-24 font-bold text-xl">2023</div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Recognized by Travel & Leisure as a "Top 10 Bespoke Travel
                Brand"
              </h3>
              <p className="text-lg">
                Awarded for design excellence, service consistency, and
                innovative destination curation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-2xl">Industry Recognition</h2>
        <p className="mb-4 text-lg">
          Over three decades, Velari Voyages has received numerous accolades
          that reflect our dedication to quality, discretion, and design:
        </p>
        <ul className="space-y-2 pl-6 text-lg list-disc">
          <li>
            Best Luxury Travel Consultant – Luxury Travel Weekly (2010, 2015,
            2019)
          </li>
          <li>
            Top Custom Travel Specialist – Condé Nast Traveler (2010–2024, 14
            consecutive years)
          </li>
          <li>Travel & Leisure: Top 10 Bespoke Travel Brands – 2023</li>
          <li>
            Excellence in Sustainable Luxury Award – Global Tourism Forum, 2021
          </li>
          <li>Gold Standard Client Service Award – Virtuoso Alliance, 2022</li>
        </ul>
        <Button
          className="mt-4"
          onClick={() =>
            router.push("/about-velari-voyages/awards-and-recognition")
          }
        >
          See Full Awards Gallery
        </Button>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-2xl">Our Mission</h2>
        <blockquote className="mb-4 pl-4 border-gray-300 border-l-4 text-xl italic">
          To design intentional travel experiences that inspire connection,
          discovery, and restoration — through a blend of cultural authenticity,
          personalized detail, and uncompromising service.
        </blockquote>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 font-semibold text-2xl">Our Values</h2>
        <div className="gap-6 grid md:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-2 font-semibold text-xl">Intentionality</h3>
            <p className="text-lg">
              We design with purpose. Every journey is built around your
              personal goals, pace, and perspective.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-2 font-semibold text-xl">Excellence</h3>
            <p className="text-lg">
              We set a higher standard — from our partners to our planning,
              everything is selected with precision and care.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-2 font-semibold text-xl">Authenticity</h3>
            <p className="text-lg">
              We believe that luxury is about depth, not excess. True value lies
              in connection, not spectacle.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-2 font-semibold text-xl">Sustainability</h3>
            <p className="text-lg">
              We protect what we celebrate. Our partnerships and itineraries
              reflect our commitment to environmental responsibility and
              cultural preservation.
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-2 font-semibold text-xl">Discretion</h3>
            <p className="text-lg">
              Trust is the foundation of our client relationships. We provide
              quiet excellence for those who prefer privacy to publicity.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 font-semibold text-2xl">Looking Ahead</h2>
        <p className="mb-4 text-lg">
          Now in our fourth decade, Velari Voyages continues to evolve — not by
          chasing trends, but by anticipating what discerning travelers will
          value next. As we expand our global partnerships, invest in digital
          travel design, and deepen our sustainability efforts, we remain
          focused on one thing: delivering world-class journeys that feel
          entirely your own.
        </p>
        <p className="mb-6 text-lg italic">
          Because great travel doesn't just take you somewhere new — it brings
          you back changed.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => router.push("/cruises")}>
            Explore Our Cruises
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/contact-information")}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
