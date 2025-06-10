// Fitness center venues data for Nice
// This file contains fitness center and wellness facility information for cruise vessels operating from Nice
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const niceFitnessCenters: FitnessCenter[] = [
  {
    id: "60669a20-8d2b-45ba-bcb9-5661e9acea79",
    vesselId: "fv--explorer",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(752) 443-1457",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "VersaClimber", "Cardio Punching Bags", "StairMaster", "Recumbent Bikes", "Jump Ropes", "Punching Bags", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Pallof Press Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Back Extension Machine", "Cable Hip Thrust Machine", "Cable Machines", "Cable Glute Kickback Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Tricep Pushdown Machine", "Agility Cones", "Agility Dots", "Balance Boards", "Speed Ladders", "Plyo Boxes", "Spinning Bikes"],
    personalTrainers: ["Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Hair Dryers", "Protein Shakes", "Fitness Consultations", "Fresh Fruit Bar", "Water Stations", "Body Composition Analysis", "Towel Service", "Personal Training Sessions", "Toiletries", "Audio/Visual Entertainment", "Smoothie Bar"],
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
    hasChildcareServices: true,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    isPopular: false
  },
  {
    id: "fb790220-7856-46de-87d8-c72771f802ae",
    vesselId: "rv-nice-voyager",
    name: "Nice Fitness Center",
    description: "Discover wellness at sea with Nice Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(917) 772-9590",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "VersaClimber", "Air Bikes", "Cardio Gliders", "Arc Trainers", "Rowing Machines", "Cardio Kettlebells", "Spin Bikes", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Leg Press Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Dumbbells", "Calf Raise Machine", "Speed Parachutes", "Agility Hurdles", "Agility Dots", "Sledgehammers", "Speed Sleds", "Yoga Mats", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Group Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Body Composition Analysis", "Equipment Orientation", "Toiletries", "Fitness Consultations", "Personal Training Sessions", "Towel Service", "Audio/Visual Entertainment", "Group Fitness Classes", "Smoothie Bar", "Water Stations", "Fresh Fruit Bar"],
    is24Hours: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "7a535aad-648e-486a-9366-27c803c3bc67",
    vesselId: "cs--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the CS  of the Deep. Stay active and healthy while cruising the waters near Nice with our state-of-the-art fitness facilities. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(637) 861-3522",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Treadmills", "Spin Bikes", "StairMaster", "Arc Trainers", "Battle Ropes", "Rowing Machines", "Agility Hurdles", "Boxing Equipment", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Hip Thrust Machine", "Barbells", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Tricep Extension Machine", "Speed Bands", "Agility Ladders", "Agility Poles", "Sledgehammers", "Sandbags", "BOSU Balls", "Barre Equipment", "Pilates Reformers"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Toiletries", "Towel Service", "Equipment Orientation", "Water Stations", "Personal Training Sessions", "Smoothie Bar", "Audio/Visual Entertainment", "Body Composition Analysis"],
    is24Hours: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "2e81e33a-57ef-4eb8-9678-b3a629b42e98",
    vesselId: "hms-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Nice. Our facility features pool area, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(652) 204-9795",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Cardio Medicine Balls", "Cardio Step Platforms", "Agility Hurdles", "VersaClimber", "Cardio Resistance Bands", "Punching Bags", "Cable Single Arm Bicep Curl Machine", "Free Weights", "Dumbbells", "Cable Single Arm Single Leg Hip Thrust Machine", "Tricep Extension Machine", "Functional Trainers", "Bicep Curl Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Russian Twist Machine", "Bench Press", "Leg Press Machine", "Speed Hurdles", "Sandbags", "Agility Markers", "Balance Boards", "Infrared Sauna", "Yoga Equipment", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Hair Dryers", "Body Composition Analysis", "Audio/Visual Entertainment", "Nutrition Counseling", "Water Stations", "Towel Service", "Equipment Orientation", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "8e13a54f-3236-4787-a995-b4f7c07f387e",
    vesselId: "ts--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(196) 838-2954",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Cardio Medicine Balls", "Treadmills", "Spin Bikes", "Elliptical Machines", "Air Bikes", "Power Rack", "Cable Single Arm Woodchopper Machine", "Plate Loaded Machines", "Cable Calf Raise Machine", "Cable Glute Kickback Machine", "Weight Machines", "Cable Crossover Machine", "Seated Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Plank Machine", "Back Extension Machine", "Speed Parachutes", "Yoga Mats", "Stability Balls", "Speed Ladders", "Speed Harnesses", "Speed Bands", "Slam Balls", "Battle Ropes", "Spinning Bikes", "Float Tanks"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Nutrition Counseling", "Toiletries", "Personal Training Sessions", "Protein Shakes", "Hair Dryers", "Water Stations", "Fitness Tracking", "Fitness Consultations", "Audio/Visual Entertainment"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    isPopular: true
  },
  {
    id: "12eefb0c-1fc0-4edf-9d34-2304caa0d7c1",
    vesselId: "rv--explorer",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the RV  Explorer. Stay active and healthy while cruising the waters near Nice with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(760) 809-6959",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Battle Ropes", "Cardio Medicine Balls", "StairMaster", "Cardio Kickboxing Bags", "Punching Bags", "Jump Ropes", "Cardio Step Platforms", "Free Weights", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Glute Kickback Machine", "Smith Machine", "Leg Extension Machine", "Cable Plank Machine", "Leg Press Machine", "Cable Single Arm Ab Crunch Machine", "Cable Machines", "Speed Cones", "Resistance Bands", "Agility Ladders", "BOSU Balls", "Sandbags", "TRX Suspension Trainers", "Barre Equipment"],
    personalTrainers: ["Spinning Instructor", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Equipment Orientation", "Personal Training Sessions", "Group Fitness Classes", "Smoothie Bar", "Fitness Tracking", "Workout Programs", "Body Composition Analysis", "Water Stations", "Nutrition Counseling", "Toiletries", "Hair Dryers"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "1ef854a3-6259-4f1b-8e22-cbbd6c829519",
    vesselId: "ps-nice-voyager",
    name: "Nice Fitness Center",
    description: "Nice Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(124) 202-4055",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "StairMaster", "SkiErg", "Arc Trainers", "Battle Ropes", "Rowing Machines", "Cable Single Arm Single Leg Deadlift Machine", "Cable Squat Machine", "Cable Pallof Press Machine", "Barbells", "Cable Single Arm Shrug Machine", "Dumbbells", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Calf Raise Machine", "Functional Trainers", "Medicine Balls", "Plyo Boxes", "Speed Resistors", "Jump Boxes", "Speed Bands", "Slam Balls", "Weighted Vests", "Speed Hurdles", "Boxing Equipment", "Compression Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Nutrition Counseling", "Towel Service", "Fitness Consultations", "Water Stations", "Body Composition Analysis", "Equipment Orientation", "Protein Shakes", "Fitness Tracking", "Workout Programs", "Audio/Visual Entertainment", "Personal Training Sessions", "Locker Rentals"],
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
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "711b267c-9db0-410a-9ea6-49baf694e8b6",
    vesselId: "ms--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(814) 372-7763",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Agility Hurdles", "Recumbent Bikes", "Cardio Punching Bags", "Elliptical Machines", "Treadmills", "Arc Trainers", "Air Bikes", "Boxing Equipment", "Cable Deadlift Machine", "Cable Single Arm Single Leg Squat Machine", "Plate Loaded Machines", "Pull-up Station", "Cable Lunge Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Hip Thrust Machine", "Speed Resistors", "Speed Harnesses", "Stability Balls", "Agility Ladders", "Foam Rollers", "Sledgehammers", "Massage Chairs", "Float Tanks"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Strength and Conditioning Coach"],
    amenities: ["Locker Rentals", "Water Stations", "Workout Programs", "Fitness Tracking", "Group Fitness Classes", "Audio/Visual Entertainment", "Equipment Orientation", "Fitness Consultations", "Towel Service", "Hair Dryers"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "49bab17e-fc89-4d2c-ba97-491ed8355762",
    vesselId: "ts-the--mariner",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the TS The  Mariner. Stay active and healthy while cruising the waters near Nice with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(487) 614-5038",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Punching Bags", "Cardio Gliders", "SkiErg", "Spin Bikes", "Cardio Kettlebells", "Cable Single Arm Squat Machine", "Cable Single Arm Calf Raise Machine", "Cable Tricep Pushdown Machine", "Cable Face Pull Machine", "Free Weights", "Dumbbells", "Back Extension Machine", "Tricep Extension Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Hip Thrust Machine", "Speed Parachutes", "Foam Rollers", "Stability Balls", "Kettlebells", "Tire Flips", "Speed Cones", "Medicine Balls", "Speed Hurdles", "Spinning Bikes", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Smoothie Bar", "Audio/Visual Entertainment", "Fitness Tracking", "Water Stations", "Fitness Consultations", "Hair Dryers", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "7e825bbc-f629-4dd1-bdf7-1281649bc2e6",
    vesselId: "ss--gale",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(169) 147-9656",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Agility Hurdles", "Recumbent Bikes", "Cardio Medicine Balls", "Air Bikes", "VersaClimber", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Upright Row Machine", "Calf Raise Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Smith Machines", "Shoulder Press Machine", "Cable Single Arm Hip Thrust Machine", "Chest Press Machine", "Foam Rollers", "Kettlebells", "Yoga Mats", "Tire Flips", "Agility Markers", "Barre Equipment"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor"],
    amenities: ["Nutrition Counseling", "Hair Dryers", "Group Fitness Classes", "Workout Programs", "Body Composition Analysis", "Towel Service", "Locker Rentals", "Toiletries", "Water Stations", "Fitness Consultations", "Protein Shakes", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
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
