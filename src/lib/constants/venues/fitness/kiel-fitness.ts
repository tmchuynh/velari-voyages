// Fitness center venues data for Kiel
// This file contains fitness center and wellness facility information for cruise vessels operating from Kiel
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const kielFitnessCenters: FitnessCenter[] = [
  {
    id: "2547ab02-4c17-42c3-84e1-b1ec64d69e7c",
    vesselId: "sv--explorer",
    name: "SV  Explorer Fitness Center",
    description: "Discover wellness at sea with SV  Explorer Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(195) 668-8579",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Spin Bikes", "Rowing Machines", "Cardio Punching Bags", "Battle Ropes", "Cardio Gliders", "Cardio Kettlebells", "Recumbent Bikes", "Cardio Kickboxing Bags", "Shoulder Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Bench Press", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Shrug Machine", "Weight Machines", "Smith Machine", "Cable Single Arm Woodchopper Machine", "Barbells", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Pull-up Station", "Speed Ladders", "Agility Ladders", "Kettlebells", "Agility Cones", "Foam Rollers", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Senior Fitness Specialist", "Group Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Workout Programs", "Equipment Orientation", "Body Composition Analysis", "Fitness Tracking", "Group Fitness Classes", "Towel Service", "Toiletries", "Audio/Visual Entertainment", "Smoothie Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "b8931d27-1de4-477a-8a80-4a6045f2a630",
    vesselId: "ms-kiel-voyager",
    name: "Kiel Fitness Center",
    description: "Welcome to Kiel Fitness Center, your premier wellness destination aboard the MS Kiel Voyager. Stay active and healthy while cruising the waters near Kiel with our state-of-the-art fitness facilities.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(789) 897-1331",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "VersaClimber", "Cardio Kettlebells", "Stationary Bikes", "Recumbent Bikes", "Boxing Equipment", "Cardio Kickboxing Bags", "Punching Bags", "Chest Fly Machine", "Free Weights", "Cable Single Arm Single Leg Reverse Fly Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Plate Loaded Machines", "Cable Single Arm Row Machine", "Multi-Gym Systems", "Bench Press", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Calf Raise Machine", "BOSU Balls", "Sandbags", "Speed Ladders", "Speed Resistors", "Resistance Bands", "TRX Suspension Trainers", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Body Composition Analysis", "Workout Programs", "Nutrition Counseling", "Hair Dryers", "Group Fitness Classes", "Fresh Fruit Bar", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
    id: "bc38d8f2-7544-4928-99f7-a8f054fa7397",
    vesselId: "nx--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Kiel. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(839) 477-4232",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "VersaClimber", "Air Bikes", "Arc Trainers", "Cardio Kettlebells", "Stationary Bikes", "Cable Single Arm Single Leg Upright Row Machine", "Lat Pulldown", "Cable Single Arm Single Leg Lateral Raise Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Bicep Curl Machine", "BOSU Balls", "Speed Sleds", "Medicine Balls", "Weighted Vests", "Sandbags", "Cryotherapy Chambers"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Certified Personal Trainer", "Strength and Conditioning Coach"],
    amenities: ["Personal Training Sessions", "Workout Programs", "Equipment Orientation", "Hair Dryers", "Nutrition Counseling", "Protein Shakes", "Smoothie Bar", "Water Stations", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "d8202200-a66c-44c6-9e3d-491f118b28b0",
    vesselId: "hms-the--mariner",
    name: "HMS The  Mariner Fitness Center",
    description: "Discover wellness at sea with HMS The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(367) 945-6345",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "VersaClimber", "Air Bikes", "Cardio Step Platforms", "Rowing Machines", "Elliptical Machines", "StairMaster", "Battle Ropes", "Cable Single Arm Single Leg Lunge Machine", "Leg Press Machine", "Smith Machine", "Cable Single Arm Single Leg Front Raise Machine", "Plate Loaded Machines", "Cable Tricep Pushdown Machine", "Cable Ab Crunch Machine", "Smith Machines", "Cable Reverse Fly Machine", "Cable Row Machine", "Cable Plank Machine", "Speed Bands", "Slam Balls", "Speed Ladders", "Agility Ladders", "Agility Markers", "Sledgehammers", "Agility Hurdles", "Resistance Bands", "Massage Chairs", "Aqua Fitness Equipment", "Yoga Straps"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Senior Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Body Composition Analysis", "Personal Training Sessions", "Water Stations", "Smoothie Bar", "Audio/Visual Entertainment", "Locker Rentals", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "7b22277a-2e23-4d6a-aa51-806d1e06095b",
    vesselId: "sy--gale",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the SY  Gale. Stay active and healthy while cruising the waters near Kiel with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(723) 181-3069",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Air Bikes", "Recumbent Bikes", "Treadmills", "Elliptical Machines", "Arc Trainers", "Boxing Equipment", "Cardio Step Platforms", "Agility Hurdles", "StairMaster", "Cable Single Arm Glute Kickback Machine", "Seated Row Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Upright Row Machine", "Chest Fly Machine", "Plate Loaded Machines", "Lat Pulldown", "Cable Back Extension Machine", "Bicep Curl Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Agility Ladders", "Speed Ladders", "Foam Rollers", "Yoga Mats", "Resistance Bands", "Stability Balls", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Yoga Instructor"],
    amenities: ["Water Stations", "Hair Dryers", "Audio/Visual Entertainment", "Workout Programs", "Nutrition Counseling", "Toiletries", "Towel Service", "Personal Training Sessions", "Fitness Tracking", "Group Fitness Classes", "Body Composition Analysis", "Fitness Consultations"],
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
    hasChildcareServices: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "f567c7a7-c935-41b6-b17e-d5dcb735f1b8",
    vesselId: "nx--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Kiel. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(381) 723-8886",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Treadmills", "Cardio Kettlebells", "Cardio Medicine Balls", "Elliptical Machines", "Cardio Gliders", "Cardio Kickboxing Bags", "Cardio Step Platforms", "Cable Single Arm Tricep Extension Machine", "Cable Face Pull Machine", "Leg Press Machine", "Cable Single Arm Russian Twist Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Face Pull Machine", "Power Rack", "Cable Single Arm Row Machine", "TRX Suspension Trainers", "Speed Cones", "Foam Rollers", "Speed Parachutes", "Agility Markers", "Balance Boards", "Tire Flips", "Stability Balls", "Dance Fitness Equipment", "Yoga Bolsters", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Strength Training Specialist", "Senior Fitness Specialist"],
    amenities: ["Body Composition Analysis", "Group Fitness Classes", "Equipment Orientation", "Smoothie Bar", "Personal Training Sessions", "Hair Dryers", "Water Stations", "Workout Programs", "Toiletries", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "2c6517ac-8c56-47ec-87c8-19f9b3c6594e",
    vesselId: "ts-kiel-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Kiel. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(337) 828-4309",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Punching Bags", "Stationary Bikes", "Cardio Kickboxing Bags", "Battle Ropes", "Boxing Equipment", "Air Bikes", "Cardio Punching Bags", "Leg Extension Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Shrug Machine", "Abdominal Crunch Machine", "Cable Single Arm Tricep Extension Machine", "Weight Machines", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Woodchopper Machine", "TRX Suspension Trainers", "Speed Sleds", "Speed Resistors", "Speed Harnesses", "Resistance Bands", "Jump Boxes", "Yoga Straps", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Locker Rentals", "Hair Dryers", "Workout Programs", "Water Stations", "Personal Training Sessions", "Equipment Orientation", "Fitness Tracking", "Smoothie Bar"],
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
    hasFitnessAssessments: false,
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
    isPopular: true
  },
  {
    id: "a753271c-330c-4850-bdcb-3da8f7806d80",
    vesselId: "nx--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Kiel. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(651) 553-9663",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Arc Trainers", "Boxing Equipment", "Cardio Kickboxing Bags", "Treadmills", "Rowing Machines", "Elliptical Machines", "Cardio Gliders", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Back Extension Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Russian Twist Machine", "Smith Machine", "Seated Row Machine", "Cable Single Arm Single Leg Squat Machine", "Speed Cones", "Agility Dots", "Medicine Balls", "Speed Cords", "Resistance Bands", "Massage Chairs", "Stretching Stations", "Yoga Straps", "Dance Fitness Equipment", "Infrared Therapy", "Yoga Blocks"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Spinning Instructor", "Senior Fitness Specialist"],
    amenities: ["Hair Dryers", "Fitness Consultations", "Audio/Visual Entertainment", "Nutrition Counseling", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Towel Service", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "099787ce-7ee5-448b-bd9d-e5db2ace4b9d",
    vesselId: "sv-the--mariner",
    name: "SV The  Mariner Fitness Center",
    description: "SV The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(256) 468-1938",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Treadmills", "Elliptical Machines", "Spin Bikes", "Cardio Step Platforms", "Cardio Punching Bags", "Stationary Bikes", "Chest Press Machine", "Cable Back Extension Machine", "Leg Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Face Pull Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Upright Row Machine", "Cable Pallof Press Machine", "Cable Single Arm Calf Raise Machine", "Cable Squat Machine", "Medicine Balls", "Agility Markers", "TRX Suspension Trainers", "Speed Ladders", "Speed Sleds", "Compression Therapy"],
    personalTrainers: ["Youth Fitness Specialist", "Senior Fitness Specialist", "Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Water Stations", "Smoothie Bar", "Fitness Tracking", "Protein Shakes", "Towel Service", "Toiletries", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "1d4e8c76-6b3c-45ee-8a52-88121417e524",
    vesselId: "mv--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(398) 418-8623",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Punching Bags", "Elliptical Machines", "SkiErg", "Boxing Equipment", "Cardio Medicine Balls", "Cardio Step Platforms", "Arc Trainers", "Air Bikes", "Cable Ab Crunch Machine", "Cable Single Arm Calf Raise Machine", "Back Extension Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Plank Machine", "Weight Machines", "Cable Single Arm Face Pull Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Agility Dots", "Jump Boxes", "Plyo Boxes", "Stability Balls", "Agility Ladders", "Slam Balls", "Weighted Vests", "HydroMassage Beds", "Dance Fitness Equipment", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Spinning Instructor", "Senior Fitness Specialist"],
    amenities: ["Towel Service", "Water Stations", "Personal Training Sessions", "Hair Dryers", "Group Fitness Classes", "Fitness Consultations", "Fresh Fruit Bar", "Equipment Orientation", "Nutrition Counseling", "Fitness Tracking"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
      }
    ],
    isPopular: false
  }
];
