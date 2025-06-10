// Fitness center venues data for Venice
// This file contains fitness center and wellness facility information for cruise vessels operating from Venice
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const veniceFitnessCenters: FitnessCenter[] = [
  {
    id: "a6a1d2fe-b71a-4233-b523-3c1cddd35a0f",
    vesselId: "ss--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Venice. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(548) 848-8236",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Cardio Kettlebells", "Rowing Machines", "SkiErg", "Cardio Kickboxing Bags", "Recumbent Bikes", "Stationary Bikes", "VersaClimber", "Air Bikes", "Cable Pallof Press Machine", "Power Rack", "Cable Single Arm Calf Raise Machine", "Tricep Extension Machine", "Cable Woodchopper Machine", "Cable Bicep Curl Machine", "Cable Crossover Machine", "Seated Row Machine", "Cable Single Arm Back Extension Machine", "Agility Poles", "Agility Hurdles", "Agility Ladders", "Foam Rollers", "Tire Flips", "Kettlebells", "Speed Ladders", "Stretching Stations", "HydroMassage Beds"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Water Stations", "Personal Training Sessions", "Workout Programs", "Equipment Orientation", "Fitness Consultations", "Toiletries", "Fitness Tracking", "Group Fitness Classes", "Body Composition Analysis"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
    isPopular: true
  },
  {
    id: "e493389c-e961-487a-8111-fbfcfb77a4f2",
    vesselId: "ms-venice-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(667) 127-6160",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "Jump Ropes", "Elliptical Machines", "StairMaster", "SkiErg", "VersaClimber", "Cardio Gliders", "Stationary Bikes", "Cardio Kettlebells", "Cable Single Arm Glute Kickback Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Lunge Machine", "Back Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Plank Machine", "Chest Press Machine", "Speed Sleds", "Battle Ropes", "Speed Harnesses", "Speed Hurdles", "Weighted Vests", "Medicine Balls", "BOSU Balls", "Speed Bands", "Yoga Blocks", "TRX Suspension Trainers", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Audio/Visual Entertainment", "Towel Service", "Fitness Consultations", "Fresh Fruit Bar", "Nutrition Counseling", "Hair Dryers", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "e6ea9719-b726-474d-bc6b-7e80c718343d",
    vesselId: "hms--of-the-deep",
    name: "HMS  of the Deep Fitness Center",
    description: "Welcome to HMS  of the Deep Fitness Center, your premier wellness destination aboard the HMS  of the Deep. Stay active and healthy while cruising the waters near Venice with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(868) 984-1996",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Cardio Punching Bags", "Rowing Machines", "Cardio Step Platforms", "Spin Bikes", "Boxing Equipment", "VersaClimber", "Battle Ropes", "Lat Pulldown", "Dumbbells", "Abdominal Crunch Machine", "Cable Lateral Raise Machine", "Leg Press Machine", "Cable Glute Kickback Machine", "Barbells", "Cable Single Arm Row Machine", "Weighted Vests", "Slam Balls", "Speed Parachutes", "BOSU Balls", "Speed Sleds", "Speed Ladders", "Speed Bands", "Agility Ladders", "Recovery Tools"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Fitness Tracking", "Nutrition Counseling", "Towel Service", "Body Composition Analysis", "Protein Shakes", "Water Stations", "Fresh Fruit Bar", "Locker Rentals", "Smoothie Bar"],
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
    isPopular: true
  },
  {
    id: "06f31892-2127-483f-b02a-13d919f4877e",
    vesselId: "fv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(235) 325-3398",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "SkiErg", "Cardio Kettlebells", "Stationary Bikes", "Air Bikes", "Punching Bags", "Agility Hurdles", "Rowing Machines", "Cable Single Arm Reverse Fly Machine", "Cable Face Pull Machine", "Cable Lateral Raise Machine", "Weight Machines", "Cable Bicep Curl Machine", "Calf Raise Machine", "Cable Single Arm Chest Press Machine", "Smith Machines", "Seated Row Machine", "Bench Press", "Cable Pallof Press Machine", "Cable Back Extension Machine", "Medicine Balls", "Agility Poles", "Speed Hurdles", "Speed Cords", "Agility Cones", "Agility Markers", "Barre Equipment", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Youth Fitness Specialist", "Corrective Exercise Specialist", "Strength and Conditioning Coach"],
    amenities: ["Group Fitness Classes", "Body Composition Analysis", "Water Stations", "Equipment Orientation", "Fresh Fruit Bar", "Toiletries", "Fitness Tracking", "Personal Training Sessions", "Protein Shakes", "Hair Dryers"],
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
    hasNutritionCounseling: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "af5c4dac-ff15-4073-affa-7739c0026e17",
    vesselId: "ps--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Venice. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(527) 353-7215",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Agility Hurdles", "Boxing Equipment", "Treadmills", "Recumbent Bikes", "Cardio Gliders", "Jump Ropes", "Stationary Bikes", "Rowing Machines", "Chest Press Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Machines", "Cable Single Arm Squat Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Plank Machine", "Smith Machines", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Shrug Machine", "Yoga Mats", "Medicine Balls", "Weighted Vests", "Agility Dots", "Stability Balls", "Sledgehammers", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist"],
    amenities: ["Water Stations", "Locker Rentals", "Towel Service", "Toiletries", "Nutrition Counseling", "Fitness Tracking", "Workout Programs", "Fresh Fruit Bar", "Protein Shakes", "Personal Training Sessions", "Audio/Visual Entertainment", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "dde9c78d-b8fb-44e6-8a71-fb501c4cd293",
    vesselId: "sy--explorer",
    name: "SY  Explorer Fitness Center",
    description: "SY  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Venice. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(830) 159-1347",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "StairMaster", "Agility Hurdles", "Stationary Bikes", "Cardio Step Platforms", "Cardio Resistance Bands", "Bench Press", "Cable Single Arm Shrug Machine", "Calf Raise Machine", "Cable Lateral Raise Machine", "Cable Single Arm Lunge Machine", "Cable Calf Raise Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Power Rack", "Cable Single Arm Upright Row Machine", "Agility Markers", "Sledgehammers", "Medicine Balls", "Sandbags", "Speed Parachutes", "Recovery Tools", "Aqua Fitness Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Protein Shakes", "Equipment Orientation", "Water Stations", "Fitness Consultations", "Toiletries", "Audio/Visual Entertainment", "Personal Training Sessions", "Nutrition Counseling"],
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
    id: "9f093229-8e32-4489-b2ca-8700f4c8252d",
    vesselId: "nb-venice-voyager",
    name: "NB Venice Voyager Fitness Center",
    description: "Discover wellness at sea with NB Venice Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(223) 733-1312",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Punching Bags", "Battle Ropes", "Air Bikes", "Cardio Step Platforms", "Cardio Kickboxing Bags", "Recumbent Bikes", "Rowing Machines", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Back Extension Machine", "Bicep Curl Machine", "Weight Machines", "Cable Single Arm Hip Thrust Machine", "Cable Tricep Pushdown Machine", "Calf Raise Machine", "Cable Back Extension Machine", "Yoga Mats", "Sandbags", "Speed Resistors", "Agility Ladders", "Agility Markers", "Stretching Stations", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Corrective Exercise Specialist", "Youth Fitness Specialist", "Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Audio/Visual Entertainment", "Toiletries", "Water Stations", "Fresh Fruit Bar", "Fitness Tracking", "Towel Service", "Hair Dryers", "Protein Shakes", "Body Composition Analysis", "Smoothie Bar"],
    is24Hours: true,
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
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    id: "9924fb88-5e05-4261-bd88-07bb7a1a8a94",
    vesselId: "rv--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the RV  of the Deep. Stay active and healthy while cruising the waters near Venice with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(938) 539-8243",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Resistance Bands", "Recumbent Bikes", "Battle Ropes", "Agility Hurdles", "StairMaster", "Pull-up Station", "Cable Single Arm Single Leg Plank Machine", "Power Rack", "Cable Deadlift Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Upright Row Machine", "Foam Rollers", "Speed Hurdles", "Medicine Balls", "Speed Bands", "Agility Markers", "Kickboxing Equipment"],
    personalTrainers: ["Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Towel Service", "Fresh Fruit Bar", "Water Stations", "Fitness Consultations", "Audio/Visual Entertainment", "Toiletries", "Locker Rentals", "Nutrition Counseling", "Personal Training Sessions"],
    is24Hours: true,
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
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "847a6ded-8bfc-4e2d-9a42-1215f6fd4faf",
    vesselId: "rms-the--mariner",
    name: "Venice Fitness Center",
    description: "Venice Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Venice. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(122) 342-2583",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Recumbent Bikes", "SkiErg", "Cardio Gliders", "Air Bikes", "Punching Bags", "Cardio Kettlebells", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Agility Cones", "Speed Harnesses", "Plyo Boxes", "Speed Parachutes", "Agility Hurdles", "Balance Boards", "Sledgehammers", "Pilates Reformers", "Recovery Tools", "Yoga Straps"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Audio/Visual Entertainment", "Nutrition Counseling", "Hair Dryers", "Water Stations", "Group Fitness Classes", "Smoothie Bar", "Workout Programs", "Locker Rentals", "Fitness Tracking", "Body Composition Analysis", "Personal Training Sessions"],
    is24Hours: true,
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
    id: "9d85f785-8874-4bda-950f-ff3de8b0718b",
    vesselId: "ps--gale",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the PS  Gale. Stay active and healthy while cruising the waters near Venice with our state-of-the-art fitness facilities. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(871) 600-7629",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "SkiErg", "Agility Hurdles", "Spin Bikes", "Air Bikes", "Stationary Bikes", "Battle Ropes", "Cable Single Arm Hip Thrust Machine", "Cable Crossover Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Shrug Machine", "Weight Machines", "Speed Parachutes", "Speed Cones", "Speed Ladders", "Speed Cords", "Speed Bands", "Slam Balls", "Foam Rollers", "Stretching Stations", "HydroMassage Beds"],
    personalTrainers: ["Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Equipment Orientation", "Locker Rentals", "Personal Training Sessions", "Fitness Tracking", "Toiletries", "Hair Dryers", "Protein Shakes", "Water Stations"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  }
];
