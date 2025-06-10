// Fitness center venues data for Quebec City
// This file contains fitness center and wellness facility information for cruise vessels operating from Quebec City
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const quebecCityFitnessCenters: FitnessCenter[] = [
  {
    id: "fe594268-3c08-4458-b7cd-3e2448783cad",
    vesselId: "ly--explorer",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the LY  Explorer. Stay active and healthy while cruising the waters near Quebec City with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-317-117-9748",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Stationary Bikes", "Spin Bikes", "Rowing Machines", "VersaClimber", "Recumbent Bikes", "Treadmills", "StairMaster", "Barbells", "Leg Curl Machine", "Weight Machines", "Bench Press", "Pull-up Station", "Dumbbells", "Shoulder Press Machine", "Free Weights", "TRX Suspension Trainers", "Kettlebells", "Plyo Boxes", "Resistance Bands", "Yoga Mats", "Foam Rollers", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Water Stations", "Personal Training Sessions", "Hair Dryers", "Fitness Consultations", "Audio/Visual Entertainment", "Locker Rentals", "Toiletries", "Group Fitness Classes", "Fitness Tracking", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
    hasChildcareServices: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "035c1c9a-073b-4c49-95c4-824e842214e7",
    vesselId: "rms-quebec-city-voyager",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-426-444-8344",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "VersaClimber", "Recumbent Bikes", "StairMaster", "Air Bikes", "Elliptical Machines", "Stationary Bikes", "Treadmills", "Arc Trainers", "Power Rack", "Smith Machine", "Cable Machines", "Weight Machines", "Shoulder Press Machine", "Barbells", "Bench Press", "Pull-up Station", "Leg Press Machine", "TRX Suspension Trainers", "BOSU Balls", "Foam Rollers", "Kettlebells", "Agility Ladders", "Medicine Balls", "Plyo Boxes", "Battle Ropes", "Massage Chairs", "Barre Equipment", "Stretching Stations", "Recovery Tools", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Yoga Instructor", "Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Group Fitness Classes", "Fitness Consultations", "Fitness Tracking", "Towel Service", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Locker Rentals", "Water Stations", "Personal Training Sessions", "Toiletries", "Equipment Orientation", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
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
    id: "7b22feda-8b7d-43e7-bb25-7a46dcfff10a",
    vesselId: "sv--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the SV  of the Deep. Stay active and healthy while cruising the waters near Quebec City with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-953-451-8025",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Air Bikes", "Treadmills", "Elliptical Machines", "Spin Bikes", "Recumbent Bikes", "StairMaster", "Stationary Bikes", "Barbells", "Weight Machines", "Dumbbells", "Smith Machine", "Bench Press", "Cable Machines", "Shoulder Press Machine", "Pull-up Station", "Free Weights", "Leg Press Machine", "BOSU Balls", "Plyo Boxes", "Foam Rollers", "Battle Ropes", "Kettlebells", "Balance Boards", "Recovery Tools", "Compression Therapy"],
    personalTrainers: ["Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Workout Programs", "Water Stations", "Towel Service", "Hair Dryers", "Toiletries", "Protein Shakes", "Equipment Orientation", "Fitness Consultations", "Personal Training Sessions", "Body Composition Analysis", "Group Fitness Classes"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "61efb677-3c8e-4816-bd61-57a687aa461f",
    vesselId: "ms-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-275-778-2593",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Treadmills", "Air Bikes", "Rowing Machines", "Stationary Bikes", "VersaClimber", "Spin Bikes", "Free Weights", "Pull-up Station", "Cable Machines", "Leg Press Machine", "Weight Machines", "Dumbbells", "Shoulder Press Machine", "Barbells", "Bench Press", "Kettlebells", "Agility Ladders", "Yoga Mats", "Medicine Balls", "Battle Ropes", "Balance Boards", "Stability Balls", "TRX Suspension Trainers", "Infrared Sauna", "Barre Equipment"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist", "Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Workout Programs", "Fitness Tracking", "Equipment Orientation", "Protein Shakes", "Fresh Fruit Bar", "Toiletries", "Hair Dryers", "Locker Rentals", "Audio/Visual Entertainment"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "39cf09eb-5791-4ee0-92a2-464af83a3d27",
    vesselId: "nb--gale",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-304-840-1086",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Rowing Machines", "VersaClimber", "Arc Trainers", "StairMaster", "Elliptical Machines", "Stationary Bikes", "Treadmills", "Spin Bikes", "Cable Machines", "Free Weights", "Barbells", "Leg Curl Machine", "Shoulder Press Machine", "Smith Machine", "Bench Press", "Pull-up Station", "Leg Press Machine", "Dumbbells", "Foam Rollers", "Kettlebells", "Medicine Balls", "Yoga Mats", "Battle Ropes", "Agility Ladders", "Plyo Boxes", "Massage Chairs"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist", "Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Water Stations", "Hair Dryers", "Protein Shakes", "Audio/Visual Entertainment", "Personal Training Sessions", "Fitness Tracking", "Group Fitness Classes", "Fitness Consultations", "Workout Programs", "Fresh Fruit Bar", "Towel Service", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  }
];
