// Fitness center venues data for Boston
// This file contains fitness center and wellness facility information for cruise vessels operating from Boston
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const bostonFitnessCenters: FitnessCenter[] = [
  {
    id: "a776fb44-c434-4c62-b955-6ff78905cfcb",
    vesselId: "ts--explorer",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the TS  Explorer. Stay active and healthy while cruising the waters near Boston with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(751) 105-3834",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Cardio Medicine Balls", "Treadmills", "Stationary Bikes", "Rowing Machines", "SkiErg", "Cable Single Arm Single Leg Lateral Raise Machine", "Tricep Extension Machine", "Cable Face Pull Machine", "Chest Fly Machine", "Cable Single Arm Back Extension Machine", "Cable Deadlift Machine", "Cable Russian Twist Machine", "Multi-Gym Systems", "Weighted Vests", "Speed Sleds", "TRX Suspension Trainers", "Speed Hurdles", "Agility Poles", "Battle Ropes", "Yoga Wheels", "Dance Fitness Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Group Fitness Instructor"],
    amenities: ["Smoothie Bar", "Fitness Tracking", "Nutrition Counseling", "Body Composition Analysis", "Towel Service", "Fresh Fruit Bar", "Water Stations", "Workout Programs", "Fitness Consultations", "Hair Dryers", "Locker Rentals"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "2c222d80-32d2-4323-848c-86c1a9c14058",
    vesselId: "ps-boston-voyager",
    name: "PS Boston Voyager Fitness Center",
    description: "Discover wellness at sea with PS Boston Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(411) 723-6402",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Agility Hurdles", "Cardio Gliders", "Cardio Punching Bags", "VersaClimber", "Cardio Kettlebells", "Treadmills", "Shoulder Press Machine", "Bench Press", "Cable Single Arm Upright Row Machine", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Glute Kickback Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Back Extension Machine", "Medicine Balls", "Agility Markers", "Speed Sleds", "Balance Boards", "BOSU Balls", "TRX Suspension Trainers", "Stretching Stations"],
    personalTrainers: ["Aqua Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Body Composition Analysis", "Fresh Fruit Bar", "Group Fitness Classes", "Water Stations", "Toiletries", "Protein Shakes", "Smoothie Bar", "Personal Training Sessions", "Hair Dryers", "Fitness Consultations", "Equipment Orientation"],
    is24Hours: false,
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "49e73ec6-8134-4576-8bab-295446969b35",
    vesselId: "cs--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the CS  of the Deep. Stay active and healthy while cruising the waters near Boston with our state-of-the-art fitness facilities. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(744) 632-3792",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Treadmills", "Punching Bags", "Spin Bikes", "Battle Ropes", "Cardio Punching Bags", "Recumbent Bikes", "VersaClimber", "Rowing Machines", "SkiErg", "Bench Press", "Cable Machines", "Bicep Curl Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Upright Row Machine", "Cable Ab Crunch Machine", "Back Extension Machine", "Cable Single Arm Deadlift Machine", "Medicine Balls", "Speed Harnesses", "Agility Ladders", "Speed Hurdles", "Speed Parachutes", "Cryotherapy Chambers", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Hair Dryers", "Group Fitness Classes", "Workout Programs", "Personal Training Sessions", "Fresh Fruit Bar", "Equipment Orientation", "Fitness Consultations", "Body Composition Analysis", "Nutrition Counseling"],
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
    id: "f6a615c4-4ba3-4d45-9976-80a549461538",
    vesselId: "ms-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Boston. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(607) 901-2289",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Recumbent Bikes", "Cardio Punching Bags", "Arc Trainers", "Spin Bikes", "Elliptical Machines", "Cable Single Arm Back Extension Machine", "Cable Single Arm Shrug Machine", "Cable Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Ab Crunch Machine", "Pull-up Station", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Upright Row Machine", "Speed Cones", "Speed Parachutes", "Yoga Mats", "Agility Dots", "Stability Balls", "Slam Balls", "Weighted Vests", "Boxing Equipment", "Compression Therapy", "Float Tanks", "TRX Suspension Trainers"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist", "Strength and Conditioning Coach"],
    amenities: ["Fitness Tracking", "Locker Rentals", "Fresh Fruit Bar", "Hair Dryers", "Audio/Visual Entertainment", "Personal Training Sessions", "Water Stations", "Smoothie Bar", "Equipment Orientation", "Toiletries", "Workout Programs"],
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "046fd244-c3d8-4fb6-94e8-ffaf4a4cbe46",
    vesselId: "ss--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(115) 351-3177",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "Arc Trainers", "Boxing Equipment", "Cardio Resistance Bands", "Punching Bags", "Jump Ropes", "Agility Hurdles", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Leg Press Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Free Weights", "Cable Deadlift Machine", "Cable Single Arm Upright Row Machine", "Shoulder Press Machine", "Weighted Vests", "Speed Bands", "Slam Balls", "Speed Hurdles", "Speed Ladders", "Kettlebells", "Stretching Stations", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist", "Yoga Instructor"],
    amenities: ["Fitness Consultations", "Towel Service", "Smoothie Bar", "Group Fitness Classes", "Locker Rentals", "Body Composition Analysis", "Protein Shakes", "Fresh Fruit Bar", "Water Stations", "Nutrition Counseling", "Hair Dryers", "Equipment Orientation"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    isPopular: false
  },
  {
    id: "efade12f-cae4-4bd7-8387-d4b48e96f79b",
    vesselId: "nb--explorer",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(495) 612-3412",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Agility Hurdles", "Treadmills", "SkiErg", "Arc Trainers", "Cardio Medicine Balls", "Recumbent Bikes", "Boxing Equipment", "Spin Bikes", "Stationary Bikes", "Leg Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Free Weights", "Seated Row Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Calf Raise Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Foam Rollers", "Speed Harnesses", "Resistance Bands", "TRX Suspension Trainers", "Battle Ropes", "Plyo Boxes", "Aqua Fitness Equipment", "Spinning Bikes"],
    personalTrainers: ["Strength and Conditioning Coach", "Certified Personal Trainer", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Hair Dryers", "Body Composition Analysis", "Fitness Tracking", "Towel Service", "Fitness Consultations", "Protein Shakes", "Workout Programs", "Water Stations", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "74b130ac-0a57-41cc-9fd4-06e4bb3c2a6a",
    vesselId: "ps-boston-voyager",
    name: "PS Boston Voyager Fitness Center",
    description: "Discover wellness at sea with PS Boston Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(926) 199-9428",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Arc Trainers", "Cardio Medicine Balls", "Agility Hurdles", "Spin Bikes", "Cardio Resistance Bands", "Recumbent Bikes", "Cardio Step Platforms", "Cable Crossover Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Free Weights", "Shoulder Press Machine", "Agility Ladders", "Kettlebells", "Resistance Bands", "Tire Flips", "Speed Harnesses", "Agility Markers", "Speed Cones", "Agility Cones", "Yoga Straps", "CrossFit Equipment", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Spinning Instructor", "Group Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Equipment Orientation", "Fresh Fruit Bar", "Toiletries", "Water Stations", "Protein Shakes", "Smoothie Bar", "Fitness Consultations"],
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
    isPopular: false
  },
  {
    id: "4f3f9c68-e44f-41a2-b94e-5cd0ac36d189",
    vesselId: "nx--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Boston. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(607) 889-6677",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "SkiErg", "Elliptical Machines", "Cardio Step Platforms", "Agility Hurdles", "Air Bikes", "Battle Ropes", "Recumbent Bikes", "Cable Tricep Pushdown Machine", "Cable Single Arm Upright Row Machine", "Smith Machine", "Free Weights", "Bicep Curl Machine", "Cable Face Pull Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Pallof Press Machine", "Agility Dots", "Balance Boards", "Slam Balls", "Plyo Boxes", "BOSU Balls", "Agility Cones", "Speed Parachutes", "Compression Therapy"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength and Conditioning Coach", "Fitness Nutrition Specialist", "Youth Fitness Specialist"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Audio/Visual Entertainment", "Protein Shakes", "Equipment Orientation", "Personal Training Sessions", "Fresh Fruit Bar", "Water Stations", "Hair Dryers", "Body Composition Analysis", "Nutrition Counseling"],
    is24Hours: false,
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
    id: "73f39390-71e1-47d7-8c74-f9853b881c1d",
    vesselId: "sy-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Boston. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(935) 937-4499",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Kickboxing Bags", "Cardio Gliders", "Punching Bags", "Air Bikes", "Stationary Bikes", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Free Weights", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Lunge Machine", "Cable Woodchopper Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Agility Hurdles", "Kettlebells", "Speed Bands", "BOSU Balls", "Agility Ladders", "Tire Flips", "Functional Training Equipment"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Spinning Instructor", "Strength and Conditioning Coach"],
    amenities: ["Fresh Fruit Bar", "Equipment Orientation", "Hair Dryers", "Towel Service", "Water Stations", "Personal Training Sessions", "Smoothie Bar", "Protein Shakes", "Locker Rentals", "Fitness Consultations", "Toiletries", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
    id: "529f128f-7ad7-492a-9511-c7d98155704d",
    vesselId: "ps--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Boston. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(743) 102-5590",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "VersaClimber", "Rowing Machines", "Elliptical Machines", "Boxing Equipment", "Stationary Bikes", "Cardio Medicine Balls", "Agility Hurdles", "Cardio Punching Bags", "StairMaster", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Shoulder Press Machine", "Dumbbells", "Cable Hip Thrust Machine", "Barbells", "Back Extension Machine", "Cable Deadlift Machine", "Leg Extension Machine", "Smith Machine", "Cable Single Arm Single Leg Front Raise Machine", "Slam Balls", "Foam Rollers", "BOSU Balls", "Plyo Boxes", "Kettlebells", "Yoga Mats", "Speed Cones", "HydroMassage Beds", "CrossFit Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor", "Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Locker Rentals", "Water Stations", "Towel Service", "Equipment Orientation", "Fresh Fruit Bar", "Nutrition Counseling", "Workout Programs", "Hair Dryers", "Smoothie Bar"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  }
];
