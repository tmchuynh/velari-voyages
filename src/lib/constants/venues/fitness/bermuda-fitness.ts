// Fitness center venues data for Bermuda
// This file contains fitness center and wellness facility information for cruise vessels operating from Bermuda
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const bermudaFitnessCenters: FitnessCenter[] = [
  {
    id: "5f9b004e-686e-4097-9c72-bb1dbd8693a6",
    vesselId: "nx--explorer",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-925-593-6274",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "StairMaster", "Recumbent Bikes", "Air Bikes", "Treadmills", "Arc Trainers", "VersaClimber", "Shoulder Press Machine", "Weight Machines", "Lat Pulldown", "Bench Press", "Smith Machine", "Power Rack", "Free Weights", "Dumbbells", "Leg Curl Machine", "Barbells", "Pull-up Station", "Cable Machines", "BOSU Balls", "Stability Balls", "Plyo Boxes", "Yoga Mats", "Kettlebells", "Agility Ladders", "TRX Suspension Trainers", "Compression Therapy"],
    personalTrainers: ["Strength Training Specialist", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Fitness Consultations", "Workout Programs", "Locker Rentals", "Group Fitness Classes", "Audio/Visual Entertainment", "Hair Dryers", "Personal Training Sessions", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "a303a710-1153-49d9-b54d-91dad4d93f13",
    vesselId: "sv-bermuda-voyager",
    name: "SV Bermuda Voyager Fitness Center",
    description: "SV Bermuda Voyager Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bermuda. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-921-662-7757",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Spin Bikes", "Treadmills", "Air Bikes", "Elliptical Machines", "Recumbent Bikes", "Arc Trainers", "Barbells", "Leg Curl Machine", "Dumbbells", "Pull-up Station", "Cable Machines", "Leg Press Machine", "Power Rack", "Weight Machines", "Shoulder Press Machine", "Lat Pulldown", "Bench Press", "Kettlebells", "Medicine Balls", "Foam Rollers", "Resistance Bands", "Agility Ladders", "TRX Suspension Trainers", "Battle Ropes", "Yoga Mats", "Stretching Stations", "Recovery Tools"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength Training Specialist"],
    amenities: ["Equipment Orientation", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Fitness Tracking", "Personal Training Sessions", "Protein Shakes", "Water Stations", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "266bcb10-78aa-4660-b5e5-ac51c60ffce2",
    vesselId: "nx--of-the-deep",
    name: "NX  of the Deep Fitness Center",
    description: "NX  of the Deep Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bermuda. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-379-615-3263",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "VersaClimber", "Spin Bikes", "Stationary Bikes", "Rowing Machines", "Recumbent Bikes", "Dumbbells", "Power Rack", "Barbells", "Smith Machine", "Leg Curl Machine", "Bench Press", "Weight Machines", "Free Weights", "Leg Press Machine", "Shoulder Press Machine", "Pull-up Station", "Lat Pulldown", "Stability Balls", "Kettlebells", "Agility Ladders", "Plyo Boxes", "Medicine Balls", "Yoga Mats", "Battle Ropes", "TRX Suspension Trainers", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Fitness Tracking", "Water Stations", "Fitness Consultations", "Group Fitness Classes", "Toiletries", "Locker Rentals", "Personal Training Sessions", "Body Composition Analysis", "Fresh Fruit Bar", "Workout Programs"],
    is24Hours: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "089d88f1-e5f2-4a6a-9826-c7d239578d97",
    vesselId: "sy-the--mariner",
    name: "Bermuda Fitness Center",
    description: "Discover wellness at sea with Bermuda Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-210-912-2638",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "VersaClimber", "Stationary Bikes", "Elliptical Machines", "Spin Bikes", "Air Bikes", "StairMaster", "Treadmills", "Free Weights", "Dumbbells", "Smith Machine", "Leg Curl Machine", "Leg Press Machine", "Barbells", "Shoulder Press Machine", "Lat Pulldown", "Cable Machines", "Pull-up Station", "Weight Machines", "Kettlebells", "BOSU Balls", "Stability Balls", "Yoga Mats", "Medicine Balls", "Battle Ropes", "Pilates Reformers", "Massage Chairs"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor"],
    amenities: ["Group Fitness Classes", "Protein Shakes", "Audio/Visual Entertainment", "Fitness Tracking", "Toiletries", "Personal Training Sessions", "Fresh Fruit Bar", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
    id: "36087782-31b7-46fe-a20c-f2b29b2a6a78",
    vesselId: "sy--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-887-149-9917",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "Spin Bikes", "Treadmills", "Elliptical Machines", "Stationary Bikes", "Recumbent Bikes", "Free Weights", "Bench Press", "Shoulder Press Machine", "Smith Machine", "Barbells", "Power Rack", "Cable Machines", "Leg Press Machine", "Lat Pulldown", "Leg Curl Machine", "Stability Balls", "Kettlebells", "Agility Ladders", "Balance Boards", "BOSU Balls", "Plyo Boxes", "Foam Rollers", "Medicine Balls", "Massage Chairs", "Infrared Sauna", "Recovery Tools"],
    personalTrainers: ["Aqua Fitness Instructor", "Spinning Instructor"],
    amenities: ["Hair Dryers", "Protein Shakes", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Group Fitness Classes", "Fitness Tracking", "Locker Rentals", "Fitness Consultations", "Toiletries", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  }
];
