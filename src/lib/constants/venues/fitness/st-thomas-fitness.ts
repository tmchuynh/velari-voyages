// Fitness center venues data for St Thomas
// This file contains fitness center and wellness facility information for cruise vessels operating from St Thomas
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const stThomasFitnessCenters: FitnessCenter[] = [
  {
    id: "02933f3f-e1b3-4446-9693-d6f1172b7264",
    vesselId: "ts--explorer",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(522) 765-6491",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Spin Bikes", "VersaClimber", "Recumbent Bikes", "StairMaster", "Cardio Resistance Bands", "SkiErg", "Rowing Machines", "Boxing Equipment", "Cardio Medicine Balls", "Cable Single Arm Reverse Fly Machine", "Dumbbells", "Cable Single Arm Shoulder Press Machine", "Weight Machines", "Calf Raise Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Battle Ropes", "Balance Boards", "Medicine Balls", "BOSU Balls", "Tire Flips", "Weighted Vests", "Speed Cords", "Speed Parachutes", "Spinning Bikes"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist", "Aqua Fitness Instructor"],
    amenities: ["Smoothie Bar", "Body Composition Analysis", "Water Stations", "Hair Dryers", "Group Fitness Classes", "Fitness Consultations", "Towel Service", "Toiletries", "Personal Training Sessions", "Nutrition Counseling", "Fresh Fruit Bar"],
    is24Hours: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "cba7d607-d3a7-4ca3-8e08-fad0b752a78e",
    vesselId: "ps-st-thomas-voyager",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(160) 254-6001",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Stationary Bikes", "Treadmills", "Recumbent Bikes", "Cardio Medicine Balls", "Rowing Machines", "VersaClimber", "Cable Single Arm Single Leg Reverse Fly Machine", "Tricep Extension Machine", "Abdominal Crunch Machine", "Leg Curl Machine", "Lat Pulldown", "Barbells", "Bicep Curl Machine", "Cable Deadlift Machine", "Cable Single Arm Shoulder Press Machine", "Agility Cones", "Speed Harnesses", "Medicine Balls", "Tire Flips", "Weighted Vests", "Speed Resistors", "Cryotherapy Chamber", "Spinning Bikes", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Equipment Orientation", "Fitness Tracking", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Workout Programs", "Nutrition Counseling", "Smoothie Bar", "Personal Training Sessions", "Locker Rentals", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
    id: "db08c790-adc9-4600-a131-6e1eb877b4df",
    vesselId: "hms--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(287) 648-8506",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Recumbent Bikes", "Cardio Punching Bags", "VersaClimber", "Spin Bikes", "StairMaster", "Plate Loaded Machines", "Cable Reverse Fly Machine", "Smith Machines", "Seated Row Machine", "Cable Single Arm Lunge Machine", "Lat Pulldown", "Abdominal Crunch Machine", "Pull-up Station", "Power Rack", "Cable Plank Machine", "Cable Single Arm Chest Press Machine", "Smith Machine", "Agility Poles", "Sledgehammers", "Agility Cones", "Plyo Boxes", "Battle Ropes", "Speed Resistors", "Speed Bands", "Yoga Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Youth Fitness Specialist", "Pilates Instructor", "Yoga Instructor"],
    amenities: ["Towel Service", "Fitness Tracking", "Water Stations", "Fresh Fruit Bar", "Personal Training Sessions", "Smoothie Bar", "Group Fitness Classes", "Toiletries", "Fitness Consultations", "Body Composition Analysis", "Locker Rentals", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
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
    id: "ff2d6778-c887-4660-b5e3-af09e7f32290",
    vesselId: "nb-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(373) 416-8393",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Treadmills", "Cardio Step Platforms", "Elliptical Machines", "VersaClimber", "Cardio Medicine Balls", "Recumbent Bikes", "Arc Trainers", "Stationary Bikes", "Cable Single Arm Single Leg Calf Raise Machine", "Chest Fly Machine", "Leg Curl Machine", "Cable Ab Crunch Machine", "Leg Press Machine", "Cable Row Machine", "Chest Press Machine", "Cable Single Arm Bicep Curl Machine", "Cable Face Pull Machine", "Back Extension Machine", "Cable Calf Raise Machine", "Yoga Mats", "Speed Cones", "TRX Suspension Trainers", "Kettlebells", "Sledgehammers", "Agility Cones", "Speed Resistors", "Boxing Equipment", "CrossFit Equipment", "Yoga Bolsters", "Infrared Therapy", "Pilates Reformers", "Yoga Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Yoga Instructor", "Pilates Instructor"],
    amenities: ["Equipment Orientation", "Hair Dryers", "Workout Programs", "Personal Training Sessions", "Fitness Tracking", "Smoothie Bar", "Toiletries", "Protein Shakes", "Audio/Visual Entertainment", "Group Fitness Classes", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "204b7b60-2478-4f75-aef8-bb25fd3931de",
    vesselId: "mv--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(225) 687-5035",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Arc Trainers", "Treadmills", "Boxing Equipment", "Cardio Resistance Bands", "Air Bikes", "Battle Ropes", "Chest Fly Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Hip Thrust Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Squat Machine", "Power Rack", "Agility Ladders", "Agility Markers", "Weighted Vests", "Tire Flips", "Slam Balls", "Speed Cones", "Speed Ladders", "Speed Sleds", "Infrared Therapy", "Aqua Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Youth Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Water Stations", "Protein Shakes", "Fresh Fruit Bar", "Equipment Orientation", "Nutrition Counseling", "Workout Programs", "Fitness Tracking", "Audio/Visual Entertainment", "Body Composition Analysis", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "069c7a95-a183-48ea-898b-dc8cdf4542c1",
    vesselId: "sv--explorer",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the SV  Explorer. Stay active and healthy while cruising the waters near St Thomas with our state-of-the-art fitness facilities. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(388) 143-5597",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Elliptical Machines", "Air Bikes", "Spin Bikes", "Treadmills", "Stationary Bikes", "Cardio Step Platforms", "Boxing Equipment", "Lat Pulldown", "Barbells", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Free Weights", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Reverse Fly Machine", "Functional Trainers", "Cable Single Arm Back Extension Machine", "Cable Single Arm Hip Thrust Machine", "Agility Ladders", "Speed Sleds", "Battle Ropes", "Balance Boards", "Sledgehammers", "Speed Parachutes", "Jump Boxes", "Medicine Balls", "Infrared Therapy", "Spinning Bikes", "Dance Fitness Equipment"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Equipment Orientation", "Fresh Fruit Bar", "Water Stations", "Toiletries", "Fitness Consultations", "Fitness Tracking", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
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
    id: "c9b36aa4-c069-4efa-97d8-4427cf170ba8",
    vesselId: "hms-st-thomas-voyager",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the HMS St Thomas Voyager. Stay active and healthy while cruising the waters near St Thomas with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(172) 310-6262",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Cardio Step Platforms", "Cardio Punching Bags", "Agility Hurdles", "Cardio Medicine Balls", "Cardio Kettlebells", "Treadmills", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Agility Dots", "Agility Markers", "Battle Ropes", "Kettlebells", "Speed Harnesses", "Pilates Reformers", "Float Tanks"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor", "Group Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Fresh Fruit Bar", "Workout Programs", "Protein Shakes", "Fitness Consultations", "Equipment Orientation", "Toiletries", "Personal Training Sessions", "Towel Service", "Group Fitness Classes", "Body Composition Analysis"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "3bb1193d-d5c4-4ba3-9245-866645e1795c",
    vesselId: "sv--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(427) 990-6219",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Rowing Machines", "Cardio Kickboxing Bags", "Cardio Resistance Bands", "Air Bikes", "Punching Bags", "Cardio Step Platforms", "Treadmills", "Elliptical Machines", "Stationary Bikes", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Squat Machine", "Free Weights", "Cable Single Arm Single Leg Plank Machine", "Dumbbells", "Cable Crossover Machine", "Cable Bicep Curl Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "TRX Suspension Trainers", "BOSU Balls", "Weighted Vests", "Speed Bands", "Agility Dots", "Speed Parachutes", "Recovery Tools"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Fitness Tracking", "Toiletries", "Nutrition Counseling", "Locker Rentals", "Protein Shakes", "Fresh Fruit Bar", "Body Composition Analysis", "Smoothie Bar"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "e9a6dee8-5ac7-4f1b-960f-16f985816e34",
    vesselId: "mv-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the MV The  Mariner. Stay active and healthy while cruising the waters near St Thomas with our state-of-the-art fitness facilities. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(250) 989-2300",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Cardio Medicine Balls", "Battle Ropes", "SkiErg", "Agility Hurdles", "Jump Ropes", "Stationary Bikes", "Cardio Kickboxing Bags", "Cable Single Arm Reverse Fly Machine", "Functional Trainers", "Smith Machine", "Calf Raise Machine", "Bicep Curl Machine", "Cable Single Arm Shoulder Press Machine", "Multi-Gym Systems", "Shoulder Press Machine", "Power Rack", "Cable Back Extension Machine", "Cable Squat Machine", "TRX Suspension Trainers", "Foam Rollers", "Speed Cones", "Tire Flips", "Resistance Bands", "Kickboxing Equipment", "HydroMassage Beds", "Yoga Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Pilates Instructor", "Strength and Conditioning Coach", "Aqua Fitness Instructor"],
    amenities: ["Equipment Orientation", "Toiletries", "Water Stations", "Fresh Fruit Bar", "Locker Rentals", "Towel Service", "Protein Shakes", "Smoothie Bar", "Nutrition Counseling", "Body Composition Analysis"],
    is24Hours: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    id: "376a68df-5d01-4863-b1c8-fa6c7d52eff5",
    vesselId: "cs--gale",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(274) 924-4755",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Elliptical Machines", "StairMaster", "Jump Ropes", "Treadmills", "SkiErg", "Stationary Bikes", "VersaClimber", "Cable Row Machine", "Shoulder Press Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Squat Machine", "Chest Press Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Kettlebells", "Speed Resistors", "Medicine Balls", "Speed Cones", "Speed Parachutes", "Agility Markers", "Barre Equipment", "HydroMassage Beds"],
    personalTrainers: ["Corrective Exercise Specialist", "Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Fitness Consultations", "Audio/Visual Entertainment", "Towel Service", "Body Composition Analysis", "Fresh Fruit Bar", "Locker Rentals", "Smoothie Bar", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    isPopular: true
  }
];
