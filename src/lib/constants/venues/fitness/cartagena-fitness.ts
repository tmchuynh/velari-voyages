// Fitness center venues data for Cartagena
// This file contains fitness center and wellness facility information for cruise vessels operating from Cartagena
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const cartagenaFitnessCenters: FitnessCenter[] = [
  {
    id: "1d9b9026-c94d-4fc8-b771-2794ce7162c7",
    vesselId: "rms--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-354-982-8311",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Elliptical Machines", "Stationary Bikes", "Arc Trainers", "Rowing Machines", "Treadmills", "Spin Bikes", "Lat Pulldown", "Free Weights", "Weight Machines", "Barbells", "Pull-up Station", "Dumbbells", "Shoulder Press Machine", "Power Rack", "Smith Machine", "Leg Press Machine", "Leg Curl Machine", "Cable Machines", "Kettlebells", "BOSU Balls", "Stability Balls", "Balance Boards", "Medicine Balls", "Agility Ladders", "Recovery Tools", "Stretching Stations", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer", "Corrective Exercise Specialist", "Aqua Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Fitness Tracking", "Group Fitness Classes", "Fitness Consultations", "Hair Dryers", "Water Stations", "Towel Service", "Toiletries", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    isPopular: false
  },
  {
    id: "71efcbb7-8d4f-4b5c-9176-0d8119bc2ad8",
    vesselId: "cs-cartagena-voyager",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-627-830-8693",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Elliptical Machines", "StairMaster", "Stationary Bikes", "Air Bikes", "Rowing Machines", "Recumbent Bikes", "VersaClimber", "Spin Bikes", "Lat Pulldown", "Leg Press Machine", "Shoulder Press Machine", "Leg Curl Machine", "Bench Press", "Smith Machine", "Pull-up Station", "Cable Machines", "Power Rack", "Resistance Bands", "Foam Rollers", "Yoga Mats", "TRX Suspension Trainers", "Kettlebells", "Agility Ladders", "Medicine Balls", "BOSU Balls", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Strength Training Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Personal Training Sessions", "Hair Dryers", "Body Composition Analysis", "Fitness Consultations", "Equipment Orientation", "Workout Programs", "Toiletries", "Water Stations", "Fresh Fruit Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "a1b93458-4f67-4dc6-a903-b28ac63c8751",
    vesselId: "nb--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Cartagena. Our facility features pool area, dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-555-665-4920",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Rowing Machines", "Treadmills", "Recumbent Bikes", "Spin Bikes", "VersaClimber", "Free Weights", "Dumbbells", "Barbells", "Leg Press Machine", "Weight Machines", "Leg Curl Machine", "Pull-up Station", "Cable Machines", "TRX Suspension Trainers", "Kettlebells", "Stability Balls", "Medicine Balls", "Resistance Bands", "Plyo Boxes", "Agility Ladders", "Compression Therapy", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Workout Programs", "Body Composition Analysis", "Protein Shakes", "Fresh Fruit Bar", "Towel Service", "Water Stations", "Fitness Tracking", "Group Fitness Classes", "Toiletries", "Fitness Consultations", "Personal Training Sessions", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "5299d815-0679-4b4d-a646-787e290ccbce",
    vesselId: "hms-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-598-488-1076",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "VersaClimber", "Recumbent Bikes", "Spin Bikes", "Treadmills", "Air Bikes", "Arc Trainers", "Smith Machine", "Power Rack", "Free Weights", "Bench Press", "Dumbbells", "Barbells", "Shoulder Press Machine", "Weight Machines", "Leg Press Machine", "Leg Curl Machine", "Medicine Balls", "Battle Ropes", "Resistance Bands", "Stability Balls", "Yoga Mats", "TRX Suspension Trainers", "Agility Ladders", "Massage Chairs", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Fitness Consultations", "Equipment Orientation", "Body Composition Analysis", "Towel Service", "Audio/Visual Entertainment", "Workout Programs", "Group Fitness Classes", "Toiletries", "Protein Shakes", "Locker Rentals"],
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
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "cb8b9c84-0865-4b8b-b7e3-cef2f7caee55",
    vesselId: "ps--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-359-251-2072",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Air Bikes", "VersaClimber", "Arc Trainers", "Treadmills", "Barbells", "Leg Press Machine", "Lat Pulldown", "Dumbbells", "Smith Machine", "Shoulder Press Machine", "Free Weights", "Bench Press", "Cable Machines", "Pull-up Station", "Weight Machines", "TRX Suspension Trainers", "Battle Ropes", "BOSU Balls", "Stability Balls", "Yoga Mats", "Barre Equipment", "Stretching Stations", "Compression Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Protein Shakes", "Group Fitness Classes", "Equipment Orientation", "Personal Training Sessions", "Locker Rentals", "Hair Dryers", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Fitness Consultations", "Fitness Tracking", "Body Composition Analysis", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
  }
];
