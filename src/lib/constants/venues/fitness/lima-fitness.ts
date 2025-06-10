// Fitness center venues data for Lima
// This file contains fitness center and wellness facility information for cruise vessels operating from Lima
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const limaFitnessCenters: FitnessCenter[] = [
  {
    id: "6723e54a-4f34-423e-83e1-493c047e5052",
    vesselId: "hms--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-616-990-1905",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Arc Trainers", "VersaClimber", "Air Bikes", "Stationary Bikes", "StairMaster", "Spin Bikes", "Free Weights", "Smith Machine", "Dumbbells", "Power Rack", "Bench Press", "Weight Machines", "Leg Press Machine", "Cable Machines", "Leg Curl Machine", "Shoulder Press Machine", "Barbells", "Stability Balls", "Agility Ladders", "Medicine Balls", "Resistance Bands", "Kettlebells", "Barre Equipment", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Water Stations", "Locker Rentals", "Hair Dryers", "Group Fitness Classes", "Protein Shakes", "Equipment Orientation", "Fitness Consultations", "Body Composition Analysis", "Towel Service", "Workout Programs", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "0168cbc4-09c4-4f1c-9f57-712f5cd950e9",
    vesselId: "ss-lima-voyager",
    name: "Lima Fitness Center",
    description: "Lima Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-710-718-1200",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "StairMaster", "Arc Trainers", "Spin Bikes", "Recumbent Bikes", "Weight Machines", "Bench Press", "Pull-up Station", "Leg Press Machine", "Dumbbells", "Leg Curl Machine", "Free Weights", "Lat Pulldown", "Power Rack", "Balance Boards", "Stability Balls", "TRX Suspension Trainers", "Battle Ropes", "Yoga Mats", "BOSU Balls", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Hair Dryers", "Towel Service", "Locker Rentals", "Protein Shakes", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Toiletries", "Fitness Tracking"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "5ab50f1d-245d-4b74-8ba1-d08ecba606ac",
    vesselId: "hms--of-the-deep",
    name: "Lima Fitness Center",
    description: "Discover wellness at sea with Lima Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-603-220-8601",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Stationary Bikes", "Air Bikes", "Rowing Machines", "Recumbent Bikes", "StairMaster", "Elliptical Machines", "Barbells", "Weight Machines", "Shoulder Press Machine", "Smith Machine", "Bench Press", "Power Rack", "Leg Curl Machine", "Cable Machines", "Pull-up Station", "TRX Suspension Trainers", "Battle Ropes", "Agility Ladders", "Yoga Mats", "BOSU Balls", "Cryotherapy Chamber", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Aqua Fitness Instructor"],
    amenities: ["Hair Dryers", "Workout Programs", "Equipment Orientation", "Water Stations", "Fitness Consultations", "Fresh Fruit Bar", "Toiletries", "Towel Service", "Body Composition Analysis", "Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "fb9dd4df-f556-45b3-861a-2bc7c8bf15b7",
    vesselId: "hms-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the HMS The  Mariner. Stay active and healthy while cruising the waters near Lima with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-551-411-2430",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "VersaClimber", "StairMaster", "Elliptical Machines", "Treadmills", "Arc Trainers", "Recumbent Bikes", "Rowing Machines", "Air Bikes", "Stationary Bikes", "Free Weights", "Weight Machines", "Barbells", "Power Rack", "Cable Machines", "Leg Press Machine", "Dumbbells", "Bench Press", "Smith Machine", "Pull-up Station", "Shoulder Press Machine", "TRX Suspension Trainers", "Stability Balls", "Battle Ropes", "Resistance Bands", "Medicine Balls", "Foam Rollers", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Corrective Exercise Specialist", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Hair Dryers", "Locker Rentals", "Body Composition Analysis", "Fitness Tracking", "Fitness Consultations", "Fresh Fruit Bar", "Toiletries", "Workout Programs", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "fcf86271-db5f-4529-930c-36fb888e32cb",
    vesselId: "hms--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-730-874-2040",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "Treadmills", "Arc Trainers", "Recumbent Bikes", "Smith Machine", "Power Rack", "Lat Pulldown", "Cable Machines", "Free Weights", "Shoulder Press Machine", "Leg Press Machine", "Barbells", "Bench Press", "Weight Machines", "Balance Boards", "Agility Ladders", "Plyo Boxes", "TRX Suspension Trainers", "Battle Ropes", "Yoga Mats", "BOSU Balls", "Cryotherapy Chamber", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Fitness Nutrition Specialist", "Yoga Instructor", "Pilates Instructor"],
    amenities: ["Audio/Visual Entertainment", "Group Fitness Classes", "Personal Training Sessions", "Body Composition Analysis", "Protein Shakes", "Toiletries", "Hair Dryers", "Fitness Consultations", "Locker Rentals", "Equipment Orientation", "Water Stations", "Towel Service", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  }
];
