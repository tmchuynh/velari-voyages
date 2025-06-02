import { Card, CardContent } from "@/components/ui/card";
import { companyTeam } from "@/lib/constants/info/companyTeam";
import Image from "next/image";

export default function CoreTeamAndPartnerships() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <div className="mx-auto py-8">
        <header>
          <h1>Core Team and Partnerships</h1>
          <h5>The people behind the journeys that redefine luxury.</h5>
          <blockquote>
            "Travel is not just about the destination, but the people who shape
            the journey."
          </blockquote>
          <p>
            At Velari Voyages, we believe that the essence of travel lies in the
            people who create it. Our core team is a collective of passionate
            individuals, each bringing unique expertise and a shared commitment
            to crafting unforgettable experiences.
          </p>
        </header>

        <section>
          <p>
            At Velari Voyages, our promise of curated, meaningful travel is made
            possible by a deeply experienced, globally connected, and
            values-driven team. Every journey we design is a reflection of
            decades of insight, cultural fluency, and collaborative trust with
            the world's most discerning travel partners.
          </p>
          <p>
            We are not just travel planners. We are storytellers, connectors,
            and stewards of experience—backed by a global network of like-minded
            visionaries.
          </p>
        </section>

        {/* Leadership Team Section */}
        <section>
          <h2>Our Leadership Team</h2>
          <h5>Decades of Expertise. One Vision.</h5>

          <ul
            role="list"
            className="gap-x-8 gap-y-12 sm:gap-y-16 grid sm:grid-cols-2 xl:col-span-2"
          >
            {companyTeam.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    alt={`${person.name}'s profile image`}
                    src={person.profileImage}
                    className="rounded-full size-16 object-center object-cover"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Global Partnerships Section */}
        <section>
          <h2>Our Global Partnerships</h2>
          <h5>Collaborating with the Best in Luxury Travel</h5>
          <section>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Commitment to Quality:</h4>
                <p>
                  From luxury hotels to private transport providers, we only
                  work with organizations that meet our operational and service
                  standards.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Cultural Insight:</h4>
                <p>
                  We prioritize local partners who offer genuine access to the
                  heart of their regions — not manufactured experiences.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Sustainability Alignment:</h4>
                <p>
                  We actively seek out partners aligned with our sustainability
                  and ethical tourism practices.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h3>Key Partner Categories:</h3>
            <div className="gap-8 grid md:grid-cols-2">
              <Card>
                <CardContent>
                  <h4>Accommodations</h4>
                  <p className="mb-2">
                    Boutique hotels, private villas, eco-resorts, and heritage
                    properties
                  </p>
                  <p className="italic">
                    <span className="font-medium">Preferred Partners:</span>{" "}
                    Canaves Oia (Santorini), Awasi (Patagonia), Singita (South
                    Africa)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h4>Experience Providers</h4>
                  <p className="mb-2">
                    Local historians, private chefs, artisans, conservationists
                  </p>
                  <p className="italic">
                    <span className="font-medium">Key Collaborators:</span>{" "}
                    Kyoto Cultural Guild, Mendoza Wine Collectives, Atlas Guides
                    Morocco
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h4>Transport & Logistics</h4>
                  <p className="mb-2">
                    Private aviation, yacht charters, luxury ground transfers
                  </p>
                  <p className="italic">
                    <span className="font-medium">Logistics Partners:</span>{" "}
                    Blacklane Premier, VistaJet, PELORUS Travel
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h4>Wellness & Retreat Venues</h4>
                  <p className="mb-2">
                    Mindfulness resorts, therapeutic spas, integrative health
                    programs
                  </p>
                  <p className="italic">
                    <span className="font-medium">Wellness Affiliates:</span>{" "}
                    SHA Wellness, Kamalaya, Six Senses
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
