// Fitness center venues data for Ho Chi Minh City
// This file contains fitness center and wellness facility information for cruise vessels operating from Ho Chi Minh City
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const hoChiMinhCityFitnessCenters: FitnessCenter[] = [
  {
    id: "1de87282-2a68-46ad-a515-4da390679490",
    vesselId: "fv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(854) 114-3407",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "VersaClimber", "StairMaster", "Cardio Kettlebells", "Jump Ropes", "Boxing Equipment", "Cardio Resistance Bands", "Cable Bicep Curl Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Shoulder Press Machine", "Chest Fly Machine", "Chest Press Machine", "Smith Machine", "Cable Back Extension Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Upright Row Machine", "Foam Rollers", "Medicine Balls", "TRX Suspension Trainers", "Agility Ladders", "Agility Cones", "Tire Flips", "Speed Parachutes", "Compression Therapy", "Kickboxing Equipment"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Body Composition Analysis", "Personal Training Sessions", "Towel Service", "Nutrition Counseling", "Hair Dryers", "Group Fitness Classes", "Water Stations", "Workout Programs"],
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
    id: "e8e799a3-b5d5-4c8e-bbc8-2de89dff9017",
    vesselId: "rms-ho-chi-minh-city-voyager",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(221) 785-9530",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "StairMaster", "Cardio Gliders", "Cardio Punching Bags", "Rowing Machines", "Cardio Resistance Bands", "Air Bikes", "Cable Lunge Machine", "Cable Machines", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Shoulder Press Machine", "Speed Resistors", "Agility Dots", "Agility Hurdles", "Speed Cones", "Speed Ladders", "Speed Parachutes", "Boxing Equipment", "Cryotherapy Chambers", "Kickboxing Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Strength and Conditioning Coach", "Pilates Instructor", "Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Water Stations", "Nutrition Counseling", "Towel Service", "Equipment Orientation", "Audio/Visual Entertainment", "Smoothie Bar", "Personal Training Sessions", "Toiletries", "Body Composition Analysis", "Fresh Fruit Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
    id: "abfb03be-9603-4e87-a4b1-78a55169ac98",
    vesselId: "my--of-the-deep",
    name: "MY  of the Deep Fitness Center",
    description: "Discover wellness at sea with MY  of the Deep Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(585) 723-3225",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Treadmills", "Cardio Kettlebells", "Cardio Resistance Bands", "Spin Bikes", "Stationary Bikes", "Punching Bags", "Cable Single Arm Row Machine", "Cable Single Arm Woodchopper Machine", "Cable Tricep Pushdown Machine", "Seated Row Machine", "Cable Lunge Machine", "Free Weights", "Cable Pallof Press Machine", "Cable Shrug Machine", "Cable Plank Machine", "Cable Single Arm Lat Pulldown Machine", "Chest Fly Machine", "Calf Raise Machine", "Resistance Bands", "Agility Cones", "Sandbags", "Battle Ropes", "Kettlebells", "Slam Balls", "Speed Hurdles", "Jump Boxes", "Kickboxing Equipment", "Functional Training Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Smoothie Bar", "Equipment Orientation", "Towel Service", "Water Stations", "Group Fitness Classes", "Workout Programs", "Fresh Fruit Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
    id: "49303840-e41f-4b6c-af6c-1aaa92355400",
    vesselId: "ps-the--mariner",
    name: "PS The  Mariner Fitness Center",
    description: "PS The  Mariner Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Ho Chi Minh City. Our facility features dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(734) 943-8591",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "StairMaster", "Rowing Machines", "Stationary Bikes", "Jump Ropes", "Cardio Kettlebells", "Recumbent Bikes", "Abdominal Crunch Machine", "Leg Press Machine", "Cable Woodchopper Machine", "Power Rack", "Shoulder Press Machine", "Cable Lunge Machine", "Cable Back Extension Machine", "Bench Press", "Cable Single Arm Bicep Curl Machine", "Chest Press Machine", "Speed Sleds", "Yoga Mats", "Agility Cones", "Agility Ladders", "Medicine Balls", "Sandbags", "Resistance Bands", "Yoga Bolsters", "Infrared Therapy", "Dance Fitness Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Senior Fitness Specialist", "Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Water Stations", "Group Fitness Classes", "Nutrition Counseling", "Fitness Tracking", "Fresh Fruit Bar", "Body Composition Analysis", "Equipment Orientation", "Towel Service", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
    id: "fe46184f-44be-4b4a-a791-9a3dcacd45af",
    vesselId: "sv--gale",
    name: "Ho Chi Minh City Fitness Center",
    description: "Discover wellness at sea with Ho Chi Minh City Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(352) 495-6675",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Cardio Medicine Balls", "Cardio Step Platforms", "Elliptical Machines", "Battle Ropes", "Cardio Kettlebells", "Jump Ropes", "Agility Hurdles", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Pull-up Station", "Seated Row Machine", "Cable Deadlift Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Crossover Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Face Pull Machine", "Agility Dots", "Agility Ladders", "Speed Hurdles", "Sandbags", "Sledgehammers", "Infrared Therapy"],
    personalTrainers: ["Youth Fitness Specialist", "Spinning Instructor", "Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Hair Dryers", "Locker Rentals", "Protein Shakes", "Group Fitness Classes", "Fitness Tracking", "Fresh Fruit Bar", "Towel Service", "Equipment Orientation", "Body Composition Analysis", "Smoothie Bar"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "cde50060-5ca2-4ed7-b5e0-36ebbea8a5d2",
    vesselId: "rms--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Ho Chi Minh City. Our facility features dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(974) 361-2302",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Step Platforms", "Agility Hurdles", "Arc Trainers", "Cardio Resistance Bands", "VersaClimber", "Cardio Kickboxing Bags", "Air Bikes", "Cardio Kettlebells", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Lunge Machine", "Free Weights", "Cable Single Arm Face Pull Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Deadlift Machine", "Cable Woodchopper Machine", "Back Extension Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Barbells", "Lat Pulldown", "Cable Hip Thrust Machine", "TRX Suspension Trainers", "Battle Ropes", "Yoga Mats", "Speed Hurdles", "Agility Dots", "Agility Ladders", "Yoga Bolsters"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Strength and Conditioning Coach", "Certified Personal Trainer"],
    amenities: ["Fitness Consultations", "Protein Shakes", "Workout Programs", "Audio/Visual Entertainment", "Fitness Tracking", "Smoothie Bar", "Nutrition Counseling", "Water Stations", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
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
    isPopular: true
  },
  {
    id: "7f4e495f-2466-42d8-a4c5-0eba616b8299",
    vesselId: "ps-ho-chi-minh-city-voyager",
    name: "PS Ho Chi Minh City Voyager Fitness Center",
    description: "Welcome to PS Ho Chi Minh City Voyager Fitness Center, your premier wellness destination aboard the PS Ho Chi Minh City Voyager. Stay active and healthy while cruising the waters near Ho Chi Minh City with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(302) 730-4307",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Battle Ropes", "Punching Bags", "Air Bikes", "Boxing Equipment", "VersaClimber", "Spin Bikes", "Free Weights", "Smith Machine", "Chest Press Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Abdominal Crunch Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Pallof Press Machine", "Cable Single Arm Reverse Fly Machine", "Plate Loaded Machines", "Cable Bicep Curl Machine", "Kettlebells", "Speed Bands", "Agility Dots", "Sledgehammers", "Balance Boards", "Speed Ladders", "Speed Sleds", "Agility Hurdles", "Yoga Wheels", "Spinning Bikes", "Functional Training Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Body Composition Analysis", "Equipment Orientation", "Fitness Consultations", "Hair Dryers", "Workout Programs", "Fresh Fruit Bar", "Protein Shakes", "Nutrition Counseling", "Water Stations", "Smoothie Bar", "Locker Rentals", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "2e05ebde-9e97-40b8-bc68-6319bfeb7a14",
    vesselId: "ms--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(686) 540-3879",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Battle Ropes", "Boxing Equipment", "Punching Bags", "Elliptical Machines", "SkiErg", "Chest Press Machine", "Cable Single Arm Hip Thrust Machine", "Cable Deadlift Machine", "Tricep Extension Machine", "Cable Face Pull Machine", "Multi-Gym Systems", "Cable Single Arm Face Pull Machine", "Cable Calf Raise Machine", "Lat Pulldown", "Cable Single Arm Single Leg Woodchopper Machine", "Speed Cones", "Sandbags", "Agility Markers", "Resistance Bands", "Agility Dots"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Equipment Orientation", "Hair Dryers", "Group Fitness Classes", "Protein Shakes", "Workout Programs", "Locker Rentals", "Fitness Tracking", "Fitness Consultations", "Towel Service", "Toiletries", "Smoothie Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
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
      }
    ],
    isPopular: true
  },
  {
    id: "f0c9f74f-baed-477c-afaa-82955ba8de65",
    vesselId: "cs-the--mariner",
    name: "Ho Chi Minh City Fitness Center",
    description: "Discover wellness at sea with Ho Chi Minh City Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(142) 573-3095",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Punching Bags", "Cardio Step Platforms", "Stationary Bikes", "Boxing Equipment", "Rowing Machines", "StairMaster", "Spin Bikes", "Cable Single Arm Single Leg Reverse Fly Machine", "Seated Row Machine", "Back Extension Machine", "Cable Pallof Press Machine", "Cable Russian Twist Machine", "Cable Squat Machine", "Leg Extension Machine", "Cable Reverse Fly Machine", "Cable Back Extension Machine", "Cable Single Arm Tricep Extension Machine", "Agility Cones", "Stability Balls", "Weighted Vests", "Agility Dots", "Battle Ropes", "Speed Cords", "Tire Flips", "Functional Training Equipment"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor", "Group Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Nutrition Counseling", "Personal Training Sessions", "Hair Dryers", "Towel Service", "Workout Programs", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Group Fitness Classes", "Fitness Tracking", "Equipment Orientation", "Toiletries", "Water Stations"],
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
    hasFitnessAssessments: false,
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
    id: "9ac30080-1ad5-4e91-811a-be0d53bb682c",
    vesselId: "nx--gale",
    name: "Ho Chi Minh City Fitness Center",
    description: "Welcome to Ho Chi Minh City Fitness Center, your premier wellness destination aboard the NX  Gale. Stay active and healthy while cruising the waters near Ho Chi Minh City with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(110) 850-7190",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Agility Hurdles", "Arc Trainers", "Boxing Equipment", "Jump Ropes", "Spin Bikes", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Leg Extension Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Hip Thrust Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Back Extension Machine", "Battle Ropes", "Speed Bands", "Speed Cords", "Agility Poles", "TRX Suspension Trainers", "Speed Ladders", "Yoga Mats", "Agility Ladders", "Yoga Straps", "HydroMassage Beds"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Towel Service", "Protein Shakes", "Hair Dryers", "Smoothie Bar", "Water Stations", "Fitness Tracking", "Toiletries", "Personal Training Sessions", "Audio/Visual Entertainment", "Locker Rentals", "Fitness Consultations"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
  }
];
