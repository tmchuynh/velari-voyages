// Fitness center venues data for Rome
// This file contains fitness center and wellness facility information for cruise vessels operating from Rome
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const romeFitnessCenters: FitnessCenter[] = [
  {
    id: "e362bcb6-3a51-40e4-944d-b517ab80611f",
    vesselId: "ss--explorer",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the SS  Explorer. Stay active and healthy while cruising the waters near Rome with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(787) 772-2189",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Recumbent Bikes", "Cardio Medicine Balls", "Agility Hurdles", "Air Bikes", "Cardio Kettlebells", "Elliptical Machines", "Treadmills", "Cable Single Arm Single Leg Upright Row Machine", "Weight Machines", "Cable Face Pull Machine", "Cable Squat Machine", "Cable Single Arm Tricep Extension Machine", "Cable Calf Raise Machine", "Functional Trainers", "Leg Curl Machine", "Abdominal Crunch Machine", "Foam Rollers", "Agility Dots", "Weighted Vests", "Kettlebells", "Agility Poles", "Balance Boards", "Spinning Bikes", "Yoga Wheels"],
    personalTrainers: ["Yoga Instructor", "Youth Fitness Specialist", "Corrective Exercise Specialist", "Strength Training Specialist"],
    amenities: ["Towel Service", "Toiletries", "Fitness Tracking", "Locker Rentals", "Equipment Orientation", "Hair Dryers", "Fresh Fruit Bar", "Water Stations", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
    isPopular: true
  },
  {
    id: "fbedaebb-d41e-4358-bfec-d949cf3f6c0a",
    vesselId: "ts-rome-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Rome. Our facility features dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(139) 822-7769",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Air Bikes", "Punching Bags", "Boxing Equipment", "Battle Ropes", "Recumbent Bikes", "Spin Bikes", "SkiErg", "Cardio Medicine Balls", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Pallof Press Machine", "Seated Row Machine", "Cable Row Machine", "Leg Extension Machine", "Leg Curl Machine", "Chest Press Machine", "Agility Markers", "Speed Resistors", "Agility Dots", "Resistance Bands", "TRX Suspension Trainers", "Speed Cones", "Infrared Sauna", "HydroMassage Beds"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Smoothie Bar", "Group Fitness Classes", "Fresh Fruit Bar", "Personal Training Sessions", "Locker Rentals", "Nutrition Counseling", "Protein Shakes", "Body Composition Analysis"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "04b1edd5-60a4-45f4-ba61-a86639e3f7b2",
    vesselId: "nb--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(558) 396-4516",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Agility Hurdles", "Rowing Machines", "Cardio Step Platforms", "Cardio Kickboxing Bags", "SkiErg", "Smith Machines", "Free Weights", "Cable Upright Row Machine", "Cable Plank Machine", "Leg Curl Machine", "Multi-Gym Systems", "Cable Single Arm Bicep Curl Machine", "Cable Lunge Machine", "Yoga Mats", "Agility Cones", "Medicine Balls", "Speed Ladders", "Stability Balls", "Agility Poles", "Compression Therapy", "Cryotherapy Chambers", "CrossFit Equipment", "Aqua Fitness Equipment"],
    personalTrainers: ["Spinning Instructor", "Fitness Nutrition Specialist", "Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Workout Programs", "Protein Shakes", "Water Stations", "Body Composition Analysis", "Fresh Fruit Bar", "Group Fitness Classes", "Toiletries", "Audio/Visual Entertainment", "Towel Service", "Hair Dryers", "Smoothie Bar", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "6b77ac61-7271-46d1-b6ab-4a18fd115a83",
    vesselId: "rv-the--mariner",
    name: "RV The  Mariner Fitness Center",
    description: "RV The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(875) 434-7975",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Cardio Gliders", "Agility Hurdles", "Treadmills", "Elliptical Machines", "Cardio Kettlebells", "Cardio Step Platforms", "Cardio Medicine Balls", "Jump Ropes", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Pallof Press Machine", "Pull-up Station", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Row Machine", "TRX Suspension Trainers", "Agility Ladders", "Foam Rollers", "Medicine Balls", "Battle Ropes", "Aqua Fitness Equipment", "Kickboxing Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Equipment Orientation", "Group Fitness Classes", "Hair Dryers", "Nutrition Counseling", "Fresh Fruit Bar", "Personal Training Sessions", "Water Stations", "Locker Rentals", "Toiletries", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "de901b52-3d65-401f-bbac-b652cc44d3db",
    vesselId: "nx--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Rome. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(566) 687-9954",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Recumbent Bikes", "Rowing Machines", "Treadmills", "Punching Bags", "Elliptical Machines", "VersaClimber", "Spin Bikes", "Cable Single Arm Bicep Curl Machine", "Cable Squat Machine", "Smith Machine", "Cable Single Arm Tricep Extension Machine", "Plate Loaded Machines", "Cable Lunge Machine", "Cable Face Pull Machine", "Smith Machines", "Cable Shrug Machine", "Free Weights", "Barbells", "Tire Flips", "Sledgehammers", "Jump Boxes", "Battle Ropes", "TRX Suspension Trainers", "Stretching Stations", "Barre Equipment", "Dance Fitness Equipment"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Fitness Tracking", "Audio/Visual Entertainment", "Personal Training Sessions", "Body Composition Analysis", "Towel Service", "Fitness Consultations", "Smoothie Bar", "Group Fitness Classes", "Fresh Fruit Bar", "Workout Programs", "Locker Rentals", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
      }
    ],
    isPopular: true
  },
  {
    id: "a8a8d849-30e0-4850-aa94-4224b121baef",
    vesselId: "ts--explorer",
    name: "TS  Explorer Fitness Center",
    description: "TS  Explorer Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(807) 465-8281",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Spin Bikes", "Cardio Kettlebells", "SkiErg", "Arc Trainers", "Treadmills", "Battle Ropes", "Cardio Kickboxing Bags", "Cardio Gliders", "Punching Bags", "Cable Bicep Curl Machine", "Cable Single Arm Calf Raise Machine", "Weight Machines", "Cable Single Arm Single Leg Squat Machine", "Chest Press Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Speed Parachutes", "Tire Flips", "Agility Ladders", "Speed Hurdles", "Foam Rollers", "Speed Ladders", "TRX Suspension Trainers", "Agility Poles", "Barre Equipment", "Infrared Sauna"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist", "Strength and Conditioning Coach", "Pilates Instructor"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Locker Rentals", "Equipment Orientation", "Protein Shakes", "Fitness Consultations", "Fresh Fruit Bar", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "5f1668fc-0fa8-472f-ae19-1e5cae24b508",
    vesselId: "cs-rome-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(500) 179-1986",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Resistance Bands", "Recumbent Bikes", "SkiErg", "Jump Ropes", "VersaClimber", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Shoulder Press Machine", "Cable Hip Thrust Machine", "Functional Trainers", "Cable Reverse Fly Machine", "Speed Cones", "Foam Rollers", "Kettlebells", "Speed Bands", "Speed Parachutes", "Agility Markers", "Agility Cones", "Sledgehammers", "HydroMassage Beds", "Boxing Equipment"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Group Fitness Classes", "Fitness Consultations", "Audio/Visual Entertainment", "Personal Training Sessions", "Body Composition Analysis", "Equipment Orientation", "Hair Dryers", "Nutrition Counseling", "Smoothie Bar"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "c80719f2-8ca3-4dfe-a759-df3b09890ed9",
    vesselId: "nx--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Rome. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(929) 380-9378",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Air Bikes", "Cardio Medicine Balls", "VersaClimber", "Rowing Machines", "Battle Ropes", "Seated Row Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Leg Press Machine", "Cable Upright Row Machine", "Cable Back Extension Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Shoulder Press Machine", "Agility Ladders", "Speed Resistors", "Plyo Boxes", "Slam Balls", "Yoga Mats", "Yoga Blocks", "Spinning Bikes", "Stretching Stations"],
    personalTrainers: ["Strength Training Specialist", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Audio/Visual Entertainment", "Toiletries", "Water Stations", "Fresh Fruit Bar", "Nutrition Counseling", "Locker Rentals", "Towel Service", "Equipment Orientation", "Protein Shakes", "Smoothie Bar", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "e57f4794-5d31-43bf-b85a-42fbf62e8862",
    vesselId: "nb-the--mariner",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the NB The  Mariner. Stay active and healthy while cruising the waters near Rome with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(521) 819-1184",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Resistance Bands", "Recumbent Bikes", "Cardio Gliders", "Cardio Punching Bags", "SkiErg", "Boxing Equipment", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Row Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Shrug Machine", "Power Rack", "Barbells", "Back Extension Machine", "Jump Boxes", "TRX Suspension Trainers", "Speed Ladders", "Kettlebells", "Sandbags", "Barre Equipment", "Kickboxing Equipment", "Yoga Blocks"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Workout Programs", "Protein Shakes", "Nutrition Counseling", "Equipment Orientation", "Water Stations", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "4a4fed16-6c74-4f3c-885f-4c888d9491b4",
    vesselId: "my--gale",
    name: "Rome Fitness Center",
    description: "Welcome to Rome Fitness Center, your premier wellness destination aboard the MY  Gale. Stay active and healthy while cruising the waters near Rome with our state-of-the-art fitness facilities. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(876) 521-8476",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Recumbent Bikes", "Cardio Kettlebells", "SkiErg", "Rowing Machines", "Stationary Bikes", "Boxing Equipment", "Air Bikes", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Squat Machine", "Cable Glute Kickback Machine", "Cable Single Arm Upright Row Machine", "Free Weights", "Sandbags", "Agility Hurdles", "Foam Rollers", "TRX Suspension Trainers", "Yoga Mats", "Slam Balls", "Agility Dots", "Dance Fitness Equipment", "Stretching Stations"],
    personalTrainers: ["Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Smoothie Bar", "Hair Dryers", "Equipment Orientation", "Body Composition Analysis", "Group Fitness Classes", "Personal Training Sessions", "Toiletries", "Nutrition Counseling", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  }
];
