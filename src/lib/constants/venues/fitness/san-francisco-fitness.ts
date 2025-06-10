// Fitness center venues data for San Francisco
// This file contains fitness center and wellness facility information for cruise vessels operating from San Francisco
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const sanFranciscoFitnessCenters: FitnessCenter[] = [
  {
    id: "6d8e7a40-a23f-49fb-8bcc-1b1813b9564a",
    vesselId: "rv--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-952-427-9434",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Spin Bikes", "Rowing Machines", "VersaClimber", "Stationary Bikes", "Treadmills", "Elliptical Machines", "Arc Trainers", "Air Bikes", "Lat Pulldown", "Leg Press Machine", "Pull-up Station", "Leg Curl Machine", "Shoulder Press Machine", "Barbells", "Dumbbells", "Smith Machine", "Bench Press", "Kettlebells", "Medicine Balls", "Battle Ropes", "Agility Ladders", "Plyo Boxes", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Equipment Orientation", "Group Fitness Classes", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Towel Service", "Protein Shakes", "Workout Programs", "Toiletries", "Body Composition Analysis", "Fitness Tracking", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "af4cd4bf-e2b9-494a-869a-d05dae6dd159",
    vesselId: "rms-san-francisco-voyager",
    name: "San Francisco Fitness Center",
    description: "San Francisco Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-938-363-4678",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Arc Trainers", "Spin Bikes", "StairMaster", "Rowing Machines", "Recumbent Bikes", "Power Rack", "Lat Pulldown", "Leg Press Machine", "Pull-up Station", "Smith Machine", "Leg Curl Machine", "Weight Machines", "Barbells", "Cable Machines", "Dumbbells", "Shoulder Press Machine", "TRX Suspension Trainers", "BOSU Balls", "Balance Boards", "Yoga Mats", "Plyo Boxes", "Battle Ropes", "Massage Chairs", "Stretching Stations"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Equipment Orientation", "Locker Rentals", "Group Fitness Classes", "Fitness Tracking", "Hair Dryers", "Audio/Visual Entertainment", "Personal Training Sessions", "Water Stations", "Fresh Fruit Bar", "Fitness Consultations", "Toiletries", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
    id: "92d5f4fc-0f13-4c55-a2d6-f1a6c49cac1f",
    vesselId: "ts--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-419-716-5997",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "Air Bikes", "Recumbent Bikes", "VersaClimber", "Elliptical Machines", "Arc Trainers", "Rowing Machines", "StairMaster", "Barbells", "Shoulder Press Machine", "Pull-up Station", "Leg Press Machine", "Leg Curl Machine", "Bench Press", "Power Rack", "Lat Pulldown", "Weight Machines", "Smith Machine", "Stability Balls", "Foam Rollers", "TRX Suspension Trainers", "Balance Boards", "Agility Ladders", "Infrared Sauna", "Recovery Tools"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Spinning Instructor"],
    amenities: ["Hair Dryers", "Fresh Fruit Bar", "Locker Rentals", "Audio/Visual Entertainment", "Body Composition Analysis", "Toiletries", "Equipment Orientation", "Workout Programs"],
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
    isPopular: true
  },
  {
    id: "9fa2eaa7-e5ba-4555-9d0f-43c3fd511846",
    vesselId: "sy-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-285-925-3680",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "VersaClimber", "Air Bikes", "Recumbent Bikes", "Arc Trainers", "Elliptical Machines", "StairMaster", "Rowing Machines", "Bench Press", "Power Rack", "Lat Pulldown", "Cable Machines", "Free Weights", "Leg Press Machine", "Leg Curl Machine", "Pull-up Station", "Dumbbells", "Shoulder Press Machine", "Barbells", "Agility Ladders", "Plyo Boxes", "Stability Balls", "Kettlebells", "Medicine Balls", "Battle Ropes", "BOSU Balls", "Resistance Bands", "Recovery Tools", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Audio/Visual Entertainment", "Group Fitness Classes", "Hair Dryers", "Fitness Tracking", "Personal Training Sessions", "Body Composition Analysis", "Protein Shakes", "Equipment Orientation", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
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
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "6840933b-2113-4e8e-b630-2eff5af88eae",
    vesselId: "hms--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-220-686-2195",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Spin Bikes", "Rowing Machines", "StairMaster", "Cable Machines", "Shoulder Press Machine", "Weight Machines", "Smith Machine", "Bench Press", "Free Weights", "Leg Curl Machine", "Pull-up Station", "Dumbbells", "TRX Suspension Trainers", "Medicine Balls", "Balance Boards", "Resistance Bands", "Yoga Mats", "BOSU Balls", "Compression Therapy", "Stretching Stations"],
    personalTrainers: ["Fitness Nutrition Specialist", "Corrective Exercise Specialist", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Fitness Tracking", "Toiletries", "Water Stations", "Audio/Visual Entertainment", "Locker Rentals", "Fresh Fruit Bar", "Group Fitness Classes", "Body Composition Analysis", "Towel Service"],
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
    isPopular: false
  }
];
