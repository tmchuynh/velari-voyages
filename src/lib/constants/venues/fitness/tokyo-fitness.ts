// Fitness center venues data for Tokyo
// This file contains fitness center and wellness facility information for cruise vessels operating from Tokyo
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const tokyoFitnessCenters: FitnessCenter[] = [
  {
    id: "31796538-b1bf-45dc-b434-11aa280202c6",
    vesselId: "hms--explorer",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-633-616-3954",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Air Bikes", "Recumbent Bikes", "StairMaster", "VersaClimber", "Stationary Bikes", "Free Weights", "Lat Pulldown", "Cable Machines", "Power Rack", "Pull-up Station", "Bench Press", "Leg Curl Machine", "Shoulder Press Machine", "Dumbbells", "Medicine Balls", "Kettlebells", "Agility Ladders", "Resistance Bands", "TRX Suspension Trainers", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Equipment Orientation", "Towel Service", "Fitness Tracking", "Locker Rentals", "Toiletries", "Protein Shakes", "Water Stations", "Body Composition Analysis", "Fresh Fruit Bar", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "e1955195-508e-421e-b05b-8c3e3aa47104",
    vesselId: "cs-tokyo-voyager",
    name: "CS Tokyo Voyager Fitness Center",
    description: "Welcome to CS Tokyo Voyager Fitness Center, your premier wellness destination aboard the CS Tokyo Voyager. Stay active and healthy while cruising the waters near Tokyo with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-667-516-1900",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Recumbent Bikes", "VersaClimber", "Spin Bikes", "Stationary Bikes", "Elliptical Machines", "Treadmills", "StairMaster", "Arc Trainers", "Weight Machines", "Shoulder Press Machine", "Cable Machines", "Leg Press Machine", "Free Weights", "Leg Curl Machine", "Dumbbells", "Bench Press", "Pull-up Station", "Resistance Bands", "Kettlebells", "BOSU Balls", "Balance Boards", "Yoga Mats", "Cryotherapy Chamber", "Massage Chairs"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Workout Programs", "Water Stations", "Body Composition Analysis", "Personal Training Sessions", "Locker Rentals", "Fitness Tracking", "Audio/Visual Entertainment"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "1aa0dd46-b78c-4d80-a1ee-05e9bb42357a",
    vesselId: "ts--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-868-491-2319",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "Spin Bikes", "Recumbent Bikes", "Arc Trainers", "Treadmills", "Air Bikes", "Stationary Bikes", "VersaClimber", "StairMaster", "Lat Pulldown", "Free Weights", "Shoulder Press Machine", "Dumbbells", "Weight Machines", "Barbells", "Cable Machines", "Pull-up Station", "Kettlebells", "Resistance Bands", "Medicine Balls", "Battle Ropes", "BOSU Balls", "Agility Ladders", "Stability Balls", "Yoga Mats", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Workout Programs", "Body Composition Analysis", "Fresh Fruit Bar", "Towel Service", "Water Stations", "Personal Training Sessions", "Toiletries", "Hair Dryers", "Fitness Consultations", "Group Fitness Classes"],
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
    hasFitnessAssessments: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "754c1315-1875-4506-8090-eaa49e8c49d8",
    vesselId: "sy-the--mariner",
    name: "Tokyo Fitness Center",
    description: "Tokyo Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tokyo. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-772-242-6400",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "StairMaster", "Arc Trainers", "Treadmills", "Rowing Machines", "Air Bikes", "Recumbent Bikes", "Spin Bikes", "VersaClimber", "Bench Press", "Leg Press Machine", "Dumbbells", "Power Rack", "Pull-up Station", "Leg Curl Machine", "Weight Machines", "Barbells", "Foam Rollers", "Kettlebells", "Stability Balls", "Medicine Balls", "Resistance Bands", "Agility Ladders", "Battle Ropes", "Yoga Mats", "Recovery Tools", "Compression Therapy", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Workout Programs", "Towel Service", "Water Stations", "Equipment Orientation", "Personal Training Sessions", "Locker Rentals", "Toiletries", "Group Fitness Classes", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "8caabeaa-2d85-4d35-8d97-92e8c79d2a41",
    vesselId: "hms--gale",
    name: "Tokyo Fitness Center",
    description: "Tokyo Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tokyo. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-270-237-8905",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "Air Bikes", "VersaClimber", "Arc Trainers", "Elliptical Machines", "Rowing Machines", "Spin Bikes", "Smith Machine", "Shoulder Press Machine", "Free Weights", "Bench Press", "Pull-up Station", "Leg Curl Machine", "Lat Pulldown", "Weight Machines", "Power Rack", "Dumbbells", "Leg Press Machine", "Cable Machines", "Kettlebells", "Resistance Bands", "Foam Rollers", "BOSU Balls", "Plyo Boxes", "Medicine Balls", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Water Stations", "Fresh Fruit Bar", "Hair Dryers", "Group Fitness Classes", "Protein Shakes", "Toiletries", "Body Composition Analysis", "Locker Rentals", "Workout Programs", "Equipment Orientation", "Audio/Visual Entertainment", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  }
];
