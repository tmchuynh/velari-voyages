// Fitness center venues data for Hamburg
// This file contains fitness center and wellness facility information for cruise vessels operating from Hamburg
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const hamburgFitnessCenters: FitnessCenter[] = [
  {
    id: "3cb6c323-1deb-46b5-94e5-7bd8f2eb7a7f",
    vesselId: "my--explorer",
    name: "Hamburg Fitness Center",
    description: "Welcome to Hamburg Fitness Center, your premier wellness destination aboard the MY  Explorer. Stay active and healthy while cruising the waters near Hamburg with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(731) 754-3620",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Cardio Step Platforms", "Battle Ropes", "Rowing Machines", "SkiErg", "Treadmills", "Boxing Equipment", "Arc Trainers", "Agility Hurdles", "Cardio Medicine Balls", "Cable Single Arm Upright Row Machine", "Chest Press Machine", "Seated Row Machine", "Cable Crossover Machine", "Back Extension Machine", "Shoulder Press Machine", "Cable Deadlift Machine", "Cable Single Arm Row Machine", "Cable Row Machine", "Speed Cones", "Speed Resistors", "Sandbags", "BOSU Balls", "Jump Boxes", "Functional Training Equipment", "Compression Therapy", "Cryotherapy Chamber", "Yoga Blocks", "Dance Fitness Equipment", "CrossFit Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Fitness Nutrition Specialist", "Strength and Conditioning Coach", "Strength Training Specialist"],
    amenities: ["Protein Shakes", "Towel Service", "Locker Rentals", "Nutrition Counseling", "Water Stations", "Hair Dryers", "Fresh Fruit Bar", "Toiletries", "Body Composition Analysis", "Fitness Consultations", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "cfbccea8-9f2a-44e7-9716-5f6d28b4fa60",
    vesselId: "cs-hamburg-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(858) 204-4914",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Stationary Bikes", "Battle Ropes", "Recumbent Bikes", "Cardio Step Platforms", "Cardio Medicine Balls", "Cardio Punching Bags", "Punching Bags", "Smith Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Smith Machines", "Functional Trainers", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Russian Twist Machine", "Cable Pallof Press Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Bicep Curl Machine", "Kettlebells", "Agility Markers", "BOSU Balls", "Speed Harnesses", "Weighted Vests", "Sledgehammers", "TRX Suspension Trainers", "Stretching Stations", "Dance Fitness Equipment", "Yoga Bolsters"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Protein Shakes", "Towel Service", "Fitness Consultations", "Workout Programs", "Toiletries", "Smoothie Bar", "Equipment Orientation", "Water Stations", "Group Fitness Classes", "Locker Rentals"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "cbeb60da-2896-40f3-b3fb-618b143ba0f3",
    vesselId: "hms--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Hamburg. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(993) 861-9134",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Punching Bags", "Spin Bikes", "Stationary Bikes", "SkiErg", "VersaClimber", "Cable Face Pull Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Squat Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Bicep Curl Machine", "Dumbbells", "Barbells", "Chest Press Machine", "Bicep Curl Machine", "Weight Machines", "Agility Ladders", "Tire Flips", "Agility Poles", "Kettlebells", "Medicine Balls", "BOSU Balls", "Resistance Bands", "Compression Therapy", "Infrared Sauna", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor", "Senior Fitness Specialist", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Workout Programs", "Fitness Consultations", "Hair Dryers", "Protein Shakes", "Body Composition Analysis", "Locker Rentals", "Toiletries", "Fitness Tracking", "Group Fitness Classes", "Towel Service", "Smoothie Bar", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Water Stations"],
    is24Hours: true,
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
    id: "d5b81664-1a7d-444b-a2c2-672a06071e3c",
    vesselId: "sv-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the SV The  Mariner. Stay active and healthy while cruising the waters near Hamburg with our state-of-the-art fitness facilities. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(371) 233-1763",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "Punching Bags", "VersaClimber", "Spin Bikes", "Boxing Equipment", "Cable Lunge Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Upright Row Machine", "Weight Machines", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Free Weights", "Functional Trainers", "Dumbbells", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Tricep Extension Machine", "Speed Cords", "Speed Bands", "Speed Parachutes", "Speed Harnesses", "Agility Dots", "Cryotherapy Chambers"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Hair Dryers", "Nutrition Counseling", "Group Fitness Classes", "Audio/Visual Entertainment", "Locker Rentals", "Fresh Fruit Bar", "Fitness Consultations", "Personal Training Sessions", "Protein Shakes", "Smoothie Bar", "Fitness Tracking"],
    is24Hours: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "1ef1a5b3-d777-42a2-b3ac-44dbbff9ff4f",
    vesselId: "ss--gale",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the SS  Gale. Stay active and healthy while cruising the waters near Hamburg with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(214) 392-5416",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Arc Trainers", "Stationary Bikes", "Cardio Resistance Bands", "Rowing Machines", "Elliptical Machines", "Cardio Medicine Balls", "Boxing Equipment", "SkiErg", "Cable Single Arm Shrug Machine", "Chest Fly Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Pull-up Station", "Free Weights", "Cable Single Arm Lat Pulldown Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Back Extension Machine", "Leg Press Machine", "Cable Single Arm Single Leg Shrug Machine", "Resistance Bands", "Agility Poles", "Speed Hurdles", "Sandbags", "Jump Boxes", "Spinning Bikes", "Infrared Sauna", "Compression Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach", "Fitness Nutrition Specialist", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Hair Dryers", "Locker Rentals", "Towel Service", "Fitness Tracking", "Audio/Visual Entertainment", "Body Composition Analysis", "Nutrition Counseling", "Equipment Orientation", "Smoothie Bar", "Toiletries", "Fitness Consultations"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "32f8c675-cf2b-4b1d-9d40-d167138d522d",
    vesselId: "rms--explorer",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(330) 404-9610",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Medicine Balls", "Arc Trainers", "Cardio Kickboxing Bags", "Cardio Punching Bags", "Agility Hurdles", "Jump Ropes", "Punching Bags", "Cable Single Arm Pallof Press Machine", "Free Weights", "Leg Curl Machine", "Bench Press", "Cable Lateral Raise Machine", "Smith Machine", "Cable Single Arm Deadlift Machine", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Speed Bands", "Agility Cones", "Agility Poles", "Agility Markers", "Speed Sleds", "Agility Ladders", "Kettlebells", "Massage Chairs", "Dance Fitness Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Corrective Exercise Specialist", "Fitness Nutrition Specialist", "Strength and Conditioning Coach"],
    amenities: ["Protein Shakes", "Hair Dryers", "Personal Training Sessions", "Water Stations", "Equipment Orientation", "Body Composition Analysis", "Workout Programs", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Fitness Tracking", "Towel Service"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "268381ab-6f42-44b6-9f14-600c971b3423",
    vesselId: "rms-hamburg-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Hamburg. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(506) 938-1196",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Cardio Step Platforms", "Treadmills", "Cardio Kettlebells", "Elliptical Machines", "Agility Hurdles", "Cardio Kickboxing Bags", "Boxing Equipment", "Arc Trainers", "Jump Ropes", "Cable Back Extension Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Row Machine", "Cable Single Arm Calf Raise Machine", "Tricep Extension Machine", "Lat Pulldown", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Agility Dots", "Agility Ladders", "Speed Resistors", "Yoga Mats", "Speed Harnesses", "Stability Balls", "Weighted Vests", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Protein Shakes", "Group Fitness Classes", "Hair Dryers", "Personal Training Sessions", "Fresh Fruit Bar", "Fitness Consultations", "Equipment Orientation", "Body Composition Analysis", "Smoothie Bar", "Toiletries", "Workout Programs", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "6e4a86df-826d-4e1a-85d8-b99bf8360349",
    vesselId: "ps--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Hamburg. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(449) 301-1923",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Recumbent Bikes", "Cardio Kettlebells", "Stationary Bikes", "Battle Ropes", "Elliptical Machines", "Spin Bikes", "Cable Single Arm Single Leg Reverse Fly Machine", "Smith Machine", "Multi-Gym Systems", "Smith Machines", "Chest Press Machine", "Plate Loaded Machines", "Power Rack", "Calf Raise Machine", "Cable Glute Kickback Machine", "Abdominal Crunch Machine", "Cable Back Extension Machine", "Shoulder Press Machine", "Agility Hurdles", "Weighted Vests", "Foam Rollers", "Stability Balls", "Slam Balls", "Speed Parachutes", "Spinning Bikes", "Boxing Equipment", "HydroMassage Beds"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist", "Youth Fitness Specialist", "Strength and Conditioning Coach"],
    amenities: ["Equipment Orientation", "Personal Training Sessions", "Workout Programs", "Fitness Consultations", "Body Composition Analysis", "Locker Rentals", "Smoothie Bar", "Hair Dryers", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "fdcee81a-2867-4b10-b813-7ab05bda8c8b",
    vesselId: "my-the--mariner",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(697) 185-7576",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Jump Ropes", "Cardio Gliders", "Punching Bags", "Rowing Machines", "Air Bikes", "VersaClimber", "Stationary Bikes", "Recumbent Bikes", "Agility Hurdles", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Weight Machines", "Back Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Ab Crunch Machine", "Barbells", "Cable Woodchopper Machine", "BOSU Balls", "Slam Balls", "Resistance Bands", "Agility Markers", "Foam Rollers", "Yoga Straps", "TRX Suspension Trainers"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor"],
    amenities: ["Fresh Fruit Bar", "Fitness Tracking", "Body Composition Analysis", "Locker Rentals", "Audio/Visual Entertainment", "Equipment Orientation", "Towel Service", "Water Stations", "Smoothie Bar", "Hair Dryers", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    isPopular: false
  },
  {
    id: "4ff9f09d-7d9d-4542-a4ff-5debafb78711",
    vesselId: "nx--gale",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the NX  Gale. Stay active and healthy while cruising the waters near Hamburg with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(719) 479-7142",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Air Bikes", "Cardio Kettlebells", "SkiErg", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Battle Ropes", "Elliptical Machines", "Stationary Bikes", "Back Extension Machine", "Chest Fly Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Lunge Machine", "Functional Trainers", "Cable Squat Machine", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Leg Curl Machine", "Agility Poles", "BOSU Balls", "Speed Cones", "Sledgehammers", "Speed Harnesses", "Agility Hurdles", "Speed Hurdles", "Float Tanks"],
    personalTrainers: ["Strength and Conditioning Coach", "Strength Training Specialist", "Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Workout Programs", "Toiletries", "Personal Training Sessions", "Equipment Orientation", "Body Composition Analysis", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Water Stations", "Locker Rentals", "Fitness Tracking"],
    is24Hours: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  }
];
