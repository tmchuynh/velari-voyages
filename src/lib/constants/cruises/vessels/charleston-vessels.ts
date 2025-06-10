import { Vessels } from "@/lib/interfaces/services/cruises";

export const charlestonVessels: Vessels[] = [
  {
    id: "my-charleston-explorer",
    name: "MY Charleston Explorer",
    description: "The MY Charleston Explorer offers an unparalleled cruising experience from Charleston, combining luxury amenities with state-of-the-art navigation technology. This ultra luxury cruise ship features spacious cabins, gourmet dining options, and entertainment venues that showcase the best of East Coast USA hospitality.",
    type: "ultra-luxury-cruise-ship",
    capacity: 1253,
    length: 350,
    width: 62,
    speed: 23,
    topSpeed: 26, // Added topSpeed
    yearBuilt: 2010,
    homePort: {"city":"Charleston","country":"United States","coordinates":{"latitude":32.77657,"longitude":-79.93092}},
    specifications: {
      engineType: "Solar-Assisted Electric",
      fuelCapacity: 10850,
      waterCapacity: 375900,
      propulsionType: "Voith Schneider Propellers",
      hullMaterial: "Reinforced Aluminum",
      classification: "Bureau Veritas Star Class",
      safetyEquipment: ["Advanced fire detection and suppression systems","Hyperbaric treatment chambers","Water purification systems"],
      navigationEquipment: ["Night vision systems","Automatic identification systems (AIS)","Electronic chart display information systems (ECDIS)","Long-range identification and tracking (LRIT)"],
      communicationEquipment: ["Global Maritime Distress Safety System (GMDSS)","Ship-to-shore communication links","Marine radio telephony"],
      entertainmentEquipment: ["Cinema with latest releases","Casino with table games and slot machines","Climbing walls and sports courts"],
      accessibilityFeatures: ["Accessible shore excursion options","Visual alarm systems"],
      environmentalFeatures: ["Exhaust gas cleaning systems","Advanced water treatment systems"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "mv-charleston-voyager",
    name: "MV Charleston Voyager",
    description: "The majestic MV Charleston Voyager represents the pinnacle of maritime engineering and hospitality. Based in Charleston, this exceptional river cruise ship features elegant interiors, cutting-edge facilities, and carefully curated experiences that celebrate the unique culture of the East Coast USA region.",
    type: "river-cruise-ship",
    capacity: 1732,
    length: 446,
    width: 76,
    speed: 24,
    topSpeed: 27, // Added topSpeed
    yearBuilt: 2020,
    homePort: {"city":"Charleston","country":"United States","coordinates":{"latitude":32.77657,"longitude":-79.93092}},
    specifications: {
      engineType: "Hybrid Power System",
      fuelCapacity: 16940,
      waterCapacity: 519600,
      propulsionType: "Conventional Shaft Propellers",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "ClassNK NS* (Special Purpose Ship)",
      safetyEquipment: ["Advanced fire detection and suppression systems","Hyperbaric treatment chambers","Satellite emergency notification devices","Digital safety monitoring systems","Tactical response equipment"],
      navigationEquipment: ["Electronic chart display information systems (ECDIS)","Integrated navigation system displays","River radar systems","Automatic identification systems (AIS)"],
      communicationEquipment: ["Public address systems","Broadband internet throughout","Marine radio telephony"],
      entertainmentEquipment: ["Children's entertainment areas","Library and educational facilities","Culinary demonstration kitchens","Casino with table games and slot machines"],
      accessibilityFeatures: ["Tactile guidance systems","Service animal accommodations"],
      environmentalFeatures: ["LED lighting throughout","Shore power connectivity","Noise reduction technology to minimize impact on marine life","Advanced water treatment systems"]
    },
    isLuxuryVessel: false,
    isPetFriendly: true,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "my-charleston-princess",
    name: "MY Charleston Princess",
    description: "The MY Charleston Princess offers an unparalleled cruising experience from Charleston, combining luxury amenities with state-of-the-art navigation technology. This expedition ship features spacious cabins, gourmet dining options, and entertainment venues that showcase the best of East Coast USA hospitality.",
    type: "expedition-ship",
    capacity: 1193,
    length: 338,
    width: 60,
    speed: 26,
    topSpeed: 29, // Added topSpeed
    yearBuilt: 2010,
    homePort: {"city":"Charleston","country":"United States","coordinates":{"latitude":32.77657,"longitude":-79.93092}},
    specifications: {
      engineType: "Diesel-Electric Propulsion",
      fuelCapacity: 10140,
      waterCapacity: 357900,
      propulsionType: "Conventional Shaft Propellers",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "DNV GL High Speed & Light Craft",
      safetyEquipment: ["Water purification systems","Emergency position indicating radio beacons (EPIRBs)","Satellite emergency notification devices","Hyperbaric treatment chambers","Emergency escape breathing devices"],
      navigationEquipment: ["Global navigation satellite systems (GNSS)","Weather routing systems","Echo sounders and sonar systems"],
      communicationEquipment: ["Broadband internet throughout","Marine radio telephony"],
      entertainmentEquipment: ["Immersive simulation experiences","Culinary demonstration kitchens"],
      accessibilityFeatures: ["Hearing augmentation systems","Accessible dining facilities"],
      environmentalFeatures: ["Marine ecosystem monitoring equipment","Dynamic routing to optimize fuel usage"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "rms-charleston-legend",
    name: "RMS Charleston Legend",
    description: "Experience the epitome of maritime excellence aboard the RMS Charleston Legend, a premier superyacht sailing from Charleston. With its elegant design, state-of-the-art technology, and exceptional service, every journey promises unforgettable moments and unparalleled comfort.",
    type: "superyacht",
    capacity: 535,
    length: 207,
    width: 41,
    speed: 23,
    topSpeed: 25, // Added topSpeed
    yearBuilt: 2006,
    homePort: {"city":"Charleston","country":"United States","coordinates":{"latitude":32.77657,"longitude":-79.93092}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 4240,
      waterCapacity: 160500,
      propulsionType: "Counter-Rotating Propellers",
      hullMaterial: "High-Tensile Steel Alloy",
      classification: "RINA Green Star Plus",
      safetyEquipment: ["Automated external defibrillators (AEDs)","Weather monitoring stations","Marine evacuation systems (MES)","Tactical response equipment","Comprehensive medical facilities"],
      navigationEquipment: ["Gyrocompasses and magnetic compasses","Integrated navigation system displays","Navigation data management systems","Global navigation satellite systems (GNSS)","Night vision systems"],
      communicationEquipment: ["Emergency position-indicating radio beacons","Digital selective calling equipment"],
      entertainmentEquipment: ["Observation lounges with panoramic views","Immersive simulation experiences"],
      accessibilityFeatures: ["Roll-in showers","Accessible shore excursion options","Accessible medical facilities"],
      environmentalFeatures: ["Noise reduction technology to minimize impact on marine life","Optimized hull design for reduced fuel consumption","Dynamic routing to optimize fuel usage","Recyclable material management systems"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "sy-charleston-jewel",
    name: "SY Charleston Jewel",
    description: "Sailing from the picturesque port of Charleston, the SY Charleston Jewel represents a new era in cruise experiences. This remarkable river cruise ship combines innovative design with thoughtful amenities, creating an atmosphere of refined elegance and warm hospitality.",
    type: "river-cruise-ship",
    capacity: 687,
    length: 237,
    width: 45,
    speed: 26,
    topSpeed: 30, // Added topSpeed
    yearBuilt: 2018,
    homePort: {"city":"Charleston","country":"United States","coordinates":{"latitude":32.77657,"longitude":-79.93092}},
    specifications: {
      engineType: "Integrated Power Systems",
      fuelCapacity: 5330,
      waterCapacity: 206100,
      propulsionType: "Cycloidal Drive",
      hullMaterial: "Hybrid Steel-Composite",
      classification: "American Bureau of Shipping A1",
      safetyEquipment: ["Satellite emergency notification devices","Hyperbaric treatment chambers","Emergency escape breathing devices"],
      navigationEquipment: ["Inland ECDIS","Automatic identification systems (AIS)","Radar and automatic radar plotting aids (ARPAs)","Night vision systems"],
      communicationEquipment: ["Global Maritime Distress Safety System (GMDSS)","Emergency position-indicating radio beacons","Maritime VHF radio systems"],
      entertainmentEquipment: ["Observation lounges with panoramic views","Art gallery and auction facilities","Children's entertainment areas","Theater with Broadway-style productions"],
      accessibilityFeatures: ["Accessible shore excursion options","Visual alarm systems","Braille signage throughout","Service animal accommodations"],
      environmentalFeatures: ["LED lighting throughout","Dynamic routing to optimize fuel usage","Energy-efficient appliances"]
    },
    isLuxuryVessel: false,
    isPetFriendly: true,
    imageUrl: "/images/vessels/default-vessel.jpg"
  }
];
