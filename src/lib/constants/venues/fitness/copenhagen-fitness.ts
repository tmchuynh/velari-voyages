// Fitness center venues data for Copenhagen
// This file contains fitness center and wellness facility information for cruise vessels operating from Copenhagen
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const copenhagenFitnessCenters: FitnessCenter[] = [
  {
    id: "6e5dff96-e0d1-4c00-8a4f-c8378afe0722",
    vesselId: "nb--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(735) 655-1710",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Cardio Medicine Balls", "Punching Bags", "Battle Ropes", "SkiErg", "Jump Ropes", "Arc Trainers", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Lat Pulldown", "Cable Single Arm Chest Press Machine", "Cable Lateral Raise Machine", "Cable Deadlift Machine", "Chest Press Machine", "Cable Calf Raise Machine", "Bench Press", "Resistance Bands", "Speed Harnesses", "Stability Balls", "Agility Cones", "Yoga Mats", "Kickboxing Equipment"],
    personalTrainers: ["Spinning Instructor", "Strength Training Specialist"],
    amenities: ["Body Composition Analysis", "Fitness Consultations", "Group Fitness Classes", "Equipment Orientation", "Audio/Visual Entertainment", "Locker Rentals", "Fresh Fruit Bar", "Nutrition Counseling", "Protein Shakes"],
    is24Hours: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "c5ac9371-6cd3-471b-a833-d1fb21cb09be",
    vesselId: "rv-copenhagen-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Copenhagen. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(439) 311-7567",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Elliptical Machines", "Spin Bikes", "Cardio Gliders", "SkiErg", "Cardio Kettlebells", "Cable Reverse Fly Machine", "Abdominal Crunch Machine", "Cable Tricep Pushdown Machine", "Cable Hip Thrust Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Plank Machine", "Multi-Gym Systems", "Functional Trainers", "Cable Machines", "Cable Single Arm Single Leg Glute Kickback Machine", "TRX Suspension Trainers", "Battle Ropes", "Speed Cords", "Tire Flips", "Stability Balls", "Balance Boards", "Speed Bands", "Aqua Fitness Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Locker Rentals", "Fitness Tracking", "Protein Shakes", "Equipment Orientation", "Body Composition Analysis", "Fitness Consultations", "Group Fitness Classes", "Hair Dryers", "Toiletries"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "60d2ea55-06dc-4944-a56c-f28e0dd5e785",
    vesselId: "hms--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the HMS  of the Deep. Stay active and healthy while cruising the waters near Copenhagen with our state-of-the-art fitness facilities. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(843) 502-9243",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Elliptical Machines", "VersaClimber", "Boxing Equipment", "Recumbent Bikes", "Cardio Step Platforms", "Air Bikes", "Cable Single Arm Single Leg Pallof Press Machine", "Functional Trainers", "Back Extension Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Machines", "Cable Tricep Pushdown Machine", "Leg Press Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Speed Resistors", "TRX Suspension Trainers", "Speed Parachutes", "Jump Boxes", "Foam Rollers", "Dance Fitness Equipment", "Kickboxing Equipment"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Group Fitness Classes", "Equipment Orientation", "Water Stations", "Nutrition Counseling", "Toiletries", "Fresh Fruit Bar", "Body Composition Analysis", "Towel Service", "Locker Rentals", "Personal Training Sessions", "Smoothie Bar"],
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
    hasFitnessAssessments: false,
    hasChildcareServices: true,
    faqs: [
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "8b8539a4-c2d8-4927-9872-7a0ed67e2bea",
    vesselId: "ms-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(370) 331-3059",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Resistance Bands", "Treadmills", "Spin Bikes", "Elliptical Machines", "Boxing Equipment", "Battle Ropes", "Back Extension Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Bicep Curl Machine", "Cable Deadlift Machine", "Cable Single Arm Calf Raise Machine", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Glute Kickback Machine", "Agility Dots", "Sledgehammers", "Weighted Vests", "Agility Hurdles", "BOSU Balls", "Medicine Balls", "Pilates Reformers", "Barre Equipment", "Yoga Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Strength Training Specialist"],
    amenities: ["Towel Service", "Water Stations", "Personal Training Sessions", "Protein Shakes", "Toiletries", "Workout Programs", "Fresh Fruit Bar", "Nutrition Counseling"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "d44959ae-4836-49c4-99ee-adadb4dd47c9",
    vesselId: "cs--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Copenhagen. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(164) 927-6743",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "SkiErg", "Stationary Bikes", "Arc Trainers", "Air Bikes", "Jump Ropes", "Cardio Kickboxing Bags", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Lateral Raise Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Upright Row Machine", "Seated Row Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "BOSU Balls", "Resistance Bands", "Speed Sleds", "Sledgehammers", "Plyo Boxes", "Weighted Vests", "Balance Boards", "Massage Chairs", "CrossFit Equipment", "Kickboxing Equipment"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach"],
    amenities: ["Group Fitness Classes", "Locker Rentals", "Nutrition Counseling", "Toiletries", "Fitness Consultations", "Fitness Tracking", "Body Composition Analysis", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "810c56a7-2736-4480-ab6a-391d3b5d55df",
    vesselId: "ms--explorer",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(349) 244-3032",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "StairMaster", "Cardio Step Platforms", "Battle Ropes", "Jump Ropes", "Boxing Equipment", "Cardio Kickboxing Bags", "Cardio Punching Bags", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Squat Machine", "Free Weights", "Cable Plank Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Hip Thrust Machine", "Resistance Bands", "Sandbags", "Agility Markers", "BOSU Balls", "Slam Balls", "Weighted Vests", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Water Stations", "Towel Service", "Toiletries", "Fresh Fruit Bar", "Hair Dryers", "Equipment Orientation", "Fitness Consultations", "Smoothie Bar"],
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
    hasFitnessAssessments: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "980ccba8-8a63-479f-ae07-ae3459c16392",
    vesselId: "rms-copenhagen-voyager",
    name: "Copenhagen Fitness Center",
    description: "Welcome to Copenhagen Fitness Center, your premier wellness destination aboard the RMS Copenhagen Voyager. Stay active and healthy while cruising the waters near Copenhagen with our state-of-the-art fitness facilities. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(711) 981-6297",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Recumbent Bikes", "Stationary Bikes", "Arc Trainers", "Agility Hurdles", "Cardio Gliders", "Battle Ropes", "Cardio Resistance Bands", "Boxing Equipment", "Cardio Punching Bags", "Free Weights", "Cable Russian Twist Machine", "Back Extension Machine", "Cable Hip Thrust Machine", "Dumbbells", "Tricep Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Smith Machine", "Abdominal Crunch Machine", "Resistance Bands", "Kettlebells", "Speed Cords", "Agility Ladders", "Agility Poles", "Barre Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Towel Service", "Smoothie Bar", "Water Stations", "Equipment Orientation", "Body Composition Analysis", "Toiletries", "Personal Training Sessions", "Fitness Tracking", "Workout Programs", "Protein Shakes", "Group Fitness Classes", "Audio/Visual Entertainment"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "cd5fe163-b97f-4616-beca-3bffe8d886e0",
    vesselId: "ts--of-the-deep",
    name: "TS  of the Deep Fitness Center",
    description: "Welcome to TS  of the Deep Fitness Center, your premier wellness destination aboard the TS  of the Deep. Stay active and healthy while cruising the waters near Copenhagen with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(342) 575-1562",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Recumbent Bikes", "Cardio Resistance Bands", "Cardio Medicine Balls", "Cardio Gliders", "Treadmills", "Cardio Step Platforms", "Punching Bags", "Cardio Kettlebells", "Cable Single Arm Single Leg Tricep Extension Machine", "Bicep Curl Machine", "Weight Machines", "Smith Machine", "Cable Face Pull Machine", "Smith Machines", "Cable Single Arm Shoulder Press Machine", "Leg Press Machine", "Cable Glute Kickback Machine", "Leg Curl Machine", "Cable Calf Raise Machine", "TRX Suspension Trainers", "Agility Dots", "Battle Ropes", "Medicine Balls", "Speed Bands", "CrossFit Equipment", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Workout Programs", "Fresh Fruit Bar", "Locker Rentals", "Nutrition Counseling", "Hair Dryers", "Smoothie Bar", "Towel Service", "Equipment Orientation"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    isPopular: false
  },
  {
    id: "493576de-87a8-4518-a94f-d00c9ea56582",
    vesselId: "sy-the--mariner",
    name: "SY The  Mariner Fitness Center",
    description: "SY The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(447) 884-7532",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Punching Bags", "Spin Bikes", "Stationary Bikes", "Treadmills", "Cardio Kettlebells", "Recumbent Bikes", "Cardio Gliders", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Machines", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Front Raise Machine", "Back Extension Machine", "Speed Ladders", "Speed Sleds", "Speed Cones", "TRX Suspension Trainers", "Slam Balls", "Stability Balls", "Stretching Stations", "Kickboxing Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Toiletries", "Fitness Tracking", "Towel Service", "Hair Dryers", "Body Composition Analysis", "Workout Programs", "Fresh Fruit Bar", "Nutrition Counseling", "Water Stations", "Smoothie Bar", "Audio/Visual Entertainment"],
    is24Hours: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    id: "33d31328-e2f3-4462-b970-c07905332336",
    vesselId: "ts--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(361) 993-6045",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Punching Bags", "Recumbent Bikes", "Stationary Bikes", "Treadmills", "Cardio Kickboxing Bags", "Rowing Machines", "VersaClimber", "Cable Single Arm Single Leg Bicep Curl Machine", "Chest Press Machine", "Cable Single Arm Ab Crunch Machine", "Cable Glute Kickback Machine", "Weight Machines", "Cable Back Extension Machine", "Cable Calf Raise Machine", "Shoulder Press Machine", "Lat Pulldown", "Cable Woodchopper Machine", "Leg Press Machine", "Cable Reverse Fly Machine", "Medicine Balls", "Speed Cones", "TRX Suspension Trainers", "Kettlebells", "Agility Hurdles", "Plyo Boxes", "Agility Ladders", "Boxing Equipment", "Massage Chairs"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Water Stations", "Nutrition Counseling", "Hair Dryers", "Fresh Fruit Bar", "Protein Shakes", "Workout Programs", "Fitness Tracking", "Audio/Visual Entertainment", "Equipment Orientation"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  }
];
