// Fitness center venues data for Shanghai
// This file contains fitness center and wellness facility information for cruise vessels operating from Shanghai
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const shanghaiFitnessCenters: FitnessCenter[] = [
  {
    id: "3174b629-5ad5-420e-8a41-828ee3b655d4",
    vesselId: "ly--explorer",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(197) 970-1188",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Cardio Punching Bags", "Cardio Medicine Balls", "Agility Hurdles", "Punching Bags", "Treadmills", "Jump Ropes", "Elliptical Machines", "Cable Single Arm Pallof Press Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Reverse Fly Machine", "Cable Single Arm Plank Machine", "Smith Machine", "Weight Machines", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Slam Balls", "Kettlebells", "Speed Bands", "Sandbags", "Stability Balls", "TRX Suspension Trainers", "Weighted Vests", "Compression Therapy", "Spinning Bikes", "Infrared Therapy"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Tracking", "Towel Service", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Toiletries", "Nutrition Counseling", "Protein Shakes", "Fitness Consultations", "Workout Programs"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    isPopular: false
  },
  {
    id: "8931b8ff-8c5c-4978-a5d7-feecb3952625",
    vesselId: "cs-shanghai-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Shanghai. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(388) 111-6087",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "StairMaster", "Battle Ropes", "SkiErg", "Cardio Kettlebells", "VersaClimber", "Jump Ropes", "Stationary Bikes", "Pull-up Station", "Cable Russian Twist Machine", "Shoulder Press Machine", "Smith Machine", "Weight Machines", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Agility Cones", "Resistance Bands", "Weighted Vests", "Sandbags", "Plyo Boxes", "Sledgehammers", "Speed Cones", "TRX Suspension Trainers", "Aqua Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Strength and Conditioning Coach"],
    amenities: ["Equipment Orientation", "Body Composition Analysis", "Towel Service", "Hair Dryers", "Water Stations", "Personal Training Sessions", "Toiletries", "Group Fitness Classes", "Fitness Consultations", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "0b422846-272d-4f5d-8e48-a3cf8bd47708",
    vesselId: "hms--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(684) 750-6370",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Treadmills", "Cardio Punching Bags", "Cardio Kickboxing Bags", "VersaClimber", "Cardio Medicine Balls", "Elliptical Machines", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Tricep Pushdown Machine", "Speed Ladders", "Speed Parachutes", "Kettlebells", "Medicine Balls", "Slam Balls", "Spinning Bikes"],
    personalTrainers: ["Fitness Nutrition Specialist", "Pilates Instructor", "Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Personal Training Sessions", "Audio/Visual Entertainment", "Towel Service", "Smoothie Bar", "Fresh Fruit Bar", "Water Stations", "Group Fitness Classes", "Fitness Consultations", "Protein Shakes", "Nutrition Counseling", "Toiletries"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "28e9bb9e-9973-48e7-9045-84449eb191ce",
    vesselId: "ms-the--mariner",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MS The  Mariner. Stay active and healthy while cruising the waters near Shanghai with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(342) 863-6754",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Punching Bags", "Cardio Gliders", "VersaClimber", "SkiErg", "Elliptical Machines", "Jump Ropes", "Rowing Machines", "Cardio Resistance Bands", "StairMaster", "Cable Ab Crunch Machine", "Cable Tricep Pushdown Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Chest Fly Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Reverse Fly Machine", "Power Rack", "Leg Curl Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Speed Harnesses", "Agility Dots", "Agility Markers", "Speed Parachutes", "Stability Balls", "Speed Resistors", "TRX Suspension Trainers", "Speed Cords", "Pilates Reformers", "Infrared Therapy"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Spinning Instructor", "Strength Training Specialist"],
    amenities: ["Fitness Tracking", "Water Stations", "Audio/Visual Entertainment", "Smoothie Bar", "Equipment Orientation", "Protein Shakes", "Body Composition Analysis", "Locker Rentals", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
    id: "bc618569-0f0e-4a31-9136-3ea1a15644dc",
    vesselId: "mv--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(742) 558-5618",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Boxing Equipment", "Cardio Gliders", "SkiErg", "Rowing Machines", "Stationary Bikes", "StairMaster", "Cardio Punching Bags", "Cardio Medicine Balls", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Power Rack", "Cable Single Arm Lunge Machine", "BOSU Balls", "Sledgehammers", "Speed Parachutes", "Speed Harnesses", "Tire Flips", "Pilates Reformers", "Yoga Bolsters"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Pilates Instructor"],
    amenities: ["Locker Rentals", "Workout Programs", "Body Composition Analysis", "Fitness Consultations", "Group Fitness Classes", "Hair Dryers", "Personal Training Sessions", "Equipment Orientation", "Fitness Tracking", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "04df569f-5a72-4216-8fe7-5c5f64247cb5",
    vesselId: "sv--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(105) 828-6998",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Cardio Punching Bags", "Cardio Resistance Bands", "Spin Bikes", "Battle Ropes", "Agility Hurdles", "Arc Trainers", "VersaClimber", "Chest Fly Machine", "Cable Single Arm Lunge Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Upright Row Machine", "Free Weights", "Cable Single Arm Woodchopper Machine", "Jump Boxes", "Yoga Mats", "Foam Rollers", "Stability Balls", "Speed Cords", "Aqua Fitness Equipment", "Massage Chairs", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Youth Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Equipment Orientation", "Fitness Consultations", "Water Stations", "Toiletries", "Protein Shakes", "Fitness Tracking", "Fresh Fruit Bar", "Hair Dryers", "Nutrition Counseling"],
    is24Hours: true,
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
    hasChildcareServices: true,
    faqs: [
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
    isPopular: false
  },
  {
    id: "30848c29-3191-4e55-b654-42e2ab7ae750",
    vesselId: "ps-shanghai-voyager",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the PS Shanghai Voyager. Stay active and healthy while cruising the waters near Shanghai with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(790) 627-8182",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "VersaClimber", "Cardio Resistance Bands", "StairMaster", "Rowing Machines", "Treadmills", "Cardio Medicine Balls", "Battle Ropes", "Elliptical Machines", "Agility Hurdles", "Power Rack", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Ab Crunch Machine", "Bicep Curl Machine", "Cable Calf Raise Machine", "Cable Glute Kickback Machine", "Cable Russian Twist Machine", "Cable Pallof Press Machine", "Speed Resistors", "Resistance Bands", "Kettlebells", "Jump Boxes", "Sandbags", "Tire Flips", "Aqua Fitness Equipment", "Pilates Reformers", "Yoga Straps"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Smoothie Bar", "Fresh Fruit Bar", "Workout Programs", "Nutrition Counseling", "Fitness Tracking", "Audio/Visual Entertainment", "Fitness Consultations", "Personal Training Sessions", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "2de10759-daa1-435d-9332-db236f1d6cf6",
    vesselId: "mv--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Shanghai. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(125) 842-8424",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Jump Ropes", "Cardio Gliders", "Stationary Bikes", "Boxing Equipment", "Cardio Kickboxing Bags", "Cardio Step Platforms", "Cardio Resistance Bands", "Elliptical Machines", "Cable Single Arm Single Leg Lunge Machine", "Cable Pallof Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Seated Row Machine", "Weight Machines", "Barbells", "Cable Machines", "BOSU Balls", "Kettlebells", "Sledgehammers", "Speed Resistors", "Agility Markers", "Agility Cones", "TRX Suspension Trainers", "Agility Ladders", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Corrective Exercise Specialist", "Yoga Instructor", "Pilates Instructor", "Youth Fitness Specialist"],
    amenities: ["Smoothie Bar", "Hair Dryers", "Equipment Orientation", "Locker Rentals", "Protein Shakes", "Fresh Fruit Bar", "Body Composition Analysis", "Fitness Consultations", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
    isPopular: false
  },
  {
    id: "8d6e836b-8014-44fd-8bc8-94f93ea80e3d",
    vesselId: "mv-the--mariner",
    name: "Shanghai Fitness Center",
    description: "Discover wellness at sea with Shanghai Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(586) 901-6723",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Treadmills", "Elliptical Machines", "VersaClimber", "SkiErg", "Cardio Medicine Balls", "Stationary Bikes", "Rowing Machines", "Cardio Gliders", "Cable Lateral Raise Machine", "Cable Pallof Press Machine", "Multi-Gym Systems", "Cable Crossover Machine", "Cable Face Pull Machine", "Dumbbells", "Cable Plank Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Lunge Machine", "Jump Boxes", "Speed Hurdles", "Battle Ropes", "Medicine Balls", "Sledgehammers", "Weighted Vests", "Speed Bands", "Yoga Bolsters"],
    personalTrainers: ["Yoga Instructor", "Youth Fitness Specialist", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Nutrition Counseling", "Body Composition Analysis", "Locker Rentals", "Fresh Fruit Bar", "Towel Service", "Protein Shakes", "Smoothie Bar", "Toiletries"],
    is24Hours: false,
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
    id: "de3d65db-e75a-454b-b464-cf14f01c342e",
    vesselId: "ms--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Shanghai. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(485) 571-4197",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Stationary Bikes", "Cardio Medicine Balls", "Punching Bags", "Battle Ropes", "StairMaster", "Cardio Resistance Bands", "SkiErg", "Cardio Kettlebells", "Cable Single Arm Squat Machine", "Lat Pulldown", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Hip Thrust Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Pallof Press Machine", "TRX Suspension Trainers", "Yoga Mats", "Sandbags", "Speed Hurdles", "Slam Balls", "Infrared Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Spinning Instructor", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Fitness Consultations", "Smoothie Bar", "Group Fitness Classes", "Audio/Visual Entertainment", "Hair Dryers", "Towel Service", "Personal Training Sessions"],
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
    hasHealthScreenings: false,
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
      }
    ],
    isPopular: true
  }
];
