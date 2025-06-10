// Fitness center venues data for Vancouver
// This file contains fitness center and wellness facility information for cruise vessels operating from Vancouver
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const vancouverFitnessCenters: FitnessCenter[] = [
  {
    id: "edb49e6e-bbe8-4922-89be-a5a20d7e60b3",
    vesselId: "cs--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-687-412-1324",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Stationary Bikes", "Spin Bikes", "Treadmills", "VersaClimber", "Rowing Machines", "Bench Press", "Barbells", "Shoulder Press Machine", "Weight Machines", "Power Rack", "Leg Curl Machine", "Smith Machine", "Cable Machines", "Dumbbells", "Stability Balls", "Agility Ladders", "Kettlebells", "Medicine Balls", "Yoga Mats", "Battle Ropes", "BOSU Balls", "Resistance Bands", "Stretching Stations", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Hair Dryers", "Towel Service", "Fitness Tracking", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Toiletries", "Workout Programs", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e57d5b3-060c-4790-9b78-27ad01e5a9dc",
    vesselId: "ts-vancouver-voyager",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the TS Vancouver Voyager. Stay active and healthy while cruising the waters near Vancouver with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-202-774-5948",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Air Bikes", "Rowing Machines", "Stationary Bikes", "Treadmills", "StairMaster", "Recumbent Bikes", "Leg Curl Machine", "Pull-up Station", "Barbells", "Smith Machine", "Dumbbells", "Lat Pulldown", "Shoulder Press Machine", "Free Weights", "Bench Press", "Cable Machines", "BOSU Balls", "Foam Rollers", "Battle Ropes", "Medicine Balls", "Stability Balls", "Cryotherapy Chamber", "Barre Equipment"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Senior Fitness Specialist"],
    amenities: ["Fresh Fruit Bar", "Locker Rentals", "Group Fitness Classes", "Personal Training Sessions", "Workout Programs", "Hair Dryers", "Equipment Orientation", "Protein Shakes", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "6a2104c8-50ae-430f-b69b-cbd13c98832d",
    vesselId: "ss--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Vancouver. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-932-495-6614",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Rowing Machines", "Elliptical Machines", "VersaClimber", "Recumbent Bikes", "Arc Trainers", "Cable Machines", "Free Weights", "Barbells", "Dumbbells", "Leg Curl Machine", "Leg Press Machine", "Power Rack", "Smith Machine", "Lat Pulldown", "Shoulder Press Machine", "Pull-up Station", "Bench Press", "Foam Rollers", "TRX Suspension Trainers", "Yoga Mats", "Stability Balls", "Medicine Balls", "Agility Ladders", "Plyo Boxes", "BOSU Balls", "Pilates Reformers", "Massage Chairs"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fresh Fruit Bar", "Group Fitness Classes", "Personal Training Sessions", "Body Composition Analysis", "Water Stations", "Workout Programs", "Locker Rentals", "Fitness Tracking", "Equipment Orientation", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    id: "5d69f75e-1d3f-40f0-b105-5cefc081d92f",
    vesselId: "ss-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Vancouver. Our facility features steam room.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-753-984-8666",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "Rowing Machines", "Air Bikes", "Elliptical Machines", "Spin Bikes", "Stationary Bikes", "Shoulder Press Machine", "Bench Press", "Free Weights", "Lat Pulldown", "Power Rack", "Leg Press Machine", "Pull-up Station", "Dumbbells", "Cable Machines", "Smith Machine", "Agility Ladders", "BOSU Balls", "Resistance Bands", "Stability Balls", "TRX Suspension Trainers", "Yoga Mats", "Battle Ropes", "Massage Chairs", "Compression Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Workout Programs", "Group Fitness Classes", "Body Composition Analysis", "Hair Dryers", "Water Stations", "Toiletries", "Locker Rentals", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "d56bca18-31a6-4c21-858c-200cc0ef4686",
    vesselId: "hms--gale",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-412-139-8300",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Recumbent Bikes", "Rowing Machines", "Stationary Bikes", "Treadmills", "Elliptical Machines", "Weight Machines", "Lat Pulldown", "Free Weights", "Leg Curl Machine", "Leg Press Machine", "Power Rack", "Bench Press", "Smith Machine", "Cable Machines", "Dumbbells", "Barbells", "Kettlebells", "Medicine Balls", "Yoga Mats", "Battle Ropes", "Agility Ladders", "TRX Suspension Trainers", "Infrared Sauna", "Stretching Stations", "Compression Therapy"],
    personalTrainers: ["Group Fitness Instructor", "Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Body Composition Analysis", "Towel Service", "Workout Programs", "Equipment Orientation", "Group Fitness Classes", "Fresh Fruit Bar", "Fitness Tracking", "Locker Rentals", "Protein Shakes", "Hair Dryers", "Fitness Consultations", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
  }
];
