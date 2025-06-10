// Fitness center venues data for New Orleans
// This file contains fitness center and wellness facility information for cruise vessels operating from New Orleans
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const newOrleansFitnessCenters: FitnessCenter[] = [
  {
    id: "fb07badb-a7c9-4ef6-8e29-2324499b1c03",
    vesselId: "hms--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-790-675-8817",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Air Bikes", "Elliptical Machines", "Rowing Machines", "Treadmills", "StairMaster", "Recumbent Bikes", "VersaClimber", "Arc Trainers", "Free Weights", "Lat Pulldown", "Smith Machine", "Dumbbells", "Cable Machines", "Power Rack", "Barbells", "Leg Press Machine", "Weight Machines", "Leg Curl Machine", "Shoulder Press Machine", "Bench Press", "TRX Suspension Trainers", "Battle Ropes", "Agility Ladders", "Yoga Mats", "Balance Boards", "BOSU Balls", "Massage Chairs", "Stretching Stations", "Cryotherapy Chamber", "Infrared Sauna", "Compression Therapy", "Barre Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Hair Dryers", "Protein Shakes", "Group Fitness Classes", "Audio/Visual Entertainment", "Locker Rentals", "Fresh Fruit Bar", "Equipment Orientation", "Toiletries", "Personal Training Sessions", "Fitness Tracking", "Fitness Consultations", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "1cd20ced-f2df-499c-912a-f33a70957cea",
    vesselId: "rv-new-orleans-voyager",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the RV New Orleans Voyager. Stay active and healthy while cruising the waters near New Orleans with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-511-920-3582",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Treadmills", "Arc Trainers", "Spin Bikes", "VersaClimber", "Elliptical Machines", "Leg Press Machine", "Bench Press", "Weight Machines", "Barbells", "Pull-up Station", "Leg Curl Machine", "Dumbbells", "Power Rack", "Free Weights", "Cable Machines", "Resistance Bands", "Kettlebells", "BOSU Balls", "Battle Ropes", "Agility Ladders", "Balance Boards", "Yoga Mats", "Compression Therapy", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Fitness Tracking", "Toiletries", "Fresh Fruit Bar", "Personal Training Sessions", "Equipment Orientation", "Locker Rentals", "Group Fitness Classes", "Workout Programs", "Protein Shakes", "Fitness Consultations"],
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "7ce28a90-3a9f-416a-b8ff-f0e9d3e374c6",
    vesselId: "ps--of-the-deep",
    name: "New Orleans Fitness Center",
    description: "New Orleans Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-996-321-3232",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Recumbent Bikes", "VersaClimber", "Elliptical Machines", "Air Bikes", "Treadmills", "Cable Machines", "Barbells", "Smith Machine", "Lat Pulldown", "Weight Machines", "Leg Press Machine", "Shoulder Press Machine", "Bench Press", "Leg Curl Machine", "Kettlebells", "Foam Rollers", "Agility Ladders", "Medicine Balls", "Stability Balls", "Plyo Boxes", "Yoga Mats", "Resistance Bands", "Barre Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Fitness Tracking", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Group Fitness Classes", "Protein Shakes", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "18d434ac-eee2-4eee-9a4b-08147b1dc90d",
    vesselId: "fv-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around New Orleans. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-487-477-6893",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Spin Bikes", "Air Bikes", "StairMaster", "Arc Trainers", "VersaClimber", "Bench Press", "Power Rack", "Smith Machine", "Leg Curl Machine", "Weight Machines", "Leg Press Machine", "Barbells", "Free Weights", "Pull-up Station", "Lat Pulldown", "Dumbbells", "Shoulder Press Machine", "Stability Balls", "TRX Suspension Trainers", "BOSU Balls", "Agility Ladders", "Medicine Balls", "Battle Ropes", "Resistance Bands", "Compression Therapy", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Hair Dryers", "Water Stations", "Equipment Orientation", "Personal Training Sessions", "Toiletries", "Body Composition Analysis", "Fresh Fruit Bar", "Group Fitness Classes", "Fitness Consultations", "Protein Shakes", "Workout Programs"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "f08509f2-2c4a-4009-9e6e-e66df34ca527",
    vesselId: "ss--gale",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-778-364-1495",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Spin Bikes", "Elliptical Machines", "Arc Trainers", "Air Bikes", "Recumbent Bikes", "Rowing Machines", "Stationary Bikes", "Dumbbells", "Bench Press", "Shoulder Press Machine", "Weight Machines", "Leg Press Machine", "Free Weights", "Power Rack", "Leg Curl Machine", "Cable Machines", "Smith Machine", "Pull-up Station", "Foam Rollers", "TRX Suspension Trainers", "Balance Boards", "Yoga Mats", "Medicine Balls", "BOSU Balls", "Cryotherapy Chamber"],
    personalTrainers: ["Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Body Composition Analysis", "Fitness Tracking", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Fitness Consultations", "Group Fitness Classes", "Personal Training Sessions", "Hair Dryers", "Water Stations", "Locker Rentals", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  }
];
