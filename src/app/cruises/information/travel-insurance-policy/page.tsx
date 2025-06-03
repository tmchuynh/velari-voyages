import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";

export default function TravelInsurance() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <div className="mb-12 w-full">
        <header>
          <h1>Travel Insurance Policy</h1>
          <h5>Peace of mind, from embarkation to disembarkation</h5>
          <blockquote>
            "Cruising with Velari Voyages was a dream come true, and having
            their recommended insurance gave me the confidence to explore every
            port without worry." – John D., Luxury Cruiser
          </blockquote>
        </header>

        {/* Overview Section */}
        <section>
          <h2>Overview</h2>
          <p>
            At Velari Voyages, we understand that a cruise vacation is more than
            a journey—it's an investment in memories, experiences, and personal
            fulfillment. However, even the most meticulously planned voyage can
            be impacted by unexpected events. That's why we strongly encourage
            all passengers to protect their cruise with comprehensive insurance
            coverage.
          </p>
          <p>
            Our Travel Insurance Policy outlines our recommendations,
            responsibilities, and guidance for obtaining coverage that meets
            your specific needs. While Velari Voyages does not directly sell
            insurance, we actively guide passengers toward reputable providers
            and ensure that all cruises—especially those involving remote
            destinations, extended itineraries, or exclusive arrangements—are
            properly protected.
          </p>
        </section>

        {/* Why Travel Insurance Is Essential */}
        <section>
          <h2>Why Cruise Insurance Is Essential</h2>
          <p>
            Cruise insurance offers more than reimbursement—it offers
            confidence. As global maritime travel becomes more dynamic and
            unpredictable, an insurance policy acts as a financial safety net, a
            medical resource, and a crisis response tool all in one. Without
            proper coverage, passengers may be responsible for substantial
            out-of-pocket expenses in unfamiliar ports or while at sea.
          </p>
          <p>Key reasons to secure cruise insurance before departure:</p>
          <ul className="space-y-2 mb-4 pl-8 list-disc">
            <li>Medical emergencies requiring evacuation at sea</li>
            <li>
              Trip cancellation due to illness or unforeseen circumstances
            </li>
            <li>Missed embarkation due to travel delays</li>
            <li>Lost luggage or personal belongings</li>
            <li>Missed ports due to weather or itinerary changes</li>
            <li>Emergency returns from international waters</li>
            <li>Medical treatment in foreign ports</li>
          </ul>
        </section>

        {/* Required Coverage for Select Itineraries */}
        <section>
          <h2>Required Coverage for Select Voyages</h2>
          <p>
            For cruises that include high-risk environments, remote regions, or
            extended ocean crossings, Velari Voyages requires proof of travel
            insurance that meets the following minimums:
          </p>
          <ul className="space-y-2 mb-4 pl-8 list-disc">
            <li>Emergency Medical Treatment: $50,000 minimum</li>
            <li>Medical Evacuation at Sea: $250,000 minimum</li>
            <li>Trip Cancellation/Interruption: Equal to total cruise fare</li>
            <li>Baggage Loss/Theft: $2,000 minimum</li>
            <li>24/7 Emergency Assistance: Mandatory</li>
          </ul>
          <p>
            Passengers will be notified in advance if their itinerary includes
            regions or activities that trigger additional insurance
            requirements.
          </p>
        </section>

        {/* Recommended Coverage Categories */}
        <section>
          <h2>Recommended Coverage Categories</h2>
          <p>
            To ensure your policy fully protects your cruise investment, we
            recommend choosing a plan that includes the following six
            categories:
          </p>

          <div className="gap-3 lg:gap-6 grid lg:grid-cols-2 mt-4">
            <div>
              <h3>1. Trip Cancellation & Interruption</h3>
              <ul className="space-y-1 mb-2 pl-8 list-disc">
                <li>
                  Refunds non-refundable cruise fare due to illness, weather
                  events, or unforeseen circumstances.
                </li>
                <li>
                  Coverage for missed embarkation, flight delays, or early
                  disembarkation due to emergencies.
                </li>
              </ul>
            </div>
            <div>
              <h3>2. Medical Expenses at Sea and in Port</h3>
              <ul className="space-y-1 mb-2 pl-8 list-disc">
                <li>
                  Covers onboard medical center visits, hospitalization in ports
                  of call, and emergency treatment.
                </li>
                <li>
                  Particularly important as most personal health insurance plans
                  don't cover international waters.
                </li>
              </ul>
            </div>
            <div>
              <h3>3. Emergency Evacuation & Repatriation</h3>
              <ul className="space-y-1 mb-2 pl-8 list-disc">
                <li>
                  Includes helicopter evacuation or ship diversion if medical
                  emergencies occur at sea.
                </li>
                <li>
                  Also covers the return of remains in the event of death during
                  the cruise.
                </li>
              </ul>
            </div>
            <div>
              <h3>4. Lost, Delayed, or Damaged Baggage</h3>
              <ul className="space-y-1 mb-2 pl-8 list-disc">
                <li>
                  Replaces essential items if luggage doesn't arrive before
                  embarkation.
                </li>
                <li>
                  Reimbursement for high-value items or stolen travel documents
                  while in port.
                </li>
              </ul>
            </div>
            <div>
              <h3>5. Missed Connection Coverage</h3>
              <ul className="space-y-1 mb-2 pl-8 list-disc">
                <li>
                  Covers transportation costs to the next port if you miss
                  embarkation due to travel delays.
                </li>
                <li>
                  Also protects against costs related to missed flights after
                  disembarkation.
                </li>
              </ul>
            </div>
            <div>
              <h3>6. Shore Excursion & Activity Coverage</h3>
              <ul className="space-y-1 mb-2 pl-8 list-disc">
                <li>
                  Necessary for adventure activities like scuba diving,
                  parasailing, or helicopter tours.
                </li>
                <li>
                  Provides coverage if excursions are cancelled due to ship
                  itinerary changes.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Protections */}
        <section>
          <h2>Additional Protections to Consider</h2>

          <div className="gap-3 lg:gap-6 grid lg:grid-cols-2 mt-4">
            {" "}
            <div>
              <h3>Cancel For Any Reason (CFAR)</h3>
              <ul className="space-y-1 mb-2 pl-8 list-disc">
                <li>
                  Allows maximum refund flexibility regardless of the reason.
                </li>
                <li>
                  Typically reimburses 50–75% of cruise costs and must be
                  purchased shortly after booking.
                </li>
              </ul>
            </div>
            <div>
              <h3>Pre-Existing Medical Condition Waiver</h3>
              <ul className="space-y-1 mb-2 pl-8 list-disc">
                <li>
                  Available with select policies if purchased within 14–21 days
                  of your initial cruise deposit.
                </li>
                <li>
                  Ensures coverage is not denied due to known health issues.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Approved Insurance Providers */}
        <section>
          <h2>Approved Insurance Providers</h2>
          <p>
            We do not receive compensation or commissions for referrals, but we
            routinely work with the following insurance companies based on their
            service, reputation, and responsiveness to our cruise passengers:
          </p>
          <ul className="space-y-2 mb-4 pl-8 list-disc">
            <li>Allianz Global Assistance</li>
            <li>Travel Guard by AIG</li>
            <li>Travelex Insurance Services</li>
            <li>Generali Global Assistance</li>
            <li>Seven Corners</li>
            <li>
              Cruise-specific policies from major cruise protection providers
            </li>
          </ul>
          <p>
            Our advisors can assist you in evaluating different options, sending
            policy links, or answering coverage-related questions.
          </p>
        </section>

        {/* Submitting Proof of Insurance */}
        <section>
          <h2>Submitting Proof of Insurance</h2>
          <p>To finalize your booking, please provide:</p>
          <ul className="space-y-2 mb-4 pl-8 list-disc">
            <li>Your full policy certificate (PDF or digital copy)</li>
            <li>Insurer's name and policy number</li>
            <li>Effective dates and cruise coverage limits</li>
            <li>Emergency contact hotline</li>
            <li>List of inclusions and exclusions</li>
          </ul>

          <ContactDepartmentCard department="Insurance, Claims & Post-Voyage Support" />
          <p>
            Send to:{" "}
            <a
              href="mailto:insurance@velarivoyages.com"
              className="text-blue-600 underline"
            >
              insurance@velarivoyages.com
            </a>
            <br />
            Due: No later than 30 days before your scheduled embarkation.
          </p>
        </section>

        {/* Limitations of Liability */}
        <section>
          <h2>Velari Voyages' Limitations of Liability</h2>
          <p>
            Velari Voyages is not an insurance provider and does not act as a
            licensed insurance agent or broker. We assume no responsibility for
            denied claims, policy disputes, or lack of coverage. It is the
            passenger's responsibility to:
          </p>
          <ul className="space-y-2 mb-4 pl-8 list-disc">
            <li>
              Review and understand their policy's inclusions and exclusions
            </li>
            <li>
              Contact the insurer directly for claims, reimbursements, or
              clarifications
            </li>
            <li>
              Keep digital and physical copies of their policy while cruising
            </li>
          </ul>
        </section>

        {/* In Case of Emergency */}
        <section>
          <h2>In Case of Emergency</h2>
          <p>
            If you encounter a medical emergency, theft, or loss while onboard
            or in port:
          </p>
          <ul className="space-y-2 mb-4 pl-8 list-disc">
            <li>Alert the ship's medical staff or security team immediately</li>
            <li>Contact your insurance provider's emergency hotline</li>
            <li>Document all expenses and obtain copies of medical reports</li>
            <li>
              File a formal claim within your provider's required timeframe
            </li>
          </ul>

          <ContactDepartmentCard department="Emergency Cruise Support" />
        </section>

        {/* FAQ Section */}
        <section>
          <h2>Frequently Asked Questions (FAQ)</h2>

          <div>
            <h3 className="mb-1 font-medium text-xl">
              Q: Can I cruise without insurance?
            </h3>
            <p>
              A: For most voyages, yes, but it is strongly discouraged. For
              extended cruises, remote destinations, or expedition sailings,
              insurance is mandatory.
            </p>
          </div>

          <div>
            <h3 className="mb-1 font-medium text-xl">
              Q: Will Velari Voyages refund me directly if I cancel?
            </h3>
            <p>
              A: Refunds are processed according to our Cancellation Policy.
              Insurance claims must be filed directly with your insurance
              provider, not with us.
            </p>
          </div>

          <div>
            <h3 className="mb-1 font-medium text-xl">
              Q: How do I know what policy is right for me?
            </h3>
            <p>
              A: Our cruise specialists can help assess your itinerary and
              suggest coverage types. However, final decisions rest with you and
              your insurer.
            </p>
          </div>
        </section>

        <ContactDepartmentCard department="General Inquiries" />
        <ContactDepartmentCard department="Emergency Cruise Support" />
        <ContactDepartmentCard department="Insurance, Claims & Post-Voyage Support" />
      </div>
    </div>
  );
}
