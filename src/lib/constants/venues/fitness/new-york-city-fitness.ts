// Fitness center venues data for New York City
// This file contains fitness center and wellness facility information for cruise vessels operating from New York City
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const newYorkCityFitnessCenters: FitnessCenter[] = [
  {
    id: "952dd3c9-7c05-4804-97e4-0c8ce4f6f7b3",
    vesselId: "my--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(256) 731-6468",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Jump Ropes", "Cardio Punching Bags", "Cardio Gliders", "Rowing Machines", "Cardio Resistance Bands", "SkiErg", "StairMaster", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Woodchopper Machine", "Leg Press Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Deadlift Machine", "Power Rack", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Back Extension Machine", "Slam Balls", "Jump Boxes", "Kettlebells", "Agility Poles", "BOSU Balls", "TRX Suspension Trainers", "Speed Parachutes", "CrossFit Equipment", "Stretching Stations", "Yoga Straps", "Cryotherapy Chambers", "Float Tanks"],
    personalTrainers: ["Aqua Fitness Instructor", "Spinning Instructor", "Corrective Exercise Specialist", "Strength and Conditioning Coach", "Youth Fitness Specialist"],
    amenities: ["Personal Training Sessions", "Fitness Tracking", "Group Fitness Classes", "Locker Rentals", "Smoothie Bar", "Protein Shakes", "Toiletries", "Fitness Consultations", "Water Stations", "Workout Programs", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
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
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "417e172b-af34-4a85-bdca-cc6b7c966d6b",
    vesselId: "sy-new-york-city-voyager",
    name: "SY New York City Voyager Fitness Center",
    description: "Welcome to SY New York City Voyager Fitness Center, your premier wellness destination aboard the SY New York City Voyager. Stay active and healthy while cruising the waters near New York City with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(279) 418-7717",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Cardio Resistance Bands", "Treadmills", "Elliptical Machines", "Cardio Punching Bags", "Cardio Gliders", "Recumbent Bikes", "Cable Single Arm Glute Kickback Machine", "Power Rack", "Multi-Gym Systems", "Smith Machine", "Cable Tricep Pushdown Machine", "Cable Lateral Raise Machine", "Seated Row Machine", "Cable Single Arm Bicep Curl Machine", "Sandbags", "Balance Boards", "Foam Rollers", "Jump Boxes", "Resistance Bands", "Plyo Boxes", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Tracking", "Workout Programs", "Protein Shakes", "Hair Dryers", "Water Stations", "Nutrition Counseling", "Personal Training Sessions", "Locker Rentals", "Group Fitness Classes", "Fitness Consultations"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
      }
    ],
    isPopular: false
  },
  {
    id: "7f1fb899-37d9-4668-a37b-fcae66468340",
    vesselId: "sy--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(754) 249-3271",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "VersaClimber", "Cardio Kettlebells", "Battle Ropes", "Jump Ropes", "Stationary Bikes", "Cable Hip Thrust Machine", "Seated Row Machine", "Free Weights", "Smith Machine", "Cable Shrug Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Woodchopper Machine", "Power Rack", "Cable Face Pull Machine", "Cable Single Arm Shoulder Press Machine", "Cable Squat Machine", "Agility Ladders", "Agility Poles", "Speed Harnesses", "BOSU Balls", "Agility Markers", "Speed Cords", "Recovery Tools"],
    personalTrainers: ["Corrective Exercise Specialist", "Aqua Fitness Instructor", "Strength and Conditioning Coach", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Smoothie Bar", "Hair Dryers", "Fresh Fruit Bar", "Water Stations", "Equipment Orientation", "Nutrition Counseling", "Body Composition Analysis", "Fitness Tracking", "Workout Programs", "Group Fitness Classes", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
    id: "be71250d-7dfa-4fad-9064-214220ae4dc9",
    vesselId: "ms-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around New York City. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(653) 676-6830",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Treadmills", "Cardio Gliders", "Spin Bikes", "Rowing Machines", "SkiErg", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Ab Crunch Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Squat Machine", "Tricep Extension Machine", "Cable Calf Raise Machine", "Cable Woodchopper Machine", "Cable Single Arm Lunge Machine", "Agility Ladders", "Agility Poles", "Sandbags", "Slam Balls", "Jump Boxes", "BOSU Balls", "Dance Fitness Equipment", "Aqua Fitness Equipment"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor", "Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Body Composition Analysis", "Workout Programs", "Personal Training Sessions", "Audio/Visual Entertainment", "Nutrition Counseling", "Towel Service", "Fitness Tracking", "Group Fitness Classes", "Fitness Consultations", "Hair Dryers", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "fb9da713-d596-4f6c-9691-119a4357948f",
    vesselId: "my--gale",
    name: "MY  Gale Fitness Center",
    description: "Welcome to MY  Gale Fitness Center, your premier wellness destination aboard the MY  Gale. Stay active and healthy while cruising the waters near New York City with our state-of-the-art fitness facilities.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(851) 202-3852",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Boxing Equipment", "Rowing Machines", "Punching Bags", "Treadmills", "Air Bikes", "Cardio Step Platforms", "Agility Hurdles", "Cardio Resistance Bands", "Cable Single Arm Single Leg Lunge Machine", "Leg Curl Machine", "Free Weights", "Dumbbells", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Face Pull Machine", "Shoulder Press Machine", "Resistance Bands", "Kettlebells", "Speed Cords", "Speed Resistors", "Speed Bands", "Jump Boxes", "Balance Boards", "Kickboxing Equipment", "Dance Fitness Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Protein Shakes", "Locker Rentals", "Fitness Consultations", "Body Composition Analysis", "Toiletries", "Equipment Orientation", "Towel Service", "Hair Dryers", "Audio/Visual Entertainment", "Fresh Fruit Bar"],
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
    hasChildcareServices: true,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "bcdf41a7-8e1d-43f1-ba32-ccc25dd3c6a9",
    vesselId: "rms--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around New York City. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(656) 762-5936",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Resistance Bands", "Cardio Kettlebells", "Arc Trainers", "Cardio Medicine Balls", "Battle Ropes", "Agility Hurdles", "Cardio Punching Bags", "Cardio Gliders", "Cable Single Arm Row Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Functional Trainers", "Dumbbells", "Cable Single Arm Lunge Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Pallof Press Machine", "TRX Suspension Trainers", "Jump Boxes", "Slam Balls", "Balance Boards", "BOSU Balls", "Speed Bands", "Yoga Mats", "Dance Fitness Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Fresh Fruit Bar", "Smoothie Bar", "Personal Training Sessions", "Fitness Consultations", "Body Composition Analysis", "Towel Service", "Toiletries", "Fitness Tracking", "Hair Dryers", "Workout Programs", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "2cd7cb86-8d2c-4072-ac32-9248781a6d9a",
    vesselId: "rms-new-york-city-voyager",
    name: "New York City Fitness Center",
    description: "New York City Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(836) 460-6918",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Step Platforms", "SkiErg", "StairMaster", "Punching Bags", "Cardio Resistance Bands", "Elliptical Machines", "Cardio Kickboxing Bags", "Cable Single Arm Single Leg Lateral Raise Machine", "Smith Machine", "Cable Single Arm Hip Thrust Machine", "Lat Pulldown", "Multi-Gym Systems", "Seated Row Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Smith Machines", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Kettlebells", "Agility Markers", "Medicine Balls", "Speed Bands", "Agility Hurdles", "Speed Parachutes", "TRX Suspension Trainers", "Aqua Fitness Equipment", "Functional Training Equipment"],
    personalTrainers: ["Spinning Instructor", "Group Fitness Instructor", "Corrective Exercise Specialist", "Strength Training Specialist"],
    amenities: ["Towel Service", "Nutrition Counseling", "Protein Shakes", "Water Stations", "Locker Rentals", "Fitness Consultations", "Equipment Orientation", "Toiletries", "Fresh Fruit Bar", "Audio/Visual Entertainment"],
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
    id: "20691ca0-a223-4f5f-8c4b-5e3f997876b5",
    vesselId: "ly--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around New York City. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(503) 886-1114",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Punching Bags", "Cardio Step Platforms", "Rowing Machines", "Stationary Bikes", "Air Bikes", "Cardio Kickboxing Bags", "Elliptical Machines", "StairMaster", "VersaClimber", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Back Extension Machine", "Pull-up Station", "Functional Trainers", "Cable Deadlift Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Woodchopper Machine", "Agility Markers", "Slam Balls", "Agility Poles", "Resistance Bands", "Speed Resistors", "Speed Parachutes", "Boxing Equipment", "Infrared Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach", "Corrective Exercise Specialist"],
    amenities: ["Protein Shakes", "Equipment Orientation", "Towel Service", "Fitness Tracking", "Body Composition Analysis", "Water Stations", "Fresh Fruit Bar", "Locker Rentals", "Nutrition Counseling", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "558ccf7f-5f40-489a-ae71-84f8fd1870ed",
    vesselId: "mv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MV The  Mariner. Stay active and healthy while cruising the waters near New York City with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(108) 990-3968",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Cardio Resistance Bands", "Treadmills", "Recumbent Bikes", "Rowing Machines", "Elliptical Machines", "Battle Ropes", "Spin Bikes", "Cardio Step Platforms", "Arc Trainers", "Shoulder Press Machine", "Barbells", "Cable Single Arm Row Machine", "Cable Calf Raise Machine", "Cable Single Arm Tricep Extension Machine", "Functional Trainers", "Smith Machine", "Cable Plank Machine", "Cable Single Arm Woodchopper Machine", "Lat Pulldown", "Cable Single Arm Single Leg Lunge Machine", "Speed Parachutes", "Stability Balls", "Medicine Balls", "Agility Ladders", "TRX Suspension Trainers", "Stretching Stations", "CrossFit Equipment", "Infrared Sauna"],
    personalTrainers: ["Strength and Conditioning Coach", "Spinning Instructor", "Corrective Exercise Specialist", "Group Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Audio/Visual Entertainment", "Workout Programs", "Fresh Fruit Bar", "Nutrition Counseling", "Towel Service", "Fitness Consultations", "Protein Shakes", "Water Stations", "Smoothie Bar"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "fdd1cc34-db6a-4fe1-8168-99eb18fa7b49",
    vesselId: "nb--gale",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around New York City. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(939) 381-8209",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Arc Trainers", "Boxing Equipment", "VersaClimber", "Cardio Kettlebells", "Cable Single Arm Single Leg Reverse Fly Machine", "Smith Machines", "Bicep Curl Machine", "Leg Extension Machine", "Cable Squat Machine", "Smith Machine", "Cable Face Pull Machine", "Cable Single Arm Bicep Curl Machine", "Calf Raise Machine", "Back Extension Machine", "Weighted Vests", "Yoga Mats", "Medicine Balls", "Speed Ladders", "Kettlebells", "Foam Rollers", "Slam Balls", "Speed Parachutes", "Cryotherapy Chambers"],
    personalTrainers: ["Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Equipment Orientation", "Protein Shakes", "Body Composition Analysis", "Workout Programs", "Fitness Consultations", "Group Fitness Classes", "Toiletries", "Personal Training Sessions", "Audio/Visual Entertainment", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
