// Fitness center venues data for Reykjavik
// This file contains fitness center and wellness facility information for cruise vessels operating from Reykjavik
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const reykjavikFitnessCenters: FitnessCenter[] = [
  {
    id: "1a8d2663-fd7e-416e-b3c0-b46b2a09cdbc",
    vesselId: "ly--explorer",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the LY  Explorer. Stay active and healthy while cruising the waters near Reykjavik with our state-of-the-art fitness facilities. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(493) 106-3610",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Cardio Gliders", "Jump Ropes", "Cardio Kickboxing Bags", "Boxing Equipment", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Agility Cones", "BOSU Balls", "Balance Boards", "Resistance Bands", "Speed Hurdles", "TRX Suspension Trainers", "Functional Training Equipment", "Yoga Equipment", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Personal Training Sessions", "Water Stations", "Nutrition Counseling", "Group Fitness Classes", "Audio/Visual Entertainment", "Towel Service", "Protein Shakes", "Fitness Tracking", "Equipment Orientation", "Toiletries", "Smoothie Bar", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "837580b7-b00f-4ca0-b2bb-137cc0223ef2",
    vesselId: "sy-reykjavik-voyager",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the SY Reykjavik Voyager. Stay active and healthy while cruising the waters near Reykjavik with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(595) 704-8792",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Battle Ropes", "Cardio Kettlebells", "Cardio Step Platforms", "Arc Trainers", "Elliptical Machines", "Recumbent Bikes", "Cardio Punching Bags", "Treadmills", "StairMaster", "Cable Upright Row Machine", "Cable Single Arm Tricep Extension Machine", "Leg Extension Machine", "Cable Woodchopper Machine", "Cable Single Arm Squat Machine", "Cable Row Machine", "Back Extension Machine", "Plate Loaded Machines", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Medicine Balls", "Speed Sleds", "Speed Cords", "Sledgehammers", "Agility Hurdles", "Sandbags", "TRX Suspension Trainers", "Functional Training Equipment", "Float Tanks", "Kickboxing Equipment", "CrossFit Equipment", "Yoga Straps"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist", "Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Water Stations", "Hair Dryers", "Towel Service", "Protein Shakes", "Smoothie Bar", "Personal Training Sessions", "Workout Programs", "Audio/Visual Entertainment", "Equipment Orientation", "Group Fitness Classes", "Locker Rentals", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "7471cc0d-2612-4d4d-996d-03054a1f8af0",
    vesselId: "cs--of-the-deep",
    name: "Reykjavik Fitness Center",
    description: "Discover wellness at sea with Reykjavik Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(890) 630-9087",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Stationary Bikes", "Cardio Kettlebells", "Punching Bags", "Boxing Equipment", "Arc Trainers", "Air Bikes", "SkiErg", "Recumbent Bikes", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Upright Row Machine", "Cable Squat Machine", "Cable Face Pull Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Lateral Raise Machine", "Plate Loaded Machines", "Power Rack", "Agility Dots", "Speed Bands", "Jump Boxes", "BOSU Balls", "Stability Balls", "Resistance Bands", "Speed Resistors", "Agility Ladders", "Pilates Reformers", "Barre Equipment", "Yoga Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Strength Training Specialist"],
    amenities: ["Nutrition Counseling", "Toiletries", "Towel Service", "Locker Rentals", "Fresh Fruit Bar", "Smoothie Bar", "Hair Dryers", "Workout Programs", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "bbf14cc3-5521-4c34-aab8-3f689abba333",
    vesselId: "ms-the--mariner",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the MS The  Mariner. Stay active and healthy while cruising the waters near Reykjavik with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(371) 859-8696",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Jump Ropes", "Treadmills", "Stationary Bikes", "Punching Bags", "Cardio Medicine Balls", "Cable Crossover Machine", "Cable Lateral Raise Machine", "Chest Fly Machine", "Cable Single Arm Row Machine", "Shoulder Press Machine", "Cable Pallof Press Machine", "Plate Loaded Machines", "Cable Woodchopper Machine", "Cable Shrug Machine", "Cable Glute Kickback Machine", "BOSU Balls", "Weighted Vests", "Speed Bands", "Plyo Boxes", "Foam Rollers", "Speed Harnesses", "Sledgehammers", "Yoga Blocks"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Tracking", "Hair Dryers", "Locker Rentals", "Smoothie Bar", "Workout Programs", "Fresh Fruit Bar", "Nutrition Counseling", "Toiletries", "Fitness Consultations", "Group Fitness Classes"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "e00f0881-d353-4fe4-8779-5dd0bfc4194f",
    vesselId: "rv--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Reykjavik. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(227) 859-7848",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Boxing Equipment", "Elliptical Machines", "Punching Bags", "Rowing Machines", "Treadmills", "Jump Ropes", "Battle Ropes", "Agility Hurdles", "Tricep Extension Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Calf Raise Machine", "Cable Single Arm Glute Kickback Machine", "Power Rack", "Cable Single Arm Single Leg Glute Kickback Machine", "Smith Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Speed Sleds", "Kettlebells", "Agility Ladders", "Tire Flips", "Jump Boxes", "Yoga Blocks"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Pilates Instructor"],
    amenities: ["Personal Training Sessions", "Towel Service", "Hair Dryers", "Toiletries", "Group Fitness Classes", "Protein Shakes", "Equipment Orientation", "Locker Rentals", "Fitness Consultations", "Workout Programs", "Water Stations", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
    isPopular: false
  },
  {
    id: "d6bfabd6-20fb-4071-a9bc-ee1ef0c32bcb",
    vesselId: "mv--explorer",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the MV  Explorer. Stay active and healthy while cruising the waters near Reykjavik with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(736) 830-6837",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Rowing Machines", "VersaClimber", "SkiErg", "Cardio Kettlebells", "Cardio Kickboxing Bags", "Stationary Bikes", "StairMaster", "Battle Ropes", "Spin Bikes", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Pallof Press Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Yoga Mats", "Plyo Boxes", "Agility Cones", "Agility Markers", "Weighted Vests", "Sledgehammers", "Agility Dots", "Pilates Reformers", "Compression Therapy", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Audio/Visual Entertainment", "Personal Training Sessions", "Body Composition Analysis", "Smoothie Bar", "Fitness Consultations", "Toiletries", "Hair Dryers", "Water Stations", "Protein Shakes", "Group Fitness Classes"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "e73ff79b-c114-44db-87ab-8ad55bac068f",
    vesselId: "cs-reykjavik-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(631) 321-2375",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Jump Ropes", "Agility Hurdles", "Stationary Bikes", "Cardio Resistance Bands", "SkiErg", "Air Bikes", "Cardio Kettlebells", "Cable Plank Machine", "Cable Single Arm Single Leg Squat Machine", "Bench Press", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Lat Pulldown Machine", "Tricep Extension Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Bicep Curl Machine", "Leg Press Machine", "Back Extension Machine", "Lat Pulldown", "Medicine Balls", "Speed Hurdles", "Speed Cones", "Speed Sleds", "Tire Flips", "Speed Parachutes", "BOSU Balls", "Slam Balls", "Pilates Reformers", "Spinning Bikes"],
    personalTrainers: ["Spinning Instructor", "Senior Fitness Specialist", "Youth Fitness Specialist", "Strength and Conditioning Coach"],
    amenities: ["Water Stations", "Group Fitness Classes", "Fitness Consultations", "Fresh Fruit Bar", "Hair Dryers", "Smoothie Bar", "Toiletries", "Fitness Tracking", "Workout Programs", "Personal Training Sessions", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
    id: "c0aca02f-160b-42a1-9ba0-9e39fd6bd03a",
    vesselId: "fv--of-the-deep",
    name: "FV  of the Deep Fitness Center",
    description: "FV  of the Deep Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Reykjavik. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(593) 149-8124",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Treadmills", "Boxing Equipment", "Air Bikes", "Elliptical Machines", "Rowing Machines", "Stationary Bikes", "SkiErg", "Power Rack", "Cable Single Arm Single Leg Russian Twist Machine", "Bicep Curl Machine", "Back Extension Machine", "Smith Machine", "Cable Single Arm Ab Crunch Machine", "Multi-Gym Systems", "Cable Lateral Raise Machine", "Speed Hurdles", "Kettlebells", "Sledgehammers", "Tire Flips", "Speed Cords", "Speed Resistors", "BOSU Balls", "Agility Ladders", "CrossFit Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer", "Pilates Instructor"],
    amenities: ["Fitness Tracking", "Hair Dryers", "Towel Service", "Fresh Fruit Bar", "Water Stations", "Locker Rentals", "Audio/Visual Entertainment", "Toiletries", "Smoothie Bar"],
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
    id: "eb9ed853-20c5-4342-af1c-ac9af7a29904",
    vesselId: "fv-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Reykjavik. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(749) 538-4245",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "StairMaster", "Battle Ropes", "Punching Bags", "Cardio Gliders", "Jump Ropes", "Cable Single Arm Reverse Fly Machine", "Abdominal Crunch Machine", "Cable Single Arm Hip Thrust Machine", "Pull-up Station", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Slam Balls", "Speed Harnesses", "BOSU Balls", "Speed Hurdles", "Speed Cords", "Speed Sleds", "Jump Boxes", "Boxing Equipment", "Dance Fitness Equipment", "Yoga Equipment", "Infrared Therapy", "Kickboxing Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Senior Fitness Specialist", "Pilates Instructor"],
    amenities: ["Equipment Orientation", "Water Stations", "Towel Service", "Protein Shakes", "Body Composition Analysis", "Nutrition Counseling", "Audio/Visual Entertainment", "Workout Programs", "Fresh Fruit Bar", "Personal Training Sessions", "Group Fitness Classes", "Locker Rentals", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    id: "b23be364-48bd-49cc-be33-553829d69fc9",
    vesselId: "nb--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Reykjavik. Our facility features dedicated yoga studio, sauna facilities, steam room.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(677) 521-1308",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Arc Trainers", "Boxing Equipment", "Battle Ropes", "Cardio Gliders", "VersaClimber", "Smith Machine", "Cable Machines", "Cable Shrug Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Pallof Press Machine", "Weight Machines", "Cable Single Arm Single Leg Squat Machine", "Yoga Mats", "Slam Balls", "Agility Ladders", "Kettlebells", "Sandbags", "Jump Boxes", "Tire Flips", "Functional Training Equipment", "Pilates Reformers", "CrossFit Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Equipment Orientation", "Body Composition Analysis", "Fresh Fruit Bar", "Water Stations", "Group Fitness Classes", "Protein Shakes", "Locker Rentals", "Fitness Tracking", "Personal Training Sessions", "Hair Dryers", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
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
  }
];
