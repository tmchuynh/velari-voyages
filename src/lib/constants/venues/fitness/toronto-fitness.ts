// Fitness center venues data for Toronto
// This file contains fitness center and wellness facility information for cruise vessels operating from Toronto
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const torontoFitnessCenters: FitnessCenter[] = [
  {
    id: "2c70a701-bf6f-4720-88ab-7c6096ec0c59",
    vesselId: "cs--explorer",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Toronto. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-207-212-8416",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Air Bikes", "Recumbent Bikes", "Rowing Machines", "Leg Press Machine", "Smith Machine", "Dumbbells", "Weight Machines", "Pull-up Station", "Cable Machines", "Shoulder Press Machine", "Power Rack", "Free Weights", "Stability Balls", "Foam Rollers", "BOSU Balls", "Resistance Bands", "TRX Suspension Trainers", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Locker Rentals", "Toiletries", "Towel Service", "Fresh Fruit Bar", "Group Fitness Classes", "Workout Programs", "Water Stations", "Equipment Orientation", "Fitness Tracking", "Fitness Consultations"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "5531a1f6-9f18-4410-9a53-42248caec13c",
    vesselId: "nb-toronto-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-525-119-2566",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Recumbent Bikes", "Rowing Machines", "Treadmills", "Spin Bikes", "Arc Trainers", "Free Weights", "Dumbbells", "Pull-up Station", "Bench Press", "Barbells", "Shoulder Press Machine", "Weight Machines", "Cable Machines", "Smith Machine", "Power Rack", "Leg Curl Machine", "Foam Rollers", "Agility Ladders", "Medicine Balls", "TRX Suspension Trainers", "Yoga Mats", "Plyo Boxes", "Stretching Stations", "Barre Equipment", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Fresh Fruit Bar", "Fitness Consultations", "Protein Shakes", "Fitness Tracking", "Group Fitness Classes", "Toiletries", "Personal Training Sessions", "Equipment Orientation", "Locker Rentals", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "e575136b-b7bf-409b-807a-8113c23224d3",
    vesselId: "nb--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-304-742-6080",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Treadmills", "VersaClimber", "Stationary Bikes", "Recumbent Bikes", "Rowing Machines", "Lat Pulldown", "Leg Curl Machine", "Smith Machine", "Barbells", "Shoulder Press Machine", "Dumbbells", "Free Weights", "Bench Press", "Cable Machines", "Pull-up Station", "Power Rack", "Stability Balls", "Resistance Bands", "Plyo Boxes", "Kettlebells", "Medicine Balls", "Compression Therapy"],
    personalTrainers: ["Strength Training Specialist", "Yoga Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Equipment Orientation", "Locker Rentals", "Fresh Fruit Bar", "Fitness Tracking", "Water Stations", "Personal Training Sessions", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "cb47e06e-fbbd-4e8f-ab61-d06e7755363c",
    vesselId: "sv-the--mariner",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the SV The  Mariner. Stay active and healthy while cruising the waters near Toronto with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-421-537-4300",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Elliptical Machines", "Treadmills", "Rowing Machines", "StairMaster", "Arc Trainers", "Air Bikes", "Smith Machine", "Dumbbells", "Free Weights", "Pull-up Station", "Lat Pulldown", "Barbells", "Leg Press Machine", "Cable Machines", "Shoulder Press Machine", "BOSU Balls", "TRX Suspension Trainers", "Balance Boards", "Resistance Bands", "Kettlebells", "Battle Ropes", "Yoga Mats", "Stability Balls", "Recovery Tools"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Fitness Consultations", "Towel Service", "Body Composition Analysis", "Locker Rentals", "Water Stations", "Fitness Tracking", "Group Fitness Classes", "Protein Shakes", "Audio/Visual Entertainment", "Hair Dryers", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "258c406e-f621-4c84-abae-e52bc6f2217a",
    vesselId: "sv--gale",
    name: "Toronto Fitness Center",
    description: "Discover wellness at sea with Toronto Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-469-113-6644",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "StairMaster", "VersaClimber", "Arc Trainers", "Recumbent Bikes", "Elliptical Machines", "Spin Bikes", "Treadmills", "Barbells", "Bench Press", "Leg Curl Machine", "Leg Press Machine", "Cable Machines", "Smith Machine", "Shoulder Press Machine", "Dumbbells", "Free Weights", "Weight Machines", "Lat Pulldown", "Power Rack", "TRX Suspension Trainers", "Stability Balls", "Battle Ropes", "Plyo Boxes", "Balance Boards", "Resistance Bands", "Foam Rollers", "Medicine Balls", "Pilates Reformers", "Massage Chairs", "Cryotherapy Chamber", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Locker Rentals", "Audio/Visual Entertainment", "Body Composition Analysis", "Fitness Consultations", "Equipment Orientation", "Workout Programs", "Group Fitness Classes", "Personal Training Sessions", "Protein Shakes", "Fresh Fruit Bar", "Water Stations", "Hair Dryers"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  }
];
