// Fitness center venues data for Hong Kong
// This file contains fitness center and wellness facility information for cruise vessels operating from Hong Kong
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const hongKongFitnessCenters: FitnessCenter[] = [
  {
    id: "ca46ff66-ad9d-43d9-ba96-d217baa57458",
    vesselId: "nx--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-623-931-3800",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Arc Trainers", "Stationary Bikes", "VersaClimber", "Rowing Machines", "Elliptical Machines", "StairMaster", "Recumbent Bikes", "Free Weights", "Weight Machines", "Barbells", "Smith Machine", "Cable Machines", "Dumbbells", "Shoulder Press Machine", "Lat Pulldown", "Pull-up Station", "Leg Curl Machine", "Power Rack", "Medicine Balls", "Foam Rollers", "BOSU Balls", "Stability Balls", "Resistance Bands", "Agility Ladders", "Kettlebells", "TRX Suspension Trainers", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Water Stations", "Group Fitness Classes", "Body Composition Analysis", "Toiletries", "Personal Training Sessions", "Fitness Consultations", "Hair Dryers", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    isPopular: true
  },
  {
    id: "934fe9e0-d1f3-4dc2-b666-9da44456c0cd",
    vesselId: "hms-hong-kong-voyager",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-252-239-8206",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "Elliptical Machines", "Stationary Bikes", "VersaClimber", "StairMaster", "Air Bikes", "Spin Bikes", "Rowing Machines", "Arc Trainers", "Weight Machines", "Leg Press Machine", "Lat Pulldown", "Smith Machine", "Barbells", "Free Weights", "Pull-up Station", "Power Rack", "Leg Curl Machine", "Kettlebells", "Medicine Balls", "Battle Ropes", "Foam Rollers", "Agility Ladders", "TRX Suspension Trainers", "Plyo Boxes", "Yoga Mats", "Cryotherapy Chamber"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Hair Dryers", "Group Fitness Classes", "Fitness Tracking", "Toiletries", "Personal Training Sessions", "Water Stations", "Towel Service", "Fitness Consultations", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "75911e4a-13a5-47ac-ab12-a40b7978a9c3",
    vesselId: "fv--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-924-355-2369",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Rowing Machines", "Stationary Bikes", "VersaClimber", "Arc Trainers", "StairMaster", "Elliptical Machines", "Pull-up Station", "Barbells", "Lat Pulldown", "Free Weights", "Leg Press Machine", "Weight Machines", "Cable Machines", "Leg Curl Machine", "Bench Press", "TRX Suspension Trainers", "Stability Balls", "Agility Ladders", "Plyo Boxes", "Kettlebells", "Balance Boards", "Yoga Mats", "Barre Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Workout Programs", "Towel Service", "Water Stations", "Body Composition Analysis", "Fitness Consultations", "Locker Rentals", "Hair Dryers", "Fresh Fruit Bar", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "14bddda5-771c-41ec-9dab-0b5de0393cf0",
    vesselId: "nb-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-807-645-6423",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Arc Trainers", "Treadmills", "Spin Bikes", "Air Bikes", "Elliptical Machines", "Stationary Bikes", "Recumbent Bikes", "VersaClimber", "StairMaster", "Weight Machines", "Bench Press", "Barbells", "Smith Machine", "Dumbbells", "Free Weights", "Cable Machines", "Leg Press Machine", "Leg Curl Machine", "Lat Pulldown", "Pull-up Station", "Power Rack", "TRX Suspension Trainers", "Battle Ropes", "BOSU Balls", "Balance Boards", "Stability Balls", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Strength Training Specialist", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Protein Shakes", "Equipment Orientation", "Towel Service", "Fresh Fruit Bar", "Water Stations", "Fitness Tracking", "Audio/Visual Entertainment", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "952acd9d-d133-4b36-a094-e32535e6183d",
    vesselId: "ly--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Hong Kong. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-300-928-2838",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "StairMaster", "VersaClimber", "Spin Bikes", "Treadmills", "Barbells", "Leg Press Machine", "Smith Machine", "Pull-up Station", "Leg Curl Machine", "Bench Press", "Lat Pulldown", "Shoulder Press Machine", "Medicine Balls", "Yoga Mats", "Agility Ladders", "Battle Ropes", "Balance Boards", "Resistance Bands", "Recovery Tools"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor", "Aqua Fitness Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Workout Programs", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Protein Shakes", "Fitness Consultations", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Toiletries", "Body Composition Analysis", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  }
];
