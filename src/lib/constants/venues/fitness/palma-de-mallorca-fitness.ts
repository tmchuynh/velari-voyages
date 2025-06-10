// Fitness center venues data for Palma De Mallorca
// This file contains fitness center and wellness facility information for cruise vessels operating from Palma De Mallorca
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const palmaDeMallorcaFitnessCenters: FitnessCenter[] = [
  {
    id: "4c953235-140a-4e30-a1e2-021aa8c2617b",
    vesselId: "sy--explorer",
    name: "Palma De Mallorca Fitness Center",
    description: "Palma De Mallorca Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(552) 694-9584",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "Spin Bikes", "Treadmills", "Elliptical Machines", "Air Bikes", "Punching Bags", "StairMaster", "Tricep Extension Machine", "Cable Single Arm Single Leg Deadlift Machine", "Smith Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Ab Crunch Machine", "Foam Rollers", "Speed Resistors", "Kettlebells", "Speed Sleds", "Jump Boxes", "Agility Markers", "Medicine Balls", "Speed Cords", "Cryotherapy Chambers"],
    personalTrainers: ["Strength Training Specialist", "Strength and Conditioning Coach", "Corrective Exercise Specialist"],
    amenities: ["Workout Programs", "Fitness Tracking", "Locker Rentals", "Nutrition Counseling", "Equipment Orientation", "Body Composition Analysis", "Personal Training Sessions", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "381bde61-4624-4fe5-8ea5-5cc2d3cb914b",
    vesselId: "my-palma-de-mallorca-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Palma De Mallorca. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(127) 815-6254",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Punching Bags", "Treadmills", "Elliptical Machines", "Cardio Kettlebells", "Cardio Gliders", "Agility Hurdles", "Air Bikes", "Boxing Equipment", "Cardio Medicine Balls", "Cable Single Arm Upright Row Machine", "Weight Machines", "Dumbbells", "Cable Squat Machine", "Leg Curl Machine", "Pull-up Station", "Seated Row Machine", "Smith Machine", "Bench Press", "Cable Plank Machine", "Leg Extension Machine", "Balance Boards", "Kettlebells", "Resistance Bands", "Speed Hurdles", "BOSU Balls", "Medicine Balls", "Agility Ladders", "Dance Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Workout Programs", "Protein Shakes", "Personal Training Sessions", "Fitness Consultations", "Audio/Visual Entertainment", "Group Fitness Classes", "Equipment Orientation", "Locker Rentals", "Body Composition Analysis", "Smoothie Bar", "Hair Dryers"],
    is24Hours: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "4249f9da-bc2a-4d30-9664-65a539c992b8",
    vesselId: "ly--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(729) 349-2759",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Recumbent Bikes", "Cardio Punching Bags", "Boxing Equipment", "Battle Ropes", "Agility Hurdles", "Cardio Kettlebells", "SkiErg", "Spin Bikes", "Cardio Medicine Balls", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Face Pull Machine", "Weight Machines", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Pallof Press Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Plank Machine", "Cable Upright Row Machine", "TRX Suspension Trainers", "Medicine Balls", "Weighted Vests", "Speed Ladders", "Kettlebells", "Sledgehammers", "Pilates Reformers", "Yoga Equipment"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Locker Rentals", "Audio/Visual Entertainment", "Water Stations", "Smoothie Bar", "Group Fitness Classes", "Toiletries", "Body Composition Analysis", "Equipment Orientation", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "4a6dfafe-9032-428d-bb63-0e228b23d328",
    vesselId: "hms-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Palma De Mallorca. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(169) 682-4747",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Elliptical Machines", "Cardio Resistance Bands", "Agility Hurdles", "Recumbent Bikes", "Battle Ropes", "Boxing Equipment", "Treadmills", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Lat Pulldown", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Plank Machine", "Cable Single Arm Shoulder Press Machine", "Cable Ab Crunch Machine", "Cable Single Arm Plank Machine", "Speed Resistors", "Agility Markers", "Stability Balls", "Kettlebells", "Speed Sleds", "Speed Bands", "Yoga Equipment", "Massage Chairs", "CrossFit Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Corrective Exercise Specialist", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Group Fitness Classes", "Protein Shakes", "Body Composition Analysis", "Workout Programs", "Fitness Tracking", "Water Stations", "Fresh Fruit Bar", "Toiletries", "Personal Training Sessions"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "7ede6982-d3c4-4dcb-9e3d-04228d8c5060",
    vesselId: "nx--gale",
    name: "NX  Gale Fitness Center",
    description: "Welcome to NX  Gale Fitness Center, your premier wellness destination aboard the NX  Gale. Stay active and healthy while cruising the waters near Palma De Mallorca with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(434) 194-4795",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Stationary Bikes", "Cardio Step Platforms", "Agility Hurdles", "SkiErg", "Cardio Kettlebells", "Back Extension Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Multi-Gym Systems", "Dumbbells", "Calf Raise Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Chest Press Machine", "Bench Press", "BOSU Balls", "Speed Hurdles", "Tire Flips", "Yoga Mats", "Sledgehammers", "Speed Cones", "Balance Boards", "Boxing Equipment", "Kickboxing Equipment", "Barre Equipment"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer", "Yoga Instructor"],
    amenities: ["Fresh Fruit Bar", "Fitness Tracking", "Hair Dryers", "Toiletries", "Body Composition Analysis", "Personal Training Sessions", "Nutrition Counseling", "Water Stations", "Equipment Orientation", "Smoothie Bar", "Locker Rentals", "Protein Shakes"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "29f5e5b0-f4fd-4e0a-9435-e41b9f7d26cd",
    vesselId: "mv--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(907) 192-6613",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Air Bikes", "Battle Ropes", "Cardio Kickboxing Bags", "SkiErg", "Treadmills", "Cable Single Arm Bicep Curl Machine", "Lat Pulldown", "Cable Single Arm Back Extension Machine", "Cable Crossover Machine", "Cable Calf Raise Machine", "Chest Press Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Squat Machine", "Dumbbells", "Speed Ladders", "BOSU Balls", "Kettlebells", "Sandbags", "Medicine Balls", "Balance Boards", "TRX Suspension Trainers", "Kickboxing Equipment", "Dance Fitness Equipment", "Float Tanks"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Locker Rentals", "Towel Service", "Equipment Orientation", "Smoothie Bar", "Fitness Tracking", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Workout Programs", "Water Stations", "Fitness Consultations", "Hair Dryers", "Body Composition Analysis"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "c8ee5413-6a92-4a50-bb09-35d280f8d6dc",
    vesselId: "ts-palma-de-mallorca-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(741) 571-5538",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Rowing Machines", "Boxing Equipment", "Stationary Bikes", "Cardio Gliders", "Cardio Kickboxing Bags", "Cardio Kettlebells", "Smith Machines", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Plank Machine", "Resistance Bands", "Speed Sleds", "Kettlebells", "Balance Boards", "Foam Rollers", "BOSU Balls", "Medicine Balls", "Compression Therapy", "Infrared Therapy", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Nutrition Counseling", "Body Composition Analysis", "Group Fitness Classes", "Hair Dryers", "Fitness Consultations", "Equipment Orientation", "Fitness Tracking", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "0dda67ed-08e0-4375-855d-7529b08790da",
    vesselId: "ss--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(130) 918-7110",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "StairMaster", "SkiErg", "Cardio Punching Bags", "Cardio Gliders", "Cardio Medicine Balls", "Treadmills", "Cable Deadlift Machine", "Leg Press Machine", "Free Weights", "Cable Machines", "Seated Row Machine", "Shoulder Press Machine", "Power Rack", "Cable Single Arm Single Leg Shrug Machine", "Smith Machine", "Cable Hip Thrust Machine", "Agility Hurdles", "Agility Markers", "Slam Balls", "Speed Hurdles", "Medicine Balls", "Speed Sleds", "Agility Dots", "Stability Balls", "TRX Suspension Trainers", "Yoga Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Strength Training Specialist", "Pilates Instructor", "Aqua Fitness Instructor"],
    amenities: ["Audio/Visual Entertainment", "Equipment Orientation", "Group Fitness Classes", "Personal Training Sessions", "Fresh Fruit Bar", "Locker Rentals", "Nutrition Counseling", "Water Stations", "Protein Shakes", "Workout Programs", "Body Composition Analysis", "Towel Service"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "a6b53eef-0fa2-4006-9e7c-45c82e1f0cc7",
    vesselId: "fv-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(842) 702-7909",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "SkiErg", "Rowing Machines", "Jump Ropes", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Treadmills", "Cardio Resistance Bands", "Stationary Bikes", "StairMaster", "Weight Machines", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Row Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Calf Raise Machine", "Cable Machines", "Cable Face Pull Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Speed Cones", "Speed Sleds", "Speed Bands", "Foam Rollers", "Speed Cords", "Yoga Blocks", "Yoga Equipment"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor"],
    amenities: ["Locker Rentals", "Toiletries", "Equipment Orientation", "Personal Training Sessions", "Hair Dryers", "Workout Programs", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "785a8681-3bbc-4d0d-80e9-bbf579fd19d1",
    vesselId: "rv--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(196) 719-9375",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Treadmills", "Elliptical Machines", "Spin Bikes", "Battle Ropes", "Jump Ropes", "VersaClimber", "Arc Trainers", "Power Rack", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Plank Machine", "Cable Bicep Curl Machine", "Chest Fly Machine", "Cable Single Arm Shrug Machine", "Cable Reverse Fly Machine", "Plate Loaded Machines", "TRX Suspension Trainers", "Agility Markers", "BOSU Balls", "Speed Sleds", "Plyo Boxes", "Infrared Sauna"],
    personalTrainers: ["Spinning Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer", "Strength and Conditioning Coach"],
    amenities: ["Personal Training Sessions", "Water Stations", "Hair Dryers", "Equipment Orientation", "Audio/Visual Entertainment", "Toiletries", "Fitness Tracking", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
  }
];
