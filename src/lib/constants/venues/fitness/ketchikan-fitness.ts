// Fitness center venues data for Ketchikan
// This file contains fitness center and wellness facility information for cruise vessels operating from Ketchikan
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const ketchikanFitnessCenters: FitnessCenter[] = [
  {
    id: "305dfc8e-c140-4838-b58f-95cf439ba3c3",
    vesselId: "fv--explorer",
    name: "FV  Explorer Fitness Center",
    description: "FV  Explorer Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-869-646-3908",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "StairMaster", "Rowing Machines", "Air Bikes", "Arc Trainers", "Recumbent Bikes", "Stationary Bikes", "Treadmills", "Elliptical Machines", "Weight Machines", "Leg Curl Machine", "Bench Press", "Free Weights", "Dumbbells", "Leg Press Machine", "Pull-up Station", "Barbells", "Power Rack", "Kettlebells", "Medicine Balls", "Balance Boards", "Battle Ropes", "BOSU Balls", "Recovery Tools", "Stretching Stations", "Infrared Sauna"],
    personalTrainers: ["Strength Training Specialist", "Pilates Instructor"],
    amenities: ["Fitness Consultations", "Workout Programs", "Fresh Fruit Bar", "Fitness Tracking", "Toiletries", "Equipment Orientation", "Protein Shakes", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "e2534aa3-5c80-4788-a213-ae7d24179e98",
    vesselId: "ss-ketchikan-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-377-972-9952",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Arc Trainers", "Rowing Machines", "Elliptical Machines", "Air Bikes", "VersaClimber", "Treadmills", "Recumbent Bikes", "Bench Press", "Weight Machines", "Barbells", "Smith Machine", "Leg Curl Machine", "Shoulder Press Machine", "Power Rack", "Cable Machines", "Agility Ladders", "Resistance Bands", "Stability Balls", "Kettlebells", "Foam Rollers", "Yoga Mats", "BOSU Balls", "Recovery Tools", "Stretching Stations", "Barre Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Equipment Orientation", "Towel Service", "Water Stations", "Hair Dryers", "Personal Training Sessions", "Toiletries", "Fitness Tracking", "Audio/Visual Entertainment", "Group Fitness Classes"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "5ad86d8e-fd80-462a-b0c7-5cbfd6a73ab8",
    vesselId: "nb--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the NB  of the Deep. Stay active and healthy while cruising the waters near Ketchikan with our state-of-the-art fitness facilities. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-609-601-5296",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "StairMaster", "VersaClimber", "Stationary Bikes", "Elliptical Machines", "Arc Trainers", "Free Weights", "Smith Machine", "Leg Curl Machine", "Dumbbells", "Barbells", "Pull-up Station", "Cable Machines", "Lat Pulldown", "Bench Press", "Shoulder Press Machine", "Foam Rollers", "TRX Suspension Trainers", "Balance Boards", "Battle Ropes", "Plyo Boxes", "Medicine Balls", "Agility Ladders", "BOSU Balls", "Pilates Reformers", "Barre Equipment", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Workout Programs", "Towel Service", "Water Stations", "Audio/Visual Entertainment", "Group Fitness Classes", "Fitness Consultations", "Personal Training Sessions", "Equipment Orientation", "Protein Shakes", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "b19d4dd5-2768-40fc-9e69-855e1ccc063c",
    vesselId: "ms-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Ketchikan. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-241-906-1951",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Elliptical Machines", "Treadmills", "VersaClimber", "Air Bikes", "Arc Trainers", "Rowing Machines", "Recumbent Bikes", "Leg Press Machine", "Shoulder Press Machine", "Power Rack", "Smith Machine", "Free Weights", "Dumbbells", "Barbells", "Weight Machines", "Pull-up Station", "Foam Rollers", "BOSU Balls", "Battle Ropes", "Balance Boards", "Kettlebells", "Yoga Mats", "Stretching Stations", "Compression Therapy", "Massage Chairs"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Equipment Orientation", "Workout Programs", "Towel Service", "Water Stations", "Hair Dryers", "Fresh Fruit Bar", "Personal Training Sessions", "Fitness Consultations", "Group Fitness Classes", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "eae3e138-b3de-4dc9-b4ce-c0016ba93ba9",
    vesselId: "rv--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-979-546-3709",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Spin Bikes", "Rowing Machines", "Stationary Bikes", "Air Bikes", "Recumbent Bikes", "Elliptical Machines", "Treadmills", "Free Weights", "Leg Press Machine", "Lat Pulldown", "Smith Machine", "Shoulder Press Machine", "Dumbbells", "Leg Curl Machine", "Pull-up Station", "Kettlebells", "Stability Balls", "Balance Boards", "Yoga Mats", "Medicine Balls", "Battle Ropes", "TRX Suspension Trainers", "Foam Rollers", "Massage Chairs", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Toiletries", "Hair Dryers", "Locker Rentals", "Fitness Consultations", "Personal Training Sessions", "Fresh Fruit Bar", "Body Composition Analysis", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
  }
];
