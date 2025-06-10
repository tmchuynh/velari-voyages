// Fitness center venues data for Barcelona
// This file contains fitness center and wellness facility information for cruise vessels operating from Barcelona
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const barcelonaFitnessCenters: FitnessCenter[] = [
  {
    id: "630d1dc1-6406-4182-aa1e-fe61cac8fc9e",
    vesselId: "ts--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(898) 523-8871",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Punching Bags", "Air Bikes", "Cardio Step Platforms", "Cardio Punching Bags", "Cardio Kettlebells", "Treadmills", "Arc Trainers", "Rowing Machines", "Cable Single Arm Lunge Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Reverse Fly Machine", "Cable Row Machine", "Cable Single Arm Single Leg Face Pull Machine", "Leg Extension Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Deadlift Machine", "Agility Ladders", "Agility Markers", "Battle Ropes", "Medicine Balls", "Plyo Boxes", "Stability Balls", "Dance Fitness Equipment", "Infrared Therapy", "Cryotherapy Chambers", "Compression Therapy"],
    personalTrainers: ["Spinning Instructor", "Strength Training Specialist", "Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Towel Service", "Nutrition Counseling", "Toiletries", "Equipment Orientation", "Hair Dryers", "Water Stations", "Fresh Fruit Bar", "Workout Programs", "Personal Training Sessions", "Smoothie Bar", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "2cada626-3e39-4305-9e5e-084883415be9",
    vesselId: "ss-barcelona-voyager",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(490) 612-4173",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "SkiErg", "Arc Trainers", "Cardio Medicine Balls", "Cardio Punching Bags", "Treadmills", "StairMaster", "Punching Bags", "Agility Hurdles", "Boxing Equipment", "Cable Back Extension Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Shrug Machine", "Shoulder Press Machine", "Cable Single Arm Tricep Extension Machine", "Cable Deadlift Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Squat Machine", "Cable Tricep Pushdown Machine", "Speed Resistors", "Battle Ropes", "Stability Balls", "Speed Hurdles", "Slam Balls", "Agility Markers", "Yoga Equipment", "Aqua Fitness Equipment", "Dance Fitness Equipment"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Hair Dryers", "Fitness Consultations", "Fitness Tracking", "Fresh Fruit Bar", "Towel Service", "Audio/Visual Entertainment", "Group Fitness Classes", "Equipment Orientation", "Smoothie Bar", "Body Composition Analysis", "Water Stations"],
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
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
      }
    ],
    isPopular: true
  },
  {
    id: "c73655c7-5784-4920-875d-898688b53e10",
    vesselId: "ss--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Barcelona. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(617) 939-1903",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Medicine Balls", "Boxing Equipment", "Cardio Gliders", "Recumbent Bikes", "Cardio Kettlebells", "Arc Trainers", "SkiErg", "Cardio Resistance Bands", "Treadmills", "Cardio Step Platforms", "Cable Tricep Pushdown Machine", "Seated Row Machine", "Chest Press Machine", "Cable Single Arm Tricep Extension Machine", "Leg Curl Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Lat Pulldown Machine", "Cable Single Arm Calf Raise Machine", "Shoulder Press Machine", "Yoga Mats", "Slam Balls", "Agility Markers", "Stability Balls", "Resistance Bands", "Speed Hurdles", "Yoga Bolsters", "Dance Fitness Equipment", "CrossFit Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Aqua Fitness Instructor"],
    amenities: ["Hair Dryers", "Protein Shakes", "Personal Training Sessions", "Body Composition Analysis", "Water Stations", "Nutrition Counseling", "Workout Programs", "Toiletries", "Equipment Orientation"],
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
    id: "e6b16f74-342b-4aaa-9d8a-4f7cdd71a721",
    vesselId: "ss-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(354) 216-9532",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "Stationary Bikes", "SkiErg", "Cardio Punching Bags", "StairMaster", "Rowing Machines", "Cardio Gliders", "Recumbent Bikes", "Leg Extension Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Yoga Mats", "Speed Cones", "Resistance Bands", "Speed Hurdles", "Battle Ropes", "Speed Bands", "BOSU Balls", "Cryotherapy Chambers", "Stretching Stations", "HydroMassage Beds"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Youth Fitness Specialist", "Spinning Instructor"],
    amenities: ["Personal Training Sessions", "Protein Shakes", "Nutrition Counseling", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Body Composition Analysis", "Water Stations", "Hair Dryers", "Smoothie Bar", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
    id: "87b50b0b-342a-419f-96d3-0245dfdef5dd",
    vesselId: "rv--gale",
    name: "RV  Gale Fitness Center",
    description: "RV  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Barcelona. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(512) 585-4336",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "StairMaster", "Cardio Resistance Bands", "Treadmills", "SkiErg", "Cardio Kettlebells", "VersaClimber", "Jump Ropes", "Cable Single Arm Single Leg Pallof Press Machine", "Leg Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Calf Raise Machine", "Bench Press", "Lat Pulldown", "Cable Single Arm Single Leg Front Raise Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Functional Trainers", "BOSU Balls", "TRX Suspension Trainers", "Speed Cords", "Sledgehammers", "Tire Flips", "Plyo Boxes", "HydroMassage Beds", "Infrared Sauna"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Strength Training Specialist"],
    amenities: ["Workout Programs", "Smoothie Bar", "Audio/Visual Entertainment", "Fitness Consultations", "Nutrition Counseling", "Group Fitness Classes", "Hair Dryers", "Personal Training Sessions", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    id: "d04c91c6-49b0-4ec0-9d68-7954eda58ebf",
    vesselId: "nx--explorer",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(482) 728-9867",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kettlebells", "StairMaster", "Cardio Step Platforms", "Rowing Machines", "Cardio Gliders", "Spin Bikes", "Air Bikes", "Boxing Equipment", "Dumbbells", "Cable Single Arm Single Leg Face Pull Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Glute Kickback Machine", "Free Weights", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Leg Press Machine", "Leg Extension Machine", "Cable Single Arm Face Pull Machine", "Cable Face Pull Machine", "Cable Single Arm Plank Machine", "Agility Poles", "Kettlebells", "Speed Resistors", "Agility Ladders", "Plyo Boxes", "Kickboxing Equipment", "Compression Therapy"],
    personalTrainers: ["Spinning Instructor", "Yoga Instructor"],
    amenities: ["Nutrition Counseling", "Locker Rentals", "Fitness Consultations", "Smoothie Bar", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Personal Training Sessions", "Towel Service", "Group Fitness Classes", "Fitness Tracking", "Workout Programs", "Toiletries"],
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
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "bdce3c17-ab02-4235-b124-9f857f3a9c7d",
    vesselId: "sy-barcelona-voyager",
    name: "Maritime Wellness Center",
    description: "Welcome to Maritime Wellness Center, your premier wellness destination aboard the SY Barcelona Voyager. Stay active and healthy while cruising the waters near Barcelona with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(840) 217-2017",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["SkiErg", "Boxing Equipment", "Recumbent Bikes", "Stationary Bikes", "Jump Ropes", "Cardio Kickboxing Bags", "Cable Shrug Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Shrug Machine", "Pull-up Station", "Chest Press Machine", "Dumbbells", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Plank Machine", "Tricep Extension Machine", "Back Extension Machine", "Cable Single Arm Reverse Fly Machine", "Speed Cones", "Kettlebells", "Speed Resistors", "Agility Hurdles", "Speed Bands", "Jump Boxes", "Agility Dots", "Medicine Balls", "Yoga Straps", "Recovery Tools", "Yoga Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Fitness Consultations", "Fitness Tracking", "Smoothie Bar", "Towel Service", "Water Stations", "Toiletries", "Hair Dryers", "Group Fitness Classes", "Locker Rentals", "Fresh Fruit Bar", "Workout Programs", "Equipment Orientation"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "937f9fa4-0a8b-4070-bc75-be744629e55b",
    vesselId: "ms--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(515) 199-6765",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Elliptical Machines", "Agility Hurdles", "StairMaster", "VersaClimber", "Treadmills", "Stationary Bikes", "Rowing Machines", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Single Arm Plank Machine", "Leg Press Machine", "Cable Lateral Raise Machine", "Cable Single Arm Pallof Press Machine", "Speed Bands", "Agility Markers", "Battle Ropes", "TRX Suspension Trainers", "Stability Balls", "Float Tanks", "Stretching Stations", "Yoga Bolsters"],
    personalTrainers: ["Strength Training Specialist", "Spinning Instructor", "Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Fitness Tracking", "Body Composition Analysis", "Protein Shakes", "Equipment Orientation", "Hair Dryers", "Personal Training Sessions", "Group Fitness Classes", "Workout Programs", "Fitness Consultations", "Toiletries"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "bbdcd239-0ef5-4eb9-a947-26e53f578399",
    vesselId: "ms-the--mariner",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(609) 556-6716",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Cardio Resistance Bands", "Air Bikes", "SkiErg", "StairMaster", "Cardio Kettlebells", "Elliptical Machines", "Agility Hurdles", "Battle Ropes", "Cardio Kickboxing Bags", "Free Weights", "Smith Machine", "Power Rack", "Cable Reverse Fly Machine", "Cable Glute Kickback Machine", "Seated Row Machine", "Bicep Curl Machine", "Cable Lunge Machine", "Calf Raise Machine", "Slam Balls", "Tire Flips", "Kettlebells", "Foam Rollers", "Medicine Balls", "Yoga Equipment"],
    personalTrainers: ["Strength Training Specialist", "Senior Fitness Specialist", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Fresh Fruit Bar", "Smoothie Bar", "Protein Shakes", "Equipment Orientation", "Hair Dryers", "Workout Programs", "Group Fitness Classes", "Towel Service", "Audio/Visual Entertainment", "Toiletries"],
    is24Hours: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "d096fa57-1c1a-49b9-a25e-8c99e6eb0229",
    vesselId: "nb--gale",
    name: "NB  Gale Fitness Center",
    description: "NB  Gale Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Barcelona. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(503) 564-9265",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Boxing Equipment", "Elliptical Machines", "Stationary Bikes", "Air Bikes", "StairMaster", "Punching Bags", "Rowing Machines", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Single Leg Squat Machine", "Bench Press", "Cable Bicep Curl Machine", "Speed Cones", "Weighted Vests", "Speed Bands", "Foam Rollers", "Sandbags", "Yoga Mats", "Slam Balls", "Speed Resistors", "Yoga Bolsters"],
    personalTrainers: ["Yoga Instructor", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Toiletries", "Workout Programs", "Hair Dryers", "Equipment Orientation", "Locker Rentals", "Protein Shakes", "Body Composition Analysis", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
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
      }
    ],
    isPopular: true
  }
];
