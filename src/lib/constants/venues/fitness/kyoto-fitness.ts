// Fitness center venues data for Kyoto
// This file contains fitness center and wellness facility information for cruise vessels operating from Kyoto
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const kyotoFitnessCenters: FitnessCenter[] = [
  {
    id: "6d3a1b28-4f14-48bf-9e71-52184f3493b2",
    vesselId: "mv--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-292-251-4479",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "Spin Bikes", "VersaClimber", "Arc Trainers", "Air Bikes", "Barbells", "Dumbbells", "Leg Curl Machine", "Pull-up Station", "Smith Machine", "Lat Pulldown", "Free Weights", "Power Rack", "Balance Boards", "Battle Ropes", "Plyo Boxes", "Foam Rollers", "Kettlebells", "Resistance Bands", "Stability Balls", "Agility Ladders", "Massage Chairs", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Group Fitness Instructor"],
    amenities: ["Personal Training Sessions", "Fitness Tracking", "Equipment Orientation", "Toiletries", "Protein Shakes", "Water Stations", "Audio/Visual Entertainment", "Fitness Consultations", "Body Composition Analysis", "Workout Programs", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
    isPopular: false
  },
  {
    id: "f1c6323c-e782-4346-85ab-03bfc58bf265",
    vesselId: "my-kyoto-voyager",
    name: "Kyoto Fitness Center",
    description: "Kyoto Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Kyoto. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-627-410-5751",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "StairMaster", "Rowing Machines", "Recumbent Bikes", "Spin Bikes", "Stationary Bikes", "VersaClimber", "Weight Machines", "Leg Curl Machine", "Leg Press Machine", "Power Rack", "Free Weights", "Dumbbells", "Pull-up Station", "Cable Machines", "Barbells", "Smith Machine", "Bench Press", "Stability Balls", "Balance Boards", "Plyo Boxes", "Yoga Mats", "Resistance Bands", "BOSU Balls", "Agility Ladders", "Recovery Tools", "Pilates Reformers", "Infrared Sauna"],
    personalTrainers: ["Strength Training Specialist", "Pilates Instructor", "Yoga Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Consultations", "Towel Service", "Toiletries", "Hair Dryers", "Water Stations", "Group Fitness Classes", "Body Composition Analysis", "Workout Programs", "Equipment Orientation", "Audio/Visual Entertainment", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "959c2cc0-af5c-4d34-a348-483d25438f37",
    vesselId: "ms--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-468-702-5124",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Spin Bikes", "Treadmills", "Elliptical Machines", "Air Bikes", "Recumbent Bikes", "Arc Trainers", "Stationary Bikes", "Rowing Machines", "Shoulder Press Machine", "Barbells", "Power Rack", "Leg Press Machine", "Smith Machine", "Dumbbells", "Leg Curl Machine", "Free Weights", "Pull-up Station", "Bench Press", "Weight Machines", "Agility Ladders", "BOSU Balls", "Kettlebells", "Yoga Mats", "Medicine Balls", "Plyo Boxes", "Resistance Bands", "Pilates Reformers"],
    personalTrainers: ["Pilates Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Hair Dryers", "Water Stations", "Body Composition Analysis", "Fitness Tracking", "Fitness Consultations", "Workout Programs", "Protein Shakes"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "f22dddfc-46de-4564-8a52-5397eb071590",
    vesselId: "mv-the--mariner",
    name: "MV The  Mariner Fitness Center",
    description: "Discover wellness at sea with MV The  Mariner Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-878-301-4296",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Arc Trainers", "Treadmills", "Air Bikes", "Stationary Bikes", "Barbells", "Bench Press", "Weight Machines", "Leg Curl Machine", "Pull-up Station", "Cable Machines", "Smith Machine", "Power Rack", "Dumbbells", "Shoulder Press Machine", "Balance Boards", "TRX Suspension Trainers", "Agility Ladders", "Resistance Bands", "Foam Rollers", "Plyo Boxes", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Toiletries", "Workout Programs", "Locker Rentals", "Water Stations", "Personal Training Sessions", "Fitness Tracking", "Audio/Visual Entertainment", "Equipment Orientation", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "2d398111-f21d-47c0-b7ff-6aad07f054e6",
    vesselId: "sy--gale",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-312-180-7222",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "VersaClimber", "Elliptical Machines", "Rowing Machines", "Spin Bikes", "Air Bikes", "Stationary Bikes", "Pull-up Station", "Free Weights", "Bench Press", "Leg Press Machine", "Leg Curl Machine", "Dumbbells", "Shoulder Press Machine", "Cable Machines", "Barbells", "Weight Machines", "Lat Pulldown", "Smith Machine", "Balance Boards", "Foam Rollers", "BOSU Balls", "Medicine Balls", "TRX Suspension Trainers", "Plyo Boxes", "Yoga Mats", "Agility Ladders", "Stretching Stations", "Barre Equipment", "Massage Chairs", "Compression Therapy", "Pilates Reformers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Yoga Instructor", "Aqua Fitness Instructor", "Group Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Personal Training Sessions", "Hair Dryers", "Audio/Visual Entertainment", "Body Composition Analysis", "Fitness Tracking", "Group Fitness Classes", "Water Stations", "Toiletries", "Workout Programs", "Fitness Consultations", "Towel Service", "Protein Shakes", "Equipment Orientation"],
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
    isPopular: true
  }
];
