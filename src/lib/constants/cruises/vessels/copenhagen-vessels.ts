import { Vessels } from "@/lib/interfaces/services/cruises";

export const copenhagenVessels: Vessels[] = [
  {
    id: "ps-copenhagen-explorer",
    name: "PS Copenhagen Explorer",
    description: "Sailing from the picturesque port of Copenhagen, the PS Copenhagen Explorer represents a new era in cruise experiences. This remarkable luxury cruise ship combines innovative design with thoughtful amenities, creating an atmosphere of refined elegance and warm hospitality.",
    type: "luxury-cruise-ship",
    capacity: 333,
    length: 166,
    width: 34,
    speed: 23,
    topSpeed: 26, // Added topSpeed
    yearBuilt: 2018,
    homePort: {"city":"Copenhagen","country":"Denmark","coordinates":{"latitude":55.6761,"longitude":12.5683}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 2820,
      waterCapacity: 99899,
      propulsionType: "Counter-Rotating Propellers",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "DNV GL High Speed & Light Craft",
      safetyEquipment: ["Rescue boats and life rafts","Tactical response equipment","Weather monitoring stations","Satellite emergency notification devices"],
      navigationEquipment: ["Global navigation satellite systems (GNSS)","Inland ECDIS","River radar systems"],
      communicationEquipment: ["Global Maritime Distress Safety System (GMDSS)","Satellite communication systems"],
      entertainmentEquipment: ["Theater with Broadway-style productions","Art gallery and auction facilities"],
      accessibilityFeatures: ["Service animal accommodations","Assistive listening devices","Hearing augmentation systems"],
      environmentalFeatures: ["LED lighting throughout","Noise reduction technology to minimize impact on marine life","Advanced water treatment systems","Heat recovery systems"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "ms-copenhagen-voyager",
    name: "MS Copenhagen Voyager",
    description: "Setting sail from the beautiful port of Copenhagen, the MS Copenhagen Voyager is a floating paradise designed for the discerning traveler. This remarkable ultra luxury cruise ship boasts panoramic viewing decks, world-class cuisine, and personalized service that ensures an unforgettable journey.",
    type: "ultra-luxury-cruise-ship",
    capacity: 803,
    length: 260,
    width: 49,
    speed: 28,
    topSpeed: 32, // Added topSpeed
    yearBuilt: 2022,
    homePort: {"city":"Copenhagen","country":"Denmark","coordinates":{"latitude":55.6761,"longitude":12.5683}},
    specifications: {
      engineType: "Hybrid Power System",
      fuelCapacity: 6370,
      waterCapacity: 240899,
      propulsionType: "Conventional Shaft Propellers",
      hullMaterial: "Ice-Strengthened Steel",
      classification: "Bureau Veritas Star Class",
      safetyEquipment: ["Automated external defibrillators (AEDs)","Marine evacuation systems (MES)","Satellite emergency notification devices"],
      navigationEquipment: ["Night vision systems","Navigation data management systems","Radar and automatic radar plotting aids (ARPAs)","Electronic chart display information systems (ECDIS)","Long-range identification and tracking (LRIT)"],
      communicationEquipment: ["Maritime VHF radio systems","Broadband internet throughout"],
      entertainmentEquipment: ["Multiple swimming pools and water features","Virtual reality gaming center","Immersive simulation experiences","Observation lounges with panoramic views"],
      accessibilityFeatures: ["Roll-in showers","Wheelchair accessible cabins","Accessible medical facilities"],
      environmentalFeatures: ["Energy-efficient appliances","Ballast water management technology"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "rms-copenhagen-princess",
    name: "RMS Copenhagen Princess",
    description: "Sailing from the picturesque port of Copenhagen, the RMS Copenhagen Princess represents a new era in cruise experiences. This remarkable eco friendly hybrid ship combines innovative design with thoughtful amenities, creating an atmosphere of refined elegance and warm hospitality.",
    type: "eco-friendly-hybrid-ship",
    capacity: 1934,
    length: 486,
    width: 82,
    speed: 16,
    topSpeed: 18, // Added topSpeed
    yearBuilt: 2014,
    homePort: {"city":"Copenhagen","country":"Denmark","coordinates":{"latitude":55.6761,"longitude":12.5683}},
    specifications: {
      engineType: "Podded Propulsion",
      fuelCapacity: 19920,
      waterCapacity: 580199,
      propulsionType: "Z-Drive Propulsion",
      hullMaterial: "Reinforced Aluminum",
      classification: "DNV GL High Speed & Light Craft",
      safetyEquipment: ["Emergency position indicating radio beacons (EPIRBs)","Hyperbaric treatment chambers","Rescue boats and life rafts","Comprehensive medical facilities","Radar reflectors"],
      navigationEquipment: ["Infrared camera systems","Inland ECDIS","Long-range identification and tracking (LRIT)"],
      communicationEquipment: ["Maritime VHF radio systems","Digital selective calling equipment","Internal crew communication network"],
      entertainmentEquipment: ["Art gallery and auction facilities","Dance clubs and live music venues","Library and educational facilities","Cinema with latest releases"],
      accessibilityFeatures: ["Assistive listening devices","Wheelchair accessible cabins","Hearing augmentation systems","Accessible shore excursion options"],
      environmentalFeatures: ["Solar panel supplementation","Recyclable material management systems","Marine ecosystem monitoring equipment"]
    },
    isLuxuryVessel: true,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "sy-copenhagen-legend",
    name: "SY Copenhagen Legend",
    description: "Experience the epitome of maritime excellence aboard the SY Copenhagen Legend, a premier polar expedition ship sailing from Copenhagen. With its elegant design, state-of-the-art technology, and exceptional service, every journey promises unforgettable moments and unparalleled comfort.",
    type: "polar-expedition-ship",
    capacity: 815,
    length: 263,
    width: 49,
    speed: 24,
    topSpeed: 27, // Added topSpeed
    yearBuilt: 2016,
    homePort: {"city":"Copenhagen","country":"Denmark","coordinates":{"latitude":55.6761,"longitude":12.5683}},
    specifications: {
      engineType: "Azimuth Thrusters",
      fuelCapacity: 6440,
      waterCapacity: 244500,
      propulsionType: "Counter-Rotating Propellers",
      hullMaterial: "Marine-Grade Steel",
      classification: "China Classification Society B",
      safetyEquipment: ["Life jackets with integrated GPS","Hyperbaric treatment chambers","Tactical response equipment","Personal locator beacons","Satellite emergency notification devices","Weather monitoring stations"],
      navigationEquipment: ["Voyage data recorders (VDRs)","Automatic identification systems (AIS)","Integrated navigation system displays","Navigation data management systems","River radar systems"],
      communicationEquipment: ["Public address systems","Broadband internet throughout"],
      entertainmentEquipment: ["Immersive simulation experiences","Virtual reality gaming center","Theater with Broadway-style productions","Multi-purpose event spaces","Children's entertainment areas"],
      accessibilityFeatures: ["Tactile guidance systems","Braille signage throughout","Accessible medical facilities"],
      environmentalFeatures: ["Marine ecosystem monitoring equipment","LED lighting throughout"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  },
  {
    id: "sy-copenhagen-jewel",
    name: "SY Copenhagen Jewel",
    description: "The SY Copenhagen Jewel invites travelers to explore the treasures of Northern Europe in unmatched comfort. This exceptional party cruise ship, based in Copenhagen, features curated excursions, immersive cultural programs, and luxurious accommodations that ensure an unforgettable journey.",
    type: "party-cruise-ship",
    capacity: 502,
    length: 200,
    width: 40,
    speed: 23,
    topSpeed: 28, // Added topSpeed
    yearBuilt: 2019,
    homePort: {"city":"Copenhagen","country":"Denmark","coordinates":{"latitude":55.6761,"longitude":12.5683}},
    specifications: {
      engineType: "Integrated Power Systems",
      fuelCapacity: 4000,
      waterCapacity: 150600,
      propulsionType: "Z-Drive Propulsion",
      hullMaterial: "Composite Materials",
      classification: "Bureau Veritas Star Class",
      safetyEquipment: ["Radar reflectors","Emergency position indicating radio beacons (EPIRBs)","Tactical response equipment","Advanced fire detection and suppression systems"],
      navigationEquipment: ["Weather routing systems","Navigation data management systems","Infrared camera systems","Long-range identification and tracking (LRIT)","Echo sounders and sonar systems"],
      communicationEquipment: ["Internal crew communication network","Digital selective calling equipment"],
      entertainmentEquipment: ["Immersive simulation experiences","Dance clubs and live music venues","Library and educational facilities","Multi-purpose event spaces","Virtual reality gaming center"],
      accessibilityFeatures: ["Accessible entertainment venues","Assistive listening devices","Braille signage throughout"],
      environmentalFeatures: ["Exhaust gas cleaning systems","Solar panel supplementation","Food waste digesters","Dynamic routing to optimize fuel usage"]
    },
    isLuxuryVessel: false,
    isPetFriendly: false,
    imageUrl: "/images/vessels/default-vessel.jpg"
  }
];
