// Fitness center venues data for San Francisco
// This file contains fitness center and wellness facility information for cruise vessels operating from San Francisco
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const sanFranciscoFitnessCenters: FitnessCenter[] = [
  {
    id: "8342c10a-55e4-4c7d-9cc4-ca61feeb2feb",
    vesselId: "my--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(213) 905-1158",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Recumbent Bikes", "Cardio Resistance Bands", "Air Bikes", "VersaClimber", "Jump Ropes", "StairMaster", "Cable Machines", "Back Extension Machine", "Cable Crossover Machine", "Calf Raise Machine", "Cable Deadlift Machine", "Leg Curl Machine", "Leg Press Machine", "Cable Upright Row Machine", "Speed Bands", "Agility Poles", "Balance Boards", "Tire Flips", "Stability Balls", "Resistance Bands", "Speed Cords", "BOSU Balls", "Massage Chairs", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Towel Service", "Hair Dryers", "Audio/Visual Entertainment", "Smoothie Bar", "Locker Rentals", "Toiletries", "Fitness Consultations", "Water Stations", "Group Fitness Classes", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "a618ac50-48ac-4d8c-856a-8767b33393f1",
    vesselId: "ts-san-francisco-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around San Francisco. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(845) 248-7441",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Battle Ropes", "Jump Ropes", "Cardio Punching Bags", "Recumbent Bikes", "Air Bikes", "Treadmills", "Cardio Step Platforms", "Elliptical Machines", "Cardio Kickboxing Bags", "Cable Single Arm Hip Thrust Machine", "Leg Curl Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Row Machine", "Cable Face Pull Machine", "Cable Russian Twist Machine", "Cable Single Arm Calf Raise Machine", "Smith Machine", "Cable Single Arm Lat Pulldown Machine", "Speed Ladders", "Weighted Vests", "BOSU Balls", "Speed Bands", "Slam Balls", "HydroMassage Beds", "Dance Fitness Equipment", "Functional Training Equipment"],
    personalTrainers: ["Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Hair Dryers", "Fresh Fruit Bar", "Group Fitness Classes", "Body Composition Analysis", "Fitness Tracking", "Locker Rentals", "Workout Programs", "Smoothie Bar", "Equipment Orientation", "Nutrition Counseling", "Audio/Visual Entertainment"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "a143ce02-587b-494e-908d-bb6c0836342c",
    vesselId: "rms--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(871) 981-1684",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Rowing Machines", "Cardio Kettlebells", "SkiErg", "Agility Hurdles", "Cardio Gliders", "Cable Row Machine", "Smith Machines", "Cable Single Arm Hip Thrust Machine", "Weight Machines", "Free Weights", "Cable Single Arm Back Extension Machine", "Seated Row Machine", "Cable Lunge Machine", "Cable Pallof Press Machine", "Leg Curl Machine", "Bicep Curl Machine", "Speed Sleds", "Weighted Vests", "Plyo Boxes", "Jump Boxes", "Kettlebells", "Sandbags", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Youth Fitness Specialist", "Pilates Instructor"],
    amenities: ["Group Fitness Classes", "Body Composition Analysis", "Fresh Fruit Bar", "Personal Training Sessions", "Equipment Orientation", "Audio/Visual Entertainment", "Toiletries", "Smoothie Bar", "Workout Programs", "Water Stations", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "3e7c56e0-709d-47eb-adbb-852fa014c6e2",
    vesselId: "mv-the--mariner",
    name: "San Francisco Fitness Center",
    description: "San Francisco Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around San Francisco. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(183) 167-6672",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "SkiErg", "Cardio Gliders", "Punching Bags", "Boxing Equipment", "Cardio Resistance Bands", "Cardio Kickboxing Bags", "Recumbent Bikes", "Cardio Step Platforms", "Cable Single Arm Single Leg Calf Raise Machine", "Power Rack", "Smith Machine", "Weight Machines", "Back Extension Machine", "Leg Curl Machine", "Functional Trainers", "Chest Fly Machine", "Tire Flips", "Agility Markers", "Speed Cords", "TRX Suspension Trainers", "Sandbags", "Sledgehammers", "Medicine Balls", "Speed Resistors"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Water Stations", "Fresh Fruit Bar", "Smoothie Bar", "Group Fitness Classes", "Towel Service", "Nutrition Counseling", "Body Composition Analysis", "Fitness Tracking", "Toiletries", "Equipment Orientation", "Personal Training Sessions"],
    is24Hours: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "1def23b9-ae2e-43c9-8fe2-1ec96c1ad19c",
    vesselId: "nb--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(119) 217-6104",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Spin Bikes", "Battle Ropes", "VersaClimber", "Cardio Kickboxing Bags", "Cardio Punching Bags", "Functional Trainers", "Cable Tricep Pushdown Machine", "Cable Single Arm Tricep Extension Machine", "Power Rack", "Seated Row Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Speed Resistors", "Medicine Balls", "BOSU Balls", "Kettlebells", "Agility Dots", "Jump Boxes", "Dance Fitness Equipment", "Yoga Wheels", "Yoga Equipment", "Stretching Stations"],
    personalTrainers: ["Strength and Conditioning Coach", "Certified Personal Trainer", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Locker Rentals", "Toiletries", "Fitness Tracking", "Nutrition Counseling", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Group Fitness Classes", "Water Stations", "Equipment Orientation", "Personal Training Sessions", "Towel Service", "Hair Dryers", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "e87f2b76-e9a4-4321-982d-880a276bcd7c",
    vesselId: "ps--explorer",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the PS  Explorer. Stay active and healthy while cruising the waters near San Francisco with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(789) 240-6556",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Recumbent Bikes", "Cardio Resistance Bands", "Cardio Kettlebells", "Arc Trainers", "Cardio Punching Bags", "Cable Single Arm Upright Row Machine", "Barbells", "Cable Crossover Machine", "Chest Press Machine", "Cable Single Arm Reverse Fly Machine", "Cable Glute Kickback Machine", "Bench Press", "Bicep Curl Machine", "Balance Boards", "Stability Balls", "Jump Boxes", "Resistance Bands", "Speed Resistors", "Speed Ladders", "BOSU Balls", "Recovery Tools", "HydroMassage Beds", "Yoga Wheels"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Locker Rentals", "Fresh Fruit Bar", "Water Stations", "Fitness Consultations", "Protein Shakes", "Toiletries", "Audio/Visual Entertainment", "Hair Dryers", "Equipment Orientation"],
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
    id: "9855e4ff-d359-4631-abb8-935985041f4f",
    vesselId: "sy-san-francisco-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around San Francisco. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(406) 515-7495",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Battle Ropes", "VersaClimber", "Spin Bikes", "Boxing Equipment", "Treadmills", "Punching Bags", "Jump Ropes", "Agility Hurdles", "Lat Pulldown", "Cable Single Arm Glute Kickback Machine", "Leg Curl Machine", "Smith Machine", "Chest Press Machine", "Cable Bicep Curl Machine", "Cable Upright Row Machine", "Calf Raise Machine", "Shoulder Press Machine", "Cable Woodchopper Machine", "Seated Row Machine", "Agility Cones", "Medicine Balls", "Weighted Vests", "Agility Ladders", "Sledgehammers", "Foam Rollers", "Stability Balls", "Yoga Bolsters", "TRX Suspension Trainers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Fitness Consultations", "Locker Rentals", "Audio/Visual Entertainment", "Smoothie Bar", "Nutrition Counseling", "Hair Dryers", "Fitness Tracking", "Water Stations", "Fresh Fruit Bar", "Equipment Orientation", "Workout Programs"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "58a433de-9eab-4a0f-b05c-8d4ec7f37ad2",
    vesselId: "ms--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around San Francisco. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(385) 527-7603",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "Elliptical Machines", "Cardio Step Platforms", "Arc Trainers", "Cardio Kettlebells", "Stationary Bikes", "SkiErg", "Treadmills", "Cable Single Arm Single Leg Plank Machine", "Cable Upright Row Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Hip Thrust Machine", "Barbells", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Bicep Curl Machine", "Agility Markers", "Battle Ropes", "Sledgehammers", "Yoga Mats", "Kettlebells", "Medicine Balls", "Yoga Wheels", "Kickboxing Equipment", "Recovery Tools", "Infrared Therapy"],
    personalTrainers: ["Pilates Instructor", "Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Workout Programs", "Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Smoothie Bar", "Hair Dryers", "Nutrition Counseling", "Fresh Fruit Bar", "Locker Rentals"],
    is24Hours: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
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
      }
    ],
    isPopular: true
  },
  {
    id: "96c50ffa-47dc-4a47-bd86-99041fd72dca",
    vesselId: "sv-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(945) 364-5605",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Elliptical Machines", "Cardio Kickboxing Bags", "Cardio Step Platforms", "Punching Bags", "Air Bikes", "Cardio Kettlebells", "Cable Ab Crunch Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Lunge Machine", "Seated Row Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Glute Kickback Machine", "Bench Press", "Agility Cones", "Speed Hurdles", "Agility Poles", "Slam Balls", "Stability Balls", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Fitness Tracking", "Smoothie Bar", "Toiletries", "Workout Programs", "Protein Shakes", "Locker Rentals", "Water Stations", "Towel Service", "Equipment Orientation", "Fitness Consultations", "Audio/Visual Entertainment", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "202f6e20-ffb3-44f5-bc75-aebcb52097be",
    vesselId: "fv--gale",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(728) 457-4330",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Agility Hurdles", "Recumbent Bikes", "Cardio Punching Bags", "VersaClimber", "Cardio Kettlebells", "Cardio Resistance Bands", "Stationary Bikes", "Cable Single Arm Single Leg Reverse Fly Machine", "Smith Machine", "Abdominal Crunch Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Deadlift Machine", "Foam Rollers", "Jump Boxes", "Agility Ladders", "Kettlebells", "Speed Hurdles", "Medicine Balls", "Yoga Equipment", "Functional Training Equipment", "Yoga Blocks"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer", "Corrective Exercise Specialist", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Hair Dryers", "Locker Rentals", "Towel Service", "Fitness Tracking", "Personal Training Sessions", "Nutrition Counseling", "Audio/Visual Entertainment", "Fitness Consultations", "Water Stations"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  }
];
