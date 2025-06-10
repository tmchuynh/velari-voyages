// Fitness center venues data for Hong Kong
// This file contains fitness center and wellness facility information for cruise vessels operating from Hong Kong
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const hongKongFitnessCenters: FitnessCenter[] = [
  {
    id: "cd88e8d7-760f-4c1c-b4ac-030fbfa615cb",
    vesselId: "mv--explorer",
    name: "Hong Kong Fitness Center",
    description: "Discover wellness at sea with Hong Kong Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(566) 539-3143",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Cardio Kettlebells", "VersaClimber", "Cardio Punching Bags", "SkiErg", "StairMaster", "Arc Trainers", "Boxing Equipment", "Cardio Step Platforms", "Cable Single Arm Shrug Machine", "Abdominal Crunch Machine", "Cable Lateral Raise Machine", "Cable Face Pull Machine", "Barbells", "Cable Tricep Pushdown Machine", "Cable Single Arm Chest Press Machine", "Cable Squat Machine", "Back Extension Machine", "Cable Single Arm Ab Crunch Machine", "Chest Press Machine", "Cable Single Arm Face Pull Machine", "Sandbags", "Speed Cords", "TRX Suspension Trainers", "Sledgehammers", "Battle Ropes", "Speed Parachutes", "Medicine Balls", "Massage Chairs", "Cryotherapy Chamber", "Compression Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Body Composition Analysis", "Toiletries", "Fresh Fruit Bar", "Water Stations", "Audio/Visual Entertainment", "Towel Service", "Fitness Consultations", "Group Fitness Classes", "Nutrition Counseling", "Fitness Tracking", "Workout Programs"],
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
  },
  {
    id: "dd5476f0-7e06-4bd7-b167-3f6285a2051f",
    vesselId: "rms-hong-kong-voyager",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(490) 629-5599",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Boxing Equipment", "Elliptical Machines", "Cardio Step Platforms", "Treadmills", "Rowing Machines", "Shoulder Press Machine", "Cable Glute Kickback Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Plank Machine", "Bench Press", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Plate Loaded Machines", "Agility Ladders", "Speed Cords", "Agility Poles", "Sledgehammers", "Kettlebells", "Weighted Vests", "Kickboxing Equipment", "Pilates Reformers"],
    personalTrainers: ["Youth Fitness Specialist", "Strength and Conditioning Coach", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Smoothie Bar", "Toiletries", "Nutrition Counseling", "Hair Dryers", "Audio/Visual Entertainment", "Towel Service", "Fresh Fruit Bar", "Fitness Tracking", "Water Stations", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "9096a432-2f67-4074-9053-5aa23fb34fea",
    vesselId: "rms--of-the-deep",
    name: "RMS  of the Deep Fitness Center",
    description: "Discover wellness at sea with RMS  of the Deep Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(898) 421-1377",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Treadmills", "Cardio Resistance Bands", "VersaClimber", "Rowing Machines", "Cardio Kickboxing Bags", "StairMaster", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Upright Row Machine", "Chest Fly Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Leg Curl Machine", "Bench Press", "Cable Single Arm Upright Row Machine", "Cable Back Extension Machine", "Speed Ladders", "Foam Rollers", "Yoga Mats", "Speed Hurdles", "Sandbags", "Slam Balls", "BOSU Balls", "Battle Ropes", "Dance Fitness Equipment", "Compression Therapy", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Fitness Tracking", "Equipment Orientation", "Water Stations", "Locker Rentals", "Smoothie Bar", "Towel Service", "Group Fitness Classes", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "2a201eaf-01af-4371-be10-72201fd2a60a",
    vesselId: "rv-the--mariner",
    name: "RV The  Mariner Fitness Center",
    description: "RV The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(237) 220-2450",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Cardio Step Platforms", "VersaClimber", "Air Bikes", "Agility Hurdles", "Cardio Punching Bags", "Stationary Bikes", "Boxing Equipment", "Cable Single Arm Woodchopper Machine", "Free Weights", "Multi-Gym Systems", "Smith Machine", "Cable Tricep Pushdown Machine", "Shoulder Press Machine", "Cable Machines", "Cable Squat Machine", "Cable Calf Raise Machine", "Cable Face Pull Machine", "Back Extension Machine", "Speed Cones", "Stability Balls", "Agility Cones", "Tire Flips", "Balance Boards", "Yoga Mats", "Dance Fitness Equipment", "Cryotherapy Chambers"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Fitness Tracking", "Nutrition Counseling", "Towel Service", "Workout Programs", "Smoothie Bar", "Protein Shakes", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Toiletries", "Water Stations", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "b111353d-bc11-4c0a-bb3c-679fea3e3087",
    vesselId: "hms--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(504) 458-8505",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Battle Ropes", "Cardio Step Platforms", "Arc Trainers", "Treadmills", "Elliptical Machines", "Spin Bikes", "Cable Single Arm Single Leg Shrug Machine", "Cable Upright Row Machine", "Free Weights", "Cable Plank Machine", "Dumbbells", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Squat Machine", "Calf Raise Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Bicep Curl Machine", "Stability Balls", "Speed Harnesses", "Medicine Balls", "Speed Ladders", "Speed Cords", "Speed Sleds", "Agility Dots", "Compression Therapy", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Group Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Smoothie Bar", "Towel Service", "Locker Rentals", "Equipment Orientation", "Protein Shakes", "Audio/Visual Entertainment", "Fitness Consultations", "Group Fitness Classes", "Fresh Fruit Bar", "Toiletries", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "5bcd9ad8-dfeb-4e0a-bf08-7f68d909dd11",
    vesselId: "ps--explorer",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(473) 357-6965",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "StairMaster", "Cardio Medicine Balls", "Cardio Resistance Bands", "Stationary Bikes", "Air Bikes", "Cardio Kettlebells", "Cardio Punching Bags", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Shoulder Press Machine", "Leg Press Machine", "Cable Woodchopper Machine", "Shoulder Press Machine", "Cable Squat Machine", "Cable Machines", "Cable Bicep Curl Machine", "Bicep Curl Machine", "Agility Markers", "TRX Suspension Trainers", "Jump Boxes", "Agility Cones", "Stability Balls", "Speed Parachutes"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist", "Youth Fitness Specialist", "Yoga Instructor"],
    amenities: ["Smoothie Bar", "Audio/Visual Entertainment", "Body Composition Analysis", "Protein Shakes", "Group Fitness Classes", "Fitness Consultations", "Towel Service", "Nutrition Counseling", "Toiletries", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "147593a8-74bd-41ff-a772-8707dd524a07",
    vesselId: "sv-hong-kong-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(556) 134-7177",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Boxing Equipment", "Treadmills", "Agility Hurdles", "Elliptical Machines", "Cardio Resistance Bands", "Cardio Step Platforms", "Battle Ropes", "Cardio Kettlebells", "Cardio Gliders", "Cable Row Machine", "Multi-Gym Systems", "Cable Plank Machine", "Cable Single Arm Back Extension Machine", "Cable Upright Row Machine", "Cable Face Pull Machine", "Weight Machines", "Cable Ab Crunch Machine", "Cable Squat Machine", "Cable Crossover Machine", "Agility Markers", "TRX Suspension Trainers", "Foam Rollers", "Jump Boxes", "Balance Boards", "Slam Balls", "Tire Flips", "Resistance Bands", "Yoga Blocks", "HydroMassage Beds", "Yoga Bolsters"],
    personalTrainers: ["Strength Training Specialist", "Yoga Instructor", "Youth Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Workout Programs", "Locker Rentals", "Hair Dryers", "Toiletries", "Smoothie Bar", "Body Composition Analysis", "Fitness Tracking", "Equipment Orientation", "Personal Training Sessions", "Water Stations"],
    is24Hours: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "4e5f8df9-2286-499a-96e9-64dab4c58b2f",
    vesselId: "rms--of-the-deep",
    name: "Hong Kong Fitness Center",
    description: "Welcome to Hong Kong Fitness Center, your premier wellness destination aboard the RMS  of the Deep. Stay active and healthy while cruising the waters near Hong Kong with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(467) 211-9969",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Cardio Medicine Balls", "Spin Bikes", "Cardio Resistance Bands", "Punching Bags", "Treadmills", "Agility Hurdles", "Boxing Equipment", "Calf Raise Machine", "Cable Single Arm Calf Raise Machine", "Chest Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Face Pull Machine", "Cable Single Arm Face Pull Machine", "Smith Machine", "TRX Suspension Trainers", "Kettlebells", "Slam Balls", "Speed Sleds", "Agility Cones", "Speed Cords", "Stability Balls", "Resistance Bands", "Compression Therapy", "Pilates Reformers", "Recovery Tools", "Cryotherapy Chambers"],
    personalTrainers: ["Pilates Instructor", "Group Fitness Instructor", "Senior Fitness Specialist", "Youth Fitness Specialist"],
    amenities: ["Body Composition Analysis", "Locker Rentals", "Fresh Fruit Bar", "Workout Programs", "Equipment Orientation", "Hair Dryers", "Protein Shakes", "Fitness Tracking", "Group Fitness Classes", "Nutrition Counseling", "Towel Service"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
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
      }
    ],
    isPopular: false
  },
  {
    id: "0344cd3a-af26-4287-ab96-47a45e69158c",
    vesselId: "rv-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(881) 683-8729",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Elliptical Machines", "Cardio Resistance Bands", "Air Bikes", "Cardio Medicine Balls", "Arc Trainers", "Boxing Equipment", "Cardio Step Platforms", "Cable Hip Thrust Machine", "Cable Crossover Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Calf Raise Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Tricep Extension Machine", "Seated Row Machine", "Agility Ladders", "BOSU Balls", "Plyo Boxes", "Foam Rollers", "Speed Sleds", "Slam Balls", "Agility Dots", "Speed Hurdles", "Yoga Straps"],
    personalTrainers: ["Certified Personal Trainer", "Youth Fitness Specialist"],
    amenities: ["Locker Rentals", "Fitness Tracking", "Workout Programs", "Body Composition Analysis", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Towel Service", "Toiletries", "Water Stations", "Hair Dryers", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "e9de5cbb-da37-4157-9cf3-5708271cfaeb",
    vesselId: "ss--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(951) 848-7925",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Cardio Step Platforms", "Elliptical Machines", "VersaClimber", "Battle Ropes", "Punching Bags", "Cardio Kickboxing Bags", "Cardio Gliders", "Stationary Bikes", "StairMaster", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Lunge Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Pull-up Station", "Cable Single Arm Reverse Fly Machine", "Dumbbells", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Resistance Bands", "Speed Harnesses", "Speed Cones", "Foam Rollers", "Speed Bands", "Agility Hurdles", "Dance Fitness Equipment", "Yoga Wheels", "Kickboxing Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Group Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Locker Rentals", "Smoothie Bar", "Audio/Visual Entertainment", "Group Fitness Classes", "Toiletries", "Personal Training Sessions", "Nutrition Counseling", "Workout Programs", "Body Composition Analysis"],
    is24Hours: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  }
];
