// Fitness center venues data for Nassau
// This file contains fitness center and wellness facility information for cruise vessels operating from Nassau
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const nassauFitnessCenters: FitnessCenter[] = [
  {
    id: "1aa039f0-49ff-4c64-906d-8c671448a7dd",
    vesselId: "my--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Nassau. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-305-955-2943",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Rowing Machines", "Spin Bikes", "Arc Trainers", "StairMaster", "Recumbent Bikes", "Elliptical Machines", "VersaClimber", "Barbells", "Free Weights", "Leg Press Machine", "Power Rack", "Bench Press", "Leg Curl Machine", "Pull-up Station", "Dumbbells", "Weight Machines", "Shoulder Press Machine", "Lat Pulldown", "Cable Machines", "Stability Balls", "Kettlebells", "Medicine Balls", "TRX Suspension Trainers", "Yoga Mats", "Agility Ladders", "Infrared Sauna", "Stretching Stations"],
    personalTrainers: ["Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Hair Dryers", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Towel Service", "Fitness Tracking", "Fitness Consultations", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "3a330287-e815-4df8-b78c-86b0d17893e0",
    vesselId: "my-nassau-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Nassau. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-200-398-3698",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Rowing Machines", "Arc Trainers", "Air Bikes", "Spin Bikes", "VersaClimber", "Recumbent Bikes", "StairMaster", "Cable Machines", "Dumbbells", "Free Weights", "Smith Machine", "Weight Machines", "Leg Curl Machine", "Barbells", "Power Rack", "Shoulder Press Machine", "Agility Ladders", "Balance Boards", "Stability Balls", "BOSU Balls", "TRX Suspension Trainers", "Foam Rollers", "Battle Ropes", "Medicine Balls", "Stretching Stations", "Barre Equipment", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Corrective Exercise Specialist", "Aqua Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Personal Training Sessions", "Locker Rentals", "Toiletries", "Water Stations", "Fitness Consultations", "Hair Dryers", "Protein Shakes", "Workout Programs", "Body Composition Analysis", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    isPopular: false
  },
  {
    id: "12af9a98-b0bb-4a3e-b536-e17992512326",
    vesselId: "sy--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Nassau. Our facility features sauna facilities, steam room.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-609-459-4292",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Spin Bikes", "Treadmills", "Elliptical Machines", "VersaClimber", "StairMaster", "Arc Trainers", "Leg Curl Machine", "Free Weights", "Dumbbells", "Bench Press", "Lat Pulldown", "Pull-up Station", "Cable Machines", "Power Rack", "Smith Machine", "Barbells", "Battle Ropes", "Stability Balls", "Resistance Bands", "Medicine Balls", "Kettlebells", "Yoga Mats", "TRX Suspension Trainers", "Cryotherapy Chamber", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Fitness Nutrition Specialist", "Senior Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Equipment Orientation", "Group Fitness Classes", "Hair Dryers", "Personal Training Sessions", "Water Stations", "Towel Service", "Fitness Consultations", "Toiletries", "Audio/Visual Entertainment", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "43f875fc-4196-44aa-9481-51a8bdb7dcb9",
    vesselId: "my-the--mariner",
    name: "MY The  Mariner Fitness Center",
    description: "MY The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-968-556-6862",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Recumbent Bikes", "Rowing Machines", "VersaClimber", "StairMaster", "Elliptical Machines", "Stationary Bikes", "Spin Bikes", "Leg Press Machine", "Barbells", "Cable Machines", "Weight Machines", "Pull-up Station", "Lat Pulldown", "Bench Press", "Smith Machine", "Shoulder Press Machine", "Free Weights", "Kettlebells", "Medicine Balls", "BOSU Balls", "TRX Suspension Trainers", "Resistance Bands", "Foam Rollers", "Stretching Stations", "Barre Equipment"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Body Composition Analysis", "Fresh Fruit Bar", "Workout Programs", "Hair Dryers", "Toiletries", "Water Stations", "Fitness Consultations", "Towel Service", "Fitness Tracking", "Personal Training Sessions", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "e544eb8c-8573-425a-82cd-7ec1b09555e9",
    vesselId: "ps--gale",
    name: "PS  Gale Fitness Center",
    description: "PS  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Nassau. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-517-636-9084",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Stationary Bikes", "Rowing Machines", "StairMaster", "Air Bikes", "Spin Bikes", "Elliptical Machines", "VersaClimber", "Treadmills", "Leg Press Machine", "Dumbbells", "Shoulder Press Machine", "Smith Machine", "Free Weights", "Weight Machines", "Cable Machines", "Pull-up Station", "TRX Suspension Trainers", "Kettlebells", "Plyo Boxes", "Balance Boards", "Agility Ladders", "Recovery Tools", "Infrared Sauna", "Compression Therapy"],
    personalTrainers: ["Strength Training Specialist", "Aqua Fitness Instructor", "Spinning Instructor", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Toiletries", "Fitness Tracking", "Personal Training Sessions", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Workout Programs", "Body Composition Analysis", "Protein Shakes", "Fitness Consultations", "Group Fitness Classes", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    isPopular: false
  }
];
