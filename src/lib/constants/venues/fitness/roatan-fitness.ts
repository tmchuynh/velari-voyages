// Fitness center venues data for Roatan
// This file contains fitness center and wellness facility information for cruise vessels operating from Roatan
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const roatanFitnessCenters: FitnessCenter[] = [
  {
    id: "722c95f5-5ff7-4864-b2d6-81f3ea4987fe",
    vesselId: "cs--explorer",
    name: "Roatan Fitness Center",
    description: "Roatan Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Roatan. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(739) 142-6311",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Spin Bikes", "Cardio Resistance Bands", "Rowing Machines", "Cardio Step Platforms", "Punching Bags", "Jump Ropes", "Stationary Bikes", "Arc Trainers", "Cable Single Arm Single Leg Upright Row Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Bicep Curl Machine", "Bicep Curl Machine", "Cable Single Arm Plank Machine", "Tire Flips", "Medicine Balls", "Plyo Boxes", "Speed Cords", "Agility Ladders", "BOSU Balls", "Speed Sleds", "Yoga Equipment", "Barre Equipment", "Cryotherapy Chambers"],
    personalTrainers: ["Certified Personal Trainer", "Youth Fitness Specialist", "Strength and Conditioning Coach"],
    amenities: ["Smoothie Bar", "Fresh Fruit Bar", "Protein Shakes", "Nutrition Counseling", "Toiletries", "Hair Dryers", "Audio/Visual Entertainment", "Locker Rentals", "Body Composition Analysis", "Fitness Tracking"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
      }
    ],
    isPopular: true
  },
  {
    id: "6b990fd1-30fd-4ea6-94f6-24d5406839c2",
    vesselId: "fv-roatan-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Roatan. Our facility features dedicated yoga studio, sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(288) 351-2066",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Elliptical Machines", "SkiErg", "Stationary Bikes", "Battle Ropes", "Arc Trainers", "Cardio Punching Bags", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Glute Kickback Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Shoulder Press Machine", "Cable Face Pull Machine", "Cable Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Upright Row Machine", "Abdominal Crunch Machine", "Speed Cones", "Kettlebells", "Speed Sleds", "Medicine Balls", "Speed Parachutes", "Boxing Equipment", "Dance Fitness Equipment", "Yoga Bolsters", "Yoga Wheels", "Compression Therapy", "Cryotherapy Chambers"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Hair Dryers", "Fitness Consultations", "Body Composition Analysis", "Workout Programs", "Smoothie Bar", "Nutrition Counseling", "Fitness Tracking", "Group Fitness Classes", "Audio/Visual Entertainment", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "fd026280-29b2-40e5-b223-0d8cb766bca0",
    vesselId: "my--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(132) 915-6462",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Cardio Medicine Balls", "Elliptical Machines", "Rowing Machines", "Cardio Punching Bags", "StairMaster", "Jump Ropes", "Cable Single Arm Lunge Machine", "Multi-Gym Systems", "Smith Machines", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Chest Fly Machine", "Cable Single Arm Calf Raise Machine", "Dumbbells", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Shrug Machine", "Weighted Vests", "Medicine Balls", "Stability Balls", "Agility Hurdles", "Speed Hurdles", "Agility Cones", "Speed Sleds", "Resistance Bands", "Spinning Bikes"],
    personalTrainers: ["Youth Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Smoothie Bar", "Protein Shakes", "Towel Service", "Hair Dryers", "Group Fitness Classes", "Personal Training Sessions", "Toiletries", "Fitness Consultations", "Fitness Tracking", "Nutrition Counseling", "Water Stations", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "49d1734d-42cf-4185-8699-9508a01fbb12",
    vesselId: "nx-the--mariner",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(192) 126-3929",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "SkiErg", "Cardio Gliders", "Cardio Medicine Balls", "Cardio Kettlebells", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Deadlift Machine", "Weight Machines", "Cable Squat Machine", "Smith Machine", "Power Rack", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Hip Thrust Machine", "Cable Shrug Machine", "Stability Balls", "Speed Hurdles", "Speed Bands", "Speed Harnesses", "Yoga Mats", "Kettlebells", "Cryotherapy Chamber", "Dance Fitness Equipment", "Functional Training Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Audio/Visual Entertainment", "Hair Dryers", "Locker Rentals", "Water Stations", "Towel Service", "Smoothie Bar", "Fitness Tracking", "Personal Training Sessions", "Equipment Orientation"],
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
    id: "e2cd7fa4-e475-4c6e-b49f-c07859f263c1",
    vesselId: "fv--gale",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(204) 510-6375",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Rowing Machines", "Cardio Resistance Bands", "Recumbent Bikes", "Stationary Bikes", "Agility Hurdles", "Boxing Equipment", "Cable Deadlift Machine", "Bench Press", "Cable Plank Machine", "Seated Row Machine", "Lat Pulldown", "Cable Squat Machine", "Cable Single Arm Chest Press Machine", "Smith Machine", "Multi-Gym Systems", "Free Weights", "TRX Suspension Trainers", "Agility Cones", "Speed Sleds", "Jump Boxes", "BOSU Balls", "Speed Bands", "Aqua Fitness Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Certified Personal Trainer"],
    amenities: ["Equipment Orientation", "Group Fitness Classes", "Towel Service", "Workout Programs", "Water Stations", "Smoothie Bar", "Nutrition Counseling", "Protein Shakes", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    id: "34cb356d-76b7-49d8-96bf-8b646f7b18bb",
    vesselId: "ms--explorer",
    name: "Roatan Fitness Center",
    description: "Roatan Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(929) 890-6385",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Spin Bikes", "Air Bikes", "Recumbent Bikes", "Cardio Medicine Balls", "Jump Ropes", "Stationary Bikes", "VersaClimber", "Elliptical Machines", "Cable Single Arm Single Leg Lateral Raise Machine", "Calf Raise Machine", "Barbells", "Cable Shrug Machine", "Cable Single Arm Face Pull Machine", "Abdominal Crunch Machine", "Cable Single Arm Reverse Fly Machine", "Cable Squat Machine", "Tire Flips", "Speed Bands", "Agility Markers", "Speed Cones", "Speed Sleds", "Speed Harnesses", "Speed Hurdles", "HydroMassage Beds", "Spinning Bikes", "Yoga Equipment"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor", "Senior Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Protein Shakes", "Audio/Visual Entertainment", "Fitness Tracking", "Nutrition Counseling", "Body Composition Analysis", "Fitness Consultations", "Group Fitness Classes", "Personal Training Sessions", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "2af19c0f-5e38-45ef-8cf2-3eb4c0c3ec51",
    vesselId: "my-roatan-voyager",
    name: "MY Roatan Voyager Fitness Center",
    description: "MY Roatan Voyager Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Roatan. Our facility features steam room.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(630) 661-4207",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Step Platforms", "Cardio Resistance Bands", "Stationary Bikes", "Arc Trainers", "Battle Ropes", "SkiErg", "Barbells", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Plank Machine", "Cable Pallof Press Machine", "Weight Machines", "Cable Single Arm Tricep Extension Machine", "Cable Squat Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Row Machine", "Sandbags", "Agility Hurdles", "Agility Dots", "Speed Cones", "Sledgehammers", "Weighted Vests", "Speed Ladders", "Agility Markers", "Cryotherapy Chamber", "Recovery Tools"],
    personalTrainers: ["Spinning Instructor", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Equipment Orientation", "Toiletries", "Personal Training Sessions", "Fitness Consultations", "Locker Rentals", "Fresh Fruit Bar", "Nutrition Counseling", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "7334b85f-fbf7-491b-9910-195c1177c513",
    vesselId: "ps--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(552) 423-4137",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "StairMaster", "Spin Bikes", "VersaClimber", "Rowing Machines", "Battle Ropes", "Cable Single Arm Hip Thrust Machine", "Cable Ab Crunch Machine", "Weight Machines", "Cable Russian Twist Machine", "Back Extension Machine", "Barbells", "Cable Pallof Press Machine", "Cable Single Arm Ab Crunch Machine", "Tricep Extension Machine", "Cable Lunge Machine", "Cable Plank Machine", "Agility Ladders", "Speed Sleds", "TRX Suspension Trainers", "Plyo Boxes", "Tire Flips", "Yoga Bolsters"],
    personalTrainers: ["Strength Training Specialist", "Corrective Exercise Specialist", "Certified Personal Trainer", "Youth Fitness Specialist"],
    amenities: ["Toiletries", "Equipment Orientation", "Locker Rentals", "Towel Service", "Group Fitness Classes", "Body Composition Analysis", "Water Stations", "Personal Training Sessions", "Fitness Tracking", "Hair Dryers", "Nutrition Counseling", "Workout Programs"],
    is24Hours: true,
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
    id: "2f41e9b9-5068-48cf-bec8-c78486fee2fe",
    vesselId: "ps-the--mariner",
    name: "PS The  Mariner Fitness Center",
    description: "PS The  Mariner Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Roatan. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(563) 372-2741",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "VersaClimber", "Recumbent Bikes", "Cardio Punching Bags", "Elliptical Machines", "Treadmills", "Air Bikes", "Cable Single Arm Single Leg Deadlift Machine", "Shoulder Press Machine", "Cable Squat Machine", "Cable Pallof Press Machine", "Leg Curl Machine", "Cable Hip Thrust Machine", "Dumbbells", "Tricep Extension Machine", "Agility Markers", "Speed Hurdles", "Stability Balls", "TRX Suspension Trainers", "Tire Flips", "Kettlebells", "Yoga Wheels"],
    personalTrainers: ["Pilates Instructor", "Group Fitness Instructor", "Strength and Conditioning Coach", "Senior Fitness Specialist"],
    amenities: ["Protein Shakes", "Fitness Consultations", "Water Stations", "Audio/Visual Entertainment", "Hair Dryers", "Workout Programs", "Fresh Fruit Bar", "Equipment Orientation", "Body Composition Analysis", "Group Fitness Classes", "Nutrition Counseling"],
    is24Hours: false,
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
    id: "1c112255-9b55-42cd-97b5-7efd0533db7a",
    vesselId: "ms--gale",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(937) 507-3634",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Punching Bags", "Cardio Gliders", "StairMaster", "Arc Trainers", "Treadmills", "Air Bikes", "Cable Row Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Shrug Machine", "Power Rack", "Weight Machines", "Free Weights", "Bench Press", "Cable Single Arm Single Leg Hip Thrust Machine", "Kettlebells", "Plyo Boxes", "Medicine Balls", "Agility Markers", "Agility Ladders", "Tire Flips", "Jump Boxes", "Speed Bands", "Barre Equipment", "Cryotherapy Chamber", "Aqua Fitness Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Group Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Water Stations", "Fresh Fruit Bar", "Workout Programs", "Personal Training Sessions", "Toiletries", "Locker Rentals", "Protein Shakes", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
      }
    ],
    isPopular: false
  }
];
