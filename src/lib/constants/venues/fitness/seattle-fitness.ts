// Fitness center venues data for Seattle
// This file contains fitness center and wellness facility information for cruise vessels operating from Seattle
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const seattleFitnessCenters: FitnessCenter[] = [
  {
    id: "581a5541-cb79-4a51-80d3-3e317c47e703",
    vesselId: "cs--explorer",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-937-841-3824",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Spin Bikes", "VersaClimber", "Stationary Bikes", "Elliptical Machines", "Treadmills", "Arc Trainers", "Air Bikes", "Recumbent Bikes", "Barbells", "Dumbbells", "Leg Curl Machine", "Leg Press Machine", "Weight Machines", "Shoulder Press Machine", "Cable Machines", "Lat Pulldown", "Free Weights", "Medicine Balls", "Agility Ladders", "Foam Rollers", "Kettlebells", "Plyo Boxes", "Recovery Tools", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Strength Training Specialist", "Group Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Audio/Visual Entertainment", "Group Fitness Classes", "Hair Dryers", "Toiletries", "Body Composition Analysis", "Personal Training Sessions", "Locker Rentals", "Workout Programs", "Fitness Consultations", "Equipment Orientation", "Water Stations", "Protein Shakes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
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
    isPopular: false
  },
  {
    id: "b9d98e65-6152-4c1d-8bf1-d33a1ec899bf",
    vesselId: "ss-seattle-voyager",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the SS Seattle Voyager. Stay active and healthy while cruising the waters near Seattle with our state-of-the-art fitness facilities. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-593-397-9825",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "VersaClimber", "Recumbent Bikes", "Elliptical Machines", "Spin Bikes", "Arc Trainers", "Dumbbells", "Free Weights", "Bench Press", "Cable Machines", "Barbells", "Weight Machines", "Shoulder Press Machine", "Leg Press Machine", "Power Rack", "Foam Rollers", "Resistance Bands", "Yoga Mats", "Balance Boards", "TRX Suspension Trainers", "Stability Balls", "Massage Chairs", "Cryotherapy Chamber", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Locker Rentals", "Fresh Fruit Bar", "Fitness Tracking", "Hair Dryers", "Fitness Consultations", "Body Composition Analysis", "Equipment Orientation", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
    hasChildcareServices: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "7bb1c840-20f9-402c-93b0-6a65d6fbb5cb",
    vesselId: "my--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-560-852-7390",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Rowing Machines", "Spin Bikes", "Treadmills", "Arc Trainers", "Elliptical Machines", "VersaClimber", "Stationary Bikes", "StairMaster", "Dumbbells", "Power Rack", "Smith Machine", "Barbells", "Shoulder Press Machine", "Weight Machines", "Leg Curl Machine", "Lat Pulldown", "Cable Machines", "Bench Press", "BOSU Balls", "Medicine Balls", "Balance Boards", "Stability Balls", "Yoga Mats", "Agility Ladders", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist", "Aqua Fitness Instructor", "Yoga Instructor"],
    amenities: ["Towel Service", "Fresh Fruit Bar", "Water Stations", "Audio/Visual Entertainment", "Workout Programs", "Hair Dryers", "Personal Training Sessions", "Toiletries", "Protein Shakes", "Fitness Tracking", "Group Fitness Classes", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "c7ff7726-239f-40ac-b708-c25693b0431a",
    vesselId: "my-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the MY The  Mariner. Stay active and healthy while cruising the waters near Seattle with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-761-831-7971",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Air Bikes", "Spin Bikes", "StairMaster", "Elliptical Machines", "Treadmills", "Dumbbells", "Barbells", "Leg Curl Machine", "Shoulder Press Machine", "Free Weights", "Bench Press", "Leg Press Machine", "Lat Pulldown", "Cable Machines", "Weight Machines", "BOSU Balls", "Resistance Bands", "Medicine Balls", "Foam Rollers", "Agility Ladders", "Compression Therapy", "Stretching Stations", "Pilates Reformers"],
    personalTrainers: ["Corrective Exercise Specialist", "Pilates Instructor", "Senior Fitness Specialist", "Strength Training Specialist"],
    amenities: ["Hair Dryers", "Fresh Fruit Bar", "Group Fitness Classes", "Personal Training Sessions", "Toiletries", "Water Stations", "Workout Programs", "Fitness Consultations", "Fitness Tracking"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
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
    hasChildcareServices: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "61e2f33d-5f92-40b6-8330-a6ffad57b4ae",
    vesselId: "ly--gale",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the LY  Gale. Stay active and healthy while cruising the waters near Seattle with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-755-916-5750",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Stationary Bikes", "Arc Trainers", "Elliptical Machines", "StairMaster", "Air Bikes", "Weight Machines", "Dumbbells", "Smith Machine", "Leg Press Machine", "Free Weights", "Cable Machines", "Shoulder Press Machine", "Pull-up Station", "Leg Curl Machine", "Lat Pulldown", "Barbells", "Foam Rollers", "Kettlebells", "Plyo Boxes", "Agility Ladders", "Balance Boards", "Medicine Balls", "BOSU Balls", "Resistance Bands", "Cryotherapy Chamber", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Water Stations", "Equipment Orientation", "Fitness Tracking", "Protein Shakes", "Personal Training Sessions", "Group Fitness Classes", "Locker Rentals", "Fresh Fruit Bar"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  }
];
