// Fitness center venues data for New Orleans
// This file contains fitness center and wellness facility information for cruise vessels operating from New Orleans
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const newOrleansFitnessCenters: FitnessCenter[] = [
  {
    id: "206867c1-eb30-474c-bd1a-c4128664b39c",
    vesselId: "rv--explorer",
    name: "New Orleans Fitness Center",
    description: "New Orleans Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around New Orleans. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(527) 852-8045",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "StairMaster", "Cardio Step Platforms", "Stationary Bikes", "Cardio Resistance Bands", "Cardio Medicine Balls", "Air Bikes", "Recumbent Bikes", "Punching Bags", "Spin Bikes", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Upright Row Machine", "Seated Row Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Free Weights", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Face Pull Machine", "Agility Dots", "Speed Cones", "Agility Poles", "Plyo Boxes", "Medicine Balls", "Foam Rollers", "Tire Flips", "Yoga Equipment", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Nutrition Counseling", "Locker Rentals", "Fresh Fruit Bar", "Equipment Orientation", "Water Stations", "Fitness Tracking", "Audio/Visual Entertainment", "Protein Shakes", "Body Composition Analysis", "Personal Training Sessions", "Hair Dryers"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "848e0260-2577-470b-b8db-40911e91808e",
    vesselId: "ly-new-orleans-voyager",
    name: "LY New Orleans Voyager Fitness Center",
    description: "Discover wellness at sea with LY New Orleans Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(637) 399-1676",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "StairMaster", "Cardio Medicine Balls", "Recumbent Bikes", "Cardio Punching Bags", "Rowing Machines", "Cardio Resistance Bands", "Cardio Step Platforms", "Battle Ropes", "Barbells", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Lunge Machine", "Cable Deadlift Machine", "Seated Row Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Face Pull Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Upright Row Machine", "Kettlebells", "Medicine Balls", "Agility Hurdles", "Plyo Boxes", "Speed Cords", "Speed Parachutes", "Yoga Equipment", "Spinning Bikes", "Barre Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Strength and Conditioning Coach", "Spinning Instructor"],
    amenities: ["Water Stations", "Towel Service", "Personal Training Sessions", "Group Fitness Classes", "Audio/Visual Entertainment", "Hair Dryers", "Locker Rentals", "Workout Programs", "Fitness Tracking", "Fitness Consultations", "Nutrition Counseling", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    isPopular: false
  },
  {
    id: "fda27828-39a2-4634-a94a-1be23f77b8c5",
    vesselId: "cs--of-the-deep",
    name: "CS  of the Deep Fitness Center",
    description: "Discover wellness at sea with CS  of the Deep Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(546) 220-4472",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "SkiErg", "Cardio Punching Bags", "Treadmills", "Cardio Step Platforms", "Rowing Machines", "Cardio Kickboxing Bags", "Punching Bags", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Shrug Machine", "Cable Single Arm Reverse Fly Machine", "Yoga Mats", "Plyo Boxes", "Foam Rollers", "Jump Boxes", "Speed Cords", "Speed Ladders", "Balance Boards", "Dance Fitness Equipment", "Spinning Bikes", "Functional Training Equipment"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Equipment Orientation", "Fitness Tracking", "Hair Dryers", "Group Fitness Classes", "Nutrition Counseling", "Personal Training Sessions", "Toiletries", "Fresh Fruit Bar", "Fitness Consultations", "Locker Rentals"],
    is24Hours: true,
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
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "0012253f-5f79-4735-a7d8-7e89d44b6073",
    vesselId: "fv-the--mariner",
    name: "New Orleans Fitness Center",
    description: "Discover wellness at sea with New Orleans Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(302) 790-9348",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Elliptical Machines", "Air Bikes", "Treadmills", "Spin Bikes", "Rowing Machines", "Cardio Step Platforms", "Cardio Punching Bags", "StairMaster", "Punching Bags", "Leg Extension Machine", "Leg Press Machine", "Cable Reverse Fly Machine", "Free Weights", "Cable Single Arm Tricep Extension Machine", "Dumbbells", "Cable Plank Machine", "Cable Upright Row Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Back Extension Machine", "Cable Lunge Machine", "Weight Machines", "TRX Suspension Trainers", "Speed Bands", "Agility Cones", "Slam Balls", "Speed Harnesses", "Stability Balls", "HydroMassage Beds", "Kickboxing Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength and Conditioning Coach", "Group Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Smoothie Bar", "Towel Service", "Fitness Tracking", "Locker Rentals", "Toiletries", "Audio/Visual Entertainment", "Water Stations", "Protein Shakes", "Equipment Orientation", "Body Composition Analysis", "Personal Training Sessions"],
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
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "cb910b42-bafd-471f-8172-be9f776a0906",
    vesselId: "rv--gale",
    name: "New Orleans Fitness Center",
    description: "Welcome to New Orleans Fitness Center, your premier wellness destination aboard the RV  Gale. Stay active and healthy while cruising the waters near New Orleans with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(548) 619-4685",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "Treadmills", "Rowing Machines", "Cardio Kettlebells", "Battle Ropes", "Jump Ropes", "Cable Upright Row Machine", "Barbells", "Seated Row Machine", "Leg Press Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Crossover Machine", "Cable Single Arm Bicep Curl Machine", "Smith Machine", "Bench Press", "Bicep Curl Machine", "TRX Suspension Trainers", "Slam Balls", "Speed Resistors", "Yoga Mats", "Agility Cones", "Sledgehammers", "Infrared Sauna", "Yoga Wheels"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Water Stations", "Group Fitness Classes", "Protein Shakes", "Equipment Orientation", "Fresh Fruit Bar", "Locker Rentals", "Workout Programs", "Fitness Consultations", "Towel Service", "Fitness Tracking", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "c2c2c9ba-ebc7-47d1-8b2a-bb18a1b2b330",
    vesselId: "ps--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(648) 201-7439",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Kickboxing Bags", "Cardio Step Platforms", "Elliptical Machines", "Cardio Medicine Balls", "Cardio Gliders", "Recumbent Bikes", "Rowing Machines", "Cardio Resistance Bands", "Cable Single Arm Lunge Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Shrug Machine", "Plyo Boxes", "Stability Balls", "Foam Rollers", "Agility Ladders", "Sandbags", "Yoga Mats", "Kickboxing Equipment", "Massage Chairs"],
    personalTrainers: ["Youth Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Audio/Visual Entertainment", "Fitness Tracking", "Body Composition Analysis", "Water Stations", "Towel Service", "Personal Training Sessions", "Toiletries", "Group Fitness Classes", "Protein Shakes", "Hair Dryers", "Nutrition Counseling", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "2c0ad9ba-d384-41e6-869c-8a2b32f8d038",
    vesselId: "hms-new-orleans-voyager",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the HMS New Orleans Voyager. Stay active and healthy while cruising the waters near New Orleans with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(866) 473-7925",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Recumbent Bikes", "Cardio Kettlebells", "StairMaster", "Rowing Machines", "Punching Bags", "SkiErg", "Spin Bikes", "Free Weights", "Cable Single Arm Shoulder Press Machine", "Cable Ab Crunch Machine", "Cable Russian Twist Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Chest Press Machine", "Cable Lateral Raise Machine", "Cable Pallof Press Machine", "Leg Curl Machine", "Foam Rollers", "Speed Ladders", "Speed Parachutes", "Sledgehammers", "Agility Poles", "Speed Bands", "Resistance Bands", "Kettlebells", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist", "Fitness Nutrition Specialist", "Strength and Conditioning Coach"],
    amenities: ["Body Composition Analysis", "Equipment Orientation", "Hair Dryers", "Fresh Fruit Bar", "Towel Service", "Water Stations", "Audio/Visual Entertainment", "Protein Shakes", "Locker Rentals", "Fitness Consultations", "Workout Programs"],
    is24Hours: false,
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
    isPopular: false
  },
  {
    id: "922107c7-8186-4e34-a944-4de0841523ef",
    vesselId: "ly--of-the-deep",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(292) 979-9152",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Punching Bags", "Jump Ropes", "Boxing Equipment", "Arc Trainers", "Cardio Step Platforms", "VersaClimber", "Cable Deadlift Machine", "Cable Upright Row Machine", "Cable Machines", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Plank Machine", "Kettlebells", "Jump Boxes", "Agility Cones", "Stability Balls", "Balance Boards", "Foam Rollers", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Youth Fitness Specialist"],
    amenities: ["Audio/Visual Entertainment", "Group Fitness Classes", "Towel Service", "Fitness Consultations", "Hair Dryers", "Fitness Tracking", "Water Stations", "Toiletries", "Smoothie Bar", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
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
    id: "25806a7b-0a53-434f-92bd-6421ffc3f366",
    vesselId: "hms-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(902) 738-3087",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Battle Ropes", "Cardio Kickboxing Bags", "Stationary Bikes", "Air Bikes", "Agility Hurdles", "Cardio Medicine Balls", "VersaClimber", "Recumbent Bikes", "Arc Trainers", "Cable Single Arm Calf Raise Machine", "Smith Machines", "Cable Back Extension Machine", "Cable Squat Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Chest Press Machine", "Cable Hip Thrust Machine", "Dumbbells", "Foam Rollers", "Medicine Balls", "Speed Resistors", "Sandbags", "Agility Poles", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Hair Dryers", "Fitness Consultations", "Locker Rentals", "Toiletries", "Body Composition Analysis", "Protein Shakes", "Nutrition Counseling", "Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions", "Audio/Visual Entertainment"],
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "b51f7bac-38b8-4139-b5f5-a32b2f959a19",
    vesselId: "ms--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around New Orleans. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(320) 860-9879",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Arc Trainers", "Jump Ropes", "StairMaster", "Rowing Machines", "Cardio Resistance Bands", "Punching Bags", "Boxing Equipment", "Battle Ropes", "Cardio Gliders", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Tricep Pushdown Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Reverse Fly Machine", "Leg Curl Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Speed Harnesses", "BOSU Balls", "Speed Sleds", "Speed Hurdles", "Agility Ladders", "Slam Balls", "CrossFit Equipment"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Strength and Conditioning Coach"],
    amenities: ["Equipment Orientation", "Nutrition Counseling", "Towel Service", "Protein Shakes", "Water Stations", "Hair Dryers", "Smoothie Bar", "Workout Programs"],
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
    hasChildcareServices: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  }
];
