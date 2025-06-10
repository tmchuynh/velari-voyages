// Fitness center venues data for Miami
// This file contains fitness center and wellness facility information for cruise vessels operating from Miami
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const miamiFitnessCenters: FitnessCenter[] = [
  {
    id: "129df779-d10c-4596-b171-2153e4c37a09",
    vesselId: "ts--explorer",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the TS  Explorer. Stay active and healthy while cruising the waters near Miami with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(502) 747-8867",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "StairMaster", "SkiErg", "Cardio Medicine Balls", "Cardio Kickboxing Bags", "Punching Bags", "Cable Reverse Fly Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Deadlift Machine", "Shoulder Press Machine", "Cable Single Arm Shrug Machine", "Back Extension Machine", "Cable Deadlift Machine", "Tire Flips", "Sandbags", "Balance Boards", "Foam Rollers", "Slam Balls", "Aqua Fitness Equipment", "Cryotherapy Chambers", "Massage Chairs"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Pilates Instructor", "Spinning Instructor"],
    amenities: ["Hair Dryers", "Audio/Visual Entertainment", "Group Fitness Classes", "Personal Training Sessions", "Nutrition Counseling", "Fitness Consultations", "Body Composition Analysis", "Toiletries", "Fresh Fruit Bar", "Equipment Orientation", "Locker Rentals"],
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
    hasFitnessAssessments: false,
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "34ad2b13-ada2-4dd2-a77b-a9bc62589fbb",
    vesselId: "rms-miami-voyager",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(621) 117-4138",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Cardio Medicine Balls", "Agility Hurdles", "Jump Ropes", "Rowing Machines", "Punching Bags", "VersaClimber", "Elliptical Machines", "Treadmills", "Leg Press Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Calf Raise Machine", "Cable Squat Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Reverse Fly Machine", "Tricep Extension Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Chest Fly Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Machines", "Agility Ladders", "Sledgehammers", "Speed Ladders", "TRX Suspension Trainers", "Medicine Balls", "Sandbags", "Jump Boxes", "Infrared Sauna", "Aqua Fitness Equipment", "Yoga Wheels"],
    personalTrainers: ["Strength and Conditioning Coach", "Aqua Fitness Instructor", "Pilates Instructor"],
    amenities: ["Fitness Tracking", "Personal Training Sessions", "Protein Shakes", "Audio/Visual Entertainment", "Equipment Orientation", "Toiletries", "Fitness Consultations", "Water Stations", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "4d378730-403d-4d41-bff8-08be403f340a",
    vesselId: "cs--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, sauna facilities.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(289) 758-4112",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Jump Ropes", "Rowing Machines", "Cardio Gliders", "Elliptical Machines", "Cardio Medicine Balls", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Free Weights", "Cable Single Arm Ab Crunch Machine", "Cable Deadlift Machine", "Cable Single Arm Single Leg Front Raise Machine", "Weighted Vests", "Speed Cords", "Plyo Boxes", "TRX Suspension Trainers", "Stability Balls", "Yoga Bolsters"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength and Conditioning Coach", "Aqua Fitness Instructor", "Youth Fitness Specialist"],
    amenities: ["Equipment Orientation", "Workout Programs", "Toiletries", "Towel Service", "Fitness Tracking", "Water Stations", "Smoothie Bar", "Audio/Visual Entertainment", "Personal Training Sessions", "Fitness Consultations", "Protein Shakes", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    isPopular: false
  },
  {
    id: "f32248c9-a23c-42ea-9859-f993533efed2",
    vesselId: "ss-the--mariner",
    name: "SS The  Mariner Fitness Center",
    description: "Discover wellness at sea with SS The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(649) 593-9276",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Stationary Bikes", "Arc Trainers", "Elliptical Machines", "Treadmills", "Cardio Medicine Balls", "Agility Hurdles", "Cardio Step Platforms", "Air Bikes", "Cardio Punching Bags", "Cable Single Arm Single Leg Shrug Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Squat Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Face Pull Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Single Leg Lunge Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Agility Ladders", "Stability Balls", "Jump Boxes", "Speed Sleds", "Balance Boards", "Speed Ladders", "Speed Bands", "Agility Poles", "Dance Fitness Equipment", "Pilates Reformers"],
    personalTrainers: ["Youth Fitness Specialist", "Pilates Instructor"],
    amenities: ["Group Fitness Classes", "Toiletries", "Audio/Visual Entertainment", "Personal Training Sessions", "Body Composition Analysis", "Smoothie Bar", "Workout Programs", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
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
    id: "3aa0ec5f-365d-46b0-ac09-e8e97be911ea",
    vesselId: "sv--gale",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(126) 587-9899",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "SkiErg", "StairMaster", "Rowing Machines", "Stationary Bikes", "Jump Ropes", "Recumbent Bikes", "Cable Shrug Machine", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Plank Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Back Extension Machine", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Tire Flips", "Speed Cones", "Speed Resistors", "Agility Dots", "Agility Ladders", "Resistance Bands", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Group Fitness Instructor"],
    amenities: ["Group Fitness Classes", "Locker Rentals", "Smoothie Bar", "Body Composition Analysis", "Toiletries", "Towel Service", "Equipment Orientation", "Hair Dryers", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "6e070dcc-e541-4efd-a9cf-2608ac7440ee",
    vesselId: "hms--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Miami. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(391) 923-2278",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Jump Ropes", "StairMaster", "Rowing Machines", "Punching Bags", "Cardio Punching Bags", "Cable Shrug Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Leg Extension Machine", "Cable Hip Thrust Machine", "Dumbbells", "Cable Single Arm Single Leg Russian Twist Machine", "Cable Single Arm Single Leg Plank Machine", "Agility Dots", "Agility Poles", "Plyo Boxes", "Kettlebells", "Speed Ladders", "Cryotherapy Chamber", "Functional Training Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Hair Dryers", "Toiletries", "Fitness Tracking", "Personal Training Sessions", "Water Stations", "Protein Shakes"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "52ea16d9-d512-4459-a775-b185907dcdec",
    vesselId: "my-miami-voyager",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Miami. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(610) 466-4879",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Step Platforms", "Cardio Resistance Bands", "Recumbent Bikes", "Treadmills", "Elliptical Machines", "Cardio Kickboxing Bags", "Air Bikes", "Cable Squat Machine", "Cable Single Arm Russian Twist Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Power Rack", "Bench Press", "Cable Single Arm Single Leg Bicep Curl Machine", "Pull-up Station", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Speed Harnesses", "Slam Balls", "Tire Flips", "Stability Balls", "Battle Ropes", "Agility Dots", "Plyo Boxes", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Tracking", "Hair Dryers", "Audio/Visual Entertainment", "Equipment Orientation", "Smoothie Bar", "Body Composition Analysis", "Water Stations", "Nutrition Counseling", "Locker Rentals", "Protein Shakes"],
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "e05c002b-d6e2-4094-932b-8e60fdf17e6d",
    vesselId: "fv--of-the-deep",
    name: "Miami Fitness Center",
    description: "Miami Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(649) 179-8427",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "SkiErg", "StairMaster", "Boxing Equipment", "Cardio Gliders", "Cardio Medicine Balls", "Recumbent Bikes", "Battle Ropes", "Rowing Machines", "Spin Bikes", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Back Extension Machine", "Abdominal Crunch Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Lat Pulldown", "Chest Press Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Agility Poles", "Agility Markers", "Plyo Boxes", "Resistance Bands", "Sandbags", "Speed Ladders", "Jump Boxes", "Kickboxing Equipment", "Cryotherapy Chambers", "Pilates Reformers"],
    personalTrainers: ["Aqua Fitness Instructor", "Pilates Instructor", "Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Towel Service", "Equipment Orientation", "Water Stations", "Personal Training Sessions", "Workout Programs", "Fresh Fruit Bar", "Fitness Consultations", "Audio/Visual Entertainment", "Protein Shakes", "Nutrition Counseling"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
    id: "76d8ad61-c0b1-4e94-a6ca-43791fa637bf",
    vesselId: "cs-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(612) 895-4671",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Boxing Equipment", "Arc Trainers", "Cardio Gliders", "Spin Bikes", "Cardio Resistance Bands", "Air Bikes", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Woodchopper Machine", "Cable Russian Twist Machine", "Functional Trainers", "Bench Press", "Cable Single Arm Russian Twist Machine", "Bicep Curl Machine", "Cable Single Arm Single Leg Squat Machine", "Speed Parachutes", "Tire Flips", "Agility Poles", "Yoga Mats", "Agility Hurdles", "Yoga Equipment", "Dance Fitness Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor", "Spinning Instructor"],
    amenities: ["Fitness Tracking", "Towel Service", "Audio/Visual Entertainment", "Water Stations", "Hair Dryers", "Locker Rentals", "Workout Programs", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
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
    id: "6c9fbe6e-06d5-46e3-af70-41f9010e667b",
    vesselId: "ss--gale",
    name: "SS  Gale Fitness Center",
    description: "Welcome to SS  Gale Fitness Center, your premier wellness destination aboard the SS  Gale. Stay active and healthy while cruising the waters near Miami with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(643) 662-4565",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Cardio Kickboxing Bags", "Air Bikes", "Jump Ropes", "Cardio Gliders", "Arc Trainers", "Spin Bikes", "Treadmills", "Punching Bags", "Power Rack", "Cable Single Arm Single Leg Hip Thrust Machine", "Back Extension Machine", "Cable Single Arm Chest Press Machine", "Cable Upright Row Machine", "Cable Plank Machine", "Cable Pallof Press Machine", "Cable Single Arm Bicep Curl Machine", "Speed Resistors", "Stability Balls", "Battle Ropes", "Balance Boards", "TRX Suspension Trainers", "Speed Parachutes", "Yoga Bolsters", "Dance Fitness Equipment", "Compression Therapy", "Boxing Equipment", "Yoga Blocks"],
    personalTrainers: ["Certified Personal Trainer", "Strength and Conditioning Coach", "Fitness Nutrition Specialist"],
    amenities: ["Personal Training Sessions", "Water Stations", "Smoothie Bar", "Fresh Fruit Bar", "Locker Rentals", "Group Fitness Classes", "Equipment Orientation", "Fitness Tracking", "Audio/Visual Entertainment", "Nutrition Counseling", "Fitness Consultations", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  }
];
