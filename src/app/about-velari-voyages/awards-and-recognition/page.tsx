import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  industryRecognition,
  velariVoyagesAwards,
} from "@/lib/constants/info/awards";

export default function AwardsAndRecognitionPage() {
  // Group awards by year for better display organization
  const awardsByYear = velariVoyagesAwards.reduce((acc, award) => {
    award.years.forEach((year) => {
      if (!acc[year]) acc[year] = [];
      acc[year].push(award);
    });
    return acc;
  }, {} as Record<number, typeof velariVoyagesAwards>);

  // Get years in descending order (most recent first)
  const sortedYears = Object.keys(awardsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 pb-12 w-10/12 md:w-11/12">
      <header className="mb-10">
        <h1>Awards & Recognition</h1>
        <h5>Honors That Reflect Our Standards — and Your Experience</h5>
        <blockquote>
          "We never designed journeys to win awards — we designed them to move
          people. The recognition simply affirms that doing things the right way
          still matters." — Velari Voyages Leadership
        </blockquote>
        <p>
          For over three decades, Velari Voyages has earned the trust of
          travelers, industry leaders, and global partners through an unwavering
          commitment to excellence. Our accolades span luxury travel design,
          sustainable innovation, cultural integrity, and client service — each
          award a reflection of the intention behind every voyage we craft.
          These honors are not our goal, but a byproduct of doing meaningful
          work, with care and precision, every step of the way. We are proud to
          be recognized by the most respected names in travel — and prouder
          still to serve clients who expect nothing less.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-6">Our Awards by Year</h2>

        {sortedYears.map((year) => (
          <div key={year} className="mb-10">
            <h3 className="mb-4 pb-2 border-b font-semibold text-2xl">
              {year}
            </h3>
            <div className="gap-6 grid md:grid-cols-2">
              {awardsByYear[year].map((award, index) => (
                <Card
                  key={`${award.title}-${index}`}
                  className="overflow-hidden"
                >
                  <CardContent className="p-6">
                    <h4 className="mb-2 font-semibold text-xl">
                      {award.title}
                    </h4>
                    <div className="flex items-center mb-3 text-gray-600 text-sm">
                      <span className="font-medium">{award.issuer}</span>
                    </div>
                    <p className="mb-4 text-gray-700">{award.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {award.years.map((y) => (
                        <Badge
                          key={y}
                          variant={y === year ? "default" : "outline"}
                        >
                          {y}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Industry Recognition</h2>
        <p className="mb-6">
          Our commitment to excellence has been recognized by leading industry
          organizations and publications. Here's a comprehensive list of our
          industry recognitions:
        </p>
        <div className="gap-6 grid md:grid-cols-2">
          {industryRecognition.map((recognition, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-4">
                <p className="text-lg">{recognition}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Guest Testimonials</h2>
        <div className="gap-8 grid md:grid-cols-2">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <blockquote className="text-lg italic">
                "Velari Voyages provided us with the most luxurious and
                unforgettable travel experience. Their attention to detail is
                unmatched!"
                <footer className="mt-3 font-medium not-italic">
                  — Sarah T., Executive Traveler
                </footer>
              </blockquote>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <blockquote className="text-lg italic">
                "From the moment we booked until we returned home, every aspect
                of our journey with Velari was meticulously planned and
                perfectly executed."
                <footer className="mt-3 font-medium not-italic">
                  — James R., Luxury Travel Enthusiast
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-xl">
          Thank you for choosing Velari Voyages. We look forward to welcoming
          you aboard!
        </p>
      </footer>
    </div>
  );
}
