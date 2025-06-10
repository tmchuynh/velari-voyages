// Fitness center venues data for Tampa
// This file contains fitness center and wellness facility information for cruise vessels operating from Tampa
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const tampaFitnessCenters: FitnessCenter[] = [
  {
    id: "e410b147-f3e9-4a0e-8c6c-294a18a2d074",
    vesselId: "rv--explorer",
    name: "RV  Explorer Fitness Center",
    description: "RV  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tampa. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-621-843-8468",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Spin Bikes", "Stationary Bikes", "StairMaster", "VersaClimber", "Elliptical Machines", "Treadmills", "Arc Trainers", "Recumbent Bikes", "Free Weights", "Dumbbells", "Barbells", "Shoulder Press Machine", "Smith Machine", "Weight Machines", "Cable Machines", "Bench Press", "Power Rack", "Resistance Bands", "BOSU Balls", "Battle Ropes", "Yoga Mats", "Kettlebells", "Agility Ladders", "Plyo Boxes", "Compression Therapy", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fitness Tracking", "Locker Rentals", "Workout Programs", "Hair Dryers", "Fresh Fruit Bar", "Toiletries", "Group Fitness Classes", "Personal Training Sessions", "Water Stations"],
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
    hasFitnessAssessments: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "00b1eb64-1eba-4439-978e-9f1560a4aeff",
    vesselId: "cs-tampa-voyager",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-429-669-2834",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Rowing Machines", "Arc Trainers", "StairMaster", "Treadmills", "Stationary Bikes", "Free Weights", "Power Rack", "Weight Machines", "Smith Machine", "Cable Machines", "Leg Curl Machine", "Pull-up Station", "Dumbbells", "Leg Press Machine", "Shoulder Press Machine", "Bench Press", "Lat Pulldown", "Balance Boards", "Yoga Mats", "Battle Ropes", "Kettlebells", "Medicine Balls", "Foam Rollers", "BOSU Balls", "Compression Therapy", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Water Stations", "Towel Service", "Body Composition Analysis", "Equipment Orientation", "Locker Rentals", "Hair Dryers", "Fitness Tracking", "Audio/Visual Entertainment", "Toiletries", "Fitness Consultations", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    isPopular: false
  },
  {
    id: "6bbe7620-a72b-4564-b447-44f57fab381a",
    vesselId: "ps--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the PS  of the Deep. Stay active and healthy while cruising the waters near Tampa with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-358-813-8315",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Elliptical Machines", "Stationary Bikes", "Spin Bikes", "Recumbent Bikes", "Rowing Machines", "VersaClimber", "Air Bikes", "Leg Press Machine", "Leg Curl Machine", "Free Weights", "Lat Pulldown", "Smith Machine", "Pull-up Station", "Cable Machines", "Dumbbells", "BOSU Balls", "Foam Rollers", "Balance Boards", "Agility Ladders", "Kettlebells", "Plyo Boxes", "Medicine Balls", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Equipment Orientation", "Water Stations", "Towel Service", "Personal Training Sessions", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Fitness Consultations", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "78ec10bd-46f2-453a-be73-af41683cea8a",
    vesselId: "ly-the--mariner",
    name: "LY The  Mariner Fitness Center",
    description: "Discover wellness at sea with LY The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-285-725-9967",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "Arc Trainers", "VersaClimber", "StairMaster", "Elliptical Machines", "Free Weights", "Cable Machines", "Pull-up Station", "Power Rack", "Dumbbells", "Bench Press", "Barbells", "Leg Press Machine", "Lat Pulldown", "Shoulder Press Machine", "Weight Machines", "Kettlebells", "Medicine Balls", "Battle Ropes", "Agility Ladders", "TRX Suspension Trainers", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Yoga Instructor", "Certified Personal Trainer", "Aqua Fitness Instructor", "Pilates Instructor"],
    amenities: ["Fresh Fruit Bar", "Fitness Consultations", "Towel Service", "Equipment Orientation", "Personal Training Sessions", "Body Composition Analysis", "Locker Rentals", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "4ee22b14-66c9-4cbf-8f25-10045352e14d",
    vesselId: "cs--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tampa. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-465-258-4375",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "Arc Trainers", "VersaClimber", "Weight Machines", "Pull-up Station", "Leg Curl Machine", "Lat Pulldown", "Barbells", "Smith Machine", "Bench Press", "Power Rack", "Dumbbells", "Free Weights", "Leg Press Machine", "Cable Machines", "Medicine Balls", "Balance Boards", "Kettlebells", "Resistance Bands", "Stability Balls", "Foam Rollers", "Battle Ropes", "Agility Ladders", "Recovery Tools", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Equipment Orientation", "Audio/Visual Entertainment", "Water Stations", "Towel Service", "Body Composition Analysis", "Toiletries", "Fitness Tracking", "Fresh Fruit Bar", "Protein Shakes", "Fitness Consultations"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  }
];
