import { Vessels } from "@/lib/interfaces/services/cruises";

export const dubaiVessels: Vessels[] = [
  {
    id: "mv-dubai-explorer",
    name: "MV Dubai Explorer",
    description: "The magnificent MV Dubai Explorer offers a perfect blend of adventure and relaxation for travelers departing from Dubai. This outstanding chartered vessel features panoramic ocean views, specialized dining experiences, and enriching activities that connect guests with the wonders of the Middle East region.",
    type: "chartered-vessel",
    capacity: 516,
    length: 203,
    width: 40,
    speed: 29,
    topSpeed: 33, // Added topSpeed
    yearBuilt: 2019,
    homePort: {"city":"Dubai","country":"United Arab Emirates","coordinates":{"latitude":25.276987,"longitude":55.296249}},
    specifications: {
      engineType: "Gas Turbine Powerplant",
      fuelCapacity: 4060,
      waterCapacity: 154799,
      propulsionType: "Podded Propulsion Units",
      hullMaterial: "Marine-Grade Steel",
      classification: "ClassNK NS* (Special Purpose Ship)",
      safetyEquipment: ["Advanced fire detection and suppression systems","Man overboard detection systems","Water purification systems","Tactical response equipment","Thermal imaging cameras"],
      navigationEquipment: ["Inland ECDIS","Doppler speed logs"],
      communicationEquipment: ["Public address systems","Satellite communication systems"],
      entertainmentEquipment: ["Full-service spa and fitness center","Observation lounges with panoramic views","Immersive simulation experiences","Casino with table games and slot machines"],
      accessibilityFeatures: ["Wheelchair accessible cabins","Elevator access to all public decks"],
      environmentalFeatures: ["Biodegradable hydraulic fluids","Exhaust gas cleaning systems","Advanced water treatment systems","Marine ecosystem monitoring equipment"]
    },
    isLuxuryVessel: false,
    isPetFriendly: true,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ts-dubai-voyager",
    name: "TS Dubai Voyager",
    description: "Experience the epitome of maritime excellence aboard the TS Dubai Voyager, a premier ice class ship sailing from Dubai. With its elegant design, state-of-the-art technology, and exceptional service, every journey promises unforgettable moments and unparalleled comfort.",
    type: "ice-class-ship",
    capacity: 927,
    length: 285,
    width: 52,
    speed: 25,
    topSpeed: 30, // Added topSpeed
    yearBuilt: 2017,
    homePort: {"city":"Dubai","country":"United Arab Emirates","coordinates":{"latitude":25.276987,"longitude":55.296249}},
    specifications: {
      engineType: "Dual-Fuel Marine Engines",
      fuelCapacity: 7410,
      waterCapacity: 278099,
      propulsionType: "Cycloidal Drive",
      hullMaterial: "Reinforced Aluminum",
      classification: "China Classification Society B",
      safetyEquipment: ["Hyperbaric treatment chambers","Man overboard detection systems","Personal locator beacons","Satellite emergency notification devices","Tactical response equipment"],
      navigationEquipment: ["Global navigation satellite systems (GNSS)","Integrated navigation system displays","Automatic identification systems (AIS)"],
      communicationEquipment: ["Broadband internet throughout","Digital selective calling equipment"],
      entertainmentEquipment: ["Full-service spa and fitness center","Virtual reality gaming center","Observation lounges with panoramic views"],
      accessibilityFeatures: ["Accessible medical facilities","Tactile guidance systems","Elevator access to all public decks","Hearing augmentation systems"],
      environmentalFeatures: ["Dynamic routing to optimize fuel usage","Energy-efficient appliances","Optimized hull design for reduced fuel consumption","Ballast water management technology","Advanced water treatment systems"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "rv-dubai-princess",
    name: "RV Dubai Princess",
    description: "Combining traditional maritime charm with modern amenities, the RV Dubai Princess promises an extraordinary voyage from its home port of Dubai. This impressive mid size cruise ship offers spacious accommodations, diverse dining options, and engaging activities for travelers of all ages.",
    type: "mid-size-cruise-ship",
    capacity: 1261,
    length: 352,
    width: 62,
    speed: 28,
    topSpeed: 32, // Added topSpeed
    yearBuilt: 2019,
    homePort: {"city":"Dubai","country":"United Arab Emirates","coordinates":{"latitude":25.276987,"longitude":55.296249}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 10910,
      waterCapacity: 378300,
      propulsionType: "Z-Drive Propulsion",
      hullMaterial: "Composite Materials",
      classification: "DNV GL High Speed & Light Craft",
      safetyEquipment: ["Advanced fire detection and suppression systems","Hyperbaric treatment chambers"],
      navigationEquipment: ["Weather routing systems","Voyage data recorders (VDRs)","Night vision systems","Navigation data management systems"],
      communicationEquipment: ["Internal crew communication network","Ship-to-shore communication links"],
      entertainmentEquipment: ["Virtual reality gaming center","Culinary demonstration kitchens","Immersive simulation experiences","Art gallery and auction facilities"],
      accessibilityFeatures: ["Hearing augmentation systems","Assistive listening devices","Accessible dining facilities"],
      environmentalFeatures: ["Advanced water treatment systems","Energy-efficient appliances"]
    },
    isLuxuryVessel: false,
    isPetFriendly: true,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "rv-dubai-legend",
    name: "RV Dubai Legend",
    description: "The majestic RV Dubai Legend represents the pinnacle of maritime engineering and hospitality. Based in Dubai, this exceptional adults only ship features elegant interiors, cutting-edge facilities, and carefully curated experiences that celebrate the unique culture of the Middle East region.",
    type: "adults-only-ship",
    capacity: 1500,
    length: 400,
    width: 70,
    speed: 19,
    topSpeed: 22, // Added topSpeed
    yearBuilt: 2011,
    homePort: {"city":"Dubai","country":"United Arab Emirates","coordinates":{"latitude":25.276987,"longitude":55.296249}},
    specifications: {
      engineType: "Gas Turbine Powerplant",
      fuelCapacity: 14000,
      waterCapacity: 450000,
      propulsionType: "Conventional Shaft Propellers",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "DNV GL High Speed & Light Craft",
      safetyEquipment: ["Radar reflectors","Survival craft VHF radios","Marine evacuation systems (MES)","Emergency escape breathing devices","Emergency position indicating radio beacons (EPIRBs)","Satellite emergency notification devices"],
      navigationEquipment: ["Autopilot systems with track control","Echo sounders and sonar systems","Integrated navigation system displays"],
      communicationEquipment: ["Satellite communication systems","Emergency position-indicating radio beacons"],
      entertainmentEquipment: ["Casino with table games and slot machines","Virtual reality gaming center","Theater with Broadway-style productions"],
      accessibilityFeatures: ["Accessible dining facilities","Accessible medical facilities"],
      environmentalFeatures: ["Noise reduction technology to minimize impact on marine life","Biodegradable hydraulic fluids","Optimized hull design for reduced fuel consumption"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "rv-dubai-jewel",
    name: "RV Dubai Jewel",
    description: "The RV Dubai Jewel invites travelers to explore the treasures of Middle East in unmatched comfort. This exceptional boutique cruise ship, based in Dubai, features curated excursions, immersive cultural programs, and luxurious accommodations that ensure an unforgettable journey.",
    type: "boutique-cruise-ship",
    capacity: 587,
    length: 217,
    width: 42,
    speed: 22,
    topSpeed: 25, // Added topSpeed
    yearBuilt: 2022,
    homePort: {"city":"Dubai","country":"United Arab Emirates","coordinates":{"latitude":25.276987,"longitude":55.296249}},
    specifications: {
      engineType: "Podded Propulsion",
      fuelCapacity: 4550,
      waterCapacity: 176100,
      propulsionType: "Podded Propulsion Units",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "ClassNK NS* (Special Purpose Ship)",
      safetyEquipment: ["Digital safety monitoring systems","Life jackets with integrated GPS","Emergency escape breathing devices","Satellite emergency notification devices","Marine evacuation systems (MES)"],
      navigationEquipment: ["Infrared camera systems","Weather routing systems","Autopilot systems with track control","Inland ECDIS"],
      communicationEquipment: ["Internal crew communication network","Marine radio telephony","Public address systems"],
      entertainmentEquipment: ["Virtual reality gaming center","Multiple swimming pools and water features","Cinema with latest releases"],
      accessibilityFeatures: ["Accessible entertainment venues","Height-adjustable furniture in select cabins"],
      environmentalFeatures: ["Exhaust gas cleaning systems","Food waste digesters","LED lighting throughout","Dynamic routing to optimize fuel usage","Shore power connectivity"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  }
];
