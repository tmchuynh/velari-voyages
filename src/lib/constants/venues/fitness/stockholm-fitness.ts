// Fitness center venues data for Stockholm
// This file contains fitness center and wellness facility information for cruise vessels operating from Stockholm
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const stockholmFitnessCenters: FitnessCenter[] = [
  {
    id: "c642d703-22c9-4197-b113-230a6d5a4b1b",
    vesselId: "ss--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Stockholm. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(840) 582-8571",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "SkiErg", "Rowing Machines", "Spin Bikes", "Punching Bags", "Treadmills", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Hip Thrust Machine", "Functional Trainers", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Ab Crunch Machine", "Dumbbells", "Smith Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Tire Flips", "Speed Cords", "Kettlebells", "Sledgehammers", "Stability Balls", "Yoga Mats", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Spinning Instructor", "Strength Training Specialist"],
    amenities: ["Towel Service", "Group Fitness Classes", "Fitness Consultations", "Fresh Fruit Bar", "Nutrition Counseling", "Water Stations", "Equipment Orientation", "Workout Programs", "Audio/Visual Entertainment"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "da51d04a-18d3-4257-8ea2-806bbf56f2ac",
    vesselId: "my-stockholm-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(560) 472-6335",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "SkiErg", "Cardio Resistance Bands", "Cardio Medicine Balls", "Boxing Equipment", "Battle Ropes", "Treadmills", "Cardio Step Platforms", "Pull-up Station", "Cable Single Arm Chest Press Machine", "Dumbbells", "Cable Single Arm Pallof Press Machine", "Smith Machine", "Cable Upright Row Machine", "Leg Extension Machine", "Free Weights", "Foam Rollers", "Speed Harnesses", "Speed Ladders", "Stability Balls", "Speed Resistors", "Sledgehammers", "Agility Hurdles", "Speed Sleds", "Pilates Reformers", "Yoga Wheels"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor"],
    amenities: ["Personal Training Sessions", "Hair Dryers", "Group Fitness Classes", "Workout Programs", "Water Stations", "Fitness Tracking", "Smoothie Bar", "Audio/Visual Entertainment", "Protein Shakes", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "942714ac-7c72-41e0-9dc9-9d6da6f5bf11",
    vesselId: "mv--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Stockholm. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(763) 423-1297",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "SkiErg", "Arc Trainers", "Battle Ropes", "StairMaster", "Cardio Medicine Balls", "Spin Bikes", "Cardio Resistance Bands", "Cardio Punching Bags", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Tricep Pushdown Machine", "Cable Bicep Curl Machine", "Chest Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Agility Hurdles", "Speed Sleds", "Medicine Balls", "Kettlebells", "Weighted Vests", "Yoga Wheels", "Functional Training Equipment", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach"],
    amenities: ["Personal Training Sessions", "Locker Rentals", "Smoothie Bar", "Toiletries", "Fresh Fruit Bar", "Equipment Orientation", "Group Fitness Classes", "Body Composition Analysis", "Fitness Consultations", "Audio/Visual Entertainment", "Water Stations", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "1f8235b1-22fa-46d2-a171-e2eaf27ba752",
    vesselId: "rv-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the RV The  Mariner. Stay active and healthy while cruising the waters near Stockholm with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(659) 666-3854",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Stationary Bikes", "Elliptical Machines", "Cardio Gliders", "Cardio Step Platforms", "Air Bikes", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Lunge Machine", "Cable Row Machine", "Dumbbells", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Shrug Machine", "Cable Upright Row Machine", "Speed Sleds", "Battle Ropes", "Kettlebells", "Agility Hurdles", "Yoga Mats", "Weighted Vests", "Sledgehammers", "Agility Poles", "HydroMassage Beds", "Cryotherapy Chambers"],
    personalTrainers: ["Aqua Fitness Instructor", "Group Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Nutrition Counseling", "Fitness Tracking", "Smoothie Bar", "Protein Shakes", "Hair Dryers", "Fresh Fruit Bar", "Personal Training Sessions", "Fitness Consultations", "Equipment Orientation", "Group Fitness Classes"],
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
    id: "dcf161a1-15ab-4567-a39a-782807e89f42",
    vesselId: "nb--gale",
    name: "NB  Gale Fitness Center",
    description: "NB  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Stockholm. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(108) 627-8948",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Cardio Punching Bags", "Cardio Resistance Bands", "Cardio Kickboxing Bags", "Cardio Step Platforms", "Recumbent Bikes", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Smith Machine", "Seated Row Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Squat Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Lunge Machine", "Free Weights", "Plyo Boxes", "Agility Poles", "Speed Cones", "Sledgehammers", "Speed Harnesses", "Kettlebells", "Medicine Balls", "Jump Boxes", "Float Tanks", "Kickboxing Equipment", "Yoga Straps"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fresh Fruit Bar", "Fitness Tracking", "Towel Service", "Equipment Orientation", "Personal Training Sessions", "Locker Rentals", "Workout Programs", "Body Composition Analysis", "Group Fitness Classes", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
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
    id: "d6546da9-b455-4115-92fc-4e7689c988fa",
    vesselId: "rms--explorer",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(460) 668-8361",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Boxing Equipment", "Treadmills", "Agility Hurdles", "Punching Bags", "Cardio Kettlebells", "Battle Ropes", "Rowing Machines", "Functional Trainers", "Smith Machines", "Cable Single Arm Shoulder Press Machine", "Cable Deadlift Machine", "Shoulder Press Machine", "Pull-up Station", "Plate Loaded Machines", "Cable Plank Machine", "Cable Tricep Pushdown Machine", "Calf Raise Machine", "Cable Lunge Machine", "Cable Lateral Raise Machine", "Speed Cones", "Agility Poles", "Speed Harnesses", "Yoga Mats", "Medicine Balls", "Speed Cords", "Dance Fitness Equipment", "Pilates Reformers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Senior Fitness Specialist", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Fitness Consultations", "Group Fitness Classes", "Fresh Fruit Bar", "Workout Programs", "Toiletries", "Equipment Orientation", "Towel Service", "Body Composition Analysis"],
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
    id: "055769c6-6d16-4293-b72b-4a1599c6dbdc",
    vesselId: "rv-stockholm-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(209) 378-9614",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Cardio Gliders", "Punching Bags", "Stationary Bikes", "Treadmills", "Boxing Equipment", "StairMaster", "Rowing Machines", "Free Weights", "Cable Russian Twist Machine", "Cable Bicep Curl Machine", "Tricep Extension Machine", "Leg Press Machine", "Cable Squat Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Deadlift Machine", "Cable Woodchopper Machine", "Cable Single Arm Shoulder Press Machine", "Agility Markers", "Speed Sleds", "Foam Rollers", "Speed Cords", "Battle Ropes", "Sandbags", "Plyo Boxes", "Speed Cones", "Spinning Bikes", "TRX Suspension Trainers"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Body Composition Analysis", "Hair Dryers", "Fitness Tracking", "Towel Service", "Water Stations", "Personal Training Sessions", "Fitness Consultations", "Fresh Fruit Bar"],
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
    id: "ecd99e17-9d77-4121-a262-b28447464351",
    vesselId: "mv--of-the-deep",
    name: "Stockholm Fitness Center",
    description: "Stockholm Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(545) 647-1405",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Arc Trainers", "Cardio Medicine Balls", "Cardio Resistance Bands", "Cardio Kickboxing Bags", "Boxing Equipment", "SkiErg", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Bench Press", "Cable Single Arm Single Leg Squat Machine", "Cable Lateral Raise Machine", "Cable Single Arm Calf Raise Machine", "Cable Russian Twist Machine", "Cable Single Arm Woodchopper Machine", "Agility Ladders", "Yoga Mats", "Kettlebells", "Agility Poles", "Resistance Bands", "Medicine Balls", "Speed Ladders", "Agility Hurdles", "Yoga Equipment", "Kickboxing Equipment", "Dance Fitness Equipment"],
    personalTrainers: ["Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Protein Shakes", "Locker Rentals", "Water Stations", "Fresh Fruit Bar", "Fitness Tracking", "Body Composition Analysis", "Audio/Visual Entertainment", "Fitness Consultations"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "15e39db6-fe20-4c93-991b-44ad04b15a71",
    vesselId: "cs-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the CS The  Mariner. Stay active and healthy while cruising the waters near Stockholm with our state-of-the-art fitness facilities. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(903) 686-4108",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Treadmills", "VersaClimber", "Agility Hurdles", "Elliptical Machines", "Cardio Medicine Balls", "Stationary Bikes", "Cardio Resistance Bands", "Cardio Gliders", "Cable Single Arm Single Leg Shrug Machine", "Leg Extension Machine", "Cable Squat Machine", "Pull-up Station", "Lat Pulldown", "Cable Single Arm Tricep Extension Machine", "Shoulder Press Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Woodchopper Machine", "TRX Suspension Trainers", "Speed Bands", "Battle Ropes", "Plyo Boxes", "Weighted Vests", "Pilates Reformers", "Kickboxing Equipment", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Toiletries", "Smoothie Bar", "Personal Training Sessions", "Group Fitness Classes", "Nutrition Counseling", "Hair Dryers", "Fitness Tracking", "Body Composition Analysis"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "06087f71-03f3-40c1-b156-393be1e849c5",
    vesselId: "hms--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Stockholm. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(745) 565-8329",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Spin Bikes", "Cardio Punching Bags", "Treadmills", "Elliptical Machines", "Stationary Bikes", "Cable Single Arm Squat Machine", "Free Weights", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Hip Thrust Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Leg Extension Machine", "Cable Single Arm Woodchopper Machine", "Cable Woodchopper Machine", "TRX Suspension Trainers", "Balance Boards", "Speed Bands", "Speed Cones", "Yoga Mats", "Stability Balls", "Kettlebells", "Boxing Equipment", "Cryotherapy Chamber"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Equipment Orientation", "Fresh Fruit Bar", "Protein Shakes", "Toiletries", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  }
];
