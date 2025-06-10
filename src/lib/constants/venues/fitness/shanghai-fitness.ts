// Fitness center venues data for Shanghai
// This file contains fitness center and wellness facility information for cruise vessels operating from Shanghai
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const shanghaiFitnessCenters: FitnessCenter[] = [
  {
    id: "2783abcd-4bad-4037-8877-e836c58abdc4",
    vesselId: "cs--explorer",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-865-694-6635",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Spin Bikes", "Air Bikes", "Arc Trainers", "Elliptical Machines", "Recumbent Bikes", "Leg Curl Machine", "Bench Press", "Dumbbells", "Cable Machines", "Leg Press Machine", "Weight Machines", "Power Rack", "Shoulder Press Machine", "Barbells", "Smith Machine", "Pull-up Station", "Free Weights", "TRX Suspension Trainers", "Foam Rollers", "Balance Boards", "Kettlebells", "Yoga Mats", "Agility Ladders", "BOSU Balls", "Stability Balls", "Recovery Tools", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Group Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Personal Training Sessions", "Water Stations", "Workout Programs", "Protein Shakes", "Fresh Fruit Bar", "Fitness Tracking", "Body Composition Analysis"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "1c192fae-7966-40cc-9214-7d5c3f15d3d2",
    vesselId: "nx-shanghai-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-627-669-6479",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Elliptical Machines", "Treadmills", "Air Bikes", "Stationary Bikes", "Rowing Machines", "Shoulder Press Machine", "Cable Machines", "Free Weights", "Smith Machine", "Leg Press Machine", "Pull-up Station", "Dumbbells", "Power Rack", "Weight Machines", "Agility Ladders", "Medicine Balls", "Stability Balls", "Plyo Boxes", "Yoga Mats", "Kettlebells", "Compression Therapy", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Consultations", "Equipment Orientation", "Fitness Tracking", "Group Fitness Classes", "Fresh Fruit Bar", "Hair Dryers", "Personal Training Sessions", "Water Stations", "Audio/Visual Entertainment", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "7b0a0d4b-f188-423a-8c23-cb6eac8ed3ea",
    vesselId: "ms--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-581-171-5331",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Spin Bikes", "Treadmills", "Recumbent Bikes", "VersaClimber", "Air Bikes", "Elliptical Machines", "Lat Pulldown", "Smith Machine", "Free Weights", "Pull-up Station", "Cable Machines", "Leg Press Machine", "Barbells", "Dumbbells", "Weight Machines", "Power Rack", "Bench Press", "Shoulder Press Machine", "Kettlebells", "Stability Balls", "TRX Suspension Trainers", "Resistance Bands", "Medicine Balls", "Agility Ladders", "Yoga Mats", "Massage Chairs", "Infrared Sauna"],
    personalTrainers: ["Fitness Nutrition Specialist", "Senior Fitness Specialist", "Yoga Instructor", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Hair Dryers", "Fitness Consultations", "Locker Rentals", "Fitness Tracking", "Audio/Visual Entertainment", "Body Composition Analysis", "Water Stations", "Workout Programs", "Protein Shakes", "Equipment Orientation", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
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
    id: "21e848c2-5bf6-4719-9340-370fead67e30",
    vesselId: "mv-the--mariner",
    name: "Shanghai Fitness Center",
    description: "Welcome to Shanghai Fitness Center, your premier wellness destination aboard the MV The  Mariner. Stay active and healthy while cruising the waters near Shanghai with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-998-836-2449",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Arc Trainers", "Stationary Bikes", "Elliptical Machines", "Treadmills", "VersaClimber", "Spin Bikes", "Recumbent Bikes", "StairMaster", "Weight Machines", "Free Weights", "Lat Pulldown", "Dumbbells", "Cable Machines", "Barbells", "Leg Press Machine", "Pull-up Station", "Leg Curl Machine", "Power Rack", "Agility Ladders", "TRX Suspension Trainers", "Kettlebells", "Resistance Bands", "Balance Boards", "Massage Chairs", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Water Stations", "Equipment Orientation", "Personal Training Sessions", "Group Fitness Classes", "Fitness Consultations", "Fitness Tracking", "Workout Programs", "Body Composition Analysis", "Fresh Fruit Bar", "Locker Rentals", "Audio/Visual Entertainment"],
    is24Hours: true,
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "4bac393e-4183-4936-b28e-d0f335a734b9",
    vesselId: "nb--gale",
    name: "NB  Gale Fitness Center",
    description: "Welcome to NB  Gale Fitness Center, your premier wellness destination aboard the NB  Gale. Stay active and healthy while cruising the waters near Shanghai with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-555-636-6985",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Recumbent Bikes", "Rowing Machines", "Air Bikes", "StairMaster", "Arc Trainers", "Elliptical Machines", "Treadmills", "VersaClimber", "Free Weights", "Power Rack", "Dumbbells", "Leg Press Machine", "Weight Machines", "Pull-up Station", "Shoulder Press Machine", "Smith Machine", "Leg Curl Machine", "Bench Press", "Resistance Bands", "BOSU Balls", "Yoga Mats", "TRX Suspension Trainers", "Battle Ropes", "Plyo Boxes", "Medicine Balls", "Stretching Stations", "Massage Chairs"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Locker Rentals", "Toiletries", "Personal Training Sessions", "Body Composition Analysis", "Fitness Tracking", "Workout Programs", "Water Stations", "Audio/Visual Entertainment", "Equipment Orientation", "Protein Shakes"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  }
];
