// Fitness center venues data for Glacier Bay
// This file contains fitness center and wellness facility information for cruise vessels operating from Glacier Bay
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const glacierBayFitnessCenters: FitnessCenter[] = [
  {
    id: "101860bd-c78a-40a6-911c-824eca86cd22",
    vesselId: "cs--explorer",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the CS  Explorer. Stay active and healthy while cruising the waters near Glacier Bay with our state-of-the-art fitness facilities. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(941) 213-7657",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "VersaClimber", "Cardio Step Platforms", "Treadmills", "Boxing Equipment", "Arc Trainers", "Air Bikes", "Elliptical Machines", "Punching Bags", "Jump Ropes", "Cable Single Arm Ab Crunch Machine", "Barbells", "Leg Extension Machine", "Cable Single Arm Calf Raise Machine", "Cable Calf Raise Machine", "Power Rack", "Functional Trainers", "Pull-up Station", "Stability Balls", "Speed Bands", "Plyo Boxes", "Agility Poles", "Speed Cords", "Sandbags", "Kettlebells", "TRX Suspension Trainers", "Yoga Bolsters", "Recovery Tools"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Strength and Conditioning Coach", "Senior Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Equipment Orientation", "Toiletries", "Hair Dryers", "Workout Programs", "Protein Shakes", "Towel Service", "Fitness Tracking", "Audio/Visual Entertainment", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
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
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "fb9dded0-fef6-4105-b09d-b302e6765588",
    vesselId: "ss-glacier-bay-voyager",
    name: "SS Glacier Bay Voyager Fitness Center",
    description: "SS Glacier Bay Voyager Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Glacier Bay. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(392) 197-4338",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Cardio Medicine Balls", "Battle Ropes", "StairMaster", "Cardio Gliders", "Cardio Kickboxing Bags", "Recumbent Bikes", "Spin Bikes", "VersaClimber", "Cable Row Machine", "Calf Raise Machine", "Cable Single Arm Face Pull Machine", "Power Rack", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Russian Twist Machine", "Cable Single Arm Glute Kickback Machine", "BOSU Balls", "Plyo Boxes", "Resistance Bands", "Speed Parachutes", "Foam Rollers", "CrossFit Equipment", "TRX Suspension Trainers", "Pilates Reformers", "Dance Fitness Equipment", "Yoga Straps"],
    personalTrainers: ["Group Fitness Instructor", "Strength and Conditioning Coach", "Senior Fitness Specialist", "Corrective Exercise Specialist"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Equipment Orientation", "Fitness Tracking", "Fitness Consultations", "Toiletries", "Water Stations", "Smoothie Bar", "Fresh Fruit Bar", "Nutrition Counseling", "Towel Service", "Audio/Visual Entertainment", "Locker Rentals"],
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
    hasFitnessAssessments: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "698a51e2-5731-403b-b54b-43bdfb0ef25d",
    vesselId: "rms--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(640) 516-1454",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Medicine Balls", "Elliptical Machines", "Boxing Equipment", "Air Bikes", "Cardio Gliders", "Cardio Resistance Bands", "SkiErg", "Cable Single Arm Shoulder Press Machine", "Pull-up Station", "Cable Crossover Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Upright Row Machine", "Cable Single Arm Ab Crunch Machine", "Cable Row Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Seated Row Machine", "Cable Lunge Machine", "Cable Single Arm Single Leg Face Pull Machine", "BOSU Balls", "Agility Cones", "Sandbags", "Jump Boxes", "Weighted Vests", "Sledgehammers", "Infrared Sauna", "Float Tanks", "Spinning Bikes"],
    personalTrainers: ["Spinning Instructor", "Strength Training Specialist"],
    amenities: ["Toiletries", "Fitness Tracking", "Protein Shakes", "Group Fitness Classes", "Towel Service", "Workout Programs", "Hair Dryers", "Body Composition Analysis", "Water Stations", "Locker Rentals", "Fresh Fruit Bar"],
    is24Hours: true,
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "0762c203-f336-4454-903e-38af2dfc9fe8",
    vesselId: "rv-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Glacier Bay. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(275) 542-1360",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Rowing Machines", "Jump Ropes", "Stationary Bikes", "Treadmills", "Agility Hurdles", "SkiErg", "Cardio Step Platforms", "Cable Single Arm Lunge Machine", "Chest Fly Machine", "Cable Machines", "Chest Press Machine", "Smith Machine", "Cable Glute Kickback Machine", "Cable Single Arm Lat Pulldown Machine", "Calf Raise Machine", "Cable Crossover Machine", "Cable Squat Machine", "Balance Boards", "Speed Cords", "Jump Boxes", "Tire Flips", "Stability Balls", "Speed Parachutes", "Agility Dots", "Agility Ladders", "HydroMassage Beds", "Recovery Tools", "Boxing Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Towel Service", "Personal Training Sessions", "Fitness Consultations", "Fresh Fruit Bar", "Workout Programs", "Hair Dryers", "Fitness Tracking", "Toiletries"],
    is24Hours: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "2acedd85-298a-40a8-89a8-e3ae0ec16ab6",
    vesselId: "my--gale",
    name: "Glacier Bay Fitness Center",
    description: "Glacier Bay Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Glacier Bay. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(946) 651-7280",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Boxing Equipment", "Cardio Kettlebells", "Rowing Machines", "Cardio Medicine Balls", "Cardio Step Platforms", "VersaClimber", "Agility Hurdles", "Elliptical Machines", "Cable Lunge Machine", "Cable Single Arm Back Extension Machine", "Lat Pulldown", "Leg Press Machine", "Bench Press", "Shoulder Press Machine", "Cable Single Arm Bicep Curl Machine", "Cable Face Pull Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Shrug Machine", "TRX Suspension Trainers", "Weighted Vests", "Speed Bands", "Sandbags", "Speed Harnesses", "Yoga Straps", "Yoga Equipment", "Yoga Wheels"],
    personalTrainers: ["Senior Fitness Specialist", "Strength and Conditioning Coach"],
    amenities: ["Fitness Consultations", "Hair Dryers", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Fitness Tracking", "Protein Shakes", "Personal Training Sessions", "Locker Rentals", "Smoothie Bar", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    id: "3afc3ffb-d53c-4ab5-b801-b652b6d5f9e9",
    vesselId: "fv--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(326) 915-7348",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "VersaClimber", "Cardio Punching Bags", "Cardio Step Platforms", "Punching Bags", "Cardio Kickboxing Bags", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Upright Row Machine", "Shoulder Press Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Squat Machine", "Chest Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Speed Sleds", "Speed Harnesses", "BOSU Balls", "Sledgehammers", "Speed Hurdles", "Foam Rollers", "Agility Ladders", "Tire Flips", "Barre Equipment", "Massage Chairs", "Yoga Wheels"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Fitness Tracking", "Fitness Consultations", "Equipment Orientation", "Toiletries", "Group Fitness Classes", "Protein Shakes", "Nutrition Counseling", "Body Composition Analysis", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Locker Rentals", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "61574869-4722-4257-9f8a-b4367a8f0460",
    vesselId: "cs-glacier-bay-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(603) 722-1942",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Boxing Equipment", "VersaClimber", "Rowing Machines", "Jump Ropes", "Elliptical Machines", "Cardio Step Platforms", "Treadmills", "StairMaster", "Spin Bikes", "Cable Single Arm Single Leg Shrug Machine", "Cable Squat Machine", "Plate Loaded Machines", "Leg Curl Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Ab Crunch Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Plank Machine", "Agility Ladders", "Agility Hurdles", "Agility Poles", "Kettlebells", "Balance Boards", "Cryotherapy Chamber", "Spinning Bikes"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer", "Pilates Instructor", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Water Stations", "Nutrition Counseling", "Toiletries", "Fresh Fruit Bar", "Workout Programs", "Personal Training Sessions", "Group Fitness Classes", "Fitness Consultations"],
    is24Hours: false,
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
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "971cd2df-e7e0-4baf-91b3-423846b04676",
    vesselId: "my--of-the-deep",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the MY  of the Deep. Stay active and healthy while cruising the waters near Glacier Bay with our state-of-the-art fitness facilities. Our facility features pool area, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(918) 915-3060",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Boxing Equipment", "Cardio Kickboxing Bags", "Cardio Step Platforms", "Stationary Bikes", "Elliptical Machines", "Spin Bikes", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Back Extension Machine", "Chest Press Machine", "Cable Machines", "Lat Pulldown", "Cable Face Pull Machine", "Cable Upright Row Machine", "Back Extension Machine", "Cable Bicep Curl Machine", "Speed Ladders", "Agility Markers", "Agility Poles", "Speed Cords", "TRX Suspension Trainers", "Kettlebells", "Stability Balls", "Plyo Boxes", "Spinning Bikes"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Fitness Tracking", "Protein Shakes", "Equipment Orientation", "Locker Rentals", "Water Stations", "Smoothie Bar", "Group Fitness Classes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
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
    isPopular: true
  },
  {
    id: "f9937df6-fcfd-4ff5-8e2b-19101bf7b6ac",
    vesselId: "ts-the--mariner",
    name: "TS The  Mariner Fitness Center",
    description: "TS The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(325) 207-5029",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Punching Bags", "Treadmills", "Boxing Equipment", "Air Bikes", "SkiErg", "Cardio Step Platforms", "Cardio Gliders", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Row Machine", "Leg Curl Machine", "Smith Machine", "Cable Machines", "Cable Back Extension Machine", "Cable Upright Row Machine", "Speed Harnesses", "Speed Hurdles", "Speed Bands", "Kettlebells", "Speed Ladders", "Agility Hurdles", "Balance Boards", "Cryotherapy Chambers"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Nutrition Counseling", "Fitness Consultations", "Audio/Visual Entertainment", "Hair Dryers", "Body Composition Analysis", "Protein Shakes", "Toiletries", "Towel Service", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "aa928c5c-604c-488d-b2fc-f46c3365ec9c",
    vesselId: "ts--gale",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(680) 534-2555",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Cardio Punching Bags", "Cardio Resistance Bands", "Cardio Gliders", "Rowing Machines", "Battle Ropes", "Agility Hurdles", "Barbells", "Leg Extension Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Hip Thrust Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Lunge Machine", "Foam Rollers", "Yoga Mats", "Stability Balls", "Speed Bands", "Medicine Balls", "Agility Markers", "Spinning Bikes", "Infrared Sauna", "Massage Chairs", "Infrared Therapy", "TRX Suspension Trainers"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach", "Strength Training Specialist", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Equipment Orientation", "Hair Dryers", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Body Composition Analysis", "Smoothie Bar", "Audio/Visual Entertainment", "Workout Programs", "Toiletries", "Nutrition Counseling"],
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
  }
];
