// Fitness center venues data for Amsterdam
// This file contains fitness center and wellness facility information for cruise vessels operating from Amsterdam
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const amsterdamFitnessCenters: FitnessCenter[] = [
  {
    id: "d061683e-7d73-49f4-8095-0bca82bafbba",
    vesselId: "rms--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-879-571-6127",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Elliptical Machines", "Treadmills", "Arc Trainers", "Air Bikes", "StairMaster", "Stationary Bikes", "Rowing Machines", "Free Weights", "Smith Machine", "Dumbbells", "Leg Curl Machine", "Leg Press Machine", "Shoulder Press Machine", "Bench Press", "Cable Machines", "Lat Pulldown", "Barbells", "Pull-up Station", "Weight Machines", "Plyo Boxes", "Kettlebells", "Medicine Balls", "Battle Ropes", "Foam Rollers", "Agility Ladders", "Stability Balls", "Infrared Sauna", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Group Fitness Instructor", "Senior Fitness Specialist", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Toiletries", "Body Composition Analysis", "Locker Rentals", "Group Fitness Classes", "Equipment Orientation", "Audio/Visual Entertainment", "Workout Programs", "Personal Training Sessions", "Fitness Tracking"],
    is24Hours: true,
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "26ad52f0-a4ed-498c-a8dd-a4c4118e1387",
    vesselId: "sv-amsterdam-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-863-282-3529",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Recumbent Bikes", "StairMaster", "Rowing Machines", "VersaClimber", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "Spin Bikes", "Weight Machines", "Power Rack", "Leg Press Machine", "Pull-up Station", "Smith Machine", "Free Weights", "Shoulder Press Machine", "Lat Pulldown", "Cable Machines", "Yoga Mats", "Stability Balls", "Kettlebells", "Medicine Balls", "Resistance Bands", "Battle Ropes", "Foam Rollers", "Compression Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Equipment Orientation", "Audio/Visual Entertainment", "Hair Dryers", "Protein Shakes", "Personal Training Sessions", "Water Stations", "Workout Programs", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "384b258c-4569-42f5-b692-b9c3bf6c5675",
    vesselId: "rv--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Amsterdam. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-603-856-3540",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Air Bikes", "VersaClimber", "Treadmills", "StairMaster", "Rowing Machines", "Spin Bikes", "Pull-up Station", "Shoulder Press Machine", "Barbells", "Smith Machine", "Leg Curl Machine", "Leg Press Machine", "Weight Machines", "Lat Pulldown", "Power Rack", "Cable Machines", "Bench Press", "Dumbbells", "Kettlebells", "Stability Balls", "Medicine Balls", "Plyo Boxes", "Yoga Mats", "Balance Boards", "Agility Ladders", "Stretching Stations", "Barre Equipment", "Massage Chairs"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Workout Programs", "Body Composition Analysis", "Group Fitness Classes", "Fitness Tracking", "Audio/Visual Entertainment", "Toiletries", "Equipment Orientation", "Personal Training Sessions", "Fitness Consultations", "Water Stations", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "6e3cca1e-e950-45be-86da-1100ef3e1815",
    vesselId: "ly-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-410-566-1568",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Air Bikes", "Recumbent Bikes", "Spin Bikes", "VersaClimber", "Treadmills", "Bench Press", "Shoulder Press Machine", "Free Weights", "Pull-up Station", "Lat Pulldown", "Dumbbells", "Leg Press Machine", "Leg Curl Machine", "Power Rack", "Barbells", "Kettlebells", "Balance Boards", "Foam Rollers", "Medicine Balls", "Agility Ladders", "Plyo Boxes", "Battle Ropes", "Cryotherapy Chamber", "Infrared Sauna"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Hair Dryers", "Towel Service", "Fresh Fruit Bar", "Water Stations", "Fitness Consultations", "Locker Rentals", "Body Composition Analysis", "Protein Shakes", "Personal Training Sessions", "Toiletries", "Equipment Orientation"],
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
    hasFitnessAssessments: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "f61cb224-4527-45da-8fa1-65a21228d4b8",
    vesselId: "fv--gale",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-904-202-1050",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Arc Trainers", "VersaClimber", "Air Bikes", "Spin Bikes", "Elliptical Machines", "StairMaster", "Treadmills", "Recumbent Bikes", "Weight Machines", "Barbells", "Lat Pulldown", "Leg Curl Machine", "Bench Press", "Leg Press Machine", "Cable Machines", "Smith Machine", "Power Rack", "Shoulder Press Machine", "Dumbbells", "TRX Suspension Trainers", "Kettlebells", "Yoga Mats", "Medicine Balls", "BOSU Balls", "Massage Chairs"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Fitness Tracking", "Hair Dryers", "Body Composition Analysis", "Equipment Orientation", "Locker Rentals", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Group Fitness Classes", "Water Stations", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  }
];
