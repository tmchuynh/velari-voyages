// Fitness center venues data for Oslo
// This file contains fitness center and wellness facility information for cruise vessels operating from Oslo
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const osloFitnessCenters: FitnessCenter[] = [
  {
    id: "3d7eacf3-af71-46f7-9b4c-93e97ebdbc04",
    vesselId: "sv--explorer",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(892) 269-3357",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "SkiErg", "Arc Trainers", "Recumbent Bikes", "Punching Bags", "Jump Ropes", "Cardio Kettlebells", "Air Bikes", "Agility Hurdles", "Cable Single Arm Lunge Machine", "Smith Machines", "Barbells", "Cable Single Arm Back Extension Machine", "Cable Bicep Curl Machine", "Chest Press Machine", "Seated Row Machine", "Bicep Curl Machine", "Cable Tricep Pushdown Machine", "Kettlebells", "Agility Dots", "Speed Sleds", "Balance Boards", "Speed Cones", "Speed Bands", "Slam Balls", "TRX Suspension Trainers", "Yoga Wheels"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Senior Fitness Specialist"],
    amenities: ["Towel Service", "Water Stations", "Audio/Visual Entertainment", "Hair Dryers", "Body Composition Analysis", "Personal Training Sessions", "Protein Shakes", "Nutrition Counseling", "Fitness Consultations", "Group Fitness Classes", "Workout Programs"],
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
    hasFitnessAssessments: false,
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
    id: "97cda062-dfca-4adf-9842-c547764b9224",
    vesselId: "cs-oslo-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(448) 277-6068",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "StairMaster", "Elliptical Machines", "Cardio Kettlebells", "Agility Hurdles", "Air Bikes", "Treadmills", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Lunge Machine", "Bench Press", "Lat Pulldown", "Cable Calf Raise Machine", "Tricep Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Pull-up Station", "Cable Single Arm Single Leg Squat Machine", "Back Extension Machine", "Cable Deadlift Machine", "Stability Balls", "Plyo Boxes", "Speed Hurdles", "TRX Suspension Trainers", "Sandbags", "Functional Training Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Toiletries", "Fitness Tracking", "Locker Rentals", "Hair Dryers", "Nutrition Counseling", "Group Fitness Classes", "Fresh Fruit Bar", "Personal Training Sessions", "Towel Service", "Body Composition Analysis", "Smoothie Bar"],
    is24Hours: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "e9a9aeb5-a0e3-46b6-9ddf-763a4874cf68",
    vesselId: "hms--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(862) 201-5720",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Air Bikes", "Cardio Step Platforms", "VersaClimber", "Battle Ropes", "StairMaster", "Arc Trainers", "Spin Bikes", "Cardio Resistance Bands", "Treadmills", "Cable Single Arm Single Leg Shrug Machine", "Free Weights", "Cable Face Pull Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Reverse Fly Machine", "Functional Trainers", "Back Extension Machine", "Cable Calf Raise Machine", "BOSU Balls", "Kettlebells", "Agility Dots", "Jump Boxes", "Medicine Balls", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Nutrition Counseling", "Fitness Consultations", "Workout Programs", "Fresh Fruit Bar", "Group Fitness Classes", "Hair Dryers", "Smoothie Bar", "Personal Training Sessions", "Locker Rentals", "Toiletries", "Water Stations", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "7d59b30f-2c97-4fe2-b31d-5f74f2056eec",
    vesselId: "hms-the--mariner",
    name: "HMS The  Mariner Fitness Center",
    description: "Welcome to HMS The  Mariner Fitness Center, your premier wellness destination aboard the HMS The  Mariner. Stay active and healthy while cruising the waters near Oslo with our state-of-the-art fitness facilities.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(246) 198-6708",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Punching Bags", "StairMaster", "Treadmills", "Cardio Punching Bags", "Cardio Resistance Bands", "Rowing Machines", "Elliptical Machines", "Spin Bikes", "Cable Single Arm Single Leg Lunge Machine", "Cable Back Extension Machine", "Cable Machines", "Cable Single Arm Single Leg Deadlift Machine", "Dumbbells", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Plank Machine", "Kettlebells", "Stability Balls", "Jump Boxes", "Agility Hurdles", "TRX Suspension Trainers", "Dance Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor", "Spinning Instructor"],
    amenities: ["Fitness Tracking", "Protein Shakes", "Group Fitness Classes", "Equipment Orientation", "Towel Service", "Personal Training Sessions", "Nutrition Counseling", "Fresh Fruit Bar", "Fitness Consultations", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "f93ed434-76e7-489a-8090-66fe69261ebc",
    vesselId: "ps--gale",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the PS  Gale. Stay active and healthy while cruising the waters near Oslo with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(324) 537-8810",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Punching Bags", "Cardio Step Platforms", "Agility Hurdles", "Stationary Bikes", "Cardio Resistance Bands", "Spin Bikes", "Air Bikes", "Rowing Machines", "Elliptical Machines", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Leg Press Machine", "Cable Single Arm Reverse Fly Machine", "Bench Press", "Cable Glute Kickback Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Shrug Machine", "Agility Markers", "Balance Boards", "Weighted Vests", "Speed Hurdles", "Agility Cones", "Resistance Bands", "Jump Boxes", "Speed Bands", "Dance Fitness Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Pilates Instructor", "Yoga Instructor"],
    amenities: ["Protein Shakes", "Fresh Fruit Bar", "Water Stations", "Locker Rentals", "Equipment Orientation", "Fitness Tracking", "Towel Service", "Workout Programs", "Body Composition Analysis", "Audio/Visual Entertainment", "Personal Training Sessions", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "ef5c91ce-3b41-45d6-a487-c7a23073167a",
    vesselId: "ly--explorer",
    name: "LY  Explorer Fitness Center",
    description: "LY  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Oslo. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(803) 324-7496",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Punching Bags", "Treadmills", "Cardio Gliders", "Spin Bikes", "Recumbent Bikes", "Air Bikes", "Cardio Punching Bags", "Cardio Kickboxing Bags", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Free Weights", "Cable Single Arm Lunge Machine", "Dumbbells", "Calf Raise Machine", "Cable Single Arm Pallof Press Machine", "Abdominal Crunch Machine", "Speed Hurdles", "Speed Resistors", "Speed Cones", "Sandbags", "Agility Poles", "Agility Ladders", "Kettlebells", "Infrared Sauna"],
    personalTrainers: ["Youth Fitness Specialist", "Strength and Conditioning Coach", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Personal Training Sessions", "Smoothie Bar", "Nutrition Counseling", "Locker Rentals", "Water Stations", "Workout Programs", "Fitness Tracking", "Towel Service", "Hair Dryers", "Toiletries", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "683d84f8-80ce-457c-bf68-b112f9419178",
    vesselId: "rv-oslo-voyager",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the RV Oslo Voyager. Stay active and healthy while cruising the waters near Oslo with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(252) 270-9090",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Stationary Bikes", "Rowing Machines", "Cardio Kettlebells", "Cardio Step Platforms", "Treadmills", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Shoulder Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Weighted Vests", "Agility Markers", "Foam Rollers", "Speed Cords", "Speed Resistors", "Stability Balls", "HydroMassage Beds"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Water Stations", "Nutrition Counseling", "Toiletries", "Towel Service", "Audio/Visual Entertainment", "Fitness Consultations", "Hair Dryers", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    id: "f021d1de-f787-4cbf-aad3-478b03996534",
    vesselId: "my--of-the-deep",
    name: "Oslo Fitness Center",
    description: "Discover wellness at sea with Oslo Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(875) 373-7694",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Boxing Equipment", "Battle Ropes", "VersaClimber", "Cardio Step Platforms", "StairMaster", "Cable Single Arm Calf Raise Machine", "Free Weights", "Leg Curl Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Woodchopper Machine", "Dumbbells", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Shrug Machine", "Agility Dots", "Slam Balls", "Resistance Bands", "Speed Bands", "Agility Ladders", "Foam Rollers", "Speed Hurdles", "Speed Parachutes", "Kickboxing Equipment", "CrossFit Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor"],
    amenities: ["Fresh Fruit Bar", "Locker Rentals", "Audio/Visual Entertainment", "Towel Service", "Workout Programs", "Smoothie Bar", "Toiletries", "Nutrition Counseling", "Water Stations", "Protein Shakes", "Body Composition Analysis", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "60dcf173-c317-40df-a396-5c4fb125699c",
    vesselId: "ts-the--mariner",
    name: "TS The  Mariner Fitness Center",
    description: "Discover wellness at sea with TS The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(777) 965-8904",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Arc Trainers", "Jump Ropes", "Cardio Kickboxing Bags", "StairMaster", "Cardio Resistance Bands", "Cardio Step Platforms", "Cable Single Arm Russian Twist Machine", "Leg Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Back Extension Machine", "Bicep Curl Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Shoulder Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Squat Machine", "Sledgehammers", "Foam Rollers", "Kettlebells", "TRX Suspension Trainers", "Yoga Mats", "Speed Bands", "Infrared Sauna", "Spinning Bikes", "CrossFit Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Towel Service", "Water Stations", "Audio/Visual Entertainment", "Locker Rentals", "Body Composition Analysis", "Personal Training Sessions", "Fitness Consultations", "Equipment Orientation", "Smoothie Bar", "Nutrition Counseling", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "0ab8b4ac-d9ee-4659-b54b-1fc25e82f0c3",
    vesselId: "ly--gale",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(787) 309-1233",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Resistance Bands", "Punching Bags", "SkiErg", "Elliptical Machines", "Cardio Gliders", "Boxing Equipment", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Leg Extension Machine", "Cable Single Arm Upright Row Machine", "Smith Machines", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Calf Raise Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Chest Press Machine", "Foam Rollers", "Speed Bands", "Plyo Boxes", "Sandbags", "Kettlebells", "Agility Markers", "Agility Cones", "Recovery Tools", "Infrared Sauna", "HydroMassage Beds"],
    personalTrainers: ["Aqua Fitness Instructor", "Spinning Instructor"],
    amenities: ["Group Fitness Classes", "Toiletries", "Hair Dryers", "Fitness Consultations", "Locker Rentals", "Workout Programs", "Personal Training Sessions", "Water Stations", "Fitness Tracking", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  }
];
