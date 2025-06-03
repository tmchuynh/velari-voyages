import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import { Button } from "@/components/ui/button";

export default function Accommodations() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Hero Section */}
      <header>
        <h1>Accommodations Policy</h1>
        <h5>Effective Date: May 2025</h5>
        <blockquote> "Luxury redefined, one voyage at a time."</blockquote>
      </header>

      {/* Overview */}
      <section>
        <h2 className="mb-4 font-bold text-3xl">Overview</h2>
        <p className="mb-4">
          At Velari Voyages, your comfort, safety, and satisfaction are at the
          core of our service philosophy. Our cruise accommodations span global
          destinations and include luxury staterooms, premium suites, and
          exclusive cabins—each one carefully designed to meet our premium
          quality standards. This Accommodations Policy outlines our terms,
          expectations, and service commitments related to all cruise
          accommodations provided by Velari Voyages.
        </p>
      </section>

      {/* 1. Booking & Confirmation Process */}
      <section>
        <h2>1. Booking & Confirmation Process</h2>

        <div className="mb-6">
          <h3>Instant Confirmation on Select Voyages</h3>
          <p className="mb-4">
            For select voyages and cabin classes, instant confirmation is
            available. For more exclusive or tailored accommodations,
            confirmation may take 12–24 hours while final arrangements are
            secured.
          </p>
        </div>

        <div className="mb-6">
          <h3>Booking Documentation</h3>
          <p className="mb-4">
            A complete summary of your cruise accommodation—including vessel
            details, cabin category, photos, amenities, terms, embarkation
            procedures, and onboard contact information—is provided via email
            and available in your passenger portal.
          </p>
        </div>

        <div className="mb-6">
          <h3>Deposits & Payment</h3>
          <p className="mb-4">
            All cruise bookings require a deposit to secure your reservation.
            Full payment is typically due 90 days prior to embarkation. Payment
            schedules vary by voyage length and destination. All terms are
            disclosed prior to booking confirmation.
          </p>
        </div>

        <div className="mb-6">
          <h3>Booking on Behalf of Others</h3>
          <p className="mb-4">
            If reserving accommodations for someone else, authorization and
            verified passenger details must be provided at the time of booking.
          </p>
        </div>

        <ContactDepartmentCard department="Ports & Itinerary Planning" />
      </section>

      {/* 2. Check-In & Check-Out Policy */}
      <section>
        <h2>2. Embarkation & Disembarkation Policy</h2>

        <div className="mb-6">
          <h3>Standard Schedule</h3>
          <ul className="space-y-2 pl-8 list-disc">
            <li>
              <strong>Embarkation:</strong> 1:00 PM - 4:00 PM local time
            </li>
            <li>
              <strong>Disembarkation:</strong> 8:00 AM - 10:00 AM local time
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3>Priority Boarding Requests</h3>
          <p className="mb-4">
            Requests for priority boarding should be made at least 48 hours
            prior to departure. This service is complimentary for Premium and
            Deluxe Suite passengers. Fees may apply for other cabin categories.
          </p>
        </div>

        <div className="mb-6">
          <h3>Arrival Assistance</h3>
          <p className="mb-4">
            Transportation from airport/train terminals to the port and luggage
            handling is available for all premium bookings. Personalized welcome
            services and expedited check-in are included for Suite and Platinum
            Tier passengers.
          </p>
        </div>
      </section>

      {/* 3. Accommodation Standards */}
      <section>
        <h2>3. Accommodation Standards</h2>

        <div className="mb-6">
          <h3>Luxury-Grade Certification</h3>
          <p className="mb-4">
            Every vessel in our fleet is independently vetted and must meet at
            least 25 quality checkpoints, including hygiene, privacy, safety,
            service, accessibility, and environmental sustainability.
          </p>
        </div>

        <div className="mb-6">
          <h3>Daily Service</h3>
          <p className="mb-4">
            All staterooms receive twice-daily housekeeping service. Turn-down
            service and personal laundry services are available for all
            passengers, with premium offerings for suite-level accommodations.
          </p>
        </div>

        <div className="mb-6">
          <h3>Amenity Expectations</h3>
          <p className="mb-2">Standard luxury amenities include:</p>
          <ul className="space-y-2 pl-8 list-disc">
            <li>Premium linens and towels</li>
            <li>Complimentary high-speed Wi-Fi</li>
            <li>In-room safes</li>
            <li>Luxury bath products (organic and cruelty-free)</li>
            <li>Welcome beverage package</li>
            <li>24-hour room service</li>
          </ul>
        </div>

        <ContactDepartmentCard department="Accessibility & Special Needs Travel" />

        <div className="mb-6">
          <h3>Barrier-Free Travel</h3>
          <p className="mb-4">
            We offer a variety of ADA-compliant staterooms and assistive
            services, including step-free entry, wheelchair-accessible
            bathrooms, grab bars, visual alert systems, and mobility assistance
            throughout the vessel.
          </p>
        </div>

        <div className="mb-6">
          <h3>Sensory-Sensitive Environments</h3>
          <p className="mb-4">
            Guests may request non-fragranced cabins, quiet zone accommodations,
            and light-dimming devices.
          </p>
        </div>

        <div className="mb-6">
          <h3>Service Animals</h3>
          <p className="mb-4">
            Certified service animals are welcomed aboard our vessels.
            Documentation must be provided at least 30 days prior to departure
            to comply with maritime regulations and international port
            requirements.
          </p>
        </div>
      </section>

      {/* 4. Guest Capacity, Visitors & Use */}
      <section>
        <h2>4. Guest Capacity & Stateroom Use</h2>

        <div className="mb-6">
          <h3>Maximum Occupancy Limits</h3>
          <p className="mb-4">
            Each stateroom is designed for a maximum number of occupants.
            Exceeding capacity is not permitted for safety and regulatory
            compliance.
          </p>
        </div>

        <div className="mb-6">
          <h3>Unregistered Guests</h3>
          <p className="mb-4">
            All passengers must be registered prior to embarkation. Overnight
            stays by unregistered guests are strictly prohibited for security
            and safety reasons.
          </p>
        </div>

        <div className="mb-6">
          <h3>Special Events & Private Functions</h3>
          <p className="mb-4">
            Private events and celebrations can be arranged through our Onboard
            Events team. Additional fees may apply for venue reservation,
            catering, and entertainment.
          </p>
        </div>
      </section>

      {/* 6. Property Use, Damage & Conduct */}
      <section>
        <h2>5. Vessel Use, Damage & Conduct</h2>

        <div className="mb-6">
          <h3>Passenger Responsibility</h3>
          <p className="mb-4">
            You are responsible for maintaining your stateroom in good condition
            during your voyage. Any damage or excessive cleaning requirements
            may result in fees charged to your onboard account.
          </p>
        </div>

        <div className="mb-6">
          <h3>Non-Smoking Policy</h3>
          <p className="mb-4">
            All interior spaces, including staterooms and balconies, are 100%
            smoke-free. Designated smoking areas are available on specific
            exterior decks.
          </p>
        </div>

        <div className="mb-6">
          <h3>Substance Prohibitions</h3>
          <p className="mb-4">
            Use of illegal substances is strictly prohibited and will result in
            immediate reporting to authorities and possible removal at the next
            port of call without refund.
          </p>
        </div>

        <div className="mb-6">
          <h3>Quiet Hours & Courtesy</h3>
          <p className="mb-4">
            Respect for fellow passengers and crew is expected. Noise
            restrictions are in effect from 11:00 PM to 8:00 AM in all
            accommodation areas.
          </p>
        </div>

        <div className="mb-6">
          <h3>Cleanliness & Hygiene Standards</h3>
          <p className="mb-4">
            All vessels adhere to internationally recognized cleaning protocols
            including enhanced disinfection of high-touch surfaces, air
            filtration, and regular sanitization of public spaces.
          </p>
        </div>
      </section>

      {/* 7. Homestays & Heritage Stays - Changed to Suite Experiences */}
      <section>
        <h2>6. Premium Suite Experiences</h2>

        <div className="mb-6">
          <h3>Exclusive Suite Benefits</h3>
          <p className="mb-4">
            All suite-level accommodations include enhanced services such as
            personal butler service, private dining options, and exclusive
            access to premium areas of the vessel.
          </p>
        </div>

        <div className="mb-6">
          <h3>Concierge Service</h3>
          <p className="mb-4">
            Suite passengers enjoy dedicated concierge service for shore
            excursions, dining reservations, and special requests throughout the
            voyage.
          </p>
        </div>

        <div className="mb-6">
          <h3>Private Facilities</h3>
          <p className="mb-4">
            Select suite categories include access to private lounges, dedicated
            dining venues, and exclusive deck areas with premium amenities.
          </p>
        </div>
        <Button>View Our Suite Amenities & Privileges</Button>
      </section>

      {/* 8. Refunds & Cancellations */}
      <section>
        <h2>7. Refunds & Cancellations</h2>

        <h3>Standard Cancellation Policy</h3>
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

        <ContactDepartmentCard department="Billing & Payments" />

        <p className="text-sm italic">
          Note: Special voyages, holiday cruises, and certain suite categories
          may carry stricter cancellation terms. These will be disclosed and
          agreed upon prior to booking.
        </p>
        <Button>View Our Cancellation & Refund Policy</Button>
      </section>

      {/* 9. Emergency, Health & Safety */}
      <section>
        <h2>8. Emergency, Health & Safety</h2>

        <div className="mb-6">
          <h3>Maritime Safety Protocols</h3>
          <p className="mb-4">
            All vessels comply with international maritime safety regulations.
            Mandatory safety drills are conducted at the beginning of each
            voyage. Emergency evacuation routes and lifejacket locations are
            clearly marked throughout the ship.
          </p>
        </div>

        <ContactDepartmentCard department="Emergency Cruise Support" />
      </section>
    </div>
  );
}
