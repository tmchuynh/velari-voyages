// Fitness center venues data for Los Angeles
// This file contains fitness center and wellness facility information for cruise vessels operating from Los Angeles
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const losAngelesFitnessCenters: FitnessCenter[] = [
  {
    id: "b62cd1c4-5ad9-4e87-9ff5-2e8ba3fc93c9",
    vesselId: "sv--explorer",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(776) 786-6890",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Treadmills", "Cardio Medicine Balls", "Punching Bags", "Elliptical Machines", "Stationary Bikes", "Cardio Kickboxing Bags", "Cardio Gliders", "Abdominal Crunch Machine", "Multi-Gym Systems", "Cable Single Arm Lunge Machine", "Cable Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Plate Loaded Machines", "Stability Balls", "TRX Suspension Trainers", "Weighted Vests", "Medicine Balls", "Speed Hurdles", "Slam Balls", "Yoga Equipment", "Kickboxing Equipment", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Workout Programs", "Nutrition Counseling", "Locker Rentals", "Personal Training Sessions", "Fitness Tracking", "Water Stations", "Fresh Fruit Bar", "Group Fitness Classes", "Towel Service", "Hair Dryers", "Smoothie Bar", "Protein Shakes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "6731a94d-f8b3-40d9-b2be-dd6e9da19b35",
    vesselId: "mv-los-angeles-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(111) 895-5927",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Cardio Resistance Bands", "Stationary Bikes", "Rowing Machines", "Boxing Equipment", "SkiErg", "Power Rack", "Cable Upright Row Machine", "Cable Lateral Raise Machine", "Free Weights", "Cable Pallof Press Machine", "Cable Row Machine", "Cable Single Arm Tricep Extension Machine", "Seated Row Machine", "Agility Ladders", "Weighted Vests", "Speed Cones", "Agility Poles", "Speed Cords", "BOSU Balls", "Kickboxing Equipment", "Aqua Fitness Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Senior Fitness Specialist"],
    amenities: ["Towel Service", "Workout Programs", "Group Fitness Classes", "Body Composition Analysis", "Fresh Fruit Bar", "Fitness Tracking", "Protein Shakes", "Water Stations", "Toiletries", "Personal Training Sessions", "Hair Dryers"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "56ca4d0b-b4ff-4de8-aa6c-d22cef12fa91",
    vesselId: "ss--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(216) 282-4470",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Treadmills", "Cardio Step Platforms", "SkiErg", "Cardio Punching Bags", "Cardio Gliders", "Boxing Equipment", "Elliptical Machines", "Cardio Kettlebells", "Stationary Bikes", "Cable Single Arm Single Leg Shrug Machine", "Power Rack", "Cable Calf Raise Machine", "Tricep Extension Machine", "Leg Curl Machine", "Cable Single Arm Row Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Lunge Machine", "Speed Cords", "Agility Markers", "BOSU Balls", "Tire Flips", "Resistance Bands", "Speed Cones", "Speed Sleds", "Cryotherapy Chambers"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor"],
    amenities: ["Body Composition Analysis", "Protein Shakes", "Personal Training Sessions", "Smoothie Bar", "Group Fitness Classes", "Workout Programs", "Equipment Orientation", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "2948bec5-ad4b-4728-ac98-5b5609eb2070",
    vesselId: "mv-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Los Angeles. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(224) 616-3279",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Air Bikes", "Rowing Machines", "Cardio Kettlebells", "Cardio Gliders", "Cardio Punching Bags", "Spin Bikes", "Stationary Bikes", "Arc Trainers", "Smith Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Free Weights", "Seated Row Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Glute Kickback Machine", "Cable Upright Row Machine", "Tire Flips", "Slam Balls", "Battle Ropes", "Agility Hurdles", "TRX Suspension Trainers", "Agility Poles", "Functional Training Equipment", "Kickboxing Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Group Fitness Instructor", "Youth Fitness Specialist", "Yoga Instructor"],
    amenities: ["Hair Dryers", "Group Fitness Classes", "Personal Training Sessions", "Protein Shakes", "Toiletries", "Fitness Tracking", "Body Composition Analysis", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Fitness Consultations", "Nutrition Counseling", "Workout Programs"],
    is24Hours: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "2bac4de4-91ac-4e53-9464-1323f6a66cbc",
    vesselId: "my--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(315) 945-9732",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Recumbent Bikes", "Arc Trainers", "SkiErg", "Treadmills", "VersaClimber", "StairMaster", "Cardio Kickboxing Bags", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Squat Machine", "Dumbbells", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Deadlift Machine", "Free Weights", "TRX Suspension Trainers", "Weighted Vests", "Speed Resistors", "Speed Cords", "Sledgehammers", "Speed Hurdles", "Balance Boards", "Plyo Boxes", "Pilates Reformers", "Cryotherapy Chambers"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Hair Dryers", "Equipment Orientation", "Workout Programs", "Locker Rentals", "Personal Training Sessions", "Fitness Consultations", "Audio/Visual Entertainment", "Water Stations", "Group Fitness Classes", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "7e93d83c-15d7-4d74-9164-7d56b38ca180",
    vesselId: "rms--explorer",
    name: "RMS  Explorer Fitness Center",
    description: "Welcome to RMS  Explorer Fitness Center, your premier wellness destination aboard the RMS  Explorer. Stay active and healthy while cruising the waters near Los Angeles with our state-of-the-art fitness facilities. Our facility features sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(253) 966-8752",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Cardio Kettlebells", "Treadmills", "Elliptical Machines", "Punching Bags", "Battle Ropes", "Air Bikes", "Cable Ab Crunch Machine", "Bicep Curl Machine", "Cable Tricep Pushdown Machine", "Tricep Extension Machine", "Cable Calf Raise Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Speed Cords", "Agility Ladders", "Agility Dots", "Jump Boxes", "Speed Parachutes", "Sandbags", "Yoga Bolsters", "Pilates Reformers"],
    personalTrainers: ["Youth Fitness Specialist", "Fitness Nutrition Specialist", "Strength and Conditioning Coach", "Yoga Instructor"],
    amenities: ["Fitness Consultations", "Audio/Visual Entertainment", "Toiletries", "Group Fitness Classes", "Personal Training Sessions", "Body Composition Analysis", "Equipment Orientation", "Locker Rentals", "Workout Programs", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "2cbbbc7b-e21d-4e35-a7a4-3ee2bab9ecef",
    vesselId: "ts-los-angeles-voyager",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the TS Los Angeles Voyager. Stay active and healthy while cruising the waters near Los Angeles with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(133) 234-3199",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Treadmills", "Cardio Gliders", "Elliptical Machines", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Shrug Machine", "Cable Lunge Machine", "Weight Machines", "Bench Press", "Cable Single Arm Single Leg Shrug Machine", "Calf Raise Machine", "Bicep Curl Machine", "Chest Fly Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Foam Rollers", "Stability Balls", "Speed Harnesses", "Yoga Mats", "TRX Suspension Trainers", "Jump Boxes", "Resistance Bands", "Yoga Equipment", "Spinning Bikes", "CrossFit Equipment"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Equipment Orientation", "Personal Training Sessions", "Fitness Tracking", "Water Stations", "Group Fitness Classes", "Hair Dryers", "Fresh Fruit Bar", "Smoothie Bar", "Fitness Consultations", "Towel Service"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "80803a37-e512-4ba8-80ad-f6c2c9993f57",
    vesselId: "hms--of-the-deep",
    name: "Los Angeles Fitness Center",
    description: "Welcome to Los Angeles Fitness Center, your premier wellness destination aboard the HMS  of the Deep. Stay active and healthy while cruising the waters near Los Angeles with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(210) 813-7776",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "Cardio Step Platforms", "StairMaster", "Cardio Punching Bags", "Arc Trainers", "Jump Ropes", "Punching Bags", "Cardio Medicine Balls", "Free Weights", "Cable Hip Thrust Machine", "Multi-Gym Systems", "Cable Crossover Machine", "Dumbbells", "Cable Russian Twist Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Reverse Fly Machine", "Tire Flips", "Speed Bands", "Plyo Boxes", "Resistance Bands", "Speed Cords", "Sledgehammers", "Kettlebells", "Speed Cones", "Pilates Reformers", "HydroMassage Beds"],
    personalTrainers: ["Spinning Instructor", "Fitness Nutrition Specialist", "Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Locker Rentals", "Fitness Tracking", "Group Fitness Classes", "Towel Service", "Protein Shakes", "Body Composition Analysis", "Hair Dryers", "Fitness Consultations", "Water Stations"],
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
    isPopular: true
  },
  {
    id: "6c9f5cbd-ee60-465e-8c28-da8b80cc72ad",
    vesselId: "ss-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(279) 862-5109",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Cardio Medicine Balls", "Treadmills", "Cardio Gliders", "Elliptical Machines", "Cardio Step Platforms", "SkiErg", "Arc Trainers", "Air Bikes", "Punching Bags", "Cable Single Arm Single Leg Deadlift Machine", "Cable Tricep Pushdown Machine", "Cable Calf Raise Machine", "Back Extension Machine", "Leg Curl Machine", "Leg Extension Machine", "Cable Single Arm Glute Kickback Machine", "Bicep Curl Machine", "Battle Ropes", "Resistance Bands", "Speed Ladders", "Medicine Balls", "Stability Balls", "Speed Sleds", "Kickboxing Equipment"],
    personalTrainers: ["Spinning Instructor", "Youth Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Fitness Consultations", "Hair Dryers", "Nutrition Counseling", "Group Fitness Classes", "Toiletries", "Workout Programs", "Equipment Orientation", "Smoothie Bar", "Protein Shakes", "Audio/Visual Entertainment"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "a9fcfee4-56d5-42c2-ba08-c45920e940f5",
    vesselId: "rms--gale",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the RMS  Gale. Stay active and healthy while cruising the waters near Los Angeles with our state-of-the-art fitness facilities. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(867) 905-7819",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Boxing Equipment", "Battle Ropes", "Cardio Gliders", "Elliptical Machines", "Cardio Medicine Balls", "Treadmills", "Arc Trainers", "Seated Row Machine", "Bicep Curl Machine", "Weight Machines", "Cable Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Leg Press Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Medicine Balls", "Speed Cones", "Kettlebells", "Agility Ladders", "Plyo Boxes", "Speed Resistors", "Tire Flips", "Yoga Bolsters"],
    personalTrainers: ["Fitness Nutrition Specialist", "Group Fitness Instructor", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Tracking", "Fresh Fruit Bar", "Protein Shakes", "Hair Dryers", "Audio/Visual Entertainment", "Locker Rentals", "Smoothie Bar", "Body Composition Analysis"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  }
];
