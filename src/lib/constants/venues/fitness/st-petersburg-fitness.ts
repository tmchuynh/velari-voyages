// Fitness center venues data for St Petersburg
// This file contains fitness center and wellness facility information for cruise vessels operating from St Petersburg
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const stPetersburgFitnessCenters: FitnessCenter[] = [
  {
    id: "7a49d6a5-594d-4bf0-a75e-a231a903fcac",
    vesselId: "rv--explorer",
    name: "RV  Explorer Fitness Center",
    description: "Discover wellness at sea with RV  Explorer Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(742) 492-3964",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Air Bikes", "Cardio Step Platforms", "Rowing Machines", "Cardio Resistance Bands", "Cardio Medicine Balls", "SkiErg", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Tricep Pushdown Machine", "Lat Pulldown", "Plate Loaded Machines", "Cable Single Arm Shoulder Press Machine", "Cable Calf Raise Machine", "Cable Shrug Machine", "Leg Press Machine", "Cable Glute Kickback Machine", "BOSU Balls", "Speed Ladders", "TRX Suspension Trainers", "Slam Balls", "Speed Parachutes", "Spinning Bikes", "Kickboxing Equipment", "Yoga Bolsters"],
    personalTrainers: ["Certified Personal Trainer", "Youth Fitness Specialist", "Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Workout Programs", "Audio/Visual Entertainment", "Locker Rentals", "Group Fitness Classes", "Hair Dryers", "Fresh Fruit Bar", "Personal Training Sessions", "Water Stations"],
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
    hasChildcareServices: false,
    faqs: [
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "b61ea53b-c251-49d3-8650-b55e10dbf85d",
    vesselId: "sv-st-petersburg-voyager",
    name: "St Petersburg Fitness Center",
    description: "Discover wellness at sea with St Petersburg Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(494) 220-1730",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Spin Bikes", "Boxing Equipment", "SkiErg", "VersaClimber", "Elliptical Machines", "Stationary Bikes", "Agility Hurdles", "Cable Single Arm Woodchopper Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Reverse Fly Machine", "Cable Single Arm Chest Press Machine", "Calf Raise Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Weighted Vests", "Resistance Bands", "Foam Rollers", "Speed Cords", "Speed Bands", "Battle Ropes", "Stretching Stations", "HydroMassage Beds", "Yoga Wheels"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Nutrition Counseling", "Fitness Tracking", "Workout Programs", "Smoothie Bar", "Body Composition Analysis", "Towel Service", "Equipment Orientation", "Fresh Fruit Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "7d0cca59-e66c-4a8b-aec1-7b9d3c4173d7",
    vesselId: "ts--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the TS  of the Deep. Stay active and healthy while cruising the waters near St Petersburg with our state-of-the-art fitness facilities. Our facility features pool area.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(926) 629-6475",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Stationary Bikes", "Elliptical Machines", "Cardio Step Platforms", "Spin Bikes", "Cardio Kettlebells", "Recumbent Bikes", "Cardio Gliders", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Plank Machine", "Free Weights", "Plate Loaded Machines", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Power Rack", "Cable Shrug Machine", "Cable Single Arm Russian Twist Machine", "BOSU Balls", "Sledgehammers", "Sandbags", "Agility Ladders", "Agility Markers", "Foam Rollers", "Balance Boards", "Recovery Tools", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist", "Certified Personal Trainer", "Strength and Conditioning Coach"],
    amenities: ["Equipment Orientation", "Hair Dryers", "Group Fitness Classes", "Toiletries", "Workout Programs", "Fitness Consultations", "Smoothie Bar", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "c88092c8-e461-44c1-90ea-7addf0c29494",
    vesselId: "nx-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the NX The  Mariner. Stay active and healthy while cruising the waters near St Petersburg with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(933) 396-5713",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Jump Ropes", "Cardio Gliders", "Cardio Punching Bags", "Agility Hurdles", "Cardio Kettlebells", "Free Weights", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Tricep Extension Machine", "Weight Machines", "Cable Hip Thrust Machine", "Tricep Extension Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Calf Raise Machine", "Functional Trainers", "Seated Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Reverse Fly Machine", "Battle Ropes", "Resistance Bands", "Medicine Balls", "Kettlebells", "Plyo Boxes", "Jump Boxes", "Balance Boards", "TRX Suspension Trainers"],
    personalTrainers: ["Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Body Composition Analysis", "Nutrition Counseling", "Fitness Tracking", "Audio/Visual Entertainment", "Group Fitness Classes", "Toiletries", "Hair Dryers", "Workout Programs", "Towel Service", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "de3b0f85-caea-43d1-8217-45ffdf85f60e",
    vesselId: "nb--gale",
    name: "St Petersburg Fitness Center",
    description: "Discover wellness at sea with St Petersburg Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(196) 750-3556",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Rowing Machines", "Stationary Bikes", "Cardio Kickboxing Bags", "Battle Ropes", "SkiErg", "StairMaster", "Agility Hurdles", "Cardio Step Platforms", "Spin Bikes", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Deadlift Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Squat Machine", "Cable Glute Kickback Machine", "Weighted Vests", "Speed Parachutes", "Speed Sleds", "Medicine Balls", "Speed Hurdles", "TRX Suspension Trainers", "Yoga Mats", "Sledgehammers", "Infrared Sauna", "Pilates Reformers"],
    personalTrainers: ["Youth Fitness Specialist", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Hair Dryers", "Toiletries", "Equipment Orientation", "Personal Training Sessions", "Audio/Visual Entertainment", "Protein Shakes", "Body Composition Analysis", "Group Fitness Classes", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "202caba8-5f16-4e49-bda2-01d8d49993ef",
    vesselId: "ps--explorer",
    name: "St Petersburg Fitness Center",
    description: "Discover wellness at sea with St Petersburg Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(308) 381-5268",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Stationary Bikes", "Cardio Kettlebells", "Rowing Machines", "Battle Ropes", "Cardio Punching Bags", "VersaClimber", "Boxing Equipment", "Recumbent Bikes", "Leg Press Machine", "Smith Machine", "Cable Russian Twist Machine", "Leg Extension Machine", "Cable Lunge Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Bicep Curl Machine", "Jump Boxes", "Resistance Bands", "Agility Hurdles", "Sandbags", "Sledgehammers", "Yoga Bolsters", "HydroMassage Beds", "Kickboxing Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Strength Training Specialist", "Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Equipment Orientation", "Towel Service", "Smoothie Bar", "Workout Programs", "Locker Rentals", "Hair Dryers", "Nutrition Counseling", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "a59ebf92-38a4-42f7-9abb-259b4ceece7b",
    vesselId: "ts-st-petersburg-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(867) 404-2639",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "VersaClimber", "Boxing Equipment", "StairMaster", "Punching Bags", "Stationary Bikes", "Cardio Gliders", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Upright Row Machine", "Seated Row Machine", "Cable Single Arm Bicep Curl Machine", "Cable Row Machine", "Tricep Extension Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Back Extension Machine", "Resistance Bands", "Jump Boxes", "Speed Resistors", "Speed Parachutes", "Balance Boards", "Speed Cones", "Agility Ladders", "Speed Cords", "Cryotherapy Chamber"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor"],
    amenities: ["Towel Service", "Water Stations", "Locker Rentals", "Equipment Orientation", "Fresh Fruit Bar", "Protein Shakes", "Fitness Consultations", "Group Fitness Classes", "Fitness Tracking", "Nutrition Counseling", "Smoothie Bar", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
  },
  {
    id: "1dd81053-5fe6-4afe-b203-60496676e356",
    vesselId: "ts--of-the-deep",
    name: "TS  of the Deep Fitness Center",
    description: "TS  of the Deep Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(661) 584-2310",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "Elliptical Machines", "SkiErg", "Spin Bikes", "Jump Ropes", "Free Weights", "Cable Single Arm Single Leg Pallof Press Machine", "Leg Curl Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Smith Machine", "Shoulder Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Agility Ladders", "Stability Balls", "Speed Hurdles", "Medicine Balls", "Jump Boxes", "Kettlebells", "Compression Therapy", "TRX Suspension Trainers", "Yoga Bolsters"],
    personalTrainers: ["Spinning Instructor", "Aqua Fitness Instructor", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Toiletries", "Audio/Visual Entertainment", "Workout Programs", "Towel Service", "Fresh Fruit Bar", "Water Stations", "Fitness Tracking", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "754da036-6f0e-4a4b-9ca9-cb52a0849138",
    vesselId: "hms-the--mariner",
    name: "HMS The  Mariner Fitness Center",
    description: "Discover wellness at sea with HMS The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(223) 757-3990",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Treadmills", "Elliptical Machines", "SkiErg", "Punching Bags", "Cardio Kettlebells", "Cardio Punching Bags", "Battle Ropes", "Cardio Medicine Balls", "Cable Single Arm Single Leg Woodchopper Machine", "Power Rack", "Abdominal Crunch Machine", "Smith Machine", "Cable Single Arm Row Machine", "Bench Press", "Cable Plank Machine", "Cable Single Arm Calf Raise Machine", "Cable Hip Thrust Machine", "Barbells", "Speed Parachutes", "Agility Markers", "Agility Poles", "Weighted Vests", "Speed Cones", "Barre Equipment", "Compression Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Group Fitness Instructor", "Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Equipment Orientation", "Workout Programs", "Water Stations", "Towel Service", "Toiletries", "Audio/Visual Entertainment", "Group Fitness Classes", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "031d121e-af5c-4352-890d-1e600169ff51",
    vesselId: "rv--gale",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around St Petersburg. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(612) 607-2965",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Boxing Equipment", "Cardio Resistance Bands", "Treadmills", "Elliptical Machines", "Stationary Bikes", "Cable Single Arm Plank Machine", "Seated Row Machine", "Cable Single Arm Bicep Curl Machine", "Power Rack", "Cable Single Arm Glute Kickback Machine", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Crossover Machine", "Plyo Boxes", "Speed Parachutes", "Kettlebells", "Sandbags", "Tire Flips", "Agility Poles", "Resistance Bands", "Speed Resistors", "Infrared Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Fitness Tracking", "Hair Dryers", "Body Composition Analysis", "Water Stations", "Group Fitness Classes", "Towel Service", "Fresh Fruit Bar", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
