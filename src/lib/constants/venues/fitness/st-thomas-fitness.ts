// Fitness center venues data for St Thomas
// This file contains fitness center and wellness facility information for cruise vessels operating from St Thomas
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const stThomasFitnessCenters: FitnessCenter[] = [
  {
    id: "baa38645-1a28-4866-8083-0d86b1e7d60f",
    vesselId: "mv--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-414-488-4307",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Elliptical Machines", "StairMaster", "Rowing Machines", "Recumbent Bikes", "Treadmills", "Stationary Bikes", "Air Bikes", "VersaClimber", "Pull-up Station", "Free Weights", "Shoulder Press Machine", "Leg Curl Machine", "Dumbbells", "Cable Machines", "Barbells", "Weight Machines", "Kettlebells", "TRX Suspension Trainers", "Plyo Boxes", "Resistance Bands", "Stability Balls", "Barre Equipment", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor"],
    amenities: ["Group Fitness Classes", "Fitness Tracking", "Personal Training Sessions", "Workout Programs", "Toiletries", "Fresh Fruit Bar", "Hair Dryers", "Protein Shakes", "Fitness Consultations", "Body Composition Analysis", "Audio/Visual Entertainment"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
  },
  {
    id: "5c7d1111-320f-4610-93c0-0e663682042d",
    vesselId: "sy-st-thomas-voyager",
    name: "St Thomas Fitness Center",
    description: "Welcome to St Thomas Fitness Center, your premier wellness destination aboard the SY St Thomas Voyager. Stay active and healthy while cruising the waters near St Thomas with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-727-764-4528",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "VersaClimber", "Treadmills", "StairMaster", "Rowing Machines", "Smith Machine", "Dumbbells", "Free Weights", "Bench Press", "Cable Machines", "Pull-up Station", "Power Rack", "Barbells", "Lat Pulldown", "Shoulder Press Machine", "Stability Balls", "Resistance Bands", "Battle Ropes", "Medicine Balls", "Yoga Mats", "Compression Therapy", "Recovery Tools"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer", "Corrective Exercise Specialist", "Senior Fitness Specialist"],
    amenities: ["Towel Service", "Locker Rentals", "Protein Shakes", "Workout Programs", "Toiletries", "Hair Dryers", "Water Stations", "Fitness Tracking", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "8f3fbe43-4302-4457-9d43-e261b770ef58",
    vesselId: "ts--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the TS  of the Deep. Stay active and healthy while cruising the waters near St Thomas with our state-of-the-art fitness facilities. Our facility features sauna facilities.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-773-657-7374",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Arc Trainers", "Stationary Bikes", "Rowing Machines", "Air Bikes", "Leg Curl Machine", "Free Weights", "Pull-up Station", "Dumbbells", "Power Rack", "Shoulder Press Machine", "Smith Machine", "Bench Press", "Barbells", "TRX Suspension Trainers", "Agility Ladders", "BOSU Balls", "Balance Boards", "Kettlebells", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Spinning Instructor"],
    amenities: ["Group Fitness Classes", "Body Composition Analysis", "Water Stations", "Hair Dryers", "Equipment Orientation", "Towel Service", "Workout Programs", "Protein Shakes", "Personal Training Sessions", "Fitness Consultations", "Fitness Tracking", "Fresh Fruit Bar"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "d63f3b1f-13e3-4bf0-8985-403569fe0c42",
    vesselId: "nb-the--mariner",
    name: "NB The  Mariner Fitness Center",
    description: "NB The  Mariner Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around St Thomas. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-514-945-1101",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Elliptical Machines", "Rowing Machines", "Air Bikes", "Spin Bikes", "Recumbent Bikes", "VersaClimber", "Stationary Bikes", "StairMaster", "Treadmills", "Power Rack", "Pull-up Station", "Free Weights", "Dumbbells", "Shoulder Press Machine", "Barbells", "Leg Curl Machine", "Cable Machines", "BOSU Balls", "Battle Ropes", "Plyo Boxes", "Balance Boards", "Medicine Balls", "Foam Rollers", "Massage Chairs", "Recovery Tools"],
    personalTrainers: ["Fitness Nutrition Specialist", "Group Fitness Instructor", "Yoga Instructor", "Pilates Instructor"],
    amenities: ["Water Stations", "Audio/Visual Entertainment", "Towel Service", "Equipment Orientation", "Toiletries", "Protein Shakes", "Workout Programs", "Fresh Fruit Bar", "Fitness Consultations", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "81fa13db-8fd9-4608-be7c-e2e5d03bdd4a",
    vesselId: "hms--gale",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-986-813-7616",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "VersaClimber", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "Recumbent Bikes", "Leg Press Machine", "Barbells", "Weight Machines", "Dumbbells", "Pull-up Station", "Smith Machine", "Free Weights", "Bench Press", "Balance Boards", "Kettlebells", "Medicine Balls", "Plyo Boxes", "Battle Ropes", "Resistance Bands", "TRX Suspension Trainers", "Stability Balls", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Towel Service", "Body Composition Analysis", "Toiletries", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Equipment Orientation", "Fitness Tracking", "Water Stations", "Personal Training Sessions"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    isPopular: true
  }
];
