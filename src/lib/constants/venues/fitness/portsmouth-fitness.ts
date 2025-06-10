// Fitness center venues data for Portsmouth
// This file contains fitness center and wellness facility information for cruise vessels operating from Portsmouth
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const portsmouthFitnessCenters: FitnessCenter[] = [
  {
    id: "0ef7b1cb-7054-4e44-b414-3a426e58d6fc",
    vesselId: "ts--explorer",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the TS  Explorer. Stay active and healthy while cruising the waters near Portsmouth with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(526) 800-9023",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Treadmills", "VersaClimber", "Spin Bikes", "Cardio Kickboxing Bags", "Arc Trainers", "Cardio Gliders", "Cardio Medicine Balls", "Cardio Kettlebells", "Cardio Punching Bags", "Seated Row Machine", "Bench Press", "Calf Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Smith Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Pallof Press Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Speed Ladders", "Yoga Mats", "Speed Bands", "Speed Hurdles", "Battle Ropes", "Speed Parachutes", "Tire Flips", "Infrared Therapy"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Nutrition Counseling", "Locker Rentals", "Towel Service", "Audio/Visual Entertainment", "Smoothie Bar", "Group Fitness Classes", "Fitness Tracking", "Equipment Orientation", "Protein Shakes", "Water Stations", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "92db35b5-b727-48fc-8645-a37359d083ed",
    vesselId: "my-portsmouth-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(143) 554-8760",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Treadmills", "Elliptical Machines", "Stationary Bikes", "Spin Bikes", "Jump Ropes", "StairMaster", "Cardio Punching Bags", "Cardio Kettlebells", "Agility Hurdles", "Calf Raise Machine", "Tricep Extension Machine", "Cable Russian Twist Machine", "Leg Press Machine", "Dumbbells", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Crossover Machine", "Speed Cords", "Battle Ropes", "Medicine Balls", "BOSU Balls", "Balance Boards", "Agility Markers", "Yoga Equipment"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Group Fitness Classes", "Fitness Consultations", "Body Composition Analysis", "Equipment Orientation", "Personal Training Sessions", "Hair Dryers", "Audio/Visual Entertainment", "Workout Programs", "Water Stations", "Protein Shakes", "Nutrition Counseling", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "ad918a1c-866d-494c-a8d2-9cecfd285555",
    vesselId: "ps--of-the-deep",
    name: "PS  of the Deep Fitness Center",
    description: "Discover wellness at sea with PS  of the Deep Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(605) 814-8495",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Spin Bikes", "Punching Bags", "Rowing Machines", "Cardio Punching Bags", "Agility Hurdles", "Battle Ropes", "Cardio Step Platforms", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Shoulder Press Machine", "Back Extension Machine", "Smith Machines", "Tricep Extension Machine", "Bench Press", "Cable Bicep Curl Machine", "Cable Russian Twist Machine", "Weight Machines", "Cable Single Arm Ab Crunch Machine", "Multi-Gym Systems", "Barbells", "Sandbags", "Agility Dots", "Medicine Balls", "Sledgehammers", "Balance Boards", "Spinning Bikes"],
    personalTrainers: ["Strength and Conditioning Coach", "Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Protein Shakes", "Personal Training Sessions", "Group Fitness Classes", "Locker Rentals", "Fitness Consultations", "Water Stations", "Smoothie Bar", "Audio/Visual Entertainment", "Workout Programs"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "065732ba-18f5-4647-8c93-d5d0275e1606",
    vesselId: "cs-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(762) 477-9348",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Recumbent Bikes", "Elliptical Machines", "Cardio Gliders", "Spin Bikes", "Arc Trainers", "Cable Single Arm Glute Kickback Machine", "Cable Squat Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Seated Row Machine", "Lat Pulldown", "Cable Single Arm Single Leg Face Pull Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Plank Machine", "Speed Cords", "Sledgehammers", "Stability Balls", "Agility Poles", "Kettlebells", "Pilates Reformers", "TRX Suspension Trainers", "Yoga Straps", "Cryotherapy Chambers"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Aqua Fitness Instructor", "Group Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Audio/Visual Entertainment", "Protein Shakes", "Hair Dryers", "Fitness Tracking", "Fresh Fruit Bar", "Water Stations", "Nutrition Counseling", "Fitness Consultations", "Toiletries", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "88e83913-ae56-47a0-aecd-de681cb3fdae",
    vesselId: "rv--gale",
    name: "RV  Gale Fitness Center",
    description: "Discover wellness at sea with RV  Gale Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(797) 861-3107",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Stationary Bikes", "Rowing Machines", "Cardio Gliders", "StairMaster", "Arc Trainers", "Jump Ropes", "Cable Single Arm Shoulder Press Machine", "Bench Press", "Cable Single Arm Chest Press Machine", "Barbells", "Cable Reverse Fly Machine", "Cable Upright Row Machine", "Free Weights", "Chest Fly Machine", "Bicep Curl Machine", "Plate Loaded Machines", "Cable Lunge Machine", "Speed Harnesses", "Kettlebells", "Agility Hurdles", "Sandbags", "Medicine Balls", "Agility Ladders", "Barre Equipment", "Float Tanks", "HydroMassage Beds"],
    personalTrainers: ["Certified Personal Trainer", "Yoga Instructor", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Toiletries", "Audio/Visual Entertainment", "Fitness Tracking", "Nutrition Counseling", "Equipment Orientation", "Body Composition Analysis", "Fresh Fruit Bar", "Personal Training Sessions", "Hair Dryers", "Protein Shakes", "Smoothie Bar", "Group Fitness Classes"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "04ad22e1-1245-4cdc-ae48-0ce681be8935",
    vesselId: "sy--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(299) 107-8467",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Elliptical Machines", "Recumbent Bikes", "Cardio Medicine Balls", "VersaClimber", "Air Bikes", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Shrug Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Shoulder Press Machine", "Slam Balls", "Speed Cords", "Resistance Bands", "Agility Hurdles", "Speed Harnesses", "Agility Cones", "Infrared Therapy", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Locker Rentals", "Hair Dryers", "Water Stations", "Equipment Orientation", "Toiletries", "Fitness Consultations", "Protein Shakes", "Workout Programs", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "13397473-25d2-496e-9f95-e4bc4f2905f2",
    vesselId: "nb-portsmouth-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Portsmouth. Our facility features dedicated yoga studio, sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(249) 500-8415",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Elliptical Machines", "Spin Bikes", "Punching Bags", "Jump Ropes", "Stationary Bikes", "Treadmills", "SkiErg", "Cardio Medicine Balls", "Multi-Gym Systems", "Cable Single Arm Single Leg Lunge Machine", "Plate Loaded Machines", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Calf Raise Machine", "BOSU Balls", "Battle Ropes", "Agility Ladders", "Speed Ladders", "Sandbags", "Speed Bands", "HydroMassage Beds"],
    personalTrainers: ["Group Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Nutrition Counseling", "Fresh Fruit Bar", "Body Composition Analysis", "Toiletries", "Protein Shakes", "Workout Programs", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
    id: "42770e83-4496-47b2-a2de-8049c900016c",
    vesselId: "sv--of-the-deep",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(789) 681-1147",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Jump Ropes", "Cardio Kickboxing Bags", "Agility Hurdles", "Cardio Gliders", "Weight Machines", "Cable Single Arm Row Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Woodchopper Machine", "Plate Loaded Machines", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Lunge Machine", "Leg Press Machine", "Cable Single Arm Single Leg Back Extension Machine", "Agility Cones", "Sledgehammers", "Kettlebells", "Speed Hurdles", "Speed Harnesses", "Speed Ladders", "Medicine Balls", "Pilates Reformers", "Kickboxing Equipment", "Infrared Sauna", "Infrared Therapy", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Strength and Conditioning Coach", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Workout Programs", "Fitness Consultations", "Body Composition Analysis", "Equipment Orientation", "Water Stations", "Toiletries", "Fitness Tracking"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "7a4b770f-c410-4582-87cd-e945d21f6c23",
    vesselId: "rv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Portsmouth. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(803) 276-6618",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Punching Bags", "Treadmills", "Cardio Resistance Bands", "Rowing Machines", "Air Bikes", "Stationary Bikes", "StairMaster", "Cardio Punching Bags", "Functional Trainers", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Face Pull Machine", "Cable Single Arm Squat Machine", "Power Rack", "Cable Single Arm Reverse Fly Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Yoga Mats", "Kettlebells", "Speed Cords", "Speed Ladders", "Balance Boards", "Speed Resistors", "Sledgehammers", "Pilates Reformers", "Aqua Fitness Equipment", "Stretching Stations", "Yoga Straps", "Float Tanks", "Yoga Wheels"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach", "Group Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Fitness Tracking", "Toiletries", "Water Stations", "Towel Service", "Group Fitness Classes", "Fitness Consultations", "Audio/Visual Entertainment", "Nutrition Counseling", "Smoothie Bar", "Workout Programs"],
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
    id: "86b8ba97-667b-40e4-87f9-7b7a01fbc497",
    vesselId: "ly--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(313) 360-2435",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Kickboxing Bags", "Treadmills", "Cardio Medicine Balls", "Air Bikes", "Recumbent Bikes", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Shrug Machine", "Free Weights", "Leg Extension Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Russian Twist Machine", "Battle Ropes", "Agility Markers", "Speed Cords", "Plyo Boxes", "Agility Cones", "Kettlebells", "Agility Dots", "Boxing Equipment", "TRX Suspension Trainers", "Infrared Sauna"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength Training Specialist", "Youth Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Fresh Fruit Bar", "Locker Rentals", "Workout Programs", "Towel Service", "Group Fitness Classes", "Body Composition Analysis", "Smoothie Bar", "Nutrition Counseling", "Equipment Orientation", "Hair Dryers", "Fitness Tracking", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    isPopular: true
  }
];
