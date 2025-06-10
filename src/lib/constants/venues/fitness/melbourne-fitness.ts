// Fitness center venues data for Melbourne
// This file contains fitness center and wellness facility information for cruise vessels operating from Melbourne
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const melbourneFitnessCenters: FitnessCenter[] = [
  {
    id: "084a7ace-2f37-4202-91fe-e1917202ed0d",
    vesselId: "ps--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Melbourne. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(444) 228-2312",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Battle Ropes", "Treadmills", "Cardio Kettlebells", "VersaClimber", "Cardio Kickboxing Bags", "Rowing Machines", "Punching Bags", "Spin Bikes", "Cable Shrug Machine", "Leg Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Calf Raise Machine", "Cable Single Arm Pallof Press Machine", "Functional Trainers", "Bench Press", "Weight Machines", "Kettlebells", "Foam Rollers", "Agility Markers", "Agility Ladders", "Speed Cords", "Agility Cones", "Recovery Tools"],
    personalTrainers: ["Group Fitness Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer", "Yoga Instructor"],
    amenities: ["Nutrition Counseling", "Fresh Fruit Bar", "Group Fitness Classes", "Protein Shakes", "Personal Training Sessions", "Fitness Consultations", "Fitness Tracking", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "1fe7931c-e04a-4a31-b720-cfb0528e6440",
    vesselId: "ps-melbourne-voyager",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the PS Melbourne Voyager. Stay active and healthy while cruising the waters near Melbourne with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(860) 827-9728",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Punching Bags", "Recumbent Bikes", "Rowing Machines", "Cardio Gliders", "Cardio Step Platforms", "Stationary Bikes", "Battle Ropes", "Cable Single Arm Tricep Extension Machine", "Seated Row Machine", "Cable Single Arm Chest Press Machine", "Leg Press Machine", "Smith Machine", "Bicep Curl Machine", "Calf Raise Machine", "Plate Loaded Machines", "Back Extension Machine", "Bench Press", "Balance Boards", "Speed Hurdles", "Agility Hurdles", "Speed Cords", "Sledgehammers", "Agility Markers", "Slam Balls", "Yoga Bolsters"],
    personalTrainers: ["Spinning Instructor", "Yoga Instructor", "Youth Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Water Stations", "Group Fitness Classes", "Locker Rentals", "Towel Service", "Toiletries", "Fresh Fruit Bar", "Fitness Tracking", "Body Composition Analysis", "Fitness Consultations", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "74846a7d-a86e-4e08-a56f-b9cd34f733d0",
    vesselId: "rms--of-the-deep",
    name: "RMS  of the Deep Fitness Center",
    description: "RMS  of the Deep Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(972) 964-1876",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Spin Bikes", "Agility Hurdles", "Punching Bags", "Boxing Equipment", "Treadmills", "Elliptical Machines", "Rowing Machines", "Cardio Step Platforms", "Cable Machines", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Shrug Machine", "Weight Machines", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Shoulder Press Machine", "Cable Lunge Machine", "Cable Upright Row Machine", "Balance Boards", "Battle Ropes", "Speed Harnesses", "Speed Resistors", "Agility Ladders", "Plyo Boxes", "Jump Boxes", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Pilates Instructor", "Yoga Instructor"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Toiletries", "Locker Rentals", "Fresh Fruit Bar", "Water Stations", "Fitness Consultations", "Nutrition Counseling", "Body Composition Analysis"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
      }
    ],
    isPopular: true
  },
  {
    id: "6df077ab-ac9b-4c25-8b3a-ae7661538765",
    vesselId: "rv-the--mariner",
    name: "Melbourne Fitness Center",
    description: "Melbourne Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Melbourne. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(719) 998-8950",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Rowing Machines", "Cardio Punching Bags", "Arc Trainers", "Treadmills", "VersaClimber", "Agility Hurdles", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Speed Resistors", "Speed Parachutes", "Agility Poles", "Plyo Boxes", "Speed Sleds", "Yoga Mats", "Stability Balls", "Yoga Bolsters", "Compression Therapy", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Strength Training Specialist"],
    amenities: ["Hair Dryers", "Group Fitness Classes", "Toiletries", "Nutrition Counseling", "Water Stations", "Body Composition Analysis", "Fresh Fruit Bar", "Protein Shakes", "Fitness Tracking"],
    is24Hours: false,
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
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "9598c9d2-c15e-492e-81fd-a5ac7399a6a4",
    vesselId: "mv--gale",
    name: "MV  Gale Fitness Center",
    description: "MV  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Melbourne. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(761) 541-4300",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Boxing Equipment", "Jump Ropes", "Elliptical Machines", "Battle Ropes", "Cardio Punching Bags", "Arc Trainers", "Treadmills", "Barbells", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Face Pull Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Tricep Pushdown Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Kettlebells", "Medicine Balls", "TRX Suspension Trainers", "Resistance Bands", "Speed Hurdles", "Speed Ladders", "Yoga Mats", "Pilates Reformers", "Functional Training Equipment", "Yoga Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Corrective Exercise Specialist", "Strength and Conditioning Coach"],
    amenities: ["Audio/Visual Entertainment", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Group Fitness Classes", "Locker Rentals", "Body Composition Analysis", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "7b017779-95db-4ef3-810f-5242d499749f",
    vesselId: "rms--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(718) 714-4136",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Elliptical Machines", "Battle Ropes", "Cardio Punching Bags", "Spin Bikes", "Punching Bags", "Agility Hurdles", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Ab Crunch Machine", "Weight Machines", "Functional Trainers", "Cable Bicep Curl Machine", "Kettlebells", "Speed Harnesses", "Sandbags", "Balance Boards", "Speed Sleds", "Agility Ladders", "Speed Cords", "Medicine Balls", "Massage Chairs", "Aqua Fitness Equipment"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Water Stations", "Equipment Orientation", "Fitness Tracking", "Audio/Visual Entertainment", "Locker Rentals", "Protein Shakes", "Fresh Fruit Bar", "Towel Service", "Fitness Consultations"],
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
    id: "73fd00f1-06f8-41f8-bfad-ee32454d7c2e",
    vesselId: "ts-melbourne-voyager",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(127) 558-8959",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Cardio Kickboxing Bags", "Punching Bags", "Cardio Kettlebells", "Elliptical Machines", "Arc Trainers", "Treadmills", "Stationary Bikes", "Cable Single Arm Single Leg Shrug Machine", "Cable Back Extension Machine", "Cable Single Arm Woodchopper Machine", "Cable Machines", "Cable Single Arm Chest Press Machine", "Free Weights", "Cable Plank Machine", "Cable Single Arm Single Leg Lunge Machine", "Agility Markers", "Agility Dots", "Foam Rollers", "TRX Suspension Trainers", "Speed Ladders", "Tire Flips", "Speed Cords", "Yoga Blocks", "Boxing Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Fitness Nutrition Specialist", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Locker Rentals", "Smoothie Bar", "Water Stations", "Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions", "Protein Shakes", "Fitness Consultations", "Hair Dryers", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "924ecabc-5ccb-49e1-82b2-91763b123946",
    vesselId: "rv--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(489) 330-2134",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "StairMaster", "VersaClimber", "Boxing Equipment", "Cardio Punching Bags", "Cardio Resistance Bands", "Cardio Medicine Balls", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Leg Press Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Glute Kickback Machine", "Bicep Curl Machine", "Cable Single Arm Reverse Fly Machine", "Smith Machine", "Kettlebells", "Yoga Mats", "Agility Cones", "Weighted Vests", "Stability Balls", "Jump Boxes", "Tire Flips", "Pilates Reformers", "Kickboxing Equipment", "Cryotherapy Chambers"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Spinning Instructor", "Strength Training Specialist"],
    amenities: ["Towel Service", "Body Composition Analysis", "Fresh Fruit Bar", "Fitness Consultations", "Water Stations", "Hair Dryers", "Workout Programs", "Group Fitness Classes", "Toiletries", "Nutrition Counseling", "Protein Shakes", "Personal Training Sessions"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    isPopular: true
  },
  {
    id: "7da605c4-da0f-4908-a677-9d0df95cd634",
    vesselId: "cs-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Melbourne. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(635) 416-4560",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Cardio Punching Bags", "Punching Bags", "Agility Hurdles", "Elliptical Machines", "Pull-up Station", "Cable Single Arm Single Leg Bicep Curl Machine", "Weight Machines", "Leg Curl Machine", "Cable Hip Thrust Machine", "Cable Face Pull Machine", "Lat Pulldown", "Cable Single Arm Upright Row Machine", "Leg Press Machine", "Smith Machine", "Cable Lateral Raise Machine", "Speed Cords", "Speed Sleds", "Kettlebells", "Speed Bands", "Speed Ladders", "Balance Boards", "Jump Boxes", "Recovery Tools", "Boxing Equipment", "Functional Training Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor", "Strength Training Specialist"],
    amenities: ["Locker Rentals", "Equipment Orientation", "Nutrition Counseling", "Hair Dryers", "Fresh Fruit Bar", "Workout Programs", "Protein Shakes", "Body Composition Analysis", "Group Fitness Classes", "Fitness Consultations", "Audio/Visual Entertainment"],
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
    isPopular: false
  },
  {
    id: "dd0f6074-3742-4b07-a4a0-ea1bc0c27df5",
    vesselId: "cs--gale",
    name: "CS  Gale Fitness Center",
    description: "CS  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Melbourne. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(989) 610-3613",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Treadmills", "Recumbent Bikes", "Boxing Equipment", "Arc Trainers", "Cardio Step Platforms", "Cardio Resistance Bands", "Cardio Kickboxing Bags", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Bicep Curl Machine", "Cable Tricep Pushdown Machine", "Cable Lunge Machine", "Leg Curl Machine", "Cable Shrug Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Leg Press Machine", "Lat Pulldown", "Stability Balls", "Jump Boxes", "Agility Dots", "Plyo Boxes", "Resistance Bands", "Agility Hurdles", "TRX Suspension Trainers", "Battle Ropes", "Yoga Straps"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Personal Training Sessions", "Hair Dryers", "Fitness Consultations", "Water Stations", "Group Fitness Classes", "Towel Service", "Protein Shakes", "Toiletries", "Locker Rentals", "Audio/Visual Entertainment", "Fitness Tracking"],
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  }
];
