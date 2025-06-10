// Fitness center venues data for Skagway
// This file contains fitness center and wellness facility information for cruise vessels operating from Skagway
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const skagwayFitnessCenters: FitnessCenter[] = [
  {
    id: "f5754088-47bf-48d9-bf93-22c5fcaf0c9e",
    vesselId: "ly--explorer",
    name: "LY  Explorer Fitness Center",
    description: "LY  Explorer Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(742) 320-5168",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Elliptical Machines", "Cardio Kettlebells", "Treadmills", "Cardio Gliders", "Arc Trainers", "VersaClimber", "Stationary Bikes", "Cable Single Arm Single Leg Squat Machine", "Free Weights", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Back Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Smith Machine", "Kettlebells", "Speed Harnesses", "Speed Ladders", "Agility Markers", "Speed Cords", "Speed Resistors", "Jump Boxes", "TRX Suspension Trainers", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Consultations", "Hair Dryers", "Smoothie Bar", "Body Composition Analysis", "Locker Rentals", "Group Fitness Classes", "Equipment Orientation", "Toiletries", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "e480a664-6109-4213-8251-19e6bdbdf213",
    vesselId: "rv-skagway-voyager",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the RV Skagway Voyager. Stay active and healthy while cruising the waters near Skagway with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(701) 490-3846",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Rowing Machines", "Boxing Equipment", "Spin Bikes", "Arc Trainers", "Elliptical Machines", "Cardio Step Platforms", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Free Weights", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Abdominal Crunch Machine", "Kettlebells", "Slam Balls", "Foam Rollers", "Agility Markers", "Weighted Vests", "Medicine Balls", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Aqua Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Water Stations", "Smoothie Bar", "Group Fitness Classes", "Toiletries", "Hair Dryers", "Fitness Tracking", "Locker Rentals", "Audio/Visual Entertainment", "Body Composition Analysis", "Protein Shakes", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "2bd3e447-978a-4d8d-b69a-050db1af3e53",
    vesselId: "hms--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the HMS  of the Deep. Stay active and healthy while cruising the waters near Skagway with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(553) 869-6096",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Agility Hurdles", "Cardio Punching Bags", "Cardio Kickboxing Bags", "Stationary Bikes", "Air Bikes", "Rowing Machines", "Cable Single Arm Single Leg Tricep Extension Machine", "Leg Curl Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Upright Row Machine", "Abdominal Crunch Machine", "Plate Loaded Machines", "Speed Bands", "Stability Balls", "Agility Markers", "Agility Cones", "Sledgehammers", "Speed Resistors", "Massage Chairs", "Stretching Stations", "Yoga Straps"],
    personalTrainers: ["Corrective Exercise Specialist", "Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Workout Programs", "Hair Dryers", "Fresh Fruit Bar", "Nutrition Counseling", "Towel Service", "Water Stations", "Personal Training Sessions", "Audio/Visual Entertainment"],
    is24Hours: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "ec7b24cb-c32e-4a39-be75-953e72943bb5",
    vesselId: "sv-the--mariner",
    name: "Skagway Fitness Center",
    description: "Welcome to Skagway Fitness Center, your premier wellness destination aboard the SV The  Mariner. Stay active and healthy while cruising the waters near Skagway with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(186) 622-9391",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Boxing Equipment", "Cardio Kettlebells", "Treadmills", "Cardio Resistance Bands", "SkiErg", "Cardio Medicine Balls", "Elliptical Machines", "Air Bikes", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Plank Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Reverse Fly Machine", "Chest Press Machine", "Slam Balls", "Speed Cones", "Medicine Balls", "Resistance Bands", "Yoga Mats", "Float Tanks", "TRX Suspension Trainers", "HydroMassage Beds"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Fitness Nutrition Specialist", "Youth Fitness Specialist"],
    amenities: ["Fitness Consultations", "Hair Dryers", "Group Fitness Classes", "Locker Rentals", "Smoothie Bar", "Toiletries", "Workout Programs", "Protein Shakes", "Audio/Visual Entertainment", "Personal Training Sessions", "Body Composition Analysis", "Fitness Tracking"],
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
    hasNutritionCounseling: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "4217b45f-93df-40bb-9a3a-ad012098fe99",
    vesselId: "nx--gale",
    name: "NX  Gale Fitness Center",
    description: "NX  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Skagway. Our facility features dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(612) 495-2250",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Battle Ropes", "SkiErg", "Recumbent Bikes", "Cardio Kickboxing Bags", "Treadmills", "Air Bikes", "Cardio Medicine Balls", "Cardio Kettlebells", "VersaClimber", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Abdominal Crunch Machine", "Cable Single Arm Woodchopper Machine", "Cable Lateral Raise Machine", "Cable Single Arm Face Pull Machine", "Cable Crossover Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Front Raise Machine", "Leg Press Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Balance Boards", "Resistance Bands", "TRX Suspension Trainers", "Sandbags", "Speed Cords", "Stability Balls", "Yoga Mats", "Plyo Boxes", "Kickboxing Equipment", "Compression Therapy", "Float Tanks"],
    personalTrainers: ["Strength and Conditioning Coach", "Spinning Instructor", "Aqua Fitness Instructor", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Fresh Fruit Bar", "Group Fitness Classes", "Protein Shakes", "Locker Rentals", "Personal Training Sessions", "Smoothie Bar", "Toiletries", "Fitness Tracking", "Water Stations", "Nutrition Counseling"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "3919b307-6b28-479d-8055-fc85f4ddab1a",
    vesselId: "my--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Skagway. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(329) 451-7876",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Cardio Punching Bags", "Agility Hurdles", "Cardio Resistance Bands", "StairMaster", "Cardio Kickboxing Bags", "Jump Ropes", "Cardio Step Platforms", "Weight Machines", "Cable Single Arm Shrug Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Face Pull Machine", "Cable Machines", "Smith Machines", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Tricep Extension Machine", "TRX Suspension Trainers", "Kettlebells", "Tire Flips", "Slam Balls", "BOSU Balls", "Speed Hurdles", "Speed Cones", "Sledgehammers", "Cryotherapy Chambers", "Kickboxing Equipment", "Yoga Equipment"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist"],
    amenities: ["Body Composition Analysis", "Fitness Consultations", "Workout Programs", "Fresh Fruit Bar", "Fitness Tracking", "Group Fitness Classes", "Protein Shakes", "Personal Training Sessions", "Equipment Orientation", "Water Stations"],
    is24Hours: true,
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
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "9170c01e-4737-419c-9515-ae1cfb3dd778",
    vesselId: "rms-skagway-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(464) 261-5886",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "Cardio Kettlebells", "SkiErg", "Jump Ropes", "Cardio Step Platforms", "Rowing Machines", "Cable Single Arm Single Leg Lunge Machine", "Cable Lunge Machine", "Free Weights", "Functional Trainers", "Dumbbells", "Cable Single Arm Back Extension Machine", "Cable Glute Kickback Machine", "Seated Row Machine", "Agility Ladders", "Speed Cords", "Jump Boxes", "Agility Cones", "Speed Bands", "Massage Chairs"],
    personalTrainers: ["Pilates Instructor", "Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Locker Rentals", "Towel Service", "Equipment Orientation", "Fitness Consultations", "Workout Programs", "Body Composition Analysis", "Fresh Fruit Bar", "Group Fitness Classes", "Nutrition Counseling", "Hair Dryers", "Water Stations", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
    isPopular: false
  },
  {
    id: "6f4869e9-fb63-400b-873a-49a10a234f9e",
    vesselId: "nb--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(157) 604-7175",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Kickboxing Bags", "Agility Hurdles", "Rowing Machines", "Arc Trainers", "Cardio Kettlebells", "SkiErg", "Bench Press", "Cable Lunge Machine", "Cable Single Arm Single Leg Face Pull Machine", "Bicep Curl Machine", "Cable Pallof Press Machine", "Cable Machines", "Cable Single Arm Back Extension Machine", "Cable Hip Thrust Machine", "Kettlebells", "Jump Boxes", "Medicine Balls", "Agility Cones", "Battle Ropes", "Resistance Bands", "Speed Ladders", "HydroMassage Beds"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Senior Fitness Specialist", "Youth Fitness Specialist"],
    amenities: ["Toiletries", "Equipment Orientation", "Fitness Consultations", "Fresh Fruit Bar", "Towel Service", "Locker Rentals", "Smoothie Bar", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "3bc782df-c69f-41b3-afd3-ae8a438af117",
    vesselId: "rms-the--mariner",
    name: "Skagway Fitness Center",
    description: "Skagway Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(769) 504-5899",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "StairMaster", "Battle Ropes", "SkiErg", "Rowing Machines", "Cardio Resistance Bands", "VersaClimber", "Punching Bags", "Leg Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Smith Machines", "Cable Back Extension Machine", "Cable Bicep Curl Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Upright Row Machine", "Smith Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Agility Dots", "BOSU Balls", "Foam Rollers", "Kettlebells", "Speed Hurdles", "Plyo Boxes", "Speed Cones", "Speed Resistors", "TRX Suspension Trainers", "Kickboxing Equipment", "Infrared Therapy"],
    personalTrainers: ["Fitness Nutrition Specialist", "Strength and Conditioning Coach", "Certified Personal Trainer", "Yoga Instructor"],
    amenities: ["Audio/Visual Entertainment", "Hair Dryers", "Towel Service", "Nutrition Counseling", "Locker Rentals", "Water Stations", "Body Composition Analysis", "Protein Shakes", "Personal Training Sessions", "Toiletries", "Fitness Tracking", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "919d8a6e-5b90-463c-852e-6a1f802c4a30",
    vesselId: "ms--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(962) 452-1401",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Jump Ropes", "Agility Hurdles", "Boxing Equipment", "Rowing Machines", "Cardio Kickboxing Bags", "Cardio Punching Bags", "SkiErg", "Stationary Bikes", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Plank Machine", "Seated Row Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Pallof Press Machine", "Plate Loaded Machines", "Cable Single Arm Russian Twist Machine", "Agility Poles", "Kettlebells", "Agility Dots", "Speed Sleds", "Speed Cords", "Kickboxing Equipment", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Workout Programs", "Towel Service", "Fresh Fruit Bar", "Fitness Tracking", "Body Composition Analysis", "Nutrition Counseling", "Water Stations", "Group Fitness Classes", "Equipment Orientation", "Fitness Consultations", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
  }
];
