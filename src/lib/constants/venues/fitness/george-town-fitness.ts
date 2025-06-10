// Fitness center venues data for George Town
// This file contains fitness center and wellness facility information for cruise vessels operating from George Town
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const georgeTownFitnessCenters: FitnessCenter[] = [
  {
    id: "180807b6-0ceb-4c86-a388-f7fe81dec46b",
    vesselId: "hms--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(644) 284-1438",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Elliptical Machines", "Arc Trainers", "Cardio Step Platforms", "StairMaster", "Treadmills", "Air Bikes", "Cardio Medicine Balls", "Recumbent Bikes", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Power Rack", "Cable Single Arm Single Leg Reverse Fly Machine", "Agility Ladders", "Tire Flips", "Jump Boxes", "Speed Bands", "Speed Hurdles", "Kettlebells", "Dance Fitness Equipment"],
    personalTrainers: ["Spinning Instructor", "Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Nutrition Counseling", "Locker Rentals", "Hair Dryers", "Protein Shakes", "Workout Programs", "Fitness Tracking", "Audio/Visual Entertainment", "Smoothie Bar"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    isPopular: true
  },
  {
    id: "9b053c0d-49cc-4203-a72b-d26d91441998",
    vesselId: "rv-george-town-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(348) 713-1433",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Cardio Gliders", "Cardio Medicine Balls", "Air Bikes", "Cardio Kickboxing Bags", "Agility Hurdles", "Spin Bikes", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Speed Resistors", "Plyo Boxes", "Agility Dots", "Tire Flips", "Weighted Vests", "Battle Ropes", "Dance Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Smoothie Bar", "Group Fitness Classes", "Locker Rentals", "Towel Service", "Audio/Visual Entertainment", "Protein Shakes", "Body Composition Analysis", "Equipment Orientation"],
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
    id: "4725d61b-ffc4-427b-80c7-ba74dc1fc9d8",
    vesselId: "ms--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(920) 819-8797",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Boxing Equipment", "Cardio Punching Bags", "SkiErg", "Cardio Medicine Balls", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Chest Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Power Rack", "Cable Single Arm Hip Thrust Machine", "Cable Deadlift Machine", "Cable Woodchopper Machine", "Leg Press Machine", "Cable Upright Row Machine", "Jump Boxes", "Speed Harnesses", "Battle Ropes", "Weighted Vests", "Agility Cones", "Resistance Bands", "Medicine Balls", "Tire Flips", "Pilates Reformers", "Spinning Bikes", "Cryotherapy Chambers"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Corrective Exercise Specialist", "Strength Training Specialist"],
    amenities: ["Fresh Fruit Bar", "Fitness Tracking", "Audio/Visual Entertainment", "Nutrition Counseling", "Equipment Orientation", "Workout Programs", "Hair Dryers", "Toiletries", "Body Composition Analysis", "Towel Service", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "e7559d7e-da71-48e3-a8db-28809e4e943e",
    vesselId: "ts-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around George Town. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(896) 254-2636",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Jump Ropes", "Cardio Gliders", "SkiErg", "Spin Bikes", "Agility Hurdles", "Cardio Punching Bags", "Battle Ropes", "Cardio Step Platforms", "Cardio Kettlebells", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Free Weights", "Cable Single Arm Single Leg Face Pull Machine", "Dumbbells", "Cable Squat Machine", "Speed Bands", "Speed Hurdles", "Agility Cones", "Agility Dots", "Stability Balls", "Medicine Balls", "Boxing Equipment"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist"],
    amenities: ["Fitness Consultations", "Nutrition Counseling", "Audio/Visual Entertainment", "Group Fitness Classes", "Body Composition Analysis", "Personal Training Sessions", "Hair Dryers", "Water Stations"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    isPopular: false
  },
  {
    id: "62cdbaae-31cd-46ff-9da8-f1d6f7d7db94",
    vesselId: "ps--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around George Town. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(597) 299-6044",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Arc Trainers", "Cardio Kettlebells", "Cardio Step Platforms", "Cardio Medicine Balls", "Recumbent Bikes", "Cable Single Arm Shoulder Press Machine", "Pull-up Station", "Cable Machines", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Shrug Machine", "Multi-Gym Systems", "Cable Face Pull Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Lateral Raise Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Face Pull Machine", "Cable Deadlift Machine", "Speed Cones", "Foam Rollers", "Agility Markers", "Speed Hurdles", "Speed Cords", "Stability Balls", "HydroMassage Beds", "Yoga Equipment", "Infrared Sauna"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength and Conditioning Coach", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Locker Rentals", "Fitness Tracking", "Workout Programs", "Nutrition Counseling", "Body Composition Analysis", "Toiletries", "Audio/Visual Entertainment", "Fitness Consultations", "Group Fitness Classes", "Hair Dryers", "Personal Training Sessions", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "2a17e1cc-c593-4c4f-bac5-9ff045eec066",
    vesselId: "my--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(848) 669-3978",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Agility Hurdles", "Battle Ropes", "Jump Ropes", "Elliptical Machines", "SkiErg", "Cardio Medicine Balls", "Air Bikes", "Cardio Step Platforms", "Cable Single Arm Single Leg Russian Twist Machine", "Back Extension Machine", "Free Weights", "Tricep Extension Machine", "Abdominal Crunch Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Shrug Machine", "Cable Lateral Raise Machine", "Cable Single Arm Ab Crunch Machine", "Functional Trainers", "Cable Single Arm Pallof Press Machine", "BOSU Balls", "Slam Balls", "Jump Boxes", "Plyo Boxes", "Agility Dots", "Dance Fitness Equipment", "Functional Training Equipment"],
    personalTrainers: ["Strength Training Specialist", "Strength and Conditioning Coach", "Spinning Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Group Fitness Classes", "Workout Programs", "Fitness Tracking", "Hair Dryers", "Audio/Visual Entertainment", "Locker Rentals", "Equipment Orientation", "Protein Shakes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "8b2bc02b-836b-48a6-9f09-72bad9452ee4",
    vesselId: "sy-george-town-voyager",
    name: "George Town Fitness Center",
    description: "George Town Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(312) 778-1054",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Arc Trainers", "Cardio Kickboxing Bags", "Treadmills", "Cardio Gliders", "Cardio Resistance Bands", "Cardio Medicine Balls", "Air Bikes", "SkiErg", "Agility Hurdles", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Plyo Boxes", "Weighted Vests", "Foam Rollers", "Agility Markers", "Balance Boards", "Dance Fitness Equipment"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Toiletries", "Group Fitness Classes", "Fitness Tracking", "Hair Dryers", "Workout Programs", "Smoothie Bar", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "84f66abb-64db-4161-b90f-2ef49c3864b6",
    vesselId: "sv--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(431) 467-4354",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Cardio Gliders", "Boxing Equipment", "Cardio Step Platforms", "Rowing Machines", "Cardio Punching Bags", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Bench Press", "Chest Fly Machine", "Cable Back Extension Machine", "Bicep Curl Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Plank Machine", "Plyo Boxes", "Speed Parachutes", "Agility Ladders", "Agility Dots", "Weighted Vests", "Speed Resistors", "Agility Poles", "Jump Boxes", "Yoga Blocks"],
    personalTrainers: ["Strength and Conditioning Coach", "Youth Fitness Specialist", "Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Audio/Visual Entertainment", "Toiletries", "Nutrition Counseling", "Locker Rentals", "Equipment Orientation", "Fresh Fruit Bar", "Smoothie Bar", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "cdf019d5-789d-4a9a-ae3a-dacc3e983c8d",
    vesselId: "ly-the--mariner",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(223) 516-3947",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Stationary Bikes", "Elliptical Machines", "Boxing Equipment", "Treadmills", "Arc Trainers", "Punching Bags", "Battle Ropes", "Air Bikes", "Cardio Kickboxing Bags", "Cable Reverse Fly Machine", "Cable Single Arm Bicep Curl Machine", "Shoulder Press Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Deadlift Machine", "Weight Machines", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Woodchopper Machine", "Plate Loaded Machines", "Multi-Gym Systems", "Sledgehammers", "Stability Balls", "Medicine Balls", "Agility Ladders", "Speed Cords", "Pilates Reformers", "Spinning Bikes", "TRX Suspension Trainers"],
    personalTrainers: ["Youth Fitness Specialist", "Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Fitness Consultations", "Body Composition Analysis", "Nutrition Counseling", "Audio/Visual Entertainment", "Toiletries", "Fresh Fruit Bar", "Hair Dryers", "Protein Shakes", "Fitness Tracking"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "3b45198d-3e0c-457d-8e08-096ac4fd7f14",
    vesselId: "cs--gale",
    name: "George Town Fitness Center",
    description: "Discover wellness at sea with George Town Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(306) 225-6813",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Battle Ropes", "Boxing Equipment", "Elliptical Machines", "Cardio Step Platforms", "Punching Bags", "Cable Single Arm Single Leg Upright Row Machine", "Cable Machines", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Squat Machine", "Seated Row Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Plank Machine", "Weighted Vests", "BOSU Balls", "Jump Boxes", "Speed Resistors", "Agility Cones", "Agility Dots", "Functional Training Equipment"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor", "Strength Training Specialist", "Youth Fitness Specialist"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Workout Programs", "Nutrition Counseling", "Fresh Fruit Bar", "Toiletries", "Equipment Orientation", "Smoothie Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
      }
    ],
    isPopular: true
  }
];
