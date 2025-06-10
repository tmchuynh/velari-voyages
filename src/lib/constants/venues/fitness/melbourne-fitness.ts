// Fitness center venues data for Melbourne
// This file contains fitness center and wellness facility information for cruise vessels operating from Melbourne
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const melbourneFitnessCenters: FitnessCenter[] = [
  {
    id: "a7a1ace9-4c4e-474d-bf89-cb40073d03fe",
    vesselId: "ps--explorer",
    name: "PS  Explorer Fitness Center",
    description: "PS  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Melbourne. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-425-515-3879",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Stationary Bikes", "Treadmills", "Recumbent Bikes", "StairMaster", "Arc Trainers", "Air Bikes", "Spin Bikes", "Elliptical Machines", "Rowing Machines", "Leg Press Machine", "Cable Machines", "Weight Machines", "Barbells", "Smith Machine", "Bench Press", "Power Rack", "Shoulder Press Machine", "Dumbbells", "Free Weights", "Lat Pulldown", "Balance Boards", "Kettlebells", "Plyo Boxes", "Agility Ladders", "Resistance Bands", "TRX Suspension Trainers", "Foam Rollers", "BOSU Balls", "Massage Chairs"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Water Stations", "Hair Dryers", "Toiletries", "Group Fitness Classes", "Fitness Consultations", "Protein Shakes", "Audio/Visual Entertainment", "Body Composition Analysis"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    isPopular: true
  },
  {
    id: "5f1fc47c-2fb4-4c1a-a5ef-032d8c744d76",
    vesselId: "sy-melbourne-voyager",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the SY Melbourne Voyager. Stay active and healthy while cruising the waters near Melbourne with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-359-485-8235",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Arc Trainers", "Treadmills", "VersaClimber", "Rowing Machines", "Stationary Bikes", "Bench Press", "Leg Curl Machine", "Smith Machine", "Weight Machines", "Barbells", "Shoulder Press Machine", "Dumbbells", "Pull-up Station", "Cable Machines", "Free Weights", "Battle Ropes", "Medicine Balls", "Resistance Bands", "BOSU Balls", "Agility Ladders", "TRX Suspension Trainers", "Yoga Mats", "Cryotherapy Chamber", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Fitness Tracking", "Hair Dryers", "Equipment Orientation", "Fresh Fruit Bar", "Protein Shakes", "Toiletries", "Locker Rentals", "Water Stations", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "9b20a949-6359-463e-9f2c-4aba5fed1dff",
    vesselId: "nb--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Melbourne. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-979-972-7512",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Recumbent Bikes", "StairMaster", "Rowing Machines", "Treadmills", "Elliptical Machines", "Free Weights", "Smith Machine", "Leg Press Machine", "Dumbbells", "Power Rack", "Shoulder Press Machine", "Cable Machines", "Bench Press", "Yoga Mats", "BOSU Balls", "Battle Ropes", "Medicine Balls", "Foam Rollers", "Resistance Bands", "Kettlebells", "TRX Suspension Trainers", "Compression Therapy", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Workout Programs", "Personal Training Sessions", "Water Stations", "Body Composition Analysis", "Hair Dryers", "Fresh Fruit Bar", "Fitness Tracking", "Protein Shakes", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "c1b96085-8543-4ac7-b482-48292e8d9043",
    vesselId: "ss-the--mariner",
    name: "SS The  Mariner Fitness Center",
    description: "Welcome to SS The  Mariner Fitness Center, your premier wellness destination aboard the SS The  Mariner. Stay active and healthy while cruising the waters near Melbourne with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-805-957-6914",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Elliptical Machines", "StairMaster", "Recumbent Bikes", "Air Bikes", "Smith Machine", "Leg Press Machine", "Dumbbells", "Power Rack", "Bench Press", "Lat Pulldown", "Leg Curl Machine", "Cable Machines", "Shoulder Press Machine", "Free Weights", "Barbells", "Kettlebells", "Foam Rollers", "Plyo Boxes", "Stability Balls", "Medicine Balls", "Yoga Mats", "Agility Ladders", "Balance Boards", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Workout Programs", "Locker Rentals", "Towel Service", "Hair Dryers", "Protein Shakes", "Group Fitness Classes", "Fitness Tracking", "Water Stations", "Equipment Orientation", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "81198d4b-4f95-4bf5-ab2a-d39edb1a6eac",
    vesselId: "rv--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Melbourne. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-288-248-4250",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Arc Trainers", "Stationary Bikes", "Elliptical Machines", "Spin Bikes", "Recumbent Bikes", "Air Bikes", "StairMaster", "VersaClimber", "Free Weights", "Dumbbells", "Barbells", "Weight Machines", "Shoulder Press Machine", "Lat Pulldown", "Power Rack", "Pull-up Station", "Cable Machines", "Leg Curl Machine", "Bench Press", "Smith Machine", "Kettlebells", "Resistance Bands", "Medicine Balls", "Battle Ropes", "TRX Suspension Trainers", "Barre Equipment", "Compression Therapy"],
    personalTrainers: ["Fitness Nutrition Specialist", "Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Body Composition Analysis", "Personal Training Sessions", "Workout Programs", "Toiletries", "Hair Dryers", "Equipment Orientation", "Water Stations", "Audio/Visual Entertainment", "Towel Service"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  }
];
