// Fitness center venues data for London
// This file contains fitness center and wellness facility information for cruise vessels operating from London
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const londonFitnessCenters: FitnessCenter[] = [
  {
    id: "b4b9130e-ee4c-4d16-8ca1-6a1be5a040cf",
    vesselId: "hms--explorer",
    name: "London Fitness Center",
    description: "Welcome to London Fitness Center, your premier wellness destination aboard the HMS  Explorer. Stay active and healthy while cruising the waters near London with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-710-425-6958",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Elliptical Machines", "Recumbent Bikes", "Treadmills", "Arc Trainers", "Stationary Bikes", "StairMaster", "Leg Press Machine", "Weight Machines", "Barbells", "Bench Press", "Shoulder Press Machine", "Dumbbells", "Cable Machines", "Free Weights", "Smith Machine", "Pull-up Station", "Agility Ladders", "Foam Rollers", "BOSU Balls", "Balance Boards", "Kettlebells", "Plyo Boxes", "Resistance Bands", "Medicine Balls", "Pilates Reformers", "Barre Equipment", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Audio/Visual Entertainment", "Fitness Tracking", "Workout Programs", "Towel Service", "Equipment Orientation", "Body Composition Analysis", "Personal Training Sessions", "Fitness Consultations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "994fb4f4-389f-4ae3-87a2-3b8916140bb6",
    vesselId: "ps-london-voyager",
    name: "Horizon Health Club",
    description: "Discover wellness at sea with Horizon Health Club. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-572-226-8101",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Arc Trainers", "Elliptical Machines", "StairMaster", "Spin Bikes", "Recumbent Bikes", "VersaClimber", "Stationary Bikes", "Air Bikes", "Rowing Machines", "Smith Machine", "Power Rack", "Lat Pulldown", "Weight Machines", "Free Weights", "Barbells", "Leg Curl Machine", "Pull-up Station", "Shoulder Press Machine", "Bench Press", "Leg Press Machine", "Medicine Balls", "Battle Ropes", "Agility Ladders", "Foam Rollers", "Resistance Bands", "Balance Boards", "Pilates Reformers", "Cryotherapy Chamber", "Compression Therapy"],
    personalTrainers: ["Spinning Instructor", "Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Hair Dryers", "Fitness Tracking", "Protein Shakes", "Body Composition Analysis", "Group Fitness Classes", "Locker Rentals", "Personal Training Sessions", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
    id: "26c90626-a6c1-40c3-8882-12ec5be98d52",
    vesselId: "ms--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the MS  of the Deep. Stay active and healthy while cruising the waters near London with our state-of-the-art fitness facilities. Our facility features nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-527-929-2886",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Stationary Bikes", "Elliptical Machines", "VersaClimber", "Rowing Machines", "StairMaster", "Free Weights", "Weight Machines", "Leg Press Machine", "Power Rack", "Smith Machine", "Dumbbells", "Barbells", "Bench Press", "Resistance Bands", "Foam Rollers", "TRX Suspension Trainers", "Agility Ladders", "BOSU Balls", "Infrared Sauna"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor", "Aqua Fitness Instructor"],
    amenities: ["Hair Dryers", "Body Composition Analysis", "Towel Service", "Audio/Visual Entertainment", "Fitness Consultations", "Toiletries", "Protein Shakes", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
    id: "942380a8-117d-49b5-851f-333f693f1ae5",
    vesselId: "mv-the--mariner",
    name: "MV The  Mariner Fitness Center",
    description: "MV The  Mariner Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-853-912-8285",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "StairMaster", "Spin Bikes", "Free Weights", "Smith Machine", "Lat Pulldown", "Pull-up Station", "Dumbbells", "Leg Press Machine", "Leg Curl Machine", "Cable Machines", "Weight Machines", "Shoulder Press Machine", "Barbells", "Bench Press", "TRX Suspension Trainers", "Kettlebells", "Plyo Boxes", "Balance Boards", "Stability Balls", "Agility Ladders", "Barre Equipment", "Massage Chairs"],
    personalTrainers: ["Corrective Exercise Specialist", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Body Composition Analysis", "Hair Dryers", "Equipment Orientation", "Water Stations", "Group Fitness Classes", "Locker Rentals", "Protein Shakes", "Towel Service", "Personal Training Sessions", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "b09f349f-3cc7-4640-9c09-34138427f2f6",
    vesselId: "ps--gale",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-307-196-2851",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "StairMaster", "Recumbent Bikes", "Arc Trainers", "Rowing Machines", "Spin Bikes", "Treadmills", "Air Bikes", "Power Rack", "Smith Machine", "Weight Machines", "Leg Press Machine", "Bench Press", "Leg Curl Machine", "Dumbbells", "Pull-up Station", "Medicine Balls", "Foam Rollers", "Agility Ladders", "Battle Ropes", "Kettlebells", "Stability Balls", "Resistance Bands", "Stretching Stations"],
    personalTrainers: ["Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Hair Dryers", "Equipment Orientation", "Fitness Consultations", "Group Fitness Classes", "Protein Shakes", "Personal Training Sessions", "Workout Programs", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  }
];
