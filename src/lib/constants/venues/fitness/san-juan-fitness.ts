// Fitness center venues data for San Juan
// This file contains fitness center and wellness facility information for cruise vessels operating from San Juan
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const sanJuanFitnessCenters: FitnessCenter[] = [
  {
    id: "7195dfcf-c687-48c4-a0df-17e1994fa7bc",
    vesselId: "ly--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around San Juan. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(216) 901-1090",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "SkiErg", "Cardio Kickboxing Bags", "Jump Ropes", "Cardio Punching Bags", "Cardio Gliders", "VersaClimber", "Cardio Medicine Balls", "Treadmills", "Cable Single Arm Bicep Curl Machine", "Leg Press Machine", "Functional Trainers", "Leg Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Bench Press", "Cable Single Arm Ab Crunch Machine", "Cable Deadlift Machine", "Lat Pulldown", "Agility Dots", "Plyo Boxes", "Stability Balls", "Speed Bands", "Speed Cords", "Kickboxing Equipment", "Yoga Blocks", "Recovery Tools"],
    personalTrainers: ["Youth Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Equipment Orientation", "Body Composition Analysis", "Hair Dryers", "Group Fitness Classes", "Towel Service", "Smoothie Bar", "Water Stations", "Fitness Consultations", "Personal Training Sessions", "Audio/Visual Entertainment", "Locker Rentals", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    isPopular: true
  },
  {
    id: "bf638160-f8c0-4036-865e-6ccad3bceab5",
    vesselId: "ly-san-juan-voyager",
    name: "LY San Juan Voyager Fitness Center",
    description: "LY San Juan Voyager Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(104) 135-8040",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Cardio Resistance Bands", "VersaClimber", "Jump Ropes", "Treadmills", "Agility Hurdles", "Spin Bikes", "Air Bikes", "Elliptical Machines", "Punching Bags", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Pull-up Station", "Cable Ab Crunch Machine", "Cable Glute Kickback Machine", "Agility Ladders", "Speed Hurdles", "Kettlebells", "Stability Balls", "BOSU Balls", "Yoga Mats", "Speed Parachutes", "TRX Suspension Trainers", "Compression Therapy", "Yoga Equipment"],
    personalTrainers: ["Strength Training Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Nutrition Counseling", "Fresh Fruit Bar", "Body Composition Analysis", "Group Fitness Classes", "Protein Shakes", "Water Stations", "Toiletries", "Locker Rentals", "Smoothie Bar", "Fitness Tracking"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "ab22273a-9a62-426c-9a17-50abdb5accb9",
    vesselId: "hms--of-the-deep",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(890) 520-1100",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Jump Ropes", "Punching Bags", "Elliptical Machines", "Cardio Medicine Balls", "Cardio Kettlebells", "Air Bikes", "VersaClimber", "Cardio Punching Bags", "Battle Ropes", "Cable Single Arm Single Leg Russian Twist Machine", "Free Weights", "Dumbbells", "Functional Trainers", "Cable Squat Machine", "Cable Single Arm Shoulder Press Machine", "Cable Face Pull Machine", "Cable Lunge Machine", "Cable Upright Row Machine", "Agility Hurdles", "Speed Bands", "BOSU Balls", "Sledgehammers", "Speed Cords", "Yoga Mats", "Foam Rollers", "Yoga Equipment", "Yoga Blocks"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Personal Training Sessions", "Water Stations", "Group Fitness Classes", "Hair Dryers", "Towel Service", "Fresh Fruit Bar", "Workout Programs", "Body Composition Analysis", "Smoothie Bar", "Equipment Orientation", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "bbba405a-965d-48e5-86b7-c3f88e854c98",
    vesselId: "mv-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the MV The  Mariner. Stay active and healthy while cruising the waters near San Juan with our state-of-the-art fitness facilities. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(131) 748-2078",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Cardio Medicine Balls", "Boxing Equipment", "Stationary Bikes", "VersaClimber", "Recumbent Bikes", "Smith Machine", "Seated Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Bicep Curl Machine", "Cable Single Arm Deadlift Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Calf Raise Machine", "Balance Boards", "Speed Resistors", "Stability Balls", "Agility Hurdles", "Resistance Bands", "Agility Poles", "BOSU Balls", "Speed Harnesses", "Infrared Sauna", "Kickboxing Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Smoothie Bar", "Fitness Tracking", "Protein Shakes", "Towel Service", "Fresh Fruit Bar", "Nutrition Counseling", "Group Fitness Classes", "Water Stations", "Body Composition Analysis", "Equipment Orientation", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "e84021ab-968a-41b8-a4f7-690c0ea68f0c",
    vesselId: "nb--gale",
    name: "NB  Gale Fitness Center",
    description: "Welcome to NB  Gale Fitness Center, your premier wellness destination aboard the NB  Gale. Stay active and healthy while cruising the waters near San Juan with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(502) 968-6443",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Cardio Kickboxing Bags", "Spin Bikes", "Treadmills", "Cardio Punching Bags", "Elliptical Machines", "Boxing Equipment", "VersaClimber", "SkiErg", "Cable Single Arm Single Leg Front Raise Machine", "Smith Machines", "Cable Russian Twist Machine", "Cable Ab Crunch Machine", "Cable Reverse Fly Machine", "Bench Press", "Cable Single Arm Bicep Curl Machine", "Barbells", "Bicep Curl Machine", "Seated Row Machine", "Kettlebells", "Speed Harnesses", "Speed Bands", "Agility Dots", "Speed Parachutes", "Agility Ladders", "Agility Cones", "Speed Cones", "Yoga Bolsters", "Functional Training Equipment", "Cryotherapy Chamber"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Smoothie Bar", "Personal Training Sessions", "Hair Dryers", "Water Stations", "Fitness Tracking", "Equipment Orientation", "Locker Rentals", "Body Composition Analysis", "Towel Service"],
    is24Hours: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "90de2972-1906-4b9c-ba43-dd2092d83ac2",
    vesselId: "fv--explorer",
    name: "San Juan Fitness Center",
    description: "Welcome to San Juan Fitness Center, your premier wellness destination aboard the FV  Explorer. Stay active and healthy while cruising the waters near San Juan with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(414) 333-8543",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Arc Trainers", "Cardio Resistance Bands", "Air Bikes", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Cardio Punching Bags", "Cable Single Arm Single Leg Shrug Machine", "Smith Machines", "Pull-up Station", "Bicep Curl Machine", "Leg Press Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Ab Crunch Machine", "Free Weights", "Cable Bicep Curl Machine", "Kettlebells", "Foam Rollers", "Agility Ladders", "Medicine Balls", "Agility Hurdles", "Yoga Wheels", "Spinning Bikes", "Dance Fitness Equipment", "Kickboxing Equipment", "Pilates Reformers", "CrossFit Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Body Composition Analysis", "Personal Training Sessions", "Protein Shakes", "Water Stations", "Equipment Orientation", "Towel Service", "Nutrition Counseling", "Toiletries", "Smoothie Bar", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "f9de8164-57ae-4643-aed2-64e845602cb5",
    vesselId: "sv-san-juan-voyager",
    name: "SV San Juan Voyager Fitness Center",
    description: "SV San Juan Voyager Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around San Juan. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(521) 278-9760",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Punching Bags", "Cardio Kettlebells", "Cardio Medicine Balls", "Arc Trainers", "Elliptical Machines", "Air Bikes", "Battle Ropes", "Boxing Equipment", "Cable Single Arm Row Machine", "Bicep Curl Machine", "Cable Row Machine", "Tricep Extension Machine", "Leg Press Machine", "Cable Glute Kickback Machine", "Cable Back Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Agility Ladders", "Speed Hurdles", "Speed Cords", "Tire Flips", "BOSU Balls", "Medicine Balls", "Plyo Boxes", "Yoga Blocks", "Yoga Straps"],
    personalTrainers: ["Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Fitness Tracking", "Locker Rentals", "Toiletries", "Nutrition Counseling", "Equipment Orientation", "Body Composition Analysis", "Fitness Consultations", "Group Fitness Classes", "Smoothie Bar", "Personal Training Sessions", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "c50965de-f8e0-43d7-8183-c7630ee5af82",
    vesselId: "my--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the MY  of the Deep. Stay active and healthy while cruising the waters near San Juan with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(837) 344-6578",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Boxing Equipment", "Elliptical Machines", "Cardio Punching Bags", "Rowing Machines", "SkiErg", "Jump Ropes", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Tricep Extension Machine", "Bench Press", "Tricep Extension Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Russian Twist Machine", "Agility Ladders", "Balance Boards", "BOSU Balls", "Foam Rollers", "Agility Cones", "Speed Cords", "CrossFit Equipment", "Barre Equipment", "Massage Chairs"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor", "Aqua Fitness Instructor"],
    amenities: ["Locker Rentals", "Protein Shakes", "Personal Training Sessions", "Fresh Fruit Bar", "Water Stations", "Toiletries", "Group Fitness Classes", "Nutrition Counseling", "Towel Service", "Equipment Orientation"],
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
    hasNutritionCounseling: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "ab393ced-f6ff-4b13-ba66-67e9c27fca5c",
    vesselId: "ss-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(973) 176-7072",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Treadmills", "Rowing Machines", "VersaClimber", "Elliptical Machines", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Cable Woodchopper Machine", "Smith Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Tricep Pushdown Machine", "Cable Upright Row Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Front Raise Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Calf Raise Machine", "Kettlebells", "Agility Ladders", "Foam Rollers", "Plyo Boxes", "Stability Balls", "Speed Cords", "Speed Bands", "Yoga Straps"],
    personalTrainers: ["Yoga Instructor", "Youth Fitness Specialist", "Strength Training Specialist", "Pilates Instructor"],
    amenities: ["Workout Programs", "Protein Shakes", "Audio/Visual Entertainment", "Towel Service", "Water Stations", "Body Composition Analysis", "Fresh Fruit Bar", "Fitness Consultations", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
      }
    ],
    isPopular: true
  },
  {
    id: "8bfe0ea7-cce3-4284-97a5-ca46abed53c4",
    vesselId: "sv--gale",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around San Juan. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(117) 841-8339",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Air Bikes", "SkiErg", "Cardio Kettlebells", "Jump Ropes", "Recumbent Bikes", "Spin Bikes", "Cardio Punching Bags", "Cable Calf Raise Machine", "Weight Machines", "Cable Single Arm Single Leg Calf Raise Machine", "Barbells", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Medicine Balls", "Resistance Bands", "Speed Harnesses", "Agility Hurdles", "Agility Cones", "Weighted Vests", "BOSU Balls", "Yoga Bolsters"],
    personalTrainers: ["Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Nutrition Counseling", "Audio/Visual Entertainment", "Towel Service", "Group Fitness Classes", "Personal Training Sessions", "Body Composition Analysis", "Fresh Fruit Bar", "Equipment Orientation", "Toiletries", "Smoothie Bar", "Water Stations", "Locker Rentals"],
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
      }
    ],
    isPopular: false
  }
];
