// Fitness center venues data for Rome
// This file contains fitness center and wellness facility information for cruise vessels operating from Rome
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const romeFitnessCenters: FitnessCenter[] = [
  {
    id: "3e532020-de55-49dd-ab6e-1fc8711a7eac",
    vesselId: "mv--explorer",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-583-309-8893",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Rowing Machines", "Recumbent Bikes", "VersaClimber", "StairMaster", "Treadmills", "Air Bikes", "Pull-up Station", "Barbells", "Bench Press", "Free Weights", "Weight Machines", "Dumbbells", "Shoulder Press Machine", "Smith Machine", "Yoga Mats", "Agility Ladders", "Battle Ropes", "Medicine Balls", "TRX Suspension Trainers", "Plyo Boxes", "Barre Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Aqua Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Group Fitness Classes", "Equipment Orientation", "Fitness Consultations", "Towel Service", "Workout Programs", "Hair Dryers", "Fitness Tracking", "Protein Shakes", "Water Stations", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "f1edeefc-4b9d-4d39-b00b-6848ac2a9273",
    vesselId: "ts-rome-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-227-958-2588",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "StairMaster", "Recumbent Bikes", "Rowing Machines", "VersaClimber", "Stationary Bikes", "Elliptical Machines", "Arc Trainers", "Treadmills", "Barbells", "Bench Press", "Pull-up Station", "Leg Press Machine", "Smith Machine", "Weight Machines", "Dumbbells", "Free Weights", "Leg Curl Machine", "Power Rack", "Shoulder Press Machine", "BOSU Balls", "Foam Rollers", "Resistance Bands", "Stability Balls", "TRX Suspension Trainers", "Yoga Mats", "Battle Ropes", "Plyo Boxes", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Locker Rentals", "Fitness Consultations", "Group Fitness Classes", "Personal Training Sessions", "Toiletries", "Towel Service", "Workout Programs", "Hair Dryers", "Equipment Orientation", "Fitness Tracking", "Water Stations", "Audio/Visual Entertainment"],
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "1176b145-4f1b-46c7-990d-bb6ae0ed62d2",
    vesselId: "ly--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-442-458-1871",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Recumbent Bikes", "Arc Trainers", "Elliptical Machines", "Air Bikes", "Treadmills", "Rowing Machines", "StairMaster", "Dumbbells", "Shoulder Press Machine", "Leg Press Machine", "Weight Machines", "Free Weights", "Barbells", "Leg Curl Machine", "Cable Machines", "Bench Press", "Smith Machine", "Power Rack", "Battle Ropes", "Stability Balls", "Yoga Mats", "Medicine Balls", "Plyo Boxes", "TRX Suspension Trainers", "Foam Rollers", "Kettlebells", "Pilates Reformers", "Massage Chairs", "Cryotherapy Chamber"],
    personalTrainers: ["Strength Training Specialist", "Fitness Nutrition Specialist", "Pilates Instructor"],
    amenities: ["Towel Service", "Protein Shakes", "Workout Programs", "Group Fitness Classes", "Fitness Tracking", "Locker Rentals", "Body Composition Analysis", "Toiletries", "Water Stations"],
    is24Hours: false,
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
    hasHealthScreenings: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "53b098ee-9b24-4850-8cc7-7290a649bad7",
    vesselId: "ms-the--mariner",
    name: "Rome Fitness Center",
    description: "Welcome to Rome Fitness Center, your premier wellness destination aboard the MS The  Mariner. Stay active and healthy while cruising the waters near Rome with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-949-546-6852",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "Air Bikes", "StairMaster", "Smith Machine", "Cable Machines", "Shoulder Press Machine", "Barbells", "Bench Press", "Free Weights", "Lat Pulldown", "Leg Curl Machine", "Weight Machines", "Dumbbells", "Pull-up Station", "Leg Press Machine", "BOSU Balls", "Yoga Mats", "Kettlebells", "Balance Boards", "Agility Ladders", "Plyo Boxes", "Battle Ropes", "Stability Balls", "Pilates Reformers", "Cryotherapy Chamber", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Equipment Orientation", "Group Fitness Classes", "Water Stations", "Toiletries", "Fresh Fruit Bar", "Towel Service", "Workout Programs", "Hair Dryers", "Fitness Consultations", "Locker Rentals", "Personal Training Sessions", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "a2817c7c-4973-465f-94b1-517c2fa1b465",
    vesselId: "rms--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Rome. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-226-435-3280",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Arc Trainers", "Elliptical Machines", "Stationary Bikes", "Treadmills", "StairMaster", "Power Rack", "Dumbbells", "Weight Machines", "Cable Machines", "Shoulder Press Machine", "Smith Machine", "Lat Pulldown", "Leg Press Machine", "Free Weights", "Leg Curl Machine", "Barbells", "TRX Suspension Trainers", "Agility Ladders", "Kettlebells", "BOSU Balls", "Foam Rollers", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Protein Shakes", "Personal Training Sessions", "Fresh Fruit Bar", "Body Composition Analysis", "Equipment Orientation", "Locker Rentals", "Group Fitness Classes", "Fitness Tracking", "Workout Programs", "Water Stations", "Toiletries", "Audio/Visual Entertainment"],
    is24Hours: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  }
];
