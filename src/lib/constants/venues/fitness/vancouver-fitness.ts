// Fitness center venues data for Vancouver
// This file contains fitness center and wellness facility information for cruise vessels operating from Vancouver
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const vancouverFitnessCenters: FitnessCenter[] = [
  {
    id: "4e1fec33-b9dc-44c1-8ea1-cdaf5152c5a6",
    vesselId: "rv--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(563) 526-6972",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Elliptical Machines", "VersaClimber", "Treadmills", "Cardio Resistance Bands", "Battle Ropes", "Air Bikes", "Cardio Medicine Balls", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Balance Boards", "Kettlebells", "Agility Dots", "Sledgehammers", "Speed Bands", "Plyo Boxes", "Aqua Fitness Equipment"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Fitness Consultations", "Body Composition Analysis", "Toiletries", "Workout Programs", "Towel Service", "Fresh Fruit Bar", "Hair Dryers", "Group Fitness Classes", "Water Stations", "Personal Training Sessions", "Nutrition Counseling"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "937c425e-3901-4e5a-b11b-d5dd6c6f6336",
    vesselId: "rv-vancouver-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(972) 953-6453",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Cardio Gliders", "Cardio Punching Bags", "VersaClimber", "Cardio Step Platforms", "SkiErg", "Stationary Bikes", "Cardio Kickboxing Bags", "Boxing Equipment", "Battle Ropes", "Seated Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Tricep Pushdown Machine", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Tricep Extension Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Deadlift Machine", "TRX Suspension Trainers", "Agility Poles", "Sandbags", "Weighted Vests", "Speed Sleds", "Speed Harnesses", "HydroMassage Beds", "Yoga Straps", "CrossFit Equipment"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Equipment Orientation", "Body Composition Analysis", "Fresh Fruit Bar", "Protein Shakes", "Water Stations", "Fitness Tracking", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "20a1d366-f28f-4dee-8dcf-54b103fbeb19",
    vesselId: "ts--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the TS  of the Deep. Stay active and healthy while cruising the waters near Vancouver with our state-of-the-art fitness facilities. Our facility features pool area.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(913) 334-5384",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Stationary Bikes", "VersaClimber", "Battle Ropes", "Cardio Punching Bags", "Agility Hurdles", "Rowing Machines", "SkiErg", "Elliptical Machines", "Cardio Medicine Balls", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Pallof Press Machine", "Cable Reverse Fly Machine", "Cable Row Machine", "Multi-Gym Systems", "Cable Single Arm Lat Pulldown Machine", "Cable Upright Row Machine", "Lat Pulldown", "Stability Balls", "Speed Bands", "Agility Ladders", "Weighted Vests", "BOSU Balls", "Sandbags", "Agility Dots", "Cryotherapy Chambers", "Massage Chairs", "Yoga Straps"],
    personalTrainers: ["Spinning Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Nutrition Counseling", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Group Fitness Classes", "Body Composition Analysis", "Workout Programs", "Water Stations", "Smoothie Bar", "Toiletries", "Fitness Consultations", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "aeba99c3-2315-403a-9c0e-df6053273dcc",
    vesselId: "nb-the--mariner",
    name: "Vancouver Fitness Center",
    description: "Discover wellness at sea with Vancouver Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(296) 365-1694",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Resistance Bands", "Punching Bags", "Cardio Kettlebells", "Cardio Step Platforms", "Cardio Punching Bags", "Air Bikes", "Cardio Gliders", "Agility Hurdles", "SkiErg", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Lateral Raise Machine", "Cable Face Pull Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Front Raise Machine", "Lat Pulldown", "Cable Single Arm Single Leg Lateral Raise Machine", "Functional Trainers", "Agility Dots", "Speed Harnesses", "Stability Balls", "Jump Boxes", "Slam Balls", "Compression Therapy", "Recovery Tools"],
    personalTrainers: ["Spinning Instructor", "Senior Fitness Specialist", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Smoothie Bar", "Body Composition Analysis", "Protein Shakes", "Fitness Tracking", "Toiletries", "Equipment Orientation", "Group Fitness Classes", "Workout Programs", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "6d552212-59d7-46e9-ad3f-fd4c1d2b4091",
    vesselId: "hms--gale",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the HMS  Gale. Stay active and healthy while cruising the waters near Vancouver with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(276) 904-5043",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "SkiErg", "Cardio Step Platforms", "Cardio Kettlebells", "Treadmills", "Cardio Punching Bags", "Bicep Curl Machine", "Cable Single Arm Single Leg Plank Machine", "Dumbbells", "Cable Single Arm Ab Crunch Machine", "Cable Ab Crunch Machine", "Seated Row Machine", "Cable Calf Raise Machine", "Cable Plank Machine", "Cable Single Arm Row Machine", "Agility Hurdles", "Balance Boards", "Speed Sleds", "Speed Harnesses", "Agility Markers", "Plyo Boxes", "Agility Poles", "Agility Dots", "Aqua Fitness Equipment"],
    personalTrainers: ["Strength Training Specialist", "Fitness Nutrition Specialist", "Corrective Exercise Specialist", "Senior Fitness Specialist"],
    amenities: ["Fitness Tracking", "Personal Training Sessions", "Locker Rentals", "Nutrition Counseling", "Toiletries", "Audio/Visual Entertainment", "Water Stations", "Hair Dryers", "Protein Shakes"],
    is24Hours: false,
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
  },
  {
    id: "15a5680a-4558-47a2-bbbe-c216a1977c20",
    vesselId: "ms--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(925) 453-4188",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Kickboxing Bags", "Punching Bags", "Cardio Kettlebells", "Battle Ropes", "Elliptical Machines", "Rowing Machines", "Cardio Gliders", "Jump Ropes", "Cardio Resistance Bands", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Row Machine", "Barbells", "Leg Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Deadlift Machine", "Cable Single Arm Shoulder Press Machine", "Kettlebells", "Jump Boxes", "Agility Cones", "Tire Flips", "Medicine Balls", "Resistance Bands", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Corrective Exercise Specialist", "Aqua Fitness Instructor"],
    amenities: ["Locker Rentals", "Hair Dryers", "Fitness Consultations", "Group Fitness Classes", "Towel Service", "Equipment Orientation", "Water Stations", "Body Composition Analysis", "Smoothie Bar", "Nutrition Counseling", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "d296d4df-c307-4c5b-a1e9-1979414acb42",
    vesselId: "rv-vancouver-voyager",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(645) 561-5964",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Cardio Kickboxing Bags", "StairMaster", "Stationary Bikes", "SkiErg", "Spin Bikes", "Rowing Machines", "Cable Single Arm Single Leg Shrug Machine", "Cable Squat Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Smith Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Kettlebells", "Agility Ladders", "Speed Cones", "Stability Balls", "Balance Boards", "Boxing Equipment", "Functional Training Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Fitness Consultations", "Audio/Visual Entertainment", "Body Composition Analysis", "Group Fitness Classes", "Personal Training Sessions", "Workout Programs", "Nutrition Counseling", "Toiletries", "Water Stations"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "5dfae27e-0341-4c44-8427-c02e8d84697e",
    vesselId: "fv--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Vancouver. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(341) 182-1360",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Cardio Kickboxing Bags", "Cardio Punching Bags", "Agility Hurdles", "Spin Bikes", "Treadmills", "Cardio Gliders", "Cable Crossover Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Calf Raise Machine", "Cable Ab Crunch Machine", "Dumbbells", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Shrug Machine", "Cable Pallof Press Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Speed Ladders", "Kettlebells", "Speed Resistors", "Agility Poles", "Speed Hurdles", "TRX Suspension Trainers", "CrossFit Equipment", "Compression Therapy", "Dance Fitness Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Audio/Visual Entertainment", "Fitness Tracking", "Fitness Consultations", "Towel Service", "Body Composition Analysis", "Locker Rentals", "Nutrition Counseling", "Fresh Fruit Bar", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
    id: "c8f2cc12-3fc5-4fd7-bbd5-85b7df48b6a7",
    vesselId: "ss-the--mariner",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(343) 303-1498",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Punching Bags", "Rowing Machines", "Stationary Bikes", "Cardio Resistance Bands", "Cardio Kettlebells", "Spin Bikes", "Cable Single Arm Lunge Machine", "Leg Press Machine", "Back Extension Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Shrug Machine", "Pull-up Station", "Bench Press", "Cable Single Arm Single Leg Deadlift Machine", "Leg Curl Machine", "Cable Single Arm Plank Machine", "Agility Ladders", "Stability Balls", "Agility Hurdles", "Speed Cords", "Kettlebells", "Agility Cones", "Speed Cones", "Slam Balls", "Yoga Wheels", "Cryotherapy Chambers"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Hair Dryers", "Water Stations", "Protein Shakes", "Fitness Tracking", "Smoothie Bar", "Fitness Consultations", "Toiletries", "Nutrition Counseling", "Fresh Fruit Bar", "Equipment Orientation", "Towel Service"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "b07b90a2-aaf3-49f7-b101-87576a9f287d",
    vesselId: "fv--gale",
    name: "FV  Gale Fitness Center",
    description: "Welcome to FV  Gale Fitness Center, your premier wellness destination aboard the FV  Gale. Stay active and healthy while cruising the waters near Vancouver with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(639) 235-2583",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "SkiErg", "Cardio Punching Bags", "Cardio Medicine Balls", "Boxing Equipment", "Cardio Kettlebells", "Spin Bikes", "Arc Trainers", "Stationary Bikes", "Cardio Resistance Bands", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Smith Machines", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Bench Press", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Lat Pulldown Machine", "Leg Extension Machine", "Abdominal Crunch Machine", "Speed Ladders", "Tire Flips", "Speed Cords", "Agility Markers", "Foam Rollers", "Slam Balls", "Stretching Stations", "HydroMassage Beds", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Water Stations", "Protein Shakes", "Fresh Fruit Bar", "Group Fitness Classes", "Hair Dryers", "Fitness Tracking", "Nutrition Counseling", "Fitness Consultations", "Body Composition Analysis", "Equipment Orientation", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
      }
    ],
    isPopular: true
  }
];
