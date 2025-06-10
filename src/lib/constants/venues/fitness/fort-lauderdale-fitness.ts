// Fitness center venues data for Fort Lauderdale
// This file contains fitness center and wellness facility information for cruise vessels operating from Fort Lauderdale
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const fortLauderdaleFitnessCenters: FitnessCenter[] = [
  {
    id: "91d9e7e0-7fa7-4912-a986-1c904e1fb6a7",
    vesselId: "ss--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(764) 670-6130",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Air Bikes", "Stationary Bikes", "Cardio Kettlebells", "Cardio Punching Bags", "Battle Ropes", "Spin Bikes", "VersaClimber", "Arc Trainers", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Calf Raise Machine", "Chest Press Machine", "Cable Single Arm Back Extension Machine", "Pull-up Station", "Chest Fly Machine", "Cable Row Machine", "Free Weights", "Cable Single Arm Lat Pulldown Machine", "Cable Hip Thrust Machine", "TRX Suspension Trainers", "Slam Balls", "Speed Cords", "Speed Hurdles", "BOSU Balls", "Agility Cones", "Sandbags", "Yoga Mats", "Yoga Straps", "Kickboxing Equipment"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Workout Programs", "Equipment Orientation", "Nutrition Counseling", "Locker Rentals", "Water Stations", "Protein Shakes", "Personal Training Sessions", "Fitness Tracking", "Towel Service", "Audio/Visual Entertainment", "Fitness Consultations"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "29467b31-a0b0-400c-ac48-eb52aea889c9",
    vesselId: "fv-fort-lauderdale-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(536) 886-3036",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Rowing Machines", "Spin Bikes", "Cardio Resistance Bands", "Arc Trainers", "VersaClimber", "Cardio Kettlebells", "Agility Hurdles", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Bicep Curl Machine", "Smith Machine", "Cable Hip Thrust Machine", "Dumbbells", "TRX Suspension Trainers", "Speed Cords", "Battle Ropes", "Balance Boards", "Speed Resistors", "BOSU Balls", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Youth Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Tracking", "Group Fitness Classes", "Protein Shakes", "Water Stations", "Body Composition Analysis", "Hair Dryers", "Towel Service", "Smoothie Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    isPopular: false
  },
  {
    id: "d45992a0-3592-49cd-94e5-924ac09a5600",
    vesselId: "ss--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(851) 878-3009",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Jump Ropes", "Cardio Medicine Balls", "Elliptical Machines", "Boxing Equipment", "Battle Ropes", "Cable Single Arm Chest Press Machine", "Cable Reverse Fly Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Lateral Raise Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Squat Machine", "Agility Dots", "Resistance Bands", "TRX Suspension Trainers", "Medicine Balls", "Kettlebells", "Spinning Bikes", "Yoga Straps"],
    personalTrainers: ["Fitness Nutrition Specialist", "Pilates Instructor"],
    amenities: ["Locker Rentals", "Nutrition Counseling", "Towel Service", "Water Stations", "Protein Shakes", "Smoothie Bar", "Personal Training Sessions", "Fresh Fruit Bar", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "697bfb3f-63ae-4431-b17c-b3bc19b93f4e",
    vesselId: "cs-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Fort Lauderdale. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(206) 736-8047",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Medicine Balls", "Recumbent Bikes", "Stationary Bikes", "Elliptical Machines", "Cardio Step Platforms", "Arc Trainers", "Jump Ropes", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Face Pull Machine", "Cable Woodchopper Machine", "Cable Single Arm Reverse Fly Machine", "Bench Press", "Cable Single Arm Single Leg Squat Machine", "BOSU Balls", "Balance Boards", "Resistance Bands", "Speed Cones", "Slam Balls", "Tire Flips", "Foam Rollers", "Agility Markers", "Yoga Straps"],
    personalTrainers: ["Senior Fitness Specialist", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Workout Programs", "Hair Dryers", "Fresh Fruit Bar", "Equipment Orientation", "Fitness Consultations", "Toiletries", "Smoothie Bar", "Protein Shakes", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "b211e9c1-5141-4dbe-9aa2-70716d0a5337",
    vesselId: "hms--gale",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the HMS  Gale. Stay active and healthy while cruising the waters near Fort Lauderdale with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(353) 171-5115",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Battle Ropes", "Treadmills", "Cardio Resistance Bands", "Boxing Equipment", "Cardio Kettlebells", "Elliptical Machines", "Cardio Gliders", "Agility Hurdles", "StairMaster", "Cable Lateral Raise Machine", "Cable Pallof Press Machine", "Seated Row Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Shoulder Press Machine", "Free Weights", "Weight Machines", "Leg Curl Machine", "Cable Hip Thrust Machine", "Foam Rollers", "Agility Cones", "Agility Markers", "Plyo Boxes", "Slam Balls", "TRX Suspension Trainers", "Agility Ladders", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Pilates Instructor", "Strength and Conditioning Coach", "Certified Personal Trainer"],
    amenities: ["Audio/Visual Entertainment", "Hair Dryers", "Group Fitness Classes", "Locker Rentals", "Equipment Orientation", "Protein Shakes", "Smoothie Bar", "Fresh Fruit Bar", "Fitness Consultations"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "2183ecc5-98fa-421d-9c2e-9d1606897f43",
    vesselId: "rv--explorer",
    name: "Fort Lauderdale Fitness Center",
    description: "Fort Lauderdale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Fort Lauderdale. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(744) 196-8370",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "Cardio Resistance Bands", "Jump Ropes", "Air Bikes", "StairMaster", "Cable Row Machine", "Chest Fly Machine", "Pull-up Station", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Back Extension Machine", "Leg Press Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Hip Thrust Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Plank Machine", "Jump Boxes", "Speed Ladders", "Speed Cords", "Speed Hurdles", "Balance Boards", "Agility Cones", "Agility Markers", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Strength and Conditioning Coach", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Audio/Visual Entertainment", "Smoothie Bar", "Toiletries", "Water Stations", "Body Composition Analysis", "Fitness Tracking", "Hair Dryers", "Nutrition Counseling", "Fresh Fruit Bar", "Protein Shakes"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "48177b28-d2c1-429a-9881-c2098fb83915",
    vesselId: "nx-fort-lauderdale-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(928) 831-1890",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Rowing Machines", "Cardio Step Platforms", "Cardio Kickboxing Bags", "Arc Trainers", "Cardio Medicine Balls", "Treadmills", "StairMaster", "Seated Row Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Plank Machine", "Free Weights", "Cable Single Arm Shrug Machine", "Chest Fly Machine", "Barbells", "Smith Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Speed Bands", "Stability Balls", "Agility Hurdles", "Speed Harnesses", "Tire Flips", "Infrared Sauna"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Fitness Consultations", "Water Stations", "Nutrition Counseling", "Fitness Tracking", "Toiletries", "Equipment Orientation", "Towel Service", "Locker Rentals", "Body Composition Analysis", "Audio/Visual Entertainment", "Protein Shakes"],
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
    id: "19f2d7f7-2e90-4eee-8cb9-da9967b69acf",
    vesselId: "hms--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(711) 646-4517",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Spin Bikes", "VersaClimber", "Cardio Resistance Bands", "Cardio Punching Bags", "Elliptical Machines", "Battle Ropes", "Recumbent Bikes", "SkiErg", "Treadmills", "Functional Trainers", "Cable Single Arm Single Leg Shrug Machine", "Smith Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Hip Thrust Machine", "Cable Shrug Machine", "Cable Single Arm Row Machine", "Tricep Extension Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Leg Extension Machine", "Speed Resistors", "Slam Balls", "Medicine Balls", "BOSU Balls", "Agility Markers", "Weighted Vests", "Foam Rollers", "Functional Training Equipment", "Stretching Stations", "Yoga Wheels"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor", "Corrective Exercise Specialist", "Youth Fitness Specialist"],
    amenities: ["Toiletries", "Hair Dryers", "Protein Shakes", "Locker Rentals", "Fitness Tracking", "Body Composition Analysis", "Fitness Consultations", "Fresh Fruit Bar", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "62ac08cc-d1ef-4ba4-962e-291b9614592d",
    vesselId: "rms-the--mariner",
    name: "RMS The  Mariner Fitness Center",
    description: "RMS The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(899) 156-2766",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Rowing Machines", "StairMaster", "Cardio Medicine Balls", "Cardio Punching Bags", "Air Bikes", "Treadmills", "Arc Trainers", "Recumbent Bikes", "Chest Press Machine", "Cable Reverse Fly Machine", "Tricep Extension Machine", "Plate Loaded Machines", "Leg Curl Machine", "Free Weights", "Smith Machine", "Cable Single Arm Ab Crunch Machine", "Bicep Curl Machine", "Cable Single Arm Back Extension Machine", "Cable Face Pull Machine", "Leg Extension Machine", "Speed Cords", "Medicine Balls", "Speed Cones", "Speed Ladders", "Speed Harnesses", "Weighted Vests", "Cryotherapy Chambers", "Kickboxing Equipment", "Yoga Blocks", "Boxing Equipment", "Aqua Fitness Equipment", "Spinning Bikes"],
    personalTrainers: ["Yoga Instructor", "Certified Personal Trainer", "Spinning Instructor", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Audio/Visual Entertainment", "Group Fitness Classes", "Personal Training Sessions", "Smoothie Bar", "Equipment Orientation", "Body Composition Analysis", "Nutrition Counseling", "Water Stations", "Hair Dryers", "Locker Rentals", "Toiletries", "Fresh Fruit Bar", "Fitness Tracking", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "11c19933-29d9-40a4-9647-508ee6b5d065",
    vesselId: "ps--gale",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(956) 190-5970",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "Cardio Medicine Balls", "Battle Ropes", "StairMaster", "Spin Bikes", "Treadmills", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Dumbbells", "Cable Single Arm Face Pull Machine", "Agility Ladders", "Kettlebells", "Weighted Vests", "Speed Cones", "Agility Dots", "Sandbags", "Speed Bands", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Youth Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Hair Dryers", "Fitness Tracking", "Audio/Visual Entertainment", "Workout Programs", "Towel Service", "Protein Shakes", "Fresh Fruit Bar", "Nutrition Counseling", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
  }
];
