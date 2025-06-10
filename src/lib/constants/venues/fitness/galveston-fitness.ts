// Fitness center venues data for Galveston
// This file contains fitness center and wellness facility information for cruise vessels operating from Galveston
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const galvestonFitnessCenters: FitnessCenter[] = [
  {
    id: "730e56f3-153a-4907-b5f7-41587c252a16",
    vesselId: "ly--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(110) 386-3237",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Cardio Kettlebells", "Rowing Machines", "Arc Trainers", "StairMaster", "VersaClimber", "Cardio Resistance Bands", "Treadmills", "SkiErg", "Cardio Kickboxing Bags", "Cable Single Arm Single Leg Reverse Fly Machine", "Seated Row Machine", "Cable Crossover Machine", "Lat Pulldown", "Cable Single Arm Single Leg Bicep Curl Machine", "Bicep Curl Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Pallof Press Machine", "Cable Reverse Fly Machine", "Kettlebells", "Agility Cones", "Speed Bands", "Agility Markers", "Tire Flips", "Yoga Mats", "Jump Boxes", "Speed Parachutes", "Recovery Tools", "Aqua Fitness Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Smoothie Bar", "Toiletries", "Group Fitness Classes", "Hair Dryers", "Personal Training Sessions", "Body Composition Analysis", "Fitness Consultations", "Water Stations", "Equipment Orientation"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "c5814ff4-8e1a-4288-be38-a292b87a6012",
    vesselId: "ts-galveston-voyager",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(211) 337-4060",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Boxing Equipment", "Treadmills", "Air Bikes", "SkiErg", "Punching Bags", "Spin Bikes", "Cardio Gliders", "VersaClimber", "Battle Ropes", "Smith Machines", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Calf Raise Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Squat Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Power Rack", "Plyo Boxes", "TRX Suspension Trainers", "Balance Boards", "Resistance Bands", "BOSU Balls", "Yoga Mats", "Speed Ladders", "Spinning Bikes", "Cryotherapy Chambers", "Yoga Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Locker Rentals", "Towel Service", "Group Fitness Classes", "Toiletries", "Protein Shakes", "Fitness Consultations", "Water Stations", "Equipment Orientation", "Body Composition Analysis", "Workout Programs"],
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
    isPopular: true
  },
  {
    id: "266e90b5-ee4d-421a-8a26-1d2b4ffbb55e",
    vesselId: "rms--of-the-deep",
    name: "RMS  of the Deep Fitness Center",
    description: "RMS  of the Deep Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Galveston. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(448) 274-8363",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Cardio Kickboxing Bags", "Boxing Equipment", "Agility Hurdles", "Arc Trainers", "Punching Bags", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Medicine Balls", "Foam Rollers", "Sandbags", "Weighted Vests", "Slam Balls", "Speed Hurdles", "Battle Ropes", "Speed Resistors", "Infrared Sauna", "Functional Training Equipment", "Yoga Wheels"],
    personalTrainers: ["Corrective Exercise Specialist", "Certified Personal Trainer", "Spinning Instructor", "Strength Training Specialist"],
    amenities: ["Body Composition Analysis", "Locker Rentals", "Personal Training Sessions", "Equipment Orientation", "Group Fitness Classes", "Workout Programs", "Hair Dryers", "Nutrition Counseling"],
    is24Hours: false,
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
    hasFitnessAssessments: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "5f2c5438-1d57-4ed1-9b96-96ff04d8abd5",
    vesselId: "ly-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(944) 442-2029",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Punching Bags", "Cardio Resistance Bands", "Spin Bikes", "Boxing Equipment", "Recumbent Bikes", "Cable Face Pull Machine", "Cable Single Arm Single Leg Upright Row Machine", "Functional Trainers", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Back Extension Machine", "Cable Lunge Machine", "Cable Single Arm Row Machine", "Jump Boxes", "TRX Suspension Trainers", "Speed Ladders", "Battle Ropes", "Plyo Boxes", "Kickboxing Equipment", "Pilates Reformers", "Float Tanks"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Equipment Orientation", "Water Stations", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Body Composition Analysis", "Group Fitness Classes", "Workout Programs", "Fitness Consultations", "Personal Training Sessions", "Toiletries"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "3bb87b64-8f8a-45dd-bf4c-65db0e1da9a6",
    vesselId: "sy--gale",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(749) 915-9853",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Jump Ropes", "StairMaster", "Cardio Punching Bags", "Battle Ropes", "Elliptical Machines", "Agility Hurdles", "Rowing Machines", "Treadmills", "Power Rack", "Cable Single Arm Row Machine", "Pull-up Station", "Cable Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Ab Crunch Machine", "Cable Glute Kickback Machine", "Cable Single Arm Lat Pulldown Machine", "Calf Raise Machine", "Speed Cones", "Speed Hurdles", "BOSU Balls", "Agility Cones", "Speed Harnesses", "Spinning Bikes", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist", "Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Fitness Tracking", "Workout Programs", "Group Fitness Classes", "Body Composition Analysis", "Water Stations", "Nutrition Counseling", "Fresh Fruit Bar", "Hair Dryers", "Personal Training Sessions", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "e4471466-0942-4d7d-9115-072d11775cc3",
    vesselId: "ts--explorer",
    name: "TS  Explorer Fitness Center",
    description: "Welcome to TS  Explorer Fitness Center, your premier wellness destination aboard the TS  Explorer. Stay active and healthy while cruising the waters near Galveston with our state-of-the-art fitness facilities. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(562) 705-2012",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Punching Bags", "Recumbent Bikes", "Treadmills", "SkiErg", "Elliptical Machines", "VersaClimber", "Cardio Punching Bags", "Tricep Extension Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Reverse Fly Machine", "Cable Hip Thrust Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Leg Extension Machine", "Stability Balls", "Foam Rollers", "Agility Cones", "Speed Cones", "Kettlebells", "Pilates Reformers", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Corrective Exercise Specialist", "Spinning Instructor"],
    amenities: ["Hair Dryers", "Towel Service", "Protein Shakes", "Toiletries", "Water Stations", "Equipment Orientation", "Workout Programs", "Body Composition Analysis", "Fitness Tracking", "Nutrition Counseling", "Locker Rentals"],
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
    isPopular: false
  },
  {
    id: "2defcb3b-ee7e-4a91-ae0a-09d306fde292",
    vesselId: "ms-galveston-voyager",
    name: "Galveston Fitness Center",
    description: "Welcome to Galveston Fitness Center, your premier wellness destination aboard the MS Galveston Voyager. Stay active and healthy while cruising the waters near Galveston with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(405) 882-6477",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Recumbent Bikes", "Rowing Machines", "Cardio Kettlebells", "Stationary Bikes", "Arc Trainers", "StairMaster", "Air Bikes", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Squat Machine", "Pull-up Station", "Cable Calf Raise Machine", "Free Weights", "Cable Shrug Machine", "Chest Fly Machine", "Shoulder Press Machine", "Speed Cones", "Jump Boxes", "Weighted Vests", "Stability Balls", "TRX Suspension Trainers", "Speed Cords", "Boxing Equipment", "Cryotherapy Chamber", "Dance Fitness Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Group Fitness Classes", "Hair Dryers", "Protein Shakes", "Nutrition Counseling", "Smoothie Bar", "Water Stations", "Equipment Orientation", "Audio/Visual Entertainment", "Locker Rentals", "Towel Service"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "21e338ef-6652-467c-bbf7-ca6561b0759c",
    vesselId: "ly--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(419) 342-2371",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "StairMaster", "Cardio Kickboxing Bags", "Treadmills", "VersaClimber", "Cardio Resistance Bands", "Cardio Step Platforms", "Arc Trainers", "Punching Bags", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Smith Machines", "Cable Single Arm Single Leg Lunge Machine", "Cable Tricep Pushdown Machine", "Cable Crossover Machine", "Cable Single Arm Squat Machine", "Weight Machines", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Lunge Machine", "Speed Bands", "Kettlebells", "Tire Flips", "Resistance Bands", "Foam Rollers", "Yoga Equipment", "HydroMassage Beds", "Dance Fitness Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Hair Dryers", "Audio/Visual Entertainment", "Towel Service", "Body Composition Analysis", "Fresh Fruit Bar", "Equipment Orientation", "Fitness Tracking", "Water Stations", "Personal Training Sessions"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    isPopular: true
  },
  {
    id: "96a086fb-1fc4-43b3-8d4a-7b93b0a8d782",
    vesselId: "my-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(888) 751-8490",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Punching Bags", "SkiErg", "Recumbent Bikes", "Jump Ropes", "Cardio Kettlebells", "Elliptical Machines", "Treadmills", "Cable Shrug Machine", "Cable Single Arm Squat Machine", "Smith Machines", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Pallof Press Machine", "Chest Fly Machine", "Speed Resistors", "Weighted Vests", "Speed Parachutes", "Speed Cones", "Balance Boards", "Kettlebells", "Kickboxing Equipment", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor"],
    amenities: ["Protein Shakes", "Fresh Fruit Bar", "Body Composition Analysis", "Towel Service", "Hair Dryers", "Group Fitness Classes", "Toiletries", "Nutrition Counseling", "Equipment Orientation", "Water Stations", "Workout Programs", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "0d88a960-8347-4bbd-9d48-038e9c053456",
    vesselId: "my--gale",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(233) 974-6408",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Air Bikes", "StairMaster", "Cardio Kickboxing Bags", "Cardio Gliders", "Cardio Medicine Balls", "VersaClimber", "Rowing Machines", "Stationary Bikes", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Chest Press Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Plank Machine", "Cable Single Arm Chest Press Machine", "Cable Russian Twist Machine", "Cable Single Arm Face Pull Machine", "Barbells", "Cable Single Arm Hip Thrust Machine", "Cable Lateral Raise Machine", "Agility Ladders", "Speed Resistors", "Speed Cones", "Speed Parachutes", "Kettlebells", "Massage Chairs", "Spinning Bikes", "Infrared Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Corrective Exercise Specialist", "Youth Fitness Specialist", "Pilates Instructor"],
    amenities: ["Hair Dryers", "Group Fitness Classes", "Body Composition Analysis", "Locker Rentals", "Fitness Tracking", "Audio/Visual Entertainment", "Personal Training Sessions", "Water Stations"],
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
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
