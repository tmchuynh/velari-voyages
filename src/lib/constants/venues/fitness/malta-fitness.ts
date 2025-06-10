// Fitness center venues data for Malta
// This file contains fitness center and wellness facility information for cruise vessels operating from Malta
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const maltaFitnessCenters: FitnessCenter[] = [
  {
    id: "49a04ce3-cdcc-4b61-8435-50e78b5d2d45",
    vesselId: "nx--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(715) 422-3508",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "VersaClimber", "Agility Hurdles", "Cardio Gliders", "Recumbent Bikes", "SkiErg", "Boxing Equipment", "Cardio Step Platforms", "Cardio Punching Bags", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Calf Raise Machine", "Cable Face Pull Machine", "Cable Lunge Machine", "Smith Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Glute Kickback Machine", "Bench Press", "Cable Single Arm Single Leg Glute Kickback Machine", "Foam Rollers", "Agility Dots", "Speed Bands", "Sandbags", "Pilates Reformers", "Barre Equipment", "Yoga Blocks"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor", "Youth Fitness Specialist"],
    amenities: ["Fitness Tracking", "Towel Service", "Hair Dryers", "Nutrition Counseling", "Locker Rentals", "Body Composition Analysis", "Audio/Visual Entertainment", "Group Fitness Classes", "Toiletries", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "d4d8ad48-833f-44d9-b835-61bcabc69eb2",
    vesselId: "my-malta-voyager",
    name: "MY Malta Voyager Fitness Center",
    description: "Discover wellness at sea with MY Malta Voyager Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(345) 494-2298",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Rowing Machines", "Stationary Bikes", "Air Bikes", "Punching Bags", "Battle Ropes", "Treadmills", "SkiErg", "VersaClimber", "StairMaster", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Shrug Machine", "Tire Flips", "Sledgehammers", "Balance Boards", "Kettlebells", "Kickboxing Equipment", "Yoga Straps"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Equipment Orientation", "Toiletries", "Protein Shakes", "Personal Training Sessions", "Smoothie Bar", "Fresh Fruit Bar", "Group Fitness Classes", "Fitness Tracking", "Water Stations", "Audio/Visual Entertainment"],
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
    hasChildcareServices: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "ccbfae05-72ad-4c89-b07d-a39e7a55f982",
    vesselId: "rv--of-the-deep",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the RV  of the Deep. Stay active and healthy while cruising the waters near Malta with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(290) 459-8896",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Boxing Equipment", "Treadmills", "SkiErg", "Elliptical Machines", "Cardio Medicine Balls", "Cardio Kickboxing Bags", "Smith Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Leg Curl Machine", "Speed Hurdles", "Speed Sleds", "Foam Rollers", "Plyo Boxes", "Agility Cones", "Speed Bands", "Sledgehammers", "Compression Therapy", "Yoga Bolsters", "Spinning Bikes"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Water Stations", "Group Fitness Classes", "Smoothie Bar", "Personal Training Sessions", "Equipment Orientation", "Fitness Consultations", "Body Composition Analysis", "Workout Programs", "Audio/Visual Entertainment", "Toiletries", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "3e0bae29-0f0b-4de2-adbe-507da1e05329",
    vesselId: "ps-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(244) 214-1289",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Air Bikes", "Stationary Bikes", "Battle Ropes", "Cardio Resistance Bands", "Cardio Medicine Balls", "Recumbent Bikes", "Jump Ropes", "Cable Single Arm Face Pull Machine", "Bench Press", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Power Rack", "Cable Single Arm Single Leg Ab Crunch Machine", "Smith Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Kettlebells", "Speed Cords", "Slam Balls", "Yoga Mats", "Speed Sleds", "Speed Harnesses", "Barre Equipment", "Massage Chairs"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Personal Training Sessions", "Fitness Tracking", "Fitness Consultations", "Water Stations", "Equipment Orientation", "Fresh Fruit Bar", "Protein Shakes", "Workout Programs", "Locker Rentals", "Group Fitness Classes", "Toiletries"],
    is24Hours: false,
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
    isPopular: true
  },
  {
    id: "3d4ee26d-4937-4949-af09-f5798f70c348",
    vesselId: "rms--gale",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the RMS  Gale. Stay active and healthy while cruising the waters near Malta with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(466) 265-3477",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Recumbent Bikes", "Cardio Kickboxing Bags", "StairMaster", "Agility Hurdles", "Cardio Step Platforms", "VersaClimber", "SkiErg", "Cardio Resistance Bands", "Spin Bikes", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Russian Twist Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Face Pull Machine", "Shoulder Press Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Shrug Machine", "Cable Single Arm Plank Machine", "Foam Rollers", "Speed Bands", "Resistance Bands", "Sledgehammers", "Speed Parachutes", "Pilates Reformers", "Boxing Equipment"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor", "Yoga Instructor", "Strength and Conditioning Coach"],
    amenities: ["Water Stations", "Personal Training Sessions", "Workout Programs", "Fitness Consultations", "Body Composition Analysis", "Protein Shakes", "Locker Rentals", "Fresh Fruit Bar", "Towel Service"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
    id: "bad5fafc-cfe3-46cc-ac08-ae7865bfe75c",
    vesselId: "cs--explorer",
    name: "CS  Explorer Fitness Center",
    description: "CS  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Malta. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(105) 356-4047",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Arc Trainers", "Cardio Step Platforms", "Elliptical Machines", "SkiErg", "Battle Ropes", "StairMaster", "Punching Bags", "Cardio Resistance Bands", "Treadmills", "Chest Fly Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Woodchopper Machine", "Leg Press Machine", "Free Weights", "Cable Calf Raise Machine", "Seated Row Machine", "Cable Single Arm Shoulder Press Machine", "Cable Squat Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Abdominal Crunch Machine", "Pull-up Station", "Kettlebells", "Stability Balls", "Agility Dots", "Speed Ladders", "Speed Cords", "CrossFit Equipment", "Functional Training Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Strength Training Specialist", "Pilates Instructor", "Spinning Instructor"],
    amenities: ["Smoothie Bar", "Toiletries", "Protein Shakes", "Group Fitness Classes", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Nutrition Counseling", "Towel Service", "Workout Programs"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "05b28822-7f69-4213-ba87-cf5fa3cc8c69",
    vesselId: "ps-malta-voyager",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the PS Malta Voyager. Stay active and healthy while cruising the waters near Malta with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(546) 172-9226",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Treadmills", "Cardio Step Platforms", "Cardio Resistance Bands", "Cardio Gliders", "Punching Bags", "Cardio Punching Bags", "Recumbent Bikes", "Cable Lunge Machine", "Cable Single Arm Woodchopper Machine", "Cable Back Extension Machine", "Weight Machines", "Cable Machines", "Cable Hip Thrust Machine", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Barbells", "Bicep Curl Machine", "Seated Row Machine", "Cable Single Arm Single Leg Plank Machine", "Balance Boards", "Sandbags", "Speed Bands", "Agility Poles", "Speed Parachutes", "Resistance Bands", "BOSU Balls", "Speed Cones", "Yoga Wheels", "CrossFit Equipment", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Corrective Exercise Specialist", "Strength and Conditioning Coach"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Audio/Visual Entertainment", "Smoothie Bar", "Workout Programs", "Toiletries", "Fresh Fruit Bar", "Body Composition Analysis", "Protein Shakes", "Hair Dryers", "Locker Rentals"],
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
    hasHealthScreenings: true,
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "4aa52b2e-aea7-498d-93be-77bf2b2e8254",
    vesselId: "rv--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the RV  of the Deep. Stay active and healthy while cruising the waters near Malta with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(177) 502-3959",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "VersaClimber", "Cardio Punching Bags", "StairMaster", "Cardio Kickboxing Bags", "Air Bikes", "Cardio Step Platforms", "Battle Ropes", "Cardio Gliders", "Cable Single Arm Single Leg Reverse Fly Machine", "Dumbbells", "Cable Single Arm Single Leg Pallof Press Machine", "Bench Press", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Bicep Curl Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Agility Hurdles", "Speed Harnesses", "Speed Sleds", "Stability Balls", "Speed Parachutes", "Sandbags", "Recovery Tools"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach"],
    amenities: ["Personal Training Sessions", "Workout Programs", "Hair Dryers", "Smoothie Bar", "Equipment Orientation", "Audio/Visual Entertainment", "Locker Rentals", "Toiletries", "Towel Service", "Protein Shakes"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "e5ee361b-9a04-4e15-ab24-f4e2cda75dae",
    vesselId: "hms-the--mariner",
    name: "HMS The  Mariner Fitness Center",
    description: "HMS The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(605) 336-2673",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "StairMaster", "Treadmills", "SkiErg", "Jump Ropes", "Spin Bikes", "Boxing Equipment", "Elliptical Machines", "Cardio Resistance Bands", "Cardio Step Platforms", "Cable Shrug Machine", "Cable Single Arm Lunge Machine", "Chest Press Machine", "Cable Lunge Machine", "Smith Machine", "Functional Trainers", "Cable Deadlift Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Plyo Boxes", "TRX Suspension Trainers", "Speed Parachutes", "Foam Rollers", "Agility Markers", "Speed Hurdles", "Aqua Fitness Equipment", "Yoga Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Fresh Fruit Bar", "Group Fitness Classes", "Personal Training Sessions", "Body Composition Analysis", "Protein Shakes", "Smoothie Bar", "Water Stations", "Audio/Visual Entertainment", "Fitness Tracking", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "0726c6e1-b340-4f29-a188-1690e8e83573",
    vesselId: "mv--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Malta. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(922) 434-7405",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Recumbent Bikes", "Cardio Punching Bags", "Cardio Step Platforms", "Punching Bags", "Stationary Bikes", "Boxing Equipment", "Treadmills", "Rowing Machines", "Bench Press", "Cable Reverse Fly Machine", "Cable Single Arm Upright Row Machine", "Free Weights", "Calf Raise Machine", "Cable Row Machine", "Shoulder Press Machine", "Bicep Curl Machine", "Speed Cords", "Resistance Bands", "Agility Poles", "Slam Balls", "TRX Suspension Trainers", "Yoga Blocks", "Functional Training Equipment"],
    personalTrainers: ["Spinning Instructor", "Strength Training Specialist", "Corrective Exercise Specialist"],
    amenities: ["Group Fitness Classes", "Protein Shakes", "Hair Dryers", "Personal Training Sessions", "Audio/Visual Entertainment", "Toiletries", "Water Stations", "Fitness Tracking", "Workout Programs", "Equipment Orientation", "Fitness Consultations"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  }
];
