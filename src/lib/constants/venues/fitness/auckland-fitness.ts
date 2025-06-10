// Fitness center venues data for Auckland
// This file contains fitness center and wellness facility information for cruise vessels operating from Auckland
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const aucklandFitnessCenters: FitnessCenter[] = [
  {
    id: "91a42448-3bd1-4c99-876b-bb2d206bbed8",
    vesselId: "mv--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Auckland. Our facility features sauna facilities.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(558) 250-8855",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Jump Ropes", "Battle Ropes", "Boxing Equipment", "StairMaster", "Rowing Machines", "Cable Single Arm Lunge Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Row Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Weight Machines", "Bench Press", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Deadlift Machine", "Medicine Balls", "Speed Bands", "TRX Suspension Trainers", "Kettlebells", "Pilates Reformers", "Stretching Stations", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Protein Shakes", "Fitness Tracking", "Water Stations", "Body Composition Analysis", "Group Fitness Classes", "Workout Programs", "Towel Service", "Smoothie Bar", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
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
    isPopular: false
  },
  {
    id: "f4c078bf-260d-4927-9882-0fdecc733df5",
    vesselId: "rv-auckland-voyager",
    name: "RV Auckland Voyager Fitness Center",
    description: "RV Auckland Voyager Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(688) 393-6937",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "SkiErg", "Treadmills", "Cardio Kickboxing Bags", "Cardio Gliders", "Arc Trainers", "Agility Hurdles", "Battle Ropes", "Stationary Bikes", "Power Rack", "Free Weights", "Abdominal Crunch Machine", "Plate Loaded Machines", "Cable Single Arm Back Extension Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Bicep Curl Machine", "Cable Hip Thrust Machine", "Cable Woodchopper Machine", "Tricep Extension Machine", "Cable Face Pull Machine", "TRX Suspension Trainers", "Sledgehammers", "Agility Cones", "Plyo Boxes", "Infrared Sauna", "HydroMassage Beds", "Yoga Bolsters"],
    personalTrainers: ["Aqua Fitness Instructor", "Corrective Exercise Specialist", "Group Fitness Instructor", "Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Hair Dryers", "Locker Rentals", "Smoothie Bar", "Fitness Tracking", "Nutrition Counseling", "Audio/Visual Entertainment", "Body Composition Analysis", "Fitness Consultations", "Group Fitness Classes", "Towel Service", "Workout Programs"],
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "946df5ac-590d-4332-baa8-640339a91f23",
    vesselId: "sy--of-the-deep",
    name: "Auckland Fitness Center",
    description: "Auckland Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(705) 259-7945",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Cardio Medicine Balls", "Spin Bikes", "Cardio Resistance Bands", "Punching Bags", "Elliptical Machines", "Bicep Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Leg Extension Machine", "Cable Machines", "Cable Crossover Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Abdominal Crunch Machine", "Kettlebells", "Sledgehammers", "Speed Parachutes", "Agility Poles", "Speed Harnesses", "Jump Boxes", "Foam Rollers", "Massage Chairs", "Pilates Reformers", "Boxing Equipment"],
    personalTrainers: ["Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Fresh Fruit Bar", "Towel Service", "Water Stations", "Hair Dryers", "Fitness Consultations", "Workout Programs", "Fitness Tracking", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "939dac2f-848c-4136-9112-cab0d8704488",
    vesselId: "my-the--mariner",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the MY The  Mariner. Stay active and healthy while cruising the waters near Auckland with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(159) 746-3699",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Elliptical Machines", "Cardio Punching Bags", "Battle Ropes", "Rowing Machines", "Cardio Resistance Bands", "Arc Trainers", "Cardio Gliders", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Lunge Machine", "Smith Machine", "Cable Lateral Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Upright Row Machine", "Speed Resistors", "Speed Ladders", "Speed Hurdles", "TRX Suspension Trainers", "Foam Rollers", "Tire Flips", "Agility Ladders", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Tracking", "Body Composition Analysis", "Personal Training Sessions", "Equipment Orientation", "Hair Dryers", "Smoothie Bar", "Fresh Fruit Bar", "Locker Rentals", "Protein Shakes", "Water Stations", "Towel Service", "Audio/Visual Entertainment"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
  },
  {
    id: "917dcca9-07c2-42c4-ac0c-37745f06cd57",
    vesselId: "ps--gale",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the PS  Gale. Stay active and healthy while cruising the waters near Auckland with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(557) 204-7318",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Recumbent Bikes", "Stationary Bikes", "Cardio Gliders", "VersaClimber", "Arc Trainers", "Rowing Machines", "StairMaster", "Cardio Punching Bags", "Cable Single Arm Shrug Machine", "Leg Curl Machine", "Chest Press Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Ab Crunch Machine", "Plate Loaded Machines", "Cable Row Machine", "Cable Bicep Curl Machine", "Agility Poles", "Sandbags", "Speed Harnesses", "TRX Suspension Trainers", "Plyo Boxes", "Agility Dots", "Cryotherapy Chamber", "Infrared Therapy", "CrossFit Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Strength and Conditioning Coach", "Aqua Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Fitness Tracking", "Protein Shakes", "Body Composition Analysis", "Fitness Consultations", "Workout Programs", "Nutrition Counseling", "Group Fitness Classes", "Locker Rentals", "Personal Training Sessions", "Smoothie Bar", "Hair Dryers"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "889fa11c-83f9-4e30-bd47-cef99ab51d89",
    vesselId: "sy--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(518) 876-2139",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Agility Hurdles", "Cardio Punching Bags", "Battle Ropes", "Boxing Equipment", "Cardio Gliders", "Recumbent Bikes", "Cardio Kettlebells", "Leg Press Machine", "Cable Row Machine", "Cable Single Arm Tricep Extension Machine", "Leg Curl Machine", "Leg Extension Machine", "Cable Ab Crunch Machine", "Chest Fly Machine", "Chest Press Machine", "Agility Markers", "Agility Cones", "TRX Suspension Trainers", "Speed Hurdles", "Yoga Bolsters", "Cryotherapy Chambers"],
    personalTrainers: ["Strength and Conditioning Coach", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Workout Programs", "Hair Dryers", "Nutrition Counseling", "Audio/Visual Entertainment", "Towel Service", "Body Composition Analysis", "Toiletries", "Water Stations", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
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
      }
    ],
    isPopular: false
  },
  {
    id: "f6f9cac9-0dd8-4ed3-b5e6-73ddc14cfdc6",
    vesselId: "hms-auckland-voyager",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the HMS Auckland Voyager. Stay active and healthy while cruising the waters near Auckland with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(111) 181-1217",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Gliders", "Arc Trainers", "Treadmills", "Cardio Resistance Bands", "Elliptical Machines", "SkiErg", "Cable Machines", "Cable Lunge Machine", "Weight Machines", "Smith Machines", "Barbells", "Leg Press Machine", "Cable Calf Raise Machine", "Chest Press Machine", "Bicep Curl Machine", "Cable Woodchopper Machine", "Jump Boxes", "Sledgehammers", "Agility Markers", "TRX Suspension Trainers", "Agility Hurdles", "Speed Cords", "Dance Fitness Equipment", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Spinning Instructor", "Pilates Instructor"],
    amenities: ["Equipment Orientation", "Body Composition Analysis", "Hair Dryers", "Smoothie Bar", "Water Stations", "Audio/Visual Entertainment", "Group Fitness Classes", "Towel Service", "Workout Programs", "Locker Rentals", "Protein Shakes"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "ce6b065a-8d4b-4877-9896-58497148c4e5",
    vesselId: "ms--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(259) 588-8116",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "SkiErg", "Battle Ropes", "Arc Trainers", "Elliptical Machines", "Punching Bags", "Recumbent Bikes", "Cable Squat Machine", "Shoulder Press Machine", "Cable Lunge Machine", "Free Weights", "Cable Calf Raise Machine", "Chest Fly Machine", "Cable Bicep Curl Machine", "Leg Press Machine", "Chest Press Machine", "Balance Boards", "Jump Boxes", "Speed Cones", "Weighted Vests", "Agility Ladders", "Speed Harnesses", "Agility Cones", "Compression Therapy"],
    personalTrainers: ["Strength Training Specialist", "Corrective Exercise Specialist", "Yoga Instructor", "Youth Fitness Specialist"],
    amenities: ["Workout Programs", "Smoothie Bar", "Nutrition Counseling", "Towel Service", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Fitness Consultations", "Body Composition Analysis"],
    is24Hours: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
    id: "b44865c4-0cbf-4583-97d2-d32d9fd0e514",
    vesselId: "hms-the--mariner",
    name: "Auckland Fitness Center",
    description: "Auckland Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(994) 602-4810",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Cardio Kickboxing Bags", "Punching Bags", "Battle Ropes", "Cardio Kettlebells", "Recumbent Bikes", "VersaClimber", "Stationary Bikes", "Cardio Punching Bags", "Cable Bicep Curl Machine", "Cable Tricep Pushdown Machine", "Chest Fly Machine", "Weight Machines", "Leg Curl Machine", "Tricep Extension Machine", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Pallof Press Machine", "BOSU Balls", "Speed Resistors", "Speed Sleds", "Medicine Balls", "Functional Training Equipment", "Yoga Straps"],
    personalTrainers: ["Group Fitness Instructor", "Youth Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Toiletries", "Locker Rentals", "Nutrition Counseling", "Hair Dryers", "Towel Service", "Water Stations", "Workout Programs", "Smoothie Bar", "Body Composition Analysis", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "6e1ca9db-b860-4f57-a879-52e7f6dd914e",
    vesselId: "rv--gale",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the RV  Gale. Stay active and healthy while cruising the waters near Auckland with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(736) 983-4556",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Boxing Equipment", "Cardio Kettlebells", "Stationary Bikes", "Jump Ropes", "Cardio Step Platforms", "Cardio Kickboxing Bags", "Punching Bags", "Battle Ropes", "Cardio Punching Bags", "Cable Lunge Machine", "Cable Single Arm Face Pull Machine", "Cable Bicep Curl Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Plank Machine", "Speed Harnesses", "TRX Suspension Trainers", "Yoga Mats", "Plyo Boxes", "Resistance Bands", "Jump Boxes", "Agility Cones", "CrossFit Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Workout Programs", "Group Fitness Classes", "Fitness Tracking", "Hair Dryers", "Personal Training Sessions", "Protein Shakes", "Smoothie Bar", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  }
];
