// Fitness center venues data for Philipsburg
// This file contains fitness center and wellness facility information for cruise vessels operating from Philipsburg
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const philipsburgFitnessCenters: FitnessCenter[] = [
  {
    id: "0248e478-3258-4c45-a216-dd7f286b928f",
    vesselId: "rms--explorer",
    name: "Philipsburg Fitness Center",
    description: "Philipsburg Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(842) 350-7452",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Spin Bikes", "Treadmills", "Air Bikes", "Cardio Gliders", "Punching Bags", "Boxing Equipment", "Rowing Machines", "Jump Ropes", "Cable Single Arm Shrug Machine", "Barbells", "Cable Plank Machine", "Calf Raise Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Face Pull Machine", "Shoulder Press Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Leg Press Machine", "Speed Cords", "Speed Resistors", "Speed Bands", "Slam Balls", "Weighted Vests", "TRX Suspension Trainers", "Stretching Stations"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Protein Shakes", "Toiletries", "Towel Service", "Fresh Fruit Bar", "Personal Training Sessions", "Group Fitness Classes", "Water Stations", "Locker Rentals", "Fitness Tracking", "Equipment Orientation", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "14d3352d-b31f-4cc0-8846-2246f3641497",
    vesselId: "rms-philipsburg-voyager",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(195) 995-9198",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Jump Ropes", "Cardio Kettlebells", "Recumbent Bikes", "Cardio Punching Bags", "Cardio Medicine Balls", "Cardio Kickboxing Bags", "Cardio Resistance Bands", "Rowing Machines", "Punching Bags", "Cable Single Arm Single Leg Deadlift Machine", "Leg Press Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Upright Row Machine", "Smith Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Multi-Gym Systems", "Agility Dots", "Speed Ladders", "Balance Boards", "BOSU Balls", "Foam Rollers", "Slam Balls", "Yoga Mats", "Sledgehammers", "Cryotherapy Chambers"],
    personalTrainers: ["Youth Fitness Specialist", "Group Fitness Instructor", "Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Toiletries", "Towel Service", "Protein Shakes", "Locker Rentals", "Fresh Fruit Bar", "Smoothie Bar", "Water Stations", "Workout Programs", "Equipment Orientation", "Body Composition Analysis", "Audio/Visual Entertainment", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
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
      }
    ],
    isPopular: false
  },
  {
    id: "51b81d4b-d3ae-4898-a720-e1ff060ec4ab",
    vesselId: "ly--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Philipsburg. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(455) 929-3927",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Agility Hurdles", "VersaClimber", "Cardio Kickboxing Bags", "Boxing Equipment", "Rowing Machines", "SkiErg", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Pallof Press Machine", "Cable Single Arm Reverse Fly Machine", "Cable Tricep Pushdown Machine", "Smith Machines", "Cable Single Arm Woodchopper Machine", "Cable Reverse Fly Machine", "Abdominal Crunch Machine", "Cable Hip Thrust Machine", "Cable Single Arm Shoulder Press Machine", "Free Weights", "Speed Ladders", "Agility Ladders", "Speed Hurdles", "Resistance Bands", "Stability Balls", "CrossFit Equipment", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Toiletries", "Hair Dryers", "Fresh Fruit Bar", "Body Composition Analysis", "Water Stations", "Equipment Orientation", "Locker Rentals", "Nutrition Counseling", "Protein Shakes", "Fitness Tracking"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "f84e82d5-92e2-4e99-bc29-ad757bf90e5d",
    vesselId: "mv-the--mariner",
    name: "MV The  Mariner Fitness Center",
    description: "MV The  Mariner Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Philipsburg. Our facility features sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(882) 552-3215",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Stationary Bikes", "Cardio Kettlebells", "Punching Bags", "Cardio Resistance Bands", "Recumbent Bikes", "Agility Hurdles", "Cardio Kickboxing Bags", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Ab Crunch Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Lunge Machine", "Cable Lateral Raise Machine", "Multi-Gym Systems", "Cable Single Arm Single Leg Lateral Raise Machine", "Free Weights", "Speed Bands", "Tire Flips", "Agility Cones", "Resistance Bands", "Stability Balls", "Speed Hurdles", "Medicine Balls", "Cryotherapy Chamber", "Dance Fitness Equipment", "Kickboxing Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Hair Dryers", "Personal Training Sessions", "Fresh Fruit Bar", "Equipment Orientation", "Group Fitness Classes", "Locker Rentals", "Fitness Consultations", "Nutrition Counseling", "Towel Service"],
    is24Hours: true,
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
    hasFitnessAssessments: true,
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
    id: "2d03b4dc-213f-4a2b-b1d8-150e96ff37a4",
    vesselId: "nx--gale",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(204) 769-6471",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "StairMaster", "Boxing Equipment", "Cardio Gliders", "Arc Trainers", "SkiErg", "Cardio Kettlebells", "Jump Ropes", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Kettlebells", "Agility Ladders", "Sandbags", "Agility Poles", "Plyo Boxes", "Foam Rollers", "Cryotherapy Chambers", "Yoga Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Aqua Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Body Composition Analysis", "Hair Dryers", "Fitness Consultations", "Smoothie Bar", "Equipment Orientation", "Locker Rentals", "Group Fitness Classes", "Nutrition Counseling", "Personal Training Sessions"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    id: "22e49736-5a87-4e61-892d-2ea93f883821",
    vesselId: "nb--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Philipsburg. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(877) 214-8148",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "StairMaster", "Punching Bags", "Cardio Resistance Bands", "Elliptical Machines", "Cardio Punching Bags", "Cable Single Arm Single Leg Plank Machine", "Cable Plank Machine", "Cable Bicep Curl Machine", "Functional Trainers", "Cable Hip Thrust Machine", "Cable Ab Crunch Machine", "Cable Lateral Raise Machine", "Leg Press Machine", "Cable Glute Kickback Machine", "Agility Poles", "BOSU Balls", "TRX Suspension Trainers", "Agility Cones", "Stability Balls", "Speed Hurdles", "Speed Ladders", "Boxing Equipment"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor", "Youth Fitness Specialist"],
    amenities: ["Toiletries", "Towel Service", "Fitness Tracking", "Fresh Fruit Bar", "Water Stations", "Protein Shakes", "Equipment Orientation", "Audio/Visual Entertainment", "Body Composition Analysis", "Smoothie Bar", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "4ac89039-d792-44b7-97d2-6c7469cc331c",
    vesselId: "hms-philipsburg-voyager",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(327) 215-8722",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Battle Ropes", "Cardio Medicine Balls", "Arc Trainers", "Cardio Punching Bags", "Cardio Kickboxing Bags", "Stationary Bikes", "Boxing Equipment", "Elliptical Machines", "Jump Ropes", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Pallof Press Machine", "Weight Machines", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Shrug Machine", "Cable Single Arm Reverse Fly Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Agility Dots", "Speed Resistors", "Weighted Vests", "Plyo Boxes", "Stretching Stations"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor", "Youth Fitness Specialist"],
    amenities: ["Fitness Consultations", "Towel Service", "Smoothie Bar", "Workout Programs", "Water Stations", "Locker Rentals", "Personal Training Sessions", "Equipment Orientation", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Toiletries", "Group Fitness Classes"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    id: "36564c9b-a108-45a7-b8f9-3092a0447b55",
    vesselId: "fv--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the FV  of the Deep. Stay active and healthy while cruising the waters near Philipsburg with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(349) 363-2348",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Stationary Bikes", "Cardio Medicine Balls", "Arc Trainers", "Agility Hurdles", "Battle Ropes", "Elliptical Machines", "Rowing Machines", "Jump Ropes", "Treadmills", "Smith Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Shoulder Press Machine", "Leg Press Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Pull-up Station", "Agility Ladders", "Speed Cords", "Stability Balls", "Sledgehammers", "Slam Balls", "Medicine Balls", "Jump Boxes", "Speed Hurdles", "Boxing Equipment", "Aqua Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Towel Service", "Locker Rentals", "Water Stations", "Workout Programs", "Personal Training Sessions", "Protein Shakes", "Fitness Tracking", "Equipment Orientation", "Toiletries", "Group Fitness Classes"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "82a878c2-afcd-4df3-b0f1-ff18b1b34776",
    vesselId: "ms-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(348) 348-8253",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Agility Hurdles", "StairMaster", "Cardio Kettlebells", "Air Bikes", "Battle Ropes", "Cable Back Extension Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Machines", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Calf Raise Machine", "Chest Fly Machine", "Cable Tricep Pushdown Machine", "Agility Poles", "Slam Balls", "Agility Markers", "TRX Suspension Trainers", "Speed Harnesses", "Speed Cords", "Agility Ladders", "Speed Hurdles", "Barre Equipment", "HydroMassage Beds", "CrossFit Equipment"],
    personalTrainers: ["Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Audio/Visual Entertainment", "Protein Shakes", "Locker Rentals", "Nutrition Counseling", "Workout Programs", "Fitness Tracking", "Water Stations", "Smoothie Bar"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "961f1210-dc66-4012-b623-af818f85c966",
    vesselId: "sy--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(247) 789-7298",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Stationary Bikes", "Punching Bags", "Cardio Punching Bags", "SkiErg", "Treadmills", "StairMaster", "VersaClimber", "Cardio Kettlebells", "Cardio Medicine Balls", "Smith Machines", "Cable Single Arm Woodchopper Machine", "Bicep Curl Machine", "Cable Row Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Lunge Machine", "Barbells", "Calf Raise Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Back Extension Machine", "Plyo Boxes", "Battle Ropes", "Agility Poles", "Medicine Balls", "Resistance Bands", "Agility Cones", "Speed Parachutes", "Stability Balls", "Infrared Therapy", "Yoga Straps", "HydroMassage Beds"],
    personalTrainers: ["Youth Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Nutrition Counseling", "Group Fitness Classes", "Locker Rentals", "Audio/Visual Entertainment", "Hair Dryers", "Workout Programs", "Equipment Orientation", "Toiletries", "Protein Shakes", "Fitness Tracking", "Smoothie Bar"],
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
  }
];
