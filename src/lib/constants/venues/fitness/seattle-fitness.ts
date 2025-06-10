// Fitness center venues data for Seattle
// This file contains fitness center and wellness facility information for cruise vessels operating from Seattle
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const seattleFitnessCenters: FitnessCenter[] = [
  {
    id: "875ff0bd-37e3-4d18-8e09-dc37212f23f3",
    vesselId: "nb--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Seattle. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(289) 631-9551",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Air Bikes", "Cardio Punching Bags", "Battle Ropes", "Cardio Kickboxing Bags", "Cardio Resistance Bands", "StairMaster", "Agility Hurdles", "Cable Single Arm Single Leg Lateral Raise Machine", "Smith Machine", "Free Weights", "Cable Russian Twist Machine", "Leg Press Machine", "Calf Raise Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Lat Pulldown", "Cable Single Arm Single Leg Deadlift Machine", "Jump Boxes", "Agility Dots", "Balance Boards", "Slam Balls", "Sandbags", "Speed Parachutes", "Barre Equipment", "Spinning Bikes", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Corrective Exercise Specialist", "Aqua Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Personal Training Sessions", "Smoothie Bar", "Water Stations", "Workout Programs", "Fresh Fruit Bar", "Towel Service", "Protein Shakes", "Audio/Visual Entertainment", "Group Fitness Classes"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "298a49eb-5175-411d-aa4b-c25f0144d9fb",
    vesselId: "hms-seattle-voyager",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(747) 897-5283",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "VersaClimber", "Air Bikes", "Agility Hurdles", "SkiErg", "Elliptical Machines", "Boxing Equipment", "Spin Bikes", "Cardio Gliders", "Cardio Medicine Balls", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Hip Thrust Machine", "Kettlebells", "Yoga Mats", "Medicine Balls", "Speed Resistors", "Agility Poles", "Sandbags", "Speed Sleds", "Stability Balls", "HydroMassage Beds", "Dance Fitness Equipment"],
    personalTrainers: ["Spinning Instructor", "Senior Fitness Specialist"],
    amenities: ["Toiletries", "Fitness Consultations", "Audio/Visual Entertainment", "Nutrition Counseling", "Fresh Fruit Bar", "Group Fitness Classes", "Equipment Orientation", "Personal Training Sessions", "Workout Programs", "Fitness Tracking", "Smoothie Bar", "Hair Dryers"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "a13c5d20-2a2b-41bc-8a0c-828402c5c4ad",
    vesselId: "my--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(279) 505-9059",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Air Bikes", "StairMaster", "Recumbent Bikes", "Arc Trainers", "Boxing Equipment", "Bicep Curl Machine", "Cable Single Arm Single Leg Squat Machine", "Chest Press Machine", "Free Weights", "Pull-up Station", "Cable Single Arm Deadlift Machine", "Dumbbells", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Plank Machine", "Sledgehammers", "Yoga Mats", "Foam Rollers", "BOSU Balls", "Speed Sleds", "Speed Bands", "Spinning Bikes", "HydroMassage Beds"],
    personalTrainers: ["Senior Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Equipment Orientation", "Towel Service", "Nutrition Counseling", "Fitness Tracking", "Water Stations", "Protein Shakes", "Hair Dryers", "Group Fitness Classes", "Body Composition Analysis", "Fresh Fruit Bar", "Smoothie Bar", "Fitness Consultations"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    isPopular: true
  },
  {
    id: "b2c9b311-52ac-458f-897e-5460256fb64f",
    vesselId: "ss-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(694) 930-5199",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Boxing Equipment", "Spin Bikes", "Rowing Machines", "Punching Bags", "Recumbent Bikes", "Cardio Kettlebells", "Arc Trainers", "Stationary Bikes", "Cardio Step Platforms", "Cable Single Arm Single Leg Shrug Machine", "Weight Machines", "Cable Deadlift Machine", "Cable Upright Row Machine", "Chest Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Shoulder Press Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Leg Extension Machine", "Speed Harnesses", "Kettlebells", "Slam Balls", "Battle Ropes", "Sandbags", "Spinning Bikes", "Yoga Equipment", "TRX Suspension Trainers", "Functional Training Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Group Fitness Instructor", "Spinning Instructor", "Certified Personal Trainer", "Strength and Conditioning Coach"],
    amenities: ["Personal Training Sessions", "Fitness Tracking", "Water Stations", "Locker Rentals", "Equipment Orientation", "Body Composition Analysis", "Workout Programs", "Towel Service", "Fitness Consultations", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
    id: "2a2bddec-16e5-4ec0-a556-a0728207920d",
    vesselId: "nb--gale",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(697) 570-6248",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Battle Ropes", "Boxing Equipment", "Elliptical Machines", "VersaClimber", "Cardio Resistance Bands", "SkiErg", "Stationary Bikes", "Punching Bags", "Cardio Medicine Balls", "Cable Single Arm Single Leg Squat Machine", "Bicep Curl Machine", "Cable Single Arm Back Extension Machine", "Free Weights", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Multi-Gym Systems", "Weight Machines", "Cable Single Arm Single Leg Front Raise Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Back Extension Machine", "Speed Cords", "Weighted Vests", "Agility Cones", "BOSU Balls", "Sledgehammers", "CrossFit Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Youth Fitness Specialist", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Audio/Visual Entertainment", "Nutrition Counseling", "Group Fitness Classes", "Fitness Consultations", "Water Stations", "Workout Programs", "Hair Dryers", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "5d688b5e-5f93-4011-a7a0-b34991d38e8b",
    vesselId: "my--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(647) 704-4967",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Cardio Kickboxing Bags", "Treadmills", "Spin Bikes", "Elliptical Machines", "Cardio Kettlebells", "Jump Ropes", "Chest Press Machine", "Cable Single Arm Calf Raise Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Shrug Machine", "Back Extension Machine", "Cable Lunge Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Face Pull Machine", "Cable Single Arm Row Machine", "Cable Pallof Press Machine", "Yoga Mats", "Jump Boxes", "Agility Poles", "TRX Suspension Trainers", "Speed Cones", "Agility Markers", "Agility Hurdles", "Kettlebells", "Cryotherapy Chambers", "Pilates Reformers"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor", "Spinning Instructor", "Certified Personal Trainer"],
    amenities: ["Smoothie Bar", "Fitness Tracking", "Equipment Orientation", "Towel Service", "Workout Programs", "Water Stations", "Toiletries", "Protein Shakes"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "7e156f2c-eafa-4a88-a6e0-9879e38a8b10",
    vesselId: "ss-seattle-voyager",
    name: "SS Seattle Voyager Fitness Center",
    description: "Discover wellness at sea with SS Seattle Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(784) 645-9129",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Stationary Bikes", "Cardio Kettlebells", "Cardio Medicine Balls", "Treadmills", "Boxing Equipment", "Cardio Gliders", "Free Weights", "Cable Single Arm Glute Kickback Machine", "Cable Row Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Hip Thrust Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Lat Pulldown Machine", "Yoga Mats", "Tire Flips", "Agility Cones", "Medicine Balls", "Speed Ladders", "Yoga Blocks", "Barre Equipment"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Certified Personal Trainer"],
    amenities: ["Group Fitness Classes", "Workout Programs", "Smoothie Bar", "Hair Dryers", "Towel Service", "Fresh Fruit Bar", "Toiletries", "Water Stations", "Personal Training Sessions", "Audio/Visual Entertainment", "Nutrition Counseling", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "b81e25b7-9460-47ab-8016-3279c46ed03c",
    vesselId: "sv--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(808) 845-2858",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Agility Hurdles", "Jump Ropes", "Recumbent Bikes", "Boxing Equipment", "Stationary Bikes", "Air Bikes", "Cardio Medicine Balls", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Abdominal Crunch Machine", "Leg Press Machine", "Cable Woodchopper Machine", "Cable Single Arm Hip Thrust Machine", "Weight Machines", "Cable Single Arm Glute Kickback Machine", "Multi-Gym Systems", "Barbells", "Tricep Extension Machine", "Plate Loaded Machines", "Agility Ladders", "Speed Sleds", "Tire Flips", "BOSU Balls", "Plyo Boxes", "Kettlebells", "Slam Balls", "Speed Ladders", "Stretching Stations"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Body Composition Analysis", "Towel Service", "Fitness Consultations", "Fitness Tracking", "Water Stations", "Audio/Visual Entertainment", "Smoothie Bar", "Toiletries", "Personal Training Sessions", "Protein Shakes"],
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "9101e97f-dbf8-43f0-851b-7411221ad864",
    vesselId: "ts-the--mariner",
    name: "TS The  Mariner Fitness Center",
    description: "Discover wellness at sea with TS The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(462) 336-7649",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "SkiErg", "Punching Bags", "StairMaster", "Cardio Punching Bags", "Stationary Bikes", "Battle Ropes", "Cardio Step Platforms", "Rowing Machines", "Elliptical Machines", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Tricep Pushdown Machine", "Back Extension Machine", "Weight Machines", "Free Weights", "Tricep Extension Machine", "Leg Extension Machine", "Cable Upright Row Machine", "Foam Rollers", "Speed Sleds", "BOSU Balls", "Weighted Vests", "TRX Suspension Trainers", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Body Composition Analysis", "Protein Shakes", "Equipment Orientation", "Towel Service", "Nutrition Counseling", "Hair Dryers", "Toiletries", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Locker Rentals", "Water Stations"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "19a37cfd-17d3-4ee4-8507-a84fc0f3f900",
    vesselId: "fv--gale",
    name: "Seattle Fitness Center",
    description: "Seattle Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Seattle. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(749) 553-9654",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Medicine Balls", "StairMaster", "Boxing Equipment", "Jump Ropes", "Cardio Resistance Bands", "Free Weights", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Plank Machine", "Lat Pulldown", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Smith Machine", "Cable Row Machine", "Leg Press Machine", "Cable Single Arm Single Leg Deadlift Machine", "TRX Suspension Trainers", "Stability Balls", "Speed Resistors", "Foam Rollers", "Balance Boards", "Yoga Mats", "Stretching Stations", "Functional Training Equipment", "Float Tanks"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Locker Rentals", "Fitness Consultations", "Workout Programs", "Smoothie Bar", "Toiletries", "Equipment Orientation", "Group Fitness Classes", "Personal Training Sessions"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  }
];
