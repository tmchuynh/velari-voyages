// Fitness center venues data for Santiago
// This file contains fitness center and wellness facility information for cruise vessels operating from Santiago
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const santiagoFitnessCenters: FitnessCenter[] = [
  {
    id: "c5bcaeb4-77f6-46da-8360-502d1781b115",
    vesselId: "fv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the FV  Explorer. Stay active and healthy while cruising the waters near Santiago with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-243-437-1651",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Air Bikes", "Elliptical Machines", "Treadmills", "Rowing Machines", "Spin Bikes", "Recumbent Bikes", "Lat Pulldown", "Weight Machines", "Pull-up Station", "Barbells", "Leg Press Machine", "Cable Machines", "Bench Press", "Power Rack", "Smith Machine", "Dumbbells", "Free Weights", "Leg Curl Machine", "BOSU Balls", "Resistance Bands", "Foam Rollers", "Plyo Boxes", "TRX Suspension Trainers", "Yoga Mats", "Battle Ropes", "Cryotherapy Chamber", "Recovery Tools"],
    personalTrainers: ["Aqua Fitness Instructor", "Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Towel Service", "Toiletries", "Protein Shakes", "Audio/Visual Entertainment", "Fitness Consultations", "Locker Rentals", "Fitness Tracking", "Body Composition Analysis", "Water Stations", "Hair Dryers", "Equipment Orientation", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
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
    id: "e2a408c7-f2bc-4dd4-a6f8-f8b0c3254a2c",
    vesselId: "rv-santiago-voyager",
    name: "RV Santiago Voyager Fitness Center",
    description: "Discover wellness at sea with RV Santiago Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-528-220-1147",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Arc Trainers", "Rowing Machines", "Spin Bikes", "Stationary Bikes", "Elliptical Machines", "Treadmills", "Air Bikes", "Recumbent Bikes", "VersaClimber", "Pull-up Station", "Shoulder Press Machine", "Barbells", "Cable Machines", "Weight Machines", "Dumbbells", "Free Weights", "Power Rack", "Smith Machine", "Leg Press Machine", "Leg Curl Machine", "Balance Boards", "Agility Ladders", "Kettlebells", "Medicine Balls", "Foam Rollers", "Yoga Mats", "Stability Balls", "Stretching Stations", "Barre Equipment", "Infrared Sauna"],
    personalTrainers: ["Fitness Nutrition Specialist", "Corrective Exercise Specialist", "Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Hair Dryers", "Protein Shakes", "Equipment Orientation", "Towel Service", "Water Stations", "Workout Programs", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    isPopular: false
  },
  {
    id: "a73f750d-591d-4768-ab1b-08545070f181",
    vesselId: "rms--of-the-deep",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-774-383-1634",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "StairMaster", "Air Bikes", "Elliptical Machines", "Treadmills", "Spin Bikes", "VersaClimber", "Stationary Bikes", "Weight Machines", "Dumbbells", "Leg Press Machine", "Pull-up Station", "Free Weights", "Lat Pulldown", "Power Rack", "Barbells", "Bench Press", "Resistance Bands", "Battle Ropes", "Plyo Boxes", "BOSU Balls", "Medicine Balls", "Agility Ladders", "Pilates Reformers"],
    personalTrainers: ["Strength Training Specialist", "Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Hair Dryers", "Audio/Visual Entertainment", "Towel Service", "Fresh Fruit Bar", "Protein Shakes", "Body Composition Analysis", "Locker Rentals", "Fitness Consultations", "Equipment Orientation", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "7dcee097-0b3e-49ae-a2e5-489a0213b459",
    vesselId: "nx-the--mariner",
    name: "NX The  Mariner Fitness Center",
    description: "Discover wellness at sea with NX The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-921-480-7051",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Recumbent Bikes", "Arc Trainers", "Stationary Bikes", "Rowing Machines", "StairMaster", "VersaClimber", "Bench Press", "Pull-up Station", "Leg Press Machine", "Smith Machine", "Cable Machines", "Dumbbells", "Leg Curl Machine", "Shoulder Press Machine", "Medicine Balls", "Resistance Bands", "Plyo Boxes", "BOSU Balls", "Kettlebells", "Agility Ladders", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer", "Pilates Instructor"],
    amenities: ["Body Composition Analysis", "Toiletries", "Audio/Visual Entertainment", "Fitness Consultations", "Group Fitness Classes", "Locker Rentals", "Hair Dryers", "Workout Programs", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    isPopular: true
  },
  {
    id: "138aa41f-a57c-48b4-aa6d-24607013a33b",
    vesselId: "ts--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-862-618-6914",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "Spin Bikes", "Elliptical Machines", "Recumbent Bikes", "StairMaster", "Air Bikes", "Arc Trainers", "Stationary Bikes", "Pull-up Station", "Smith Machine", "Free Weights", "Dumbbells", "Bench Press", "Shoulder Press Machine", "Barbells", "Leg Press Machine", "Weight Machines", "Cable Machines", "Medicine Balls", "Yoga Mats", "Foam Rollers", "Agility Ladders", "Kettlebells", "BOSU Balls", "Stability Balls", "Balance Boards", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Locker Rentals", "Fitness Consultations", "Body Composition Analysis", "Equipment Orientation", "Fresh Fruit Bar", "Hair Dryers", "Fitness Tracking", "Personal Training Sessions", "Workout Programs", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  }
];
