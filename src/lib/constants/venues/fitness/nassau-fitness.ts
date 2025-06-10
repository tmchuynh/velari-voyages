// Fitness center venues data for Nassau
// This file contains fitness center and wellness facility information for cruise vessels operating from Nassau
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const nassauFitnessCenters: FitnessCenter[] = [
  {
    id: "6ebfdb58-601a-41d4-b23f-d9ceec103b0a",
    vesselId: "ly--explorer",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Nassau. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(512) 563-6926",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Arc Trainers", "Recumbent Bikes", "Battle Ropes", "VersaClimber", "Stationary Bikes", "Spin Bikes", "Boxing Equipment", "Cardio Kickboxing Bags", "Cable Single Arm Single Leg Front Raise Machine", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Deadlift Machine", "Leg Press Machine", "Functional Trainers", "Smith Machine", "Multi-Gym Systems", "Cable Back Extension Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Calf Raise Machine", "Cable Face Pull Machine", "Slam Balls", "Stability Balls", "Jump Boxes", "Plyo Boxes", "Kettlebells", "Speed Cords", "Spinning Bikes", "HydroMassage Beds"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Nutrition Counseling", "Toiletries", "Personal Training Sessions", "Audio/Visual Entertainment", "Locker Rentals", "Workout Programs", "Hair Dryers", "Fresh Fruit Bar", "Fitness Consultations", "Body Composition Analysis", "Protein Shakes"],
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
    hasChildcareServices: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "a3368636-9656-4e3b-bca6-c3b34c68d0d8",
    vesselId: "sv-nassau-voyager",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the SV Nassau Voyager. Stay active and healthy while cruising the waters near Nassau with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(646) 694-6464",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Cardio Step Platforms", "Cardio Kettlebells", "StairMaster", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Spin Bikes", "Treadmills", "Cardio Punching Bags", "Weight Machines", "Leg Press Machine", "Barbells", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Smith Machine", "Pull-up Station", "Cable Single Arm Lunge Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Upright Row Machine", "Speed Parachutes", "Speed Resistors", "Stability Balls", "Kettlebells", "Medicine Balls", "BOSU Balls", "Battle Ropes", "Yoga Straps", "CrossFit Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Group Fitness Instructor", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Protein Shakes", "Audio/Visual Entertainment", "Fitness Consultations", "Towel Service", "Body Composition Analysis", "Water Stations", "Group Fitness Classes", "Equipment Orientation"],
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
    hasHealthScreenings: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "99ea3158-daff-4a3d-88f5-370c4ba6f41c",
    vesselId: "rv--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Nassau. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(929) 909-3217",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Rowing Machines", "Cardio Kettlebells", "Agility Hurdles", "Treadmills", "Air Bikes", "Boxing Equipment", "Jump Ropes", "Arc Trainers", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Pallof Press Machine", "Tricep Extension Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Front Raise Machine", "Bench Press", "Stability Balls", "Speed Cords", "Sandbags", "Speed Cones", "Medicine Balls", "Battle Ropes", "HydroMassage Beds"],
    personalTrainers: ["Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Hair Dryers", "Locker Rentals", "Water Stations", "Group Fitness Classes", "Protein Shakes", "Fitness Tracking", "Towel Service", "Nutrition Counseling", "Fresh Fruit Bar", "Fitness Consultations", "Audio/Visual Entertainment", "Workout Programs"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "38181041-8da0-497e-9e7b-8b2ca32eb0a5",
    vesselId: "ms-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(479) 924-2622",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "SkiErg", "Recumbent Bikes", "Cardio Resistance Bands", "Agility Hurdles", "Air Bikes", "Cardio Kickboxing Bags", "Cable Hip Thrust Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Pull-up Station", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Power Rack", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Reverse Fly Machine", "Speed Cords", "Speed Ladders", "Sandbags", "Resistance Bands", "Tire Flips", "Speed Harnesses", "Cryotherapy Chamber", "Yoga Equipment", "Yoga Wheels", "Spinning Bikes", "Yoga Straps"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor", "Strength Training Specialist", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Equipment Orientation", "Towel Service", "Fitness Tracking", "Locker Rentals", "Protein Shakes", "Fresh Fruit Bar", "Workout Programs", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    isPopular: true
  },
  {
    id: "35b5e594-af72-46ea-a3b9-67b31825d130",
    vesselId: "hms--gale",
    name: "HMS  Gale Fitness Center",
    description: "Discover wellness at sea with HMS  Gale Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(217) 270-7413",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Punching Bags", "Cardio Gliders", "Boxing Equipment", "SkiErg", "Rowing Machines", "StairMaster", "Air Bikes", "VersaClimber", "Chest Press Machine", "Multi-Gym Systems", "Cable Glute Kickback Machine", "Cable Face Pull Machine", "Cable Row Machine", "Cable Upright Row Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Lunge Machine", "Leg Curl Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Squat Machine", "Speed Ladders", "Speed Cords", "Agility Ladders", "Plyo Boxes", "Speed Sleds", "TRX Suspension Trainers", "Slam Balls", "Speed Cones", "Aqua Fitness Equipment", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Locker Rentals", "Toiletries", "Water Stations", "Nutrition Counseling", "Equipment Orientation", "Hair Dryers", "Personal Training Sessions", "Protein Shakes", "Smoothie Bar", "Audio/Visual Entertainment", "Towel Service"],
    is24Hours: false,
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "477f80aa-a4c5-47e7-8928-00697d4551c0",
    vesselId: "nx--explorer",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the NX  Explorer. Stay active and healthy while cruising the waters near Nassau with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(312) 856-4001",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Arc Trainers", "Air Bikes", "Cardio Step Platforms", "Agility Hurdles", "Cardio Medicine Balls", "StairMaster", "Treadmills", "Cable Single Arm Single Leg Deadlift Machine", "Cable Crossover Machine", "Multi-Gym Systems", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Shrug Machine", "Cable Bicep Curl Machine", "Leg Press Machine", "Cable Ab Crunch Machine", "Smith Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Speed Cords", "Medicine Balls", "Speed Cones", "Battle Ropes", "Plyo Boxes", "Resistance Bands", "Speed Resistors", "Functional Training Equipment", "Yoga Wheels", "Yoga Blocks"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Locker Rentals", "Hair Dryers", "Towel Service", "Water Stations", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Nutrition Counseling", "Group Fitness Classes", "Workout Programs", "Body Composition Analysis", "Fitness Tracking"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
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
    id: "c91a530a-acaf-45f5-be78-33959c82c760",
    vesselId: "ms-nassau-voyager",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MS Nassau Voyager. Stay active and healthy while cruising the waters near Nassau with our state-of-the-art fitness facilities. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(509) 361-4624",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Battle Ropes", "Cardio Step Platforms", "StairMaster", "Rowing Machines", "Cardio Kickboxing Bags", "Arc Trainers", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Plank Machine", "Cable Squat Machine", "Cable Lateral Raise Machine", "Cable Single Arm Row Machine", "Barbells", "Cable Back Extension Machine", "Bicep Curl Machine", "Multi-Gym Systems", "Bench Press", "Leg Curl Machine", "Cable Single Arm Hip Thrust Machine", "Slam Balls", "Speed Cones", "Speed Parachutes", "Agility Cones", "Sandbags", "BOSU Balls", "Infrared Sauna"],
    personalTrainers: ["Strength and Conditioning Coach", "Spinning Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Nutrition Counseling", "Workout Programs", "Toiletries", "Hair Dryers", "Locker Rentals", "Body Composition Analysis", "Equipment Orientation", "Fitness Tracking"],
    is24Hours: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "6b65ebf1-4255-4d74-9fcb-779ef21c9fc6",
    vesselId: "nb--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(189) 760-6392",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Air Bikes", "Cardio Resistance Bands", "VersaClimber", "Stationary Bikes", "Cardio Gliders", "SkiErg", "Cable Row Machine", "Cable Face Pull Machine", "Leg Press Machine", "Back Extension Machine", "Multi-Gym Systems", "Cable Russian Twist Machine", "Bench Press", "Cable Bicep Curl Machine", "Power Rack", "Cable Ab Crunch Machine", "Sandbags", "Speed Sleds", "Yoga Mats", "Speed Cords", "Speed Resistors", "Agility Cones", "Kettlebells", "Pilates Reformers", "Kickboxing Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Corrective Exercise Specialist", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Hair Dryers", "Water Stations", "Equipment Orientation", "Personal Training Sessions", "Group Fitness Classes", "Nutrition Counseling", "Protein Shakes", "Smoothie Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "5998bcdd-f192-4f16-9f74-33f9d93b5f44",
    vesselId: "ts-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Nassau. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(599) 582-3413",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Kettlebells", "Treadmills", "StairMaster", "Cardio Resistance Bands", "Elliptical Machines", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Plank Machine", "Agility Cones", "Speed Hurdles", "Agility Markers", "Agility Poles", "Foam Rollers", "BOSU Balls", "Yoga Mats", "Speed Resistors", "Yoga Bolsters", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor"],
    amenities: ["Nutrition Counseling", "Fitness Consultations", "Workout Programs", "Personal Training Sessions", "Fresh Fruit Bar", "Equipment Orientation", "Body Composition Analysis", "Water Stations", "Smoothie Bar", "Locker Rentals", "Towel Service", "Audio/Visual Entertainment"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    id: "4ecdd6d4-3b83-4766-bf3c-0fe342b49b5c",
    vesselId: "rms--gale",
    name: "Nassau Fitness Center",
    description: "Discover wellness at sea with Nassau Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(965) 965-3845",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Rowing Machines", "Jump Ropes", "Arc Trainers", "Recumbent Bikes", "Cardio Medicine Balls", "StairMaster", "Spin Bikes", "Cardio Kettlebells", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Bicep Curl Machine", "Weight Machines", "Cable Russian Twist Machine", "Cable Single Arm Tricep Extension Machine", "Bench Press", "Plate Loaded Machines", "Smith Machine", "Battle Ropes", "Speed Cones", "Weighted Vests", "Balance Boards", "Speed Parachutes", "TRX Suspension Trainers", "HydroMassage Beds", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Equipment Orientation", "Personal Training Sessions", "Nutrition Counseling", "Audio/Visual Entertainment", "Fitness Consultations", "Body Composition Analysis", "Water Stations", "Hair Dryers"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
  }
];
