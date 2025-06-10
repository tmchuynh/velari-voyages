// Fitness center venues data for Quebec City
// This file contains fitness center and wellness facility information for cruise vessels operating from Quebec City
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const quebecCityFitnessCenters: FitnessCenter[] = [
  {
    id: "8dade41b-dab6-47b7-8cf5-fdd5367857de",
    vesselId: "my--explorer",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the MY  Explorer. Stay active and healthy while cruising the waters near Quebec City with our state-of-the-art fitness facilities. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(281) 351-9133",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Battle Ropes", "Cardio Resistance Bands", "Rowing Machines", "Cardio Punching Bags", "Jump Ropes", "Arc Trainers", "Cardio Step Platforms", "Recumbent Bikes", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Dumbbells", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Face Pull Machine", "Chest Fly Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Lunge Machine", "Power Rack", "Multi-Gym Systems", "Pull-up Station", "Stability Balls", "Kettlebells", "Speed Sleds", "Tire Flips", "Sandbags", "Boxing Equipment", "Aqua Fitness Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Yoga Instructor"],
    amenities: ["Smoothie Bar", "Towel Service", "Equipment Orientation", "Fitness Tracking", "Nutrition Counseling", "Locker Rentals", "Group Fitness Classes", "Body Composition Analysis", "Audio/Visual Entertainment"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "27ba470f-20bc-4582-b36d-ae3ede78fec9",
    vesselId: "ly-quebec-city-voyager",
    name: "LY Quebec City Voyager Fitness Center",
    description: "Discover wellness at sea with LY Quebec City Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(398) 176-4351",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Rowing Machines", "Jump Ropes", "Battle Ropes", "StairMaster", "Air Bikes", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Tricep Pushdown Machine", "Multi-Gym Systems", "Speed Harnesses", "Slam Balls", "Agility Dots", "Speed Resistors", "Agility Markers", "Speed Cords", "Kettlebells", "TRX Suspension Trainers"],
    personalTrainers: ["Group Fitness Instructor", "Strength and Conditioning Coach", "Pilates Instructor"],
    amenities: ["Personal Training Sessions", "Fitness Tracking", "Smoothie Bar", "Audio/Visual Entertainment", "Equipment Orientation", "Nutrition Counseling", "Protein Shakes", "Body Composition Analysis", "Water Stations"],
    is24Hours: true,
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
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "67291836-b430-4ae6-abc2-3407afb04d95",
    vesselId: "hms--of-the-deep",
    name: "HMS  of the Deep Fitness Center",
    description: "Discover wellness at sea with HMS  of the Deep Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(783) 924-3825",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Treadmills", "Battle Ropes", "SkiErg", "Boxing Equipment", "Cardio Kettlebells", "Rowing Machines", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Deadlift Machine", "Speed Sleds", "TRX Suspension Trainers", "Balance Boards", "Medicine Balls", "Agility Ladders", "Recovery Tools"],
    personalTrainers: ["Fitness Nutrition Specialist", "Yoga Instructor", "Group Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Toiletries", "Workout Programs", "Group Fitness Classes", "Protein Shakes", "Water Stations", "Smoothie Bar", "Fitness Tracking", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
    id: "bb08b1fc-92f0-427f-83dd-f866496fb3c6",
    vesselId: "sy-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(498) 435-6058",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "StairMaster", "Agility Hurdles", "SkiErg", "Cardio Medicine Balls", "Rowing Machines", "Leg Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Free Weights", "Cable Single Arm Single Leg Front Raise Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Face Pull Machine", "Cable Pallof Press Machine", "Agility Cones", "Agility Poles", "Sandbags", "Weighted Vests", "Foam Rollers", "Tire Flips", "Plyo Boxes", "Battle Ropes", "Stretching Stations"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach"],
    amenities: ["Group Fitness Classes", "Equipment Orientation", "Audio/Visual Entertainment", "Workout Programs", "Personal Training Sessions", "Body Composition Analysis", "Nutrition Counseling", "Fresh Fruit Bar", "Hair Dryers", "Fitness Consultations"],
    is24Hours: false,
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "ade6be57-3b33-4342-a762-53b68bf6064c",
    vesselId: "ly--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(809) 742-9732",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Spin Bikes", "Elliptical Machines", "VersaClimber", "Cardio Resistance Bands", "Rowing Machines", "Cardio Kettlebells", "Battle Ropes", "Bicep Curl Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Calf Raise Machine", "Cable Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Shrug Machine", "Cable Back Extension Machine", "Yoga Mats", "Foam Rollers", "Sledgehammers", "Slam Balls", "Agility Poles", "Aqua Fitness Equipment", "Dance Fitness Equipment", "Yoga Straps"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Workout Programs", "Audio/Visual Entertainment", "Smoothie Bar", "Group Fitness Classes", "Water Stations", "Body Composition Analysis", "Fresh Fruit Bar", "Hair Dryers", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "638f1717-3dc4-41e1-a5dd-b42ff4e0f254",
    vesselId: "fv--explorer",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(323) 272-8357",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Arc Trainers", "Boxing Equipment", "StairMaster", "Cardio Gliders", "Rowing Machines", "Cardio Kettlebells", "Recumbent Bikes", "Spin Bikes", "Battle Ropes", "Cable Single Arm Woodchopper Machine", "Cable Ab Crunch Machine", "Cable Machines", "Bench Press", "Smith Machine", "Weight Machines", "Cable Back Extension Machine", "Plate Loaded Machines", "Power Rack", "Cable Plank Machine", "Cable Bicep Curl Machine", "Seated Row Machine", "Speed Bands", "Speed Cones", "Medicine Balls", "Speed Hurdles", "Foam Rollers", "Stability Balls", "Sledgehammers", "Agility Markers", "HydroMassage Beds", "Float Tanks"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Smoothie Bar", "Fitness Tracking", "Personal Training Sessions", "Audio/Visual Entertainment", "Toiletries", "Body Composition Analysis", "Locker Rentals", "Equipment Orientation", "Fitness Consultations", "Protein Shakes", "Group Fitness Classes", "Towel Service"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "c918d528-530e-497c-9ca4-dfee38107b71",
    vesselId: "ly-quebec-city-voyager",
    name: "LY Quebec City Voyager Fitness Center",
    description: "LY Quebec City Voyager Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Quebec City. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(765) 454-4891",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Boxing Equipment", "Battle Ropes", "Recumbent Bikes", "Treadmills", "VersaClimber", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Weight Machines", "Cable Upright Row Machine", "Cable Face Pull Machine", "Barbells", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Squat Machine", "Cable Russian Twist Machine", "Speed Bands", "Agility Markers", "Medicine Balls", "Speed Ladders", "Agility Ladders", "Yoga Equipment", "Infrared Sauna"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist", "Aqua Fitness Instructor"],
    amenities: ["Fitness Consultations", "Audio/Visual Entertainment", "Hair Dryers", "Workout Programs", "Fresh Fruit Bar", "Group Fitness Classes", "Body Composition Analysis", "Personal Training Sessions", "Nutrition Counseling", "Water Stations", "Fitness Tracking", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "b65c9ffb-f803-42f6-9e8e-d0175c8d790b",
    vesselId: "rms--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(110) 324-2199",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Rowing Machines", "SkiErg", "Recumbent Bikes", "Elliptical Machines", "Air Bikes", "StairMaster", "Treadmills", "Barbells", "Cable Lunge Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Hip Thrust Machine", "Weight Machines", "Plate Loaded Machines", "TRX Suspension Trainers", "Medicine Balls", "BOSU Balls", "Agility Poles", "Tire Flips", "Speed Parachutes", "Yoga Equipment", "Float Tanks", "Yoga Bolsters"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist", "Youth Fitness Specialist", "Spinning Instructor"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Personal Training Sessions", "Equipment Orientation", "Body Composition Analysis", "Protein Shakes", "Fresh Fruit Bar", "Toiletries", "Workout Programs", "Locker Rentals", "Smoothie Bar"],
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "fd400753-fe7b-4600-bf61-8b8c95f9eda9",
    vesselId: "cs-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Quebec City. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(222) 680-7568",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Agility Hurdles", "Cardio Punching Bags", "Rowing Machines", "Battle Ropes", "Boxing Equipment", "VersaClimber", "Cardio Resistance Bands", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Chest Press Machine", "Cable Single Arm Calf Raise Machine", "Power Rack", "Cable Upright Row Machine", "Cable Single Arm Row Machine", "Cable Single Arm Lunge Machine", "Abdominal Crunch Machine", "Cable Single Arm Shoulder Press Machine", "Stability Balls", "Foam Rollers", "Slam Balls", "Speed Parachutes", "Sandbags", "Agility Cones", "Speed Hurdles", "Agility Dots", "Pilates Reformers", "Infrared Therapy", "Float Tanks"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Hair Dryers", "Personal Training Sessions", "Water Stations", "Locker Rentals", "Fitness Tracking", "Nutrition Counseling", "Body Composition Analysis", "Equipment Orientation", "Audio/Visual Entertainment", "Workout Programs", "Smoothie Bar", "Towel Service"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
    id: "e9c7b4ba-f05d-4d99-b745-c623c7d40c9a",
    vesselId: "nb--gale",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the NB  Gale. Stay active and healthy while cruising the waters near Quebec City with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(481) 246-1445",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Stationary Bikes", "Cardio Medicine Balls", "Boxing Equipment", "Air Bikes", "Spin Bikes", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Barbells", "TRX Suspension Trainers", "Speed Hurdles", "Speed Sleds", "Agility Markers", "Agility Ladders", "BOSU Balls", "Battle Ropes", "Yoga Mats", "Spinning Bikes", "Recovery Tools", "Compression Therapy"],
    personalTrainers: ["Spinning Instructor", "Youth Fitness Specialist", "Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Towel Service", "Water Stations", "Fresh Fruit Bar", "Personal Training Sessions", "Toiletries", "Group Fitness Classes", "Fitness Consultations", "Workout Programs", "Body Composition Analysis", "Nutrition Counseling", "Locker Rentals"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    isPopular: false
  }
];
