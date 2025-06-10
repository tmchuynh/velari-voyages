// Fitness center venues data for Venice
// This file contains fitness center and wellness facility information for cruise vessels operating from Venice
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const veniceFitnessCenters: FitnessCenter[] = [
  {
    id: "31b4e387-1674-4886-85b4-03ec95ff36b8",
    vesselId: "nb--explorer",
    name: "Venice Fitness Center",
    description: "Welcome to Venice Fitness Center, your premier wellness destination aboard the NB  Explorer. Stay active and healthy while cruising the waters near Venice with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-802-407-8719",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Stationary Bikes", "Elliptical Machines", "Treadmills", "Air Bikes", "Recumbent Bikes", "Pull-up Station", "Power Rack", "Leg Press Machine", "Free Weights", "Cable Machines", "Shoulder Press Machine", "Dumbbells", "Weight Machines", "Bench Press", "Leg Curl Machine", "Smith Machine", "Stability Balls", "Foam Rollers", "Plyo Boxes", "Yoga Mats", "BOSU Balls", "Medicine Balls", "TRX Suspension Trainers", "Battle Ropes", "Infrared Sauna", "Pilates Reformers", "Massage Chairs"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Equipment Orientation", "Fitness Consultations", "Water Stations", "Hair Dryers", "Workout Programs", "Fresh Fruit Bar", "Protein Shakes", "Towel Service", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
      }
    ],
    isPopular: true
  },
  {
    id: "5facb756-dec5-4adf-a610-f276c9ff1d2b",
    vesselId: "rv-venice-voyager",
    name: "Venice Fitness Center",
    description: "Welcome to Venice Fitness Center, your premier wellness destination aboard the RV Venice Voyager. Stay active and healthy while cruising the waters near Venice with our state-of-the-art fitness facilities. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-488-404-6073",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Elliptical Machines", "Stationary Bikes", "Recumbent Bikes", "StairMaster", "Air Bikes", "Bench Press", "Cable Machines", "Leg Curl Machine", "Leg Press Machine", "Weight Machines", "Barbells", "Lat Pulldown", "Pull-up Station", "Kettlebells", "Medicine Balls", "Resistance Bands", "Agility Ladders", "Yoga Mats", "Battle Ropes", "TRX Suspension Trainers", "Balance Boards", "Infrared Sauna", "Compression Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Towel Service", "Water Stations", "Audio/Visual Entertainment", "Personal Training Sessions", "Group Fitness Classes", "Fresh Fruit Bar", "Fitness Consultations", "Body Composition Analysis", "Toiletries", "Protein Shakes", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "99ca7202-362e-4252-a530-9ca5a3606530",
    vesselId: "my--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-808-142-9588",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Elliptical Machines", "Rowing Machines", "Recumbent Bikes", "Air Bikes", "StairMaster", "VersaClimber", "Arc Trainers", "Treadmills", "Leg Curl Machine", "Free Weights", "Dumbbells", "Barbells", "Lat Pulldown", "Leg Press Machine", "Smith Machine", "Cable Machines", "BOSU Balls", "Yoga Mats", "Battle Ropes", "TRX Suspension Trainers", "Agility Ladders", "Foam Rollers", "Stability Balls", "Compression Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor"],
    amenities: ["Hair Dryers", "Water Stations", "Protein Shakes", "Towel Service", "Personal Training Sessions", "Equipment Orientation", "Workout Programs", "Fitness Consultations", "Toiletries", "Group Fitness Classes", "Audio/Visual Entertainment", "Fresh Fruit Bar"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    isPopular: false
  },
  {
    id: "a72a3f70-337d-41d7-923c-a997d7f85cd3",
    vesselId: "cs-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-521-697-5112",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Air Bikes", "Rowing Machines", "Recumbent Bikes", "Treadmills", "VersaClimber", "Elliptical Machines", "Stationary Bikes", "Leg Curl Machine", "Free Weights", "Leg Press Machine", "Pull-up Station", "Smith Machine", "Cable Machines", "Dumbbells", "Bench Press", "Barbells", "Shoulder Press Machine", "Weight Machines", "Power Rack", "BOSU Balls", "Battle Ropes", "Medicine Balls", "Plyo Boxes", "Balance Boards", "Resistance Bands", "Recovery Tools"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Water Stations", "Toiletries", "Protein Shakes", "Personal Training Sessions", "Workout Programs", "Body Composition Analysis", "Fitness Tracking", "Fresh Fruit Bar", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "f9036cf6-b915-4179-87d9-98b1fae48eec",
    vesselId: "rv--gale",
    name: "Venice Fitness Center",
    description: "Welcome to Venice Fitness Center, your premier wellness destination aboard the RV  Gale. Stay active and healthy while cruising the waters near Venice with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-421-411-1916",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Spin Bikes", "Elliptical Machines", "VersaClimber", "Air Bikes", "Treadmills", "Arc Trainers", "StairMaster", "Dumbbells", "Cable Machines", "Shoulder Press Machine", "Smith Machine", "Power Rack", "Bench Press", "Barbells", "Lat Pulldown", "Stability Balls", "BOSU Balls", "Medicine Balls", "Balance Boards", "Kettlebells", "Foam Rollers", "TRX Suspension Trainers", "Cryotherapy Chamber", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Spinning Instructor", "Senior Fitness Specialist"],
    amenities: ["Personal Training Sessions", "Water Stations", "Towel Service", "Equipment Orientation", "Group Fitness Classes", "Audio/Visual Entertainment", "Fitness Consultations", "Workout Programs", "Locker Rentals", "Hair Dryers"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  }
];
