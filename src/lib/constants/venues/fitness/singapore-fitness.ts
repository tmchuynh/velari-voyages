// Fitness center venues data for Singapore
// This file contains fitness center and wellness facility information for cruise vessels operating from Singapore
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const singaporeFitnessCenters: FitnessCenter[] = [
  {
    id: "77648be3-fe9c-4b1f-a502-7e6b756f02f0",
    vesselId: "ps--explorer",
    name: "Singapore Fitness Center",
    description: "Singapore Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-787-415-7542",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Treadmills", "Rowing Machines", "Stationary Bikes", "StairMaster", "Arc Trainers", "Spin Bikes", "Recumbent Bikes", "Elliptical Machines", "Air Bikes", "Free Weights", "Leg Press Machine", "Leg Curl Machine", "Dumbbells", "Barbells", "Shoulder Press Machine", "Lat Pulldown", "Weight Machines", "Pull-up Station", "Foam Rollers", "Battle Ropes", "Balance Boards", "Agility Ladders", "TRX Suspension Trainers", "Kettlebells", "Plyo Boxes", "Yoga Mats", "Stretching Stations", "Barre Equipment", "Compression Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Towel Service", "Hair Dryers", "Toiletries", "Water Stations", "Fresh Fruit Bar", "Equipment Orientation", "Audio/Visual Entertainment", "Body Composition Analysis", "Personal Training Sessions", "Locker Rentals"],
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
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "63b30532-5d07-46f3-ad0f-65e65115211f",
    vesselId: "rv-singapore-voyager",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the RV Singapore Voyager. Stay active and healthy while cruising the waters near Singapore with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-383-627-2178",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Recumbent Bikes", "Elliptical Machines", "VersaClimber", "StairMaster", "Stationary Bikes", "Air Bikes", "Leg Curl Machine", "Shoulder Press Machine", "Weight Machines", "Barbells", "Cable Machines", "Power Rack", "Pull-up Station", "Dumbbells", "Smith Machine", "Leg Press Machine", "Free Weights", "Lat Pulldown", "Stability Balls", "Kettlebells", "BOSU Balls", "Plyo Boxes", "TRX Suspension Trainers", "Recovery Tools", "Compression Therapy", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Body Composition Analysis", "Locker Rentals", "Group Fitness Classes", "Fitness Consultations", "Toiletries", "Personal Training Sessions", "Fitness Tracking", "Hair Dryers", "Water Stations", "Audio/Visual Entertainment"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
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
  },
  {
    id: "a89de5ff-d1ed-4ff2-8db6-8d9e89c9bc87",
    vesselId: "rv--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-536-136-1750",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Air Bikes", "Elliptical Machines", "Arc Trainers", "Rowing Machines", "Treadmills", "Recumbent Bikes", "VersaClimber", "Weight Machines", "Free Weights", "Dumbbells", "Pull-up Station", "Cable Machines", "Power Rack", "Leg Press Machine", "Lat Pulldown", "Smith Machine", "Barbells", "Stability Balls", "Battle Ropes", "Medicine Balls", "Kettlebells", "Balance Boards", "TRX Suspension Trainers", "Resistance Bands", "BOSU Balls", "Pilates Reformers", "Recovery Tools", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Personal Training Sessions", "Towel Service", "Fresh Fruit Bar", "Water Stations", "Group Fitness Classes", "Equipment Orientation", "Fitness Tracking", "Protein Shakes", "Toiletries", "Fitness Consultations"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "6483cafd-7bb5-4dcd-8646-31921255055a",
    vesselId: "rv-the--mariner",
    name: "RV The  Mariner Fitness Center",
    description: "RV The  Mariner Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Singapore. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-835-721-8091",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Stationary Bikes", "Rowing Machines", "Arc Trainers", "Elliptical Machines", "Recumbent Bikes", "Treadmills", "Free Weights", "Dumbbells", "Lat Pulldown", "Smith Machine", "Barbells", "Leg Curl Machine", "Shoulder Press Machine", "Bench Press", "Kettlebells", "Medicine Balls", "Plyo Boxes", "Foam Rollers", "Yoga Mats", "BOSU Balls", "Battle Ropes", "Resistance Bands", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Workout Programs", "Fitness Consultations", "Protein Shakes", "Locker Rentals", "Toiletries", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Hair Dryers", "Towel Service"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "6e672442-2208-46e5-bd7b-6615c14c15f4",
    vesselId: "sv--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-896-569-2701",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Spin Bikes", "Treadmills", "StairMaster", "Elliptical Machines", "Rowing Machines", "Power Rack", "Leg Press Machine", "Shoulder Press Machine", "Dumbbells", "Free Weights", "Barbells", "Leg Curl Machine", "Weight Machines", "Cable Machines", "Smith Machine", "Plyo Boxes", "BOSU Balls", "Battle Ropes", "Medicine Balls", "Balance Boards", "Yoga Mats", "Foam Rollers", "Cryotherapy Chamber", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Fitness Tracking", "Protein Shakes", "Body Composition Analysis", "Personal Training Sessions", "Workout Programs", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  }
];
