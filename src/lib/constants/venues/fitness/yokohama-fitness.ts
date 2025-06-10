// Fitness center venues data for Yokohama
// This file contains fitness center and wellness facility information for cruise vessels operating from Yokohama
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const yokohamaFitnessCenters: FitnessCenter[] = [
  {
    id: "5cf86c10-5911-44f9-8db4-7aa222790682",
    vesselId: "hms--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Yokohama. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-327-189-7486",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Treadmills", "StairMaster", "Arc Trainers", "Rowing Machines", "Spin Bikes", "Air Bikes", "Recumbent Bikes", "Elliptical Machines", "VersaClimber", "Leg Press Machine", "Bench Press", "Smith Machine", "Cable Machines", "Weight Machines", "Pull-up Station", "Barbells", "Dumbbells", "Leg Curl Machine", "Foam Rollers", "TRX Suspension Trainers", "Plyo Boxes", "Medicine Balls", "Kettlebells", "Resistance Bands", "BOSU Balls", "Stretching Stations", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Toiletries", "Towel Service", "Equipment Orientation", "Water Stations", "Fitness Tracking", "Fresh Fruit Bar", "Fitness Consultations", "Body Composition Analysis", "Locker Rentals", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "7ebaa329-370b-4229-a3e0-2a14d6ca4b81",
    vesselId: "nb-yokohama-voyager",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the NB Yokohama Voyager. Stay active and healthy while cruising the waters near Yokohama with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-253-623-3230",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "StairMaster", "Rowing Machines", "Arc Trainers", "VersaClimber", "Stationary Bikes", "Barbells", "Cable Machines", "Weight Machines", "Free Weights", "Leg Press Machine", "Smith Machine", "Leg Curl Machine", "Pull-up Station", "Shoulder Press Machine", "Dumbbells", "Bench Press", "Resistance Bands", "Kettlebells", "Yoga Mats", "Medicine Balls", "TRX Suspension Trainers", "Balance Boards", "Stability Balls", "Agility Ladders", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Water Stations", "Personal Training Sessions", "Protein Shakes", "Fresh Fruit Bar", "Body Composition Analysis", "Audio/Visual Entertainment", "Towel Service", "Workout Programs", "Hair Dryers", "Toiletries", "Fitness Tracking", "Equipment Orientation"],
    is24Hours: true,
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
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
  },
  {
    id: "12e473f0-fcfc-4e44-8d5b-1ba2d0524681",
    vesselId: "cs--of-the-deep",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-472-264-4807",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Arc Trainers", "Elliptical Machines", "Spin Bikes", "Air Bikes", "Recumbent Bikes", "VersaClimber", "Treadmills", "Rowing Machines", "StairMaster", "Power Rack", "Weight Machines", "Barbells", "Shoulder Press Machine", "Dumbbells", "Free Weights", "Bench Press", "Lat Pulldown", "Cable Machines", "Leg Press Machine", "Smith Machine", "Pull-up Station", "Foam Rollers", "TRX Suspension Trainers", "Kettlebells", "Yoga Mats", "BOSU Balls", "Resistance Bands", "Balance Boards", "Medicine Balls", "Recovery Tools", "Massage Chairs", "Infrared Sauna"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Fresh Fruit Bar", "Water Stations", "Equipment Orientation", "Audio/Visual Entertainment", "Towel Service", "Hair Dryers", "Locker Rentals", "Protein Shakes", "Group Fitness Classes", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "3954a799-19f0-460d-94a8-8c3cd13b040e",
    vesselId: "rms-the--mariner",
    name: "RMS The  Mariner Fitness Center",
    description: "RMS The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-339-871-9814",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "Air Bikes", "Elliptical Machines", "Treadmills", "Stationary Bikes", "Rowing Machines", "Spin Bikes", "StairMaster", "Weight Machines", "Pull-up Station", "Lat Pulldown", "Leg Press Machine", "Cable Machines", "Shoulder Press Machine", "Dumbbells", "Smith Machine", "Power Rack", "Free Weights", "Bench Press", "Barbells", "Battle Ropes", "TRX Suspension Trainers", "Resistance Bands", "Stability Balls", "Yoga Mats", "Medicine Balls", "Recovery Tools", "Massage Chairs", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Locker Rentals", "Fresh Fruit Bar", "Water Stations", "Towel Service", "Toiletries", "Equipment Orientation", "Fitness Tracking", "Personal Training Sessions", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "555b50a1-c6ed-4eda-8beb-2a65ce90da45",
    vesselId: "fv--gale",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Yokohama. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-746-355-7803",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "VersaClimber", "Rowing Machines", "StairMaster", "Arc Trainers", "Air Bikes", "Spin Bikes", "Recumbent Bikes", "Shoulder Press Machine", "Pull-up Station", "Smith Machine", "Cable Machines", "Power Rack", "Weight Machines", "Barbells", "Dumbbells", "Medicine Balls", "Battle Ropes", "Balance Boards", "Agility Ladders", "Kettlebells", "TRX Suspension Trainers", "Plyo Boxes", "Recovery Tools"],
    personalTrainers: ["Spinning Instructor", "Fitness Nutrition Specialist", "Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Audio/Visual Entertainment", "Group Fitness Classes", "Fitness Consultations", "Body Composition Analysis", "Protein Shakes", "Locker Rentals", "Equipment Orientation", "Fitness Tracking", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  }
];
