import { Vessels } from "@/lib/interfaces/services/cruises";

export const berlinVessels: Vessels[] = [
  {
    id: "mv-berlin-explorer",
    name: "MV Berlin Explorer",
    description: "The magnificent MV Berlin Explorer offers a perfect blend of adventure and relaxation for travelers departing from Berlin. This outstanding ocean liner features panoramic ocean views, specialized dining experiences, and enriching activities that connect guests with the wonders of the Northern Europe region.",
    type: "ocean-liner",
    capacity: 1082,
    length: 316,
    width: 57,
    speed: 19,
    topSpeed: 22, // Added topSpeed
    yearBuilt: 2022,
    homePort: {"city":"Berlin","country":"Germany","coordinates":{"latitude":52.520008,"longitude":13.404954}},
    specifications: {
      engineType: "Podded Propulsion",
      fuelCapacity: 9000,
      waterCapacity: 324599,
      propulsionType: "Z-Drive Propulsion",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "China Classification Society B",
      safetyEquipment: ["Emergency position indicating radio beacons (EPIRBs)","Tactical response equipment","Digital safety monitoring systems","Advanced fire detection and suppression systems","Searchlights and rescue equipment"],
      navigationEquipment: ["Inland ECDIS","Global navigation satellite systems (GNSS)","Gyrocompasses and magnetic compasses"],
      communicationEquipment: ["Marine radio telephony","Ship-to-shore communication links","Global Maritime Distress Safety System (GMDSS)"],
      entertainmentEquipment: ["Observation lounges with panoramic views","Theater with Broadway-style productions","Multiple swimming pools and water features"],
      accessibilityFeatures: ["Visual alarm systems","Service animal accommodations","Transfer chairs for pool access"],
      environmentalFeatures: ["Marine ecosystem monitoring equipment","Ballast water management technology","Advanced water treatment systems"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "sy-berlin-voyager",
    name: "SY Berlin Voyager",
    description: "Sailing from the picturesque port of Berlin, the SY Berlin Voyager represents a new era in cruise experiences. This remarkable ocean liner combines innovative design with thoughtful amenities, creating an atmosphere of refined elegance and warm hospitality.",
    type: "ocean-liner",
    capacity: 1337,
    length: 367,
    width: 65,
    speed: 29,
    topSpeed: 33, // Added topSpeed
    yearBuilt: 2015,
    homePort: {"city":"Berlin","country":"Germany","coordinates":{"latitude":52.520008,"longitude":13.404954}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 11920,
      waterCapacity: 401099,
      propulsionType: "Voith Schneider Propellers",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "Lloyd's Register Class 1",
      safetyEquipment: ["Hyperbaric treatment chambers","Satellite emergency notification devices","Man overboard detection systems"],
      navigationEquipment: ["Doppler speed logs","Navigation data management systems"],
      communicationEquipment: ["Broadband internet throughout","Emergency position-indicating radio beacons"],
      entertainmentEquipment: ["Cinema with latest releases","Theater with Broadway-style productions"],
      accessibilityFeatures: ["Height-adjustable furniture in select cabins","Accessible entertainment venues"],
      environmentalFeatures: ["Exhaust gas cleaning systems","Energy-efficient appliances","Recyclable material management systems"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ms-berlin-princess",
    name: "MS Berlin Princess",
    description: "The magnificent MS Berlin Princess offers a perfect blend of adventure and relaxation for travelers departing from Berlin. This outstanding zodiac equipped vessel features panoramic ocean views, specialized dining experiences, and enriching activities that connect guests with the wonders of the Northern Europe region.",
    type: "zodiac-equipped-vessel",
    capacity: 1014,
    length: 302,
    width: 55,
    speed: 16,
    topSpeed: 19, // Added topSpeed
    yearBuilt: 2023,
    homePort: {"city":"Berlin","country":"Germany","coordinates":{"latitude":52.520008,"longitude":13.404954}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 8300,
      waterCapacity: 304200,
      propulsionType: "Azipod Electric Propulsion",
      hullMaterial: "Hybrid Steel-Composite",
      classification: "American Bureau of Shipping A1",
      safetyEquipment: ["Emergency position indicating radio beacons (EPIRBs)","Tactical response equipment","Radar reflectors","Rescue boats and life rafts"],
      navigationEquipment: ["Autopilot systems with track control","Long-range identification and tracking (LRIT)","Infrared camera systems","Navigation data management systems"],
      communicationEquipment: ["Marine radio telephony","Maritime VHF radio systems"],
      entertainmentEquipment: ["Dance clubs and live music venues","Virtual reality gaming center","Full-service spa and fitness center","Multi-purpose event spaces","Cinema with latest releases"],
      accessibilityFeatures: ["Tactile guidance systems","Assistive listening devices"],
      environmentalFeatures: ["Food waste digesters","Noise reduction technology to minimize impact on marine life"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "sy-berlin-legend",
    name: "SY Berlin Legend",
    description: "The majestic SY Berlin Legend represents the pinnacle of maritime engineering and hospitality. Based in Berlin, this exceptional chartered vessel features elegant interiors, cutting-edge facilities, and carefully curated experiences that celebrate the unique culture of the Northern Europe region.",
    type: "chartered-vessel",
    capacity: 669,
    length: 233,
    width: 44,
    speed: 17,
    topSpeed: 19, // Added topSpeed
    yearBuilt: 2021,
    homePort: {"city":"Berlin","country":"Germany","coordinates":{"latitude":52.520008,"longitude":13.404954}},
    specifications: {
      engineType: "Gas Turbine Powerplant",
      fuelCapacity: 5120,
      waterCapacity: 200700,
      propulsionType: "Podded Propulsion Units",
      hullMaterial: "Composite Materials",
      classification: "Bureau Veritas Star Class",
      safetyEquipment: ["Radar reflectors","Personal locator beacons","Survival craft VHF radios","Tactical response equipment"],
      navigationEquipment: ["Long-range identification and tracking (LRIT)","Integrated navigation system displays"],
      communicationEquipment: ["Satellite communication systems"],
      entertainmentEquipment: ["Dance clubs and live music venues","Cinema with latest releases","Casino with table games and slot machines"],
      accessibilityFeatures: ["Visual alarm systems","Wheelchair accessible cabins","Roll-in showers","Hearing augmentation systems"],
      environmentalFeatures: ["Noise reduction technology to minimize impact on marine life","Ballast water management technology","Optimized hull design for reduced fuel consumption","Marine ecosystem monitoring equipment"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "my-berlin-jewel",
    name: "MY Berlin Jewel",
    description: "The majestic MY Berlin Jewel represents the pinnacle of maritime engineering and hospitality. Based in Berlin, this exceptional ultra luxury cruise ship features elegant interiors, cutting-edge facilities, and carefully curated experiences that celebrate the unique culture of the Northern Europe region.",
    type: "ultra-luxury-cruise-ship",
    capacity: 1453,
    length: 390,
    width: 68,
    speed: 25,
    topSpeed: 29, // Added topSpeed
    yearBuilt: 2022,
    homePort: {"city":"Berlin","country":"Germany","coordinates":{"latitude":52.520008,"longitude":13.404954}},
    specifications: {
      engineType: "Podded Propulsion",
      fuelCapacity: 13260,
      waterCapacity: 435900,
      propulsionType: "Z-Drive Propulsion",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "Russian Maritime Register of Shipping KM",
      safetyEquipment: ["Comprehensive medical facilities","Searchlights and rescue equipment","Marine evacuation systems (MES)","Survival craft VHF radios","Tactical response equipment"],
      navigationEquipment: ["Infrared camera systems","Integrated bridge systems"],
      communicationEquipment: ["Global Maritime Distress Safety System (GMDSS)","Broadband internet throughout"],
      entertainmentEquipment: ["Cinema with latest releases","Multiple swimming pools and water features","Full-service spa and fitness center","Observation lounges with panoramic views"],
      accessibilityFeatures: ["Elevator access to all public decks","Service animal accommodations"],
      environmentalFeatures: ["Heat recovery systems","Marine ecosystem monitoring equipment","Ballast water management technology","Shore power connectivity"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  }
];
