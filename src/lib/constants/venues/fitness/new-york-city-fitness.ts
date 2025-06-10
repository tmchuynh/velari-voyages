// Fitness center venues data for New York City
// This file contains fitness center and wellness facility information for cruise vessels operating from New York City
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const newYorkCityFitnessCenters: FitnessCenter[] = [
  {
    id: "1f6a510e-85d1-447e-a251-eafb0cb91ae2",
    vesselId: "ms--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-444-411-5985",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "StairMaster", "Elliptical Machines", "Rowing Machines", "Spin Bikes", "Arc Trainers", "VersaClimber", "Bench Press", "Weight Machines", "Cable Machines", "Barbells", "Smith Machine", "Lat Pulldown", "Shoulder Press Machine", "Leg Curl Machine", "Leg Press Machine", "Dumbbells", "Plyo Boxes", "Agility Ladders", "TRX Suspension Trainers", "Balance Boards", "Medicine Balls", "Pilates Reformers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Fitness Tracking", "Group Fitness Classes", "Equipment Orientation", "Locker Rentals", "Water Stations", "Fitness Consultations", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "8864b839-ad13-4510-8b4c-6d58da509595",
    vesselId: "ms-new-york-city-voyager",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-464-497-4286",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Spin Bikes", "Stationary Bikes", "Air Bikes", "Arc Trainers", "Rowing Machines", "Treadmills", "Recumbent Bikes", "Power Rack", "Bench Press", "Dumbbells", "Free Weights", "Leg Press Machine", "Barbells", "Cable Machines", "Weight Machines", "Pull-up Station", "Shoulder Press Machine", "Leg Curl Machine", "Battle Ropes", "Yoga Mats", "Medicine Balls", "Plyo Boxes", "Foam Rollers", "Resistance Bands", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Spinning Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Hair Dryers", "Towel Service", "Body Composition Analysis", "Fitness Tracking", "Audio/Visual Entertainment", "Group Fitness Classes", "Protein Shakes", "Fresh Fruit Bar", "Equipment Orientation", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    id: "d4859bc4-415b-40bb-8db6-9c1f4c7c8a38",
    vesselId: "ms--of-the-deep",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-293-417-6464",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Stationary Bikes", "Elliptical Machines", "StairMaster", "Spin Bikes", "Treadmills", "Air Bikes", "Rowing Machines", "VersaClimber", "Arc Trainers", "Lat Pulldown", "Free Weights", "Smith Machine", "Leg Curl Machine", "Dumbbells", "Pull-up Station", "Cable Machines", "Leg Press Machine", "Power Rack", "Barbells", "Foam Rollers", "Battle Ropes", "Kettlebells", "Medicine Balls", "BOSU Balls", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor", "Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Fitness Consultations", "Towel Service", "Equipment Orientation", "Toiletries", "Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions", "Locker Rentals", "Body Composition Analysis", "Hair Dryers", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "44b1dbd2-2a39-48c4-8ce4-e32091b1e164",
    vesselId: "ps-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around New York City. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-401-272-7910",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Elliptical Machines", "StairMaster", "VersaClimber", "Air Bikes", "Stationary Bikes", "Spin Bikes", "Arc Trainers", "Lat Pulldown", "Barbells", "Dumbbells", "Power Rack", "Leg Press Machine", "Cable Machines", "Smith Machine", "Bench Press", "Leg Curl Machine", "Shoulder Press Machine", "Free Weights", "Pull-up Station", "Battle Ropes", "BOSU Balls", "TRX Suspension Trainers", "Balance Boards", "Agility Ladders", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Corrective Exercise Specialist", "Senior Fitness Specialist", "Aqua Fitness Instructor", "Spinning Instructor"],
    amenities: ["Group Fitness Classes", "Fresh Fruit Bar", "Personal Training Sessions", "Locker Rentals", "Water Stations", "Hair Dryers", "Fitness Tracking", "Workout Programs", "Towel Service", "Equipment Orientation", "Protein Shakes", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "006f62e6-bfe5-407c-9e1a-cbf21439345b",
    vesselId: "my--gale",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MY  Gale. Stay active and healthy while cruising the waters near New York City with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-909-178-5384",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Stationary Bikes", "VersaClimber", "Rowing Machines", "Recumbent Bikes", "Air Bikes", "Spin Bikes", "Elliptical Machines", "Treadmills", "StairMaster", "Shoulder Press Machine", "Cable Machines", "Barbells", "Dumbbells", "Free Weights", "Bench Press", "Leg Curl Machine", "Pull-up Station", "Smith Machine", "Leg Press Machine", "Weight Machines", "Medicine Balls", "Battle Ropes", "Resistance Bands", "Yoga Mats", "Foam Rollers", "BOSU Balls", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist"],
    amenities: ["Protein Shakes", "Hair Dryers", "Body Composition Analysis", "Personal Training Sessions", "Group Fitness Classes", "Fresh Fruit Bar", "Fitness Consultations", "Audio/Visual Entertainment", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  }
];
