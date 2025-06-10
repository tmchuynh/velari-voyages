// Fitness center venues data for Florence
// This file contains fitness center and wellness facility information for cruise vessels operating from Florence
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const florenceFitnessCenters: FitnessCenter[] = [
  {
    id: "d6ad8360-fd25-4f50-9f1a-07cbdc1b8a89",
    vesselId: "sv--explorer",
    name: "Florence Fitness Center",
    description: "Welcome to Florence Fitness Center, your premier wellness destination aboard the SV  Explorer. Stay active and healthy while cruising the waters near Florence with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-451-750-8727",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Elliptical Machines", "VersaClimber", "Treadmills", "Stationary Bikes", "Recumbent Bikes", "Spin Bikes", "StairMaster", "Rowing Machines", "Cable Machines", "Leg Curl Machine", "Weight Machines", "Smith Machine", "Barbells", "Pull-up Station", "Shoulder Press Machine", "Dumbbells", "Free Weights", "Bench Press", "Leg Press Machine", "Kettlebells", "Medicine Balls", "Agility Ladders", "Battle Ropes", "Yoga Mats", "BOSU Balls", "Plyo Boxes", "Stability Balls", "Barre Equipment", "Recovery Tools", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor", "Corrective Exercise Specialist", "Group Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Towel Service", "Equipment Orientation", "Water Stations", "Group Fitness Classes", "Personal Training Sessions", "Protein Shakes", "Body Composition Analysis", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "6fe731c3-5a61-4a83-9e7c-b7096756d934",
    vesselId: "hms-florence-voyager",
    name: "Florence Fitness Center",
    description: "Florence Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-607-664-1053",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Arc Trainers", "Spin Bikes", "Air Bikes", "Treadmills", "VersaClimber", "Elliptical Machines", "Stationary Bikes", "Barbells", "Weight Machines", "Lat Pulldown", "Smith Machine", "Dumbbells", "Leg Press Machine", "Shoulder Press Machine", "Free Weights", "Cable Machines", "Pull-up Station", "Power Rack", "Bench Press", "Balance Boards", "TRX Suspension Trainers", "Yoga Mats", "Medicine Balls", "Kettlebells", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor"],
    amenities: ["Body Composition Analysis", "Locker Rentals", "Workout Programs", "Fitness Consultations", "Towel Service", "Water Stations", "Fresh Fruit Bar", "Personal Training Sessions", "Fitness Tracking", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "27b3f140-6459-439f-a42d-a35c71a79b5e",
    vesselId: "ms--of-the-deep",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the MS  of the Deep. Stay active and healthy while cruising the waters near Florence with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-308-315-5787",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Rowing Machines", "VersaClimber", "StairMaster", "Stationary Bikes", "Shoulder Press Machine", "Pull-up Station", "Barbells", "Weight Machines", "Bench Press", "Leg Press Machine", "Leg Curl Machine", "Lat Pulldown", "Dumbbells", "Free Weights", "Cable Machines", "Smith Machine", "Kettlebells", "BOSU Balls", "TRX Suspension Trainers", "Balance Boards", "Medicine Balls", "Plyo Boxes", "Stability Balls", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Equipment Orientation", "Fitness Tracking", "Hair Dryers", "Group Fitness Classes", "Locker Rentals", "Fresh Fruit Bar", "Towel Service", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    id: "9952125d-259b-4269-a30c-02cfa516aa20",
    vesselId: "sv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-425-112-9481",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Rowing Machines", "Air Bikes", "Arc Trainers", "Treadmills", "Shoulder Press Machine", "Smith Machine", "Cable Machines", "Lat Pulldown", "Weight Machines", "Pull-up Station", "Barbells", "Dumbbells", "Leg Press Machine", "Leg Curl Machine", "Free Weights", "Resistance Bands", "Foam Rollers", "Stability Balls", "Agility Ladders", "Battle Ropes", "Yoga Mats", "Kettlebells", "Balance Boards", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor"],
    amenities: ["Towel Service", "Water Stations", "Hair Dryers", "Fitness Tracking", "Fitness Consultations", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Protein Shakes", "Group Fitness Classes", "Workout Programs", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
  },
  {
    id: "f0077f71-31f9-40dc-ad85-d8d47a3d2dd9",
    vesselId: "sv--gale",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-901-701-3889",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Recumbent Bikes", "Rowing Machines", "VersaClimber", "Elliptical Machines", "Stationary Bikes", "Power Rack", "Weight Machines", "Leg Press Machine", "Barbells", "Pull-up Station", "Dumbbells", "Shoulder Press Machine", "Free Weights", "Cable Machines", "Lat Pulldown", "Smith Machine", "BOSU Balls", "Kettlebells", "Medicine Balls", "TRX Suspension Trainers", "Balance Boards", "Agility Ladders", "Yoga Mats", "Battle Ropes", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist"],
    amenities: ["Equipment Orientation", "Towel Service", "Group Fitness Classes", "Water Stations", "Workout Programs", "Protein Shakes", "Fresh Fruit Bar", "Personal Training Sessions", "Fitness Tracking", "Toiletries", "Audio/Visual Entertainment", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
