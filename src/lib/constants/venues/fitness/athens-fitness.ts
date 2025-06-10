// Fitness center venues data for Athens
// This file contains fitness center and wellness facility information for cruise vessels operating from Athens
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const athensFitnessCenters: FitnessCenter[] = [
  {
    id: "56d5fe85-fe4e-48bc-87da-cd736e864519",
    vesselId: "sy--explorer",
    name: "SY  Explorer Fitness Center",
    description: "Discover wellness at sea with SY  Explorer Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(674) 440-1638",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Kickboxing Bags", "Spin Bikes", "Cardio Punching Bags", "Battle Ropes", "Cardio Medicine Balls", "Air Bikes", "Elliptical Machines", "Agility Hurdles", "Cable Single Arm Back Extension Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Pallof Press Machine", "Cable Pallof Press Machine", "Weighted Vests", "Jump Boxes", "Speed Ladders", "Resistance Bands", "Slam Balls", "Stability Balls", "Agility Ladders", "Recovery Tools", "Pilates Reformers", "Kickboxing Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Group Fitness Instructor", "Certified Personal Trainer", "Strength and Conditioning Coach"],
    amenities: ["Towel Service", "Water Stations", "Fitness Tracking", "Nutrition Counseling", "Smoothie Bar", "Fresh Fruit Bar", "Personal Training Sessions", "Group Fitness Classes", "Hair Dryers", "Fitness Consultations", "Equipment Orientation", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "065f6933-13c3-43d1-9815-c9053a4f9599",
    vesselId: "ms-athens-voyager",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(705) 639-4993",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Recumbent Bikes", "VersaClimber", "Air Bikes", "Treadmills", "SkiErg", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Shrug Machine", "Pull-up Station", "Smith Machines", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Lunge Machine", "Bicep Curl Machine", "Medicine Balls", "Agility Ladders", "Speed Hurdles", "Slam Balls", "Battle Ropes", "Agility Cones", "Speed Ladders", "Speed Harnesses", "Yoga Equipment", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Locker Rentals", "Equipment Orientation", "Workout Programs", "Personal Training Sessions", "Water Stations", "Fitness Tracking", "Fresh Fruit Bar", "Group Fitness Classes", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "d349f11d-d729-42ff-8ef2-5349b1fcc58e",
    vesselId: "rv--of-the-deep",
    name: "Athens Fitness Center",
    description: "Welcome to Athens Fitness Center, your premier wellness destination aboard the RV  of the Deep. Stay active and healthy while cruising the waters near Athens with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(715) 708-7939",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Arc Trainers", "Cardio Kickboxing Bags", "Spin Bikes", "Cardio Gliders", "Cardio Medicine Balls", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Row Machine", "Leg Press Machine", "Cable Bicep Curl Machine", "Cable Machines", "Smith Machines", "Cable Single Arm Tricep Extension Machine", "Weight Machines", "Cable Single Arm Single Leg Deadlift Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Plank Machine", "Sandbags", "Kettlebells", "BOSU Balls", "Agility Markers", "Speed Bands", "Balance Boards", "Medicine Balls", "Battle Ropes", "Yoga Bolsters", "Kickboxing Equipment", "Functional Training Equipment", "Massage Chairs", "Yoga Blocks"],
    personalTrainers: ["Group Fitness Instructor", "Corrective Exercise Specialist", "Youth Fitness Specialist", "Aqua Fitness Instructor", "Strength and Conditioning Coach"],
    amenities: ["Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Fitness Tracking", "Audio/Visual Entertainment", "Toiletries", "Fitness Consultations", "Fresh Fruit Bar", "Hair Dryers", "Nutrition Counseling", "Towel Service"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "909898b1-dc27-4ce9-b463-ff596b02106c",
    vesselId: "ps-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(502) 716-7047",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Step Platforms", "Cardio Kettlebells", "Cardio Medicine Balls", "Treadmills", "Elliptical Machines", "SkiErg", "Cable Bicep Curl Machine", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Crossover Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Hip Thrust Machine", "Bicep Curl Machine", "Cable Plank Machine", "Speed Hurdles", "Agility Poles", "Tire Flips", "Yoga Mats", "Agility Ladders", "Yoga Blocks", "Float Tanks", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Smoothie Bar", "Equipment Orientation", "Locker Rentals", "Group Fitness Classes", "Toiletries", "Protein Shakes", "Audio/Visual Entertainment", "Water Stations", "Fitness Tracking", "Body Composition Analysis", "Fitness Consultations", "Fresh Fruit Bar"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
    isPopular: false
  },
  {
    id: "b692ab88-27e1-40c1-a1d2-c862bd1c9035",
    vesselId: "cs--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Athens. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(279) 393-2670",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Agility Hurdles", "Battle Ropes", "Cardio Gliders", "Cardio Punching Bags", "Recumbent Bikes", "Rowing Machines", "Cable Single Arm Single Leg Face Pull Machine", "Cable Deadlift Machine", "Cable Single Arm Bicep Curl Machine", "Weight Machines", "Cable Single Arm Single Leg Plank Machine", "Dumbbells", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Plate Loaded Machines", "Kettlebells", "Speed Ladders", "Medicine Balls", "Speed Harnesses", "Agility Cones", "Dance Fitness Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Spinning Instructor"],
    amenities: ["Fresh Fruit Bar", "Fitness Tracking", "Workout Programs", "Towel Service", "Nutrition Counseling", "Protein Shakes", "Audio/Visual Entertainment", "Hair Dryers", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "d50e310f-fc22-4677-bc9a-854900344db4",
    vesselId: "fv--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(439) 718-3934",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Battle Ropes", "Cardio Kickboxing Bags", "Cardio Gliders", "Cardio Punching Bags", "Elliptical Machines", "Jump Ropes", "Spin Bikes", "StairMaster", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Russian Twist Machine", "Pull-up Station", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Machines", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Lunge Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Upright Row Machine", "Speed Parachutes", "Foam Rollers", "Speed Cones", "Slam Balls", "Speed Sleds", "Agility Cones", "Speed Hurdles", "Recovery Tools", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Group Fitness Instructor", "Yoga Instructor"],
    amenities: ["Hair Dryers", "Locker Rentals", "Fitness Consultations", "Toiletries", "Protein Shakes", "Audio/Visual Entertainment", "Towel Service", "Body Composition Analysis", "Workout Programs", "Water Stations", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "41e8c29a-0986-4dde-b6a9-041309a7ac6b",
    vesselId: "nx-athens-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Athens. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(797) 287-2847",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Spin Bikes", "Rowing Machines", "Jump Ropes", "Cardio Punching Bags", "Air Bikes", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Cable Russian Twist Machine", "Cable Single Arm Single Leg Front Raise Machine", "Smith Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Bench Press", "Cable Shrug Machine", "Lat Pulldown", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Lunge Machine", "Leg Extension Machine", "Cable Single Arm Bicep Curl Machine", "Agility Poles", "Kettlebells", "Speed Bands", "Tire Flips", "Speed Cords", "Yoga Bolsters", "Barre Equipment", "Kickboxing Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Group Fitness Instructor", "Strength Training Specialist", "Spinning Instructor"],
    amenities: ["Fitness Consultations", "Equipment Orientation", "Personal Training Sessions", "Protein Shakes", "Smoothie Bar", "Fresh Fruit Bar", "Fitness Tracking", "Towel Service", "Hair Dryers", "Water Stations"],
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
    id: "90c50494-2199-4f4c-9321-5b6c2a0a4a39",
    vesselId: "nx--of-the-deep",
    name: "NX  of the Deep Fitness Center",
    description: "NX  of the Deep Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Athens. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(114) 201-4785",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Resistance Bands", "Arc Trainers", "Cardio Step Platforms", "Jump Ropes", "VersaClimber", "Boxing Equipment", "Cardio Kickboxing Bags", "Leg Press Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Bench Press", "Smith Machine", "Pull-up Station", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Woodchopper Machine", "Yoga Mats", "Agility Hurdles", "Plyo Boxes", "Slam Balls", "Speed Parachutes", "TRX Suspension Trainers", "Agility Ladders", "Barre Equipment", "Cryotherapy Chamber", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Youth Fitness Specialist", "Senior Fitness Specialist"],
    amenities: ["Smoothie Bar", "Hair Dryers", "Toiletries", "Locker Rentals", "Audio/Visual Entertainment", "Equipment Orientation", "Body Composition Analysis", "Protein Shakes", "Nutrition Counseling"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
    id: "777a13c1-cc9f-40d8-81bb-309eea15eb72",
    vesselId: "ss-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(585) 567-2116",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Rowing Machines", "Spin Bikes", "Cardio Step Platforms", "Treadmills", "Agility Hurdles", "Elliptical Machines", "Multi-Gym Systems", "Cable Back Extension Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Calf Raise Machine", "Leg Press Machine", "Bench Press", "Chest Press Machine", "Cable Single Arm Chest Press Machine", "Cable Lateral Raise Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Tire Flips", "Sledgehammers", "Agility Cones", "Medicine Balls", "Resistance Bands", "Yoga Mats", "Stability Balls", "Agility Dots", "Yoga Wheels", "Spinning Bikes", "HydroMassage Beds"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Water Stations", "Fresh Fruit Bar", "Fitness Tracking", "Body Composition Analysis", "Smoothie Bar", "Towel Service", "Hair Dryers", "Personal Training Sessions", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "69153480-f661-4853-afbd-a287159fba1b",
    vesselId: "ts--gale",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(772) 313-8782",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Kickboxing Bags", "Elliptical Machines", "Arc Trainers", "SkiErg", "Stationary Bikes", "Air Bikes", "Boxing Equipment", "Cardio Kettlebells", "Recumbent Bikes", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Foam Rollers", "Speed Sleds", "Stability Balls", "Kettlebells", "Yoga Mats", "Speed Resistors", "Speed Harnesses", "BOSU Balls", "CrossFit Equipment", "Yoga Wheels"],
    personalTrainers: ["Strength and Conditioning Coach", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Equipment Orientation", "Locker Rentals", "Body Composition Analysis", "Smoothie Bar", "Fitness Consultations", "Nutrition Counseling", "Group Fitness Classes", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  }
];
