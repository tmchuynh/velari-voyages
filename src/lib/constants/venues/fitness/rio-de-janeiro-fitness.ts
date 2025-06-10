// Fitness center venues data for Rio De Janeiro
// This file contains fitness center and wellness facility information for cruise vessels operating from Rio De Janeiro
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const rioDeJaneiroFitnessCenters: FitnessCenter[] = [
  {
    id: "fa66a1f3-a500-411e-b5aa-c013e08f7770",
    vesselId: "my--explorer",
    name: "MY  Explorer Fitness Center",
    description: "MY  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Rio De Janeiro. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-888-296-2468",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "StairMaster", "Air Bikes", "Rowing Machines", "Stationary Bikes", "Arc Trainers", "Elliptical Machines", "VersaClimber", "Recumbent Bikes", "Treadmills", "Free Weights", "Bench Press", "Pull-up Station", "Leg Press Machine", "Weight Machines", "Power Rack", "Shoulder Press Machine", "Cable Machines", "Smith Machine", "Leg Curl Machine", "Battle Ropes", "Yoga Mats", "Resistance Bands", "Balance Boards", "Agility Ladders", "Pilates Reformers", "Compression Therapy", "Stretching Stations"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer", "Strength Training Specialist"],
    amenities: ["Fresh Fruit Bar", "Toiletries", "Towel Service", "Fitness Consultations", "Workout Programs", "Water Stations", "Group Fitness Classes", "Locker Rentals", "Fitness Tracking", "Personal Training Sessions", "Audio/Visual Entertainment", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    id: "88b88f1d-3343-4abe-bbd7-18fbefe34616",
    vesselId: "my-rio-de-janeiro-voyager",
    name: "MY Rio De Janeiro Voyager Fitness Center",
    description: "Discover wellness at sea with MY Rio De Janeiro Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-394-938-8091",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Elliptical Machines", "Spin Bikes", "Air Bikes", "StairMaster", "Recumbent Bikes", "Free Weights", "Weight Machines", "Leg Press Machine", "Lat Pulldown", "Dumbbells", "Power Rack", "Pull-up Station", "Bench Press", "Shoulder Press Machine", "Smith Machine", "TRX Suspension Trainers", "Agility Ladders", "Foam Rollers", "Kettlebells", "Balance Boards", "Medicine Balls", "Stretching Stations", "Cryotherapy Chamber", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Corrective Exercise Specialist", "Senior Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Body Composition Analysis", "Water Stations", "Workout Programs", "Audio/Visual Entertainment", "Fitness Consultations", "Equipment Orientation", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "2791fd21-6576-497d-aa4f-71ef8b2ae7e9",
    vesselId: "ts--of-the-deep",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-446-320-7561",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "Elliptical Machines", "VersaClimber", "Treadmills", "Rowing Machines", "Stationary Bikes", "StairMaster", "Free Weights", "Pull-up Station", "Dumbbells", "Leg Press Machine", "Shoulder Press Machine", "Cable Machines", "Leg Curl Machine", "Bench Press", "Smith Machine", "Lat Pulldown", "Weight Machines", "Medicine Balls", "BOSU Balls", "Foam Rollers", "Balance Boards", "Resistance Bands", "Plyo Boxes", "Kettlebells", "Pilates Reformers", "Cryotherapy Chamber", "Infrared Sauna"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist"],
    amenities: ["Workout Programs", "Fitness Consultations", "Towel Service", "Fresh Fruit Bar", "Body Composition Analysis", "Locker Rentals", "Group Fitness Classes", "Water Stations", "Personal Training Sessions", "Toiletries", "Fitness Tracking"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "d7c78c6a-14d5-4ae9-83d9-8b51ae2a5906",
    vesselId: "rv-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-518-884-7588",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "VersaClimber", "Treadmills", "Rowing Machines", "StairMaster", "Recumbent Bikes", "Elliptical Machines", "Stationary Bikes", "Spin Bikes", "Shoulder Press Machine", "Leg Press Machine", "Pull-up Station", "Bench Press", "Power Rack", "Smith Machine", "Cable Machines", "Weight Machines", "Stability Balls", "Plyo Boxes", "TRX Suspension Trainers", "Foam Rollers", "Battle Ropes", "Medicine Balls", "Cryotherapy Chamber"],
    personalTrainers: ["Spinning Instructor", "Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Group Fitness Classes", "Fitness Consultations", "Toiletries", "Workout Programs", "Body Composition Analysis", "Personal Training Sessions", "Equipment Orientation", "Protein Shakes", "Locker Rentals", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "a3416335-3ca7-4905-9476-4cf8f00f6b9f",
    vesselId: "nb--gale",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-592-324-5096",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Recumbent Bikes", "Arc Trainers", "Spin Bikes", "StairMaster", "Stationary Bikes", "Air Bikes", "Elliptical Machines", "Treadmills", "VersaClimber", "Leg Press Machine", "Leg Curl Machine", "Cable Machines", "Shoulder Press Machine", "Weight Machines", "Barbells", "Bench Press", "Power Rack", "Lat Pulldown", "Dumbbells", "Pull-up Station", "Yoga Mats", "Kettlebells", "Balance Boards", "Foam Rollers", "Medicine Balls", "Battle Ropes", "Recovery Tools"],
    personalTrainers: ["Spinning Instructor", "Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Equipment Orientation", "Group Fitness Classes", "Workout Programs", "Protein Shakes", "Fresh Fruit Bar", "Toiletries", "Water Stations", "Fitness Consultations", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
  }
];
