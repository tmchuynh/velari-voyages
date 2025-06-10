// Fitness center venues data for Sydney
// This file contains fitness center and wellness facility information for cruise vessels operating from Sydney
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const sydneyFitnessCenters: FitnessCenter[] = [
  {
    id: "3082d6bc-44fe-4dd4-a6b0-419c252ae366",
    vesselId: "my--explorer",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-341-407-2973",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Spin Bikes", "Stationary Bikes", "Air Bikes", "Elliptical Machines", "Recumbent Bikes", "Leg Curl Machine", "Smith Machine", "Bench Press", "Pull-up Station", "Power Rack", "Free Weights", "Lat Pulldown", "Leg Press Machine", "Shoulder Press Machine", "Weight Machines", "Resistance Bands", "Battle Ropes", "Plyo Boxes", "Medicine Balls", "Kettlebells", "Stability Balls", "Agility Ladders", "Foam Rollers", "Infrared Sauna", "Massage Chairs"],
    personalTrainers: ["Corrective Exercise Specialist", "Pilates Instructor", "Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Fitness Tracking", "Body Composition Analysis", "Toiletries", "Protein Shakes", "Personal Training Sessions", "Locker Rentals", "Towel Service", "Fitness Consultations", "Audio/Visual Entertainment", "Water Stations", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "91390b44-2377-4fa6-b22d-56c486078bce",
    vesselId: "fv-sydney-voyager",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the FV Sydney Voyager. Stay active and healthy while cruising the waters near Sydney with our state-of-the-art fitness facilities. Our facility features sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-364-761-6803",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Air Bikes", "Elliptical Machines", "VersaClimber", "Arc Trainers", "Treadmills", "Recumbent Bikes", "Free Weights", "Weight Machines", "Cable Machines", "Shoulder Press Machine", "Lat Pulldown", "Power Rack", "Leg Press Machine", "Bench Press", "Foam Rollers", "Balance Boards", "Plyo Boxes", "Battle Ropes", "Yoga Mats", "Agility Ladders", "Massage Chairs", "Stretching Stations", "Cryotherapy Chamber", "Infrared Sauna"],
    personalTrainers: ["Corrective Exercise Specialist", "Aqua Fitness Instructor", "Spinning Instructor"],
    amenities: ["Toiletries", "Hair Dryers", "Equipment Orientation", "Audio/Visual Entertainment", "Protein Shakes", "Locker Rentals", "Body Composition Analysis", "Fitness Consultations", "Workout Programs", "Fitness Tracking", "Group Fitness Classes", "Towel Service"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "35a7de5b-4e19-40f0-9392-8cf15da7fa1f",
    vesselId: "hms--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-280-686-3841",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Air Bikes", "StairMaster", "Stationary Bikes", "Elliptical Machines", "Spin Bikes", "Arc Trainers", "Recumbent Bikes", "Treadmills", "VersaClimber", "Smith Machine", "Leg Press Machine", "Cable Machines", "Pull-up Station", "Lat Pulldown", "Bench Press", "Leg Curl Machine", "Weight Machines", "Yoga Mats", "Balance Boards", "Stability Balls", "Kettlebells", "Medicine Balls", "Plyo Boxes", "Recovery Tools", "Cryotherapy Chamber", "Barre Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Locker Rentals", "Protein Shakes", "Toiletries", "Audio/Visual Entertainment", "Equipment Orientation", "Workout Programs", "Fresh Fruit Bar", "Personal Training Sessions", "Fitness Tracking", "Water Stations"],
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
    id: "2966fae4-c8fd-4cde-9138-82d66a5d0db0",
    vesselId: "nx-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-638-106-5120",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "VersaClimber", "Spin Bikes", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "Recumbent Bikes", "Power Rack", "Bench Press", "Cable Machines", "Weight Machines", "Leg Curl Machine", "Smith Machine", "Dumbbells", "Barbells", "Agility Ladders", "TRX Suspension Trainers", "Stability Balls", "Battle Ropes", "Resistance Bands", "Stretching Stations"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Spinning Instructor", "Certified Personal Trainer"],
    amenities: ["Fresh Fruit Bar", "Group Fitness Classes", "Protein Shakes", "Hair Dryers", "Water Stations", "Personal Training Sessions", "Audio/Visual Entertainment", "Fitness Tracking", "Towel Service"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "ff9f928b-a6bd-4279-aaec-e9f9a5e56fe5",
    vesselId: "cs--gale",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-306-889-2418",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "StairMaster", "Recumbent Bikes", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "VersaClimber", "Air Bikes", "Leg Curl Machine", "Bench Press", "Weight Machines", "Shoulder Press Machine", "Barbells", "Dumbbells", "Cable Machines", "Free Weights", "Lat Pulldown", "Smith Machine", "Power Rack", "Leg Press Machine", "Yoga Mats", "Battle Ropes", "Stability Balls", "Foam Rollers", "Medicine Balls", "BOSU Balls", "Resistance Bands", "TRX Suspension Trainers", "Pilates Reformers", "Stretching Stations"],
    personalTrainers: ["Corrective Exercise Specialist", "Spinning Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Equipment Orientation", "Body Composition Analysis", "Towel Service", "Hair Dryers", "Fitness Tracking", "Water Stations", "Fresh Fruit Bar", "Workout Programs", "Personal Training Sessions", "Protein Shakes", "Toiletries"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  }
];
