// Fitness center venues data for Malta
// This file contains fitness center and wellness facility information for cruise vessels operating from Malta
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const maltaFitnessCenters: FitnessCenter[] = [
  {
    id: "5d2941c2-cbfd-4a60-92ee-92d4b4519242",
    vesselId: "rv--explorer",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-934-548-4137",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Spin Bikes", "Air Bikes", "Recumbent Bikes", "Stationary Bikes", "Arc Trainers", "StairMaster", "Elliptical Machines", "Treadmills", "VersaClimber", "Lat Pulldown", "Shoulder Press Machine", "Smith Machine", "Barbells", "Bench Press", "Leg Press Machine", "Leg Curl Machine", "Weight Machines", "Power Rack", "Dumbbells", "Cable Machines", "Free Weights", "Foam Rollers", "Medicine Balls", "Plyo Boxes", "Balance Boards", "BOSU Balls", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Body Composition Analysis", "Personal Training Sessions", "Audio/Visual Entertainment", "Fitness Tracking", "Water Stations", "Fitness Consultations", "Hair Dryers", "Fresh Fruit Bar", "Towel Service", "Equipment Orientation", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "4746503a-8ed8-4dd6-be2e-8af3b9143be9",
    vesselId: "nb-malta-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Malta. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-636-135-9539",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Spin Bikes", "Air Bikes", "Treadmills", "VersaClimber", "Elliptical Machines", "StairMaster", "Rowing Machines", "Weight Machines", "Power Rack", "Leg Curl Machine", "Free Weights", "Bench Press", "Shoulder Press Machine", "Lat Pulldown", "Smith Machine", "Pull-up Station", "Yoga Mats", "Stability Balls", "Battle Ropes", "Kettlebells", "Balance Boards", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor", "Pilates Instructor"],
    amenities: ["Workout Programs", "Locker Rentals", "Body Composition Analysis", "Toiletries", "Personal Training Sessions", "Group Fitness Classes", "Hair Dryers", "Audio/Visual Entertainment", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
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
    isPopular: true
  },
  {
    id: "8c6fd142-527a-4048-8678-519e3a6c0d2c",
    vesselId: "fv--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-571-440-7227",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "Arc Trainers", "Stationary Bikes", "Treadmills", "Air Bikes", "Power Rack", "Cable Machines", "Lat Pulldown", "Pull-up Station", "Free Weights", "Bench Press", "Barbells", "Weight Machines", "Medicine Balls", "Foam Rollers", "Plyo Boxes", "Yoga Mats", "Kettlebells", "Agility Ladders", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist", "Senior Fitness Specialist", "Spinning Instructor"],
    amenities: ["Fresh Fruit Bar", "Towel Service", "Audio/Visual Entertainment", "Body Composition Analysis", "Water Stations", "Protein Shakes", "Equipment Orientation", "Fitness Consultations", "Fitness Tracking", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "b4dbde84-f139-49f4-8f05-48a2156a8982",
    vesselId: "ly-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-572-601-1077",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Air Bikes", "Spin Bikes", "Elliptical Machines", "Arc Trainers", "Treadmills", "Recumbent Bikes", "StairMaster", "Cable Machines", "Bench Press", "Lat Pulldown", "Power Rack", "Leg Curl Machine", "Weight Machines", "Smith Machine", "Barbells", "Pull-up Station", "Dumbbells", "Shoulder Press Machine", "Yoga Mats", "Foam Rollers", "TRX Suspension Trainers", "Plyo Boxes", "BOSU Balls", "Balance Boards", "Battle Ropes", "Medicine Balls", "Barre Equipment"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor", "Pilates Instructor"],
    amenities: ["Equipment Orientation", "Hair Dryers", "Fresh Fruit Bar", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Fitness Consultations", "Audio/Visual Entertainment", "Fitness Tracking", "Towel Service", "Body Composition Analysis", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "22ce1e11-ac68-4578-8672-5cfb68f71370",
    vesselId: "rv--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-525-447-8055",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Recumbent Bikes", "Treadmills", "StairMaster", "Spin Bikes", "Arc Trainers", "VersaClimber", "Power Rack", "Bench Press", "Lat Pulldown", "Weight Machines", "Free Weights", "Dumbbells", "Smith Machine", "Barbells", "Cable Machines", "Plyo Boxes", "Stability Balls", "Agility Ladders", "Medicine Balls", "Balance Boards", "Foam Rollers", "Yoga Mats", "Battle Ropes", "Compression Therapy", "Massage Chairs", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor"],
    amenities: ["Fitness Tracking", "Locker Rentals", "Water Stations", "Toiletries", "Fresh Fruit Bar", "Body Composition Analysis", "Group Fitness Classes", "Audio/Visual Entertainment", "Protein Shakes", "Personal Training Sessions", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  }
];
