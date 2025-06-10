// Fitness center venues data for Philipsburg
// This file contains fitness center and wellness facility information for cruise vessels operating from Philipsburg
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const philipsburgFitnessCenters: FitnessCenter[] = [
  {
    id: "bafd006b-f221-4df9-8d0e-077a8283e010",
    vesselId: "mv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-826-676-9292",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Treadmills", "VersaClimber", "Rowing Machines", "Recumbent Bikes", "Elliptical Machines", "Spin Bikes", "StairMaster", "Smith Machine", "Bench Press", "Shoulder Press Machine", "Pull-up Station", "Leg Curl Machine", "Free Weights", "Lat Pulldown", "Dumbbells", "Barbells", "Power Rack", "Cable Machines", "Leg Press Machine", "Kettlebells", "Medicine Balls", "Yoga Mats", "Foam Rollers", "TRX Suspension Trainers", "Agility Ladders", "Recovery Tools", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Locker Rentals", "Water Stations", "Personal Training Sessions", "Fitness Consultations", "Protein Shakes", "Workout Programs", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "8b212684-9ba5-47fb-83d8-0774b4e033b3",
    vesselId: "ps-philipsburg-voyager",
    name: "Philipsburg Fitness Center",
    description: "Philipsburg Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Philipsburg. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-200-818-5375",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Spin Bikes", "Elliptical Machines", "Stationary Bikes", "Air Bikes", "StairMaster", "Rowing Machines", "VersaClimber", "Power Rack", "Leg Press Machine", "Leg Curl Machine", "Free Weights", "Dumbbells", "Smith Machine", "Pull-up Station", "Barbells", "Lat Pulldown", "Cable Machines", "Weight Machines", "Bench Press", "Kettlebells", "Battle Ropes", "Yoga Mats", "Plyo Boxes", "Stability Balls", "TRX Suspension Trainers", "Resistance Bands", "Foam Rollers", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Spinning Instructor", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Water Stations", "Hair Dryers", "Fresh Fruit Bar", "Personal Training Sessions", "Fitness Consultations", "Protein Shakes", "Body Composition Analysis", "Towel Service", "Group Fitness Classes", "Fitness Tracking", "Workout Programs", "Toiletries"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "58a8c14e-1b83-40c7-8806-5a39a5d50f61",
    vesselId: "ps--of-the-deep",
    name: "Philipsburg Fitness Center",
    description: "Philipsburg Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Philipsburg. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-588-979-9965",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Stationary Bikes", "VersaClimber", "Elliptical Machines", "Arc Trainers", "Bench Press", "Power Rack", "Pull-up Station", "Barbells", "Cable Machines", "Smith Machine", "Dumbbells", "Lat Pulldown", "Free Weights", "Weight Machines", "Kettlebells", "BOSU Balls", "Stability Balls", "Balance Boards", "Agility Ladders", "Yoga Mats", "Massage Chairs", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Locker Rentals", "Fresh Fruit Bar", "Toiletries", "Audio/Visual Entertainment", "Personal Training Sessions", "Workout Programs", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "448dd637-2c88-4f6a-a7f7-eee83faf7535",
    vesselId: "ly-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Philipsburg. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-669-317-9293",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "Air Bikes", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "StairMaster", "Arc Trainers", "Recumbent Bikes", "VersaClimber", "Power Rack", "Barbells", "Lat Pulldown", "Pull-up Station", "Weight Machines", "Smith Machine", "Dumbbells", "Leg Curl Machine", "Shoulder Press Machine", "BOSU Balls", "Kettlebells", "Medicine Balls", "Battle Ropes", "Agility Ladders", "Recovery Tools"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Group Fitness Classes", "Towel Service", "Body Composition Analysis", "Fitness Tracking", "Water Stations", "Fitness Consultations", "Equipment Orientation", "Audio/Visual Entertainment"],
    is24Hours: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "0ab10f0c-fb81-44fd-a94c-948e4601ae01",
    vesselId: "mv--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-440-656-9353",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Stationary Bikes", "VersaClimber", "Elliptical Machines", "Air Bikes", "Recumbent Bikes", "Leg Press Machine", "Free Weights", "Cable Machines", "Smith Machine", "Dumbbells", "Weight Machines", "Barbells", "Bench Press", "Power Rack", "Lat Pulldown", "BOSU Balls", "Agility Ladders", "TRX Suspension Trainers", "Foam Rollers", "Battle Ropes", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Hair Dryers", "Equipment Orientation", "Locker Rentals", "Personal Training Sessions", "Group Fitness Classes", "Body Composition Analysis", "Workout Programs", "Water Stations"],
    is24Hours: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  }
];
