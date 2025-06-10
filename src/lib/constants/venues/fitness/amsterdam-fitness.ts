// Fitness center venues data for Amsterdam
// This file contains fitness center and wellness facility information for cruise vessels operating from Amsterdam
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const amsterdamFitnessCenters: FitnessCenter[] = [
  {
    id: "6dd5fc89-bac9-4825-a0db-6e8d6605abd0",
    vesselId: "sy--explorer",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Amsterdam. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(780) 638-2283",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Recumbent Bikes", "Treadmills", "Battle Ropes", "Cardio Kettlebells", "Elliptical Machines", "Cardio Punching Bags", "Cable Upright Row Machine", "Power Rack", "Bicep Curl Machine", "Cable Row Machine", "Cable Bicep Curl Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Speed Hurdles", "Speed Harnesses", "Weighted Vests", "Slam Balls", "Kettlebells", "Medicine Balls", "Speed Cords", "TRX Suspension Trainers", "Boxing Equipment", "Dance Fitness Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor", "Pilates Instructor"],
    amenities: ["Workout Programs", "Body Composition Analysis", "Personal Training Sessions", "Hair Dryers", "Nutrition Counseling", "Fitness Tracking", "Water Stations", "Toiletries", "Fitness Consultations", "Fresh Fruit Bar", "Towel Service", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
    id: "afa93f1d-126e-4865-b717-c0f7c36522fb",
    vesselId: "sv-amsterdam-voyager",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(903) 374-8278",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Jump Ropes", "Cardio Gliders", "Cardio Kettlebells", "Arc Trainers", "Rowing Machines", "Functional Trainers", "Leg Press Machine", "Cable Single Arm Woodchopper Machine", "Weight Machines", "Dumbbells", "Bench Press", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Front Raise Machine", "Calf Raise Machine", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Face Pull Machine", "Chest Press Machine", "Agility Ladders", "Speed Parachutes", "BOSU Balls", "Yoga Mats", "Agility Poles", "Stability Balls", "Plyo Boxes", "Infrared Therapy", "TRX Suspension Trainers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Aqua Fitness Instructor", "Pilates Instructor", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Toiletries", "Water Stations", "Smoothie Bar", "Towel Service", "Personal Training Sessions", "Fresh Fruit Bar"],
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
    id: "d2444122-bb81-4cbb-b3c3-3d37002b7c3e",
    vesselId: "ss--of-the-deep",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the SS  of the Deep. Stay active and healthy while cruising the waters near Amsterdam with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(308) 779-4130",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Cardio Gliders", "Battle Ropes", "Punching Bags", "StairMaster", "VersaClimber", "Cable Single Arm Woodchopper Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Smith Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Shrug Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Lunge Machine", "Seated Row Machine", "Cable Single Arm Single Leg Shrug Machine", "Agility Cones", "Slam Balls", "Foam Rollers", "Kettlebells", "Tire Flips", "Yoga Bolsters"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Youth Fitness Specialist"],
    amenities: ["Nutrition Counseling", "Hair Dryers", "Fresh Fruit Bar", "Fitness Tracking", "Body Composition Analysis", "Toiletries", "Workout Programs", "Personal Training Sessions", "Protein Shakes", "Smoothie Bar"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "fc4e70f5-6012-40cf-a30e-dc0872e1d54c",
    vesselId: "nb-the--mariner",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(396) 575-5994",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Cardio Kickboxing Bags", "Cardio Resistance Bands", "Cardio Step Platforms", "Boxing Equipment", "Recumbent Bikes", "Cardio Kettlebells", "Stationary Bikes", "VersaClimber", "Cable Hip Thrust Machine", "Cable Single Arm Calf Raise Machine", "Cable Tricep Pushdown Machine", "Weight Machines", "Cable Bicep Curl Machine", "Cable Calf Raise Machine", "Bench Press", "Seated Row Machine", "Leg Curl Machine", "Abdominal Crunch Machine", "Speed Parachutes", "Kettlebells", "Speed Cones", "Speed Harnesses", "Slam Balls", "Massage Chairs"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Fresh Fruit Bar", "Toiletries", "Locker Rentals", "Personal Training Sessions", "Smoothie Bar", "Group Fitness Classes", "Audio/Visual Entertainment", "Workout Programs", "Water Stations", "Nutrition Counseling"],
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "c769b8fc-616d-481d-a7ab-0e8bdc72130b",
    vesselId: "sv--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(508) 622-2971",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Gliders", "Agility Hurdles", "Jump Ropes", "Arc Trainers", "Cardio Kickboxing Bags", "Air Bikes", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Glute Kickback Machine", "Lat Pulldown", "Cable Plank Machine", "Cable Woodchopper Machine", "Cable Single Arm Single Leg Shrug Machine", "Dumbbells", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Calf Raise Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Battle Ropes", "Resistance Bands", "Foam Rollers", "Speed Hurdles", "Agility Ladders", "Agility Dots", "TRX Suspension Trainers", "Agility Markers", "Spinning Bikes"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Toiletries", "Fitness Tracking", "Body Composition Analysis", "Nutrition Counseling", "Hair Dryers", "Water Stations", "Group Fitness Classes", "Equipment Orientation", "Personal Training Sessions", "Workout Programs"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "9a3bfd4a-ebae-4e5e-8177-f3f2411261d1",
    vesselId: "ss--explorer",
    name: "SS  Explorer Fitness Center",
    description: "SS  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Amsterdam. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(634) 730-3431",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Kickboxing Bags", "Battle Ropes", "Punching Bags", "VersaClimber", "Spin Bikes", "Cardio Step Platforms", "Cardio Medicine Balls", "Boxing Equipment", "Cardio Kettlebells", "Cable Russian Twist Machine", "Cable Plank Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Weight Machines", "Leg Curl Machine", "Plate Loaded Machines", "Cable Single Arm Bicep Curl Machine", "Cable Single Arm Chest Press Machine", "Speed Harnesses", "Stability Balls", "Agility Cones", "Tire Flips", "Plyo Boxes", "Barre Equipment", "HydroMassage Beds"],
    personalTrainers: ["Corrective Exercise Specialist", "Spinning Instructor", "Yoga Instructor", "Youth Fitness Specialist"],
    amenities: ["Towel Service", "Smoothie Bar", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Equipment Orientation", "Hair Dryers", "Fitness Consultations", "Audio/Visual Entertainment"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
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
    isPopular: true
  },
  {
    id: "aad42e9e-57b7-4966-a1d6-9a602733cb1c",
    vesselId: "nx-amsterdam-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Amsterdam. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(521) 983-2083",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Agility Hurdles", "Cardio Kettlebells", "Boxing Equipment", "Treadmills", "Recumbent Bikes", "Elliptical Machines", "VersaClimber", "Punching Bags", "Cardio Resistance Bands", "Cable Bicep Curl Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Ab Crunch Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Squat Machine", "Cable Machines", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Weight Machines", "Speed Sleds", "TRX Suspension Trainers", "Balance Boards", "Plyo Boxes", "BOSU Balls", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Strength and Conditioning Coach"],
    amenities: ["Fitness Consultations", "Fitness Tracking", "Locker Rentals", "Water Stations", "Equipment Orientation", "Protein Shakes", "Hair Dryers", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Nutrition Counseling", "Body Composition Analysis", "Smoothie Bar"],
    is24Hours: false,
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
    hasFitnessAssessments: true,
    hasChildcareServices: false,
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
    id: "c71113a5-9d0d-4cf7-8db3-12717b878d30",
    vesselId: "nb--of-the-deep",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Amsterdam. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(542) 975-2516",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Punching Bags", "Arc Trainers", "Jump Ropes", "Recumbent Bikes", "Elliptical Machines", "Cardio Medicine Balls", "SkiErg", "Power Rack", "Cable Single Arm Single Leg Front Raise Machine", "Plate Loaded Machines", "Cable Single Arm Single Leg Lateral Raise Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Shrug Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Leg Press Machine", "Cable Pallof Press Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Plank Machine", "Cable Single Arm Single Leg Deadlift Machine", "TRX Suspension Trainers", "Speed Sleds", "Foam Rollers", "Speed Harnesses", "Jump Boxes", "Speed Cords", "Balance Boards", "Agility Markers", "Stretching Stations", "Infrared Sauna", "Barre Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Strength Training Specialist", "Group Fitness Instructor"],
    amenities: ["Workout Programs", "Equipment Orientation", "Nutrition Counseling", "Personal Training Sessions", "Group Fitness Classes", "Toiletries", "Hair Dryers", "Smoothie Bar", "Water Stations", "Audio/Visual Entertainment", "Fitness Consultations", "Locker Rentals"],
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "951e1383-997b-4691-a54d-b1384b1fa858",
    vesselId: "sv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the SV The  Mariner. Stay active and healthy while cruising the waters near Amsterdam with our state-of-the-art fitness facilities. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(338) 879-4252",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Battle Ropes", "Treadmills", "Elliptical Machines", "StairMaster", "Agility Hurdles", "Cardio Medicine Balls", "Cardio Resistance Bands", "Cardio Step Platforms", "Arc Trainers", "Cable Single Arm Single Leg Glute Kickback Machine", "Cable Russian Twist Machine", "Cable Tricep Pushdown Machine", "Weight Machines", "Cable Calf Raise Machine", "Bench Press", "Cable Crossover Machine", "Calf Raise Machine", "Cable Row Machine", "Seated Row Machine", "Cable Single Arm Tricep Extension Machine", "Cable Lateral Raise Machine", "BOSU Balls", "Jump Boxes", "Kettlebells", "Balance Boards", "Weighted Vests", "Slam Balls", "Stretching Stations"],
    personalTrainers: ["Corrective Exercise Specialist", "Aqua Fitness Instructor", "Spinning Instructor", "Group Fitness Instructor"],
    amenities: ["Smoothie Bar", "Protein Shakes", "Workout Programs", "Personal Training Sessions", "Hair Dryers", "Towel Service", "Locker Rentals", "Toiletries", "Water Stations"],
    is24Hours: true,
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
    id: "8aab5747-5e60-44f4-92bf-9d05a4408c89",
    vesselId: "rv--gale",
    name: "RV  Gale Fitness Center",
    description: "Discover wellness at sea with RV  Gale Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(861) 710-6207",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Stationary Bikes", "Cardio Kettlebells", "Agility Hurdles", "Cardio Gliders", "Cardio Resistance Bands", "Cable Single Arm Row Machine", "Cable Single Arm Single Leg Upright Row Machine", "Weight Machines", "Cable Single Arm Deadlift Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Pallof Press Machine", "Leg Curl Machine", "Cable Single Arm Woodchopper Machine", "Cable Ab Crunch Machine", "Speed Bands", "Agility Cones", "TRX Suspension Trainers", "Tire Flips", "Plyo Boxes", "Sandbags", "Speed Ladders", "HydroMassage Beds", "Barre Equipment", "Boxing Equipment"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Senior Fitness Specialist"],
    amenities: ["Equipment Orientation", "Towel Service", "Toiletries", "Locker Rentals", "Smoothie Bar", "Audio/Visual Entertainment", "Water Stations", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  }
];
