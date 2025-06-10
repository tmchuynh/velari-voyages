// Fitness center venues data for Oslo
// This file contains fitness center and wellness facility information for cruise vessels operating from Oslo
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const osloFitnessCenters: FitnessCenter[] = [
  {
    id: "1b26ec93-a5eb-4f11-879c-92d87a364f27",
    vesselId: "fv--explorer",
    name: "FV  Explorer Fitness Center",
    description: "FV  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Oslo. Our facility features sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-552-522-9394",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Air Bikes", "StairMaster", "Recumbent Bikes", "Rowing Machines", "VersaClimber", "Leg Curl Machine", "Power Rack", "Lat Pulldown", "Free Weights", "Leg Press Machine", "Bench Press", "Pull-up Station", "Shoulder Press Machine", "Barbells", "Smith Machine", "Dumbbells", "Battle Ropes", "Medicine Balls", "BOSU Balls", "TRX Suspension Trainers", "Resistance Bands", "Foam Rollers", "Massage Chairs", "Infrared Sauna", "Recovery Tools"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor", "Strength Training Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Water Stations", "Locker Rentals", "Toiletries", "Personal Training Sessions", "Equipment Orientation", "Fitness Tracking", "Workout Programs", "Protein Shakes", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "e729cb07-a88c-4975-9114-c915f828efce",
    vesselId: "ss-oslo-voyager",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-775-704-1069",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Elliptical Machines", "Recumbent Bikes", "Spin Bikes", "Treadmills", "VersaClimber", "Arc Trainers", "Free Weights", "Dumbbells", "Power Rack", "Barbells", "Pull-up Station", "Leg Curl Machine", "Lat Pulldown", "Shoulder Press Machine", "Bench Press", "Leg Press Machine", "Weight Machines", "Cable Machines", "Foam Rollers", "TRX Suspension Trainers", "Medicine Balls", "Agility Ladders", "Resistance Bands", "Recovery Tools", "Barre Equipment"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor", "Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Hair Dryers", "Water Stations", "Personal Training Sessions", "Body Composition Analysis", "Group Fitness Classes", "Protein Shakes", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "24653ae5-c636-45ba-bf22-f5a0f5fdf41a",
    vesselId: "hms--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the HMS  of the Deep. Stay active and healthy while cruising the waters near Oslo with our state-of-the-art fitness facilities. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-696-626-5927",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Spin Bikes", "StairMaster", "Air Bikes", "Elliptical Machines", "Recumbent Bikes", "Leg Press Machine", "Free Weights", "Lat Pulldown", "Bench Press", "Smith Machine", "Power Rack", "Weight Machines", "Dumbbells", "Shoulder Press Machine", "Pull-up Station", "Barbells", "Leg Curl Machine", "Battle Ropes", "Stability Balls", "Resistance Bands", "BOSU Balls", "Plyo Boxes", "Yoga Mats", "TRX Suspension Trainers", "Stretching Stations", "Compression Therapy"],
    personalTrainers: ["Yoga Instructor", "Senior Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Workout Programs", "Equipment Orientation", "Towel Service", "Water Stations", "Fresh Fruit Bar", "Fitness Consultations", "Hair Dryers", "Audio/Visual Entertainment", "Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "a3c12bc9-e6e7-4ac9-b3fc-374fa6d3676b",
    vesselId: "sv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-224-805-1186",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Treadmills", "Elliptical Machines", "Recumbent Bikes", "Arc Trainers", "StairMaster", "VersaClimber", "Bench Press", "Free Weights", "Weight Machines", "Leg Curl Machine", "Pull-up Station", "Cable Machines", "Lat Pulldown", "Shoulder Press Machine", "Dumbbells", "Leg Press Machine", "Barbells", "Smith Machine", "Foam Rollers", "TRX Suspension Trainers", "Yoga Mats", "Kettlebells", "Agility Ladders", "Resistance Bands", "Cryotherapy Chamber"],
    personalTrainers: ["Yoga Instructor", "Aqua Fitness Instructor"],
    amenities: ["Towel Service", "Audio/Visual Entertainment", "Group Fitness Classes", "Body Composition Analysis", "Water Stations", "Workout Programs", "Locker Rentals", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "f4b7d15f-cf04-45ae-8071-aecd80c4296d",
    vesselId: "mv--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Oslo. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-339-396-1662",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Rowing Machines", "StairMaster", "Treadmills", "Spin Bikes", "Stationary Bikes", "Arc Trainers", "Air Bikes", "Recumbent Bikes", "Bench Press", "Free Weights", "Lat Pulldown", "Power Rack", "Dumbbells", "Barbells", "Pull-up Station", "Cable Machines", "Weight Machines", "Shoulder Press Machine", "Kettlebells", "Resistance Bands", "BOSU Balls", "Agility Ladders", "Balance Boards", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Locker Rentals", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Toiletries", "Workout Programs", "Fitness Tracking", "Protein Shakes", "Fitness Consultations", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  }
];
