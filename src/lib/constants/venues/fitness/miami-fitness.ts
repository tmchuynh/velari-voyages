// Fitness center venues data for Miami
// This file contains fitness center and wellness facility information for cruise vessels operating from Miami
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const miamiFitnessCenters: FitnessCenter[] = [
  {
    id: "a90f0619-a1a7-493f-ba82-8c62566b11ff",
    vesselId: "fv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-727-650-8409",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Air Bikes", "Arc Trainers", "VersaClimber", "Elliptical Machines", "Spin Bikes", "Treadmills", "Shoulder Press Machine", "Power Rack", "Lat Pulldown", "Weight Machines", "Pull-up Station", "Leg Press Machine", "Leg Curl Machine", "Smith Machine", "Dumbbells", "Bench Press", "Cable Machines", "Foam Rollers", "Yoga Mats", "Balance Boards", "Resistance Bands", "TRX Suspension Trainers", "Battle Ropes", "Cryotherapy Chamber", "Massage Chairs"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Hair Dryers", "Fresh Fruit Bar", "Water Stations", "Workout Programs", "Audio/Visual Entertainment", "Personal Training Sessions", "Equipment Orientation", "Fitness Consultations", "Group Fitness Classes", "Toiletries"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "c4fb12e5-2976-475d-9f3b-5d6e13778fae",
    vesselId: "mv-miami-voyager",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-412-606-8394",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "VersaClimber", "Stationary Bikes", "Arc Trainers", "Rowing Machines", "Spin Bikes", "Elliptical Machines", "Recumbent Bikes", "StairMaster", "Treadmills", "Smith Machine", "Shoulder Press Machine", "Free Weights", "Leg Press Machine", "Bench Press", "Pull-up Station", "Cable Machines", "Dumbbells", "Barbells", "Lat Pulldown", "Leg Curl Machine", "Resistance Bands", "Kettlebells", "Balance Boards", "Stability Balls", "BOSU Balls", "Yoga Mats", "Foam Rollers", "Compression Therapy"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Personal Training Sessions", "Water Stations", "Equipment Orientation", "Toiletries", "Protein Shakes", "Workout Programs", "Locker Rentals", "Fitness Consultations", "Group Fitness Classes", "Body Composition Analysis", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    isPopular: false
  },
  {
    id: "8c778efa-2a72-4087-a5ac-51080c87fcbb",
    vesselId: "ss--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Miami. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-987-186-5778",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "VersaClimber", "Recumbent Bikes", "StairMaster", "Arc Trainers", "Rowing Machines", "Stationary Bikes", "Weight Machines", "Free Weights", "Dumbbells", "Barbells", "Pull-up Station", "Bench Press", "Lat Pulldown", "Smith Machine", "Foam Rollers", "Resistance Bands", "BOSU Balls", "Yoga Mats", "Stability Balls", "Stretching Stations", "Infrared Sauna", "Compression Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Audio/Visual Entertainment", "Workout Programs", "Towel Service", "Fitness Tracking", "Toiletries", "Group Fitness Classes", "Locker Rentals", "Hair Dryers", "Body Composition Analysis", "Water Stations", "Fitness Consultations", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "a861fb24-6c50-4218-b9bd-5d2f6c59b176",
    vesselId: "nb-the--mariner",
    name: "NB The  Mariner Fitness Center",
    description: "Discover wellness at sea with NB The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-431-618-1167",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "StairMaster", "VersaClimber", "Stationary Bikes", "Treadmills", "Air Bikes", "Arc Trainers", "Recumbent Bikes", "Spin Bikes", "Lat Pulldown", "Weight Machines", "Barbells", "Pull-up Station", "Smith Machine", "Leg Curl Machine", "Cable Machines", "Bench Press", "Dumbbells", "Leg Press Machine", "Power Rack", "Shoulder Press Machine", "TRX Suspension Trainers", "Battle Ropes", "BOSU Balls", "Medicine Balls", "Foam Rollers", "Plyo Boxes", "Massage Chairs", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Yoga Instructor", "Certified Personal Trainer", "Pilates Instructor"],
    amenities: ["Group Fitness Classes", "Toiletries", "Hair Dryers", "Audio/Visual Entertainment", "Body Composition Analysis", "Fresh Fruit Bar", "Fitness Consultations", "Towel Service", "Water Stations", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    isPopular: true
  },
  {
    id: "bb171136-2051-4dda-a65d-9f54692c767c",
    vesselId: "nx--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-480-822-8819",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Spin Bikes", "Arc Trainers", "StairMaster", "VersaClimber", "Air Bikes", "Leg Curl Machine", "Dumbbells", "Barbells", "Free Weights", "Pull-up Station", "Bench Press", "Shoulder Press Machine", "Smith Machine", "Power Rack", "Leg Press Machine", "Lat Pulldown", "Weight Machines", "Battle Ropes", "Agility Ladders", "Yoga Mats", "Medicine Balls", "Stability Balls", "Foam Rollers", "TRX Suspension Trainers", "Pilates Reformers"],
    personalTrainers: ["Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Body Composition Analysis", "Fresh Fruit Bar", "Fitness Consultations", "Audio/Visual Entertainment", "Equipment Orientation", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  }
];
