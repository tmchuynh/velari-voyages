// Fitness center venues data for Bangkok
// This file contains fitness center and wellness facility information for cruise vessels operating from Bangkok
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const bangkokFitnessCenters: FitnessCenter[] = [
  {
    id: "54512814-1d3c-4849-9c9a-32443fdb69ce",
    vesselId: "sv--explorer",
    name: "SV  Explorer Fitness Center",
    description: "Welcome to SV  Explorer Fitness Center, your premier wellness destination aboard the SV  Explorer. Stay active and healthy while cruising the waters near Bangkok with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(889) 681-3573",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Cardio Punching Bags", "Recumbent Bikes", "Boxing Equipment", "Agility Hurdles", "Cardio Kettlebells", "Treadmills", "Cardio Medicine Balls", "Rowing Machines", "Elliptical Machines", "Cable Back Extension Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Front Raise Machine", "Smith Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Resistance Bands", "Speed Cords", "Speed Parachutes", "Foam Rollers", "Agility Poles", "Agility Dots", "Speed Resistors", "Pilates Reformers"],
    personalTrainers: ["Youth Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Protein Shakes", "Toiletries", "Fitness Tracking", "Fresh Fruit Bar", "Water Stations", "Nutrition Counseling", "Smoothie Bar", "Hair Dryers", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "a8804679-53de-4bc0-aa9a-bd1ac4eb058c",
    vesselId: "fv-bangkok-voyager",
    name: "FV Bangkok Voyager Fitness Center",
    description: "FV Bangkok Voyager Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(875) 736-4452",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Spin Bikes", "Boxing Equipment", "Treadmills", "Elliptical Machines", "Cardio Kettlebells", "Bicep Curl Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Chest Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Squat Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Speed Parachutes", "Agility Ladders", "Battle Ropes", "Agility Dots", "Stability Balls", "Weighted Vests", "Sledgehammers", "Jump Boxes", "Cryotherapy Chamber", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Youth Fitness Specialist", "Spinning Instructor"],
    amenities: ["Body Composition Analysis", "Personal Training Sessions", "Smoothie Bar", "Toiletries", "Hair Dryers", "Fitness Tracking", "Workout Programs", "Nutrition Counseling", "Protein Shakes", "Group Fitness Classes", "Fitness Consultations"],
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
    id: "bc525c52-d9fb-4cbc-b843-f5104f796841",
    vesselId: "ts--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(682) 390-7946",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Rowing Machines", "Cardio Kettlebells", "Cardio Gliders", "Air Bikes", "Cardio Step Platforms", "Cardio Medicine Balls", "Cardio Kickboxing Bags", "Punching Bags", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Lunge Machine", "Leg Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Multi-Gym Systems", "Speed Hurdles", "Slam Balls", "Agility Markers", "Weighted Vests", "Kettlebells", "Sandbags", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Body Composition Analysis", "Nutrition Counseling", "Towel Service", "Smoothie Bar", "Equipment Orientation", "Water Stations", "Fitness Tracking", "Group Fitness Classes", "Toiletries", "Workout Programs", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "01f44511-5658-4253-9fd5-760d06301ce0",
    vesselId: "hms-the--mariner",
    name: "HMS The  Mariner Fitness Center",
    description: "Welcome to HMS The  Mariner Fitness Center, your premier wellness destination aboard the HMS The  Mariner. Stay active and healthy while cruising the waters near Bangkok with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(727) 173-6105",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Treadmills", "Rowing Machines", "Stationary Bikes", "StairMaster", "VersaClimber", "Battle Ropes", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Shoulder Press Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Face Pull Machine", "Smith Machines", "Cable Single Arm Squat Machine", "Speed Bands", "TRX Suspension Trainers", "Kettlebells", "Agility Dots", "Agility Hurdles", "Dance Fitness Equipment", "Yoga Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Smoothie Bar", "Nutrition Counseling", "Hair Dryers", "Fitness Consultations", "Workout Programs", "Group Fitness Classes", "Body Composition Analysis", "Audio/Visual Entertainment"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "18f32f31-fbd9-404d-84e3-9ef6612c6098",
    vesselId: "ms--gale",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the MS  Gale. Stay active and healthy while cruising the waters near Bangkok with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(922) 280-5132",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Recumbent Bikes", "Cardio Resistance Bands", "Boxing Equipment", "Rowing Machines", "Air Bikes", "Cardio Medicine Balls", "Stationary Bikes", "Spin Bikes", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Bicep Curl Machine", "Cable Calf Raise Machine", "Plate Loaded Machines", "Cable Row Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Agility Ladders", "BOSU Balls", "Slam Balls", "Agility Cones", "Plyo Boxes", "Resistance Bands", "Speed Resistors", "Speed Parachutes", "Pilates Reformers"],
    personalTrainers: ["Corrective Exercise Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Personal Training Sessions", "Workout Programs", "Locker Rentals", "Protein Shakes", "Fitness Consultations", "Fitness Tracking", "Hair Dryers", "Audio/Visual Entertainment", "Group Fitness Classes", "Nutrition Counseling"],
    is24Hours: false,
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
    id: "e779eab4-5b18-4bda-810d-f3645c7d9fe6",
    vesselId: "nb--explorer",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the NB  Explorer. Stay active and healthy while cruising the waters near Bangkok with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(807) 210-4061",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Recumbent Bikes", "Spin Bikes", "Arc Trainers", "StairMaster", "Cardio Gliders", "Rowing Machines", "Stationary Bikes", "Boxing Equipment", "Jump Ropes", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Hip Thrust Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Foam Rollers", "Agility Poles", "Kettlebells", "Speed Cones", "Agility Hurdles", "Speed Cords", "Infrared Sauna"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Equipment Orientation", "Audio/Visual Entertainment", "Protein Shakes", "Fitness Consultations", "Water Stations", "Nutrition Counseling", "Toiletries", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "45cffa2d-d859-40c2-9efc-6bb5aa6d3d93",
    vesselId: "nb-bangkok-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bangkok. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(269) 769-5152",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Rowing Machines", "Jump Ropes", "Stationary Bikes", "Punching Bags", "SkiErg", "Spin Bikes", "Arc Trainers", "Cardio Resistance Bands", "Battle Ropes", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Upright Row Machine", "Abdominal Crunch Machine", "Free Weights", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Agility Ladders", "Agility Dots", "Sledgehammers", "Weighted Vests", "Medicine Balls", "TRX Suspension Trainers", "Sandbags", "Yoga Wheels", "Spinning Bikes", "Dance Fitness Equipment"],
    personalTrainers: ["Strength Training Specialist", "Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Nutrition Counseling", "Water Stations", "Fitness Tracking", "Body Composition Analysis", "Group Fitness Classes", "Equipment Orientation", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Personal Training Sessions", "Fitness Consultations"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "bc0232ca-45a4-4c57-ba30-670f507af492",
    vesselId: "sv--of-the-deep",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the SV  of the Deep. Stay active and healthy while cruising the waters near Bangkok with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(819) 117-8833",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "Elliptical Machines", "Stationary Bikes", "VersaClimber", "Cardio Punching Bags", "Cardio Step Platforms", "Spin Bikes", "StairMaster", "Arc Trainers", "Weight Machines", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Barbells", "Cable Back Extension Machine", "Leg Curl Machine", "Plate Loaded Machines", "Cable Calf Raise Machine", "Cable Tricep Pushdown Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Tire Flips", "Speed Harnesses", "Foam Rollers", "Slam Balls", "BOSU Balls", "Agility Dots", "Speed Hurdles", "Barre Equipment", "HydroMassage Beds"],
    personalTrainers: ["Strength and Conditioning Coach", "Corrective Exercise Specialist", "Certified Personal Trainer", "Youth Fitness Specialist"],
    amenities: ["Water Stations", "Personal Training Sessions", "Workout Programs", "Equipment Orientation", "Hair Dryers", "Smoothie Bar", "Body Composition Analysis", "Towel Service", "Nutrition Counseling", "Fitness Consultations", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
    id: "8667229a-3695-45e4-a587-deff84a707ec",
    vesselId: "sy-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the SY The  Mariner. Stay active and healthy while cruising the waters near Bangkok with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(634) 562-3228",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Air Bikes", "Boxing Equipment", "Spin Bikes", "Treadmills", "Elliptical Machines", "Weight Machines", "Bench Press", "Dumbbells", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Free Weights", "Cable Face Pull Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Plank Machine", "Cable Single Arm Russian Twist Machine", "Foam Rollers", "TRX Suspension Trainers", "Battle Ropes", "Agility Markers", "Speed Harnesses", "BOSU Balls", "HydroMassage Beds"],
    personalTrainers: ["Youth Fitness Specialist", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Equipment Orientation", "Personal Training Sessions", "Smoothie Bar", "Workout Programs", "Toiletries", "Hair Dryers", "Group Fitness Classes", "Audio/Visual Entertainment"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "25d3cb3e-fc60-4e38-ae60-e1162feb4dd4",
    vesselId: "ss--gale",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the SS  Gale. Stay active and healthy while cruising the waters near Bangkok with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(287) 280-4136",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Elliptical Machines", "Recumbent Bikes", "Treadmills", "Cardio Resistance Bands", "Agility Hurdles", "Cable Single Arm Face Pull Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Ab Crunch Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Smith Machine", "Cable Single Arm Single Leg Back Extension Machine", "Stability Balls", "Speed Bands", "Agility Ladders", "Kettlebells", "Speed Hurdles", "Speed Resistors", "Resistance Bands", "Functional Training Equipment", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Fitness Consultations", "Workout Programs", "Fresh Fruit Bar", "Hair Dryers", "Group Fitness Classes", "Water Stations", "Towel Service", "Fitness Tracking", "Locker Rentals", "Body Composition Analysis", "Equipment Orientation", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
      }
    ],
    isPopular: true
  }
];
