// Fitness center venues data for Helsinki
// This file contains fitness center and wellness facility information for cruise vessels operating from Helsinki
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const helsinkiFitnessCenters: FitnessCenter[] = [
  {
    id: "599474ba-e69b-4fd8-8bbe-1e222dc5cd43",
    vesselId: "my--explorer",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the MY  Explorer. Stay active and healthy while cruising the waters near Helsinki with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(951) 422-9302",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Boxing Equipment", "Arc Trainers", "SkiErg", "Cardio Step Platforms", "Cardio Medicine Balls", "Agility Hurdles", "Cable Single Arm Woodchopper Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Upright Row Machine", "Seated Row Machine", "Cable Crossover Machine", "Cable Glute Kickback Machine", "Cable Single Arm Face Pull Machine", "Free Weights", "Agility Ladders", "Speed Bands", "Speed Resistors", "Weighted Vests", "Speed Harnesses", "Agility Markers", "Functional Training Equipment", "Dance Fitness Equipment", "Stretching Stations"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor"],
    amenities: ["Hair Dryers", "Group Fitness Classes", "Locker Rentals", "Audio/Visual Entertainment", "Fitness Consultations", "Water Stations", "Smoothie Bar", "Equipment Orientation", "Nutrition Counseling", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    isPopular: true
  },
  {
    id: "adc917f0-0506-495f-b783-5699b65ebfb9",
    vesselId: "nx-helsinki-voyager",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the NX Helsinki Voyager. Stay active and healthy while cruising the waters near Helsinki with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(344) 888-5172",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Rowing Machines", "Battle Ropes", "Agility Hurdles", "Cardio Gliders", "Recumbent Bikes", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Bicep Curl Machine", "Cable Machines", "Cable Calf Raise Machine", "Barbells", "Leg Press Machine", "Cable Lunge Machine", "Calf Raise Machine", "Tire Flips", "Speed Hurdles", "Speed Harnesses", "TRX Suspension Trainers", "Agility Markers", "Barre Equipment", "Spinning Bikes"],
    personalTrainers: ["Pilates Instructor", "Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Fresh Fruit Bar", "Equipment Orientation", "Group Fitness Classes", "Hair Dryers", "Fitness Consultations", "Smoothie Bar", "Fitness Tracking", "Water Stations", "Personal Training Sessions"],
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
    hasFitnessAssessments: false,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "9094cf10-adb4-476e-9d19-5a15807ed8d9",
    vesselId: "fv--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Helsinki. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(906) 187-9391",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Jump Ropes", "Agility Hurdles", "Treadmills", "StairMaster", "Cardio Medicine Balls", "Seated Row Machine", "Multi-Gym Systems", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Deadlift Machine", "Chest Press Machine", "Cable Single Arm Single Leg Lunge Machine", "Speed Cords", "Foam Rollers", "Sandbags", "Speed Hurdles", "Agility Poles", "Dance Fitness Equipment"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Hair Dryers", "Toiletries", "Locker Rentals", "Towel Service", "Fitness Tracking", "Equipment Orientation", "Group Fitness Classes", "Body Composition Analysis", "Fresh Fruit Bar", "Fitness Consultations"],
    is24Hours: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "852995e6-cee9-4d02-adbf-a4d29aeff83e",
    vesselId: "sv-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Helsinki. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(699) 252-3617",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Spin Bikes", "Jump Ropes", "Cardio Kickboxing Bags", "Arc Trainers", "Cardio Resistance Bands", "Leg Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Pull-up Station", "Cable Lateral Raise Machine", "Seated Row Machine", "Back Extension Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Battle Ropes", "Medicine Balls", "Foam Rollers", "Stability Balls", "Speed Hurdles", "Sandbags", "Dance Fitness Equipment", "Aqua Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Smoothie Bar", "Group Fitness Classes", "Towel Service", "Protein Shakes", "Body Composition Analysis", "Fresh Fruit Bar", "Toiletries", "Workout Programs", "Water Stations", "Nutrition Counseling", "Audio/Visual Entertainment", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
    id: "1a4a2675-0a6f-4ee2-af55-819f3467df6e",
    vesselId: "ts--gale",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Helsinki. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(609) 713-8433",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Cardio Kickboxing Bags", "Treadmills", "Jump Ropes", "StairMaster", "Spin Bikes", "Arc Trainers", "Cable Single Arm Reverse Fly Machine", "Free Weights", "Cable Single Arm Single Leg Bicep Curl Machine", "Functional Trainers", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Upright Row Machine", "Agility Markers", "Speed Parachutes", "Sandbags", "Balance Boards", "BOSU Balls", "Agility Ladders", "Agility Dots", "Pilates Reformers", "Yoga Equipment", "Yoga Straps"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Body Composition Analysis", "Water Stations", "Nutrition Counseling", "Fresh Fruit Bar", "Fitness Consultations", "Locker Rentals", "Fitness Tracking"],
    is24Hours: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "7a1cd34b-7164-4e4f-a60d-950920c50865",
    vesselId: "ss--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(487) 794-1816",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Battle Ropes", "Cardio Medicine Balls", "Recumbent Bikes", "Cardio Kickboxing Bags", "Cardio Gliders", "VersaClimber", "Cardio Kettlebells", "Leg Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Shoulder Press Machine", "Cable Plank Machine", "Cable Crossover Machine", "Shoulder Press Machine", "Free Weights", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Pull-up Station", "Speed Parachutes", "Agility Markers", "Medicine Balls", "TRX Suspension Trainers", "Speed Sleds", "Pilates Reformers", "Dance Fitness Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Hair Dryers", "Personal Training Sessions", "Audio/Visual Entertainment", "Equipment Orientation", "Towel Service", "Body Composition Analysis", "Toiletries", "Group Fitness Classes"],
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "a180306b-d3b3-40f1-a211-bd854c324652",
    vesselId: "ly-helsinki-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Helsinki. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(899) 212-5436",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "VersaClimber", "Treadmills", "Elliptical Machines", "Air Bikes", "Agility Hurdles", "Recumbent Bikes", "Cardio Step Platforms", "SkiErg", "Arc Trainers", "Cable Single Arm Single Leg Lunge Machine", "Tricep Extension Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Squat Machine", "Bench Press", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Resistance Bands", "Agility Dots", "Jump Boxes", "Slam Balls", "TRX Suspension Trainers", "Boxing Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength and Conditioning Coach", "Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Equipment Orientation", "Personal Training Sessions", "Fitness Tracking", "Protein Shakes", "Water Stations", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
    isPopular: false
  },
  {
    id: "0fd36651-44bf-4111-b97e-4e02f8ae9711",
    vesselId: "nx--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the NX  of the Deep. Stay active and healthy while cruising the waters near Helsinki with our state-of-the-art fitness facilities. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(926) 332-6275",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Treadmills", "Cardio Kickboxing Bags", "Boxing Equipment", "Cardio Kettlebells", "StairMaster", "Air Bikes", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Reverse Fly Machine", "Sledgehammers", "Speed Bands", "Kettlebells", "Jump Boxes", "Speed Harnesses", "Yoga Mats", "Plyo Boxes", "Pilates Reformers", "HydroMassage Beds", "CrossFit Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Pilates Instructor", "Yoga Instructor"],
    amenities: ["Equipment Orientation", "Smoothie Bar", "Towel Service", "Locker Rentals", "Workout Programs", "Water Stations", "Fresh Fruit Bar", "Fitness Consultations", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "061ae0a5-6e67-4999-a39e-39c853df54c2",
    vesselId: "mv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Helsinki. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(413) 650-4040",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Stationary Bikes", "Cardio Step Platforms", "Recumbent Bikes", "Arc Trainers", "Battle Ropes", "Rowing Machines", "Agility Hurdles", "SkiErg", "Cable Single Arm Single Leg Deadlift Machine", "Smith Machine", "Cable Plank Machine", "Cable Shrug Machine", "Cable Single Arm Row Machine", "Functional Trainers", "Cable Woodchopper Machine", "Cable Lateral Raise Machine", "Pull-up Station", "Cable Face Pull Machine", "Agility Dots", "Sledgehammers", "BOSU Balls", "Agility Poles", "Resistance Bands", "CrossFit Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Towel Service", "Fitness Consultations", "Audio/Visual Entertainment", "Hair Dryers", "Nutrition Counseling", "Group Fitness Classes", "Locker Rentals", "Equipment Orientation", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
    isPopular: true
  },
  {
    id: "50fdff9d-d6d1-4295-ad28-bcc471200839",
    vesselId: "ms--gale",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the MS  Gale. Stay active and healthy while cruising the waters near Helsinki with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(749) 338-3121",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Medicine Balls", "Recumbent Bikes", "Treadmills", "Cardio Gliders", "Arc Trainers", "Battle Ropes", "Cardio Step Platforms", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Upright Row Machine", "Lat Pulldown", "Smith Machines", "Cable Tricep Pushdown Machine", "Cable Single Arm Calf Raise Machine", "Smith Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Ab Crunch Machine", "Kettlebells", "Speed Hurdles", "Agility Cones", "Weighted Vests", "Medicine Balls", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor", "Senior Fitness Specialist"],
    amenities: ["Toiletries", "Hair Dryers", "Water Stations", "Personal Training Sessions", "Workout Programs", "Towel Service", "Body Composition Analysis", "Equipment Orientation", "Fitness Consultations", "Group Fitness Classes"],
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
