import { Vessels } from "@/lib/interfaces/services/cruises";

export const capeTownVessels: Vessels[] = [
  {
    id: "sy-cape-town-explorer",
    name: "SY Cape Town Explorer",
    description: "The SY Cape Town Explorer stands as a testament to luxury and innovation on the high seas. Departing from Cape Town, this sophisticated family cruise ship features immersive entertainment, wellness facilities, and exquisite cuisine prepared by internationally renowned chefs.",
    type: "family-cruise-ship",
    capacity: 894,
    length: 278,
    width: 51,
    speed: 16,
    topSpeed: 19, // Added topSpeed
    yearBuilt: 2007,
    homePort: {"city":"Cape Town","country":"South Africa","coordinates":{"latitude":-33.918861,"longitude":18.4233}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 7080,
      waterCapacity: 268200,
      propulsionType: "Podded Propulsion Units",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "Bureau Veritas Star Class",
      safetyEquipment: ["Survival craft VHF radios","Satellite emergency notification devices","Radar reflectors","Weather monitoring stations","Comprehensive medical facilities","Tactical response equipment"],
      navigationEquipment: ["River radar systems","Automatic identification systems (AIS)","Doppler speed logs"],
      communicationEquipment: ["Satellite communication systems","Ship-to-shore communication links","Digital selective calling equipment"],
      entertainmentEquipment: ["Theater with Broadway-style productions","Virtual reality gaming center","Dance clubs and live music venues","Culinary demonstration kitchens","Full-service spa and fitness center"],
      accessibilityFeatures: ["Visual alarm systems","Accessible medical facilities","Braille signage throughout"],
      environmentalFeatures: ["Heat recovery systems","Advanced water treatment systems","Exhaust gas cleaning systems","Biodegradable hydraulic fluids"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "rms-cape-town-voyager",
    name: "RMS Cape Town Voyager",
    description: "Setting sail from the beautiful port of Cape Town, the RMS Cape Town Voyager is a floating paradise designed for the discerning traveler. This remarkable small ocean ship boasts panoramic viewing decks, world-class cuisine, and personalized service that ensures an unforgettable journey.",
    type: "small-ocean-ship",
    capacity: 1465,
    length: 393,
    width: 68,
    speed: 28,
    topSpeed: 32, // Added topSpeed
    yearBuilt: 2006,
    homePort: {"city":"Cape Town","country":"South Africa","coordinates":{"latitude":-33.918861,"longitude":18.4233}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 13360,
      waterCapacity: 439500,
      propulsionType: "Azipod Electric Propulsion",
      hullMaterial: "Marine-Grade Steel",
      classification: "Lloyd's Register Class 1",
      safetyEquipment: ["Marine evacuation systems (MES)","Man overboard detection systems","Comprehensive medical facilities"],
      navigationEquipment: ["Inland ECDIS","Automatic identification systems (AIS)","Electronic chart display information systems (ECDIS)","Voyage data recorders (VDRs)"],
      communicationEquipment: ["Public address systems","Internal crew communication network","Digital selective calling equipment"],
      entertainmentEquipment: ["Climbing walls and sports courts","Art gallery and auction facilities","Theater with Broadway-style productions"],
      accessibilityFeatures: ["Transfer chairs for pool access","Tactile guidance systems"],
      environmentalFeatures: ["Exhaust gas cleaning systems","Solar panel supplementation"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ts-cape-town-princess",
    name: "TS Cape Town Princess",
    description: "Combining traditional maritime charm with modern amenities, the TS Cape Town Princess promises an extraordinary voyage from its home port of Cape Town. This impressive ice class ship offers spacious accommodations, diverse dining options, and engaging activities for travelers of all ages.",
    type: "ice-class-ship",
    capacity: 943,
    length: 288,
    width: 53,
    speed: 24,
    topSpeed: 27, // Added topSpeed
    yearBuilt: 2012,
    homePort: {"city":"Cape Town","country":"South Africa","coordinates":{"latitude":-33.918861,"longitude":18.4233}},
    specifications: {
      engineType: "LNG-Powered Engines",
      fuelCapacity: 7630,
      waterCapacity: 282900,
      propulsionType: "Counter-Rotating Propellers",
      hullMaterial: "Hybrid Steel-Composite",
      classification: "China Classification Society B",
      safetyEquipment: ["Man overboard detection systems","Rescue boats and life rafts","Radar reflectors","Life jackets with integrated GPS"],
      navigationEquipment: ["Voyage data recorders (VDRs)","Gyrocompasses and magnetic compasses","Long-range identification and tracking (LRIT)","Autopilot systems with track control"],
      communicationEquipment: ["Global Maritime Distress Safety System (GMDSS)","Marine radio telephony","Emergency position-indicating radio beacons"],
      entertainmentEquipment: ["Art gallery and auction facilities","Virtual reality gaming center","Observation lounges with panoramic views"],
      accessibilityFeatures: ["Braille signage throughout"],
      environmentalFeatures: ["Shore power connectivity"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "mv-cape-town-legend",
    name: "MV Cape Town Legend",
    description: "With its distinctive profile and luxurious appointments, the MV Cape Town Legend stands as a jewel in the Cape Town harbor. This prestigious small ocean ship offers travelers a perfect combination of adventure and relaxation, with expert-guided excursions, world-class entertainment, and sublime culinary experiences.",
    type: "small-ocean-ship",
    capacity: 587,
    length: 217,
    width: 42,
    speed: 18,
    topSpeed: 22, // Added topSpeed
    yearBuilt: 2013,
    homePort: {"city":"Cape Town","country":"South Africa","coordinates":{"latitude":-33.918861,"longitude":18.4233}},
    specifications: {
      engineType: "Diesel-Electric Propulsion",
      fuelCapacity: 4550,
      waterCapacity: 176100,
      propulsionType: "Z-Drive Propulsion",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "Lloyd's Register Class 1",
      safetyEquipment: ["Personal locator beacons","Thermal imaging cameras","Rescue boats and life rafts","Automated external defibrillators (AEDs)","Satellite emergency notification devices"],
      navigationEquipment: ["Gyrocompasses and magnetic compasses","Integrated navigation system displays","Long-range identification and tracking (LRIT)"],
      communicationEquipment: ["Digital selective calling equipment","Internal crew communication network"],
      entertainmentEquipment: ["Multiple swimming pools and water features","Theater with Broadway-style productions","Virtual reality gaming center","Climbing walls and sports courts","Art gallery and auction facilities"],
      accessibilityFeatures: ["Accessible shore excursion options","Accessible medical facilities"],
      environmentalFeatures: ["Marine ecosystem monitoring equipment","Shore power connectivity"]
    },
    isLuxuryVessel: false,
    isPetFriendly: true,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "sy-cape-town-jewel",
    name: "SY Cape Town Jewel",
    description: "Setting sail from the beautiful port of Cape Town, the SY Cape Town Jewel is a floating paradise designed for the discerning traveler. This remarkable chartered vessel boasts panoramic viewing decks, world-class cuisine, and personalized service that ensures an unforgettable journey.",
    type: "chartered-vessel",
    capacity: 1254,
    length: 350,
    width: 62,
    speed: 20,
    topSpeed: 22, // Added topSpeed
    yearBuilt: 2023,
    homePort: {"city":"Cape Town","country":"South Africa","coordinates":{"latitude":-33.918861,"longitude":18.4233}},
    specifications: {
      engineType: "Hybrid Power System",
      fuelCapacity: 10850,
      waterCapacity: 376200,
      propulsionType: "Water Jets",
      hullMaterial: "Marine-Grade Steel",
      classification: "Bureau Veritas Star Class",
      safetyEquipment: ["Satellite emergency notification devices","Emergency position indicating radio beacons (EPIRBs)","Hyperbaric treatment chambers","Tactical response equipment"],
      navigationEquipment: ["Integrated bridge systems","Night vision systems","Voyage data recorders (VDRs)","Dynamic positioning systems","Automatic identification systems (AIS)"],
      communicationEquipment: ["Maritime VHF radio systems","Emergency position-indicating radio beacons","Satellite communication systems"],
      entertainmentEquipment: ["Children's entertainment areas","Theater with Broadway-style productions"],
      accessibilityFeatures: ["Tactile guidance systems","Accessible shore excursion options","Height-adjustable furniture in select cabins"],
      environmentalFeatures: ["Energy-efficient appliances","Solar panel supplementation","LED lighting throughout","Ballast water management technology","Advanced water treatment systems"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  }
];
