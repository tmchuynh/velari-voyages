// Fitness center venues data for Buenos Aires
// This file contains fitness center and wellness facility information for cruise vessels operating from Buenos Aires
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const buenosAiresFitnessCenters: FitnessCenter[] = [
  {
    id: "7323ddbb-6665-4350-bdf7-74d722a70c70",
    vesselId: "nx--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Buenos Aires. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-828-562-8494",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Recumbent Bikes", "Air Bikes", "Treadmills", "Arc Trainers", "Stationary Bikes", "StairMaster", "VersaClimber", "Free Weights", "Dumbbells", "Smith Machine", "Bench Press", "Barbells", "Weight Machines", "Shoulder Press Machine", "Leg Curl Machine", "Lat Pulldown", "Power Rack", "Leg Press Machine", "Foam Rollers", "TRX Suspension Trainers", "Plyo Boxes", "Kettlebells", "Balance Boards", "Resistance Bands", "Stability Balls", "Compression Therapy", "Massage Chairs"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Protein Shakes", "Towel Service", "Workout Programs", "Locker Rentals", "Body Composition Analysis", "Toiletries", "Water Stations", "Fitness Tracking", "Personal Training Sessions", "Group Fitness Classes", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "8e27a2d9-68d8-4415-a6af-3d5c5947a397",
    vesselId: "rv-buenos-aires-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-701-697-8815",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "StairMaster", "Elliptical Machines", "Rowing Machines", "Arc Trainers", "VersaClimber", "Recumbent Bikes", "Air Bikes", "Stationary Bikes", "Leg Curl Machine", "Barbells", "Bench Press", "Shoulder Press Machine", "Smith Machine", "Weight Machines", "Free Weights", "Cable Machines", "Pull-up Station", "Power Rack", "Balance Boards", "Stability Balls", "Kettlebells", "Agility Ladders", "Resistance Bands", "Battle Ropes", "Medicine Balls", "Pilates Reformers"],
    personalTrainers: ["Strength Training Specialist", "Aqua Fitness Instructor", "Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Water Stations", "Fitness Tracking", "Group Fitness Classes", "Body Composition Analysis", "Towel Service", "Fresh Fruit Bar", "Hair Dryers", "Fitness Consultations", "Personal Training Sessions", "Equipment Orientation", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "b3240cc8-541c-4e5e-a184-6660bb563af2",
    vesselId: "rms--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-582-923-8269",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "StairMaster", "Air Bikes", "Treadmills", "Elliptical Machines", "VersaClimber", "Recumbent Bikes", "Barbells", "Power Rack", "Pull-up Station", "Cable Machines", "Leg Curl Machine", "Leg Press Machine", "Shoulder Press Machine", "Bench Press", "Weight Machines", "Lat Pulldown", "Smith Machine", "Free Weights", "Resistance Bands", "Battle Ropes", "Medicine Balls", "Balance Boards", "Kettlebells", "Infrared Sauna", "Stretching Stations", "Barre Equipment", "Compression Therapy", "Pilates Reformers", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Group Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Towel Service", "Audio/Visual Entertainment", "Locker Rentals", "Protein Shakes", "Personal Training Sessions", "Body Composition Analysis", "Fitness Tracking", "Fitness Consultations", "Group Fitness Classes", "Hair Dryers", "Water Stations", "Workout Programs"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
  },
  {
    id: "dc97d95f-d19c-47dc-99ca-1ca9d6f5d212",
    vesselId: "cs-the--mariner",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the CS The  Mariner. Stay active and healthy while cruising the waters near Buenos Aires with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-716-881-8803",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Arc Trainers", "Rowing Machines", "StairMaster", "Stationary Bikes", "VersaClimber", "Recumbent Bikes", "Treadmills", "Barbells", "Leg Curl Machine", "Pull-up Station", "Weight Machines", "Bench Press", "Cable Machines", "Smith Machine", "Lat Pulldown", "Dumbbells", "Free Weights", "Shoulder Press Machine", "Power Rack", "Balance Boards", "Plyo Boxes", "Battle Ropes", "Medicine Balls", "BOSU Balls", "Agility Ladders", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Strength Training Specialist"],
    amenities: ["Hair Dryers", "Towel Service", "Locker Rentals", "Personal Training Sessions", "Fresh Fruit Bar", "Body Composition Analysis", "Fitness Tracking", "Fitness Consultations", "Group Fitness Classes", "Workout Programs", "Water Stations", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "8b004d8c-9ed3-40db-a3ed-00010e1b87de",
    vesselId: "nx--gale",
    name: "NX  Gale Fitness Center",
    description: "NX  Gale Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-677-902-7675",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Air Bikes", "Arc Trainers", "VersaClimber", "Leg Press Machine", "Free Weights", "Pull-up Station", "Dumbbells", "Leg Curl Machine", "Bench Press", "Barbells", "Weight Machines", "Kettlebells", "BOSU Balls", "Agility Ladders", "Foam Rollers", "Medicine Balls", "Recovery Tools", "Massage Chairs"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Fitness Tracking", "Group Fitness Classes", "Workout Programs", "Audio/Visual Entertainment", "Hair Dryers", "Toiletries", "Water Stations", "Fitness Consultations", "Towel Service", "Body Composition Analysis", "Personal Training Sessions", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  }
];
