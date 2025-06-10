// Fitness center venues data for Helsinki
// This file contains fitness center and wellness facility information for cruise vessels operating from Helsinki
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const helsinkiFitnessCenters: FitnessCenter[] = [
  {
    id: "423bd239-e99b-4a2f-b2f6-4ebc87f36465",
    vesselId: "mv--explorer",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the MV  Explorer. Stay active and healthy while cruising the waters near Helsinki with our state-of-the-art fitness facilities. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-578-392-7884",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Elliptical Machines", "Rowing Machines", "Recumbent Bikes", "StairMaster", "Air Bikes", "Stationary Bikes", "Spin Bikes", "VersaClimber", "Pull-up Station", "Power Rack", "Free Weights", "Leg Curl Machine", "Barbells", "Cable Machines", "Weight Machines", "Dumbbells", "Bench Press", "Shoulder Press Machine", "Leg Press Machine", "Smith Machine", "Yoga Mats", "Kettlebells", "Medicine Balls", "Battle Ropes", "BOSU Balls", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Strength Training Specialist", "Senior Fitness Specialist"],
    amenities: ["Personal Training Sessions", "Toiletries", "Audio/Visual Entertainment", "Water Stations", "Fitness Tracking", "Fresh Fruit Bar", "Hair Dryers", "Protein Shakes", "Workout Programs", "Locker Rentals", "Towel Service", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "fa7511c6-e812-4bce-b4f8-a1d488c72a1c",
    vesselId: "hms-helsinki-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-806-222-9744",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "VersaClimber", "Spin Bikes", "Arc Trainers", "StairMaster", "Rowing Machines", "Power Rack", "Free Weights", "Dumbbells", "Smith Machine", "Barbells", "Cable Machines", "Weight Machines", "Lat Pulldown", "Leg Press Machine", "BOSU Balls", "TRX Suspension Trainers", "Stability Balls", "Battle Ropes", "Resistance Bands", "Yoga Mats", "Compression Therapy", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Fitness Nutrition Specialist", "Senior Fitness Specialist", "Strength Training Specialist"],
    amenities: ["Equipment Orientation", "Group Fitness Classes", "Hair Dryers", "Toiletries", "Fitness Tracking", "Personal Training Sessions", "Audio/Visual Entertainment", "Water Stations", "Protein Shakes", "Locker Rentals", "Workout Programs"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "70589cc4-e080-4bff-8a51-b80859ac1d6c",
    vesselId: "ss--of-the-deep",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-367-129-9626",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Stationary Bikes", "Rowing Machines", "Air Bikes", "Treadmills", "StairMaster", "Spin Bikes", "VersaClimber", "Recumbent Bikes", "Arc Trainers", "Free Weights", "Cable Machines", "Smith Machine", "Bench Press", "Shoulder Press Machine", "Power Rack", "Lat Pulldown", "Dumbbells", "Kettlebells", "Medicine Balls", "Balance Boards", "Battle Ropes", "TRX Suspension Trainers", "Cryotherapy Chamber", "Infrared Sauna", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Locker Rentals", "Protein Shakes", "Fitness Consultations", "Water Stations", "Fresh Fruit Bar", "Workout Programs", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "bc2d22b2-6546-44e9-b0e1-c7ccdb10d997",
    vesselId: "nx-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-827-967-9252",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Treadmills", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "Arc Trainers", "Free Weights", "Dumbbells", "Leg Curl Machine", "Bench Press", "Lat Pulldown", "Barbells", "Smith Machine", "Pull-up Station", "Medicine Balls", "Stability Balls", "Balance Boards", "Resistance Bands", "TRX Suspension Trainers", "Pilates Reformers", "Massage Chairs"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist", "Pilates Instructor", "Yoga Instructor"],
    amenities: ["Towel Service", "Water Stations", "Body Composition Analysis", "Hair Dryers", "Fitness Consultations", "Locker Rentals", "Fitness Tracking", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "bd9a0bbe-42bd-494a-86b3-4595288a0294",
    vesselId: "ms--gale",
    name: "Helsinki Fitness Center",
    description: "Discover wellness at sea with Helsinki Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-635-252-5984",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Elliptical Machines", "VersaClimber", "Treadmills", "Recumbent Bikes", "Spin Bikes", "Dumbbells", "Weight Machines", "Shoulder Press Machine", "Lat Pulldown", "Free Weights", "Leg Curl Machine", "Smith Machine", "Leg Press Machine", "Cable Machines", "Power Rack", "Kettlebells", "BOSU Balls", "Medicine Balls", "Yoga Mats", "Plyo Boxes", "Battle Ropes", "Stability Balls", "Infrared Sauna", "Massage Chairs", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Group Fitness Classes", "Toiletries", "Fresh Fruit Bar", "Personal Training Sessions", "Water Stations", "Body Composition Analysis", "Fitness Tracking", "Audio/Visual Entertainment", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  }
];
