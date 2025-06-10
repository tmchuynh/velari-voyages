import { Vessels } from "@/lib/interfaces/services/cruises";

export const dublinVessels: Vessels[] = [
  {
    id: "mv-dublin-explorer",
    name: "MV Dublin Explorer",
    description: "The MV Dublin Explorer offers an unparalleled cruising experience from Dublin, combining luxury amenities with state-of-the-art navigation technology. This resort style ship features spacious cabins, gourmet dining options, and entertainment venues that showcase the best of Northern Europe hospitality.",
    type: "resort-style-ship",
    capacity: 1833,
    length: 466,
    width: 79,
    speed: 25,
    topSpeed: 28, // Added topSpeed
    yearBuilt: 2016,
    homePort: {"city":"Dublin","country":"Ireland","coordinates":{"latitude":53.349805,"longitude":-6.26031}},
    specifications: {
      engineType: "Podded Propulsion",
      fuelCapacity: 18400,
      waterCapacity: 549900,
      propulsionType: "Voith Schneider Propellers",
      hullMaterial: "Hybrid Steel-Composite",
      classification: "RINA Green Star Plus",
      safetyEquipment: ["Hyperbaric treatment chambers","Man overboard detection systems","Digital safety monitoring systems","Life jackets with integrated GPS"],
      navigationEquipment: ["Electronic chart display information systems (ECDIS)","Gyrocompasses and magnetic compasses","Inland ECDIS"],
      communicationEquipment: ["Maritime VHF radio systems","Ship-to-shore communication links"],
      entertainmentEquipment: ["Immersive simulation experiences","Multi-purpose event spaces","Theater with Broadway-style productions"],
      accessibilityFeatures: ["Hearing augmentation systems","Height-adjustable furniture in select cabins"],
      environmentalFeatures: ["Shore power connectivity","Optimized hull design for reduced fuel consumption","Recyclable material management systems","Advanced water treatment systems"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ms-dublin-voyager",
    name: "MS Dublin Voyager",
    description: "Experience the epitome of maritime excellence aboard the MS Dublin Voyager, a premier luxury cruise ship sailing from Dublin. With its elegant design, state-of-the-art technology, and exceptional service, every journey promises unforgettable moments and unparalleled comfort.",
    type: "luxury-cruise-ship",
    capacity: 984,
    length: 296,
    width: 54,
    speed: 25,
    topSpeed: 30, // Added topSpeed
    yearBuilt: 2013,
    homePort: {"city":"Dublin","country":"Ireland","coordinates":{"latitude":53.349805,"longitude":-6.26031}},
    specifications: {
      engineType: "LNG-Powered Engines",
      fuelCapacity: 7990,
      waterCapacity: 295200,
      propulsionType: "Voith Schneider Propellers",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "ClassNK NS* (Special Purpose Ship)",
      safetyEquipment: ["Searchlights and rescue equipment","Satellite emergency notification devices","Thermal imaging cameras"],
      navigationEquipment: ["Infrared camera systems","Electronic chart display information systems (ECDIS)","Integrated bridge systems"],
      communicationEquipment: ["Broadband internet throughout","Digital selective calling equipment","Ship-to-shore communication links"],
      entertainmentEquipment: ["Art gallery and auction facilities","Full-service spa and fitness center","Cinema with latest releases","Dance clubs and live music venues","Culinary demonstration kitchens"],
      accessibilityFeatures: ["Accessible dining facilities","Transfer chairs for pool access","Roll-in showers"],
      environmentalFeatures: ["Shore power connectivity","Solar panel supplementation"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "mv-dublin-princess",
    name: "MV Dublin Princess",
    description: "The MV Dublin Princess invites travelers to explore the treasures of Northern Europe in unmatched comfort. This exceptional eco friendly hybrid ship, based in Dublin, features curated excursions, immersive cultural programs, and luxurious accommodations that ensure an unforgettable journey.",
    type: "eco-friendly-hybrid-ship",
    capacity: 1092,
    length: 318,
    width: 57,
    speed: 21,
    topSpeed: 24, // Added topSpeed
    yearBuilt: 2008,
    homePort: {"city":"Dublin","country":"Ireland","coordinates":{"latitude":53.349805,"longitude":-6.26031}},
    specifications: {
      engineType: "Hybrid Power System",
      fuelCapacity: 9060,
      waterCapacity: 327599,
      propulsionType: "Conventional Shaft Propellers",
      hullMaterial: "Marine-Grade Steel",
      classification: "American Bureau of Shipping A1",
      safetyEquipment: ["Emergency position indicating radio beacons (EPIRBs)","Hyperbaric treatment chambers","Marine evacuation systems (MES)","Weather monitoring stations","Searchlights and rescue equipment","Satellite emergency notification devices"],
      navigationEquipment: ["Gyrocompasses and magnetic compasses","Long-range identification and tracking (LRIT)"],
      communicationEquipment: ["Internal crew communication network","Maritime VHF radio systems"],
      entertainmentEquipment: ["Art gallery and auction facilities","Observation lounges with panoramic views","Virtual reality gaming center","Multi-purpose event spaces","Multiple swimming pools and water features"],
      accessibilityFeatures: ["Accessible entertainment venues","Braille signage throughout"],
      environmentalFeatures: ["Exhaust gas cleaning systems","Dynamic routing to optimize fuel usage","Ballast water management technology"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "mv-dublin-legend",
    name: "MV Dublin Legend",
    description: "Combining traditional maritime charm with modern amenities, the MV Dublin Legend promises an extraordinary voyage from its home port of Dublin. This impressive family cruise ship offers spacious accommodations, diverse dining options, and engaging activities for travelers of all ages.",
    type: "family-cruise-ship",
    capacity: 1620,
    length: 424,
    width: 73,
    speed: 27,
    topSpeed: 32, // Added topSpeed
    yearBuilt: 2019,
    homePort: {"city":"Dublin","country":"Ireland","coordinates":{"latitude":53.349805,"longitude":-6.26031}},
    specifications: {
      engineType: "Diesel-Electric Propulsion",
      fuelCapacity: 15470,
      waterCapacity: 486000,
      propulsionType: "Water Jets",
      hullMaterial: "Marine-Grade Steel",
      classification: "RINA Green Star Plus",
      safetyEquipment: ["Marine evacuation systems (MES)","Water purification systems","Thermal imaging cameras","Satellite emergency notification devices","Life jackets with integrated GPS"],
      navigationEquipment: ["Global navigation satellite systems (GNSS)","Bridge alert management systems"],
      communicationEquipment: ["Emergency position-indicating radio beacons","Broadband internet throughout"],
      entertainmentEquipment: ["Observation lounges with panoramic views","Casino with table games and slot machines","Art gallery and auction facilities"],
      accessibilityFeatures: ["Accessible medical facilities","Accessible entertainment venues"],
      environmentalFeatures: ["Exhaust gas cleaning systems","Biodegradable hydraulic fluids","Solar panel supplementation","Marine ecosystem monitoring equipment"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ms-dublin-jewel",
    name: "MS Dublin Jewel",
    description: "Combining traditional maritime charm with modern amenities, the MS Dublin Jewel promises an extraordinary voyage from its home port of Dublin. This impressive resort style ship offers spacious accommodations, diverse dining options, and engaging activities for travelers of all ages.",
    type: "resort-style-ship",
    capacity: 1249,
    length: 349,
    width: 62,
    speed: 27,
    topSpeed: 30, // Added topSpeed
    yearBuilt: 2016,
    homePort: {"city":"Dublin","country":"Ireland","coordinates":{"latitude":53.349805,"longitude":-6.26031}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 10810,
      waterCapacity: 374700,
      propulsionType: "Water Jets",
      hullMaterial: "Hybrid Steel-Composite",
      classification: "Lloyd's Register Class 1",
      safetyEquipment: ["Digital safety monitoring systems","Searchlights and rescue equipment","Automated external defibrillators (AEDs)","Rescue boats and life rafts","Marine evacuation systems (MES)","Emergency position indicating radio beacons (EPIRBs)","Radar reflectors"],
      navigationEquipment: ["Electronic chart display information systems (ECDIS)","Automatic identification systems (AIS)"],
      communicationEquipment: ["Broadband internet throughout","Digital selective calling equipment"],
      entertainmentEquipment: ["Dance clubs and live music venues","Full-service spa and fitness center","Climbing walls and sports courts"],
      accessibilityFeatures: ["Tactile guidance systems","Accessible entertainment venues","Wheelchair accessible cabins"],
      environmentalFeatures: ["Energy-efficient appliances","Heat recovery systems"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  }
];
