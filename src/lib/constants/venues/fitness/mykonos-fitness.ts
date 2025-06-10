// Fitness center venues data for Mykonos
// This file contains fitness center and wellness facility information for cruise vessels operating from Mykonos
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const mykonosFitnessCenters: FitnessCenter[] = [
  {
    id: "a05b2727-3adf-41c8-ad92-83b9f6409b12",
    vesselId: "ss--explorer",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the SS  Explorer. Stay active and healthy while cruising the waters near Mykonos with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-781-951-7759",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Arc Trainers", "Stationary Bikes", "Air Bikes", "Recumbent Bikes", "VersaClimber", "Elliptical Machines", "Cable Machines", "Free Weights", "Pull-up Station", "Leg Press Machine", "Smith Machine", "Bench Press", "Leg Curl Machine", "Lat Pulldown", "Shoulder Press Machine", "Dumbbells", "Weight Machines", "Barbells", "Foam Rollers", "Stability Balls", "Plyo Boxes", "BOSU Balls", "Resistance Bands", "TRX Suspension Trainers", "Pilates Reformers", "Barre Equipment", "Massage Chairs", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Corrective Exercise Specialist", "Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Locker Rentals", "Water Stations", "Fitness Tracking", "Fresh Fruit Bar", "Towel Service", "Workout Programs", "Group Fitness Classes", "Body Composition Analysis", "Personal Training Sessions", "Hair Dryers", "Equipment Orientation", "Fitness Consultations", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "3b4c8da9-358d-4a93-9d2b-2fdc01fcd8e2",
    vesselId: "ts-mykonos-voyager",
    name: "Mykonos Fitness Center",
    description: "Mykonos Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Mykonos. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-931-763-4479",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Treadmills", "StairMaster", "Arc Trainers", "Rowing Machines", "Elliptical Machines", "Stationary Bikes", "Air Bikes", "Spin Bikes", "Recumbent Bikes", "Free Weights", "Lat Pulldown", "Dumbbells", "Leg Press Machine", "Power Rack", "Smith Machine", "Pull-up Station", "Weight Machines", "Barbells", "Bench Press", "Leg Curl Machine", "Cable Machines", "BOSU Balls", "Stability Balls", "Plyo Boxes", "Agility Ladders", "TRX Suspension Trainers", "Kettlebells", "Foam Rollers", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor", "Aqua Fitness Instructor"],
    amenities: ["Protein Shakes", "Personal Training Sessions", "Locker Rentals", "Towel Service", "Fresh Fruit Bar", "Group Fitness Classes", "Hair Dryers", "Workout Programs", "Fitness Tracking", "Equipment Orientation", "Water Stations", "Audio/Visual Entertainment"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "b36985dd-c3e0-498f-b454-183231af9ad1",
    vesselId: "nb--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Mykonos. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-322-998-6816",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "Stationary Bikes", "Spin Bikes", "Recumbent Bikes", "Air Bikes", "Arc Trainers", "Cable Machines", "Lat Pulldown", "Pull-up Station", "Shoulder Press Machine", "Bench Press", "Free Weights", "Dumbbells", "Barbells", "Weight Machines", "Leg Press Machine", "Foam Rollers", "Balance Boards", "Kettlebells", "BOSU Balls", "Resistance Bands", "Infrared Sauna", "Pilates Reformers"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Group Fitness Classes", "Personal Training Sessions", "Fresh Fruit Bar", "Fitness Consultations", "Body Composition Analysis", "Workout Programs", "Hair Dryers", "Water Stations", "Protein Shakes", "Equipment Orientation", "Fitness Tracking"],
    is24Hours: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "c93e6294-4cf2-495f-9038-0cb8593883cf",
    vesselId: "rv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Mykonos. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-701-678-8576",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Recumbent Bikes", "Arc Trainers", "Spin Bikes", "Stationary Bikes", "StairMaster", "VersaClimber", "Dumbbells", "Leg Press Machine", "Bench Press", "Lat Pulldown", "Cable Machines", "Shoulder Press Machine", "Free Weights", "Smith Machine", "Leg Curl Machine", "Power Rack", "Pull-up Station", "Medicine Balls", "Foam Rollers", "Balance Boards", "TRX Suspension Trainers", "Stability Balls", "Battle Ropes", "Yoga Mats", "Barre Equipment", "Compression Therapy", "Massage Chairs"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Workout Programs", "Equipment Orientation", "Fitness Tracking", "Fitness Consultations", "Body Composition Analysis", "Locker Rentals"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "68ed625c-38ae-4600-9c21-9d807391f938",
    vesselId: "fv--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Mykonos. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-985-136-7070",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Recumbent Bikes", "Arc Trainers", "StairMaster", "VersaClimber", "Elliptical Machines", "Stationary Bikes", "Spin Bikes", "Power Rack", "Weight Machines", "Cable Machines", "Free Weights", "Leg Curl Machine", "Leg Press Machine", "Lat Pulldown", "Dumbbells", "Barbells", "Foam Rollers", "TRX Suspension Trainers", "Kettlebells", "BOSU Balls", "Battle Ropes", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Water Stations", "Toiletries", "Locker Rentals", "Personal Training Sessions", "Group Fitness Classes", "Fitness Consultations", "Fitness Tracking", "Hair Dryers", "Audio/Visual Entertainment", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
  }
];
