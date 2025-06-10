// Fitness center venues data for San Juan
// This file contains fitness center and wellness facility information for cruise vessels operating from San Juan
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const sanJuanFitnessCenters: FitnessCenter[] = [
  {
    id: "12022793-9573-4959-9eac-223fc2a51f5e",
    vesselId: "ly--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-512-954-5047",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Air Bikes", "VersaClimber", "Rowing Machines", "Spin Bikes", "StairMaster", "Elliptical Machines", "Bench Press", "Lat Pulldown", "Free Weights", "Dumbbells", "Pull-up Station", "Leg Curl Machine", "Weight Machines", "Barbells", "Leg Press Machine", "Shoulder Press Machine", "Cable Machines", "Power Rack", "Battle Ropes", "Foam Rollers", "Agility Ladders", "Resistance Bands", "Yoga Mats", "Cryotherapy Chamber", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist", "Fitness Nutrition Specialist", "Pilates Instructor"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Water Stations", "Body Composition Analysis", "Fitness Tracking", "Hair Dryers", "Toiletries", "Fitness Consultations", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
    isPopular: false
  },
  {
    id: "0fd67fd3-748a-4d12-877b-6017d9c00dad",
    vesselId: "rv-san-juan-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around San Juan. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-366-523-7923",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Treadmills", "Arc Trainers", "VersaClimber", "Recumbent Bikes", "Spin Bikes", "Cable Machines", "Lat Pulldown", "Weight Machines", "Barbells", "Dumbbells", "Free Weights", "Pull-up Station", "Leg Curl Machine", "Smith Machine", "Bench Press", "Leg Press Machine", "Battle Ropes", "Balance Boards", "Agility Ladders", "Kettlebells", "Foam Rollers", "TRX Suspension Trainers", "Resistance Bands", "Yoga Mats", "Pilates Reformers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Equipment Orientation", "Protein Shakes", "Fitness Consultations", "Workout Programs", "Fitness Tracking", "Locker Rentals", "Towel Service", "Water Stations", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
  },
  {
    id: "7722ce5f-4d78-480d-a2c5-8f25de279acd",
    vesselId: "my--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-655-150-3239",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Arc Trainers", "VersaClimber", "Treadmills", "Recumbent Bikes", "Air Bikes", "Spin Bikes", "StairMaster", "Rowing Machines", "Smith Machine", "Bench Press", "Lat Pulldown", "Weight Machines", "Power Rack", "Leg Curl Machine", "Pull-up Station", "Free Weights", "Cable Machines", "Barbells", "Dumbbells", "Yoga Mats", "Plyo Boxes", "Kettlebells", "BOSU Balls", "Foam Rollers", "Balance Boards", "Agility Ladders", "Infrared Sauna", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Strength Training Specialist", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Audio/Visual Entertainment", "Locker Rentals", "Hair Dryers", "Towel Service", "Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions", "Equipment Orientation", "Fitness Consultations", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
    isPopular: false
  },
  {
    id: "e93e760a-14f2-491e-a25d-1f8cc5fe3373",
    vesselId: "rms-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-793-146-4182",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "StairMaster", "VersaClimber", "Arc Trainers", "Recumbent Bikes", "Stationary Bikes", "Air Bikes", "Elliptical Machines", "Treadmills", "Spin Bikes", "Lat Pulldown", "Free Weights", "Weight Machines", "Smith Machine", "Bench Press", "Pull-up Station", "Leg Press Machine", "Barbells", "Cable Machines", "BOSU Balls", "TRX Suspension Trainers", "Foam Rollers", "Medicine Balls", "Yoga Mats", "Plyo Boxes", "Agility Ladders", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Personal Training Sessions", "Protein Shakes", "Fitness Tracking", "Water Stations", "Locker Rentals", "Group Fitness Classes", "Body Composition Analysis", "Hair Dryers", "Audio/Visual Entertainment", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "c5321a69-95ea-4a62-a7a4-4d641b606179",
    vesselId: "ps--gale",
    name: "PS  Gale Fitness Center",
    description: "PS  Gale Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-964-348-5757",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Elliptical Machines", "VersaClimber", "Air Bikes", "StairMaster", "Recumbent Bikes", "Spin Bikes", "Bench Press", "Leg Curl Machine", "Power Rack", "Lat Pulldown", "Smith Machine", "Cable Machines", "Pull-up Station", "Weight Machines", "Barbells", "Dumbbells", "Kettlebells", "TRX Suspension Trainers", "Stability Balls", "Balance Boards", "Medicine Balls", "Resistance Bands", "Yoga Mats", "Pilates Reformers", "Barre Equipment", "Compression Therapy", "Stretching Stations", "Infrared Sauna"],
    personalTrainers: ["Fitness Nutrition Specialist", "Yoga Instructor", "Spinning Instructor"],
    amenities: ["Protein Shakes", "Body Composition Analysis", "Audio/Visual Entertainment", "Group Fitness Classes", "Toiletries", "Water Stations", "Locker Rentals", "Fitness Tracking", "Towel Service", "Hair Dryers", "Fresh Fruit Bar", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    isPopular: true
  }
];
