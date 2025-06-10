// Fitness center venues data for Bali
// This file contains fitness center and wellness facility information for cruise vessels operating from Bali
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const baliFitnessCenters: FitnessCenter[] = [
  {
    id: "0a95478f-e6d1-4981-abdf-49654d11cb21",
    vesselId: "ss--explorer",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-895-508-1411",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Treadmills", "Spin Bikes", "StairMaster", "Air Bikes", "Arc Trainers", "Free Weights", "Bench Press", "Weight Machines", "Lat Pulldown", "Shoulder Press Machine", "Leg Press Machine", "Leg Curl Machine", "Dumbbells", "Smith Machine", "Barbells", "Cable Machines", "TRX Suspension Trainers", "Resistance Bands", "Plyo Boxes", "BOSU Balls", "Battle Ropes", "Pilates Reformers", "Cryotherapy Chamber", "Recovery Tools", "Compression Therapy", "Infrared Sauna", "Massage Chairs"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Corrective Exercise Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Body Composition Analysis", "Locker Rentals", "Fitness Tracking", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Workout Programs", "Group Fitness Classes", "Hair Dryers", "Towel Service"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "2aa26079-8650-4792-958e-1bbf88fd1559",
    vesselId: "rms-bali-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bali. Our facility features steam room.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-894-638-6195",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Treadmills", "Recumbent Bikes", "Rowing Machines", "Spin Bikes", "VersaClimber", "StairMaster", "Arc Trainers", "Stationary Bikes", "Weight Machines", "Pull-up Station", "Lat Pulldown", "Bench Press", "Shoulder Press Machine", "Leg Press Machine", "Leg Curl Machine", "Barbells", "Dumbbells", "Power Rack", "Resistance Bands", "Foam Rollers", "TRX Suspension Trainers", "Agility Ladders", "Battle Ropes", "Medicine Balls", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor", "Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fitness Consultations", "Audio/Visual Entertainment", "Towel Service", "Hair Dryers", "Locker Rentals", "Body Composition Analysis", "Protein Shakes", "Water Stations", "Personal Training Sessions", "Workout Programs", "Toiletries", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "d159eb6a-6f21-4134-860c-d483667035e4",
    vesselId: "ts--of-the-deep",
    name: "TS  of the Deep Fitness Center",
    description: "Discover wellness at sea with TS  of the Deep Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-467-600-4749",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "VersaClimber", "Recumbent Bikes", "StairMaster", "Spin Bikes", "Rowing Machines", "Stationary Bikes", "Dumbbells", "Leg Press Machine", "Shoulder Press Machine", "Smith Machine", "Leg Curl Machine", "Lat Pulldown", "Bench Press", "Weight Machines", "Barbells", "TRX Suspension Trainers", "Foam Rollers", "Medicine Balls", "Resistance Bands", "Plyo Boxes", "Battle Ropes", "Cryotherapy Chamber"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist"],
    amenities: ["Body Composition Analysis", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Equipment Orientation", "Locker Rentals", "Fitness Tracking", "Toiletries", "Protein Shakes", "Fitness Consultations", "Workout Programs", "Audio/Visual Entertainment"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "2c9b0999-5169-4451-ab70-92c910434d6c",
    vesselId: "my-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the MY The  Mariner. Stay active and healthy while cruising the waters near Bali with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-669-413-3038",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Treadmills", "VersaClimber", "Arc Trainers", "Air Bikes", "Stationary Bikes", "StairMaster", "Elliptical Machines", "Spin Bikes", "Smith Machine", "Free Weights", "Power Rack", "Bench Press", "Dumbbells", "Cable Machines", "Weight Machines", "Barbells", "Lat Pulldown", "Agility Ladders", "Resistance Bands", "TRX Suspension Trainers", "Stability Balls", "BOSU Balls", "Medicine Balls", "Plyo Boxes", "Balance Boards", "Pilates Reformers", "Compression Therapy", "Barre Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor", "Certified Personal Trainer", "Yoga Instructor"],
    amenities: ["Fitness Consultations", "Toiletries", "Equipment Orientation", "Group Fitness Classes", "Personal Training Sessions", "Fitness Tracking", "Fresh Fruit Bar", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "06bf8912-fdce-4634-9739-2dddc6ae62e9",
    vesselId: "ly--gale",
    name: "LY  Gale Fitness Center",
    description: "LY  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bali. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-398-291-9028",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "StairMaster", "Elliptical Machines", "Recumbent Bikes", "Stationary Bikes", "Spin Bikes", "Air Bikes", "VersaClimber", "Rowing Machines", "Arc Trainers", "Bench Press", "Free Weights", "Weight Machines", "Smith Machine", "Barbells", "Leg Curl Machine", "Leg Press Machine", "Shoulder Press Machine", "Cable Machines", "Pull-up Station", "Resistance Bands", "BOSU Balls", "Agility Ladders", "Kettlebells", "Yoga Mats", "Balance Boards", "Stretching Stations", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Hair Dryers", "Fitness Tracking", "Towel Service", "Protein Shakes", "Audio/Visual Entertainment", "Body Composition Analysis", "Toiletries", "Water Stations", "Fitness Consultations", "Locker Rentals", "Fresh Fruit Bar", "Workout Programs"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  }
];
