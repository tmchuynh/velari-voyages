// Fitness center venues data for Istanbul
// This file contains fitness center and wellness facility information for cruise vessels operating from Istanbul
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const istanbulFitnessCenters: FitnessCenter[] = [
  {
    id: "30f7c570-fbdb-4a50-bac0-783d7ca30fdb",
    vesselId: "mv--explorer",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MV  Explorer. Stay active and healthy while cruising the waters near Istanbul with our state-of-the-art fitness facilities. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(777) 561-3216",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Arc Trainers", "Cardio Punching Bags", "Cardio Kickboxing Bags", "Elliptical Machines", "StairMaster", "VersaClimber", "Rowing Machines", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Crossover Machine", "Barbells", "Shoulder Press Machine", "Cable Single Arm Single Leg Squat Machine", "TRX Suspension Trainers", "Slam Balls", "Agility Markers", "Yoga Mats", "Speed Resistors", "Kickboxing Equipment", "Pilates Reformers", "Aqua Fitness Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Locker Rentals", "Toiletries", "Audio/Visual Entertainment", "Equipment Orientation", "Body Composition Analysis", "Fitness Tracking", "Hair Dryers", "Protein Shakes", "Group Fitness Classes", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
    hasChildcareServices: true,
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
    id: "5e241442-8c55-46ca-bcec-ddcb5675b90a",
    vesselId: "rms-istanbul-voyager",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(921) 714-8837",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "SkiErg", "Boxing Equipment", "StairMaster", "Arc Trainers", "Jump Ropes", "Battle Ropes", "Cardio Step Platforms", "Cardio Kettlebells", "Cable Tricep Pushdown Machine", "Seated Row Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Reverse Fly Machine", "Shoulder Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Speed Cords", "Stability Balls", "Agility Cones", "Tire Flips", "Speed Sleds", "Agility Ladders", "Pilates Reformers", "Aqua Fitness Equipment", "Dance Fitness Equipment", "Compression Therapy", "Yoga Blocks"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Youth Fitness Specialist", "Senior Fitness Specialist"],
    amenities: ["Fresh Fruit Bar", "Audio/Visual Entertainment", "Protein Shakes", "Fitness Consultations", "Locker Rentals", "Group Fitness Classes", "Toiletries", "Fitness Tracking", "Personal Training Sessions", "Water Stations", "Towel Service", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "4d5379a5-9019-422c-a624-c024a92a300f",
    vesselId: "my--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MY  of the Deep. Stay active and healthy while cruising the waters near Istanbul with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(531) 705-1684",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Jump Ropes", "Recumbent Bikes", "Agility Hurdles", "Cardio Resistance Bands", "Cardio Kettlebells", "Cardio Medicine Balls", "Cardio Punching Bags", "Spin Bikes", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Row Machine", "Cable Single Arm Bicep Curl Machine", "Cable Ab Crunch Machine", "Chest Fly Machine", "Weight Machines", "Bench Press", "Cable Plank Machine", "Weighted Vests", "Yoga Mats", "Speed Bands", "Battle Ropes", "Slam Balls", "TRX Suspension Trainers"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor", "Pilates Instructor", "Yoga Instructor"],
    amenities: ["Fitness Tracking", "Fresh Fruit Bar", "Equipment Orientation", "Fitness Consultations", "Hair Dryers", "Water Stations", "Toiletries", "Protein Shakes", "Body Composition Analysis"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
    id: "4af11d5c-7d2a-45f7-9a3e-1e2d3e412a5f",
    vesselId: "fv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(523) 470-1970",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Arc Trainers", "Punching Bags", "Cardio Step Platforms", "Agility Hurdles", "Cardio Punching Bags", "SkiErg", "Recumbent Bikes", "Jump Ropes", "Leg Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Row Machine", "Dumbbells", "Cable Reverse Fly Machine", "Free Weights", "Weight Machines", "Cable Single Arm Tricep Extension Machine", "Agility Dots", "Speed Parachutes", "Tire Flips", "Battle Ropes", "Speed Harnesses", "Kickboxing Equipment", "Infrared Sauna", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Locker Rentals", "Workout Programs", "Audio/Visual Entertainment", "Hair Dryers", "Towel Service", "Fresh Fruit Bar", "Nutrition Counseling", "Personal Training Sessions", "Toiletries", "Fitness Tracking"],
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
    hasFitnessAssessments: false,
    hasChildcareServices: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "3347eff2-8e32-4609-947e-44b63ae997e6",
    vesselId: "fv--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(851) 871-1578",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Stationary Bikes", "SkiErg", "Arc Trainers", "Boxing Equipment", "Cardio Punching Bags", "Jump Ropes", "Punching Bags", "Cable Single Arm Reverse Fly Machine", "Cable Upright Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Abdominal Crunch Machine", "Cable Calf Raise Machine", "Functional Trainers", "Bench Press", "Cable Shrug Machine", "Speed Cords", "Tire Flips", "Medicine Balls", "Kettlebells", "BOSU Balls", "Speed Sleds", "Speed Harnesses", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Water Stations", "Protein Shakes", "Hair Dryers", "Personal Training Sessions", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Group Fitness Classes", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "3ab7c5a3-40b7-4f44-bafe-84dca9cdb5bb",
    vesselId: "cs--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(338) 796-8627",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Treadmills", "Elliptical Machines", "VersaClimber", "Stationary Bikes", "Jump Ropes", "Battle Ropes", "Rowing Machines", "Cardio Step Platforms", "Smith Machines", "Cable Single Arm Single Leg Squat Machine", "Free Weights", "Cable Single Arm Deadlift Machine", "Dumbbells", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Kettlebells", "Stability Balls", "Speed Harnesses", "Medicine Balls", "Speed Resistors", "Agility Cones", "Sandbags", "Agility Hurdles", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor", "Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Hair Dryers", "Workout Programs", "Locker Rentals", "Body Composition Analysis", "Fitness Consultations", "Group Fitness Classes", "Nutrition Counseling", "Audio/Visual Entertainment", "Equipment Orientation", "Fresh Fruit Bar", "Smoothie Bar"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    isPopular: true
  },
  {
    id: "0cec8493-d877-4e4d-a066-019879968e40",
    vesselId: "my-istanbul-voyager",
    name: "Istanbul Fitness Center",
    description: "Discover wellness at sea with Istanbul Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(186) 271-8846",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Punching Bags", "Elliptical Machines", "Battle Ropes", "Treadmills", "VersaClimber", "Cardio Punching Bags", "Cable Single Arm Shoulder Press Machine", "Cable Lunge Machine", "Cable Back Extension Machine", "Cable Crossover Machine", "Chest Press Machine", "Cable Face Pull Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Ab Crunch Machine", "Seated Row Machine", "Cable Calf Raise Machine", "Dumbbells", "Functional Trainers", "Speed Parachutes", "Speed Ladders", "Medicine Balls", "Weighted Vests", "Balance Boards", "Tire Flips", "Cryotherapy Chamber", "Yoga Equipment", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist"],
    amenities: ["Fitness Consultations", "Locker Rentals", "Audio/Visual Entertainment", "Toiletries", "Water Stations", "Personal Training Sessions", "Hair Dryers", "Group Fitness Classes", "Equipment Orientation", "Workout Programs", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    id: "f8083de2-9b19-4a87-939a-d37f3946f0a9",
    vesselId: "rv--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the RV  of the Deep. Stay active and healthy while cruising the waters near Istanbul with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(761) 308-1147",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Cardio Step Platforms", "Stationary Bikes", "Recumbent Bikes", "Cardio Kettlebells", "Rowing Machines", "Smith Machine", "Chest Press Machine", "Cable Single Arm Lunge Machine", "Weight Machines", "Leg Curl Machine", "Cable Single Arm Tricep Extension Machine", "Cable Russian Twist Machine", "Free Weights", "Seated Row Machine", "Agility Markers", "Battle Ropes", "Jump Boxes", "Speed Harnesses", "Sledgehammers", "Agility Ladders", "Boxing Equipment", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Water Stations", "Smoothie Bar", "Audio/Visual Entertainment", "Towel Service", "Fresh Fruit Bar", "Fitness Tracking", "Toiletries", "Protein Shakes", "Equipment Orientation", "Group Fitness Classes", "Nutrition Counseling", "Locker Rentals"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "b1d97753-ffd6-42d0-ab66-606786018f04",
    vesselId: "fv-the--mariner",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the FV The  Mariner. Stay active and healthy while cruising the waters near Istanbul with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(177) 931-8392",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Cardio Punching Bags", "VersaClimber", "Cardio Kickboxing Bags", "StairMaster", "Recumbent Bikes", "Agility Hurdles", "Cable Single Arm Calf Raise Machine", "Cable Reverse Fly Machine", "Cable Single Arm Row Machine", "Leg Press Machine", "Functional Trainers", "Cable Tricep Pushdown Machine", "Pull-up Station", "Cable Squat Machine", "Multi-Gym Systems", "Dumbbells", "Free Weights", "Cable Upright Row Machine", "Battle Ropes", "Balance Boards", "Speed Harnesses", "Speed Hurdles", "Weighted Vests", "TRX Suspension Trainers", "Yoga Equipment", "HydroMassage Beds", "Yoga Wheels"],
    personalTrainers: ["Yoga Instructor", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Towel Service", "Fitness Consultations", "Nutrition Counseling", "Body Composition Analysis", "Audio/Visual Entertainment", "Protein Shakes", "Toiletries", "Locker Rentals", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
    id: "d02128e0-0304-46b3-8c13-8459bf054b5e",
    vesselId: "sv--gale",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(143) 319-1105",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Battle Ropes", "Cardio Medicine Balls", "Cardio Kettlebells", "Recumbent Bikes", "Rowing Machines", "Cardio Punching Bags", "Stationary Bikes", "Elliptical Machines", "Treadmills", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Bicep Curl Machine", "Cable Row Machine", "Seated Row Machine", "Cable Single Arm Woodchopper Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Reverse Fly Machine", "Resistance Bands", "Medicine Balls", "Plyo Boxes", "Kettlebells", "Yoga Mats", "Aqua Fitness Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Youth Fitness Specialist", "Pilates Instructor"],
    amenities: ["Fresh Fruit Bar", "Towel Service", "Audio/Visual Entertainment", "Body Composition Analysis", "Group Fitness Classes", "Water Stations", "Protein Shakes", "Workout Programs"],
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
    hasFitnessAssessments: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  }
];
