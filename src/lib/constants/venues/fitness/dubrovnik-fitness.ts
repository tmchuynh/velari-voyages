// Fitness center venues data for Dubrovnik
// This file contains fitness center and wellness facility information for cruise vessels operating from Dubrovnik
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const dubrovnikFitnessCenters: FitnessCenter[] = [
  {
    id: "fb81fda5-8dba-4428-a1c6-16ba818111ac",
    vesselId: "my--explorer",
    name: "MY  Explorer Fitness Center",
    description: "MY  Explorer Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(846) 436-8618",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "VersaClimber", "Elliptical Machines", "Punching Bags", "Cardio Kickboxing Bags", "Boxing Equipment", "SkiErg", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Face Pull Machine", "Cable Deadlift Machine", "Free Weights", "Cable Plank Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Glute Kickback Machine", "Barbells", "Cable Machines", "Cable Upright Row Machine", "Agility Poles", "Sledgehammers", "Kettlebells", "Slam Balls", "Resistance Bands", "Agility Ladders", "Sandbags", "Agility Markers", "Functional Training Equipment"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist"],
    amenities: ["Equipment Orientation", "Towel Service", "Water Stations", "Personal Training Sessions", "Hair Dryers", "Group Fitness Classes", "Toiletries", "Fitness Consultations"],
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
    id: "ad02bb64-6513-4940-ac2f-652aeadb7666",
    vesselId: "ly-dubrovnik-voyager",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the LY Dubrovnik Voyager. Stay active and healthy while cruising the waters near Dubrovnik with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(639) 185-4553",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Agility Hurdles", "Treadmills", "Cardio Kickboxing Bags", "Elliptical Machines", "Cable Single Arm Single Leg Shrug Machine", "Bench Press", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Back Extension Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Speed Resistors", "Speed Sleds", "Speed Cords", "Foam Rollers", "Agility Ladders", "Medicine Balls", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Protein Shakes", "Personal Training Sessions", "Locker Rentals", "Fresh Fruit Bar", "Body Composition Analysis", "Smoothie Bar", "Fitness Consultations", "Group Fitness Classes", "Hair Dryers"],
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
    id: "6c61a283-dee8-401c-ac10-02db2d2eeef4",
    vesselId: "nb--of-the-deep",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the NB  of the Deep. Stay active and healthy while cruising the waters near Dubrovnik with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(239) 164-2809",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Stationary Bikes", "Spin Bikes", "Cardio Resistance Bands", "Cardio Step Platforms", "Battle Ropes", "Agility Hurdles", "Cardio Gliders", "Recumbent Bikes", "Jump Ropes", "Cable Single Arm Calf Raise Machine", "Cable Upright Row Machine", "Smith Machines", "Cable Single Arm Bicep Curl Machine", "Cable Woodchopper Machine", "Tricep Extension Machine", "Smith Machine", "Cable Single Arm Tricep Extension Machine", "Pull-up Station", "Cable Ab Crunch Machine", "Cable Single Arm Row Machine", "Cable Squat Machine", "Speed Resistors", "BOSU Balls", "Foam Rollers", "Speed Hurdles", "Jump Boxes", "Plyo Boxes", "Yoga Mats", "Agility Markers", "Pilates Reformers", "Cryotherapy Chamber", "Barre Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Corrective Exercise Specialist", "Certified Personal Trainer", "Aqua Fitness Instructor"],
    amenities: ["Toiletries", "Equipment Orientation", "Smoothie Bar", "Water Stations", "Audio/Visual Entertainment", "Workout Programs", "Locker Rentals", "Group Fitness Classes", "Towel Service", "Nutrition Counseling", "Fitness Consultations", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "4f48afdd-db10-4082-ab3c-981a032a6ae0",
    vesselId: "fv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the FV The  Mariner. Stay active and healthy while cruising the waters near Dubrovnik with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(305) 864-9848",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Battle Ropes", "Recumbent Bikes", "Air Bikes", "Cardio Step Platforms", "Cardio Kettlebells", "Cardio Punching Bags", "Boxing Equipment", "Cardio Kickboxing Bags", "Weight Machines", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Single Leg Squat Machine", "Back Extension Machine", "Cable Single Arm Single Leg Deadlift Machine", "Plate Loaded Machines", "Calf Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Speed Ladders", "Sledgehammers", "Agility Hurdles", "Foam Rollers", "Tire Flips", "Balance Boards", "Yoga Straps", "Infrared Therapy"],
    personalTrainers: ["Yoga Instructor", "Certified Personal Trainer", "Youth Fitness Specialist"],
    amenities: ["Locker Rentals", "Towel Service", "Smoothie Bar", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Equipment Orientation", "Group Fitness Classes", "Nutrition Counseling", "Protein Shakes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
    id: "0d23fb88-3b88-4756-8d18-26aceebf3232",
    vesselId: "nb--gale",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(811) 760-4703",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "SkiErg", "Stationary Bikes", "Arc Trainers", "Cardio Punching Bags", "Cardio Kettlebells", "Cardio Step Platforms", "Agility Hurdles", "Elliptical Machines", "Cardio Gliders", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Smith Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Lateral Raise Machine", "Free Weights", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Kettlebells", "Speed Cords", "Slam Balls", "Speed Harnesses", "Resistance Bands", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor", "Certified Personal Trainer", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Protein Shakes", "Nutrition Counseling", "Hair Dryers", "Water Stations", "Toiletries", "Equipment Orientation", "Fresh Fruit Bar", "Personal Training Sessions", "Workout Programs", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "1632fca3-fed4-4652-9fa7-096f475cbe0e",
    vesselId: "nb--explorer",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the NB  Explorer. Stay active and healthy while cruising the waters near Dubrovnik with our state-of-the-art fitness facilities.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(719) 575-8803",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Cardio Kickboxing Bags", "Punching Bags", "Spin Bikes", "Battle Ropes", "Air Bikes", "Arc Trainers", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Shoulder Press Machine", "Cable Back Extension Machine", "Chest Fly Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Bicep Curl Machine", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Reverse Fly Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "TRX Suspension Trainers", "Sledgehammers", "Jump Boxes", "Speed Hurdles", "Balance Boards", "Cryotherapy Chambers", "Yoga Straps"],
    personalTrainers: ["Youth Fitness Specialist", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Equipment Orientation", "Water Stations", "Group Fitness Classes", "Audio/Visual Entertainment", "Toiletries", "Hair Dryers", "Fresh Fruit Bar", "Fitness Consultations", "Workout Programs", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    isPopular: true
  },
  {
    id: "d04f816e-e290-4c05-9a82-059b6b9c2575",
    vesselId: "sv-dubrovnik-voyager",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(607) 838-5668",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "SkiErg", "Stationary Bikes", "Elliptical Machines", "Arc Trainers", "Cardio Resistance Bands", "Cardio Kettlebells", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Russian Twist Machine", "Foam Rollers", "Agility Cones", "Jump Boxes", "Weighted Vests", "Agility Hurdles", "Speed Cords", "Agility Dots", "Plyo Boxes", "Massage Chairs", "Kickboxing Equipment"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach", "Aqua Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Body Composition Analysis", "Audio/Visual Entertainment", "Smoothie Bar", "Towel Service", "Workout Programs", "Fitness Consultations"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
      }
    ],
    isPopular: false
  },
  {
    id: "620295c0-fff7-4f01-a7dd-6e2ce0d582a1",
    vesselId: "cs--of-the-deep",
    name: "CS  of the Deep Fitness Center",
    description: "Welcome to CS  of the Deep Fitness Center, your premier wellness destination aboard the CS  of the Deep. Stay active and healthy while cruising the waters near Dubrovnik with our state-of-the-art fitness facilities. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(669) 730-2761",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Jump Ropes", "Stationary Bikes", "Punching Bags", "StairMaster", "Elliptical Machines", "Cardio Medicine Balls", "Cardio Kettlebells", "Arc Trainers", "Treadmills", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Deadlift Machine", "Stability Balls", "Medicine Balls", "Weighted Vests", "Speed Cords", "Balance Boards", "Agility Ladders", "Foam Rollers", "Infrared Therapy", "Aqua Fitness Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Youth Fitness Specialist", "Pilates Instructor"],
    amenities: ["Workout Programs", "Towel Service", "Water Stations", "Fitness Tracking", "Personal Training Sessions", "Audio/Visual Entertainment", "Group Fitness Classes", "Protein Shakes"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    id: "bb63dd43-7c44-45f9-b425-3923bde3c494",
    vesselId: "rv-the--mariner",
    name: "Dubrovnik Fitness Center",
    description: "Dubrovnik Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(956) 967-4641",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Arc Trainers", "Cardio Gliders", "VersaClimber", "Stationary Bikes", "Cardio Kettlebells", "Cardio Kickboxing Bags", "Cable Single Arm Hip Thrust Machine", "Cable Lateral Raise Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Ab Crunch Machine", "Cable Hip Thrust Machine", "Leg Curl Machine", "Free Weights", "Cable Single Arm Single Leg Pallof Press Machine", "Abdominal Crunch Machine", "Cable Russian Twist Machine", "Dumbbells", "Agility Dots", "Weighted Vests", "Agility Markers", "Stability Balls", "Jump Boxes", "Sledgehammers", "Speed Harnesses", "Kettlebells", "Infrared Sauna", "Cryotherapy Chamber", "Barre Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Spinning Instructor", "Strength and Conditioning Coach"],
    amenities: ["Fitness Consultations", "Fitness Tracking", "Locker Rentals", "Group Fitness Classes", "Equipment Orientation", "Nutrition Counseling", "Workout Programs", "Smoothie Bar"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "c260d105-31fb-49ea-9bfa-fbb016d1ce6f",
    vesselId: "fv--gale",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Dubrovnik. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(174) 487-9720",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Arc Trainers", "Cardio Step Platforms", "Elliptical Machines", "Rowing Machines", "Treadmills", "Spin Bikes", "Cardio Punching Bags", "Cable Single Arm Single Leg Tricep Extension Machine", "Smith Machine", "Cable Single Arm Single Leg Shrug Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Deadlift Machine", "Barbells", "Cable Single Arm Single Leg Upright Row Machine", "Lat Pulldown", "Cable Single Arm Single Leg Face Pull Machine", "Speed Cords", "Agility Hurdles", "Speed Sleds", "Yoga Mats", "Agility Markers", "Jump Boxes", "Speed Bands", "Stability Balls", "Aqua Fitness Equipment", "Kickboxing Equipment", "Stretching Stations"],
    personalTrainers: ["Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Personal Training Sessions", "Protein Shakes", "Nutrition Counseling", "Workout Programs", "Equipment Orientation", "Fitness Consultations", "Toiletries", "Water Stations", "Fitness Tracking"],
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
    isPopular: true
  }
];
