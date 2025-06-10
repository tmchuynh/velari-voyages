// Fitness center venues data for Sydney
// This file contains fitness center and wellness facility information for cruise vessels operating from Sydney
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const sydneyFitnessCenters: FitnessCenter[] = [
  {
    id: "60bcdff9-62a1-48d1-aa23-b48278f6fb73",
    vesselId: "ps--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Sydney. Our facility features pool area, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(989) 851-7227",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Air Bikes", "Arc Trainers", "Boxing Equipment", "StairMaster", "VersaClimber", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Crossover Machine", "Cable Single Arm Tricep Extension Machine", "Power Rack", "Multi-Gym Systems", "Bench Press", "Bicep Curl Machine", "Free Weights", "Cable Single Arm Bicep Curl Machine", "Back Extension Machine", "Seated Row Machine", "Chest Press Machine", "Agility Hurdles", "Foam Rollers", "Jump Boxes", "Speed Sleds", "Speed Cones", "Infrared Sauna"],
    personalTrainers: ["Aqua Fitness Instructor", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Hair Dryers", "Protein Shakes", "Fitness Consultations", "Smoothie Bar", "Locker Rentals", "Fresh Fruit Bar", "Group Fitness Classes", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "9d57a0cf-532f-435d-89a7-62392a8230c1",
    vesselId: "hms-sydney-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(456) 989-3528",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Punching Bags", "Boxing Equipment", "Arc Trainers", "VersaClimber", "Treadmills", "Cable Row Machine", "Cable Tricep Pushdown Machine", "Cable Russian Twist Machine", "Cable Single Arm Bicep Curl Machine", "Bench Press", "Cable Back Extension Machine", "Cable Single Arm Woodchopper Machine", "Back Extension Machine", "Agility Dots", "Speed Cones", "Weighted Vests", "Sledgehammers", "Stability Balls", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Strength Training Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Equipment Orientation", "Fitness Tracking", "Toiletries", "Audio/Visual Entertainment", "Smoothie Bar", "Hair Dryers", "Locker Rentals", "Towel Service", "Water Stations", "Fresh Fruit Bar"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "ba59f5ce-5b71-41e8-b3c2-2cb54f3d3fcc",
    vesselId: "ts--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(920) 433-7598",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Punching Bags", "Cardio Gliders", "Recumbent Bikes", "Agility Hurdles", "StairMaster", "SkiErg", "Elliptical Machines", "Jump Ropes", "Cardio Step Platforms", "Cable Upright Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Front Raise Machine", "Free Weights", "Cable Russian Twist Machine", "Cable Plank Machine", "Dumbbells", "Pull-up Station", "Leg Press Machine", "Resistance Bands", "Speed Sleds", "Sandbags", "Agility Poles", "Yoga Mats", "Speed Harnesses", "Yoga Wheels", "TRX Suspension Trainers", "CrossFit Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Hair Dryers", "Towel Service", "Audio/Visual Entertainment", "Group Fitness Classes", "Water Stations", "Toiletries", "Workout Programs", "Nutrition Counseling", "Fitness Tracking"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "81bef16e-89a7-4ed7-b824-5e6500f425e1",
    vesselId: "mv-the--mariner",
    name: "MV The  Mariner Fitness Center",
    description: "Discover wellness at sea with MV The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(556) 230-8130",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Cardio Step Platforms", "Cardio Kettlebells", "Spin Bikes", "Battle Ropes", "Stationary Bikes", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Reverse Fly Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Hip Thrust Machine", "TRX Suspension Trainers", "Speed Harnesses", "Medicine Balls", "Agility Hurdles", "Speed Resistors", "Kickboxing Equipment", "Pilates Reformers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Workout Programs", "Towel Service", "Smoothie Bar", "Water Stations", "Audio/Visual Entertainment", "Locker Rentals", "Body Composition Analysis", "Personal Training Sessions", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    isPopular: true
  },
  {
    id: "71428c67-0685-4f09-b8b1-0801cf769ef0",
    vesselId: "nx--gale",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(195) 457-4161",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "Cardio Gliders", "Stationary Bikes", "Air Bikes", "Cardio Resistance Bands", "SkiErg", "StairMaster", "Rowing Machines", "Power Rack", "Cable Single Arm Single Leg Plank Machine", "Cable Hip Thrust Machine", "Bench Press", "Cable Single Arm Lunge Machine", "Smith Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Tricep Extension Machine", "Cable Single Arm Single Leg Upright Row Machine", "Chest Press Machine", "Cable Woodchopper Machine", "Agility Ladders", "Speed Ladders", "Slam Balls", "Agility Poles", "Plyo Boxes", "Medicine Balls", "Sledgehammers", "Barre Equipment", "Dance Fitness Equipment", "Yoga Blocks"],
    personalTrainers: ["Strength and Conditioning Coach", "Yoga Instructor", "Spinning Instructor", "Pilates Instructor"],
    amenities: ["Toiletries", "Towel Service", "Nutrition Counseling", "Fresh Fruit Bar", "Personal Training Sessions", "Protein Shakes", "Audio/Visual Entertainment", "Workout Programs", "Locker Rentals", "Body Composition Analysis"],
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
    hasHealthScreenings: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "92a811b7-067c-4641-9d0e-22e9f6471d20",
    vesselId: "sy--explorer",
    name: "Sydney Fitness Center",
    description: "Sydney Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(712) 791-3337",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Cardio Step Platforms", "Cardio Gliders", "Boxing Equipment", "Spin Bikes", "Cardio Resistance Bands", "SkiErg", "Treadmills", "Elliptical Machines", "Cable Single Arm Single Leg Lunge Machine", "Cable Squat Machine", "Cable Single Arm Shoulder Press Machine", "Cable Lateral Raise Machine", "Smith Machine", "Lat Pulldown", "Weight Machines", "Leg Curl Machine", "Cable Reverse Fly Machine", "Cable Machines", "Slam Balls", "BOSU Balls", "Resistance Bands", "Battle Ropes", "Speed Harnesses", "Sandbags", "Foam Rollers", "Speed Ladders", "Yoga Straps"],
    personalTrainers: ["Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Workout Programs", "Hair Dryers", "Body Composition Analysis", "Group Fitness Classes", "Fitness Tracking", "Equipment Orientation", "Nutrition Counseling", "Audio/Visual Entertainment", "Toiletries", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    isPopular: true
  },
  {
    id: "1389278c-20d4-4c98-afc7-bdfb2f75af46",
    vesselId: "rv-sydney-voyager",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the RV Sydney Voyager. Stay active and healthy while cruising the waters near Sydney with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(420) 683-2450",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Air Bikes", "Arc Trainers", "StairMaster", "SkiErg", "Cardio Kickboxing Bags", "Cardio Resistance Bands", "Jump Ropes", "Rowing Machines", "Cable Single Arm Face Pull Machine", "Smith Machines", "Cable Ab Crunch Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Plate Loaded Machines", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Shoulder Press Machine", "Speed Hurdles", "Agility Markers", "TRX Suspension Trainers", "Speed Bands", "Speed Cords", "Plyo Boxes", "Yoga Mats", "Kettlebells", "Infrared Sauna", "Functional Training Equipment", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach", "Strength Training Specialist", "Youth Fitness Specialist"],
    amenities: ["Equipment Orientation", "Towel Service", "Locker Rentals", "Hair Dryers", "Personal Training Sessions", "Nutrition Counseling", "Fitness Tracking", "Protein Shakes", "Toiletries", "Smoothie Bar"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "60ce129d-93d8-4e98-9ad5-be1edd7a233a",
    vesselId: "ss--of-the-deep",
    name: "Sydney Fitness Center",
    description: "Discover wellness at sea with Sydney Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(936) 874-7053",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Cardio Gliders", "Treadmills", "Boxing Equipment", "Battle Ropes", "Jump Ropes", "SkiErg", "Cable Machines", "Cable Russian Twist Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Squat Machine", "Chest Fly Machine", "Cable Glute Kickback Machine", "Agility Cones", "Speed Ladders", "Speed Parachutes", "Jump Boxes", "Speed Hurdles", "Spinning Bikes"],
    personalTrainers: ["Strength and Conditioning Coach", "Group Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Fitness Tracking", "Fitness Consultations", "Hair Dryers", "Equipment Orientation", "Group Fitness Classes", "Personal Training Sessions", "Workout Programs", "Audio/Visual Entertainment", "Protein Shakes"],
    is24Hours: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "8ea3db8f-b99f-4df6-9805-5ea952f65f9e",
    vesselId: "sv-the--mariner",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the SV The  Mariner. Stay active and healthy while cruising the waters near Sydney with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(499) 382-5826",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Boxing Equipment", "Agility Hurdles", "SkiErg", "Cardio Medicine Balls", "Cardio Punching Bags", "Arc Trainers", "StairMaster", "Air Bikes", "Cable Single Arm Single Leg Shrug Machine", "Weight Machines", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Tricep Extension Machine", "Cable Ab Crunch Machine", "Smith Machine", "Functional Trainers", "Plate Loaded Machines", "Speed Sleds", "Agility Dots", "TRX Suspension Trainers", "Foam Rollers", "Balance Boards", "Speed Ladders", "Plyo Boxes", "Kettlebells", "HydroMassage Beds"],
    personalTrainers: ["Corrective Exercise Specialist", "Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Workout Programs", "Protein Shakes", "Towel Service", "Fresh Fruit Bar", "Body Composition Analysis", "Hair Dryers", "Equipment Orientation", "Toiletries", "Nutrition Counseling", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "d52cc04f-82f6-4085-ba46-0eb86d83b9e2",
    vesselId: "hms--gale",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the HMS  Gale. Stay active and healthy while cruising the waters near Sydney with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(166) 828-5145",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Rowing Machines", "Stationary Bikes", "Cardio Kickboxing Bags", "VersaClimber", "Spin Bikes", "Cardio Gliders", "Cable Machines", "Cable Shrug Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Reverse Fly Machine", "Chest Press Machine", "Power Rack", "Cable Lunge Machine", "Jump Boxes", "Agility Hurdles", "Agility Poles", "Foam Rollers", "Speed Cones", "Speed Cords", "Tire Flips", "Kettlebells", "Cryotherapy Chamber"],
    personalTrainers: ["Yoga Instructor", "Group Fitness Instructor", "Strength and Conditioning Coach", "Senior Fitness Specialist"],
    amenities: ["Towel Service", "Workout Programs", "Fitness Tracking", "Hair Dryers", "Locker Rentals", "Equipment Orientation", "Water Stations", "Body Composition Analysis", "Group Fitness Classes", "Personal Training Sessions", "Toiletries"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
  }
];
