import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";

export default function TravelSafetyInformation() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Travel Safety Information</h1>
        <h5>
          Your safety is our top priority, ensuring every voyage is secure and
          seamless.
        </h5>
        <blockquote>
          "Cruising with Velari Voyages was not only luxurious but also
          incredibly safe. Their attention to detail in safety protocols gave me
          peace of mind throughout my journey." – Emily R., Frequent Voyager
        </blockquote>

        <p>
          At Velari Voyages, safety is never an afterthought. It's built into
          the architecture of every cruise we design. From your initial
          consultation to the final moments of disembarkation, we work behind
          the scenes to ensure that every aspect of your voyage is supported by
          maritime safety standards, global partnerships, and on-call
          assistance. Our philosophy is simple: the freedom to explore begins
          with the confidence of knowing you are protected. Whether you're
          cruising through bustling ports or pristine island sanctuaries, this
          page outlines essential safety guidance to keep you informed,
          prepared, and protected.
        </p>
      </header>

      {/* Before You Travel Section */}
      <section>
        <h2>1. Before You Sail: Preparation Is Protection</h2>
        <div className="space-y-8">
          <div>
            <h3>Passport, Visas & Entry Requirements</h3>
            <p className="mb-2">
              Ensure your passport is valid for at least six months beyond your
              intended return. Some countries may deny entry otherwise. We also
              recommend:
            </p>
            <ul className="space-y-1 pl-5 list-disc">
              <li>Double-checking visa requirements for all ports of call.</li>
              <li>
                Carrying physical and digital copies of your passport and visa.
              </li>
              <li>
                Keeping a copy of your cruise itinerary with someone back home.
              </li>
            </ul>
            <p className="mt-2 italic">
              <strong>Velari Pro Tip:</strong> We provide visa support and
              port-of-call guidance upon booking. Let our team handle the
              paperwork so you can focus on the experience.
            </p>
          </div>

          <div>
            <h3>Health & Immunization Guidelines</h3>
            <p className="mb-2">
              Maritime travel may expose you to different environments at each
              port. Prepare in advance by:
            </p>
            <ul className="space-y-1 pl-5 list-disc">
              <li>
                Consulting your healthcare provider 4–6 weeks prior to
                departure.
              </li>
              <li>
                Verifying required or recommended vaccinations for all
                destinations on your itinerary.
              </li>
              <li>
                Packing sufficient prescription medications with labels and
                documentation.
              </li>
            </ul>
            <p className="mt-2 italic">
              <strong>Additional Note:</strong> Let us know of any allergies,
              medical conditions, or accessibility needs—so we can tailor your
              onboard experience discreetly and safely.
            </p>
          </div>

          <div>
            <h3>Comprehensive Travel Insurance</h3>
            <p className="mb-2">
              We strongly recommend cruise-specific insurance that includes:
            </p>
            <ul className="space-y-1 pl-5 list-disc">
              <li>Emergency medical evacuation at sea</li>
              <li>Repatriation from foreign ports</li>
              <li>Trip cancellation or interruption</li>
              <li>Lost luggage</li>
              <li>Missed port coverage</li>
              <li>COVID-19-related cancellations or quarantines</li>
            </ul>
            <p className="mt-2">
              Our concierge team can connect you with leading providers that
              cater to luxury cruise clientele.
            </p>
          </div>
        </div>
      </section>

      {/* In Transit Section */}
      <section>
        <h2>2. Embarkation: Tips for Secure Boarding</h2>

        <div className="gap-6 grid md:grid-cols-2">
          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Port Procedures</h3>
            <ul className="space-y-1 pl-5 list-disc">
              <li>Arrive at least 3 hours before scheduled departure.</li>
              <li>
                Have boarding documents and identification easily accessible.
              </li>
              <li>Follow all security screening protocols at the terminal.</li>
              <li>Keep medications and valuables in your carry-on luggage.</li>
            </ul>
          </div>

          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Transportation to Port</h3>
            <ul className="space-y-1 pl-5 list-disc">
              <li>
                Use pre-arranged private transfers or Velari Voyages' port
                transportation service.
              </li>
              <li>
                Plan for traffic and potential delays when traveling to the
                embarkation point.
              </li>
              <li>
                Consider arriving a day early to avoid travel complications
                affecting your cruise.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* On the Ground Section */}
      <section>
        <h2>3. Onboard: Staying Safe During Your Voyage</h2>

        <div className="gap-6 grid md:grid-cols-2">
          <div>
            <h3>Vessel Safety & Security</h3>
            <p className="mb-2">All Velari vessels feature:</p>
            <ul className="space-y-1 mb-3 pl-5 list-disc">
              <li>24/7 security personnel and monitoring systems</li>
              <li>Advanced medical facilities with trained staff</li>
              <li>Regular safety drills and emergency response protocols</li>
              <li>
                State-of-the-art navigation and weather monitoring equipment
              </li>
            </ul>

            <p className="mb-2">For your personal safety:</p>
            <ul className="space-y-1 pl-5 list-disc">
              <li>
                Attend the mandatory safety drill at the start of your cruise.
              </li>
              <li>
                Familiarize yourself with emergency exits and muster stations.
              </li>
              <li>
                Use handrails when walking, especially during inclement weather.
              </li>
            </ul>
          </div>

          <ContactDepartmentCard department="Lost & Delayed Baggage" />

          <div>
            <h3>Port Awareness</h3>
            <p className="mb-2">When visiting ports of call:</p>
            <ul className="space-y-1 pl-5 list-disc">
              <li>Use ship-organized excursions for maximum security</li>
              <li>Note the all-aboard time and ship's contact information</li>
              <li>
                Be aware of local customs, dress codes, and any travel
                advisories
              </li>
            </ul>
          </div>

          <div>
            <h3>Onboard Health Practices</h3>
            <ul className="space-y-1 pl-5 list-disc">
              <li>Use hand sanitizing stations frequently.</li>
              <li>Follow all crew instructions regarding health protocols.</li>
              <li>
                Report any illness symptoms promptly to the medical center.
              </li>
            </ul>
          </div>
        </div>

        <ContactDepartmentCard department="Onboard Guest Services" />
        <ContactDepartmentCard department="Dining & Culinary Services" />
        <ContactDepartmentCard department="Wellness & Spa Services" />
        <ContactDepartmentCard department="Entertainment & Activities" />
      </section>

      {/* Technology & Digital Security Section */}
      <section>
        <h2>4. Technology & Digital Security</h2>

        <div className="gap-6 grid md:grid-cols-2">
          <div className="p-5 border border-border rounded-lg">
            <h3>Staying Connected</h3>
            <ul className="space-y-1 pl-5 list-disc">
              <li>
                Consider our premium onboard Wi-Fi packages for reliable
                connectivity.
              </li>
              <li>
                Download the Velari Voyages app for emergency communications.
              </li>
              <li>
                Be aware that signal strength may vary in international waters.
              </li>
            </ul>
          </div>

          <div className="p-5 border border-border rounded-lg">
            <h3>Cybersecurity Best Practices</h3>
            <ul className="space-y-1 pl-5 list-disc">
              <li>
                Use caution when connecting to public Wi-Fi in ports of call.
              </li>
              <li>Lock your devices with strong passwords or biometrics.</li>
              <li>Consider using a VPN for additional security when online.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section>
        <h2>5. Emergency Services & On-Call Support</h2>
        <p>
          Each passenger receives access to our emergency services and priority
          support. In the rare event that something goes wrong, you'll never be
          alone. Velari Voyages provides:
        </p>

        <ul className="space-y-1 mb-6 pl-5 list-disc">
          <li>24/7 emergency contact with the bridge and medical staff</li>
          <li>Shore-side support team for assistance in every port</li>
          <li>Real-time itinerary updates and port information</li>
          <li>Coordination with international authorities when needed</li>
        </ul>

        <div>
          <h3>Emergency Situations We Assist With:</h3>
          <ul className="space-y-1 pl-5 list-disc">
            <li>Medical emergencies requiring evacuation</li>
            <li>Lost or stolen documents in port</li>
            <li>Natural disasters or adverse weather changes</li>
            <li>Port changes or itinerary modifications</li>
            <li>Family emergencies requiring early disembarkation</li>
          </ul>
        </div>

        <ContactDepartmentCard department="Emergency Travel Support" />
      </section>

      {/* Destination Risk Monitoring Section */}
      <section>
        <h2>6. Voyage Risk Monitoring</h2>

        <p>
          Velari Voyages uses an integrated maritime risk-assessment platform to
          monitor:
        </p>

        <ul className="space-y-1 mb-6 pl-5 list-disc">
          <li>Weather patterns and sea conditions</li>
          <li>Port security and regional stability</li>
          <li>Health-related advisories at destinations</li>
          <li>International maritime safety alerts</li>
        </ul>

        <p>
          Before your cruise begins, you'll receive a voyage-specific safety
          briefing tailored to your itinerary.
        </p>
      </section>

      {/* General Travel Tips Section */}
      <section>
        <h2>7. General Cruise Tips from Our Experts</h2>

        <ul className="space-y-2 pl-5 list-disc">
          <li>
            Store valuable items in your stateroom safe rather than carrying
            them ashore.
          </li>
          <li>
            Learn a few key phrases in the languages of your ports of call.
          </li>
          <li>
            Keep a digital copy of your cruise documents in your smartphone.
          </li>
          <li>
            Stay hydrated, especially when participating in shore excursions in
            warm climates.
          </li>
          <li>
            Register your trip with your government's traveler program before
            sailing.
          </li>
          <li>
            Be mindful of alcohol consumption—staying aware is key to staying
            safe.
          </li>
          <li>
            Keep a printed card with your ship's contact information and docking
            location when going ashore.
          </li>
        </ul>
      </section>

      {/* Final Words Section */}
      <section>
        <h2>Final Words from Our Safety Team</h2>

        <p>
          Luxury should never compromise safety—and with Velari Voyages, it
          never does. Our vessels exceed international maritime safety
          standards, and our crew undergoes rigorous training to handle any
          situation. From exclusive shore excursions to comprehensive onboard
          security, every voyage is underpinned by our commitment to protection,
          discretion, and constant support.
        </p>

        <p>
          If you have specific safety concerns or require a custom safety
          briefing, please contact us prior to your voyage.
        </p>
      </section>
    </div>
  );
}
