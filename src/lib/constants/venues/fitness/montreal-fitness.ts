// Fitness center venues data for Montreal
// This file contains fitness center and wellness facility information for cruise vessels operating from Montreal
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const montrealFitnessCenters: FitnessCenter[] = [
  {
    id: "29297f9e-b2c1-4787-a273-6d98a8fc7979",
    vesselId: "ts--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(838) 652-8616",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Jump Ropes", "Cardio Step Platforms", "Battle Ropes", "Arc Trainers", "Cardio Medicine Balls", "Air Bikes", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Tricep Extension Machine", "Abdominal Crunch Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Smith Machine", "Cable Lunge Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Calf Raise Machine", "Cable Single Arm Hip Thrust Machine", "Agility Hurdles", "Speed Bands", "Kettlebells", "Speed Resistors", "Speed Ladders", "Slam Balls", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Fitness Tracking", "Personal Training Sessions", "Hair Dryers", "Toiletries", "Smoothie Bar", "Towel Service", "Audio/Visual Entertainment", "Fitness Consultations", "Fresh Fruit Bar", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
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
    id: "91ff3d86-7ecd-4643-aad6-0ff6d7f161a4",
    vesselId: "hms-montreal-voyager",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(196) 814-7217",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Punching Bags", "Cardio Gliders", "StairMaster", "Arc Trainers", "Cardio Medicine Balls", "Rowing Machines", "Spin Bikes", "Air Bikes", "Leg Extension Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Chest Fly Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Woodchopper Machine", "Leg Press Machine", "Cable Single Arm Squat Machine", "Slam Balls", "Speed Ladders", "Agility Poles", "Speed Sleds", "Boxing Equipment", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Fitness Nutrition Specialist", "Strength and Conditioning Coach", "Yoga Instructor"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Protein Shakes", "Body Composition Analysis", "Nutrition Counseling", "Workout Programs", "Hair Dryers", "Equipment Orientation", "Fresh Fruit Bar", "Fitness Consultations", "Water Stations", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "904b59fa-dba7-4c21-802a-a91e66bc0a33",
    vesselId: "nb--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Montreal. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(801) 589-3481",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Recumbent Bikes", "Battle Ropes", "Jump Ropes", "Cardio Resistance Bands", "Cardio Step Platforms", "Cardio Kickboxing Bags", "Rowing Machines", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Crossover Machine", "Cable Single Arm Glute Kickback Machine", "Leg Curl Machine", "Cable Lateral Raise Machine", "Cable Bicep Curl Machine", "Cable Pallof Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Russian Twist Machine", "Smith Machine", "Cable Back Extension Machine", "Speed Ladders", "Agility Dots", "Yoga Mats", "Agility Poles", "BOSU Balls", "Speed Parachutes", "Speed Resistors", "Boxing Equipment", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Body Composition Analysis", "Water Stations", "Group Fitness Classes", "Towel Service", "Protein Shakes", "Fitness Tracking", "Personal Training Sessions", "Toiletries", "Locker Rentals", "Hair Dryers", "Nutrition Counseling", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "308e079b-be8a-4dad-9fc3-5bbc57b719a7",
    vesselId: "rms-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(663) 543-3405",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Punching Bags", "Recumbent Bikes", "Agility Hurdles", "Cardio Punching Bags", "Battle Ropes", "Free Weights", "Cable Single Arm Chest Press Machine", "Cable Squat Machine", "Shoulder Press Machine", "Cable Ab Crunch Machine", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Weight Machines", "Speed Cords", "Agility Ladders", "Plyo Boxes", "Jump Boxes", "Sledgehammers", "Stability Balls", "BOSU Balls", "Aqua Fitness Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist", "Senior Fitness Specialist"],
    amenities: ["Workout Programs", "Fitness Tracking", "Towel Service", "Body Composition Analysis", "Group Fitness Classes", "Nutrition Counseling", "Water Stations", "Audio/Visual Entertainment"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "161a4537-43a8-48b9-8ff6-7d8298590729",
    vesselId: "hms--gale",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Montreal. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(922) 700-7524",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "SkiErg", "Treadmills", "Cardio Step Platforms", "Agility Hurdles", "Elliptical Machines", "Boxing Equipment", "Cardio Kickboxing Bags", "Cardio Resistance Bands", "Cable Calf Raise Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Weight Machines", "Lat Pulldown", "Cable Single Arm Shrug Machine", "Cable Reverse Fly Machine", "Resistance Bands", "Agility Cones", "Speed Cords", "Plyo Boxes", "Speed Harnesses", "TRX Suspension Trainers", "Yoga Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor", "Pilates Instructor"],
    amenities: ["Protein Shakes", "Smoothie Bar", "Personal Training Sessions", "Group Fitness Classes", "Water Stations", "Fitness Tracking", "Toiletries", "Hair Dryers", "Towel Service", "Body Composition Analysis", "Fresh Fruit Bar"],
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
    hasHealthScreenings: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "fad4bb4c-7923-4064-b041-2a9009e903c7",
    vesselId: "ps--explorer",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(989) 522-9183",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Cardio Resistance Bands", "Cardio Kettlebells", "Treadmills", "Cardio Medicine Balls", "Rowing Machines", "Chest Fly Machine", "Cable Crossover Machine", "Cable Single Arm Shoulder Press Machine", "Cable Hip Thrust Machine", "Leg Curl Machine", "Cable Machines", "Cable Single Arm Bicep Curl Machine", "Cable Back Extension Machine", "Free Weights", "Agility Hurdles", "BOSU Balls", "Speed Ladders", "Agility Markers", "Speed Parachutes", "Speed Resistors", "Spinning Bikes"],
    personalTrainers: ["Strength and Conditioning Coach", "Certified Personal Trainer", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Body Composition Analysis", "Nutrition Counseling", "Personal Training Sessions", "Audio/Visual Entertainment", "Towel Service", "Water Stations", "Hair Dryers", "Fresh Fruit Bar", "Toiletries", "Group Fitness Classes", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    isPopular: true
  },
  {
    id: "1c8fa716-de4c-4adb-8f28-b493cb33cdf7",
    vesselId: "rv-montreal-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Montreal. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(544) 120-9513",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Agility Hurdles", "Arc Trainers", "Treadmills", "Battle Ropes", "Air Bikes", "Elliptical Machines", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Tricep Pushdown Machine", "Smith Machine", "Leg Curl Machine", "Cable Calf Raise Machine", "Cable Single Arm Row Machine", "Dumbbells", "Cable Deadlift Machine", "Speed Ladders", "Medicine Balls", "Kettlebells", "Yoga Mats", "Slam Balls", "Speed Hurdles", "CrossFit Equipment", "Stretching Stations"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor"],
    amenities: ["Toiletries", "Equipment Orientation", "Workout Programs", "Body Composition Analysis", "Group Fitness Classes", "Protein Shakes", "Towel Service", "Personal Training Sessions", "Hair Dryers", "Nutrition Counseling"],
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "87d7f7ab-6e26-4515-88c5-fed69ab9f9ed",
    vesselId: "sy--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Montreal. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(858) 238-4967",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Recumbent Bikes", "Cardio Punching Bags", "Cardio Medicine Balls", "Stationary Bikes", "Air Bikes", "Cable Single Arm Single Leg Glute Kickback Machine", "Smith Machine", "Abdominal Crunch Machine", "Free Weights", "Cable Single Arm Single Leg Squat Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Row Machine", "Speed Hurdles", "Foam Rollers", "Kettlebells", "TRX Suspension Trainers", "Medicine Balls", "Speed Resistors", "Speed Harnesses", "Massage Chairs"],
    personalTrainers: ["Strength Training Specialist", "Senior Fitness Specialist", "Youth Fitness Specialist"],
    amenities: ["Toiletries", "Towel Service", "Group Fitness Classes", "Body Composition Analysis", "Workout Programs", "Water Stations", "Audio/Visual Entertainment", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "2b6d757f-0e42-440a-80b8-2a341cc95c54",
    vesselId: "sy-the--mariner",
    name: "SY The  Mariner Fitness Center",
    description: "SY The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(310) 379-8656",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "SkiErg", "Recumbent Bikes", "Cable Machines", "Cable Single Arm Single Leg Lunge Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Crossover Machine", "Cable Squat Machine", "Weight Machines", "Smith Machine", "Chest Fly Machine", "Cable Single Arm Pallof Press Machine", "Resistance Bands", "Foam Rollers", "Medicine Balls", "Speed Parachutes", "Speed Cones", "Agility Dots", "Speed Ladders", "Compression Therapy"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Consultations", "Equipment Orientation", "Group Fitness Classes", "Smoothie Bar", "Fitness Tracking", "Fresh Fruit Bar", "Toiletries", "Personal Training Sessions", "Nutrition Counseling"],
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
    id: "06bc878f-7929-4519-9655-bc3580d43dba",
    vesselId: "ss--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(712) 696-4427",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Punching Bags", "Cardio Kickboxing Bags", "Boxing Equipment", "Spin Bikes", "Recumbent Bikes", "Arc Trainers", "Stationary Bikes", "Cable Single Arm Single Leg Upright Row Machine", "Cable Deadlift Machine", "Cable Single Arm Calf Raise Machine", "Cable Tricep Pushdown Machine", "Functional Trainers", "Cable Russian Twist Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Back Extension Machine", "Resistance Bands", "TRX Suspension Trainers", "Sledgehammers", "Agility Ladders", "Agility Cones", "Yoga Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Strength and Conditioning Coach", "Youth Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Toiletries", "Smoothie Bar", "Hair Dryers", "Towel Service", "Water Stations", "Protein Shakes", "Personal Training Sessions", "Locker Rentals", "Fitness Tracking", "Equipment Orientation", "Audio/Visual Entertainment", "Fresh Fruit Bar"],
    is24Hours: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  }
];
