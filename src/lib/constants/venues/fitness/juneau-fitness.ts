// Fitness center venues data for Juneau
// This file contains fitness center and wellness facility information for cruise vessels operating from Juneau
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const juneauFitnessCenters: FitnessCenter[] = [
  {
    id: "1d89e73f-cbb8-4393-a6ce-d68386ed2e51",
    vesselId: "mv--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-552-426-1341",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Air Bikes", "Arc Trainers", "Stationary Bikes", "Recumbent Bikes", "StairMaster", "VersaClimber", "Rowing Machines", "Weight Machines", "Barbells", "Pull-up Station", "Smith Machine", "Leg Press Machine", "Leg Curl Machine", "Lat Pulldown", "Dumbbells", "Cable Machines", "Free Weights", "Bench Press", "Battle Ropes", "Agility Ladders", "Yoga Mats", "Balance Boards", "Resistance Bands", "Stretching Stations"],
    personalTrainers: ["Strength Training Specialist", "Aqua Fitness Instructor", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Workout Programs", "Fresh Fruit Bar", "Towel Service", "Hair Dryers", "Water Stations", "Equipment Orientation", "Protein Shakes", "Personal Training Sessions", "Toiletries", "Fitness Tracking", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "86091ea2-2e2c-4258-96e7-47d9664825e3",
    vesselId: "fv-juneau-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-509-119-2986",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Recumbent Bikes", "Elliptical Machines", "VersaClimber", "Stationary Bikes", "Spin Bikes", "Air Bikes", "Free Weights", "Dumbbells", "Shoulder Press Machine", "Bench Press", "Leg Press Machine", "Weight Machines", "Pull-up Station", "Barbells", "Leg Curl Machine", "Smith Machine", "Lat Pulldown", "Cable Machines", "Balance Boards", "Kettlebells", "Medicine Balls", "Foam Rollers", "Resistance Bands", "BOSU Balls", "Pilates Reformers"],
    personalTrainers: ["Corrective Exercise Specialist", "Aqua Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Hair Dryers", "Body Composition Analysis", "Workout Programs", "Towel Service", "Locker Rentals", "Protein Shakes", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "fde3dab1-3e9c-4168-a8f3-bece64f19c8a",
    vesselId: "rv--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the RV  of the Deep. Stay active and healthy while cruising the waters near Juneau with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-380-210-2488",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "StairMaster", "Stationary Bikes", "Spin Bikes", "Arc Trainers", "Recumbent Bikes", "Bench Press", "Barbells", "Leg Curl Machine", "Leg Press Machine", "Pull-up Station", "Dumbbells", "Cable Machines", "Power Rack", "Free Weights", "Weight Machines", "Shoulder Press Machine", "Foam Rollers", "Kettlebells", "Stability Balls", "Balance Boards", "Medicine Balls", "TRX Suspension Trainers", "Stretching Stations", "Barre Equipment", "Compression Therapy"],
    personalTrainers: ["Group Fitness Instructor", "Senior Fitness Specialist", "Strength Training Specialist", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Fitness Consultations", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Group Fitness Classes", "Water Stations", "Towel Service", "Workout Programs", "Equipment Orientation", "Toiletries", "Body Composition Analysis"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "c1e90b78-bb40-4217-b603-c3c0764599bb",
    vesselId: "my-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-833-313-4449",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Arc Trainers", "Recumbent Bikes", "Spin Bikes", "Air Bikes", "Stationary Bikes", "StairMaster", "Elliptical Machines", "Free Weights", "Pull-up Station", "Leg Press Machine", "Barbells", "Leg Curl Machine", "Bench Press", "Lat Pulldown", "Cable Machines", "Stability Balls", "Foam Rollers", "Plyo Boxes", "Agility Ladders", "Kettlebells", "TRX Suspension Trainers", "BOSU Balls", "Balance Boards", "Infrared Sauna", "Stretching Stations", "Pilates Reformers"],
    personalTrainers: ["Strength Training Specialist", "Senior Fitness Specialist"],
    amenities: ["Fresh Fruit Bar", "Toiletries", "Audio/Visual Entertainment", "Group Fitness Classes", "Water Stations", "Towel Service", "Hair Dryers", "Fitness Tracking", "Workout Programs", "Fitness Consultations", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "9f5721bf-2a80-4fa4-965a-cb8d339f3d36",
    vesselId: "sv--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-782-219-5262",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Recumbent Bikes", "Treadmills", "Air Bikes", "Spin Bikes", "Elliptical Machines", "Stationary Bikes", "Cable Machines", "Barbells", "Pull-up Station", "Shoulder Press Machine", "Lat Pulldown", "Power Rack", "Leg Press Machine", "Leg Curl Machine", "Smith Machine", "Kettlebells", "Stability Balls", "Plyo Boxes", "Yoga Mats", "Balance Boards", "BOSU Balls", "Resistance Bands", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Yoga Instructor", "Strength Training Specialist"],
    amenities: ["Towel Service", "Fitness Tracking", "Toiletries", "Protein Shakes", "Body Composition Analysis", "Water Stations", "Workout Programs", "Equipment Orientation", "Fitness Consultations", "Personal Training Sessions"],
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  }
];
