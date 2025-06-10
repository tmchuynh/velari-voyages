// Fitness center venues data for Ketchikan
// This file contains fitness center and wellness facility information for cruise vessels operating from Ketchikan
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const ketchikanFitnessCenters: FitnessCenter[] = [
  {
    id: "eb42ee5f-9c9e-42b8-b204-6d22ff9ffbfd",
    vesselId: "nx--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(941) 401-1363",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "VersaClimber", "SkiErg", "Stationary Bikes", "Cardio Kickboxing Bags", "Jump Ropes", "Agility Hurdles", "Plate Loaded Machines", "Cable Single Arm Face Pull Machine", "Cable Bicep Curl Machine", "Cable Woodchopper Machine", "Tricep Extension Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Deadlift Machine", "Cable Face Pull Machine", "Yoga Mats", "TRX Suspension Trainers", "Sandbags", "Battle Ropes", "Stability Balls", "Speed Sleds", "Speed Bands", "Resistance Bands", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Spinning Instructor"],
    amenities: ["Hair Dryers", "Locker Rentals", "Body Composition Analysis", "Fitness Tracking", "Protein Shakes", "Group Fitness Classes", "Personal Training Sessions", "Nutrition Counseling", "Water Stations", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    id: "ad752cb0-a0e6-417e-8d54-e55d9c3843d5",
    vesselId: "my-ketchikan-voyager",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the MY Ketchikan Voyager. Stay active and healthy while cruising the waters near Ketchikan with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(490) 837-3873",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Jump Ropes", "Arc Trainers", "Cardio Kettlebells", "Cardio Gliders", "Rowing Machines", "VersaClimber", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Pallof Press Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Deadlift Machine", "Cable Face Pull Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Shoulder Press Machine", "Speed Harnesses", "Sandbags", "TRX Suspension Trainers", "Agility Markers", "Sledgehammers", "Slam Balls", "Compression Therapy", "CrossFit Equipment"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor"],
    amenities: ["Workout Programs", "Fitness Consultations", "Protein Shakes", "Toiletries", "Personal Training Sessions", "Nutrition Counseling", "Equipment Orientation", "Water Stations", "Locker Rentals"],
    is24Hours: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "6d47a868-9ab8-4592-bb4b-db06ae70bd67",
    vesselId: "sy--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Ketchikan. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(805) 683-6492",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Cardio Kettlebells", "SkiErg", "Cardio Punching Bags", "StairMaster", "VersaClimber", "Recumbent Bikes", "Boxing Equipment", "Cable Lunge Machine", "Chest Press Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Smith Machine", "Bench Press", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Upright Row Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Calf Raise Machine", "Speed Parachutes", "Agility Markers", "Speed Sleds", "Kettlebells", "Speed Cords", "Medicine Balls", "Spinning Bikes", "Yoga Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Protein Shakes", "Water Stations", "Personal Training Sessions", "Audio/Visual Entertainment", "Hair Dryers", "Fresh Fruit Bar", "Fitness Tracking", "Locker Rentals", "Fitness Consultations", "Workout Programs", "Smoothie Bar"],
    is24Hours: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "49dae06b-2fb9-4603-9613-5becaf58e245",
    vesselId: "hms-the--mariner",
    name: "Ketchikan Fitness Center",
    description: "Ketchikan Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(122) 653-9592",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Recumbent Bikes", "Treadmills", "Agility Hurdles", "Jump Ropes", "Cardio Step Platforms", "Cardio Medicine Balls", "Arc Trainers", "Punching Bags", "Boxing Equipment", "Cable Single Arm Deadlift Machine", "Cable Squat Machine", "Cable Upright Row Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Front Raise Machine", "Smith Machine", "Cable Single Arm Face Pull Machine", "Back Extension Machine", "Bench Press", "Cable Single Arm Single Leg Calf Raise Machine", "Sandbags", "Agility Dots", "Kettlebells", "Speed Bands", "Tire Flips", "Speed Ladders", "Recovery Tools", "Yoga Straps"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor", "Corrective Exercise Specialist", "Youth Fitness Specialist"],
    amenities: ["Fitness Consultations", "Workout Programs", "Personal Training Sessions", "Body Composition Analysis", "Protein Shakes", "Fresh Fruit Bar", "Towel Service", "Group Fitness Classes"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "fa21c90b-ad5d-4a84-8c53-94d804522511",
    vesselId: "ps--gale",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(297) 540-5079",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Battle Ropes", "Spin Bikes", "Cardio Gliders", "Stationary Bikes", "Arc Trainers", "Cable Single Arm Plank Machine", "Cable Single Arm Calf Raise Machine", "Smith Machine", "Leg Press Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Kettlebells", "Medicine Balls", "Agility Hurdles", "Yoga Mats", "Sledgehammers", "Agility Markers", "Speed Resistors", "HydroMassage Beds", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Group Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Protein Shakes", "Fresh Fruit Bar", "Group Fitness Classes", "Hair Dryers", "Equipment Orientation", "Nutrition Counseling", "Fitness Consultations", "Workout Programs", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "f7e6539a-3c3c-4a86-860f-957db027adae",
    vesselId: "ly--explorer",
    name: "Ketchikan Fitness Center",
    description: "Welcome to Ketchikan Fitness Center, your premier wellness destination aboard the LY  Explorer. Stay active and healthy while cruising the waters near Ketchikan with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(775) 119-6689",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Rowing Machines", "Cardio Kettlebells", "Elliptical Machines", "Stationary Bikes", "Cardio Gliders", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Chest Press Machine", "Plate Loaded Machines", "Chest Press Machine", "Leg Extension Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Reverse Fly Machine", "Cable Back Extension Machine", "Weight Machines", "Cable Deadlift Machine", "Cable Glute Kickback Machine", "Cable Single Arm Glute Kickback Machine", "Battle Ropes", "TRX Suspension Trainers", "Speed Bands", "Medicine Balls", "Slam Balls", "Speed Resistors", "Speed Parachutes", "Barre Equipment", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Workout Programs", "Smoothie Bar", "Body Composition Analysis", "Nutrition Counseling", "Hair Dryers", "Audio/Visual Entertainment", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "656109db-6f5c-4983-b228-9ae60a79c131",
    vesselId: "ss-ketchikan-voyager",
    name: "Ketchikan Fitness Center",
    description: "Ketchikan Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(719) 985-1166",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Treadmills", "Elliptical Machines", "Air Bikes", "Stationary Bikes", "Rowing Machines", "Recumbent Bikes", "StairMaster", "VersaClimber", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Woodchopper Machine", "Cable Deadlift Machine", "Cable Single Arm Face Pull Machine", "Leg Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Squat Machine", "BOSU Balls", "Speed Sleds", "Agility Dots", "Speed Resistors", "Agility Markers", "Yoga Blocks", "Aqua Fitness Equipment", "Dance Fitness Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Locker Rentals", "Hair Dryers", "Towel Service", "Fresh Fruit Bar", "Workout Programs", "Equipment Orientation", "Water Stations", "Personal Training Sessions", "Fitness Consultations", "Toiletries", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "826d9649-70be-4e8f-90fd-03f6c3522597",
    vesselId: "ps--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(865) 860-3500",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Recumbent Bikes", "Punching Bags", "Battle Ropes", "Air Bikes", "Cardio Step Platforms", "Treadmills", "Smith Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Leg Curl Machine", "Cable Single Arm Shoulder Press Machine", "Dumbbells", "Weight Machines", "Cable Squat Machine", "Power Rack", "Bench Press", "Balance Boards", "Medicine Balls", "Agility Ladders", "Jump Boxes", "Speed Bands", "Spinning Bikes"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength and Conditioning Coach"],
    amenities: ["Nutrition Counseling", "Audio/Visual Entertainment", "Hair Dryers", "Toiletries", "Body Composition Analysis", "Fitness Consultations", "Towel Service", "Locker Rentals", "Water Stations", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
    id: "979e35bd-473e-456e-9e27-9ddf0cb2d7fb",
    vesselId: "cs-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Ketchikan. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(680) 254-3545",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Recumbent Bikes", "Cardio Gliders", "Arc Trainers", "Cardio Resistance Bands", "Stationary Bikes", "SkiErg", "Cardio Step Platforms", "Cardio Kickboxing Bags", "VersaClimber", "Leg Extension Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Glute Kickback Machine", "Cable Calf Raise Machine", "Cable Shrug Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Functional Trainers", "BOSU Balls", "Speed Hurdles", "Stability Balls", "Sandbags", "TRX Suspension Trainers", "Speed Cones", "Kickboxing Equipment", "Pilates Reformers"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength Training Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Equipment Orientation", "Fitness Consultations", "Workout Programs", "Group Fitness Classes", "Protein Shakes", "Nutrition Counseling", "Water Stations", "Audio/Visual Entertainment", "Hair Dryers"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "b26ee57b-a3f7-4da8-93db-f89e4d586def",
    vesselId: "ps--gale",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the PS  Gale. Stay active and healthy while cruising the waters near Ketchikan with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(949) 331-7043",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Punching Bags", "Cardio Step Platforms", "Jump Ropes", "VersaClimber", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Lateral Raise Machine", "Weight Machines", "Bench Press", "Free Weights", "Cable Single Arm Back Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Leg Extension Machine", "Back Extension Machine", "Plate Loaded Machines", "Smith Machine", "Cable Face Pull Machine", "Speed Parachutes", "Agility Dots", "Kettlebells", "Stability Balls", "Agility Poles", "Medicine Balls", "Pilates Reformers", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Nutrition Counseling", "Smoothie Bar", "Locker Rentals", "Personal Training Sessions", "Fitness Tracking", "Water Stations", "Audio/Visual Entertainment", "Equipment Orientation", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
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
      }
    ],
    isPopular: false
  }
];
