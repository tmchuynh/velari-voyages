// Fitness center venues data for Kiel
// This file contains fitness center and wellness facility information for cruise vessels operating from Kiel
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const kielFitnessCenters: FitnessCenter[] = [
  {
    id: "c201e523-12e9-428a-a387-ccaadc23de39",
    vesselId: "nb--explorer",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the NB  Explorer. Stay active and healthy while cruising the waters near Kiel with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-687-904-2118",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "StairMaster", "Air Bikes", "Recumbent Bikes", "Rowing Machines", "Elliptical Machines", "VersaClimber", "Spin Bikes", "Treadmills", "Weight Machines", "Lat Pulldown", "Bench Press", "Smith Machine", "Dumbbells", "Leg Curl Machine", "Barbells", "Power Rack", "Pull-up Station", "Agility Ladders", "Balance Boards", "Plyo Boxes", "Kettlebells", "Battle Ropes", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor"],
    amenities: ["Fresh Fruit Bar", "Workout Programs", "Group Fitness Classes", "Water Stations", "Toiletries", "Hair Dryers", "Towel Service", "Personal Training Sessions", "Fitness Tracking", "Locker Rentals", "Body Composition Analysis", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    isPopular: false
  },
  {
    id: "e992fef4-5875-454f-a407-d65362a7b00a",
    vesselId: "nb-kiel-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-821-476-1760",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "Spin Bikes", "Treadmills", "Stationary Bikes", "VersaClimber", "StairMaster", "Air Bikes", "Leg Press Machine", "Pull-up Station", "Barbells", "Power Rack", "Smith Machine", "Dumbbells", "Weight Machines", "Cable Machines", "Bench Press", "Shoulder Press Machine", "Leg Curl Machine", "Free Weights", "Kettlebells", "Resistance Bands", "Yoga Mats", "Medicine Balls", "Battle Ropes", "TRX Suspension Trainers", "Foam Rollers", "Infrared Sauna", "Compression Therapy", "Massage Chairs", "Recovery Tools"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer", "Pilates Instructor", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Water Stations", "Equipment Orientation", "Fitness Tracking", "Protein Shakes", "Towel Service", "Body Composition Analysis", "Toiletries", "Workout Programs", "Locker Rentals", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "ae40dde7-a82e-493b-8178-5ad5a383738e",
    vesselId: "cs--of-the-deep",
    name: "CS  of the Deep Fitness Center",
    description: "Welcome to CS  of the Deep Fitness Center, your premier wellness destination aboard the CS  of the Deep. Stay active and healthy while cruising the waters near Kiel with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-614-530-6493",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Recumbent Bikes", "Spin Bikes", "VersaClimber", "Elliptical Machines", "Arc Trainers", "Air Bikes", "StairMaster", "Lat Pulldown", "Shoulder Press Machine", "Smith Machine", "Free Weights", "Power Rack", "Weight Machines", "Dumbbells", "Bench Press", "Cable Machines", "Leg Press Machine", "Resistance Bands", "TRX Suspension Trainers", "Balance Boards", "Yoga Mats", "Plyo Boxes", "Battle Ropes", "Foam Rollers", "Medicine Balls", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Workout Programs", "Hair Dryers", "Personal Training Sessions", "Water Stations", "Fresh Fruit Bar", "Toiletries", "Fitness Tracking", "Towel Service", "Group Fitness Classes", "Fitness Consultations", "Equipment Orientation", "Protein Shakes"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "19cc9d76-baaa-45f6-9c9c-588684f154a0",
    vesselId: "ss-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-903-929-9614",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "StairMaster", "Arc Trainers", "Air Bikes", "Spin Bikes", "VersaClimber", "Recumbent Bikes", "Bench Press", "Leg Curl Machine", "Dumbbells", "Cable Machines", "Shoulder Press Machine", "Smith Machine", "Leg Press Machine", "Power Rack", "Yoga Mats", "Plyo Boxes", "Foam Rollers", "Stability Balls", "BOSU Balls", "Agility Ladders", "Balance Boards", "Pilates Reformers", "Massage Chairs", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Group Fitness Instructor"],
    amenities: ["Toiletries", "Body Composition Analysis", "Group Fitness Classes", "Towel Service", "Water Stations", "Hair Dryers", "Equipment Orientation", "Fresh Fruit Bar", "Fitness Consultations", "Workout Programs", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "82aadd97-8a82-4b99-93c2-98c59b989554",
    vesselId: "rv--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Kiel. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-686-763-6381",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Spin Bikes", "Air Bikes", "Treadmills", "VersaClimber", "Elliptical Machines", "Stationary Bikes", "Arc Trainers", "StairMaster", "Cable Machines", "Leg Curl Machine", "Free Weights", "Dumbbells", "Shoulder Press Machine", "Leg Press Machine", "Power Rack", "Pull-up Station", "Smith Machine", "Weight Machines", "Bench Press", "Resistance Bands", "BOSU Balls", "Kettlebells", "Medicine Balls", "TRX Suspension Trainers", "Agility Ladders", "Foam Rollers", "Barre Equipment", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Fresh Fruit Bar", "Towel Service", "Body Composition Analysis", "Group Fitness Classes", "Audio/Visual Entertainment", "Water Stations", "Equipment Orientation", "Hair Dryers", "Fitness Tracking", "Personal Training Sessions", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
  }
];
