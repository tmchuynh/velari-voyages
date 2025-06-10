// Fitness center venues data for Victoria
// This file contains fitness center and wellness facility information for cruise vessels operating from Victoria
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const victoriaFitnessCenters: FitnessCenter[] = [
  {
    id: "a33125a6-53c9-4d0b-a6ea-3d71ab87dee1",
    vesselId: "ss--explorer",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(951) 550-8591",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "VersaClimber", "Arc Trainers", "Cardio Punching Bags", "Agility Hurdles", "Jump Ropes", "Chest Press Machine", "Cable Single Arm Shrug Machine", "Leg Press Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Battle Ropes", "Agility Markers", "TRX Suspension Trainers", "Speed Parachutes", "Stability Balls", "Slam Balls"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Water Stations", "Fresh Fruit Bar", "Towel Service", "Equipment Orientation", "Personal Training Sessions", "Audio/Visual Entertainment", "Group Fitness Classes", "Toiletries"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
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
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "3014db43-e810-45bb-a829-a2fc5fc71f25",
    vesselId: "rv-victoria-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Victoria. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(142) 414-1896",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Cardio Kettlebells", "Spin Bikes", "Treadmills", "Punching Bags", "Battle Ropes", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Free Weights", "Stability Balls", "Sandbags", "Weighted Vests", "Agility Poles", "Agility Hurdles", "Spinning Bikes", "Cryotherapy Chamber", "Yoga Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Equipment Orientation", "Group Fitness Classes", "Hair Dryers", "Toiletries", "Smoothie Bar", "Nutrition Counseling", "Audio/Visual Entertainment", "Fresh Fruit Bar"],
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "0c6fbe59-63bd-4dbd-ae0c-c148d76a889d",
    vesselId: "ms--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(602) 955-9524",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Cardio Resistance Bands", "Arc Trainers", "Cardio Kettlebells", "Rowing Machines", "Agility Hurdles", "Cardio Punching Bags", "Cardio Step Platforms", "Treadmills", "StairMaster", "Cable Single Arm Single Leg Ab Crunch Machine", "Barbells", "Cable Face Pull Machine", "Seated Row Machine", "Cable Glute Kickback Machine", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Calf Raise Machine", "Cable Upright Row Machine", "Cable Single Arm Single Leg Face Pull Machine", "Weighted Vests", "Speed Parachutes", "Slam Balls", "Kettlebells", "Battle Ropes", "Agility Cones", "Recovery Tools", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Youth Fitness Specialist"],
    amenities: ["Water Stations", "Smoothie Bar", "Group Fitness Classes", "Locker Rentals", "Fitness Tracking", "Hair Dryers", "Audio/Visual Entertainment", "Equipment Orientation", "Toiletries"],
    is24Hours: true,
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
    id: "b7e5ed2a-40e7-4173-9115-92734f24118f",
    vesselId: "ss-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Victoria. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(843) 890-8062",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Recumbent Bikes", "Elliptical Machines", "Cardio Medicine Balls", "Jump Ropes", "Stationary Bikes", "Spin Bikes", "Cardio Step Platforms", "Cardio Gliders", "Tricep Extension Machine", "Cable Glute Kickback Machine", "Cable Tricep Pushdown Machine", "Cable Face Pull Machine", "Cable Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Bicep Curl Machine", "Speed Ladders", "Resistance Bands", "Agility Ladders", "Speed Hurdles", "Speed Parachutes", "Sledgehammers", "Compression Therapy", "Yoga Equipment", "Yoga Straps"],
    personalTrainers: ["Aqua Fitness Instructor", "Yoga Instructor", "Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Towel Service", "Locker Rentals", "Toiletries", "Water Stations", "Audio/Visual Entertainment", "Body Composition Analysis", "Fitness Consultations", "Hair Dryers", "Smoothie Bar", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
    isPopular: false
  },
  {
    id: "2eb4f360-1856-4647-8644-73d2b5121eda",
    vesselId: "ps--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(455) 913-6715",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Resistance Bands", "Cardio Medicine Balls", "Elliptical Machines", "Punching Bags", "Arc Trainers", "Agility Hurdles", "Treadmills", "SkiErg", "Cable Ab Crunch Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Power Rack", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Machines", "Cable Lateral Raise Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Speed Cones", "Speed Resistors", "Agility Markers", "BOSU Balls", "Speed Harnesses", "Massage Chairs", "Dance Fitness Equipment", "CrossFit Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor", "Pilates Instructor", "Strength and Conditioning Coach"],
    amenities: ["Group Fitness Classes", "Towel Service", "Fitness Tracking", "Fresh Fruit Bar", "Nutrition Counseling", "Water Stations", "Audio/Visual Entertainment", "Fitness Consultations", "Body Composition Analysis", "Personal Training Sessions", "Smoothie Bar", "Protein Shakes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    id: "b31930cc-4320-4ee9-a8c5-0e29d512d00f",
    vesselId: "sy--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Victoria. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(322) 615-3367",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Cardio Resistance Bands", "Cardio Kickboxing Bags", "Treadmills", "Stationary Bikes", "Cardio Step Platforms", "Cardio Kettlebells", "Cable Lunge Machine", "Cable Russian Twist Machine", "Cable Tricep Pushdown Machine", "Barbells", "Cable Single Arm Bicep Curl Machine", "Functional Trainers", "Cable Row Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Bicep Curl Machine", "BOSU Balls", "Agility Markers", "Agility Cones", "TRX Suspension Trainers", "Kettlebells", "Speed Parachutes", "Pilates Reformers", "Massage Chairs", "Cryotherapy Chambers"],
    personalTrainers: ["Strength and Conditioning Coach", "Strength Training Specialist", "Senior Fitness Specialist", "Pilates Instructor", "Youth Fitness Specialist"],
    amenities: ["Hair Dryers", "Fitness Tracking", "Toiletries", "Workout Programs", "Protein Shakes", "Group Fitness Classes", "Water Stations", "Audio/Visual Entertainment", "Fitness Consultations", "Towel Service", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "4ec5ea3f-00ce-4b9f-a1f9-15b16af133c0",
    vesselId: "nb-victoria-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(328) 922-5971",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Punching Bags", "Rowing Machines", "StairMaster", "Air Bikes", "VersaClimber", "Jump Ropes", "Stationary Bikes", "Cable Reverse Fly Machine", "Cable Single Arm Lunge Machine", "Power Rack", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Front Raise Machine", "Smith Machines", "Cable Lunge Machine", "Barbells", "Agility Cones", "Speed Harnesses", "Kettlebells", "Medicine Balls", "Jump Boxes", "CrossFit Equipment", "Yoga Straps"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Fitness Consultations", "Body Composition Analysis", "Protein Shakes", "Fitness Tracking", "Locker Rentals", "Fresh Fruit Bar", "Workout Programs", "Towel Service", "Water Stations", "Audio/Visual Entertainment"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "263ed66d-1031-423c-aa68-bed8fb8c5d30",
    vesselId: "my--of-the-deep",
    name: "MY  of the Deep Fitness Center",
    description: "MY  of the Deep Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(500) 888-4340",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Cardio Kettlebells", "Agility Hurdles", "Treadmills", "Cardio Gliders", "Punching Bags", "Elliptical Machines", "Stationary Bikes", "Cardio Resistance Bands", "VersaClimber", "Cable Single Arm Russian Twist Machine", "Cable Russian Twist Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Leg Press Machine", "Barbells", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Shrug Machine", "Speed Resistors", "Agility Markers", "Jump Boxes", "Plyo Boxes", "Speed Cones", "Yoga Equipment", "Yoga Straps", "Float Tanks"],
    personalTrainers: ["Group Fitness Instructor", "Yoga Instructor", "Spinning Instructor", "Strength and Conditioning Coach"],
    amenities: ["Personal Training Sessions", "Nutrition Counseling", "Water Stations", "Locker Rentals", "Fitness Tracking", "Hair Dryers", "Body Composition Analysis", "Workout Programs", "Protein Shakes", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Fitness Consultations"],
    is24Hours: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "e6d60235-67f8-4555-8de1-24f5f7005ed1",
    vesselId: "mv-the--mariner",
    name: "MV The  Mariner Fitness Center",
    description: "Welcome to MV The  Mariner Fitness Center, your premier wellness destination aboard the MV The  Mariner. Stay active and healthy while cruising the waters near Victoria with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(165) 351-6691",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Air Bikes", "Cardio Punching Bags", "Cardio Kettlebells", "Rowing Machines", "Recumbent Bikes", "SkiErg", "Cardio Gliders", "Agility Hurdles", "Jump Ropes", "Bench Press", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Deadlift Machine", "Power Rack", "Cable Face Pull Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Smith Machine", "Back Extension Machine", "Cable Single Arm Shrug Machine", "Medicine Balls", "Foam Rollers", "Slam Balls", "Speed Parachutes", "BOSU Balls", "Agility Poles", "Spinning Bikes"],
    personalTrainers: ["Group Fitness Instructor", "Strength and Conditioning Coach", "Pilates Instructor", "Spinning Instructor"],
    amenities: ["Body Composition Analysis", "Group Fitness Classes", "Hair Dryers", "Fitness Tracking", "Workout Programs", "Personal Training Sessions", "Fitness Consultations", "Smoothie Bar", "Water Stations"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "6c819a66-407b-4388-9c50-7a45f83daed1",
    vesselId: "rms--gale",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(903) 305-3641",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Agility Hurdles", "Boxing Equipment", "Stationary Bikes", "Rowing Machines", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Punching Bags", "Cardio Gliders", "Elliptical Machines", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Calf Raise Machine", "BOSU Balls", "Plyo Boxes", "Sandbags", "Foam Rollers", "Balance Boards", "Tire Flips", "Speed Harnesses", "Stability Balls", "Spinning Bikes", "CrossFit Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Nutrition Counseling", "Fresh Fruit Bar", "Fitness Consultations", "Fitness Tracking", "Equipment Orientation", "Workout Programs", "Smoothie Bar", "Audio/Visual Entertainment", "Protein Shakes", "Body Composition Analysis", "Toiletries", "Group Fitness Classes"],
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
    hasHealthScreenings: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  }
];
