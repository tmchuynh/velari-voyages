// Fitness center venues data for Mykonos
// This file contains fitness center and wellness facility information for cruise vessels operating from Mykonos
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const mykonosFitnessCenters: FitnessCenter[] = [
  {
    id: "c44ffe6e-2ac0-4d50-96db-f33db2ce2b4d",
    vesselId: "ly--explorer",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the LY  Explorer. Stay active and healthy while cruising the waters near Mykonos with our state-of-the-art fitness facilities. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(833) 353-8072",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Rowing Machines", "Agility Hurdles", "Air Bikes", "Cardio Punching Bags", "Cardio Resistance Bands", "Cardio Kettlebells", "Cable Single Arm Single Leg Hip Thrust Machine", "Smith Machine", "Cable Tricep Pushdown Machine", "Abdominal Crunch Machine", "Cable Single Arm Bicep Curl Machine", "Cable Glute Kickback Machine", "Smith Machines", "Cable Lunge Machine", "Cable Single Arm Row Machine", "Resistance Bands", "Sledgehammers", "Kettlebells", "Foam Rollers", "Speed Hurdles", "Battle Ropes", "Tire Flips", "Kickboxing Equipment", "Compression Therapy", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Corrective Exercise Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Audio/Visual Entertainment", "Hair Dryers", "Water Stations", "Toiletries", "Nutrition Counseling", "Smoothie Bar", "Workout Programs", "Fitness Consultations"],
    is24Hours: true,
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
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
  },
  {
    id: "e5d3c69f-f7cf-46e8-974a-c3d352cec03d",
    vesselId: "sv-mykonos-voyager",
    name: "SV Mykonos Voyager Fitness Center",
    description: "Welcome to SV Mykonos Voyager Fitness Center, your premier wellness destination aboard the SV Mykonos Voyager. Stay active and healthy while cruising the waters near Mykonos with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(525) 515-4247",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Agility Hurdles", "Cardio Step Platforms", "StairMaster", "Rowing Machines", "SkiErg", "Cardio Kettlebells", "Stationary Bikes", "Cable Bicep Curl Machine", "Cable Single Arm Lunge Machine", "Smith Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Woodchopper Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Lunge Machine", "Chest Fly Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Agility Cones", "Speed Sleds", "Jump Boxes", "Speed Hurdles", "Speed Bands", "Stretching Stations", "Yoga Equipment", "HydroMassage Beds"],
    personalTrainers: ["Aqua Fitness Instructor", "Spinning Instructor"],
    amenities: ["Nutrition Counseling", "Fresh Fruit Bar", "Locker Rentals", "Workout Programs", "Fitness Tracking", "Group Fitness Classes", "Body Composition Analysis", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
    id: "507bfc8f-2ef6-4676-a8f1-385812b69915",
    vesselId: "hms--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the HMS  of the Deep. Stay active and healthy while cruising the waters near Mykonos with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(868) 621-2455",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Treadmills", "Elliptical Machines", "Spin Bikes", "SkiErg", "Cardio Punching Bags", "Recumbent Bikes", "Air Bikes", "Battle Ropes", "Lat Pulldown", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Row Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Shrug Machine", "Yoga Mats", "Agility Hurdles", "Speed Harnesses", "Tire Flips", "Jump Boxes", "TRX Suspension Trainers", "Speed Sleds", "Yoga Wheels", "Massage Chairs", "Infrared Therapy", "Functional Training Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer", "Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Body Composition Analysis", "Workout Programs", "Towel Service", "Water Stations", "Fresh Fruit Bar", "Nutrition Counseling", "Equipment Orientation", "Locker Rentals", "Personal Training Sessions", "Group Fitness Classes", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "f89ad676-e9d4-45ce-b56c-b5df4af55d69",
    vesselId: "my-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(801) 394-9053",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Spin Bikes", "Rowing Machines", "Recumbent Bikes", "Cardio Step Platforms", "Cardio Punching Bags", "VersaClimber", "Arc Trainers", "Battle Ropes", "Cable Single Arm Face Pull Machine", "Cable Single Arm Back Extension Machine", "Chest Fly Machine", "Leg Curl Machine", "Cable Hip Thrust Machine", "Cable Back Extension Machine", "Calf Raise Machine", "Weight Machines", "Speed Cones", "Speed Cords", "Yoga Mats", "BOSU Balls", "Plyo Boxes", "Stability Balls", "Pilates Reformers", "Kickboxing Equipment", "Compression Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor"],
    amenities: ["Protein Shakes", "Fresh Fruit Bar", "Group Fitness Classes", "Nutrition Counseling", "Smoothie Bar", "Hair Dryers", "Equipment Orientation", "Fitness Tracking", "Personal Training Sessions"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
      }
    ],
    isPopular: true
  },
  {
    id: "a6520878-01ad-4f84-a85c-fe62c4d2cead",
    vesselId: "ts--gale",
    name: "TS  Gale Fitness Center",
    description: "TS  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Mykonos. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(619) 821-8651",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "SkiErg", "Cardio Step Platforms", "VersaClimber", "Cardio Kickboxing Bags", "Boxing Equipment", "Air Bikes", "Recumbent Bikes", "Spin Bikes", "Arc Trainers", "Cable Single Arm Single Leg Back Extension Machine", "Cable Pallof Press Machine", "Bicep Curl Machine", "Cable Reverse Fly Machine", "Cable Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Free Weights", "Cable Face Pull Machine", "Cable Single Arm Chest Press Machine", "Lat Pulldown", "Cable Single Arm Single Leg Glute Kickback Machine", "Speed Harnesses", "Yoga Mats", "Speed Cones", "Slam Balls", "Kettlebells", "Foam Rollers", "Speed Resistors", "Dance Fitness Equipment", "Yoga Wheels", "CrossFit Equipment", "Pilates Reformers", "Functional Training Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Senior Fitness Specialist", "Spinning Instructor", "Group Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Fitness Consultations", "Smoothie Bar", "Protein Shakes", "Fresh Fruit Bar", "Personal Training Sessions", "Hair Dryers", "Toiletries", "Fitness Tracking", "Towel Service", "Audio/Visual Entertainment", "Equipment Orientation", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
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
    id: "136f659b-7402-4f97-909a-519f53fe13a5",
    vesselId: "fv--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(438) 649-3872",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Boxing Equipment", "Elliptical Machines", "Cardio Medicine Balls", "Recumbent Bikes", "Cardio Step Platforms", "Rowing Machines", "Cable Single Arm Single Leg Front Raise Machine", "Free Weights", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Shrug Machine", "Dumbbells", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Woodchopper Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Squat Machine", "Speed Sleds", "Sledgehammers", "Slam Balls", "Agility Ladders", "Kettlebells", "Agility Dots", "Speed Harnesses", "Yoga Blocks"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Fresh Fruit Bar", "Group Fitness Classes", "Protein Shakes", "Personal Training Sessions", "Water Stations", "Fitness Tracking", "Workout Programs", "Hair Dryers", "Fitness Consultations"],
    is24Hours: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "fedf3a0a-6a43-4817-b90b-1b42d255a44a",
    vesselId: "nb-mykonos-voyager",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the NB Mykonos Voyager. Stay active and healthy while cruising the waters near Mykonos with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(316) 728-5833",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Cardio Punching Bags", "Recumbent Bikes", "SkiErg", "Jump Ropes", "Cardio Kickboxing Bags", "Arc Trainers", "Treadmills", "Battle Ropes", "Agility Hurdles", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Plank Machine", "Cable Single Arm Deadlift Machine", "Cable Row Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Upright Row Machine", "Speed Sleds", "Agility Markers", "Stability Balls", "Speed Harnesses", "Kettlebells", "Medicine Balls", "Recovery Tools"],
    personalTrainers: ["Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Locker Rentals", "Body Composition Analysis", "Nutrition Counseling", "Fitness Consultations", "Toiletries", "Group Fitness Classes", "Protein Shakes", "Smoothie Bar", "Personal Training Sessions", "Water Stations", "Fitness Tracking", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "ff4b8677-4a1d-49df-a69f-6af6660febef",
    vesselId: "mv--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Mykonos. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(194) 666-1851",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Recumbent Bikes", "Agility Hurdles", "Cardio Kettlebells", "Arc Trainers", "Cardio Medicine Balls", "Cardio Step Platforms", "StairMaster", "Lat Pulldown", "Smith Machine", "Free Weights", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Deadlift Machine", "Plate Loaded Machines", "TRX Suspension Trainers", "BOSU Balls", "Medicine Balls", "Kettlebells", "Agility Dots", "Speed Ladders", "Battle Ropes", "Yoga Bolsters", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Towel Service", "Protein Shakes", "Nutrition Counseling", "Water Stations", "Hair Dryers", "Audio/Visual Entertainment", "Personal Training Sessions", "Fitness Consultations", "Smoothie Bar", "Fitness Tracking", "Equipment Orientation", "Toiletries"],
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
    id: "d969065e-9f82-42d1-bcf3-92bc597b5d3e",
    vesselId: "sy-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(257) 727-1010",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Medicine Balls", "Elliptical Machines", "Arc Trainers", "VersaClimber", "StairMaster", "Cardio Resistance Bands", "Boxing Equipment", "Cable Single Arm Single Leg Russian Twist Machine", "Smith Machine", "Free Weights", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Shrug Machine", "Cable Lateral Raise Machine", "Lat Pulldown", "Cable Single Arm Calf Raise Machine", "Agility Markers", "Battle Ropes", "Speed Parachutes", "Weighted Vests", "Sledgehammers", "HydroMassage Beds", "Pilates Reformers", "Dance Fitness Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Equipment Orientation", "Group Fitness Classes", "Fitness Tracking", "Smoothie Bar", "Nutrition Counseling", "Towel Service", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Hair Dryers", "Body Composition Analysis"],
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
    hasChildcareServices: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "66bdbef0-2467-4c44-86b6-d1d6ed26c823",
    vesselId: "ss--gale",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the SS  Gale. Stay active and healthy while cruising the waters near Mykonos with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(918) 183-1514",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Recumbent Bikes", "Battle Ropes", "Elliptical Machines", "Cardio Gliders", "Boxing Equipment", "Cardio Step Platforms", "Cable Machines", "Cable Single Arm Row Machine", "Tricep Extension Machine", "Cable Face Pull Machine", "Cable Lunge Machine", "Cable Plank Machine", "Cable Single Arm Ab Crunch Machine", "Cable Pallof Press Machine", "Bench Press", "Cable Glute Kickback Machine", "Speed Ladders", "Medicine Balls", "Balance Boards", "TRX Suspension Trainers", "Agility Cones", "Sandbags", "Agility Hurdles", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Workout Programs", "Group Fitness Classes", "Personal Training Sessions", "Hair Dryers", "Audio/Visual Entertainment", "Toiletries", "Fresh Fruit Bar", "Protein Shakes", "Nutrition Counseling", "Equipment Orientation", "Fitness Consultations"],
    is24Hours: true,
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
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  }
];
