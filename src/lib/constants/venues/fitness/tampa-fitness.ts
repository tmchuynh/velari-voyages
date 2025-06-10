// Fitness center venues data for Tampa
// This file contains fitness center and wellness facility information for cruise vessels operating from Tampa
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const tampaFitnessCenters: FitnessCenter[] = [
  {
    id: "6ff8b8de-0304-48fe-9d95-a47dbc7cb90a",
    vesselId: "nb--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(673) 249-2646",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "VersaClimber", "Stationary Bikes", "Elliptical Machines", "Boxing Equipment", "Cardio Gliders", "Battle Ropes", "Treadmills", "Jump Ropes", "Cardio Resistance Bands", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Lateral Raise Machine", "Cable Calf Raise Machine", "Barbells", "Agility Markers", "Speed Hurdles", "TRX Suspension Trainers", "Speed Ladders", "Sledgehammers", "Stability Balls", "Speed Parachutes", "Infrared Sauna", "Cryotherapy Chamber", "Spinning Bikes"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Hair Dryers", "Workout Programs", "Nutrition Counseling", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Toiletries", "Audio/Visual Entertainment", "Smoothie Bar", "Equipment Orientation", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "d403a9cf-5d12-43af-b385-4122a91c2a82",
    vesselId: "nx-tampa-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tampa. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(146) 437-4139",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Battle Ropes", "Treadmills", "VersaClimber", "Boxing Equipment", "Cardio Kettlebells", "Cardio Resistance Bands", "Cable Single Arm Face Pull Machine", "Cable Reverse Fly Machine", "Leg Press Machine", "Cable Single Arm Ab Crunch Machine", "Cable Lunge Machine", "Smith Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Balance Boards", "Agility Poles", "Speed Parachutes", "Speed Hurdles", "Sandbags", "Functional Training Equipment", "Aqua Fitness Equipment", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer", "Yoga Instructor"],
    amenities: ["Personal Training Sessions", "Equipment Orientation", "Group Fitness Classes", "Audio/Visual Entertainment", "Locker Rentals", "Fitness Tracking", "Toiletries", "Fitness Consultations", "Nutrition Counseling", "Hair Dryers", "Workout Programs", "Towel Service", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "97940703-e92f-4689-b6cf-008ba7be13b3",
    vesselId: "cs--of-the-deep",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(491) 370-3110",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Jump Ropes", "Boxing Equipment", "Rowing Machines", "SkiErg", "Air Bikes", "Stationary Bikes", "VersaClimber", "Punching Bags", "Cable Single Arm Single Leg Shrug Machine", "Seated Row Machine", "Leg Extension Machine", "Cable Single Arm Row Machine", "Cable Machines", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Shoulder Press Machine", "Cable Shrug Machine", "Bicep Curl Machine", "Cable Upright Row Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Upright Row Machine", "Stability Balls", "Agility Hurdles", "Speed Parachutes", "Yoga Mats", "Speed Cones", "Kickboxing Equipment", "Spinning Bikes", "Functional Training Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Toiletries", "Fitness Consultations", "Smoothie Bar", "Hair Dryers", "Towel Service", "Audio/Visual Entertainment", "Personal Training Sessions", "Equipment Orientation", "Nutrition Counseling", "Group Fitness Classes"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "09e73d99-b301-4865-a1c4-9f3db4cb65e8",
    vesselId: "cs-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(650) 356-7298",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "VersaClimber", "Treadmills", "Cardio Gliders", "Elliptical Machines", "Battle Ropes", "Air Bikes", "Cardio Kettlebells", "Free Weights", "Cable Single Arm Single Leg Bicep Curl Machine", "Leg Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Lateral Raise Machine", "Cable Reverse Fly Machine", "Cable Single Arm Calf Raise Machine", "Tire Flips", "Speed Parachutes", "Speed Cones", "Weighted Vests", "Speed Hurdles", "Yoga Bolsters", "HydroMassage Beds", "Massage Chairs", "CrossFit Equipment", "Yoga Equipment", "Cryotherapy Chambers"],
    personalTrainers: ["Strength and Conditioning Coach", "Yoga Instructor", "Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Group Fitness Classes", "Fitness Tracking", "Fresh Fruit Bar", "Toiletries", "Nutrition Counseling", "Equipment Orientation", "Smoothie Bar", "Fitness Consultations", "Water Stations", "Workout Programs", "Locker Rentals"],
    is24Hours: false,
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
    hasHealthScreenings: true,
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
    isPopular: true
  },
  {
    id: "7bbd34a4-6c50-496c-b2aa-f05c060c4238",
    vesselId: "ts--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tampa. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(196) 493-1018",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Jump Ropes", "Cardio Resistance Bands", "Boxing Equipment", "Treadmills", "Cardio Medicine Balls", "Battle Ropes", "Rowing Machines", "Barbells", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Reverse Fly Machine", "Weight Machines", "Cable Hip Thrust Machine", "Cable Machines", "Seated Row Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Face Pull Machine", "Tire Flips", "Foam Rollers", "BOSU Balls", "Agility Cones", "Plyo Boxes", "Speed Harnesses", "Kickboxing Equipment", "Cryotherapy Chamber", "Spinning Bikes", "Yoga Equipment", "Massage Chairs"],
    personalTrainers: ["Certified Personal Trainer", "Yoga Instructor", "Pilates Instructor", "Aqua Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Equipment Orientation", "Fitness Consultations", "Workout Programs", "Body Composition Analysis", "Locker Rentals", "Hair Dryers", "Fitness Tracking", "Protein Shakes"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "fad27d2c-3fc5-40c2-9d98-5f83dfc03c28",
    vesselId: "ly--explorer",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the LY  Explorer. Stay active and healthy while cruising the waters near Tampa with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(135) 588-9644",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "VersaClimber", "Battle Ropes", "Stationary Bikes", "Treadmills", "Cardio Resistance Bands", "Agility Hurdles", "Spin Bikes", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Upright Row Machine", "Lat Pulldown", "Cable Crossover Machine", "Cable Bicep Curl Machine", "Foam Rollers", "Weighted Vests", "Kettlebells", "Balance Boards", "TRX Suspension Trainers"],
    personalTrainers: ["Strength and Conditioning Coach", "Youth Fitness Specialist", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Water Stations", "Towel Service", "Protein Shakes", "Group Fitness Classes", "Body Composition Analysis", "Hair Dryers", "Smoothie Bar", "Personal Training Sessions", "Fresh Fruit Bar", "Nutrition Counseling"],
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
    hasHealthScreenings: true,
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
    isPopular: true
  },
  {
    id: "36e1dd77-7fd5-441a-9499-ebff1ca15153",
    vesselId: "hms-tampa-voyager",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the HMS Tampa Voyager. Stay active and healthy while cruising the waters near Tampa with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(475) 231-7778",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "VersaClimber", "Air Bikes", "Stationary Bikes", "Rowing Machines", "StairMaster", "Pull-up Station", "Bicep Curl Machine", "Back Extension Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Row Machine", "Cable Row Machine", "Cable Crossover Machine", "Cable Face Pull Machine", "Leg Press Machine", "Cable Single Arm Tricep Extension Machine", "Weight Machines", "Cable Lunge Machine", "BOSU Balls", "Speed Cones", "Stability Balls", "Plyo Boxes", "Speed Hurdles", "Boxing Equipment", "Cryotherapy Chambers", "HydroMassage Beds"],
    personalTrainers: ["Strength and Conditioning Coach", "Group Fitness Instructor", "Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Audio/Visual Entertainment", "Water Stations", "Body Composition Analysis", "Toiletries", "Fitness Consultations", "Equipment Orientation", "Nutrition Counseling", "Workout Programs", "Group Fitness Classes", "Locker Rentals", "Fitness Tracking", "Hair Dryers"],
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
    id: "cc782ebb-c47a-4e75-b9c1-1dee3a5eb9b6",
    vesselId: "ts--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(444) 174-8337",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "SkiErg", "Recumbent Bikes", "Cardio Punching Bags", "Cardio Kickboxing Bags", "Punching Bags", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Squat Machine", "Bench Press", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Upright Row Machine", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Glute Kickback Machine", "Cable Woodchopper Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Back Extension Machine", "Weighted Vests", "Agility Markers", "Foam Rollers", "Speed Cones", "TRX Suspension Trainers", "Medicine Balls", "Dance Fitness Equipment", "Massage Chairs"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist"],
    amenities: ["Towel Service", "Workout Programs", "Water Stations", "Equipment Orientation", "Toiletries", "Fresh Fruit Bar", "Smoothie Bar", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "c28cb9c7-2173-4adb-892b-987395454b89",
    vesselId: "ly-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tampa. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(792) 706-1237",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Boxing Equipment", "Cardio Medicine Balls", "Cardio Resistance Bands", "SkiErg", "Treadmills", "Jump Ropes", "Air Bikes", "Stationary Bikes", "Rowing Machines", "Cable Glute Kickback Machine", "Back Extension Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Chest Fly Machine", "Jump Boxes", "Speed Parachutes", "Tire Flips", "Resistance Bands", "Speed Cords", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor"],
    amenities: ["Protein Shakes", "Smoothie Bar", "Fitness Tracking", "Group Fitness Classes", "Towel Service", "Hair Dryers", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Nutrition Counseling", "Water Stations", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
    id: "d7f65b86-b5bd-450a-8a9a-1b22f6b0138a",
    vesselId: "cs--gale",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(252) 506-8515",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "StairMaster", "Treadmills", "Boxing Equipment", "Punching Bags", "Cardio Kettlebells", "VersaClimber", "Battle Ropes", "Cardio Resistance Bands", "Cable Lunge Machine", "Cable Upright Row Machine", "Pull-up Station", "Cable Hip Thrust Machine", "Cable Squat Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Seated Row Machine", "Cable Row Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Tire Flips", "Speed Harnesses", "Foam Rollers", "Kettlebells", "Yoga Mats", "Stability Balls", "Agility Poles", "Infrared Sauna"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fitness Tracking", "Protein Shakes", "Locker Rentals", "Hair Dryers", "Towel Service", "Toiletries", "Fresh Fruit Bar", "Water Stations", "Equipment Orientation", "Nutrition Counseling", "Workout Programs"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
