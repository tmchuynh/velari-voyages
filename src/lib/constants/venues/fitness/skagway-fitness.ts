// Fitness center venues data for Skagway
// This file contains fitness center and wellness facility information for cruise vessels operating from Skagway
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const skagwayFitnessCenters: FitnessCenter[] = [
  {
    id: "5f5ad1ae-8083-440e-a6f8-e0ae6dd1fba7",
    vesselId: "nb--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Skagway. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-696-110-8523",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "StairMaster", "Spin Bikes", "Treadmills", "Arc Trainers", "Elliptical Machines", "Recumbent Bikes", "Leg Curl Machine", "Shoulder Press Machine", "Dumbbells", "Free Weights", "Cable Machines", "Barbells", "Leg Press Machine", "Smith Machine", "Agility Ladders", "Foam Rollers", "Stability Balls", "Kettlebells", "Balance Boards", "TRX Suspension Trainers", "Pilates Reformers", "Barre Equipment", "Cryotherapy Chamber", "Compression Therapy", "Infrared Sauna", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fresh Fruit Bar", "Personal Training Sessions", "Body Composition Analysis", "Workout Programs", "Equipment Orientation", "Protein Shakes", "Locker Rentals", "Toiletries", "Towel Service", "Audio/Visual Entertainment"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "a671ca70-6594-4f3b-848d-0fe1f9291cd9",
    vesselId: "rv-skagway-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-660-796-6120",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Spin Bikes", "VersaClimber", "Rowing Machines", "Stationary Bikes", "Air Bikes", "Arc Trainers", "Elliptical Machines", "Treadmills", "Recumbent Bikes", "Bench Press", "Cable Machines", "Leg Press Machine", "Leg Curl Machine", "Lat Pulldown", "Power Rack", "Shoulder Press Machine", "Free Weights", "Pull-up Station", "Dumbbells", "Barbells", "Battle Ropes", "Balance Boards", "Medicine Balls", "Plyo Boxes", "Kettlebells", "Pilates Reformers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Toiletries", "Workout Programs", "Protein Shakes", "Towel Service", "Fitness Consultations", "Body Composition Analysis", "Fresh Fruit Bar", "Water Stations", "Fitness Tracking", "Personal Training Sessions", "Equipment Orientation", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "59b27948-b4d4-4d6f-bc38-077afcd38e25",
    vesselId: "ps--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the PS  of the Deep. Stay active and healthy while cruising the waters near Skagway with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-783-593-7918",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "StairMaster", "Rowing Machines", "Spin Bikes", "VersaClimber", "Recumbent Bikes", "Free Weights", "Leg Press Machine", "Lat Pulldown", "Power Rack", "Dumbbells", "Leg Curl Machine", "Smith Machine", "Barbells", "Pull-up Station", "Shoulder Press Machine", "Cable Machines", "Weight Machines", "Battle Ropes", "Yoga Mats", "Foam Rollers", "Medicine Balls", "BOSU Balls", "Kettlebells", "Pilates Reformers", "Recovery Tools", "Cryotherapy Chamber"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Towel Service", "Audio/Visual Entertainment", "Protein Shakes", "Locker Rentals", "Water Stations", "Fitness Consultations", "Workout Programs", "Equipment Orientation", "Fresh Fruit Bar", "Hair Dryers"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "b7facfd1-582c-40c2-a33d-a371c09255c3",
    vesselId: "rms-the--mariner",
    name: "Skagway Fitness Center",
    description: "Skagway Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Skagway. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-513-353-7455",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Elliptical Machines", "Rowing Machines", "Treadmills", "Stationary Bikes", "Spin Bikes", "StairMaster", "Air Bikes", "Recumbent Bikes", "Leg Curl Machine", "Free Weights", "Shoulder Press Machine", "Bench Press", "Dumbbells", "Lat Pulldown", "Smith Machine", "Cable Machines", "Barbells", "Weight Machines", "Pull-up Station", "Plyo Boxes", "Resistance Bands", "Stability Balls", "Yoga Mats", "TRX Suspension Trainers", "Battle Ropes", "Agility Ladders", "Cryotherapy Chamber", "Recovery Tools", "Infrared Sauna"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Toiletries", "Group Fitness Classes", "Hair Dryers", "Equipment Orientation", "Towel Service", "Fresh Fruit Bar", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
    hasChildcareServices: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "410f5161-5b07-4c48-bef2-16d56e65b664",
    vesselId: "sy--gale",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the SY  Gale. Stay active and healthy while cruising the waters near Skagway with our state-of-the-art fitness facilities. Our facility features steam room.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-711-425-2662",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Treadmills", "VersaClimber", "Elliptical Machines", "Rowing Machines", "Arc Trainers", "Recumbent Bikes", "Stationary Bikes", "Spin Bikes", "Air Bikes", "Pull-up Station", "Shoulder Press Machine", "Dumbbells", "Weight Machines", "Leg Curl Machine", "Smith Machine", "Free Weights", "Cable Machines", "Bench Press", "Lat Pulldown", "Power Rack", "TRX Suspension Trainers", "BOSU Balls", "Foam Rollers", "Plyo Boxes", "Balance Boards", "Kettlebells", "Agility Ladders", "Battle Ropes", "Massage Chairs", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Corrective Exercise Specialist"],
    amenities: ["Body Composition Analysis", "Hair Dryers", "Protein Shakes", "Fitness Tracking", "Towel Service", "Equipment Orientation", "Toiletries", "Audio/Visual Entertainment", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  }
];
