import { Card, CardContent } from "@/components/ui/card";

export default function AboutVelariVoyagesPage() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mx-auto max-w-4xl container">
        <header>
          <h1>About Us</h1>
          <h5>Crafted Escapes. Exceptional Destinations.</h5>
          <blockquote className="text-center italic">
            "Travel is the only thing you buy that makes you richer."
          </blockquote>
          <p>
            Welcome to Velari Voyages, where every journey is a masterpiece of
            luxury and discovery. We are dedicated to creating unforgettable
            travel experiences that resonate with your spirit of adventure and
            appreciation for the finer things in life.
          </p>
        </header>

        <p>
          At Velari Voyages, we don't just book travel — we craft immersive,
          unforgettable escapes designed to elevate every step of your journey.
          We are a boutique travel company specializing in tailor-made luxury
          experiences that blend elegance, culture, and adventure in perfect
          harmony.
        </p>

        <section>
          <h2>Who We Are</h2>
          <h5>
            A boutique travel company specializing in tailor-made luxury
            experiences.
          </h5>
          <p>
            Founded by a team of passionate travelers and seasoned industry
            experts, Velari Voyages is built on the belief that travel should be
            a transformative experience. We understand that every traveler is
            unique, and we take pride in curating personalized journeys that
            reflect your individual tastes and aspirations.
          </p>
          <p>
            Velari Voyages was founded on the belief that travel should be more
            than just movement — it should be transformative. Our team of expert
            travel designers brings together decades of experience, global
            insight, and a refined eye for detail to curate journeys that
            reflect your tastes, values, and sense of wonder.
          </p>
          <p>
            From the first conversation to the final return home, we take care
            of every detail so you can focus on what matters most: experiencing
            the extraordinary.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <h5>
            Bespoke travel planning and personalized luxury experiences
            worldwide.
          </h5>
          <div className="gap-8 grid md:grid-cols-2">
            <Card>
              <CardContent>
                <h3>Custom-Crafted Itineraries</h3>
                <p>
                  Every journey begins with you — your preferences, your pace,
                  your purpose. We handcraft each itinerary to match your unique
                  travel vision.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3>Handpicked Destinations & Stays</h3>
                <p>
                  From serene private islands to historic European cities, we
                  partner with world-class hotels, villas, and local experts to
                  ensure comfort, authenticity, and exclusivity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3>Seamless Service</h3>
                <p>
                  With concierge-level planning, 24/7 traveler support, and a
                  dedicated travel designer, we provide a frictionless
                  experience from beginning to end.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3>Cultural Depth & Discovery</h3>
                <p>
                  Go beyond surface-level sightseeing with experiences that
                  immerse you in the heart of every place — its people, cuisine,
                  art, and traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3>Our Mission</h3>
          <blockquote>
            To deliver meaningful luxury travel experiences that inspire
            connection — to the world, to loved ones, and to oneself. We believe
            in the power of intentional travel to restore, transform, and awaken
            curiosity in every traveler.
          </blockquote>
          <p>
            At Velari Voyages, our mission is to redefine luxury travel by
            creating journeys that are not only exquisite but also deeply
            meaningful. We believe that travel should be a transformative
            experience that enriches the soul and fosters a deeper connection to
            the world around us.
          </p>
          <p>
            We are committed to delivering exceptional service, personalized
            experiences, and a level of attention to detail that ensures every
            journey is a masterpiece. Our goal is to inspire a sense of wonder
            and discovery in every traveler, allowing them to explore the world
            with a renewed perspective and a deeper appreciation for its beauty
            and diversity.
          </p>
        </section>

        <section>
          <h3>Our Values</h3>
          <h5>
            Excellence, authenticity, sustainability, and discretion are at the
            core of everything we do.
          </h5>
          <p>
            At Velari Voyages, our values guide every decision we make and every
            journey we create. We are committed to:
          </p>
          <div className="gap-6 grid md:grid-cols-2">
            <div>
              <h4>Excellence Without Exception</h4>
              <p>
                We hold ourselves to the highest standards of service and
                personalization.
              </p>
            </div>

            <div>
              <h4>Authentic Connection</h4>
              <p>
                We prioritize experiences that bring travelers closer to the
                soul of each destination.
              </p>
            </div>

            <div>
              <h4>Sustainable Elegance</h4>
              <p>
                We seek partners and practices that protect the beauty of the
                places we visit.
              </p>
            </div>

            <div>
              <h4>Discretion & Privacy</h4>
              <p>
                Our clients enjoy bespoke journeys that prioritize their space,
                time, and peace of mind.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Why Velari?</h2>
          <p>
            The word Velari evokes movement, grace, and beauty — the essence of
            what travel should be. With Velari Voyages, you aren't just seeing
            the world. You're experiencing it deliberately, exquisitely, and
            with purpose.
          </p>
        </section>
      </div>
    </div>
  );
}
