// Fitness center venues data for Ho Chi Minh City
// This file contains fitness center and wellness facility information for cruise vessels operating from Ho Chi Minh City
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const hoChiMinhCityFitnessCenters: FitnessCenter[] = [
  {
    id: "fc348ca1-c369-45f6-bc12-24ed7b0fb4db",
    vesselId: "sv--explorer",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, steam room, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-994-448-2066",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "VersaClimber", "Elliptical Machines", "Air Bikes", "Arc Trainers", "Rowing Machines", "StairMaster", "Recumbent Bikes", "Treadmills", "Spin Bikes", "Lat Pulldown", "Free Weights", "Dumbbells", "Barbells", "Leg Curl Machine", "Shoulder Press Machine", "Pull-up Station", "Leg Press Machine", "Weight Machines", "Medicine Balls", "Yoga Mats", "Battle Ropes", "Resistance Bands", "Foam Rollers", "Plyo Boxes", "Balance Boards", "TRX Suspension Trainers", "Infrared Sauna", "Cryotherapy Chamber", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Strength Training Specialist", "Corrective Exercise Specialist"],
    amenities: ["Towel Service", "Locker Rentals", "Equipment Orientation", "Workout Programs", "Fresh Fruit Bar", "Body Composition Analysis", "Group Fitness Classes", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
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
    isPopular: true
  },
  {
    id: "d63f0998-c92a-45f1-a195-a48f69716df0",
    vesselId: "nx-ho-chi-minh-city-voyager",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-570-977-7776",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "Recumbent Bikes", "Spin Bikes", "Arc Trainers", "StairMaster", "Rowing Machines", "VersaClimber", "Bench Press", "Pull-up Station", "Free Weights", "Leg Press Machine", "Weight Machines", "Lat Pulldown", "Shoulder Press Machine", "Cable Machines", "Medicine Balls", "TRX Suspension Trainers", "Agility Ladders", "Kettlebells", "Yoga Mats", "Battle Ropes", "Balance Boards", "Infrared Sauna", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Corrective Exercise Specialist", "Aqua Fitness Instructor", "Pilates Instructor"],
    amenities: ["Protein Shakes", "Workout Programs", "Toiletries", "Towel Service", "Group Fitness Classes", "Body Composition Analysis", "Fitness Tracking", "Fresh Fruit Bar", "Hair Dryers"],
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
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
      }
    ],
    isPopular: false
  },
  {
    id: "42a55388-5783-44b6-abc0-9892061a73b0",
    vesselId: "fv--of-the-deep",
    name: "FV  of the Deep Fitness Center",
    description: "Discover wellness at sea with FV  of the Deep Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-975-149-9692",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "VersaClimber", "Air Bikes", "Stationary Bikes", "Rowing Machines", "Elliptical Machines", "Arc Trainers", "Treadmills", "StairMaster", "Spin Bikes", "Cable Machines", "Power Rack", "Free Weights", "Bench Press", "Dumbbells", "Leg Curl Machine", "Leg Press Machine", "Barbells", "Weight Machines", "Agility Ladders", "Foam Rollers", "Battle Ropes", "Balance Boards", "Resistance Bands", "Barre Equipment", "Recovery Tools", "Infrared Sauna"],
    personalTrainers: ["Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Strength Training Specialist"],
    amenities: ["Personal Training Sessions", "Group Fitness Classes", "Toiletries", "Workout Programs", "Fitness Consultations", "Protein Shakes", "Fresh Fruit Bar", "Hair Dryers", "Water Stations", "Fitness Tracking", "Audio/Visual Entertainment"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "b7968abc-3473-4e49-922d-73efb5aad5f1",
    vesselId: "fv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Discover wellness at sea with Aqua Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-505-655-1738",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Rowing Machines", "Spin Bikes", "Arc Trainers", "Air Bikes", "VersaClimber", "Recumbent Bikes", "Stationary Bikes", "Elliptical Machines", "Power Rack", "Smith Machine", "Cable Machines", "Leg Curl Machine", "Bench Press", "Barbells", "Pull-up Station", "Dumbbells", "Weight Machines", "Lat Pulldown", "Leg Press Machine", "Medicine Balls", "TRX Suspension Trainers", "Plyo Boxes", "Resistance Bands", "Battle Ropes", "Kettlebells", "BOSU Balls", "Agility Ladders", "Massage Chairs", "Cryotherapy Chamber"],
    personalTrainers: ["Spinning Instructor", "Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Toiletries", "Workout Programs", "Fitness Tracking", "Fresh Fruit Bar", "Fitness Consultations", "Audio/Visual Entertainment", "Towel Service", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
    id: "e467e845-c313-4c41-b978-e928ac9829cc",
    vesselId: "ms--gale",
    name: "MS  Gale Fitness Center",
    description: "MS  Gale Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-982-501-9070",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Treadmills", "Elliptical Machines", "VersaClimber", "Stationary Bikes", "Rowing Machines", "Power Rack", "Barbells", "Bench Press", "Lat Pulldown", "Cable Machines", "Leg Press Machine", "Dumbbells", "Weight Machines", "Plyo Boxes", "Resistance Bands", "Medicine Balls", "Agility Ladders", "Kettlebells", "Stability Balls", "Recovery Tools"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor", "Fitness Nutrition Specialist", "Spinning Instructor"],
    amenities: ["Toiletries", "Towel Service", "Water Stations", "Fresh Fruit Bar", "Fitness Tracking", "Fitness Consultations", "Body Composition Analysis", "Audio/Visual Entertainment", "Locker Rentals", "Equipment Orientation", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  }
];
