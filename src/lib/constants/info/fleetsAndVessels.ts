import { Vessels } from "@/lib/interfaces/services/cruises";

export const cruiseVessels: Vessels[] = [
  // Mainstream Cruise Ships
  {
    name: "Velari Horizon",
    description:
      "A family-friendly mainstream cruise ship offering excellent value with a variety of onboard activities and entertainment options for all ages.",
    type: "Mainstream Cruise Ship",
    capacity: 3200,
    length: 294,
    width: 32.2,
    speed: 22,
    yearBuilt: 2018,
    homePort: {
      city: "Miami",
      country: "United States",
      state: "Florida",
    },
    specifications: {
      engineType: "Diesel-Electric",
      fuelCapacity: 3400,
      waterCapacity: 1200,
      propulsionType: "Azipod Propulsion",
      hullMaterial: "Steel",
      safetyEquipment: [
        "Advanced Fire Detection",
        "Automated External Defibrillators",
        "Life Rafts",
        "Emergency Positioning Beacons",
      ],
      navigationEquipment: [
        "Radar",
        "Electronic Charts",
        "GPS",
        "Automatic Identification System",
      ],
      environmentalFeatures: [
        "Advanced Wastewater Treatment",
        "Ballast Water Management System",
        "Shore Power Capability",
      ],
    },
    isPetFriendly: false,
  },

  // Mega Cruise Ship
  {
    name: "Velari Grandeur",
    description:
      "One of the largest cruise ships in the world, featuring multiple neighborhoods, water parks, and entertainment venues that redefine what's possible at sea.",
    type: "Mega Cruise Ship",
    capacity: 5600,
    length: 362,
    width: 47,
    speed: 25,
    yearBuilt: 2021,
    homePort: {
      city: "Port Canaveral",
      country: "United States",
      state: "Florida",
    },
    specifications: {
      engineType: "LNG-Electric Hybrid",
      fuelCapacity: 5800,
      waterCapacity: 2800,
      propulsionType: "Dual-Azipod System",
      hullMaterial: "Advanced Steel Composite",
      classification: "DNV GL A1",
      safetyEquipment: [
        "Advanced Evacuation Systems",
        "Smart Muster Technology",
        "Automated Fire Suppression",
      ],
      navigationEquipment: [
        "Dynamic Positioning System",
        "Weather Routing Technology",
        "Integrated Bridge System",
      ],
      entertainmentEquipment: [
        "4D Cinema",
        "VR Gaming Center",
        "Wave Pool",
        "Zipline",
        "Ice Skating Rink",
      ],
      accessibilityFeatures: [
        "Accessible Staterooms",
        "Braille Signage",
        "Hearing Loops",
        "Wheelchair Accessible Venues",
      ],
      environmentalFeatures: [
        "Exhaust Gas Cleaning Systems",
        "Heat Recovery Systems",
        "LED Lighting Throughout",
      ],
    },
    isPetFriendly: false,
  },

  // Ocean Cruise Ship
  {
    name: "Velari Azure",
    description:
      "A mid-size ocean cruise ship designed for longer voyages with spacious public areas and a focus on destination immersion.",
    type: "Ocean Cruise Ship",
    capacity: 2400,
    length: 269,
    width: 31.8,
    speed: 21.5,
    yearBuilt: 2017,
    homePort: {
      city: "Southampton",
      country: "United Kingdom",
    },
    specifications: {
      engineType: "Marine Diesel",
      fuelCapacity: 2900,
      waterCapacity: 980,
      propulsionType: "Conventional Propeller",
      hullMaterial: "Steel",
      classification: "Lloyd's Register",
      navigationEquipment: [
        "ECDIS",
        "ARPA Radar",
        "Integrated Navigation System",
      ],
      entertainmentEquipment: [
        "Two-Level Theater",
        "Casino",
        "Multiple Swimming Pools",
      ],
      environmentalFeatures: [
        "Advanced Emission Control",
        "Ballast Water Treatment",
      ],
    },
  },

  // Luxury Cruise Ship
  {
    name: "Velari Serenity",
    description:
      "An intimate luxury cruise ship offering personalized service with spacious all-suite accommodations and gourmet dining experiences.",
    type: "Luxury Cruise Ship",
    capacity: 750,
    length: 196,
    width: 24.9,
    speed: 19,
    yearBuilt: 2019,
    homePort: {
      city: "Monte Carlo",
      country: "Monaco",
    },
    specifications: {
      engineType: "Low-Emission Diesel-Electric",
      propulsionType: "Azipod Electric",
      hullMaterial: "Steel with Ice Strengthening",
      classification: "Bureau Veritas",
      safetyEquipment: [
        "Advanced Fire Detection and Suppression",
        "Electronic Mustering System",
      ],
      entertainmentEquipment: [
        "Culinary Center",
        "Marina Platform",
        "Observatory Lounge",
      ],
      accessibilityFeatures: [
        "Accessible Suites",
        "Elevator Access to All Decks",
      ],
      environmentalFeatures: [
        "Dynamic Positioning to Avoid Anchor Damage",
        "Advanced Wastewater Treatment",
      ],
    },
    isLuxuryVessel: true,
  },

  // Small Cruise Ship
  {
    name: "Velari Intimate",
    description:
      "A boutique cruise ship that can access smaller ports and provides a more personalized cruising experience with high crew-to-guest ratios.",
    type: "Small Cruise Ship",
    capacity: 450,
    length: 140,
    width: 21.4,
    speed: 17,
    yearBuilt: 2016,
    homePort: {
      city: "Venice",
      country: "Italy",
    },
    specifications: {
      engineType: "Medium-Speed Diesel",
      propulsionType: "Pod Drive System",
      hullMaterial: "Steel",
      safetyEquipment: [
        "SOLAS Compliant Life Rafts",
        "Advanced Medical Facility",
      ],
      navigationEquipment: [
        "Satellite Navigation",
        "Shallow Water Alert System",
      ],
      environmentalFeatures: [
        "Reduced Emissions Engines",
        "Solar Panel Supplementation",
      ],
    },
    isLuxuryVessel: true,
  },

  // Adventure Cruise Ship
  {
    name: "Velari Quest",
    description:
      "An adventure-oriented cruise ship designed for active travelers with facilities for kayaking, snorkeling, and other water sports directly from the ship.",
    type: "Adventure Cruise Ship",
    capacity: 280,
    length: 126,
    width: 19.2,
    speed: 18,
    yearBuilt: 2020,
    homePort: {
      city: "San Juan",
      country: "Puerto Rico",
    },
    specifications: {
      engineType: "Hybrid Electric-Diesel",
      fuelCapacity: 980,
      waterCapacity: 540,
      propulsionType: "Twin Screw with Bow Thruster",
      hullMaterial: "Reinforced Steel",
      safetyEquipment: [
        "Advanced Search and Rescue Equipment",
        "Satellite Emergency Beacons",
      ],
      navigationEquipment: ["Multi-Beam Sonar", "Ice Detection Radar"],
      entertainmentEquipment: [
        "Dive Platform",
        "Submarine Launch",
        "Zodiac Docks",
      ],
      environmentalFeatures: [
        "Noise Reduction Design",
        "Marine Life Protection Protocols",
      ],
    },
  },

  // Expedition Cruise Ship
  {
    name: "Velari Explorer",
    description:
      "A polar expedition vessel capable of navigating ice-filled waters with educational programs led by naturalists and scientists.",
    type: "Expedition Cruise Ship",
    capacity: 200,
    length: 105,
    width: 18.3,
    speed: 15,
    yearBuilt: 2022,
    homePort: {
      city: "Ushuaia",
      country: "Argentina",
    },
    specifications: {
      engineType: "Eco-Friendly Low Emission Diesel",
      fuelCapacity: 1200,
      waterCapacity: 380,
      propulsionType: "Electric Azipod with Ice-Breaking Capability",
      hullMaterial: "Ice-Strengthened Steel (Polar Class 6)",
      classification: "DNV ICE-1A",
      safetyEquipment: [
        "Polar Survival Gear",
        "Enhanced Medical Facilities",
        "Autonomous Lifeboats",
      ],
      navigationEquipment: [
        "Ice Radar",
        "Forward-Looking Sonar",
        "Thermal Imaging",
      ],
      environmentalFeatures: [
        "Zero Discharge Policy in Sensitive Areas",
        "Acoustic Minimization for Wildlife Protection",
      ],
    },
  },

  // River Cruise Ship
  {
    name: "Velari Riverine",
    description:
      "A sleek river cruise vessel designed to navigate Europe's inland waterways with panoramic views from all public spaces.",
    type: "River Cruise Ship",
    capacity: 180,
    length: 135,
    width: 11.4,
    speed: 12,
    yearBuilt: 2021,
    homePort: {
      city: "Budapest",
      country: "Hungary",
    },
    specifications: {
      engineType: "Low Emission Diesel",
      propulsionType: "Twin Screw",
      hullMaterial: "Steel",
      navigationEquipment: [
        "River Navigation System",
        "Low Bridge Alert System",
      ],
      environmentalFeatures: [
        "Shore Power Connection",
        "Waste Compaction Systems",
      ],
    },
  },

  // Additional Luxury Cruise Ship
  {
    name: "Velari Opulence",
    description:
      "A premium luxury vessel offering world-class dining, spacious verandas, and curated shore experiences with overnight stays in iconic destinations.",
    type: "Luxury Cruise Ship",
    capacity: 930,
    length: 234,
    width: 29.8,
    speed: 20,
    yearBuilt: 2023,
    homePort: {
      city: "Singapore",
      country: "Singapore",
    },
    specifications: {
      engineType: "Hybrid Electric",
      fuelCapacity: 1800,
      waterCapacity: 890,
      propulsionType: "Azimuth Thrusters",
      hullMaterial: "Enhanced Steel with Special Coating",
      safetyEquipment: [
        "Advanced Firefighting Systems",
        "Enhanced Medical Center",
      ],
      entertainmentEquipment: [
        "Jazz Club",
        "Culinary School",
        "Art Collection",
      ],
      accessibilityFeatures: [
        "Fully Accessible Design",
        "Braille Menus",
        "Accessible Shore Excursions",
      ],
      environmentalFeatures: [
        "Advanced Water Purification",
        "Energy Recovery Systems",
      ],
    },
    isLuxuryVessel: true,
  },

  // Additional Small Cruise Ship
  {
    name: "Velari Essence",
    description:
      "An intimate yacht-like vessel that offers exceptional cuisine, personalized service, and access to unique ports inaccessible to larger vessels.",
    type: "Small Cruise Ship",
    capacity: 320,
    length: 131,
    width: 19.5,
    speed: 16,
    yearBuilt: 2019,
    homePort: {
      city: "Piraeus",
      country: "Greece",
    },
    specifications: {
      engineType: "Clean Diesel Electric",
      propulsionType: "Counter-Rotating Propellers",
      hullMaterial: "Steel with Special Sound Dampening",
      safetyEquipment: [
        "Advanced Man Overboard Detection",
        "Stabilizer System",
      ],
      navigationEquipment: [
        "Shallow Draft Navigation System",
        "Port Approach Assistance",
      ],
      entertainmentEquipment: [
        "Observation Platform",
        "Small Performance Venue",
      ],
      environmentalFeatures: [
        "Water Recycling Systems",
        "Biodegradable Cleaning Products",
      ],
    },
    isLuxuryVessel: true,
    isPetFriendly: true,
  },
];
