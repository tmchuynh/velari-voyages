// Fitness center venues data for Buenos Aires
// This file contains fitness center and wellness facility information for cruise vessels operating from Buenos Aires
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const buenosAiresFitnessCenters: FitnessCenter[] = [
  {
    id: "da218178-5709-41d4-bd96-b3c2b3888b2e",
    vesselId: "sy--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(913) 658-1749",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "SkiErg", "Cardio Kettlebells", "Stationary Bikes", "Rowing Machines", "Treadmills", "Cable Single Arm Calf Raise Machine", "Power Rack", "Cable Pallof Press Machine", "Cable Single Arm Chest Press Machine", "Smith Machine", "Cable Upright Row Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Lateral Raise Machine", "Balance Boards", "Speed Sleds", "Agility Markers", "Kettlebells", "Slam Balls", "Recovery Tools", "Float Tanks", "Yoga Blocks"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fresh Fruit Bar", "Group Fitness Classes", "Smoothie Bar", "Personal Training Sessions", "Audio/Visual Entertainment", "Locker Rentals", "Toiletries", "Water Stations"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "d4187978-d64a-4776-843f-598d5741112c",
    vesselId: "ms-buenos-aires-voyager",
    name: "MS Buenos Aires Voyager Fitness Center",
    description: "MS Buenos Aires Voyager Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Buenos Aires. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(925) 477-3347",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Cardio Kickboxing Bags", "Treadmills", "Jump Ropes", "Cardio Kettlebells", "Spin Bikes", "Boxing Equipment", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Lunge Machine", "Cable Row Machine", "Cable Single Arm Reverse Fly Machine", "Cable Pallof Press Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Tricep Pushdown Machine", "Kettlebells", "Speed Bands", "Medicine Balls", "Agility Ladders", "Agility Cones", "Battle Ropes", "Yoga Straps", "Infrared Therapy", "Cryotherapy Chambers"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Smoothie Bar", "Nutrition Counseling", "Protein Shakes", "Locker Rentals", "Fresh Fruit Bar", "Hair Dryers", "Toiletries", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
    id: "e92f9637-693d-4f80-9bcf-2dcfee2581ec",
    vesselId: "hms--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Buenos Aires. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(321) 942-1058",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Punching Bags", "SkiErg", "Cardio Gliders", "Elliptical Machines", "Stationary Bikes", "VersaClimber", "Recumbent Bikes", "Cardio Kettlebells", "Cardio Step Platforms", "Cable Single Arm Lunge Machine", "Chest Fly Machine", "Leg Press Machine", "Free Weights", "Cable Upright Row Machine", "Abdominal Crunch Machine", "Dumbbells", "Cable Russian Twist Machine", "Power Rack", "Resistance Bands", "Yoga Mats", "Weighted Vests", "Speed Resistors", "Foam Rollers", "Slam Balls", "Sledgehammers", "Speed Parachutes", "Pilates Reformers"],
    personalTrainers: ["Corrective Exercise Specialist", "Pilates Instructor", "Group Fitness Instructor", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Fitness Consultations", "Fresh Fruit Bar", "Equipment Orientation", "Toiletries", "Nutrition Counseling", "Hair Dryers", "Fitness Tracking", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "5831d541-6808-47a1-9662-9ea00cc7d3e9",
    vesselId: "my-the--mariner",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Buenos Aires. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(576) 435-7649",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Cardio Kickboxing Bags", "Stationary Bikes", "Air Bikes", "Boxing Equipment", "VersaClimber", "Recumbent Bikes", "Battle Ropes", "Smith Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Back Extension Machine", "Cable Row Machine", "Cable Lunge Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Row Machine", "Weight Machines", "Cable Hip Thrust Machine", "Speed Bands", "BOSU Balls", "Speed Ladders", "Agility Hurdles", "Infrared Therapy", "Aqua Fitness Equipment", "Yoga Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Consultations", "Fresh Fruit Bar", "Nutrition Counseling", "Locker Rentals", "Toiletries", "Body Composition Analysis", "Smoothie Bar", "Group Fitness Classes", "Hair Dryers", "Protein Shakes"],
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
    isPopular: true
  },
  {
    id: "80e8637a-701b-40e7-9b2a-f387b2000b57",
    vesselId: "mv--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(402) 630-3324",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Recumbent Bikes", "Cardio Kettlebells", "SkiErg", "VersaClimber", "Cardio Resistance Bands", "Stationary Bikes", "Cable Single Arm Upright Row Machine", "Pull-up Station", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Shrug Machine", "Smith Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "TRX Suspension Trainers", "Stability Balls", "Speed Sleds", "Speed Parachutes", "Agility Dots", "Spinning Bikes"],
    personalTrainers: ["Group Fitness Instructor", "Fitness Nutrition Specialist", "Strength and Conditioning Coach"],
    amenities: ["Fresh Fruit Bar", "Smoothie Bar", "Locker Rentals", "Fitness Tracking", "Workout Programs", "Fitness Consultations", "Equipment Orientation", "Group Fitness Classes", "Protein Shakes", "Personal Training Sessions", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "231e0a3c-0491-460c-abee-0cca40c308eb",
    vesselId: "my--explorer",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the MY  Explorer. Stay active and healthy while cruising the waters near Buenos Aires with our state-of-the-art fitness facilities. Our facility features steam room.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(731) 224-9199",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Treadmills", "Battle Ropes", "Boxing Equipment", "VersaClimber", "Elliptical Machines", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Speed Hurdles", "Agility Ladders", "Sledgehammers", "Yoga Mats", "Agility Dots", "Medicine Balls", "BOSU Balls", "Spinning Bikes"],
    personalTrainers: ["Senior Fitness Specialist", "Certified Personal Trainer", "Youth Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Water Stations", "Protein Shakes", "Hair Dryers", "Equipment Orientation", "Personal Training Sessions", "Smoothie Bar", "Nutrition Counseling"],
    is24Hours: false,
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
    hasFitnessAssessments: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "097efdd8-2f1f-4ec3-a20d-14c8c8bcc8f1",
    vesselId: "cs-buenos-aires-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(583) 366-5048",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Cardio Gliders", "Stationary Bikes", "Arc Trainers", "Boxing Equipment", "Elliptical Machines", "Rowing Machines", "Cardio Step Platforms", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Shoulder Press Machine", "Chest Fly Machine", "Speed Cords", "Speed Parachutes", "Speed Harnesses", "Speed Bands", "Kettlebells", "Medicine Balls", "HydroMassage Beds"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Strength and Conditioning Coach", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Group Fitness Classes", "Locker Rentals", "Smoothie Bar", "Fitness Tracking", "Toiletries", "Body Composition Analysis", "Protein Shakes", "Audio/Visual Entertainment", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "0c374418-6cd3-48f6-8d53-b0a913452d50",
    vesselId: "my--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the MY  of the Deep. Stay active and healthy while cruising the waters near Buenos Aires with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(129) 897-3395",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Agility Hurdles", "Recumbent Bikes", "Punching Bags", "Cardio Kickboxing Bags", "Cardio Resistance Bands", "Elliptical Machines", "SkiErg", "Cable Single Arm Back Extension Machine", "Power Rack", "Cable Single Arm Glute Kickback Machine", "Leg Press Machine", "Cable Calf Raise Machine", "Cable Single Arm Deadlift Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Deadlift Machine", "Balance Boards", "Foam Rollers", "Sandbags", "Kettlebells", "Speed Sleds", "Speed Cones", "Resistance Bands", "Battle Ropes", "Aqua Fitness Equipment", "Barre Equipment", "Yoga Wheels"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach", "Senior Fitness Specialist", "Pilates Instructor"],
    amenities: ["Fresh Fruit Bar", "Toiletries", "Water Stations", "Fitness Tracking", "Nutrition Counseling", "Smoothie Bar", "Personal Training Sessions", "Hair Dryers", "Protein Shakes", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "adb72b26-1dfb-4bbf-a06b-e773f5c18dc0",
    vesselId: "ts-the--mariner",
    name: "Buenos Aires Fitness Center",
    description: "Buenos Aires Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(623) 355-7952",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Resistance Bands", "Battle Ropes", "Arc Trainers", "Cardio Punching Bags", "Jump Ropes", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Bench Press", "Leg Press Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Back Extension Machine", "Cable Upright Row Machine", "Abdominal Crunch Machine", "Cable Deadlift Machine", "Kettlebells", "Agility Hurdles", "Speed Cords", "Speed Bands", "Medicine Balls", "Agility Dots", "Speed Harnesses", "Cryotherapy Chambers", "Float Tanks", "Spinning Bikes"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Youth Fitness Specialist"],
    amenities: ["Fitness Consultations", "Hair Dryers", "Body Composition Analysis", "Towel Service", "Water Stations", "Group Fitness Classes", "Locker Rentals", "Protein Shakes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "5fe2c6f3-fd39-4d54-830b-b86b2333b910",
    vesselId: "mv--gale",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MV  Gale. Stay active and healthy while cruising the waters near Buenos Aires with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(568) 694-4064",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Boxing Equipment", "Cardio Medicine Balls", "StairMaster", "Cardio Resistance Bands", "Battle Ropes", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Chest Press Machine", "Cable Single Arm Row Machine", "Cable Plank Machine", "Plate Loaded Machines", "Cable Crossover Machine", "Cable Single Arm Back Extension Machine", "Cable Squat Machine", "Smith Machine", "Cable Single Arm Ab Crunch Machine", "Free Weights", "Speed Sleds", "Agility Poles", "Speed Hurdles", "Jump Boxes", "Agility Ladders", "HydroMassage Beds", "Compression Therapy", "Infrared Sauna"],
    personalTrainers: ["Senior Fitness Specialist", "Strength and Conditioning Coach", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Nutrition Counseling", "Locker Rentals", "Fresh Fruit Bar", "Fitness Consultations", "Equipment Orientation", "Protein Shakes", "Smoothie Bar", "Workout Programs", "Body Composition Analysis", "Toiletries", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  }
];
