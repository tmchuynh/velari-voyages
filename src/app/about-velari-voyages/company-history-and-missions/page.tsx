"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function CompanyHistoryAndMissionsPage() {
  const router = useRouter();

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Company History & Mission</h1>
      </header>

      <section>
        <h2>Three Decades of Purposeful Travel Design</h2>
        <p>
          At Velari Voyages, we believe that travel isn't just about where you
          go—it's about how those moments are lived, remembered, and felt long
          after you return. Since our founding in 1994, we've remained steadfast
          in our mission to create elegant, immersive, and personally meaningful
          journeys.
        </p>
        <p>
          Our vision was never about volume—it was about depth. We've spent
          three decades crafting experiences that challenge the conventional,
          prioritize authenticity, and uphold the highest standard of discretion
          and design.
        </p>
        <p>
          This is our story—how we began, what drives us, and where we're going
          next.
        </p>
        <Button onClick={() => router.push("/about-velari-voyages")}>
          Learn More About Us
        </Button>
      </section>

      <section>
        <h2>Our Origins</h2>
        <p>
          In the early 1990s, a small group of travel professionals, each
          disillusioned with the rise of impersonal group tours and
          one-size-fits-all itineraries, came together around a shared idea:
          <em> Travel should not be manufactured. It should be designed.</em>
        </p>
        <p>
          In 1994, from a modest office in Santa Barbara, California, Velari
          Voyages was born. Our initial work focused on highly personalized
          itineraries throughout Europe and Southeast Asia. With no formal
          marketing, our name spread quietly—but powerfully—through client
          referrals, trusted advisors, and discerning circles seeking something
          the traditional travel industry had long neglected:
          <em> True connection through thoughtful curation.</em>
        </p>
        <p>
          Even in those early years, Velari was defined not by size, but by
          substance. Our clients came not for spectacle, but for sincerity. And
          that remains unchanged today.
        </p>
      </section>

      <section>
        <h2>Timeline of Key Milestones</h2>
        <div className="space-y-8">
          {/* Timeline items */}
          <div className="flex gap-6">
            <h1>1994</h1>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Velari Voyages is Founded
              </h3>
              <p className="text-lg">
                We launch with a mission to provide custom, luxury travel
                experiences that place the traveler—not the destination—at the
                heart of every journey.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() =>
                  router.push(
                    "/about-velari-voyages/company-history-and-missions/founding-story",
                  )
                }
              >
                Read Founding Story
              </Button>
            </div>
          </div>

          <div className="flex gap-6">
            <h1>1998</h1>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Expansion into South America & the Mediterranean
              </h3>
              <p className="text-lg">
                Driven by client demand, we begin curating in-depth itineraries
                in Argentina, Peru, Morocco, and Southern Europe, expanding our
                footprint while maintaining our boutique approach.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <h1>2005</h1>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Launch of "Private Cultural Access" Program
              </h3>
              <p className="text-lg">
                We pioneer exclusive experiences, offering our travelers rare
                access to historic landmarks, artisan workshops, and privately
                hosted cultural events—far beyond the reach of standard tourism.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <h1>2010</h1>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                First Major Industry Recognition
              </h3>
              <p className="text-lg">
                Named Best Custom Travel Designer by Luxury Travel Weekly and
                featured in Condé Nast Traveler's prestigious Specialist List,
                establishing Velari as a global leader in bespoke travel.
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

          <div className="flex gap-6">
            <h1>2014</h1>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Serving Over 10,000 Global Travelers
              </h3>
              <p className="text-lg">
                Our clientele now includes family offices, creative
                professionals, and business leaders—individuals who value
                privacy, depth, and intentionality.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <h1>2017</h1>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Launch of the Sustainability & Heritage Commitment
              </h3>
              <p className="text-lg">
                We formalize our environmental and ethical travel framework,
                working exclusively with eco-conscious suppliers and supporting
                locally led initiatives around heritage conservation.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <h1>2020</h1>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Reinvention Through Private, Flexible Travel
              </h3>
              <p className="text-lg">
                Amid global uncertainty, we adapt with agility—offering longer
                stays, wellness-centric retreats, and fully private travel
                solutions that provide both peace of mind and personal freedom.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <h1>2023</h1>
            <div>
              <h3 className="mb-2 font-semibold text-xl">
                Named a Top 10 Bespoke Travel Brand
              </h3>
              <p className="text-lg">
                Travel & Leisure recognizes Velari for design excellence,
                exceptional service, and destination innovation—cementing our
                reputation among the most respected names in luxury travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Industry Recognition</h2>
        <p>
          Over three decades, Velari Voyages has earned international
          recognition for its unwavering commitment to quality, privacy, and
          elevated design. Some of our most distinguished accolades include:
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
          <li>Top 10 Bespoke Travel Brands – Travel & Leisure, 2023</li>
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
          View Full Awards Gallery
        </Button>
      </section>

      <section>
        <h2>Our Mission</h2>
        <blockquote className="mx-0 mb-4 pl-4 border-gray-300 border-l-4 text-xl italic">
          To design intentional travel experiences that inspire connection,
          discovery, and restoration—through a blend of cultural authenticity,
          personalized detail, and uncompromising service.
        </blockquote>
      </section>

      <section>
        <h2>Our Core Values</h2>
        <div className="gap-6 grid md:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-2 font-semibold text-xl">Intentionality</h3>
            <p className="text-lg">
              Every journey is custom-designed around you. Nothing is
              off-the-shelf—because you're not.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-2 font-semibold text-xl">Excellence</h3>
            <p className="text-lg">
              We uphold the highest standards in every detail—from our
              destination partners to our planning ethos.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-2 font-semibold text-xl">Authenticity</h3>
            <p className="text-lg">
              Luxury is not about excess. It's about substance, context, and
              soul.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-2 font-semibold text-xl">Sustainability</h3>
            <p className="text-lg">
              We protect what we celebrate. Our travel practices reflect a
              long-term commitment to environmental stewardship and cultural
              preservation.
            </p>
          </Card>

          <Card className="md:col-span-2 p-6">
            <h3 className="mb-2 font-semibold text-xl">Discretion</h3>
            <p className="text-lg">
              Your privacy is not a feature—it's a foundation. We serve quietly,
              intentionally, and with complete respect for your personal space.
            </p>
          </Card>
        </div>
      </section>

      <section className="mb-8">
        <h2>Looking Ahead</h2>
        <p>
          As we enter our fourth decade, Velari Voyages remains focused on what
          matters: designing world-class, deeply personal travel experiences for
          a new generation of thoughtful travelers.
        </p>
        <p>
          We are expanding our global partnerships, investing in next-generation
          travel design technologies, and further deepening our sustainability
          model—because the future of travel must be both visionary and
          responsible.
        </p>
        <p>
          We don't follow trends. We lead with insight. Because for us, it's
          never been about movement alone. It's about transformation.
        </p>
        <p className="mb-6 text-lg italic">
          Great travel doesn't just take you somewhere new—it brings you back
          changed.
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
