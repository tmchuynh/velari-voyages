// Fitness center venues data for Montevideo
// This file contains fitness center and wellness facility information for cruise vessels operating from Montevideo
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const montevideoFitnessCenters: FitnessCenter[] = [
  {
    id: "6eeb4b5a-4bf7-40b7-93bd-eda9675a3f3c",
    vesselId: "nb--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(245) 782-1675",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Air Bikes", "Cardio Medicine Balls", "Recumbent Bikes", "Boxing Equipment", "Cardio Gliders", "Cardio Kettlebells", "Elliptical Machines", "Cardio Step Platforms", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Pull-up Station", "Cable Single Arm Ab Crunch Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Shrug Machine", "Speed Parachutes", "Agility Ladders", "Yoga Mats", "Battle Ropes", "Foam Rollers", "Weighted Vests", "Slam Balls", "Plyo Boxes", "Dance Fitness Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Group Fitness Instructor"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Personal Training Sessions", "Workout Programs", "Fitness Tracking", "Water Stations", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
    id: "1b624511-c8ae-4b35-93ae-1e11fe6d8b2e",
    vesselId: "ss-montevideo-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(926) 478-7377",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Air Bikes", "Punching Bags", "Cardio Punching Bags", "Battle Ropes", "Cardio Resistance Bands", "Boxing Equipment", "Jump Ropes", "Free Weights", "Functional Trainers", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Hip Thrust Machine", "Cable Glute Kickback Machine", "Multi-Gym Systems", "Cable Shrug Machine", "Cable Russian Twist Machine", "Cable Single Arm Chest Press Machine", "Speed Sleds", "Agility Dots", "Agility Hurdles", "Kettlebells", "Sandbags", "Sledgehammers", "Speed Parachutes", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Strength Training Specialist", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Audio/Visual Entertainment", "Fitness Consultations", "Water Stations", "Workout Programs", "Locker Rentals", "Fresh Fruit Bar", "Fitness Tracking", "Hair Dryers", "Protein Shakes"],
    is24Hours: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "a9f52297-9453-4ea2-92d4-c1fdb737fae4",
    vesselId: "nx--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(644) 765-4550",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Rowing Machines", "Cardio Kettlebells", "Battle Ropes", "Recumbent Bikes", "Cardio Kickboxing Bags", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Smith Machine", "Cable Ab Crunch Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Deadlift Machine", "Agility Poles", "Jump Boxes", "Speed Ladders", "Speed Parachutes", "Agility Markers", "Agility Hurdles", "Medicine Balls", "Yoga Wheels", "Yoga Straps", "Compression Therapy"],
    personalTrainers: ["Spinning Instructor", "Yoga Instructor", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Protein Shakes", "Equipment Orientation", "Workout Programs", "Fitness Tracking", "Fitness Consultations", "Smoothie Bar", "Nutrition Counseling", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
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
    isPopular: false
  },
  {
    id: "a3473b60-744f-4e74-aa04-555233156d9a",
    vesselId: "sv-the--mariner",
    name: "SV The  Mariner Fitness Center",
    description: "SV The  Mariner Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Montevideo. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(929) 500-6698",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Cardio Punching Bags", "Cardio Kettlebells", "Recumbent Bikes", "Punching Bags", "Arc Trainers", "Air Bikes", "Cardio Gliders", "Barbells", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Reverse Fly Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Back Extension Machine", "Cable Reverse Fly Machine", "Cable Pallof Press Machine", "Cable Single Arm Glute Kickback Machine", "Functional Trainers", "Agility Dots", "Medicine Balls", "Speed Cords", "Weighted Vests", "Speed Resistors", "Resistance Bands", "Tire Flips", "Speed Bands", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Audio/Visual Entertainment", "Smoothie Bar", "Workout Programs", "Hair Dryers", "Fitness Tracking", "Water Stations", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "9e8cb713-383b-4427-8cb5-dcd14de2cc33",
    vesselId: "nx--gale",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(447) 776-7957",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "VersaClimber", "Cardio Kettlebells", "Cardio Gliders", "Treadmills", "SkiErg", "Cardio Resistance Bands", "Elliptical Machines", "Bench Press", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Face Pull Machine", "Power Rack", "Cable Crossover Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Bicep Curl Machine", "Speed Hurdles", "Yoga Mats", "Agility Poles", "Speed Resistors", "Weighted Vests", "Kettlebells", "Infrared Sauna", "Infrared Therapy", "Cryotherapy Chambers"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Fresh Fruit Bar", "Protein Shakes", "Body Composition Analysis", "Personal Training Sessions", "Equipment Orientation", "Toiletries", "Fitness Tracking", "Fitness Consultations"],
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "156b56d4-ad07-437a-9fd1-9f50715a0b68",
    vesselId: "hms--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(669) 914-5269",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Stationary Bikes", "Cardio Gliders", "VersaClimber", "Spin Bikes", "Cardio Resistance Bands", "Air Bikes", "Rowing Machines", "Cable Single Arm Pallof Press Machine", "Chest Fly Machine", "Smith Machines", "Cable Pallof Press Machine", "Cable Plank Machine", "Cable Squat Machine", "Barbells", "Smith Machine", "Cable Woodchopper Machine", "Power Rack", "Free Weights", "Speed Bands", "Plyo Boxes", "Jump Boxes", "Battle Ropes", "Agility Markers", "Agility Ladders", "Pilates Reformers"],
    personalTrainers: ["Youth Fitness Specialist", "Strength Training Specialist", "Strength and Conditioning Coach", "Aqua Fitness Instructor"],
    amenities: ["Toiletries", "Smoothie Bar", "Group Fitness Classes", "Workout Programs", "Equipment Orientation", "Fitness Consultations", "Fresh Fruit Bar", "Protein Shakes", "Water Stations", "Hair Dryers", "Personal Training Sessions", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "c8e03e39-343e-4a4a-bc6c-3a8e5000801c",
    vesselId: "ss-montevideo-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(104) 430-6827",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Medicine Balls", "Elliptical Machines", "Treadmills", "Agility Hurdles", "StairMaster", "Air Bikes", "Recumbent Bikes", "Cable Machines", "Bicep Curl Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Plank Machine", "Leg Curl Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Woodchopper Machine", "Lat Pulldown", "Agility Dots", "Sandbags", "Stability Balls", "Foam Rollers", "Weighted Vests", "Yoga Blocks", "Barre Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Certified Personal Trainer", "Pilates Instructor"],
    amenities: ["Fitness Consultations", "Hair Dryers", "Group Fitness Classes", "Fresh Fruit Bar", "Locker Rentals", "Body Composition Analysis", "Toiletries", "Fitness Tracking", "Personal Training Sessions", "Water Stations"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "6d770547-b299-4ae3-83d4-e155a88a6be1",
    vesselId: "ms--of-the-deep",
    name: "Montevideo Fitness Center",
    description: "Welcome to Montevideo Fitness Center, your premier wellness destination aboard the MS  of the Deep. Stay active and healthy while cruising the waters near Montevideo with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(261) 718-2676",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "StairMaster", "Air Bikes", "Cardio Step Platforms", "Recumbent Bikes", "Rowing Machines", "Cardio Gliders", "Cardio Kickboxing Bags", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Foam Rollers", "Resistance Bands", "Speed Sleds", "Speed Cords", "TRX Suspension Trainers", "Kickboxing Equipment", "Stretching Stations", "Yoga Bolsters", "Boxing Equipment"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer", "Pilates Instructor", "Fitness Nutrition Specialist", "Youth Fitness Specialist"],
    amenities: ["Nutrition Counseling", "Personal Training Sessions", "Towel Service", "Body Composition Analysis", "Equipment Orientation", "Fitness Tracking", "Fitness Consultations", "Group Fitness Classes", "Workout Programs", "Toiletries", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
    id: "83c5a818-cf3b-4358-9252-b2fa81fd6410",
    vesselId: "hms-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(500) 621-9268",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Punching Bags", "Battle Ropes", "Treadmills", "StairMaster", "Cardio Gliders", "Recumbent Bikes", "Cardio Step Platforms", "Elliptical Machines", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Glute Kickback Machine", "Resistance Bands", "BOSU Balls", "Speed Resistors", "Sandbags", "Speed Hurdles", "Functional Training Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Tracking", "Protein Shakes", "Towel Service", "Water Stations", "Personal Training Sessions", "Toiletries", "Body Composition Analysis", "Equipment Orientation", "Group Fitness Classes", "Nutrition Counseling"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "367504d6-cb15-4605-9139-8b6420cd1d10",
    vesselId: "nb--gale",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(484) 577-1991",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Rowing Machines", "Boxing Equipment", "Cardio Gliders", "Battle Ropes", "Arc Trainers", "Lat Pulldown", "Smith Machine", "Cable Plank Machine", "Back Extension Machine", "Cable Lateral Raise Machine", "Cable Single Arm Row Machine", "Cable Tricep Pushdown Machine", "Weight Machines", "Tricep Extension Machine", "Stability Balls", "Resistance Bands", "Speed Resistors", "Speed Cords", "Weighted Vests", "Speed Harnesses", "Float Tanks", "Yoga Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Fresh Fruit Bar", "Fitness Consultations", "Audio/Visual Entertainment", "Body Composition Analysis", "Group Fitness Classes", "Locker Rentals", "Water Stations", "Towel Service", "Personal Training Sessions"],
    is24Hours: true,
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
    hasChildcareServices: true,
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
