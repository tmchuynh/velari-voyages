// Fitness center venues data for Rio De Janeiro
// This file contains fitness center and wellness facility information for cruise vessels operating from Rio De Janeiro
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const rioDeJaneiroFitnessCenters: FitnessCenter[] = [
  {
    id: "481d519e-f26e-4a66-af93-541e4e2d0d9f",
    vesselId: "rv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/boutique-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(403) 149-2976",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Cardio Resistance Bands", "Cardio Kettlebells", "Jump Ropes", "SkiErg", "Stationary Bikes", "Recumbent Bikes", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Lunge Machine", "Cable Single Arm Glute Kickback Machine", "Cable Single Arm Bicep Curl Machine", "Chest Press Machine", "Cable Hip Thrust Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Bench Press", "Agility Markers", "Speed Cords", "BOSU Balls", "Sandbags", "Agility Ladders", "Resistance Bands", "Float Tanks", "Stretching Stations"],
    personalTrainers: ["Strength and Conditioning Coach", "Yoga Instructor"],
    amenities: ["Equipment Orientation", "Nutrition Counseling", "Towel Service", "Hair Dryers", "Water Stations", "Locker Rentals", "Body Composition Analysis", "Toiletries", "Personal Training Sessions", "Workout Programs", "Audio/Visual Entertainment"],
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "f90f4455-2eab-4bab-a1cf-3b56b62ebd8c",
    vesselId: "nx-rio-de-janeiro-voyager",
    name: "Rio De Janeiro Fitness Center",
    description: "Rio De Janeiro Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Rio De Janeiro. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(804) 478-4480",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Boxing Equipment", "Spin Bikes", "Cardio Punching Bags", "Cardio Kickboxing Bags", "Treadmills", "Elliptical Machines", "Cardio Gliders", "Jump Ropes", "Recumbent Bikes", "Plate Loaded Machines", "Cable Single Arm Reverse Fly Machine", "Cable Single Arm Upright Row Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Squat Machine", "Agility Poles", "Resistance Bands", "Speed Sleds", "TRX Suspension Trainers", "Battle Ropes", "Agility Ladders", "Infrared Sauna", "Pilates Reformers"],
    personalTrainers: ["Spinning Instructor", "Youth Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Towel Service", "Locker Rentals", "Protein Shakes", "Smoothie Bar", "Water Stations", "Fresh Fruit Bar", "Nutrition Counseling", "Workout Programs", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
    id: "c51089cf-13da-4c58-9b50-53477067f60b",
    vesselId: "rv--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(722) 322-1696",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Recumbent Bikes", "SkiErg", "Boxing Equipment", "Cardio Kickboxing Bags", "Cardio Resistance Bands", "Air Bikes", "Bench Press", "Cable Machines", "Calf Raise Machine", "Cable Single Arm Single Leg Tricep Extension Machine", "Cable Single Arm Single Leg Woodchopper Machine", "Cable Single Arm Single Leg Bicep Curl Machine", "Cable Single Arm Calf Raise Machine", "Leg Curl Machine", "Smith Machine", "Plate Loaded Machines", "Leg Extension Machine", "Back Extension Machine", "Battle Ropes", "Agility Dots", "Speed Sleds", "Plyo Boxes", "Yoga Mats", "Resistance Bands", "Weighted Vests", "Compression Therapy"],
    personalTrainers: ["Youth Fitness Specialist", "Senior Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Fitness Consultations", "Towel Service", "Toiletries", "Water Stations", "Audio/Visual Entertainment", "Smoothie Bar", "Workout Programs", "Protein Shakes", "Nutrition Counseling", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    isPopular: true
  },
  {
    id: "2679d21a-35f6-4344-9784-ec985563b7bd",
    vesselId: "my-the--mariner",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(409) 343-1533",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Boxing Equipment", "Cardio Gliders", "VersaClimber", "Treadmills", "Arc Trainers", "Recumbent Bikes", "Stationary Bikes", "StairMaster", "Rowing Machines", "Cable Tricep Pushdown Machine", "Cable Single Arm Single Leg Front Raise Machine", "Cable Single Arm Upright Row Machine", "Cable Crossover Machine", "Cable Single Arm Single Leg Plank Machine", "Multi-Gym Systems", "Cable Shrug Machine", "Cable Single Arm Single Leg Squat Machine", "Cable Single Arm Single Leg Pallof Press Machine", "Cable Single Arm Single Leg Reverse Fly Machine", "Speed Bands", "Tire Flips", "Kettlebells", "Agility Dots", "Speed Resistors", "Balance Boards", "Resistance Bands", "Compression Therapy", "HydroMassage Beds", "Kickboxing Equipment"],
    personalTrainers: ["Corrective Exercise Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Consultations", "Group Fitness Classes", "Towel Service", "Nutrition Counseling", "Workout Programs", "Locker Rentals", "Water Stations", "Fitness Tracking", "Personal Training Sessions", "Audio/Visual Entertainment"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "550e6bb1-ae0c-45ac-9921-f1b27fb88237",
    vesselId: "ly--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Rio De Janeiro. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(279) 294-8878",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Boxing Equipment", "StairMaster", "Cardio Kickboxing Bags", "Cardio Kettlebells", "Agility Hurdles", "Cardio Resistance Bands", "Punching Bags", "Cable Single Arm Shoulder Press Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Free Weights", "Cable Single Arm Lunge Machine", "Chest Press Machine", "Cable Single Arm Pallof Press Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Squat Machine", "Multi-Gym Systems", "Kettlebells", "Slam Balls", "Agility Ladders", "Speed Sleds", "Medicine Balls", "Speed Ladders", "Sledgehammers", "Sandbags", "Dance Fitness Equipment", "Pilates Reformers", "CrossFit Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Aqua Fitness Instructor", "Group Fitness Instructor", "Senior Fitness Specialist"],
    amenities: ["Group Fitness Classes", "Fitness Tracking", "Protein Shakes", "Personal Training Sessions", "Toiletries", "Fitness Consultations", "Equipment Orientation", "Hair Dryers", "Water Stations", "Nutrition Counseling", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
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
    id: "d8b9a466-ba9e-453b-a817-e580ffe3025f",
    vesselId: "sv--explorer",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(821) 649-3183",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Punching Bags", "Air Bikes", "Boxing Equipment", "Cardio Gliders", "Cardio Kettlebells", "VersaClimber", "Leg Press Machine", "Cable Upright Row Machine", "Cable Deadlift Machine", "Cable Tricep Pushdown Machine", "Cable Bicep Curl Machine", "Cable Single Arm Ab Crunch Machine", "Chest Press Machine", "Cable Single Arm Single Leg Pallof Press Machine", "BOSU Balls", "Speed Bands", "Balance Boards", "Tire Flips", "Speed Sleds", "Foam Rollers", "TRX Suspension Trainers", "Cryotherapy Chamber", "Aqua Fitness Equipment"],
    personalTrainers: ["Spinning Instructor", "Strength and Conditioning Coach", "Certified Personal Trainer", "Group Fitness Instructor"],
    amenities: ["Water Stations", "Protein Shakes", "Group Fitness Classes", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Locker Rentals", "Personal Training Sessions", "Workout Programs"],
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
    id: "d0d88667-6987-4628-a644-f25ec8e2f4e3",
    vesselId: "rv-rio-de-janeiro-voyager",
    name: "RV Rio De Janeiro Voyager Fitness Center",
    description: "Welcome to RV Rio De Janeiro Voyager Fitness Center, your premier wellness destination aboard the RV Rio De Janeiro Voyager. Stay active and healthy while cruising the waters near Rio De Janeiro with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(346) 861-8372",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Elliptical Machines", "VersaClimber", "Cardio Kettlebells", "Stationary Bikes", "Boxing Equipment", "Arc Trainers", "Rowing Machines", "Cable Lateral Raise Machine", "Cable Single Arm Back Extension Machine", "Cable Row Machine", "Cable Single Arm Hip Thrust Machine", "Cable Ab Crunch Machine", "Free Weights", "Cable Single Arm Calf Raise Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Single Leg Deadlift Machine", "Cable Single Arm Glute Kickback Machine", "Calf Raise Machine", "Seated Row Machine", "Kettlebells", "TRX Suspension Trainers", "Agility Hurdles", "Balance Boards", "Weighted Vests", "Barre Equipment", "HydroMassage Beds", "Functional Training Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Audio/Visual Entertainment", "Fitness Tracking", "Water Stations", "Body Composition Analysis", "Equipment Orientation", "Workout Programs", "Personal Training Sessions", "Protein Shakes", "Smoothie Bar", "Toiletries", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    id: "af8426d0-5291-46c7-8620-c574c02dc842",
    vesselId: "rms--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the RMS  of the Deep. Stay active and healthy while cruising the waters near Rio De Janeiro with our state-of-the-art fitness facilities. Our facility features pool area, dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "(393) 213-1901",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Agility Hurdles", "SkiErg", "Cardio Gliders", "Boxing Equipment", "Cardio Resistance Bands", "Battle Ropes", "Rowing Machines", "Cable Single Arm Single Leg Back Extension Machine", "Chest Press Machine", "Cable Single Arm Single Leg Rear Delt Fly Machine", "Cable Single Arm Single Leg Upright Row Machine", "Cable Single Arm Reverse Fly Machine", "Barbells", "Cable Single Arm Single Leg Woodchopper Machine", "Smith Machine", "Cable Single Arm Hip Thrust Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Back Extension Machine", "Kettlebells", "Agility Poles", "Stability Balls", "Speed Bands", "Speed Cones", "Stretching Stations", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Strength and Conditioning Coach", "Certified Personal Trainer"],
    amenities: ["Fitness Consultations", "Personal Training Sessions", "Towel Service", "Toiletries", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Protein Shakes", "Fitness Tracking"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
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
    isPopular: true
  },
  {
    id: "6c943b9b-87bd-405a-af0c-127759978cc0",
    vesselId: "nb-the--mariner",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(160) 514-1937",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Cardio Kickboxing Bags", "Cardio Medicine Balls", "Cardio Gliders", "Spin Bikes", "Cardio Resistance Bands", "StairMaster", "Elliptical Machines", "Air Bikes", "Cable Single Arm Single Leg Reverse Fly Machine", "Cable Hip Thrust Machine", "Cable Single Arm Tricep Extension Machine", "Cable Plank Machine", "Seated Row Machine", "Free Weights", "Cable Single Arm Shoulder Press Machine", "Back Extension Machine", "Cable Face Pull Machine", "Cable Glute Kickback Machine", "Calf Raise Machine", "BOSU Balls", "TRX Suspension Trainers", "Jump Boxes", "Speed Harnesses", "Speed Hurdles", "Foam Rollers", "Balance Boards", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Youth Fitness Specialist", "Pilates Instructor", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Group Fitness Classes", "Hair Dryers", "Fitness Consultations", "Equipment Orientation", "Towel Service", "Locker Rentals", "Toiletries", "Protein Shakes", "Personal Training Sessions", "Fitness Tracking", "Body Composition Analysis", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
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
    id: "abeda57e-0205-4b7f-98e8-8d3c88d2a50c",
    vesselId: "ms--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Rio De Janeiro. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "(586) 830-4734",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Arc Trainers", "Battle Ropes", "Agility Hurdles", "Rowing Machines", "SkiErg", "Cable Single Arm Chest Press Machine", "Cable Single Arm Single Leg Hip Thrust Machine", "Cable Single Arm Single Leg Ab Crunch Machine", "Cable Machines", "Back Extension Machine", "Cable Single Arm Ab Crunch Machine", "Cable Single Arm Lunge Machine", "Leg Curl Machine", "Cable Squat Machine", "Cable Single Arm Single Leg Calf Raise Machine", "Cable Single Arm Russian Twist Machine", "Cable Upright Row Machine", "Resistance Bands", "Speed Bands", "Agility Ladders", "TRX Suspension Trainers", "Agility Poles", "Weighted Vests", "HydroMassage Beds", "Kickboxing Equipment"],
    personalTrainers: ["Group Fitness Instructor", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Fitness Tracking", "Personal Training Sessions", "Workout Programs", "Equipment Orientation", "Smoothie Bar", "Towel Service", "Protein Shakes", "Toiletries", "Body Composition Analysis", "Group Fitness Classes"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  }
];
