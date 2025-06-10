// Fitness center venues data for Barcelona
// This file contains fitness center and wellness facility information for cruise vessels operating from Barcelona
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const barcelonaFitnessCenters: FitnessCenter[] = [
  {
    id: "c8f9a4d4-25f6-45d5-8952-fab4462c56d9",
    vesselId: "ps--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Barcelona. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-432-534-4087",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "Spin Bikes", "Stationary Bikes", "Treadmills", "VersaClimber", "Arc Trainers", "Smith Machine", "Bench Press", "Leg Press Machine", "Barbells", "Power Rack", "Lat Pulldown", "Dumbbells", "Pull-up Station", "Weight Machines", "Battle Ropes", "Agility Ladders", "Resistance Bands", "BOSU Balls", "Yoga Mats", "Pilates Reformers"],
    personalTrainers: ["Strength Training Specialist", "Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Hair Dryers", "Fitness Consultations", "Protein Shakes", "Fitness Tracking", "Audio/Visual Entertainment", "Toiletries", "Body Composition Analysis", "Group Fitness Classes"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
    id: "eab85bc8-05d8-4618-90b6-d0dd41a6f570",
    vesselId: "my-barcelona-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-233-127-5557",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Treadmills", "VersaClimber", "Elliptical Machines", "Air Bikes", "Arc Trainers", "Stationary Bikes", "Barbells", "Power Rack", "Pull-up Station", "Bench Press", "Dumbbells", "Free Weights", "Leg Curl Machine", "Leg Press Machine", "Shoulder Press Machine", "Cable Machines", "Weight Machines", "Balance Boards", "Agility Ladders", "TRX Suspension Trainers", "Battle Ropes", "Medicine Balls", "Resistance Bands", "Kettlebells", "Foam Rollers", "Pilates Reformers", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Water Stations", "Workout Programs", "Protein Shakes", "Equipment Orientation", "Personal Training Sessions", "Toiletries", "Group Fitness Classes", "Fitness Consultations", "Body Composition Analysis", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
      }
    ],
    isPopular: true
  },
  {
    id: "51e4eb01-55ca-42cb-ad74-12a35f33cc5f",
    vesselId: "mv--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MV  of the Deep. Stay active and healthy while cruising the waters near Barcelona with our state-of-the-art fitness facilities. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-989-375-6783",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "Rowing Machines", "Elliptical Machines", "Recumbent Bikes", "Arc Trainers", "Barbells", "Dumbbells", "Leg Curl Machine", "Pull-up Station", "Shoulder Press Machine", "Cable Machines", "Lat Pulldown", "Smith Machine", "Weight Machines", "Bench Press", "Leg Press Machine", "Foam Rollers", "Agility Ladders", "TRX Suspension Trainers", "Yoga Mats", "Balance Boards", "Medicine Balls", "Barre Equipment"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Body Composition Analysis", "Personal Training Sessions", "Locker Rentals", "Equipment Orientation", "Group Fitness Classes", "Water Stations", "Audio/Visual Entertainment", "Towel Service"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "7b30c1ed-fe9c-48c2-aa1e-d687519d6dab",
    vesselId: "cs-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the CS The  Mariner. Stay active and healthy while cruising the waters near Barcelona with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-774-681-4541",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Recumbent Bikes", "StairMaster", "Rowing Machines", "Spin Bikes", "Stationary Bikes", "Free Weights", "Bench Press", "Dumbbells", "Barbells", "Weight Machines", "Cable Machines", "Pull-up Station", "Shoulder Press Machine", "Smith Machine", "Leg Curl Machine", "TRX Suspension Trainers", "Battle Ropes", "Resistance Bands", "Yoga Mats", "Plyo Boxes", "Medicine Balls", "Infrared Sauna"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor", "Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Consultations", "Towel Service", "Locker Rentals", "Fresh Fruit Bar", "Fitness Tracking", "Audio/Visual Entertainment", "Body Composition Analysis", "Equipment Orientation", "Water Stations"],
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "a4bba21b-f9f3-408a-9480-a9975187ed7b",
    vesselId: "sv--gale",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-224-258-3095",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Recumbent Bikes", "Air Bikes", "Arc Trainers", "Stationary Bikes", "Rowing Machines", "Leg Press Machine", "Lat Pulldown", "Dumbbells", "Shoulder Press Machine", "Bench Press", "Leg Curl Machine", "Power Rack", "Weight Machines", "Battle Ropes", "Stability Balls", "BOSU Balls", "Medicine Balls", "Balance Boards", "TRX Suspension Trainers", "Massage Chairs", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Group Fitness Classes", "Workout Programs", "Hair Dryers", "Protein Shakes", "Towel Service", "Toiletries", "Fresh Fruit Bar", "Body Composition Analysis", "Water Stations", "Personal Training Sessions", "Locker Rentals", "Audio/Visual Entertainment"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  }
];
