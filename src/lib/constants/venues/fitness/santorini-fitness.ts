// Fitness center venues data for Santorini
// This file contains fitness center and wellness facility information for cruise vessels operating from Santorini
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const santoriniFitnessCenters: FitnessCenter[] = [
  {
    id: "10c13cd7-bf85-42c7-9e09-f392d81bd6a5",
    vesselId: "ly--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(415) 747-2572",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Rowing Machines", "StairMaster", "Cardio Medicine Balls", "Cardio Kettlebells", "Cardio Punching Bags", "Stationary Bikes", "Power Rack", "Cable Single Arm Reverse Fly Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Free Weights", "Leg Press Machine", "Cable Glute Kickback Machine", "Smith Machine", "Speed Parachutes", "Speed Resistors", "BOSU Balls", "Speed Cones", "Medicine Balls", "Yoga Equipment", "Spinning Bikes", "Kickboxing Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Group Fitness Classes", "Water Stations", "Toiletries", "Towel Service", "Fitness Tracking", "Fitness Consultations", "Nutrition Counseling", "Smoothie Bar", "Hair Dryers", "Fresh Fruit Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
    id: "9580b6e4-47c6-4c46-952e-8d9c2a2d3f5d",
    vesselId: "nx-santorini-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(624) 858-5196",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Spin Bikes", "Cardio Medicine Balls", "Battle Ropes", "VersaClimber", "Cardio Gliders", "Cable Single Arm Face Pull Machine", "Chest Press Machine", "Leg Extension Machine", "Cable Pallof Press Machine", "Cable Hip Thrust Machine", "Cable Plank Machine", "Free Weights", "Power Rack", "Weight Machines", "Cable Single Arm Row Machine", "Speed Resistors", "Plyo Boxes", "Tire Flips", "Agility Markers", "Agility Poles", "Yoga Mats", "Foam Rollers", "Stretching Stations", "Spinning Bikes", "Yoga Equipment", "TRX Suspension Trainers", "Functional Training Equipment", "Barre Equipment"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist", "Strength and Conditioning Coach", "Strength Training Specialist"],
    amenities: ["Fitness Tracking", "Water Stations", "Audio/Visual Entertainment", "Hair Dryers", "Towel Service", "Workout Programs", "Toiletries", "Protein Shakes", "Fitness Consultations", "Smoothie Bar", "Personal Training Sessions", "Body Composition Analysis", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
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
    id: "274b84c2-4be1-4b16-af75-184d58aeb5fc",
    vesselId: "nb--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Santorini. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(601) 667-1261",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Medicine Balls", "Treadmills", "Stationary Bikes", "Boxing Equipment", "Elliptical Machines", "Cardio Kettlebells", "Cable Single Arm Plank Machine", "Shoulder Press Machine", "Dumbbells", "Cable Face Pull Machine", "Cable Lateral Raise Machine", "Cable Crossover Machine", "Weight Machines", "Cable Single Arm Chest Press Machine", "Leg Extension Machine", "Cable Single Arm Ab Crunch Machine", "Kettlebells", "BOSU Balls", "Agility Dots", "Speed Sleds", "Speed Bands", "Yoga Wheels", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Workout Programs", "Towel Service", "Audio/Visual Entertainment", "Water Stations", "Smoothie Bar", "Body Composition Analysis", "Fitness Consultations", "Locker Rentals", "Equipment Orientation", "Hair Dryers", "Protein Shakes", "Personal Training Sessions"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "a5bce268-55e0-47d6-974d-16426730b0f5",
    vesselId: "mv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MV The  Mariner. Stay active and healthy while cruising the waters near Santorini with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(433) 644-6700",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Boxing Equipment", "Cardio Medicine Balls", "Battle Ropes", "SkiErg", "Cardio Gliders", "Spin Bikes", "Recumbent Bikes", "Elliptical Machines", "Air Bikes", "Cable Single Arm Single Leg Russian Twist Machine", "Weight Machines", "Cable Calf Raise Machine", "Leg Press Machine", "Smith Machines", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Deadlift Machine", "Plate Loaded Machines", "Speed Bands", "Agility Ladders", "Speed Cords", "Agility Cones", "Tire Flips", "Yoga Equipment", "HydroMassage Beds", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Group Fitness Instructor", "Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Body Composition Analysis", "Group Fitness Classes", "Water Stations", "Fitness Tracking", "Fitness Consultations", "Towel Service", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "247ff240-289b-4d1a-917c-87cdd75f0ecd",
    vesselId: "ss--gale",
    name: "Santorini Fitness Center",
    description: "Welcome to Santorini Fitness Center, your premier wellness destination aboard the SS  Gale. Stay active and healthy while cruising the waters near Santorini with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(479) 548-5293",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Punching Bags", "Cardio Punching Bags", "Elliptical Machines", "Cardio Resistance Bands", "Rowing Machines", "Weight Machines", "Cable Face Pull Machine", "Leg Press Machine", "Cable Single Arm Ab Crunch Machine", "Pull-up Station", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Multi-Gym Systems", "Weighted Vests", "Battle Ropes", "Speed Cones", "Speed Ladders", "Balance Boards", "Speed Hurdles", "Plyo Boxes", "CrossFit Equipment", "Yoga Wheels"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Hair Dryers", "Workout Programs", "Group Fitness Classes", "Equipment Orientation", "Fitness Consultations", "Personal Training Sessions", "Protein Shakes", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
    id: "2d68a8d0-22c4-449c-be96-e3a87a112611",
    vesselId: "fv--explorer",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(979) 954-3951",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Rowing Machines", "Stationary Bikes", "Agility Hurdles", "StairMaster", "Cardio Kettlebells", "Cardio Step Platforms", "VersaClimber", "Cable Machines", "Functional Trainers", "Cable Pallof Press Machine", "Smith Machine", "Back Extension Machine", "Leg Press Machine", "Cable Single Arm Shoulder Press Machine", "Bench Press", "Cable Calf Raise Machine", "Slam Balls", "Battle Ropes", "Agility Ladders", "Kettlebells", "BOSU Balls", "Agility Poles", "Yoga Straps", "Massage Chairs"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Nutrition Counseling", "Fitness Tracking", "Equipment Orientation", "Hair Dryers", "Workout Programs", "Protein Shakes", "Toiletries", "Group Fitness Classes", "Water Stations", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "c5b839af-c1e5-4758-9d82-97b92371a8b8",
    vesselId: "ms-santorini-voyager",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(578) 659-6761",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "Cardio Punching Bags", "Punching Bags", "Spin Bikes", "Cardio Medicine Balls", "Cable Single Arm Ab Crunch Machine", "Seated Row Machine", "Lat Pulldown", "Barbells", "Cable Single Arm Shoulder Press Machine", "Smith Machine", "Cable Woodchopper Machine", "Cable Single Arm Chest Press Machine", "Abdominal Crunch Machine", "Cable Single Arm Back Extension Machine", "Cable Ab Crunch Machine", "Resistance Bands", "Plyo Boxes", "Speed Resistors", "Kettlebells", "Yoga Mats", "Agility Ladders", "Speed Sleds", "Recovery Tools"],
    personalTrainers: ["Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Workout Programs", "Personal Training Sessions", "Nutrition Counseling", "Group Fitness Classes", "Fitness Tracking", "Audio/Visual Entertainment", "Smoothie Bar", "Toiletries", "Body Composition Analysis", "Fresh Fruit Bar"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "0ad3cbdb-a55f-48a8-ba4d-60366b3e94aa",
    vesselId: "ts--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the TS  of the Deep. Stay active and healthy while cruising the waters near Santorini with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(960) 948-4285",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "StairMaster", "Treadmills", "Recumbent Bikes", "Air Bikes", "VersaClimber", "Punching Bags", "Cardio Gliders", "Battle Ropes", "Rowing Machines", "Cable Face Pull Machine", "Cable Single Arm Chest Press Machine", "Smith Machines", "Cable Machines", "Shoulder Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Lateral Raise Machine", "Back Extension Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Calf Raise Machine", "Kettlebells", "Balance Boards", "BOSU Balls", "Resistance Bands", "Pilates Reformers", "Yoga Straps"],
    personalTrainers: ["Aqua Fitness Instructor", "Group Fitness Instructor", "Pilates Instructor", "Strength Training Specialist"],
    amenities: ["Hair Dryers", "Protein Shakes", "Workout Programs", "Audio/Visual Entertainment", "Group Fitness Classes", "Nutrition Counseling", "Smoothie Bar", "Toiletries", "Fitness Tracking", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "a4c8c2a8-5700-429b-8ae9-d873b58157da",
    vesselId: "cs-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(343) 542-6516",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Spin Bikes", "Cardio Gliders", "StairMaster", "Battle Ropes", "Treadmills", "SkiErg", "Agility Hurdles", "Arc Trainers", "Recumbent Bikes", "Free Weights", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Weight Machines", "Pull-up Station", "Cable Lateral Raise Machine", "Leg Press Machine", "Cable Face Pull Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Leg Extension Machine", "Kettlebells", "Sandbags", "Agility Ladders", "Yoga Mats", "Balance Boards", "Barre Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Corrective Exercise Specialist", "Senior Fitness Specialist"],
    amenities: ["Equipment Orientation", "Workout Programs", "Locker Rentals", "Body Composition Analysis", "Fitness Tracking", "Hair Dryers", "Fitness Consultations", "Group Fitness Classes", "Personal Training Sessions", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "5bcbab8c-1e96-4486-9560-4423e3371f48",
    vesselId: "ly--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Santorini. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(959) 858-4896",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Cardio Gliders", "Cardio Resistance Bands", "Elliptical Machines", "Boxing Equipment", "Cable Single Arm Reverse Fly Machine", "Cable Deadlift Machine", "Cable Machines", "Weight Machines", "Back Extension Machine", "Cable Face Pull Machine", "Leg Curl Machine", "Chest Press Machine", "Cable Tricep Pushdown Machine", "Power Rack", "Weighted Vests", "Agility Ladders", "Speed Hurdles", "Foam Rollers", "Jump Boxes", "Barre Equipment", "Compression Therapy"],
    personalTrainers: ["Spinning Instructor", "Group Fitness Instructor", "Corrective Exercise Specialist", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Group Fitness Classes", "Smoothie Bar", "Toiletries", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Body Composition Analysis", "Equipment Orientation", "Towel Service", "Locker Rentals", "Fitness Consultations", "Protein Shakes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  }
];
