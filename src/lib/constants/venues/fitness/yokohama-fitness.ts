// Fitness center venues data for Yokohama
// This file contains fitness center and wellness facility information for cruise vessels operating from Yokohama
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const yokohamaFitnessCenters: FitnessCenter[] = [
  {
    id: "21dc7221-9c0e-4f9f-a5d5-e26fc90318ec",
    vesselId: "ts--explorer",
    name: "Yokohama Fitness Center",
    description: "Yokohama Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(305) 944-2527",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "StairMaster", "Recumbent Bikes", "Cardio Punching Bags", "Air Bikes", "Punching Bags", "Smith Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Plank Machine", "Slam Balls", "Foam Rollers", "Speed Cords", "BOSU Balls", "Weighted Vests", "Agility Cones", "Agility Ladders", "HydroMassage Beds"],
    personalTrainers: ["Strength and Conditioning Coach", "Spinning Instructor"],
    amenities: ["Towel Service", "Equipment Orientation", "Locker Rentals", "Workout Programs", "Toiletries", "Group Fitness Classes", "Body Composition Analysis", "Water Stations", "Fresh Fruit Bar", "Fitness Consultations", "Nutrition Counseling", "Fitness Tracking"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "90c102b0-2038-40b8-8fb2-02adf4cd9b2d",
    vesselId: "rv-yokohama-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(681) 345-6940",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "StairMaster", "Cardio Gliders", "Rowing Machines", "Air Bikes", "Treadmills", "Stationary Bikes", "Cardio Kickboxing Bags", "Elliptical Machines", "Arc Trainers", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Lat Pulldown", "Cable Single Arm Single Leg Back Extension Machine", "Power Rack", "BOSU Balls", "TRX Suspension Trainers", "Balance Boards", "Stability Balls", "Slam Balls", "Yoga Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Water Stations", "Nutrition Counseling", "Towel Service", "Workout Programs", "Toiletries", "Body Composition Analysis", "Equipment Orientation", "Protein Shakes", "Personal Training Sessions"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
  },
  {
    id: "0de2fb5c-0ecb-4992-9e5c-64965c57c4fa",
    vesselId: "fv--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(230) 401-8797",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Treadmills", "Cardio Punching Bags", "Jump Ropes", "Cardio Medicine Balls", "VersaClimber", "Cardio Step Platforms", "Rowing Machines", "Cable Single Arm Hip Thrust Machine", "Free Weights", "Cable Deadlift Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Machines", "Cable Single Arm Row Machine", "Speed Harnesses", "Speed Ladders", "Speed Hurdles", "Weighted Vests", "Yoga Mats", "Boxing Equipment", "TRX Suspension Trainers"],
    personalTrainers: ["Spinning Instructor", "Senior Fitness Specialist", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Personal Training Sessions", "Water Stations", "Audio/Visual Entertainment", "Hair Dryers", "Workout Programs", "Fresh Fruit Bar", "Group Fitness Classes", "Toiletries", "Fitness Tracking", "Towel Service", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "478aa5c3-0e54-43bb-86fc-9ac07b7310f1",
    vesselId: "ps-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Yokohama. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(584) 770-6062",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Stationary Bikes", "Cardio Step Platforms", "SkiErg", "Agility Hurdles", "Cardio Kettlebells", "Treadmills", "Jump Ropes", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Lunge Machine", "Sledgehammers", "Speed Hurdles", "Speed Bands", "Foam Rollers", "Weighted Vests", "Speed Parachutes", "Yoga Equipment", "Recovery Tools", "Yoga Bolsters"],
    personalTrainers: ["Strength and Conditioning Coach", "Strength Training Specialist", "Group Fitness Instructor", "Spinning Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fresh Fruit Bar", "Hair Dryers", "Nutrition Counseling", "Towel Service", "Audio/Visual Entertainment", "Body Composition Analysis", "Water Stations", "Fitness Tracking", "Protein Shakes", "Group Fitness Classes", "Smoothie Bar", "Locker Rentals"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    isPopular: false
  },
  {
    id: "6e8bdf26-b82c-48f8-8f4d-a9d363377a37",
    vesselId: "sv--gale",
    name: "Yokohama Fitness Center",
    description: "Welcome to Yokohama Fitness Center, your premier wellness destination aboard the SV  Gale. Stay active and healthy while cruising the waters near Yokohama with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(130) 673-7168",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Air Bikes", "Cardio Punching Bags", "Jump Ropes", "Stationary Bikes", "Agility Hurdles", "Cardio Step Platforms", "Cable Single Arm Lunge Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Ab Crunch Machine", "Smith Machine", "Pull-up Station", "Cable Back Extension Machine", "Cable Woodchopper Machine", "Barbells", "Cable Upright Row Machine", "Cable Single Arm Shoulder Press Machine", "Speed Sleds", "Kettlebells", "Stability Balls", "Resistance Bands", "Sledgehammers", "Agility Cones", "Stretching Stations", "Aqua Fitness Equipment", "Yoga Blocks"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Tracking", "Fresh Fruit Bar", "Protein Shakes", "Hair Dryers", "Nutrition Counseling", "Personal Training Sessions", "Smoothie Bar", "Equipment Orientation", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
    isPopular: true
  },
  {
    id: "f5efcf1b-2aa8-442d-bc1e-2d2c86544925",
    vesselId: "fv--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(116) 831-2660",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Treadmills", "Cardio Kickboxing Bags", "Elliptical Machines", "Cardio Kettlebells", "Stationary Bikes", "Jump Ropes", "Lat Pulldown", "Cable Machines", "Cable Ab Crunch Machine", "Cable Plank Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Bicep Curl Machine", "Shoulder Press Machine", "Cable Single Arm Chest Press Machine", "Bicep Curl Machine", "Cable Back Extension Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "BOSU Balls", "Agility Markers", "Yoga Mats", "Agility Hurdles", "Agility Ladders", "Kettlebells", "Slam Balls", "Massage Chairs", "Compression Therapy", "Pilates Reformers"],
    personalTrainers: ["Youth Fitness Specialist", "Pilates Instructor"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Equipment Orientation", "Fitness Tracking", "Nutrition Counseling", "Workout Programs", "Fresh Fruit Bar", "Water Stations"],
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "3d44126e-e8eb-4725-8ecb-81793c01b8fc",
    vesselId: "ms-yokohama-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(935) 361-2039",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Agility Hurdles", "Stationary Bikes", "Treadmills", "Cardio Punching Bags", "StairMaster", "Cardio Kickboxing Bags", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Pull-up Station", "Cable Single Arm Single Leg Shrug Machine", "Stability Balls", "Kettlebells", "Speed Hurdles", "Yoga Mats", "Boxing Equipment", "Stretching Stations", "HydroMassage Beds"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Personal Training Sessions", "Locker Rentals", "Fitness Consultations", "Fitness Tracking", "Toiletries", "Audio/Visual Entertainment", "Body Composition Analysis"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "37f7ac24-91ec-4eeb-bcf9-a67787d9b903",
    vesselId: "nx--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(285) 698-8685",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Recumbent Bikes", "VersaClimber", "Battle Ropes", "Spin Bikes", "StairMaster", "Rowing Machines", "Cable Single Arm Calf Raise Machine", "Leg Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Crossover Machine", "Cable Upright Row Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Free Weights", "Speed Sleds", "Agility Poles", "Agility Markers", "Speed Cords", "Speed Bands", "Speed Parachutes", "Yoga Straps", "Massage Chairs"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Smoothie Bar", "Locker Rentals", "Personal Training Sessions", "Hair Dryers", "Fresh Fruit Bar", "Toiletries", "Audio/Visual Entertainment", "Nutrition Counseling", "Group Fitness Classes", "Fitness Tracking", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "bb28cb8e-2f22-473a-b502-bd14e446e92c",
    vesselId: "mv-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Yokohama. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(631) 123-8756",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Rowing Machines", "Cardio Gliders", "Air Bikes", "Stationary Bikes", "StairMaster", "SkiErg", "Elliptical Machines", "Cardio Punching Bags", "Cardio Medicine Balls", "Cable Machines", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Face Pull Machine", "Weight Machines", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Lunge Machine", "Speed Harnesses", "Battle Ropes", "Balance Boards", "Slam Balls", "Yoga Mats", "Recovery Tools", "Compression Therapy", "Cryotherapy Chamber", "Yoga Blocks"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Smoothie Bar", "Fitness Consultations", "Group Fitness Classes", "Audio/Visual Entertainment", "Body Composition Analysis", "Hair Dryers", "Fitness Tracking", "Personal Training Sessions", "Toiletries", "Locker Rentals", "Nutrition Counseling", "Workout Programs", "Fresh Fruit Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
    isPopular: false
  },
  {
    id: "a948095f-3b5c-4931-914d-7c8a7a476879",
    vesselId: "rv--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(122) 416-4764",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Cardio Medicine Balls", "Cardio Kickboxing Bags", "Jump Ropes", "StairMaster", "Spin Bikes", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Leg Curl Machine", "Cable Single Arm Back Extension Machine", "Cable Crossover Machine", "Cable Face Pull Machine", "Cable Woodchopper Machine", "Chest Press Machine", "Cable Single Arm Ab Crunch Machine", "Agility Markers", "Stability Balls", "Plyo Boxes", "Speed Cords", "Kettlebells", "Agility Hurdles", "CrossFit Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Equipment Orientation", "Water Stations", "Fitness Consultations", "Smoothie Bar", "Hair Dryers", "Fitness Tracking", "Fresh Fruit Bar", "Personal Training Sessions", "Locker Rentals", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  }
];
