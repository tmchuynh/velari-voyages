import { Vessels } from "@/lib/interfaces/services/cruises";

export const fortLauderdaleVessels: Vessels[] = [
  {
    id: "mv-fort-lauderdale-explorer",
    name: "MV Fort Lauderdale Explorer",
    description: "With its distinctive profile and luxurious appointments, the MV Fort Lauderdale Explorer stands as a jewel in the Fort Lauderdale harbor. This prestigious mainstream cruise ship offers travelers a perfect combination of adventure and relaxation, with expert-guided excursions, world-class entertainment, and sublime culinary experiences.",
    type: "mainstream-cruise-ship",
    capacity: 1356,
    length: 371,
    width: 65,
    speed: 18,
    topSpeed: 21, // Added topSpeed
    yearBuilt: 2005,
    homePort: {"city":"Fort Lauderdale","country":"United States","coordinates":{"latitude":26.122439,"longitude":-80.137317}},
    specifications: {
      engineType: "Solar-Assisted Electric",
      fuelCapacity: 12050,
      waterCapacity: 406800,
      propulsionType: "Voith Schneider Propellers",
      hullMaterial: "High-Tensile Steel Alloy",
      classification: "ClassNK NS* (Special Purpose Ship)",
      safetyEquipment: ["Radar reflectors","Personal locator beacons","Hyperbaric treatment chambers","Marine evacuation systems (MES)","Thermal imaging cameras"],
      navigationEquipment: ["Voyage data recorders (VDRs)","Electronic chart display information systems (ECDIS)","Inland ECDIS"],
      communicationEquipment: ["Global Maritime Distress Safety System (GMDSS)","Emergency position-indicating radio beacons"],
      entertainmentEquipment: ["Immersive simulation experiences","Virtual reality gaming center","Climbing walls and sports courts"],
      accessibilityFeatures: ["Wheelchair accessible cabins","Elevator access to all public decks"],
      environmentalFeatures: ["Ballast water management technology","Shore power connectivity"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ms-fort-lauderdale-voyager",
    name: "MS Fort Lauderdale Voyager",
    description: "Setting sail from the beautiful port of Fort Lauderdale, the MS Fort Lauderdale Voyager is a floating paradise designed for the discerning traveler. This remarkable mainstream cruise ship boasts panoramic viewing decks, world-class cuisine, and personalized service that ensures an unforgettable journey.",
    type: "mainstream-cruise-ship",
    capacity: 2678,
    length: 635,
    width: 105,
    speed: 23,
    topSpeed: 25, // Added topSpeed
    yearBuilt: 2016,
    homePort: {"city":"Fort Lauderdale","country":"United States","coordinates":{"latitude":26.122439,"longitude":-80.137317}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 33330,
      waterCapacity: 803400,
      propulsionType: "Podded Propulsion Units",
      hullMaterial: "Reinforced Aluminum",
      classification: "Lloyd's Register Class 1",
      safetyEquipment: ["Emergency escape breathing devices","Searchlights and rescue equipment","Advanced fire detection and suppression systems"],
      navigationEquipment: ["Infrared camera systems","Integrated bridge systems"],
      communicationEquipment: ["Marine radio telephony","Emergency position-indicating radio beacons","Maritime VHF radio systems"],
      entertainmentEquipment: ["Immersive simulation experiences","Children's entertainment areas","Theater with Broadway-style productions","Culinary demonstration kitchens","Observation lounges with panoramic views"],
      accessibilityFeatures: ["Height-adjustable furniture in select cabins","Braille signage throughout","Accessible medical facilities"],
      environmentalFeatures: ["Noise reduction technology to minimize impact on marine life","Shore power connectivity"]
    },
    isLuxuryVessel: false,
    isPetFriendly: true,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ts-fort-lauderdale-princess",
    name: "TS Fort Lauderdale Princess",
    description: "Combining traditional maritime charm with modern amenities, the TS Fort Lauderdale Princess promises an extraordinary voyage from its home port of Fort Lauderdale. This impressive ultra luxury cruise ship offers spacious accommodations, diverse dining options, and engaging activities for travelers of all ages.",
    type: "ultra-luxury-cruise-ship",
    capacity: 1641,
    length: 428,
    width: 74,
    speed: 16,
    topSpeed: 18, // Added topSpeed
    yearBuilt: 2011,
    homePort: {"city":"Fort Lauderdale","country":"United States","coordinates":{"latitude":26.122439,"longitude":-80.137317}},
    specifications: {
      engineType: "Dual-Fuel Marine Engines",
      fuelCapacity: 15830,
      waterCapacity: 492299,
      propulsionType: "Podded Propulsion Units",
      hullMaterial: "Reinforced Aluminum",
      classification: "Lloyd's Register Class 1",
      safetyEquipment: ["Man overboard detection systems","Automated external defibrillators (AEDs)","Satellite emergency notification devices","Hyperbaric treatment chambers"],
      navigationEquipment: ["Long-range identification and tracking (LRIT)","Dynamic positioning systems","Navigation data management systems"],
      communicationEquipment: ["Broadband internet throughout","Ship-to-shore communication links","Satellite communication systems"],
      entertainmentEquipment: ["Children's entertainment areas","Library and educational facilities","Climbing walls and sports courts","Multi-purpose event spaces"],
      accessibilityFeatures: ["Hearing augmentation systems","Accessible dining facilities","Accessible medical facilities","Assistive listening devices"],
      environmentalFeatures: ["Ballast water management technology","LED lighting throughout","Energy-efficient appliances"]
    },
    isLuxuryVessel: false,
    isPetFriendly: true,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ps-fort-lauderdale-legend",
    name: "PS Fort Lauderdale Legend",
    description: "Sailing from the picturesque port of Fort Lauderdale, the PS Fort Lauderdale Legend represents a new era in cruise experiences. This remarkable boutique cruise ship combines innovative design with thoughtful amenities, creating an atmosphere of refined elegance and warm hospitality.",
    type: "boutique-cruise-ship",
    capacity: 930,
    length: 286,
    width: 52,
    speed: 17,
    topSpeed: 19, // Added topSpeed
    yearBuilt: 2024,
    homePort: {"city":"Fort Lauderdale","country":"United States","coordinates":{"latitude":26.122439,"longitude":-80.137317}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 7430,
      waterCapacity: 279000,
      propulsionType: "Voith Schneider Propellers",
      hullMaterial: "Hybrid Steel-Composite",
      classification: "Bureau Veritas Star Class",
      safetyEquipment: ["Life jackets with integrated GPS","Tactical response equipment","Emergency position indicating radio beacons (EPIRBs)","Automated external defibrillators (AEDs)"],
      navigationEquipment: ["Echo sounders and sonar systems","Night vision systems","Doppler speed logs","Dynamic positioning systems"],
      communicationEquipment: ["Internal crew communication network","Public address systems"],
      entertainmentEquipment: ["Casino with table games and slot machines","Library and educational facilities","Virtual reality gaming center","Cinema with latest releases","Climbing walls and sports courts"],
      accessibilityFeatures: ["Accessible dining facilities","Accessible medical facilities","Hearing augmentation systems"],
      environmentalFeatures: ["Optimized hull design for reduced fuel consumption","Energy-efficient appliances","Advanced water treatment systems","Shore power connectivity"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ps-fort-lauderdale-jewel",
    name: "PS Fort Lauderdale Jewel",
    description: "The PS Fort Lauderdale Jewel stands as a testament to luxury and innovation on the high seas. Departing from Fort Lauderdale, this sophisticated luxury cruise ship features immersive entertainment, wellness facilities, and exquisite cuisine prepared by internationally renowned chefs.",
    type: "luxury-cruise-ship",
    capacity: 378,
    length: 175,
    width: 36,
    speed: 16,
    topSpeed: 19, // Added topSpeed
    yearBuilt: 2015,
    homePort: {"city":"Fort Lauderdale","country":"United States","coordinates":{"latitude":26.122439,"longitude":-80.137317}},
    specifications: {
      engineType: "Gas Turbine Powerplant",
      fuelCapacity: 3150,
      waterCapacity: 113399,
      propulsionType: "Water Jets",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "China Classification Society B",
      safetyEquipment: ["Marine evacuation systems (MES)","Rescue boats and life rafts","Water purification systems","Satellite emergency notification devices"],
      navigationEquipment: ["Night vision systems","Weather routing systems","River radar systems","Navigation data management systems"],
      communicationEquipment: ["Satellite communication systems","Broadband internet throughout"],
      entertainmentEquipment: ["Immersive simulation experiences","Climbing walls and sports courts","Children's entertainment areas"],
      accessibilityFeatures: ["Assistive listening devices","Braille signage throughout"],
      environmentalFeatures: ["Advanced water treatment systems","Biodegradable hydraulic fluids","Food waste digesters","Dynamic routing to optimize fuel usage"]
    },
    isLuxuryVessel: true,
    isPetFriendly: true,
    imageUrl: "/images/vessels/default-vessel.jpg"
  }
];
