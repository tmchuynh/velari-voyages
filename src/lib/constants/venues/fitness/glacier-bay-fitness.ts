// Fitness center venues data for Glacier Bay
// This file contains fitness center and wellness facility information for cruise vessels operating from Glacier Bay
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const glacierBayFitnessCenters: FitnessCenter[] = [
  {
    id: "ed5eadfc-6b58-4f10-9ce0-000f76a99bbd",
    vesselId: "ly--explorer",
    name: "LY  Explorer Fitness Center",
    description: "Discover wellness at sea with LY  Explorer Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-450-969-5564",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Treadmills", "Arc Trainers", "Elliptical Machines", "VersaClimber", "StairMaster", "Stationary Bikes", "Rowing Machines", "Leg Press Machine", "Bench Press", "Power Rack", "Free Weights", "Dumbbells", "Lat Pulldown", "Barbells", "Cable Machines", "Weight Machines", "Smith Machine", "Pull-up Station", "Stability Balls", "Medicine Balls", "Agility Ladders", "Balance Boards", "Foam Rollers", "Yoga Mats", "Battle Ropes", "Plyo Boxes", "Pilates Reformers", "Barre Equipment", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Towel Service", "Audio/Visual Entertainment", "Equipment Orientation", "Fitness Tracking", "Body Composition Analysis", "Water Stations", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "7bcf1ce0-dd0d-44f7-8b3f-6bd235d7bb80",
    vesselId: "ms-glacier-bay-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Glacier Bay. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-413-906-6699",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Recumbent Bikes", "Rowing Machines", "Elliptical Machines", "Arc Trainers", "StairMaster", "Air Bikes", "VersaClimber", "Lat Pulldown", "Power Rack", "Leg Curl Machine", "Free Weights", "Pull-up Station", "Dumbbells", "Shoulder Press Machine", "Cable Machines", "Medicine Balls", "Stability Balls", "Foam Rollers", "TRX Suspension Trainers", "BOSU Balls", "Yoga Mats", "Stretching Stations", "Cryotherapy Chamber", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Equipment Orientation", "Towel Service", "Group Fitness Classes", "Fresh Fruit Bar", "Protein Shakes", "Workout Programs", "Water Stations", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "b7c17420-e47e-4880-ac78-6caeea1ce3e3",
    vesselId: "nb--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Glacier Bay. Our facility features sauna facilities.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-605-280-5654",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Elliptical Machines", "Arc Trainers", "VersaClimber", "Recumbent Bikes", "Stationary Bikes", "Rowing Machines", "Free Weights", "Dumbbells", "Smith Machine", "Barbells", "Weight Machines", "Pull-up Station", "Power Rack", "Leg Press Machine", "Kettlebells", "Resistance Bands", "Stability Balls", "Medicine Balls", "Yoga Mats", "Plyo Boxes", "Agility Ladders", "Balance Boards", "Barre Equipment", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist", "Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Hair Dryers", "Group Fitness Classes", "Audio/Visual Entertainment", "Equipment Orientation", "Protein Shakes", "Toiletries", "Body Composition Analysis", "Personal Training Sessions", "Fresh Fruit Bar", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "952b1207-f62b-4f21-8b9b-c57c0b903c82",
    vesselId: "fv-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the FV The  Mariner. Stay active and healthy while cruising the waters near Glacier Bay with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-979-459-6867",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "VersaClimber", "Arc Trainers", "Elliptical Machines", "Treadmills", "Spin Bikes", "Cable Machines", "Power Rack", "Lat Pulldown", "Leg Curl Machine", "Weight Machines", "Leg Press Machine", "Smith Machine", "Barbells", "Foam Rollers", "Kettlebells", "TRX Suspension Trainers", "Balance Boards", "Resistance Bands", "Battle Ropes", "Stability Balls", "Cryotherapy Chamber", "Stretching Stations", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Fresh Fruit Bar", "Equipment Orientation", "Toiletries", "Audio/Visual Entertainment", "Workout Programs", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "ca40459b-0ec3-424c-95f6-e1d973758750",
    vesselId: "ly--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Glacier Bay. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-322-240-9790",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "Rowing Machines", "VersaClimber", "Leg Press Machine", "Barbells", "Leg Curl Machine", "Weight Machines", "Bench Press", "Smith Machine", "Power Rack", "Cable Machines", "Pull-up Station", "Lat Pulldown", "Foam Rollers", "BOSU Balls", "Battle Ropes", "Agility Ladders", "Yoga Mats", "Kettlebells", "Medicine Balls", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor", "Aqua Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Fitness Tracking", "Hair Dryers", "Water Stations", "Equipment Orientation", "Toiletries", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  }
];
