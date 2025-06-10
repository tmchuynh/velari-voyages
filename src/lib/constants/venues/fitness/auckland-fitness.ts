// Fitness center venues data for Auckland
// This file contains fitness center and wellness facility information for cruise vessels operating from Auckland
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const aucklandFitnessCenters: FitnessCenter[] = [
  {
    id: "682bac43-8e4d-48c7-8168-3f6bbaf80983",
    vesselId: "sy--explorer",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the SY  Explorer. Stay active and healthy while cruising the waters near Auckland with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-771-775-7661",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "StairMaster", "Arc Trainers", "Spin Bikes", "Elliptical Machines", "Recumbent Bikes", "VersaClimber", "Shoulder Press Machine", "Smith Machine", "Bench Press", "Barbells", "Leg Press Machine", "Pull-up Station", "Power Rack", "Weight Machines", "Dumbbells", "Free Weights", "Yoga Mats", "Foam Rollers", "Plyo Boxes", "Resistance Bands", "BOSU Balls", "Kettlebells", "Medicine Balls", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Aqua Fitness Instructor", "Group Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Protein Shakes", "Audio/Visual Entertainment", "Group Fitness Classes", "Hair Dryers", "Body Composition Analysis", "Toiletries", "Fitness Consultations", "Equipment Orientation", "Personal Training Sessions", "Fresh Fruit Bar", "Water Stations"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "01f73672-8a38-4875-9993-377245285b7b",
    vesselId: "ss-auckland-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-524-377-2953",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "VersaClimber", "StairMaster", "Air Bikes", "Elliptical Machines", "Arc Trainers", "Stationary Bikes", "Smith Machine", "Weight Machines", "Leg Curl Machine", "Pull-up Station", "Barbells", "Cable Machines", "Dumbbells", "Power Rack", "Shoulder Press Machine", "Leg Press Machine", "Free Weights", "Battle Ropes", "Balance Boards", "TRX Suspension Trainers", "Medicine Balls", "Stability Balls", "Yoga Mats", "Kettlebells", "Resistance Bands", "Recovery Tools"],
    personalTrainers: ["Yoga Instructor", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Body Composition Analysis", "Hair Dryers", "Group Fitness Classes", "Fitness Tracking", "Audio/Visual Entertainment", "Personal Training Sessions", "Equipment Orientation", "Fitness Consultations", "Fresh Fruit Bar", "Water Stations", "Protein Shakes", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "68310b77-b5e8-4090-988d-5af3c021c144",
    vesselId: "ps--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Auckland. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-402-352-1280",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "StairMaster", "VersaClimber", "Spin Bikes", "Rowing Machines", "Stationary Bikes", "Recumbent Bikes", "Power Rack", "Free Weights", "Dumbbells", "Shoulder Press Machine", "Bench Press", "Leg Press Machine", "Barbells", "Lat Pulldown", "Weight Machines", "Pull-up Station", "Cable Machines", "Leg Curl Machine", "Plyo Boxes", "Stability Balls", "Balance Boards", "Medicine Balls", "Kettlebells", "Yoga Mats", "BOSU Balls", "Foam Rollers", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Audio/Visual Entertainment", "Group Fitness Classes", "Locker Rentals", "Fresh Fruit Bar", "Toiletries", "Body Composition Analysis", "Hair Dryers", "Fitness Tracking", "Workout Programs"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "90b90b63-e68f-4553-9f68-aa87026c1178",
    vesselId: "ss-the--mariner",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-837-558-8741",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "VersaClimber", "Air Bikes", "StairMaster", "Stationary Bikes", "Arc Trainers", "Rowing Machines", "Dumbbells", "Leg Press Machine", "Weight Machines", "Cable Machines", "Pull-up Station", "Smith Machine", "Leg Curl Machine", "Power Rack", "Bench Press", "Barbells", "Free Weights", "Shoulder Press Machine", "Kettlebells", "Agility Ladders", "Medicine Balls", "Resistance Bands", "Plyo Boxes", "Foam Rollers", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Water Stations", "Fitness Consultations", "Fresh Fruit Bar", "Towel Service", "Workout Programs", "Hair Dryers", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "343e62ba-437e-4705-9146-2a4f20574bf5",
    vesselId: "ss--gale",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the SS  Gale. Stay active and healthy while cruising the waters near Auckland with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-461-410-8462",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "Air Bikes", "Recumbent Bikes", "StairMaster", "Elliptical Machines", "Stationary Bikes", "Weight Machines", "Power Rack", "Barbells", "Lat Pulldown", "Leg Press Machine", "Smith Machine", "Bench Press", "Shoulder Press Machine", "Dumbbells", "Battle Ropes", "Kettlebells", "BOSU Balls", "Yoga Mats", "Stability Balls", "Plyo Boxes", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Body Composition Analysis", "Toiletries", "Hair Dryers", "Fitness Tracking", "Fresh Fruit Bar", "Towel Service", "Locker Rentals", "Personal Training Sessions", "Equipment Orientation", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
