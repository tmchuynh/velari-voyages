// Fitness center venues data for Southampton
// This file contains fitness center and wellness facility information for cruise vessels operating from Southampton
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const southamptonFitnessCenters: FitnessCenter[] = [
  {
    id: "5c41c926-f75d-4073-adc8-e6294cc93084",
    vesselId: "ts--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Southampton. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(882) 609-9550",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Punching Bags", "SkiErg", "Treadmills", "Spin Bikes", "Cardio Resistance Bands", "Rowing Machines", "Battle Ropes", "Jump Ropes", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Shoulder Press Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Shrug Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Speed Cones", "Speed Bands", "TRX Suspension Trainers", "Sandbags", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Hair Dryers", "Body Composition Analysis", "Towel Service", "Nutrition Counseling", "Fresh Fruit Bar", "Fitness Tracking", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "5d830ccf-7a78-46cd-bd3a-bb8f16498707",
    vesselId: "sv-southampton-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(926) 822-7251",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Jump Ropes", "Arc Trainers", "Spin Bikes", "VersaClimber", "Cardio Gliders", "Treadmills", "Cardio Step Platforms", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Dumbbells", "Free Weights", "Cable Bicep Curl Machine", "Sandbags", "TRX Suspension Trainers", "Stability Balls", "Weighted Vests", "Speed Parachutes", "CrossFit Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Strength and Conditioning Coach", "Certified Personal Trainer"],
    amenities: ["Protein Shakes", "Workout Programs", "Towel Service", "Hair Dryers", "Nutrition Counseling", "Fitness Tracking", "Smoothie Bar", "Water Stations", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    id: "1c64ac3f-9341-45fe-8c55-3ee6c3ba89b8",
    vesselId: "ss--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(519) 619-9699",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Stationary Bikes", "Cardio Resistance Bands", "Cardio Gliders", "Arc Trainers", "Cardio Punching Bags", "Cable Single Arm Squat Machine", "Weight Machines", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Front Raise Machine", "Abdominal Crunch Machine", "Cable Single Arm Bicep Curl Machine", "Cable Squat Machine", "Cable Row Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Lunge Machine", "Leg Extension Machine", "Speed Hurdles", "Battle Ropes", "Resistance Bands", "TRX Suspension Trainers", "Speed Sleds", "Speed Ladders", "Infrared Sauna", "Spinning Bikes", "Yoga Bolsters"],
    personalTrainers: ["Certified Personal Trainer", "Youth Fitness Specialist", "Corrective Exercise Specialist", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Body Composition Analysis", "Fresh Fruit Bar", "Equipment Orientation", "Group Fitness Classes", "Hair Dryers", "Nutrition Counseling", "Fitness Tracking", "Workout Programs", "Smoothie Bar", "Audio/Visual Entertainment", "Towel Service"],
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
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
      }
    ],
    isPopular: true
  },
  {
    id: "12a4a580-c8ce-4014-98c1-8c516cf598d7",
    vesselId: "my-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(744) 432-1249",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Agility Hurdles", "Rowing Machines", "Stationary Bikes", "Punching Bags", "Cardio Resistance Bands", "Arc Trainers", "Elliptical Machines", "Functional Trainers", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Shoulder Press Machine", "Cable Plank Machine", "Free Weights", "Smith Machines", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Agility Poles", "Agility Markers", "Slam Balls", "Speed Cords", "Speed Bands", "Kettlebells", "Speed Sleds", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Senior Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Nutrition Counseling", "Fresh Fruit Bar", "Personal Training Sessions", "Equipment Orientation", "Hair Dryers", "Water Stations", "Fitness Consultations", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "c89a0a05-93c6-4be3-81dc-8f3dcac544fd",
    vesselId: "ps--gale",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the PS  Gale. Stay active and healthy while cruising the waters near Southampton with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(869) 427-3575",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Air Bikes", "Treadmills", "Agility Hurdles", "Arc Trainers", "Elliptical Machines", "Rowing Machines", "Cardio Punching Bags", "VersaClimber", "Cable Single Arm Single Leg Reverse Fly Machine", "Bench Press", "Cable Single Arm Back Extension Machine", "Smith Machine", "Cable Single Arm Shoulder Press Machine", "Pull-up Station", "Back Extension Machine", "Kettlebells", "TRX Suspension Trainers", "Jump Boxes", "Speed Cords", "Agility Markers", "Speed Cones", "Tire Flips", "Massage Chairs", "Spinning Bikes"],
    personalTrainers: ["Spinning Instructor", "Yoga Instructor", "Strength Training Specialist"],
    amenities: ["Hair Dryers", "Towel Service", "Water Stations", "Fitness Consultations", "Nutrition Counseling", "Fitness Tracking", "Personal Training Sessions", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Workout Programs"],
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
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "988a714d-cdbe-4656-a443-051359a6fce8",
    vesselId: "rv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(385) 384-8758",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Treadmills", "Elliptical Machines", "Cardio Punching Bags", "Recumbent Bikes", "SkiErg", "Bicep Curl Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Tricep Extension Machine", "Cable Woodchopper Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Weight Machines", "Cable Single Arm Single Leg Tricep Extension Machine", "Barbells", "Dumbbells", "Stability Balls", "Speed Parachutes", "Agility Hurdles", "Speed Cones", "Speed Ladders", "Speed Bands", "Agility Ladders", "TRX Suspension Trainers", "Yoga Straps"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Workout Programs", "Protein Shakes", "Smoothie Bar", "Toiletries", "Water Stations", "Equipment Orientation", "Fresh Fruit Bar", "Group Fitness Classes", "Fitness Consultations", "Towel Service", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "675d1137-30ab-401f-a96c-cb60b66e24f8",
    vesselId: "rv-southampton-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(197) 720-4601",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Step Platforms", "Jump Ropes", "VersaClimber", "Rowing Machines", "Spin Bikes", "Elliptical Machines", "Cardio Resistance Bands", "Cardio Kettlebells", "Cardio Kickboxing Bags", "Free Weights", "Cable Lunge Machine", "Cable Single Arm Ab Crunch Machine", "Smith Machine", "Chest Press Machine", "Cable Upright Row Machine", "Cable Single Arm Bicep Curl Machine", "Cable Bicep Curl Machine", "Cable Single Arm Hip Thrust Machine", "Dumbbells", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Agility Ladders", "Speed Cones", "Kettlebells", "Tire Flips", "Balance Boards", "Aqua Fitness Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Protein Shakes", "Hair Dryers", "Group Fitness Classes", "Toiletries", "Fresh Fruit Bar", "Fitness Tracking", "Nutrition Counseling", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
    id: "d0e511ab-a400-4a04-96b0-4ae8ddd4de5e",
    vesselId: "my--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(305) 946-7235",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Recumbent Bikes", "VersaClimber", "SkiErg", "Elliptical Machines", "Air Bikes", "StairMaster", "Rowing Machines", "Treadmills", "Functional Trainers", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Medicine Balls", "Speed Bands", "Kettlebells", "Jump Boxes", "Agility Ladders", "Dance Fitness Equipment", "Functional Training Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Locker Rentals", "Body Composition Analysis", "Protein Shakes", "Workout Programs", "Personal Training Sessions", "Water Stations", "Fitness Tracking", "Toiletries", "Nutrition Counseling"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "2a62540d-fe0b-4c55-b141-6a78a40478d0",
    vesselId: "sv-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(411) 786-5445",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Treadmills", "Cardio Medicine Balls", "Arc Trainers", "Air Bikes", "Cardio Punching Bags", "StairMaster", "Boxing Equipment", "Cardio Gliders", "Agility Hurdles", "Cable Single Arm Woodchopper Machine", "Bicep Curl Machine", "Cable Row Machine", "Cable Plank Machine", "Cable Face Pull Machine", "Weight Machines", "Plate Loaded Machines", "Barbells", "Calf Raise Machine", "Cable Calf Raise Machine", "TRX Suspension Trainers", "Agility Ladders", "Speed Parachutes", "Speed Cones", "Sledgehammers", "Kettlebells", "Medicine Balls", "BOSU Balls", "Compression Therapy"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer", "Pilates Instructor"],
    amenities: ["Towel Service", "Water Stations", "Body Composition Analysis", "Personal Training Sessions", "Toiletries", "Workout Programs", "Group Fitness Classes", "Fitness Consultations"],
    is24Hours: false,
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
    hasChildcareServices: true,
    faqs: [
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
    id: "a9e3c3a9-a51d-49d6-bda1-e8f9ab5886fd",
    vesselId: "rv--gale",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(979) 570-9200",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Boxing Equipment", "Cardio Punching Bags", "Jump Ropes", "Cardio Gliders", "Cardio Step Platforms", "Cardio Resistance Bands", "Recumbent Bikes", "Arc Trainers", "Spin Bikes", "Pull-up Station", "Cable Single Arm Single Leg Deadlift Machine", "Smith Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Shrug Machine", "Foam Rollers", "Speed Ladders", "Speed Bands", "Speed Sleds", "Jump Boxes", "Speed Resistors", "Dance Fitness Equipment", "Aqua Fitness Equipment", "Stretching Stations"],
    personalTrainers: ["Strength and Conditioning Coach", "Fitness Nutrition Specialist", "Strength Training Specialist", "Youth Fitness Specialist"],
    amenities: ["Fitness Tracking", "Locker Rentals", "Equipment Orientation", "Hair Dryers", "Fitness Consultations", "Nutrition Counseling", "Workout Programs", "Water Stations", "Towel Service", "Toiletries", "Personal Training Sessions"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  }
];
