// Fitness center venues data for Los Angeles
// This file contains fitness center and wellness facility information for cruise vessels operating from Los Angeles
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const losAngelesFitnessCenters: FitnessCenter[] = [
  {
    id: "03417e0e-6ead-4d49-b7ba-75f400152c88",
    vesselId: "rv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-288-128-9142",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Stationary Bikes", "Rowing Machines", "Arc Trainers", "VersaClimber", "Treadmills", "Air Bikes", "Elliptical Machines", "Recumbent Bikes", "Spin Bikes", "Free Weights", "Shoulder Press Machine", "Smith Machine", "Dumbbells", "Pull-up Station", "Barbells", "Power Rack", "Leg Press Machine", "Weight Machines", "Bench Press", "Cable Machines", "Agility Ladders", "Plyo Boxes", "Balance Boards", "Yoga Mats", "Foam Rollers", "Stability Balls", "BOSU Balls", "Pilates Reformers"],
    personalTrainers: ["Spinning Instructor", "Strength Training Specialist", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Audio/Visual Entertainment", "Personal Training Sessions", "Hair Dryers", "Equipment Orientation", "Fitness Tracking", "Water Stations", "Body Composition Analysis", "Fitness Consultations", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    isPopular: false
  },
  {
    id: "f340a6ab-af60-4f2e-85fc-a7943e8a5c02",
    vesselId: "hms-los-angeles-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Los Angeles. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-396-478-7587",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Rowing Machines", "Air Bikes", "Stationary Bikes", "VersaClimber", "Elliptical Machines", "Leg Press Machine", "Cable Machines", "Lat Pulldown", "Power Rack", "Dumbbells", "Smith Machine", "Weight Machines", "Free Weights", "Leg Curl Machine", "Shoulder Press Machine", "TRX Suspension Trainers", "BOSU Balls", "Balance Boards", "Yoga Mats", "Stability Balls", "Agility Ladders", "Pilates Reformers", "Massage Chairs", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Equipment Orientation", "Locker Rentals", "Group Fitness Classes", "Towel Service", "Hair Dryers", "Fresh Fruit Bar", "Workout Programs", "Toiletries", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "760221f4-c8de-44a7-9a81-9ee322860f6c",
    vesselId: "sy--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-295-743-8883",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "StairMaster", "Arc Trainers", "VersaClimber", "Rowing Machines", "Recumbent Bikes", "Elliptical Machines", "Stationary Bikes", "Power Rack", "Shoulder Press Machine", "Smith Machine", "Leg Press Machine", "Lat Pulldown", "Cable Machines", "Pull-up Station", "Weight Machines", "Leg Curl Machine", "Barbells", "Plyo Boxes", "Medicine Balls", "Kettlebells", "BOSU Balls", "Balance Boards", "TRX Suspension Trainers", "Cryotherapy Chamber", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Protein Shakes", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Towel Service", "Fitness Consultations", "Equipment Orientation", "Group Fitness Classes", "Fitness Tracking", "Personal Training Sessions", "Hair Dryers"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "6246c9b2-33b5-4b28-af76-a380d12af32b",
    vesselId: "rv-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Los Angeles. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-309-758-7861",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "VersaClimber", "Rowing Machines", "Recumbent Bikes", "Arc Trainers", "Treadmills", "Stationary Bikes", "StairMaster", "Elliptical Machines", "Dumbbells", "Bench Press", "Pull-up Station", "Shoulder Press Machine", "Weight Machines", "Power Rack", "Barbells", "Leg Press Machine", "Lat Pulldown", "Cable Machines", "Medicine Balls", "Yoga Mats", "Resistance Bands", "Battle Ropes", "BOSU Balls", "Stretching Stations"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor", "Aqua Fitness Instructor"],
    amenities: ["Towel Service", "Fitness Consultations", "Protein Shakes", "Audio/Visual Entertainment", "Toiletries", "Water Stations", "Hair Dryers", "Personal Training Sessions", "Equipment Orientation", "Fitness Tracking", "Fresh Fruit Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    id: "0700a08e-f8a8-4f78-a6e2-508684dd900d",
    vesselId: "ly--gale",
    name: "LY  Gale Fitness Center",
    description: "LY  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Los Angeles. Our facility features pool area, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-806-493-4873",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Stationary Bikes", "Treadmills", "StairMaster", "Rowing Machines", "Recumbent Bikes", "Arc Trainers", "Weight Machines", "Free Weights", "Barbells", "Dumbbells", "Cable Machines", "Power Rack", "Bench Press", "Leg Press Machine", "Shoulder Press Machine", "Battle Ropes", "Yoga Mats", "Agility Ladders", "Balance Boards", "BOSU Balls", "Medicine Balls", "Resistance Bands", "Massage Chairs"],
    personalTrainers: ["Spinning Instructor", "Yoga Instructor", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Body Composition Analysis", "Hair Dryers", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Personal Training Sessions", "Equipment Orientation", "Fitness Consultations", "Group Fitness Classes", "Toiletries", "Workout Programs", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  }
];
