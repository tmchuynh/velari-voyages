// Fitness center venues data for Sitka
// This file contains fitness center and wellness facility information for cruise vessels operating from Sitka
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const sitkaFitnessCenters: FitnessCenter[] = [
  {
    id: "a1b70ff4-4e4c-49ab-9aa1-351b1ca84170",
    vesselId: "sy--explorer",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the SY  Explorer. Stay active and healthy while cruising the waters near Sitka with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(788) 120-1286",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Recumbent Bikes", "VersaClimber", "Cardio Kickboxing Bags", "Cardio Step Platforms", "Rowing Machines", "Jump Ropes", "Agility Hurdles", "Cable Machines", "Cable Single Arm Single Leg Shrug Machine", "Lat Pulldown", "Bicep Curl Machine", "Cable Ab Crunch Machine", "Seated Row Machine", "Cable Shrug Machine", "Cable Russian Twist Machine", "Agility Ladders", "Tire Flips", "Agility Dots", "Speed Bands", "Speed Ladders", "Kettlebells", "Resistance Bands", "Speed Hurdles", "TRX Suspension Trainers"],
    personalTrainers: ["Group Fitness Instructor", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Protein Shakes", "Towel Service", "Water Stations", "Fitness Tracking", "Locker Rentals", "Smoothie Bar", "Audio/Visual Entertainment", "Workout Programs", "Body Composition Analysis", "Hair Dryers", "Personal Training Sessions"],
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
    id: "e656638f-2d7a-45f2-8bc3-bbbfe8ba9532",
    vesselId: "ps-sitka-voyager",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the PS Sitka Voyager. Stay active and healthy while cruising the waters near Sitka with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(645) 705-2799",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Arc Trainers", "Battle Ropes", "Elliptical Machines", "Cardio Gliders", "Punching Bags", "Jump Ropes", "Rowing Machines", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Deadlift Machine", "Lat Pulldown", "Cable Single Arm Single Leg Lunge Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Shrug Machine", "Functional Trainers", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Bicep Curl Machine", "Cable Reverse Fly Machine", "Cable Glute Kickback Machine", "Balance Boards", "Agility Ladders", "Agility Poles", "Speed Sleds", "Recovery Tools"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Equipment Orientation", "Water Stations", "Protein Shakes", "Personal Training Sessions", "Nutrition Counseling", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Towel Service", "Hair Dryers", "Smoothie Bar", "Group Fitness Classes", "Toiletries"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "81a4d05d-fdfc-49e3-8278-fb2f333c73c2",
    vesselId: "cs--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(430) 169-9147",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Recumbent Bikes", "Treadmills", "VersaClimber", "StairMaster", "Cardio Step Platforms", "Elliptical Machines", "Cardio Resistance Bands", "Cable Single Arm Single Leg Squat Machine", "Free Weights", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Upright Row Machine", "Leg Curl Machine", "Sandbags", "Slam Balls", "Speed Cords", "Speed Hurdles", "Stability Balls", "Pilates Reformers", "HydroMassage Beds"],
    personalTrainers: ["Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Smoothie Bar", "Workout Programs", "Fitness Tracking", "Hair Dryers", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Protein Shakes", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
    id: "3363b8a4-f67f-445d-975e-c80ba3d07370",
    vesselId: "mv-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Sitka. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(967) 219-3189",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Recumbent Bikes", "Spin Bikes", "Cardio Step Platforms", "SkiErg", "Treadmills", "Elliptical Machines", "StairMaster", "Jump Ropes", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Row Machine", "Barbells", "Cable Hip Thrust Machine", "Dumbbells", "Multi-Gym Systems", "Leg Curl Machine", "Leg Press Machine", "Agility Ladders", "Kettlebells", "BOSU Balls", "Balance Boards", "Weighted Vests", "Aqua Fitness Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Nutrition Counseling", "Fitness Consultations", "Body Composition Analysis", "Fresh Fruit Bar", "Hair Dryers", "Workout Programs", "Group Fitness Classes", "Audio/Visual Entertainment", "Personal Training Sessions"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "9ffc08d2-dbdd-433c-a300-25d420d526b9",
    vesselId: "rms--gale",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the RMS  Gale. Stay active and healthy while cruising the waters near Sitka with our state-of-the-art fitness facilities. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(248) 979-4664",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Jump Ropes", "Arc Trainers", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Punching Bags", "Treadmills", "Elliptical Machines", "VersaClimber", "Recumbent Bikes", "Free Weights", "Plate Loaded Machines", "Cable Single Arm Chest Press Machine", "Cable Single Arm Lunge Machine", "Cable Upright Row Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Woodchopper Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Functional Trainers", "Speed Bands", "BOSU Balls", "Resistance Bands", "Tire Flips", "Speed Parachutes", "HydroMassage Beds", "Spinning Bikes"],
    personalTrainers: ["Pilates Instructor", "Strength and Conditioning Coach", "Corrective Exercise Specialist", "Youth Fitness Specialist"],
    amenities: ["Hair Dryers", "Towel Service", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Fitness Consultations", "Fitness Tracking", "Workout Programs", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
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
    id: "7ed12664-6934-41a7-8ab5-c55f8221f1c1",
    vesselId: "rms--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(544) 895-2376",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Agility Hurdles", "Spin Bikes", "Recumbent Bikes", "Cardio Step Platforms", "Cardio Medicine Balls", "Rowing Machines", "Cardio Gliders", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Hip Thrust Machine", "Cable Pallof Press Machine", "Seated Row Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Calf Raise Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Chest Press Machine", "Kettlebells", "Resistance Bands", "Speed Harnesses", "Plyo Boxes", "Agility Dots", "Medicine Balls", "Yoga Mats", "Boxing Equipment", "Yoga Equipment", "Barre Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Workout Programs", "Smoothie Bar", "Group Fitness Classes", "Fitness Consultations", "Audio/Visual Entertainment", "Hair Dryers", "Locker Rentals", "Fresh Fruit Bar", "Body Composition Analysis", "Toiletries", "Water Stations"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "1482c8a3-f48d-4da3-9307-c7185f18b925",
    vesselId: "ms-sitka-voyager",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the MS Sitka Voyager. Stay active and healthy while cruising the waters near Sitka with our state-of-the-art fitness facilities. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(135) 741-3595",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Spin Bikes", "Jump Ropes", "Stationary Bikes", "Agility Hurdles", "Cardio Kickboxing Bags", "Recumbent Bikes", "Elliptical Machines", "Arc Trainers", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Speed Harnesses", "Balance Boards", "Speed Ladders", "Sandbags", "Resistance Bands", "Compression Therapy", "Stretching Stations", "Massage Chairs"],
    personalTrainers: ["Group Fitness Instructor", "Strength Training Specialist", "Pilates Instructor"],
    amenities: ["Smoothie Bar", "Fitness Tracking", "Body Composition Analysis", "Personal Training Sessions", "Water Stations", "Audio/Visual Entertainment", "Nutrition Counseling", "Workout Programs", "Locker Rentals", "Towel Service", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
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
    id: "802d2db6-218c-46e9-9a1b-682ce92ac199",
    vesselId: "rms--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(659) 253-5625",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "StairMaster", "SkiErg", "Stationary Bikes", "Elliptical Machines", "Boxing Equipment", "Cable Back Extension Machine", "Cable Row Machine", "Leg Press Machine", "Cable Single Arm Single Leg Lunge Machine", "Free Weights", "Cable Upright Row Machine", "Cable Single Arm Russian Twist Machine", "Dumbbells", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Foam Rollers", "Weighted Vests", "Speed Harnesses", "Plyo Boxes", "Jump Boxes", "HydroMassage Beds"],
    personalTrainers: ["Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Hair Dryers", "Toiletries", "Water Stations", "Body Composition Analysis", "Locker Rentals", "Workout Programs", "Fitness Consultations", "Group Fitness Classes", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
    id: "58fcef4f-8a4f-4d10-abab-3aee9dc09e71",
    vesselId: "ly-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Sitka. Our facility features pool area, sauna facilities.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(446) 679-4114",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "VersaClimber", "Stationary Bikes", "Air Bikes", "Cardio Medicine Balls", "SkiErg", "Cable Single Arm Single Leg Squat Machine", "Power Rack", "Cable Single Arm Ab Crunch Machine", "Cable Pallof Press Machine", "Dumbbells", "Cable Reverse Fly Machine", "Cable Shrug Machine", "Functional Trainers", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Plank Machine", "Battle Ropes", "BOSU Balls", "Stability Balls", "Slam Balls", "Agility Hurdles", "Weighted Vests", "Speed Cords", "Speed Sleds", "HydroMassage Beds", "Barre Equipment", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Audio/Visual Entertainment", "Fitness Tracking", "Protein Shakes", "Personal Training Sessions", "Group Fitness Classes", "Fresh Fruit Bar", "Workout Programs", "Hair Dryers", "Nutrition Counseling"],
    is24Hours: true,
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
    id: "7a1a48db-ef45-4795-9abe-5c6934bfee9e",
    vesselId: "hms--gale",
    name: "Sitka Fitness Center",
    description: "Welcome to Sitka Fitness Center, your premier wellness destination aboard the HMS  Gale. Stay active and healthy while cruising the waters near Sitka with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(914) 316-6489",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Air Bikes", "VersaClimber", "StairMaster", "SkiErg", "Cardio Gliders", "Elliptical Machines", "Power Rack", "Leg Press Machine", "Cable Single Arm Shoulder Press Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Squat Machine", "Cable Pallof Press Machine", "Cable Single Arm Bicep Curl Machine", "Plate Loaded Machines", "Sandbags", "Agility Dots", "Jump Boxes", "Foam Rollers", "Speed Cords", "Pilates Reformers"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer", "Strength and Conditioning Coach", "Fitness Nutrition Specialist"],
    amenities: ["Protein Shakes", "Fitness Tracking", "Locker Rentals", "Audio/Visual Entertainment", "Body Composition Analysis", "Personal Training Sessions", "Water Stations", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  }
];
