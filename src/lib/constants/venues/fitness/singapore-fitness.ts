// Fitness center venues data for Singapore
// This file contains fitness center and wellness facility information for cruise vessels operating from Singapore
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const singaporeFitnessCenters: FitnessCenter[] = [
  {
    id: "5b5b9b06-3a5b-4de9-9ebb-c20272db724e",
    vesselId: "ms--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(265) 363-8222",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Boxing Equipment", "Treadmills", "Cardio Punching Bags", "Punching Bags", "Cardio Step Platforms", "VersaClimber", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Pull-up Station", "Cable Upright Row Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Chest Press Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Lunge Machine", "Tire Flips", "Medicine Balls", "Agility Poles", "Sandbags", "Kettlebells", "BOSU Balls", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Protein Shakes", "Workout Programs", "Water Stations", "Equipment Orientation", "Fitness Tracking", "Audio/Visual Entertainment", "Personal Training Sessions", "Towel Service", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "9092fa1d-2f87-4d12-bd61-b5e8a1e67450",
    vesselId: "mv-singapore-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Singapore. Our facility features steam room.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(313) 526-9301",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Stationary Bikes", "Recumbent Bikes", "Punching Bags", "Rowing Machines", "Air Bikes", "Treadmills", "Cardio Step Platforms", "Elliptical Machines", "Cable Row Machine", "Bench Press", "Pull-up Station", "Chest Press Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Upright Row Machine", "Medicine Balls", "Agility Dots", "TRX Suspension Trainers", "Agility Cones", "Slam Balls", "Speed Cones", "Yoga Straps", "Massage Chairs", "Kickboxing Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Fitness Consultations", "Towel Service", "Smoothie Bar", "Group Fitness Classes", "Water Stations", "Body Composition Analysis", "Equipment Orientation", "Fitness Tracking", "Personal Training Sessions", "Protein Shakes", "Hair Dryers", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "dd9f3886-d5b0-4f23-908f-aa23782d0280",
    vesselId: "rms--of-the-deep",
    name: "Singapore Fitness Center",
    description: "Singapore Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Singapore. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(896) 778-8564",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "StairMaster", "Elliptical Machines", "Stationary Bikes", "Battle Ropes", "Spin Bikes", "Cardio Punching Bags", "Recumbent Bikes", "Cardio Medicine Balls", "Leg Press Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Power Rack", "Cable Deadlift Machine", "Chest Fly Machine", "Cable Crossover Machine", "Tricep Extension Machine", "Back Extension Machine", "Speed Parachutes", "TRX Suspension Trainers", "Kettlebells", "Speed Ladders", "Speed Cords", "Plyo Boxes", "Foam Rollers", "CrossFit Equipment", "HydroMassage Beds"],
    personalTrainers: ["Strength and Conditioning Coach", "Senior Fitness Specialist"],
    amenities: ["Toiletries", "Water Stations", "Hair Dryers", "Body Composition Analysis", "Personal Training Sessions", "Audio/Visual Entertainment", "Fitness Consultations", "Fitness Tracking", "Group Fitness Classes", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "deb28b68-d03f-4a6f-99f1-c9015ebf2304",
    vesselId: "ms-the--mariner",
    name: "Singapore Fitness Center",
    description: "Singapore Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Singapore. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(259) 699-6076",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Recumbent Bikes", "Cardio Medicine Balls", "Cardio Punching Bags", "Punching Bags", "Jump Ropes", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Woodchopper Machine", "Dumbbells", "Cable Row Machine", "Cable Face Pull Machine", "Free Weights", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Plank Machine", "Weighted Vests", "Agility Ladders", "Speed Bands", "BOSU Balls", "Speed Ladders", "Medicine Balls", "Speed Cones", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Youth Fitness Specialist", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Personal Training Sessions", "Equipment Orientation", "Water Stations", "Toiletries", "Locker Rentals", "Smoothie Bar", "Workout Programs", "Body Composition Analysis", "Audio/Visual Entertainment", "Fitness Tracking", "Protein Shakes", "Fitness Consultations"],
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
    isPopular: false
  },
  {
    id: "01b5742b-84ab-4945-b1b0-f8e2d154fb75",
    vesselId: "ms--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Singapore. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(200) 123-3517",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Cardio Kickboxing Bags", "Air Bikes", "Recumbent Bikes", "Punching Bags", "VersaClimber", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Lunge Machine", "Dumbbells", "Cable Single Arm Glute Kickback Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Sledgehammers", "Speed Ladders", "Jump Boxes", "Balance Boards", "Agility Ladders", "Stability Balls", "Sandbags", "Agility Dots", "Recovery Tools", "HydroMassage Beds"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Towel Service", "Fresh Fruit Bar", "Locker Rentals", "Audio/Visual Entertainment", "Hair Dryers", "Group Fitness Classes", "Protein Shakes", "Fitness Tracking"],
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
    id: "2c032ee1-99b4-424c-9090-d72e07f2605b",
    vesselId: "ts--explorer",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the TS  Explorer. Stay active and healthy while cruising the waters near Singapore with our state-of-the-art fitness facilities.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(492) 909-9197",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Battle Ropes", "Treadmills", "Elliptical Machines", "Air Bikes", "Recumbent Bikes", "Spin Bikes", "Cardio Kickboxing Bags", "Cardio Kettlebells", "Punching Bags", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Smith Machine", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Shrug Machine", "Speed Sleds", "Speed Hurdles", "Resistance Bands", "Medicine Balls", "Jump Boxes", "BOSU Balls", "Functional Training Equipment", "Infrared Sauna", "Dance Fitness Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Workout Programs", "Water Stations", "Fresh Fruit Bar", "Protein Shakes", "Fitness Consultations", "Toiletries", "Towel Service"],
    is24Hours: false,
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
    id: "2d0ee2e7-5972-46b4-8a11-f37ec767e80d",
    vesselId: "fv-singapore-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(501) 168-1938",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Recumbent Bikes", "Cardio Punching Bags", "Arc Trainers", "Jump Ropes", "Cardio Kettlebells", "Cardio Gliders", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Lat Pulldown Machine", "Functional Trainers", "Leg Curl Machine", "Tricep Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Agility Cones", "Speed Hurdles", "Resistance Bands", "Speed Ladders", "Speed Harnesses", "Speed Resistors", "Kettlebells", "Aqua Fitness Equipment", "Cryotherapy Chambers"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Hair Dryers", "Equipment Orientation", "Towel Service", "Water Stations", "Workout Programs", "Locker Rentals", "Protein Shakes", "Audio/Visual Entertainment", "Toiletries", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
    id: "09f83987-78a9-4c08-9350-a54a005fbbbb",
    vesselId: "rms--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the RMS  of the Deep. Stay active and healthy while cruising the waters near Singapore with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(689) 167-8171",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "SkiErg", "Agility Hurdles", "Spin Bikes", "Boxing Equipment", "Cardio Kickboxing Bags", "Punching Bags", "Tricep Extension Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Upright Row Machine", "Chest Fly Machine", "Leg Press Machine", "Cable Back Extension Machine", "Seated Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Free Weights", "Cable Lunge Machine", "Cable Russian Twist Machine", "Functional Trainers", "Foam Rollers", "Stability Balls", "Sledgehammers", "Agility Markers", "Kettlebells", "TRX Suspension Trainers", "Speed Harnesses", "Pilates Reformers", "Massage Chairs", "Yoga Wheels"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach", "Fitness Nutrition Specialist"],
    amenities: ["Body Composition Analysis", "Hair Dryers", "Toiletries", "Water Stations", "Personal Training Sessions", "Fitness Tracking", "Locker Rentals", "Protein Shakes", "Group Fitness Classes", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Nutrition Counseling"],
    is24Hours: true,
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
    id: "53261414-e77c-445e-86a0-2e449d4a81cd",
    vesselId: "rv-the--mariner",
    name: "Singapore Fitness Center",
    description: "Discover wellness at sea with Singapore Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(990) 216-9755",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "Cardio Medicine Balls", "Air Bikes", "Cardio Gliders", "VersaClimber", "Rowing Machines", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Free Weights", "Cable Machines", "Leg Curl Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Tricep Extension Machine", "Back Extension Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "TRX Suspension Trainers", "Speed Parachutes", "Speed Harnesses", "Kettlebells", "Speed Ladders", "Jump Boxes", "Recovery Tools", "Yoga Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Pilates Instructor"],
    amenities: ["Personal Training Sessions", "Hair Dryers", "Water Stations", "Equipment Orientation", "Fresh Fruit Bar", "Fitness Tracking", "Body Composition Analysis", "Nutrition Counseling", "Fitness Consultations"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "8095a198-71c8-4f01-905b-19edd5964363",
    vesselId: "nb--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Singapore. Our facility features pool area, sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(470) 236-7204",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Boxing Equipment", "Cardio Punching Bags", "Stationary Bikes", "Cardio Kettlebells", "Cardio Kickboxing Bags", "Elliptical Machines", "Battle Ropes", "Arc Trainers", "Cardio Step Platforms", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Pallof Press Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Calf Raise Machine", "Dumbbells", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Kettlebells", "Speed Sleds", "Medicine Balls", "Speed Bands", "Agility Cones", "HydroMassage Beds"],
    personalTrainers: ["Strength and Conditioning Coach", "Aqua Fitness Instructor", "Pilates Instructor"],
    amenities: ["Audio/Visual Entertainment", "Nutrition Counseling", "Locker Rentals", "Equipment Orientation", "Towel Service", "Water Stations", "Personal Training Sessions", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
