import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import { Button } from "@/components/ui/button";

export default function CancellationAndRefundPolicy() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Cancellation and Refund Policy</h1>
        <h5>
          Clarity, transparency, and integrity—before your voyage even begins.
        </h5>
        <blockquote>
          "Velari Voyages handled my cancellation with such professionalism and
          care. I felt supported every step of the way." – Emily R., Luxury
          Cruiser
        </blockquote>
        <p>
          At Velari Voyages, we understand that plans can change. While our
          cruises are highly curated and often require extensive advance
          coordination, we have structured our cancellation and refund policies
          to balance flexibility with the realities of luxury cruise operations
          and maritime commitments. This policy outlines what you can expect in
          the event of a cancellation, modification, or refund request.
        </p>
      </header>

      {/* Standard Cancellation Policy Section */}
      <section>
        <h2 className="mb-2 font-semibold text-2xl">
          Standard Cancellation Policy
        </h2>
        <h4>Tiered Based on Lead Time Before Departure</h4>

        <div className="mb-4 overflow-x-auto">
          <table className="bg-card mt-4 border border-border rounded-xl min-w-full">
            <thead className="bg-card border border-border">
              <tr>
                <th className="px-4 py-3 border-b text-left">
                  Days Before Scheduled Departure
                </th>
                <th className="px-4 py-3 border-b text-left">
                  Cancellation Fee
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b">120 days or more</td>
                <td className="px-4 py-3 border-b">
                  15% of total fare (non-refundable deposit retained)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b">90–119 days</td>
                <td className="px-4 py-3 border-b">25% of total fare</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b">60–89 days</td>
                <td className="px-4 py-3 border-b">50% of total fare</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b">30–59 days</td>
                <td className="px-4 py-3 border-b">75% of total fare</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b">29 days or less</td>
                <td className="px-4 py-3 border-b">
                  100% of total fare (non-refundable)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm italic">
          Note: Special voyages, holiday cruises, and certain suite categories
          may carry stricter cancellation terms. These will be disclosed and
          agreed upon prior to booking.
        </p>
      </section>

      {/* Refund Eligibility Section */}
      <section>
        <h2>Refund Eligibility</h2>
        <p>
          We strive to process eligible refunds efficiently and transparently.
        </p>

        <div className="gap-8 grid md:grid-cols-2">
          <div>
            <h3>Eligible for Refund</h3>
            <ul className="space-y-2 pl-5 list-disc">
              <li>
                Amounts paid beyond the non-refundable percentage, according to
                the timeline above
              </li>
              <li>
                Services cancelled by Velari Voyages due to vessel technical
                issues, itinerary impossibilities, or force majeure events
              </li>
            </ul>
          </div>

          <div>
            <h3>Not Eligible for Refund</h3>
            <p className="mb-4">
              For high-demand sailing dates and premium cabin categories,
              stricter or non-refundable policies may apply. These are clearly
              stated prior to booking.
            </p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Non-refundable deposits</li>
              <li>Travel insurance premiums</li>
              <li>
                Port fees, taxes, and gratuities that have already been
                disbursed
              </li>
              <li>No-shows or late arrivals for scheduled embarkation</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 font-semibold text-2xl">No-Shows</h3>
            <p className="mb-4">
              Failure to embark without notice is considered a no-show and is
              not eligible for refund.
            </p>
          </div>
        </div>

        <ContactDepartmentCard department="Billing & Payments" />
      </section>

      {/* Modifications & Rebooking Section */}
      <section>
        <h2>Modifications & Rebooking</h2>
        <p>We are happy to assist with rescheduling whenever possible.</p>

        <ul className="space-y-3">
          <li className="flex items-start">
            <strong className="min-w-[200px]">Date Changes:</strong>
            <span>
              Permitted up to 60 days before departure, subject to availability
              and potential fare differences
            </span>
          </li>
          <li className="flex items-start">
            <strong className="min-w-[200px]">Cabin Changes:</strong>
            <span>
              Upgrades and downgrades subject to availability and fare
              adjustments
            </span>
          </li>
          <li className="flex items-start">
            <strong className="min-w-[200px]">Future Cruise Credits:</strong>
            <span>
              In select cases, your payment may be applied as a cruise credit
              valid for 18 months from original sailing date
            </span>
          </li>
        </ul>

        <ContactDepartmentCard department="Ports & Itinerary Planning" />
      </section>

      {/* Force Majeure Section */}
      <section>
        <h2>Force Majeure & Exceptional Circumstances</h2>
        <p>
          In the case of events beyond your control—including natural disasters,
          pandemics, or travel bans—Velari Voyages will:
        </p>

        <ul className="space-y-2 mb-4 pl-5 list-disc">
          <li>Offer future cruise credits at 100% of the paid fare</li>
          <li>Work to reschedule your voyage to a comparable date</li>
          <li>
            Process refunds where contractually feasible and required by
            maritime law
          </li>
        </ul>

        <p>
          We maintain the right to alter itineraries for safety, weather
          conditions, or port restrictions without compensation when such
          changes are unavoidable.
        </p>

        <ContactDepartmentCard department="Insurance, Claims & Post-Voyage Support" />
      </section>

      {/* Travel Insurance Section */}
      <section>
        <h2>Cruise Insurance Recommendation</h2>
        <p>
          We strongly recommend securing comprehensive cruise insurance that
          includes:
        </p>

        <ul className="space-y-2 mb-4 pl-5 list-disc">
          <li>Trip cancellation and interruption coverage</li>
          <li>Emergency medical evacuation at sea</li>
          <li>Lost or delayed baggage</li>
          <li>
            Coverage for weather, illness, or force majeure-related
            cancellations
          </li>
        </ul>

        <p className="italic">
          Velari Voyages does not assume liability for costs not covered by your
          insurance provider.
        </p>

        <Button>Read More About Cruise Insurance</Button>
      </section>

      {/* Contact & Claims Section */}
      <section>
        <h2>Contact & Claims</h2>
        <p>
          To initiate a cancellation, refund request, or policy inquiry, please
          contact your dedicated cruise consultant or reach out via:
        </p>

        <ContactDepartmentCard department="General Inquiries" />
      </section>

      {/* Commitment Section */}
      <section>
        <h2>Our Commitment</h2>
        <p>
          We approach every booking—and every cancellation—with integrity and
          care. We understand that cruise travel is a personal and often
          emotional investment. Our goal is to provide peace of mind, fairness,
          and professional guidance in all situations.
        </p>
      </section>
    </div>
  );
}
