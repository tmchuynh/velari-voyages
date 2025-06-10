// Fitness center venues data for Milan
// This file contains fitness center and wellness facility information for cruise vessels operating from Milan
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const milanFitnessCenters: FitnessCenter[] = [
  {
    id: "63568ef7-3589-4e5d-be3e-cc4be0dfa3f0",
    vesselId: "ms--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Milan. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-495-725-7399",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Air Bikes", "StairMaster", "Arc Trainers", "Rowing Machines", "Treadmills", "Elliptical Machines", "Bench Press", "Barbells", "Leg Curl Machine", "Cable Machines", "Smith Machine", "Lat Pulldown", "Dumbbells", "Pull-up Station", "Stability Balls", "Kettlebells", "TRX Suspension Trainers", "Balance Boards", "Foam Rollers", "Yoga Mats", "Medicine Balls", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Fitness Consultations", "Toiletries", "Fresh Fruit Bar", "Fitness Tracking", "Protein Shakes", "Equipment Orientation", "Personal Training Sessions", "Audio/Visual Entertainment", "Hair Dryers", "Workout Programs", "Body Composition Analysis", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "473a407c-beb8-4691-9491-70fe06576409",
    vesselId: "sy-milan-voyager",
    name: "SY Milan Voyager Fitness Center",
    description: "SY Milan Voyager Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Milan. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-776-383-8382",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Rowing Machines", "VersaClimber", "Recumbent Bikes", "Treadmills", "Arc Trainers", "Air Bikes", "StairMaster", "Stationary Bikes", "Pull-up Station", "Shoulder Press Machine", "Barbells", "Free Weights", "Weight Machines", "Leg Press Machine", "Leg Curl Machine", "Dumbbells", "Power Rack", "Bench Press", "Cable Machines", "Lat Pulldown", "Kettlebells", "Balance Boards", "TRX Suspension Trainers", "Medicine Balls", "Foam Rollers", "Plyo Boxes", "Stability Balls", "Resistance Bands", "Barre Equipment", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Pilates Instructor", "Spinning Instructor"],
    amenities: ["Workout Programs", "Towel Service", "Water Stations", "Locker Rentals", "Fresh Fruit Bar", "Body Composition Analysis", "Group Fitness Classes", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "38576f99-6e00-4f69-a755-a0eb77295459",
    vesselId: "ts--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Milan. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-307-286-6427",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Rowing Machines", "VersaClimber", "Stationary Bikes", "StairMaster", "Air Bikes", "Elliptical Machines", "Arc Trainers", "Lat Pulldown", "Bench Press", "Barbells", "Pull-up Station", "Smith Machine", "Weight Machines", "Shoulder Press Machine", "Dumbbells", "Leg Press Machine", "Agility Ladders", "Battle Ropes", "Resistance Bands", "Yoga Mats", "BOSU Balls", "Plyo Boxes", "Balance Boards", "TRX Suspension Trainers", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Yoga Instructor", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Pilates Instructor"],
    amenities: ["Towel Service", "Workout Programs", "Water Stations", "Hair Dryers", "Audio/Visual Entertainment", "Personal Training Sessions", "Fresh Fruit Bar", "Group Fitness Classes", "Protein Shakes", "Equipment Orientation", "Locker Rentals", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "3467514e-f5aa-4b72-8d8c-b71d6b79390b",
    vesselId: "ms-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Milan. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-642-929-3850",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Treadmills", "Arc Trainers", "Air Bikes", "Rowing Machines", "VersaClimber", "Stationary Bikes", "Free Weights", "Smith Machine", "Leg Press Machine", "Dumbbells", "Pull-up Station", "Bench Press", "Barbells", "Shoulder Press Machine", "Cable Machines", "Power Rack", "Weight Machines", "Leg Curl Machine", "Kettlebells", "Balance Boards", "Stability Balls", "Foam Rollers", "Yoga Mats", "Plyo Boxes", "TRX Suspension Trainers", "BOSU Balls", "Compression Therapy", "Massage Chairs"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Pilates Instructor"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Personal Training Sessions", "Locker Rentals", "Protein Shakes", "Hair Dryers", "Fresh Fruit Bar", "Toiletries", "Body Composition Analysis", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "1d9b9512-2b32-4e4c-9259-6817855fe8d1",
    vesselId: "sv--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Milan. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-772-366-2995",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "StairMaster", "Recumbent Bikes", "Spin Bikes", "Elliptical Machines", "Arc Trainers", "Power Rack", "Pull-up Station", "Barbells", "Bench Press", "Cable Machines", "Dumbbells", "Leg Curl Machine", "Free Weights", "TRX Suspension Trainers", "Battle Ropes", "Medicine Balls", "Plyo Boxes", "Stability Balls", "Balance Boards", "BOSU Balls", "Yoga Mats", "Compression Therapy"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Hair Dryers", "Workout Programs", "Fitness Tracking", "Fitness Consultations", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Toiletries", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  }
];
