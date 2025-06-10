// Fitness center venues data for London
// This file contains fitness center and wellness facility information for cruise vessels operating from London
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const londonFitnessCenters: FitnessCenter[] = [
  {
    id: "211f8cd6-a645-4938-8b28-7601292a9d02",
    vesselId: "fv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the FV  Explorer. Stay active and healthy while cruising the waters near London with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(689) 327-1918",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "StairMaster", "Cardio Kickboxing Bags", "Cardio Step Platforms", "VersaClimber", "Cardio Kettlebells", "SkiErg", "Spin Bikes", "Recumbent Bikes", "Cable Single Arm Single Leg Back Extension Machine", "Leg Curl Machine", "Cable Single Arm Russian Twist Machine", "Shoulder Press Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Back Extension Machine", "Leg Extension Machine", "Dumbbells", "Speed Ladders", "Agility Ladders", "Stability Balls", "Foam Rollers", "Agility Poles", "Agility Hurdles", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Nutrition Counseling", "Body Composition Analysis", "Group Fitness Classes", "Toiletries", "Workout Programs", "Personal Training Sessions", "Towel Service", "Water Stations", "Audio/Visual Entertainment", "Smoothie Bar", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "1caca034-4235-4521-bee8-e7d4a36ea0f4",
    vesselId: "hms-london-voyager",
    name: "HMS London Voyager Fitness Center",
    description: "HMS London Voyager Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(534) 924-7394",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Resistance Bands", "VersaClimber", "SkiErg", "StairMaster", "Cardio Punching Bags", "Cardio Step Platforms", "Arc Trainers", "Treadmills", "Punching Bags", "Abdominal Crunch Machine", "Cable Face Pull Machine", "Bench Press", "Power Rack", "Cable Bicep Curl Machine", "Cable Reverse Fly Machine", "Leg Press Machine", "Cable Deadlift Machine", "Smith Machine", "Cable Tricep Pushdown Machine", "Foam Rollers", "Resistance Bands", "Speed Cones", "Sandbags", "Speed Sleds", "Dance Fitness Equipment", "Compression Therapy", "Pilates Reformers", "Infrared Therapy"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions", "Toiletries", "Water Stations", "Smoothie Bar", "Nutrition Counseling", "Fitness Consultations", "Audio/Visual Entertainment", "Hair Dryers", "Protein Shakes", "Equipment Orientation", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "84e3ec84-c655-4d8f-b3f5-8d6d39459054",
    vesselId: "rms--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around London. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(323) 875-8097",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Agility Hurdles", "Cardio Step Platforms", "Rowing Machines", "VersaClimber", "Arc Trainers", "Stationary Bikes", "Boxing Equipment", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Shoulder Press Machine", "Functional Trainers", "Bicep Curl Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Plank Machine", "Smith Machine", "Pull-up Station", "Resistance Bands", "Balance Boards", "Sandbags", "Agility Cones", "Kettlebells", "Tire Flips", "Yoga Straps"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Strength and Conditioning Coach", "Strength Training Specialist"],
    amenities: ["Equipment Orientation", "Locker Rentals", "Hair Dryers", "Personal Training Sessions", "Toiletries", "Smoothie Bar", "Protein Shakes", "Fresh Fruit Bar"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "ac77e79d-d33c-4452-91bd-134225f2ee9a",
    vesselId: "cs-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(793) 617-7124",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Spin Bikes", "Cardio Resistance Bands", "StairMaster", "Boxing Equipment", "Treadmills", "Cable Upright Row Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Russian Twist Machine", "Chest Fly Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Ab Crunch Machine", "Cable Squat Machine", "Agility Poles", "Battle Ropes", "Balance Boards", "Agility Ladders", "Speed Hurdles", "Stability Balls", "Kettlebells", "BOSU Balls", "Kickboxing Equipment", "Yoga Straps", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Locker Rentals", "Water Stations", "Nutrition Counseling", "Fitness Consultations", "Fresh Fruit Bar", "Toiletries", "Body Composition Analysis", "Hair Dryers"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "3aa56f99-119a-4898-8223-45c77e17df23",
    vesselId: "hms--gale",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the HMS  Gale. Stay active and healthy while cruising the waters near London with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(402) 141-3886",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Recumbent Bikes", "Cardio Punching Bags", "Jump Ropes", "Cardio Gliders", "Treadmills", "SkiErg", "Spin Bikes", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Shoulder Press Machine", "Cable Row Machine", "Smith Machine", "Cable Single Arm Single Leg Upright Row Machine", "Medicine Balls", "Kettlebells", "Agility Hurdles", "Agility Dots", "BOSU Balls", "Balance Boards", "Speed Cones", "Yoga Mats", "Yoga Straps"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Group Fitness Classes", "Fresh Fruit Bar", "Smoothie Bar", "Hair Dryers", "Equipment Orientation", "Fitness Tracking", "Fitness Consultations", "Protein Shakes", "Personal Training Sessions", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
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
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "89f576ca-cc63-4940-9fd6-87258dd38d03",
    vesselId: "mv--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around London. Our facility features pool area, dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(140) 257-1664",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Treadmills", "Spin Bikes", "Battle Ropes", "Cardio Medicine Balls", "Elliptical Machines", "Cable Back Extension Machine", "Cable Shrug Machine", "Smith Machine", "Cable Upright Row Machine", "Cable Row Machine", "Cable Single Arm Shoulder Press Machine", "Cable Hip Thrust Machine", "Multi-Gym Systems", "Cable Calf Raise Machine", "Leg Extension Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Chest Press Machine", "Agility Hurdles", "Speed Sleds", "TRX Suspension Trainers", "Kettlebells", "Balance Boards", "Agility Dots", "Speed Hurdles", "Yoga Straps"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist"],
    amenities: ["Protein Shakes", "Fitness Consultations", "Audio/Visual Entertainment", "Locker Rentals", "Toiletries", "Water Stations", "Towel Service", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
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
    id: "44474052-4ca9-4b4d-a8b6-54f288748b8a",
    vesselId: "ly-london-voyager",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the LY London Voyager. Stay active and healthy while cruising the waters near London with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(749) 719-1603",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Spin Bikes", "Rowing Machines", "Recumbent Bikes", "Battle Ropes", "Cardio Gliders", "Air Bikes", "Treadmills", "Barbells", "Cable Single Arm Upright Row Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Face Pull Machine", "Power Rack", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Plyo Boxes", "Stability Balls", "Agility Hurdles", "Slam Balls", "BOSU Balls", "Sledgehammers", "Tire Flips", "Kettlebells", "Cryotherapy Chamber", "Spinning Bikes", "Dance Fitness Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Towel Service", "Nutrition Counseling", "Body Composition Analysis", "Protein Shakes", "Smoothie Bar", "Water Stations", "Fresh Fruit Bar", "Locker Rentals"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "b613d8f6-63f2-4683-b06d-fb4429f06f4a",
    vesselId: "nx--of-the-deep",
    name: "NX  of the Deep Fitness Center",
    description: "Discover wellness at sea with NX  of the Deep Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(199) 487-8474",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Cardio Kettlebells", "Battle Ropes", "Cardio Step Platforms", "Arc Trainers", "Stationary Bikes", "Cardio Kickboxing Bags", "Agility Hurdles", "Rowing Machines", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Agility Ladders", "Agility Cones", "Speed Cords", "Weighted Vests", "Agility Poles", "Massage Chairs"],
    personalTrainers: ["Corrective Exercise Specialist", "Fitness Nutrition Specialist", "Certified Personal Trainer", "Yoga Instructor"],
    amenities: ["Locker Rentals", "Fitness Consultations", "Group Fitness Classes", "Toiletries", "Body Composition Analysis", "Towel Service", "Equipment Orientation", "Water Stations", "Workout Programs", "Personal Training Sessions"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "f7837aaf-8d5f-4b8c-a278-15132f4a5309",
    vesselId: "fv-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the FV The  Mariner. Stay active and healthy while cruising the waters near London with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(503) 328-8261",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "Cardio Kickboxing Bags", "StairMaster", "Elliptical Machines", "Cardio Resistance Bands", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Lateral Raise Machine", "Cable Calf Raise Machine", "Cable Lunge Machine", "Cable Plank Machine", "Cable Reverse Fly Machine", "Weight Machines", "Kettlebells", "Speed Bands", "Slam Balls", "Tire Flips", "Agility Hurdles", "Foam Rollers", "Speed Cones", "Infrared Sauna", "Infrared Therapy"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Strength and Conditioning Coach"],
    amenities: ["Group Fitness Classes", "Towel Service", "Personal Training Sessions", "Hair Dryers", "Audio/Visual Entertainment", "Nutrition Counseling", "Water Stations", "Protein Shakes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
    faqs: [
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
      }
    ],
    isPopular: false
  },
  {
    id: "ca2ceb01-0078-4e20-9aca-2e66de22994d",
    vesselId: "mv--gale",
    name: "MV  Gale Fitness Center",
    description: "MV  Gale Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(274) 706-6178",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "StairMaster", "Cardio Step Platforms", "Agility Hurdles", "Elliptical Machines", "Rowing Machines", "Recumbent Bikes", "Cable Single Arm Back Extension Machine", "Cable Plank Machine", "Leg Extension Machine", "Abdominal Crunch Machine", "Bench Press", "Cable Face Pull Machine", "Multi-Gym Systems", "Smith Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Russian Twist Machine", "Sledgehammers", "Plyo Boxes", "Speed Bands", "Speed Sleds", "Speed Hurdles", "TRX Suspension Trainers", "Slam Balls", "Infrared Therapy", "Massage Chairs", "Yoga Bolsters"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor", "Spinning Instructor", "Senior Fitness Specialist"],
    amenities: ["Personal Training Sessions", "Workout Programs", "Fitness Tracking", "Smoothie Bar", "Protein Shakes", "Towel Service", "Fitness Consultations", "Equipment Orientation", "Toiletries", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
