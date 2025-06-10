// Fitness center venues data for Bermuda
// This file contains fitness center and wellness facility information for cruise vessels operating from Bermuda
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const bermudaFitnessCenters: FitnessCenter[] = [
  {
    id: "49af437c-a7b1-40cd-ab45-f0b47d67cba5",
    vesselId: "fv--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bermuda. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(710) 662-3745",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Punching Bags", "Spin Bikes", "Elliptical Machines", "Battle Ropes", "Agility Hurdles", "Cardio Resistance Bands", "Power Rack", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Back Extension Machine", "Cable Deadlift Machine", "Tricep Extension Machine", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Stability Balls", "Kettlebells", "Agility Markers", "Agility Cones", "Speed Ladders", "Medicine Balls", "Agility Poles", "Foam Rollers", "Compression Therapy", "Recovery Tools", "Yoga Bolsters"],
    personalTrainers: ["Pilates Instructor", "Strength and Conditioning Coach", "Yoga Instructor"],
    amenities: ["Water Stations", "Hair Dryers", "Personal Training Sessions", "Fitness Consultations", "Protein Shakes", "Fresh Fruit Bar", "Towel Service", "Smoothie Bar", "Workout Programs", "Group Fitness Classes", "Locker Rentals", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
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
    isPopular: true
  },
  {
    id: "8e79875b-fbf6-4dad-a265-fce86ab27771",
    vesselId: "nb-bermuda-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bermuda. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(989) 181-2760",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Cardio Punching Bags", "Jump Ropes", "SkiErg", "Treadmills", "Cardio Kickboxing Bags", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Squat Machine", "Cable Tricep Pushdown Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Pull-up Station", "Cable Single Arm Face Pull Machine", "Cable Single Arm Upright Row Machine", "Speed Ladders", "Agility Dots", "Slam Balls", "Speed Cords", "Resistance Bands", "Aqua Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Spinning Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fresh Fruit Bar", "Smoothie Bar", "Water Stations", "Group Fitness Classes", "Towel Service", "Fitness Consultations", "Equipment Orientation", "Fitness Tracking", "Protein Shakes", "Locker Rentals", "Audio/Visual Entertainment"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "e561ee32-cebb-4205-b9a5-1b1bdadb5474",
    vesselId: "nb--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bermuda. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(122) 654-2782",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Cardio Kettlebells", "Recumbent Bikes", "Cardio Punching Bags", "SkiErg", "Cardio Medicine Balls", "Elliptical Machines", "Air Bikes", "Cardio Resistance Bands", "Treadmills", "Cable Back Extension Machine", "Back Extension Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Tricep Extension Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Squat Machine", "Pull-up Station", "Cable Calf Raise Machine", "Bicep Curl Machine", "Cable Bicep Curl Machine", "Functional Trainers", "Speed Parachutes", "Weighted Vests", "Stability Balls", "Speed Hurdles", "Jump Boxes", "Speed Cords", "TRX Suspension Trainers", "Speed Resistors", "Aqua Fitness Equipment", "Cryotherapy Chambers", "Yoga Bolsters"],
    personalTrainers: ["Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Smoothie Bar", "Group Fitness Classes", "Towel Service", "Water Stations", "Fitness Tracking", "Equipment Orientation", "Workout Programs", "Locker Rentals", "Audio/Visual Entertainment", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
      }
    ],
    isPopular: true
  },
  {
    id: "8904c367-72ed-4df1-b52b-f6945588d2ae",
    vesselId: "mv-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(748) 828-4184",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Battle Ropes", "Agility Hurdles", "Recumbent Bikes", "Cardio Kickboxing Bags", "StairMaster", "Jump Ropes", "Cardio Medicine Balls", "Arc Trainers", "Cardio Resistance Bands", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Row Machine", "Smith Machines", "Leg Press Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Agility Markers", "BOSU Balls", "Foam Rollers", "Agility Dots", "Speed Bands", "Plyo Boxes", "Balance Boards", "Slam Balls", "Cryotherapy Chamber", "Spinning Bikes"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor", "Pilates Instructor"],
    amenities: ["Hair Dryers", "Nutrition Counseling", "Personal Training Sessions", "Towel Service", "Body Composition Analysis", "Protein Shakes", "Workout Programs", "Fitness Consultations", "Equipment Orientation"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: true
  },
  {
    id: "a06e1ab6-9056-4a35-8870-62229fca5cb4",
    vesselId: "rms--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bermuda. Our facility features steam room.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(396) 699-6464",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Cardio Step Platforms", "Stationary Bikes", "Cardio Gliders", "Cardio Punching Bags", "Elliptical Machines", "Cable Single Arm Single Leg Upright Row Machine", "Lat Pulldown", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Chest Press Machine", "Cable Russian Twist Machine", "Cable Lunge Machine", "Cable Single Arm Woodchopper Machine", "Cable Bicep Curl Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Plank Machine", "Sledgehammers", "Speed Parachutes", "Agility Dots", "Speed Ladders", "Balance Boards", "TRX Suspension Trainers", "Weighted Vests", "Battle Ropes", "Infrared Sauna", "Yoga Blocks", "Functional Training Equipment"],
    personalTrainers: ["Fitness Nutrition Specialist", "Certified Personal Trainer", "Aqua Fitness Instructor", "Spinning Instructor"],
    amenities: ["Fresh Fruit Bar", "Protein Shakes", "Hair Dryers", "Smoothie Bar", "Fitness Tracking", "Locker Rentals", "Water Stations", "Personal Training Sessions", "Audio/Visual Entertainment", "Fitness Consultations", "Towel Service", "Workout Programs"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "c8c2d70b-4e8f-4ba2-a1c1-ee8aebd16bdb",
    vesselId: "my--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(992) 832-8121",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Elliptical Machines", "Treadmills", "Air Bikes", "Stationary Bikes", "StairMaster", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Weight Machines", "Bench Press", "Cable Machines", "Leg Press Machine", "Cable Single Arm Woodchopper Machine", "Speed Sleds", "Agility Ladders", "Speed Cords", "Agility Markers", "Battle Ropes", "Agility Poles", "Weighted Vests", "Boxing Equipment", "Kickboxing Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Fitness Nutrition Specialist"],
    amenities: ["Toiletries", "Personal Training Sessions", "Fresh Fruit Bar", "Group Fitness Classes", "Locker Rentals", "Smoothie Bar", "Nutrition Counseling", "Water Stations", "Workout Programs", "Fitness Consultations"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "32d69352-0012-4876-aca1-10dc6ab17104",
    vesselId: "hms-bermuda-voyager",
    name: "HMS Bermuda Voyager Fitness Center",
    description: "HMS Bermuda Voyager Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(542) 660-5858",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Cardio Medicine Balls", "Arc Trainers", "StairMaster", "Cardio Kettlebells", "Treadmills", "Cardio Gliders", "Cardio Resistance Bands", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Lat Pulldown", "Cable Single Arm Single Leg Lunge Machine", "Agility Dots", "Agility Ladders", "Kettlebells", "Tire Flips", "BOSU Balls", "HydroMassage Beds", "Stretching Stations"],
    personalTrainers: ["Yoga Instructor", "Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Water Stations", "Body Composition Analysis", "Audio/Visual Entertainment", "Towel Service", "Equipment Orientation", "Fresh Fruit Bar", "Protein Shakes", "Toiletries", "Group Fitness Classes"],
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
    isPopular: true
  },
  {
    id: "2ed638eb-f433-4b59-990f-ace3366304d4",
    vesselId: "nx--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the NX  of the Deep. Stay active and healthy while cruising the waters near Bermuda with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(638) 331-6916",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Boxing Equipment", "Air Bikes", "Cardio Kettlebells", "VersaClimber", "Cardio Kickboxing Bags", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Barbells", "Cable Single Arm Single Leg Plank Machine", "Cable Glute Kickback Machine", "Cable Single Arm Single Leg Deadlift Machine", "Agility Poles", "Agility Markers", "Speed Hurdles", "Speed Harnesses", "Tire Flips", "Speed Parachutes", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Group Fitness Classes", "Nutrition Counseling", "Personal Training Sessions", "Water Stations", "Body Composition Analysis", "Locker Rentals", "Equipment Orientation", "Protein Shakes", "Smoothie Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "d074f8ed-cbf6-4124-b607-aa1ffe78cb3b",
    vesselId: "ts-the--mariner",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(140) 111-3082",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "SkiErg", "Cardio Medicine Balls", "Cardio Gliders", "Rowing Machines", "Cardio Step Platforms", "Battle Ropes", "Stationary Bikes", "Spin Bikes", "StairMaster", "Cable Single Arm Face Pull Machine", "Lat Pulldown", "Free Weights", "Cable Machines", "Back Extension Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Bicep Curl Machine", "Bench Press", "Plate Loaded Machines", "Cable Single Arm Glute Kickback Machine", "Weighted Vests", "TRX Suspension Trainers", "Sledgehammers", "Speed Cones", "Foam Rollers", "Speed Bands", "Agility Ladders", "Slam Balls", "Massage Chairs", "Recovery Tools"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor", "Youth Fitness Specialist", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Body Composition Analysis", "Audio/Visual Entertainment", "Toiletries", "Protein Shakes", "Workout Programs", "Towel Service", "Fitness Tracking", "Hair Dryers", "Group Fitness Classes", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "0133fc26-7088-4025-a661-c51c7307ba32",
    vesselId: "cs--gale",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the CS  Gale. Stay active and healthy while cruising the waters near Bermuda with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(185) 340-4163",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Battle Ropes", "Cardio Medicine Balls", "Cardio Punching Bags", "Rowing Machines", "Elliptical Machines", "Treadmills", "Air Bikes", "Free Weights", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Shrug Machine", "Dumbbells", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Face Pull Machine", "Cable Single Arm Ab Crunch Machine", "BOSU Balls", "Slam Balls", "Speed Harnesses", "Resistance Bands", "Yoga Mats", "TRX Suspension Trainers", "Speed Parachutes", "Functional Training Equipment", "Dance Fitness Equipment", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach", "Aqua Fitness Instructor"],
    amenities: ["Locker Rentals", "Body Composition Analysis", "Group Fitness Classes", "Towel Service", "Fitness Consultations", "Water Stations", "Equipment Orientation", "Smoothie Bar", "Hair Dryers"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
  }
];
