// Fitness center venues data for Boston
// This file contains fitness center and wellness facility information for cruise vessels operating from Boston
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const bostonFitnessCenters: FitnessCenter[] = [
  {
    id: "dbcf04cc-2ddb-46a9-b8fe-86bf46683419",
    vesselId: "cs--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-697-272-4063",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Spin Bikes", "Air Bikes", "StairMaster", "Rowing Machines", "Stationary Bikes", "Recumbent Bikes", "Smith Machine", "Cable Machines", "Power Rack", "Weight Machines", "Pull-up Station", "Leg Curl Machine", "Barbells", "Lat Pulldown", "Dumbbells", "Battle Ropes", "Kettlebells", "Plyo Boxes", "Foam Rollers", "TRX Suspension Trainers", "Yoga Mats", "Agility Ladders", "Medicine Balls", "Pilates Reformers", "Barre Equipment", "Stretching Stations"],
    personalTrainers: ["Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Water Stations", "Workout Programs", "Towel Service", "Group Fitness Classes", "Audio/Visual Entertainment", "Toiletries", "Body Composition Analysis", "Protein Shakes"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "cce8c7d9-ee69-413f-b876-d314cfc6ed0d",
    vesselId: "my-boston-voyager",
    name: "MY Boston Voyager Fitness Center",
    description: "MY Boston Voyager Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Boston. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-442-501-2911",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Spin Bikes", "Elliptical Machines", "Recumbent Bikes", "Air Bikes", "Treadmills", "Smith Machine", "Cable Machines", "Leg Curl Machine", "Bench Press", "Power Rack", "Weight Machines", "Shoulder Press Machine", "Leg Press Machine", "Barbells", "Dumbbells", "Balance Boards", "Foam Rollers", "Battle Ropes", "TRX Suspension Trainers", "Resistance Bands", "Plyo Boxes", "Stability Balls", "Compression Therapy", "Pilates Reformers", "Cryotherapy Chamber", "Massage Chairs", "Infrared Sauna"],
    personalTrainers: ["Corrective Exercise Specialist", "Group Fitness Instructor", "Strength Training Specialist", "Pilates Instructor"],
    amenities: ["Equipment Orientation", "Water Stations", "Toiletries", "Towel Service", "Fitness Consultations", "Fresh Fruit Bar", "Hair Dryers", "Fitness Tracking", "Workout Programs", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "3805947b-8d62-4ffd-88d0-864ffc16e2b7",
    vesselId: "sv--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-301-777-8999",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Spin Bikes", "Recumbent Bikes", "Arc Trainers", "StairMaster", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Treadmills", "Cable Machines", "Barbells", "Pull-up Station", "Weight Machines", "Smith Machine", "Leg Curl Machine", "Lat Pulldown", "Bench Press", "Leg Press Machine", "Battle Ropes", "Kettlebells", "Foam Rollers", "Resistance Bands", "BOSU Balls", "Yoga Mats", "TRX Suspension Trainers", "Medicine Balls", "Pilates Reformers", "Barre Equipment", "Stretching Stations"],
    personalTrainers: ["Corrective Exercise Specialist", "Yoga Instructor", "Aqua Fitness Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Equipment Orientation", "Hair Dryers", "Toiletries", "Fresh Fruit Bar", "Body Composition Analysis", "Protein Shakes", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "cf4230da-0296-4ed7-9883-8e1163796833",
    vesselId: "sy-the--mariner",
    name: "SY The  Mariner Fitness Center",
    description: "Welcome to SY The  Mariner Fitness Center, your premier wellness destination aboard the SY The  Mariner. Stay active and healthy while cruising the waters near Boston with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-404-677-7466",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Arc Trainers", "StairMaster", "Air Bikes", "Recumbent Bikes", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Weight Machines", "Free Weights", "Shoulder Press Machine", "Power Rack", "Barbells", "Cable Machines", "Lat Pulldown", "Smith Machine", "BOSU Balls", "Battle Ropes", "Yoga Mats", "Medicine Balls", "Foam Rollers", "Resistance Bands", "Kettlebells", "Barre Equipment", "Recovery Tools"],
    personalTrainers: ["Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Hair Dryers", "Body Composition Analysis", "Fitness Tracking", "Workout Programs", "Protein Shakes", "Fitness Consultations", "Equipment Orientation", "Fresh Fruit Bar", "Personal Training Sessions", "Locker Rentals", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "954cd24c-6092-4401-8230-dba183db33d8",
    vesselId: "ly--gale",
    name: "LY  Gale Fitness Center",
    description: "Welcome to LY  Gale Fitness Center, your premier wellness destination aboard the LY  Gale. Stay active and healthy while cruising the waters near Boston with our state-of-the-art fitness facilities. Our facility features sauna facilities, steam room.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-773-344-8790",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Air Bikes", "VersaClimber", "Spin Bikes", "StairMaster", "Leg Curl Machine", "Power Rack", "Leg Press Machine", "Lat Pulldown", "Smith Machine", "Barbells", "Bench Press", "Dumbbells", "Kettlebells", "Foam Rollers", "Medicine Balls", "Agility Ladders", "Battle Ropes", "Plyo Boxes", "TRX Suspension Trainers", "Recovery Tools", "Cryotherapy Chamber", "Infrared Sauna"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Locker Rentals", "Body Composition Analysis", "Protein Shakes", "Fitness Tracking", "Fitness Consultations", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Towel Service", "Hair Dryers", "Toiletries", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  }
];
