// Fitness center venues data for Cartagena
// This file contains fitness center and wellness facility information for cruise vessels operating from Cartagena
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const cartagenaFitnessCenters: FitnessCenter[] = [
  {
    id: "20b0b37c-345b-4450-b2f5-aff5cd7100eb",
    vesselId: "nb--explorer",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the NB  Explorer. Stay active and healthy while cruising the waters near Cartagena with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(759) 818-8724",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Stationary Bikes", "Boxing Equipment", "Cardio Punching Bags", "Arc Trainers", "Cardio Kettlebells", "Battle Ropes", "Cable Single Arm Single Leg Deadlift Machine", "Cable Row Machine", "Cable Single Arm Lat Pulldown Machine", "Leg Press Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Plank Machine", "Leg Curl Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "BOSU Balls", "Speed Parachutes", "Medicine Balls", "Weighted Vests", "Speed Hurdles", "Yoga Mats", "Pilates Reformers", "Barre Equipment", "Yoga Blocks"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Fitness Tracking", "Water Stations", "Body Composition Analysis", "Smoothie Bar", "Personal Training Sessions", "Nutrition Counseling", "Equipment Orientation", "Group Fitness Classes", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "05937c29-746d-412b-94bc-7f91f9de5d04",
    vesselId: "fv-cartagena-voyager",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the FV Cartagena Voyager. Stay active and healthy while cruising the waters near Cartagena with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(584) 696-8112",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Medicine Balls", "Elliptical Machines", "Air Bikes", "Stationary Bikes", "Cardio Kickboxing Bags", "Free Weights", "Power Rack", "Cable Glute Kickback Machine", "Cable Woodchopper Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Shoulder Press Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Yoga Mats", "Agility Markers", "Speed Ladders", "Agility Dots", "Resistance Bands", "TRX Suspension Trainers", "Speed Resistors", "Pilates Reformers", "Barre Equipment", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Locker Rentals", "Body Composition Analysis", "Nutrition Counseling", "Personal Training Sessions", "Audio/Visual Entertainment", "Fitness Consultations", "Smoothie Bar", "Towel Service", "Toiletries", "Hair Dryers"],
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
    isPopular: false
  },
  {
    id: "7ed74aed-a9db-420c-8886-f0af9a79a87f",
    vesselId: "hms--of-the-deep",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(928) 449-2984",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Cardio Gliders", "Cardio Kickboxing Bags", "Cardio Step Platforms", "Agility Hurdles", "Rowing Machines", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Tricep Extension Machine", "Cable Lateral Raise Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Weighted Vests", "Kettlebells", "Sledgehammers", "Plyo Boxes", "Agility Markers", "Speed Hurdles", "TRX Suspension Trainers", "Tire Flips", "Yoga Equipment", "Infrared Sauna", "Kickboxing Equipment", "HydroMassage Beds", "CrossFit Equipment", "Barre Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor", "Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Fitness Consultations", "Body Composition Analysis", "Workout Programs", "Group Fitness Classes", "Audio/Visual Entertainment", "Toiletries", "Fitness Tracking", "Equipment Orientation", "Fresh Fruit Bar", "Protein Shakes", "Locker Rentals", "Personal Training Sessions", "Water Stations"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "cfa0e5e2-571c-4ce3-811b-466156e61e51",
    vesselId: "fv-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the FV The  Mariner. Stay active and healthy while cruising the waters near Cartagena with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(957) 242-3547",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Recumbent Bikes", "Cardio Punching Bags", "Cardio Gliders", "StairMaster", "Cardio Step Platforms", "Dumbbells", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Front Raise Machine", "Barbells", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Squat Machine", "Cable Single Arm Single Leg Upright Row Machine", "Slam Balls", "Speed Resistors", "Weighted Vests", "Jump Boxes", "BOSU Balls", "Speed Sleds", "HydroMassage Beds"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Water Stations", "Equipment Orientation", "Body Composition Analysis", "Hair Dryers", "Towel Service", "Protein Shakes", "Fitness Tracking", "Smoothie Bar", "Fresh Fruit Bar", "Workout Programs", "Toiletries"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "d44b4462-9cde-4a93-85ad-6b4e098ded8c",
    vesselId: "my--gale",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(359) 743-2465",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Spin Bikes", "Treadmills", "Boxing Equipment", "Cardio Resistance Bands", "Cardio Medicine Balls", "Cardio Punching Bags", "Cable Crossover Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Leg Press Machine", "Smith Machine", "Multi-Gym Systems", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Agility Hurdles", "Speed Harnesses", "Agility Markers", "Jump Boxes", "Speed Cones", "Kettlebells", "Yoga Bolsters", "Spinning Bikes", "Cryotherapy Chamber", "Aqua Fitness Equipment", "Massage Chairs", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist", "Youth Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Protein Shakes", "Locker Rentals", "Toiletries", "Smoothie Bar", "Towel Service", "Water Stations", "Fitness Tracking", "Group Fitness Classes", "Workout Programs", "Fresh Fruit Bar", "Equipment Orientation", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "35d447f2-06ec-4476-be93-7c3cc84929df",
    vesselId: "cs--explorer",
    name: "CS  Explorer Fitness Center",
    description: "CS  Explorer Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(334) 820-6861",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Agility Hurdles", "Cardio Resistance Bands", "Rowing Machines", "Arc Trainers", "VersaClimber", "Seated Row Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Russian Twist Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Face Pull Machine", "Speed Cords", "Foam Rollers", "Speed Harnesses", "Speed Sleds", "BOSU Balls", "Spinning Bikes", "Kickboxing Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Pilates Instructor"],
    amenities: ["Locker Rentals", "Personal Training Sessions", "Smoothie Bar", "Body Composition Analysis", "Hair Dryers", "Nutrition Counseling", "Water Stations", "Towel Service", "Fresh Fruit Bar", "Toiletries", "Workout Programs", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "37de8309-7dfd-4bbf-a875-08fbb377e2c8",
    vesselId: "ms-cartagena-voyager",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the MS Cartagena Voyager. Stay active and healthy while cruising the waters near Cartagena with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(566) 378-5914",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Cardio Kickboxing Bags", "Rowing Machines", "Cardio Punching Bags", "Boxing Equipment", "StairMaster", "SkiErg", "Cardio Step Platforms", "VersaClimber", "Battle Ropes", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Calf Raise Machine", "Multi-Gym Systems", "Seated Row Machine", "Cable Shrug Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Front Raise Machine", "Lat Pulldown", "Cable Single Arm Single Leg Reverse Fly Machine", "Medicine Balls", "TRX Suspension Trainers", "Agility Poles", "Yoga Mats", "Plyo Boxes", "Jump Boxes", "Speed Hurdles", "Speed Sleds", "Kickboxing Equipment", "Stretching Stations", "Massage Chairs", "Infrared Therapy", "Spinning Bikes"],
    personalTrainers: ["Strength Training Specialist", "Group Fitness Instructor", "Pilates Instructor", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Fitness Tracking", "Protein Shakes", "Fresh Fruit Bar", "Body Composition Analysis", "Fitness Consultations", "Hair Dryers", "Group Fitness Classes", "Audio/Visual Entertainment", "Equipment Orientation", "Personal Training Sessions", "Water Stations", "Smoothie Bar", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
      }
    ],
    isPopular: true
  },
  {
    id: "dccdac54-2eda-4d6f-975a-dfe4586e9ab2",
    vesselId: "ts--of-the-deep",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(610) 700-2098",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Cardio Kettlebells", "Arc Trainers", "Boxing Equipment", "StairMaster", "Cardio Gliders", "Cardio Resistance Bands", "Cardio Kickboxing Bags", "Punching Bags", "Cable Calf Raise Machine", "Lat Pulldown", "Power Rack", "Barbells", "Cable Machines", "Cable Single Arm Bicep Curl Machine", "Bicep Curl Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Speed Harnesses", "Speed Resistors", "BOSU Balls", "Weighted Vests", "Foam Rollers", "HydroMassage Beds"],
    personalTrainers: ["Youth Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Locker Rentals", "Audio/Visual Entertainment", "Body Composition Analysis", "Hair Dryers", "Fitness Consultations", "Group Fitness Classes", "Protein Shakes", "Fitness Tracking", "Personal Training Sessions", "Workout Programs", "Fresh Fruit Bar", "Water Stations"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "0b300a25-1210-4566-80bb-59a1d99b15ec",
    vesselId: "rms-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the RMS The  Mariner. Stay active and healthy while cruising the waters near Cartagena with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(754) 712-1178",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Arc Trainers", "Cardio Medicine Balls", "Cardio Step Platforms", "Cardio Gliders", "Agility Hurdles", "Cardio Punching Bags", "Cardio Kettlebells", "StairMaster", "Cable Upright Row Machine", "Weight Machines", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Hip Thrust Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Squat Machine", "Smith Machines", "Cable Glute Kickback Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Sledgehammers", "TRX Suspension Trainers", "Speed Cones", "Medicine Balls", "Plyo Boxes", "Balance Boards", "Pilates Reformers", "Recovery Tools"],
    personalTrainers: ["Yoga Instructor", "Corrective Exercise Specialist", "Senior Fitness Specialist", "Strength and Conditioning Coach"],
    amenities: ["Fitness Consultations", "Workout Programs", "Hair Dryers", "Body Composition Analysis", "Toiletries", "Locker Rentals", "Group Fitness Classes", "Equipment Orientation", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
    isPopular: false
  },
  {
    id: "4685baba-aa11-42e4-8525-9700811c709c",
    vesselId: "fv--gale",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Cartagena. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(584) 254-3118",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Boxing Equipment", "Cardio Kettlebells", "Cardio Gliders", "StairMaster", "Rowing Machines", "Stationary Bikes", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Leg Press Machine", "Cable Back Extension Machine", "Jump Boxes", "TRX Suspension Trainers", "Weighted Vests", "Yoga Mats", "Speed Resistors", "Agility Cones", "Kettlebells", "BOSU Balls", "Yoga Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Hair Dryers", "Equipment Orientation", "Towel Service", "Nutrition Counseling", "Fitness Tracking", "Group Fitness Classes", "Protein Shakes", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Fitness Consultations", "Water Stations", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  }
];
