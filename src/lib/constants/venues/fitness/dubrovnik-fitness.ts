// Fitness center venues data for Dubrovnik
// This file contains fitness center and wellness facility information for cruise vessels operating from Dubrovnik
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const dubrovnikFitnessCenters: FitnessCenter[] = [
  {
    id: "74bfdd5c-7bfe-4bd1-b681-ae517aeb83a3",
    vesselId: "sy--explorer",
    name: "SY  Explorer Fitness Center",
    description: "SY  Explorer Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-375-330-2493",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "Treadmills", "Elliptical Machines", "Recumbent Bikes", "Arc Trainers", "Stationary Bikes", "StairMaster", "Spin Bikes", "Pull-up Station", "Power Rack", "Smith Machine", "Cable Machines", "Weight Machines", "Barbells", "Bench Press", "Leg Press Machine", "Leg Curl Machine", "Kettlebells", "Agility Ladders", "Yoga Mats", "Foam Rollers", "Plyo Boxes", "Stability Balls", "Medicine Balls", "BOSU Balls", "Barre Equipment", "Recovery Tools", "Compression Therapy"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer"],
    amenities: ["Protein Shakes", "Towel Service", "Personal Training Sessions", "Fitness Tracking", "Body Composition Analysis", "Workout Programs", "Fresh Fruit Bar", "Toiletries", "Water Stations", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
  },
  {
    id: "1b0d336c-8b7e-4314-9b68-00c47ec73211",
    vesselId: "sv-dubrovnik-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-798-515-1628",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Stationary Bikes", "Treadmills", "StairMaster", "Rowing Machines", "Arc Trainers", "Elliptical Machines", "Recumbent Bikes", "Leg Curl Machine", "Bench Press", "Dumbbells", "Leg Press Machine", "Free Weights", "Pull-up Station", "Shoulder Press Machine", "Barbells", "Smith Machine", "Power Rack", "Kettlebells", "Battle Ropes", "Yoga Mats", "Balance Boards", "Medicine Balls", "Massage Chairs"],
    personalTrainers: ["Yoga Instructor", "Aqua Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Group Fitness Classes", "Toiletries", "Workout Programs", "Protein Shakes", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "90d1ed2d-1af8-413d-ac72-672665e9d695",
    vesselId: "rv--of-the-deep",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-528-455-5652",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Recumbent Bikes", "Treadmills", "Spin Bikes", "StairMaster", "Air Bikes", "Elliptical Machines", "Rowing Machines", "Stationary Bikes", "VersaClimber", "Dumbbells", "Leg Press Machine", "Free Weights", "Bench Press", "Lat Pulldown", "Smith Machine", "Power Rack", "Shoulder Press Machine", "Leg Curl Machine", "Barbells", "Foam Rollers", "Balance Boards", "Stability Balls", "Yoga Mats", "Resistance Bands", "Cryotherapy Chamber", "Recovery Tools", "Infrared Sauna", "Stretching Stations"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Locker Rentals", "Fresh Fruit Bar", "Body Composition Analysis", "Hair Dryers", "Toiletries", "Equipment Orientation", "Fitness Consultations", "Personal Training Sessions", "Towel Service", "Group Fitness Classes", "Workout Programs", "Protein Shakes", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
    id: "0e4e9d21-e857-43d6-b9c6-ad296094130c",
    vesselId: "mv-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Dubrovnik. Our facility features dedicated yoga studio, sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-292-855-7751",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Treadmills", "Arc Trainers", "Rowing Machines", "Spin Bikes", "Stationary Bikes", "StairMaster", "Air Bikes", "Weight Machines", "Dumbbells", "Smith Machine", "Pull-up Station", "Shoulder Press Machine", "Lat Pulldown", "Leg Curl Machine", "Cable Machines", "Bench Press", "Leg Press Machine", "Free Weights", "Balance Boards", "Stability Balls", "Kettlebells", "Agility Ladders", "Foam Rollers", "TRX Suspension Trainers", "Massage Chairs", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Group Fitness Classes", "Equipment Orientation", "Audio/Visual Entertainment", "Workout Programs", "Fitness Tracking", "Locker Rentals", "Hair Dryers", "Towel Service", "Body Composition Analysis", "Protein Shakes", "Water Stations", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
    id: "c1394002-df77-4b54-b777-105133b1d97e",
    vesselId: "ts--gale",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-218-229-1448",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Elliptical Machines", "Spin Bikes", "StairMaster", "VersaClimber", "Treadmills", "Arc Trainers", "Rowing Machines", "Stationary Bikes", "Weight Machines", "Barbells", "Smith Machine", "Shoulder Press Machine", "Lat Pulldown", "Power Rack", "Dumbbells", "Bench Press", "Cable Machines", "Free Weights", "TRX Suspension Trainers", "BOSU Balls", "Stability Balls", "Balance Boards", "Kettlebells", "Foam Rollers", "Plyo Boxes", "Recovery Tools", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Workout Programs", "Equipment Orientation", "Fitness Consultations", "Body Composition Analysis", "Group Fitness Classes", "Locker Rentals", "Fresh Fruit Bar", "Fitness Tracking", "Audio/Visual Entertainment"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
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
      }
    ],
    isPopular: false
  }
];
