// Fitness center venues data for Juneau
// This file contains fitness center and wellness facility information for cruise vessels operating from Juneau
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const juneauFitnessCenters: FitnessCenter[] = [
  {
    id: "1a5e6711-2ffe-4169-b85e-be7663b7b835",
    vesselId: "hms--explorer",
    name: "HMS  Explorer Fitness Center",
    description: "HMS  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Juneau.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(475) 490-6040",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Kettlebells", "Punching Bags", "VersaClimber", "Cardio Gliders", "Battle Ropes", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "Cardio Resistance Bands", "Weight Machines", "Calf Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Face Pull Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Shrug Machine", "Functional Trainers", "Cable Single Arm Single Leg Glute Kickback Machine", "Speed Cones", "Medicine Balls", "Foam Rollers", "Agility Hurdles", "Speed Resistors", "Speed Hurdles", "Slam Balls", "Agility Dots", "Pilates Reformers", "Kickboxing Equipment"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Hair Dryers", "Fresh Fruit Bar", "Body Composition Analysis", "Smoothie Bar", "Locker Rentals", "Protein Shakes", "Toiletries", "Audio/Visual Entertainment", "Nutrition Counseling"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "1a034ed5-5453-4cdc-938e-c0693b2f7853",
    vesselId: "ly-juneau-voyager",
    name: "Juneau Fitness Center",
    description: "Juneau Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(569) 504-2825",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "Punching Bags", "VersaClimber", "Cardio Kickboxing Bags", "Boxing Equipment", "Cardio Kettlebells", "Battle Ropes", "Recumbent Bikes", "Air Bikes", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Reverse Fly Machine", "Functional Trainers", "Cable Face Pull Machine", "Shoulder Press Machine", "Cable Crossover Machine", "Free Weights", "Cable Glute Kickback Machine", "Dumbbells", "Smith Machine", "Leg Press Machine", "Sandbags", "Yoga Mats", "Speed Hurdles", "Agility Cones", "BOSU Balls", "Sledgehammers", "Speed Resistors", "Jump Boxes", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Equipment Orientation", "Towel Service", "Water Stations", "Toiletries", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Fitness Consultations", "Body Composition Analysis"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "9e173f5a-c393-4d6a-9c4f-430e3f62b1ac",
    vesselId: "rms--of-the-deep",
    name: "Juneau Fitness Center",
    description: "Welcome to Juneau Fitness Center, your premier wellness destination aboard the RMS  of the Deep. Stay active and healthy while cruising the waters near Juneau with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(992) 266-1292",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Agility Hurdles", "Cardio Gliders", "SkiErg", "Spin Bikes", "Battle Ropes", "Jump Ropes", "Rowing Machines", "Cardio Step Platforms", "Free Weights", "Smith Machine", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Lateral Raise Machine", "Leg Press Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Shrug Machine", "Smith Machines", "Agility Ladders", "Stability Balls", "Speed Ladders", "Agility Markers", "Speed Cones", "Speed Hurdles", "Agility Dots", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Equipment Orientation", "Fitness Consultations", "Locker Rentals", "Workout Programs", "Body Composition Analysis", "Audio/Visual Entertainment", "Water Stations", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "5c456861-c288-4c20-87ef-4dba5904e45c",
    vesselId: "hms-the--mariner",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the HMS The  Mariner. Stay active and healthy while cruising the waters near Juneau with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(484) 316-6594",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Battle Ropes", "SkiErg", "Cardio Resistance Bands", "Cardio Kickboxing Bags", "Agility Hurdles", "Spin Bikes", "Cable Deadlift Machine", "Tricep Extension Machine", "Cable Single Arm Back Extension Machine", "Pull-up Station", "Cable Row Machine", "Lat Pulldown", "Leg Curl Machine", "Cable Calf Raise Machine", "Cable Single Arm Chest Press Machine", "TRX Suspension Trainers", "Agility Ladders", "Plyo Boxes", "Slam Balls", "Speed Bands", "Agility Poles", "Infrared Therapy", "Yoga Straps", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor", "Fitness Nutrition Specialist", "Senior Fitness Specialist"],
    amenities: ["Fresh Fruit Bar", "Water Stations", "Towel Service", "Group Fitness Classes", "Personal Training Sessions", "Smoothie Bar", "Protein Shakes", "Fitness Tracking", "Nutrition Counseling"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "540e3833-56af-4f01-8183-0e5cdabb5c23",
    vesselId: "rms--gale",
    name: "Juneau Fitness Center",
    description: "Discover wellness at sea with Juneau Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(145) 849-7341",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Cardio Resistance Bands", "Rowing Machines", "Cardio Gliders", "Arc Trainers", "Air Bikes", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Row Machine", "Free Weights", "Seated Row Machine", "Cable Single Arm Shoulder Press Machine", "Cable Bicep Curl Machine", "Cable Single Arm Ab Crunch Machine", "Cable Row Machine", "Plate Loaded Machines", "Functional Trainers", "Agility Poles", "Speed Parachutes", "Battle Ropes", "Agility Cones", "Medicine Balls", "Speed Bands", "Stability Balls", "Tire Flips", "Compression Therapy", "Cryotherapy Chamber", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Senior Fitness Specialist", "Yoga Instructor"],
    amenities: ["Body Composition Analysis", "Water Stations", "Personal Training Sessions", "Locker Rentals", "Group Fitness Classes", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Toiletries", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    isPopular: true
  },
  {
    id: "cf8884a5-7dd2-4761-be53-1b9fd5feb74c",
    vesselId: "my--explorer",
    name: "Juneau Fitness Center",
    description: "Juneau Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(154) 357-4098",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Recumbent Bikes", "Cardio Step Platforms", "StairMaster", "Treadmills", "Battle Ropes", "Rowing Machines", "Cardio Kickboxing Bags", "Bench Press", "Chest Press Machine", "Weight Machines", "Cable Russian Twist Machine", "Cable Single Arm Ab Crunch Machine", "Smith Machine", "Chest Fly Machine", "Cable Crossover Machine", "Seated Row Machine", "Cable Squat Machine", "TRX Suspension Trainers", "Speed Sleds", "Sledgehammers", "Weighted Vests", "Speed Hurdles", "Sandbags", "Plyo Boxes", "Cryotherapy Chambers"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Youth Fitness Specialist", "Senior Fitness Specialist"],
    amenities: ["Fresh Fruit Bar", "Body Composition Analysis", "Toiletries", "Fitness Tracking", "Towel Service", "Protein Shakes", "Personal Training Sessions", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "8dd2fd4a-e9bc-4797-bcbe-f966a5003aff",
    vesselId: "cs-juneau-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(756) 990-1101",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Agility Hurdles", "Battle Ropes", "Treadmills", "Elliptical Machines", "Cardio Resistance Bands", "Stationary Bikes", "Cardio Punching Bags", "Cardio Kettlebells", "Cardio Gliders", "Leg Extension Machine", "Cable Reverse Fly Machine", "Multi-Gym Systems", "Bench Press", "Cable Face Pull Machine", "Shoulder Press Machine", "Cable Single Arm Tricep Extension Machine", "Weight Machines", "Cable Shrug Machine", "Chest Fly Machine", "Stability Balls", "Kettlebells", "Jump Boxes", "Agility Dots", "Medicine Balls", "Speed Hurdles", "Speed Harnesses", "TRX Suspension Trainers", "Yoga Straps"],
    personalTrainers: ["Group Fitness Instructor", "Youth Fitness Specialist", "Pilates Instructor"],
    amenities: ["Protein Shakes", "Locker Rentals", "Towel Service", "Group Fitness Classes", "Smoothie Bar", "Personal Training Sessions", "Audio/Visual Entertainment", "Hair Dryers", "Workout Programs", "Body Composition Analysis", "Toiletries", "Water Stations"],
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
    id: "aed2afc3-75a8-4dcd-8a25-7957bc15b15f",
    vesselId: "hms--of-the-deep",
    name: "HMS  of the Deep Fitness Center",
    description: "Welcome to HMS  of the Deep Fitness Center, your premier wellness destination aboard the HMS  of the Deep. Stay active and healthy while cruising the waters near Juneau with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(281) 457-8369",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Elliptical Machines", "Arc Trainers", "Recumbent Bikes", "Cardio Step Platforms", "Cardio Kettlebells", "Stationary Bikes", "Agility Hurdles", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Plate Loaded Machines", "Leg Press Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Dumbbells", "Cable Single Arm Single Leg Shrug Machine", "Foam Rollers", "Speed Cords", "Speed Resistors", "Speed Harnesses", "TRX Suspension Trainers", "Compression Therapy", "Yoga Equipment", "Recovery Tools"],
    personalTrainers: ["Strength Training Specialist", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Equipment Orientation", "Towel Service", "Smoothie Bar", "Fresh Fruit Bar", "Protein Shakes", "Fitness Tracking", "Water Stations", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "5ebd5fc4-e2e6-4f44-b23d-2dc0291baf35",
    vesselId: "ms-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(881) 652-8024",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Spin Bikes", "Cardio Kickboxing Bags", "Cardio Punching Bags", "Battle Ropes", "Elliptical Machines", "Air Bikes", "Cardio Kettlebells", "Cable Single Arm Shrug Machine", "Barbells", "Smith Machine", "Cable Single Arm Bicep Curl Machine", "Cable Russian Twist Machine", "Cable Woodchopper Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Lunge Machine", "Tire Flips", "Balance Boards", "Speed Harnesses", "Foam Rollers", "Speed Resistors", "Speed Cords", "Speed Cones", "Yoga Equipment", "Yoga Wheels", "HydroMassage Beds"],
    personalTrainers: ["Youth Fitness Specialist", "Yoga Instructor"],
    amenities: ["Equipment Orientation", "Fitness Tracking", "Nutrition Counseling", "Audio/Visual Entertainment", "Locker Rentals", "Hair Dryers", "Towel Service", "Fresh Fruit Bar", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "6e35c068-4f94-4e22-84fd-0e70ee6a0d56",
    vesselId: "cs--gale",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(801) 588-7380",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "StairMaster", "Cardio Kettlebells", "Punching Bags", "Cardio Step Platforms", "Rowing Machines", "VersaClimber", "Shoulder Press Machine", "Cable Single Arm Calf Raise Machine", "Bicep Curl Machine", "Weight Machines", "Cable Single Arm Back Extension Machine", "Cable Calf Raise Machine", "Cable Pallof Press Machine", "Cable Lateral Raise Machine", "Chest Fly Machine", "Speed Ladders", "Stability Balls", "Speed Bands", "Agility Dots", "Medicine Balls", "Agility Cones", "Speed Sleds", "CrossFit Equipment"],
    personalTrainers: ["Spinning Instructor", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Nutrition Counseling", "Protein Shakes", "Group Fitness Classes", "Equipment Orientation", "Towel Service", "Locker Rentals", "Fitness Consultations", "Fitness Tracking", "Water Stations", "Body Composition Analysis", "Hair Dryers", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  }
];
