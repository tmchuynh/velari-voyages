// Fitness center venues data for Lisbon
// This file contains fitness center and wellness facility information for cruise vessels operating from Lisbon
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const lisbonFitnessCenters: FitnessCenter[] = [
  {
    id: "b99ae2bd-408e-47b1-9d35-9d9fe3b1ae8d",
    vesselId: "rv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Lisbon. Our facility features pool area, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(614) 222-5249",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Medicine Balls", "Recumbent Bikes", "SkiErg", "Cardio Punching Bags", "Cardio Kickboxing Bags", "Air Bikes", "Rowing Machines", "Tricep Extension Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Agility Ladders", "TRX Suspension Trainers", "Stability Balls", "Speed Ladders", "Speed Cords", "Sandbags", "Yoga Straps", "Compression Therapy", "HydroMassage Beds"],
    personalTrainers: ["Group Fitness Instructor", "Strength and Conditioning Coach", "Youth Fitness Specialist", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Locker Rentals", "Nutrition Counseling", "Fitness Tracking", "Body Composition Analysis", "Group Fitness Classes", "Towel Service", "Toiletries", "Audio/Visual Entertainment", "Personal Training Sessions", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "1fb9fed2-011d-4fab-b1af-4ef374ac2121",
    vesselId: "nb-lisbon-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Lisbon. Our facility features pool area, dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(968) 930-2348",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Rowing Machines", "Jump Ropes", "Cardio Medicine Balls", "VersaClimber", "Stationary Bikes", "Elliptical Machines", "Spin Bikes", "Cardio Kettlebells", "Cardio Gliders", "Free Weights", "Cable Single Arm Single Leg Lateral Raise Machine", "Seated Row Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Back Extension Machine", "Cable Machines", "Dumbbells", "Cable Reverse Fly Machine", "Cable Pallof Press Machine", "Cable Tricep Pushdown Machine", "Cable Deadlift Machine", "Cable Lunge Machine", "Medicine Balls", "Speed Hurdles", "Foam Rollers", "TRX Suspension Trainers", "Stability Balls", "Massage Chairs", "Yoga Blocks"],
    personalTrainers: ["Strength and Conditioning Coach", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Hair Dryers", "Group Fitness Classes", "Fitness Tracking", "Body Composition Analysis", "Smoothie Bar", "Fresh Fruit Bar", "Equipment Orientation", "Personal Training Sessions", "Toiletries", "Locker Rentals", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
    id: "1e48dd03-ce32-4b4e-85ab-86dd9d0b0088",
    vesselId: "hms--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(255) 992-3016",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Spin Bikes", "Treadmills", "Cardio Resistance Bands", "Rowing Machines", "Cardio Gliders", "Elliptical Machines", "Cardio Kickboxing Bags", "Cardio Step Platforms", "SkiErg", "Cable Single Arm Calf Raise Machine", "Weight Machines", "Cable Tricep Pushdown Machine", "Cable Calf Raise Machine", "Cable Squat Machine", "Cable Deadlift Machine", "Cable Lateral Raise Machine", "Cable Upright Row Machine", "Cable Plank Machine", "Abdominal Crunch Machine", "Resistance Bands", "Foam Rollers", "Agility Hurdles", "Speed Harnesses", "Agility Cones", "Speed Cords", "Compression Therapy", "Kickboxing Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Group Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Nutrition Counseling", "Towel Service", "Water Stations", "Equipment Orientation", "Personal Training Sessions", "Fitness Tracking", "Fresh Fruit Bar", "Protein Shakes", "Toiletries"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    id: "1907dde6-066b-4f07-a367-3af12df8556e",
    vesselId: "nx-the--mariner",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(622) 887-2082",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Gliders", "Agility Hurdles", "Elliptical Machines", "Cardio Kettlebells", "SkiErg", "Cardio Medicine Balls", "Cable Single Arm Single Leg Lunge Machine", "Bicep Curl Machine", "Seated Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Russian Twist Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Calf Raise Machine", "Agility Markers", "Kettlebells", "Speed Sleds", "Speed Cords", "Speed Bands", "Kickboxing Equipment", "Yoga Blocks"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Strength Training Specialist", "Aqua Fitness Instructor"],
    amenities: ["Locker Rentals", "Nutrition Counseling", "Hair Dryers", "Body Composition Analysis", "Towel Service", "Personal Training Sessions", "Smoothie Bar", "Group Fitness Classes", "Water Stations", "Fitness Tracking"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "6498f23c-23b2-4991-962b-a5654b05d8da",
    vesselId: "ly--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Lisbon. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(178) 604-9548",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Medicine Balls", "Cardio Gliders", "Treadmills", "Elliptical Machines", "VersaClimber", "Cable Single Arm Face Pull Machine", "Cable Pallof Press Machine", "Cable Back Extension Machine", "Power Rack", "Cable Ab Crunch Machine", "Cable Single Arm Back Extension Machine", "Smith Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Glute Kickback Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "BOSU Balls", "Weighted Vests", "Speed Parachutes", "TRX Suspension Trainers", "Agility Markers", "Battle Ropes", "Medicine Balls", "Kickboxing Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Workout Programs", "Audio/Visual Entertainment", "Smoothie Bar", "Fresh Fruit Bar", "Fitness Tracking", "Group Fitness Classes", "Personal Training Sessions", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "248db788-5a3f-4026-a800-d1c2083cc854",
    vesselId: "ms--explorer",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the MS  Explorer. Stay active and healthy while cruising the waters near Lisbon with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(928) 532-4429",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Punching Bags", "Cardio Gliders", "Cardio Step Platforms", "Air Bikes", "Recumbent Bikes", "Jump Ropes", "Agility Hurdles", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Stability Balls", "Resistance Bands", "Medicine Balls", "Speed Resistors", "Plyo Boxes", "Speed Parachutes", "Sledgehammers", "Recovery Tools"],
    personalTrainers: ["Group Fitness Instructor", "Senior Fitness Specialist", "Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Hair Dryers", "Personal Training Sessions", "Nutrition Counseling", "Fresh Fruit Bar", "Equipment Orientation", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
    id: "e40ba30f-76fe-421b-83d8-0da5650780dd",
    vesselId: "hms-lisbon-voyager",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(949) 149-2290",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Elliptical Machines", "Cardio Punching Bags", "Cardio Resistance Bands", "Treadmills", "Punching Bags", "StairMaster", "Stationary Bikes", "Cable Single Arm Shrug Machine", "Cable Glute Kickback Machine", "Leg Extension Machine", "Cable Woodchopper Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Power Rack", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Speed Resistors", "Jump Boxes", "Speed Cones", "Kettlebells", "Agility Cones", "Dance Fitness Equipment", "Aqua Fitness Equipment"],
    personalTrainers: ["Strength Training Specialist", "Fitness Nutrition Specialist", "Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Personal Training Sessions", "Fresh Fruit Bar", "Group Fitness Classes", "Fitness Consultations", "Smoothie Bar", "Workout Programs", "Towel Service", "Protein Shakes", "Body Composition Analysis", "Water Stations", "Locker Rentals"],
    is24Hours: true,
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
    hasHealthScreenings: true,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "5b43de7c-4537-43ce-9594-586ba6eb5799",
    vesselId: "mv--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the MV  of the Deep. Stay active and healthy while cruising the waters near Lisbon with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(331) 997-6043",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Agility Hurdles", "Cardio Step Platforms", "Cardio Gliders", "Treadmills", "StairMaster", "Cardio Medicine Balls", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Squat Machine", "Lat Pulldown", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Lunge Machine", "Speed Parachutes", "Resistance Bands", "Balance Boards", "Agility Dots", "Plyo Boxes", "Agility Ladders", "TRX Suspension Trainers", "Massage Chairs", "Spinning Bikes"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Aqua Fitness Instructor"],
    amenities: ["Fitness Consultations", "Locker Rentals", "Group Fitness Classes", "Hair Dryers", "Toiletries", "Body Composition Analysis", "Fitness Tracking", "Workout Programs", "Equipment Orientation", "Personal Training Sessions", "Water Stations", "Smoothie Bar"],
    is24Hours: true,
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "3f42ccb5-509c-4431-b2c7-ea467195e67a",
    vesselId: "nb-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Lisbon. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(604) 824-3219",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Cardio Punching Bags", "VersaClimber", "Cardio Step Platforms", "Battle Ropes", "Treadmills", "Recumbent Bikes", "Bench Press", "Cable Single Arm Single Leg Pallof Press Machine", "Weight Machines", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Hip Thrust Machine", "Cable Single Arm Face Pull Machine", "Cable Lunge Machine", "Pull-up Station", "Cable Single Arm Single Leg Ab Crunch Machine", "Agility Poles", "Medicine Balls", "Balance Boards", "Agility Dots", "Sledgehammers", "Speed Bands", "Yoga Wheels", "Pilates Reformers"],
    personalTrainers: ["Spinning Instructor", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Hair Dryers", "Protein Shakes", "Equipment Orientation", "Smoothie Bar", "Nutrition Counseling"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "32085a43-02f9-4fe6-8f63-fdc5e275d1c4",
    vesselId: "nx--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Lisbon. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(949) 229-5722",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "Cardio Step Platforms", "Boxing Equipment", "Battle Ropes", "Cardio Resistance Bands", "Cable Single Arm Russian Twist Machine", "Cable Back Extension Machine", "Weight Machines", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Dumbbells", "Plate Loaded Machines", "Cable Single Arm Shrug Machine", "Cable Tricep Pushdown Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Agility Ladders", "Sandbags", "Agility Hurdles", "TRX Suspension Trainers", "Speed Parachutes", "Agility Markers", "Balance Boards", "Speed Cords", "Kickboxing Equipment", "Aqua Fitness Equipment"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Toiletries", "Hair Dryers", "Fitness Tracking", "Locker Rentals", "Towel Service", "Body Composition Analysis", "Group Fitness Classes", "Protein Shakes", "Audio/Visual Entertainment", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  }
];
