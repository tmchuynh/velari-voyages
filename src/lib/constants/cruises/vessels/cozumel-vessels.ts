import { Vessels } from "@/lib/interfaces/services/cruises";

export const cozumelVessels: Vessels[] = [
  {
    id: "mv-cozumel-explorer",
    name: "MV Cozumel Explorer",
    description: "Combining traditional maritime charm with modern amenities, the MV Cozumel Explorer promises an extraordinary voyage from its home port of Cozumel. This impressive superyacht offers spacious accommodations, diverse dining options, and engaging activities for travelers of all ages.",
    type: "superyacht",
    capacity: 691,
    length: 238,
    width: 45,
    speed: 20,
    topSpeed: 23, // Added topSpeed
    yearBuilt: 2021,
    homePort: {"city":"Cozumel","country":"Mexico","coordinates":{"latitude":20.4233,"longitude":-86.9212}},
    specifications: {
      engineType: "Solar-Assisted Electric",
      fuelCapacity: 5350,
      waterCapacity: 207299,
      propulsionType: "Counter-Rotating Propellers",
      hullMaterial: "Composite Materials",
      classification: "DNV GL High Speed & Light Craft",
      safetyEquipment: ["Emergency escape breathing devices","Satellite emergency notification devices","Advanced fire detection and suppression systems"],
      navigationEquipment: ["Inland ECDIS","Weather routing systems"],
      communicationEquipment: ["Ship-to-shore communication links","Public address systems","Emergency position-indicating radio beacons"],
      entertainmentEquipment: ["Cinema with latest releases","Climbing walls and sports courts","Theater with Broadway-style productions","Art gallery and auction facilities","Observation lounges with panoramic views"],
      accessibilityFeatures: ["Service animal accommodations","Hearing augmentation systems","Accessible shore excursion options"],
      environmentalFeatures: ["Dynamic routing to optimize fuel usage","Advanced water treatment systems","Heat recovery systems","Shore power connectivity"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ms-cozumel-voyager",
    name: "MS Cozumel Voyager",
    description: "The MS Cozumel Voyager offers an unparalleled cruising experience from Cozumel, combining luxury amenities with state-of-the-art navigation technology. This resort style ship features spacious cabins, gourmet dining options, and entertainment venues that showcase the best of Caribbean hospitality.",
    type: "resort-style-ship",
    capacity: 978,
    length: 295,
    width: 54,
    speed: 24,
    topSpeed: 28, // Added topSpeed
    yearBuilt: 2021,
    homePort: {"city":"Cozumel","country":"Mexico","coordinates":{"latitude":20.4233,"longitude":-86.9212}},
    specifications: {
      engineType: "LNG-Powered Engines",
      fuelCapacity: 7960,
      waterCapacity: 293400,
      propulsionType: "Podded Propulsion Units",
      hullMaterial: "Composite Materials",
      classification: "China Classification Society B",
      safetyEquipment: ["Searchlights and rescue equipment","Emergency escape breathing devices","Automated external defibrillators (AEDs)","Advanced fire detection and suppression systems","Weather monitoring stations","Personal locator beacons"],
      navigationEquipment: ["Night vision systems","Navigation data management systems","Gyrocompasses and magnetic compasses"],
      communicationEquipment: ["Satellite communication systems","Internal crew communication network","Maritime VHF radio systems"],
      entertainmentEquipment: ["Full-service spa and fitness center","Virtual reality gaming center","Library and educational facilities","Observation lounges with panoramic views","Immersive simulation experiences"],
      accessibilityFeatures: ["Transfer chairs for pool access","Accessible medical facilities","Height-adjustable furniture in select cabins"],
      environmentalFeatures: ["Biodegradable hydraulic fluids","Recyclable material management systems","Exhaust gas cleaning systems","Optimized hull design for reduced fuel consumption","Dynamic routing to optimize fuel usage"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "mv-cozumel-princess",
    name: "MV Cozumel Princess",
    description: "The magnificent MV Cozumel Princess offers a perfect blend of adventure and relaxation for travelers departing from Cozumel. This outstanding short hop ferry features panoramic ocean views, specialized dining experiences, and enriching activities that connect guests with the wonders of the Caribbean region.",
    type: "short-hop-ferry",
    capacity: 1688,
    length: 437,
    width: 75,
    speed: 18,
    topSpeed: 21, // Added topSpeed
    yearBuilt: 2015,
    homePort: {"city":"Cozumel","country":"Mexico","coordinates":{"latitude":20.4233,"longitude":-86.9212}},
    specifications: {
      engineType: "Gas Turbine Powerplant",
      fuelCapacity: 16380,
      waterCapacity: 506400,
      propulsionType: "Water Jets",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "RINA Green Star Plus",
      safetyEquipment: ["Comprehensive medical facilities","Personal locator beacons","Water purification systems","Automated external defibrillators (AEDs)"],
      navigationEquipment: ["Night vision systems","Gyrocompasses and magnetic compasses","Integrated bridge systems"],
      communicationEquipment: ["Digital selective calling equipment","Emergency position-indicating radio beacons","Public address systems"],
      entertainmentEquipment: ["Immersive simulation experiences","Theater with Broadway-style productions"],
      accessibilityFeatures: ["Tactile guidance systems","Visual alarm systems","Hearing augmentation systems"],
      environmentalFeatures: ["Dynamic routing to optimize fuel usage","Advanced water treatment systems","Heat recovery systems"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "rms-cozumel-legend",
    name: "RMS Cozumel Legend",
    description: "With its distinctive profile and luxurious appointments, the RMS Cozumel Legend stands as a jewel in the Cozumel harbor. This prestigious small ocean ship offers travelers a perfect combination of adventure and relaxation, with expert-guided excursions, world-class entertainment, and sublime culinary experiences.",
    type: "small-ocean-ship",
    capacity: 1103,
    length: 320,
    width: 58,
    speed: 28,
    topSpeed: 33, // Added topSpeed
    yearBuilt: 2015,
    homePort: {"city":"Cozumel","country":"Mexico","coordinates":{"latitude":20.4233,"longitude":-86.9212}},
    specifications: {
      engineType: "LNG-Powered Engines",
      fuelCapacity: 9280,
      waterCapacity: 330900,
      propulsionType: "Counter-Rotating Propellers",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "China Classification Society B",
      safetyEquipment: ["Tactical response equipment","Comprehensive medical facilities","Thermal imaging cameras","Emergency escape breathing devices"],
      navigationEquipment: ["Automatic identification systems (AIS)","Integrated bridge systems","Bridge alert management systems","Doppler speed logs"],
      communicationEquipment: ["Emergency position-indicating radio beacons","Broadband internet throughout","Satellite communication systems"],
      entertainmentEquipment: ["Climbing walls and sports courts","Library and educational facilities","Art gallery and auction facilities","Children's entertainment areas"],
      accessibilityFeatures: ["Accessible shore excursion options","Wheelchair accessible cabins","Elevator access to all public decks"],
      environmentalFeatures: ["Dynamic routing to optimize fuel usage","Noise reduction technology to minimize impact on marine life","Shore power connectivity","Biodegradable hydraulic fluids","Marine ecosystem monitoring equipment"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "rms-cozumel-jewel",
    name: "RMS Cozumel Jewel",
    description: "Combining traditional maritime charm with modern amenities, the RMS Cozumel Jewel promises an extraordinary voyage from its home port of Cozumel. This impressive chartered vessel offers spacious accommodations, diverse dining options, and engaging activities for travelers of all ages.",
    type: "chartered-vessel",
    capacity: 570,
    length: 214,
    width: 42,
    speed: 15,
    topSpeed: 17, // Added topSpeed
    yearBuilt: 2021,
    homePort: {"city":"Cozumel","country":"Mexico","coordinates":{"latitude":20.4233,"longitude":-86.9212}},
    specifications: {
      engineType: "LNG-Powered Engines",
      fuelCapacity: 4490,
      waterCapacity: 171000,
      propulsionType: "Water Jets",
      hullMaterial: "Marine-Grade Steel",
      classification: "Lloyd's Register Class 1",
      safetyEquipment: ["Weather monitoring stations","Searchlights and rescue equipment","Advanced fire detection and suppression systems","Comprehensive medical facilities","Marine evacuation systems (MES)"],
      navigationEquipment: ["Gyrocompasses and magnetic compasses","Global navigation satellite systems (GNSS)","Integrated bridge systems"],
      communicationEquipment: ["Internal crew communication network","Global Maritime Distress Safety System (GMDSS)"],
      entertainmentEquipment: ["Art gallery and auction facilities","Observation lounges with panoramic views","Children's entertainment areas"],
      accessibilityFeatures: ["Roll-in showers","Assistive listening devices","Service animal accommodations"],
      environmentalFeatures: ["Dynamic routing to optimize fuel usage","Marine ecosystem monitoring equipment"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  }
];
