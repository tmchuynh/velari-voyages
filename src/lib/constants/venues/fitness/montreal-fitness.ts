// Fitness center venues data for Montreal
// This file contains fitness center and wellness facility information for cruise vessels operating from Montreal
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const montrealFitnessCenters: FitnessCenter[] = [
  {
    id: "078b3bd3-0a21-436d-8914-1b8f1146d2e3",
    vesselId: "sv--explorer",
    name: "SV  Explorer Fitness Center",
    description: "Welcome to SV  Explorer Fitness Center, your premier wellness destination aboard the SV  Explorer. Stay active and healthy while cruising the waters near Montreal with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-235-328-1975",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Spin Bikes", "Stationary Bikes", "VersaClimber", "Recumbent Bikes", "Arc Trainers", "Air Bikes", "Free Weights", "Cable Machines", "Smith Machine", "Bench Press", "Leg Curl Machine", "Dumbbells", "Lat Pulldown", "Barbells", "Pull-up Station", "Weight Machines", "Power Rack", "Leg Press Machine", "Medicine Balls", "Resistance Bands", "Kettlebells", "Yoga Mats", "Battle Ropes", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Locker Rentals", "Towel Service", "Protein Shakes", "Toiletries", "Fresh Fruit Bar", "Equipment Orientation", "Hair Dryers", "Fitness Consultations", "Audio/Visual Entertainment", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "45e7a591-5991-45b9-b890-1730151a49f2",
    vesselId: "hms-montreal-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-576-514-2978",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "VersaClimber", "Spin Bikes", "Recumbent Bikes", "Stationary Bikes", "Rowing Machines", "StairMaster", "Air Bikes", "Arc Trainers", "Free Weights", "Smith Machine", "Lat Pulldown", "Dumbbells", "Cable Machines", "Pull-up Station", "Leg Curl Machine", "Leg Press Machine", "Kettlebells", "Balance Boards", "Medicine Balls", "BOSU Balls", "Plyo Boxes", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist"],
    amenities: ["Water Stations", "Group Fitness Classes", "Locker Rentals", "Towel Service", "Toiletries", "Personal Training Sessions", "Body Composition Analysis", "Hair Dryers", "Fitness Consultations"],
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "f691adae-b8ab-456b-8e5a-ffc73dd33edf",
    vesselId: "nx--of-the-deep",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-705-538-9166",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "VersaClimber", "Arc Trainers", "Air Bikes", "Elliptical Machines", "Recumbent Bikes", "StairMaster", "Treadmills", "Rowing Machines", "Spin Bikes", "Weight Machines", "Free Weights", "Bench Press", "Leg Press Machine", "Pull-up Station", "Smith Machine", "Dumbbells", "Barbells", "Lat Pulldown", "Power Rack", "Shoulder Press Machine", "Cable Machines", "Yoga Mats", "Agility Ladders", "Medicine Balls", "Foam Rollers", "Balance Boards", "Compression Therapy", "Stretching Stations", "Barre Equipment", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist", "Strength Training Specialist"],
    amenities: ["Fitness Tracking", "Equipment Orientation", "Fresh Fruit Bar", "Protein Shakes", "Audio/Visual Entertainment", "Workout Programs", "Locker Rentals", "Towel Service", "Water Stations", "Personal Training Sessions"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "120a531e-bc6a-46f6-82aa-1087ab8322c0",
    vesselId: "my-the--mariner",
    name: "MY The  Mariner Fitness Center",
    description: "MY The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-670-495-7220",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Elliptical Machines", "Arc Trainers", "Stationary Bikes", "Air Bikes", "Spin Bikes", "Treadmills", "VersaClimber", "Rowing Machines", "StairMaster", "Power Rack", "Smith Machine", "Leg Press Machine", "Pull-up Station", "Barbells", "Shoulder Press Machine", "Leg Curl Machine", "Bench Press", "Free Weights", "Weight Machines", "Foam Rollers", "Kettlebells", "Plyo Boxes", "Medicine Balls", "Battle Ropes", "TRX Suspension Trainers", "Resistance Bands", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Hair Dryers", "Personal Training Sessions", "Locker Rentals", "Audio/Visual Entertainment", "Protein Shakes", "Group Fitness Classes", "Fitness Tracking"],
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
    id: "c58bb71a-0eec-4b5d-92f1-95b0ea5b15d9",
    vesselId: "ss--gale",
    name: "SS  Gale Fitness Center",
    description: "SS  Gale Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-413-561-3657",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Elliptical Machines", "Treadmills", "VersaClimber", "Arc Trainers", "Stationary Bikes", "Rowing Machines", "Lat Pulldown", "Bench Press", "Free Weights", "Barbells", "Leg Curl Machine", "Power Rack", "Dumbbells", "Weight Machines", "Cable Machines", "Shoulder Press Machine", "Leg Press Machine", "Agility Ladders", "Medicine Balls", "TRX Suspension Trainers", "Kettlebells", "Balance Boards", "Stability Balls", "Battle Ropes", "Compression Therapy", "Massage Chairs", "Recovery Tools"],
    personalTrainers: ["Group Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Protein Shakes", "Locker Rentals", "Water Stations", "Equipment Orientation", "Audio/Visual Entertainment", "Fitness Consultations", "Fitness Tracking", "Fresh Fruit Bar", "Hair Dryers", "Workout Programs", "Personal Training Sessions", "Group Fitness Classes", "Towel Service"],
    is24Hours: true,
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
  }
];
