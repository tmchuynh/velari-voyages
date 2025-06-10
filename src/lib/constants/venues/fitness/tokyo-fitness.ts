// Fitness center venues data for Tokyo
// This file contains fitness center and wellness facility information for cruise vessels operating from Tokyo
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const tokyoFitnessCenters: FitnessCenter[] = [
  {
    id: "f3b241a5-eb85-4275-8a89-bd8b808bae34",
    vesselId: "my--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tokyo. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(111) 818-9916",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Rowing Machines", "Cardio Step Platforms", "Jump Ropes", "Battle Ropes", "Cardio Gliders", "Stationary Bikes", "Cable Single Arm Hip Thrust Machine", "Bicep Curl Machine", "Cable Single Arm Bicep Curl Machine", "Smith Machines", "Leg Press Machine", "Cable Single Arm Shoulder Press Machine", "Cable Face Pull Machine", "Cable Ab Crunch Machine", "Free Weights", "Barbells", "Yoga Mats", "Speed Cords", "Resistance Bands", "Sledgehammers", "Balance Boards", "Foam Rollers", "Jump Boxes", "Speed Ladders", "Yoga Blocks", "Yoga Bolsters"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach", "Group Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Smoothie Bar", "Nutrition Counseling", "Group Fitness Classes", "Hair Dryers", "Fresh Fruit Bar", "Personal Training Sessions", "Equipment Orientation", "Audio/Visual Entertainment", "Protein Shakes", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "b18f163e-bf5a-4969-a284-00d8e1fb3ea8",
    vesselId: "my-tokyo-voyager",
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
      contactNumber: "(435) 473-5463",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Cardio Resistance Bands", "Cardio Medicine Balls", "Rowing Machines", "Cardio Punching Bags", "Treadmills", "Cable Upright Row Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Shoulder Press Machine", "Abdominal Crunch Machine", "Cable Face Pull Machine", "Cable Single Arm Back Extension Machine", "Power Rack", "Cable Single Arm Ab Crunch Machine", "Free Weights", "Cable Machines", "Balance Boards", "TRX Suspension Trainers", "Speed Sleds", "Foam Rollers", "Agility Markers", "Battle Ropes", "Pilates Reformers"],
    personalTrainers: ["Strength and Conditioning Coach", "Senior Fitness Specialist", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Fitness Tracking", "Audio/Visual Entertainment", "Hair Dryers", "Body Composition Analysis", "Water Stations", "Fresh Fruit Bar", "Group Fitness Classes", "Smoothie Bar", "Nutrition Counseling", "Protein Shakes", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "345d3ace-11ec-4146-b3cf-02111af1cd30",
    vesselId: "rv--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(606) 127-1501",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Agility Hurdles", "StairMaster", "VersaClimber", "Spin Bikes", "Cardio Kettlebells", "Treadmills", "Elliptical Machines", "Jump Ropes", "Seated Row Machine", "Cable Calf Raise Machine", "Bench Press", "Smith Machines", "Weight Machines", "Cable Row Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Smith Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Bicep Curl Machine", "Plate Loaded Machines", "TRX Suspension Trainers", "Weighted Vests", "Speed Harnesses", "Speed Bands", "Battle Ropes", "Stability Balls", "Cryotherapy Chambers", "Dance Fitness Equipment", "Spinning Bikes"],
    personalTrainers: ["Strength and Conditioning Coach", "Certified Personal Trainer"],
    amenities: ["Smoothie Bar", "Equipment Orientation", "Towel Service", "Water Stations", "Nutrition Counseling", "Fresh Fruit Bar", "Workout Programs", "Body Composition Analysis", "Protein Shakes", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
    id: "0c70338f-695e-4bbf-a406-6bcb01d7897a",
    vesselId: "ss-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(693) 139-8154",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Recumbent Bikes", "Rowing Machines", "Cardio Punching Bags", "VersaClimber", "Battle Ropes", "Cardio Gliders", "Boxing Equipment", "Cardio Medicine Balls", "Cable Single Arm Calf Raise Machine", "Bench Press", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Lat Pulldown", "Kettlebells", "Balance Boards", "Agility Markers", "Agility Cones", "Speed Parachutes", "Agility Hurdles", "Speed Sleds", "CrossFit Equipment"],
    personalTrainers: ["Yoga Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Fitness Consultations", "Protein Shakes", "Smoothie Bar", "Workout Programs", "Water Stations", "Nutrition Counseling", "Toiletries", "Locker Rentals", "Group Fitness Classes", "Audio/Visual Entertainment", "Fresh Fruit Bar"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "f66356a8-ec92-42ab-b50f-cfe5f9a5fd1b",
    vesselId: "sv--gale",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the SV  Gale. Stay active and healthy while cruising the waters near Tokyo with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(796) 832-2864",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "StairMaster", "Air Bikes", "Cardio Kickboxing Bags", "Battle Ropes", "Cardio Resistance Bands", "VersaClimber", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Lateral Raise Machine", "Free Weights", "Cable Single Arm Chest Press Machine", "Cable Machines", "Cable Single Arm Row Machine", "Cable Back Extension Machine", "Lat Pulldown", "Chest Fly Machine", "Smith Machines", "Cable Single Arm Bicep Curl Machine", "Stability Balls", "Speed Ladders", "Kettlebells", "Plyo Boxes", "Tire Flips", "TRX Suspension Trainers", "Boxing Equipment", "Yoga Wheels"],
    personalTrainers: ["Certified Personal Trainer", "Corrective Exercise Specialist", "Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Fitness Tracking", "Group Fitness Classes", "Audio/Visual Entertainment", "Locker Rentals", "Equipment Orientation", "Personal Training Sessions", "Toiletries", "Hair Dryers", "Nutrition Counseling", "Fitness Consultations", "Water Stations"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "a614c0f5-7878-444f-a38a-9300e1bbbc44",
    vesselId: "cs--explorer",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tokyo. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(193) 754-9970",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "StairMaster", "Cardio Kettlebells", "Recumbent Bikes", "Agility Hurdles", "Rowing Machines", "Boxing Equipment", "Cable Single Arm Single Leg Hip Thrust Machine", "Free Weights", "Cable Lateral Raise Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Front Raise Machine", "Dumbbells", "Smith Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Bicep Curl Machine", "Cable Crossover Machine", "Cable Single Arm Shrug Machine", "Medicine Balls", "Jump Boxes", "Speed Bands", "Speed Ladders", "Battle Ropes", "BOSU Balls", "Agility Ladders", "Sledgehammers", "Dance Fitness Equipment", "Infrared Sauna"],
    personalTrainers: ["Spinning Instructor", "Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Workout Programs", "Group Fitness Classes", "Towel Service", "Nutrition Counseling", "Protein Shakes", "Equipment Orientation", "Fitness Tracking", "Fresh Fruit Bar", "Body Composition Analysis", "Fitness Consultations", "Water Stations", "Smoothie Bar"],
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
    hasChildcareServices: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "c99e6dba-39c2-4356-8dc8-438af2e8a1f4",
    vesselId: "fv-tokyo-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, steam room, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(540) 647-9862",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Rowing Machines", "Air Bikes", "SkiErg", "Cardio Gliders", "VersaClimber", "Cardio Medicine Balls", "Treadmills", "Cable Single Arm Bicep Curl Machine", "Cable Reverse Fly Machine", "Seated Row Machine", "Cable Single Arm Back Extension Machine", "Cable Russian Twist Machine", "Cable Machines", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Woodchopper Machine", "Cable Row Machine", "Resistance Bands", "Speed Bands", "Agility Poles", "TRX Suspension Trainers", "Agility Hurdles", "Recovery Tools"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Group Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Group Fitness Classes", "Water Stations", "Protein Shakes", "Body Composition Analysis", "Towel Service", "Equipment Orientation", "Fitness Tracking", "Fresh Fruit Bar", "Personal Training Sessions", "Fitness Consultations"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
    faqs: [
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "ce623e33-3612-4cfa-9ad2-56f7c0142894",
    vesselId: "mv--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Tokyo. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(151) 235-9663",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Elliptical Machines", "Boxing Equipment", "Cardio Punching Bags", "Jump Ropes", "Cardio Resistance Bands", "Recumbent Bikes", "Stationary Bikes", "Cable Single Arm Plank Machine", "Cable Single Arm Reverse Fly Machine", "Pull-up Station", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Bicep Curl Machine", "Abdominal Crunch Machine", "Bicep Curl Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Speed Cords", "Slam Balls", "Plyo Boxes", "Speed Sleds", "BOSU Balls", "Float Tanks", "Kickboxing Equipment", "Barre Equipment"],
    personalTrainers: ["Spinning Instructor", "Yoga Instructor", "Senior Fitness Specialist", "Strength Training Specialist", "Corrective Exercise Specialist"],
    amenities: ["Smoothie Bar", "Protein Shakes", "Body Composition Analysis", "Equipment Orientation", "Nutrition Counseling", "Fitness Consultations", "Audio/Visual Entertainment", "Fitness Tracking", "Fresh Fruit Bar", "Toiletries", "Hair Dryers", "Personal Training Sessions", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "e7d2f562-028c-4f5e-acb9-fbc048fbbea6",
    vesselId: "cs-the--mariner",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(169) 731-2214",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "SkiErg", "Boxing Equipment", "Cardio Punching Bags", "Spin Bikes", "Recumbent Bikes", "Elliptical Machines", "Free Weights", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Squat Machine", "Cable Back Extension Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Face Pull Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Plank Machine", "Smith Machine", "Agility Ladders", "Speed Sleds", "Plyo Boxes", "Jump Boxes", "Tire Flips", "Cryotherapy Chamber", "Compression Therapy", "Dance Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Water Stations", "Fresh Fruit Bar", "Hair Dryers", "Nutrition Counseling", "Locker Rentals", "Personal Training Sessions", "Body Composition Analysis", "Fitness Consultations", "Fitness Tracking", "Group Fitness Classes", "Workout Programs", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
    hasChildcareServices: true,
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "f1eb8879-7645-4f73-b88c-f566fe5dc12c",
    vesselId: "mv--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(884) 834-2252",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "SkiErg", "Elliptical Machines", "Spin Bikes", "Punching Bags", "Cardio Medicine Balls", "Agility Hurdles", "Cable Tricep Pushdown Machine", "Cable Machines", "Smith Machine", "Cable Lunge Machine", "Lat Pulldown", "Bicep Curl Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Shoulder Press Machine", "Weighted Vests", "Agility Markers", "Speed Bands", "Tire Flips", "Foam Rollers", "Yoga Wheels"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Workout Programs", "Locker Rentals", "Hair Dryers", "Smoothie Bar", "Water Stations", "Toiletries", "Protein Shakes", "Nutrition Counseling"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  }
];
