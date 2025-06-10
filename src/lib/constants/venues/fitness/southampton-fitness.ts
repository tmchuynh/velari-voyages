// Fitness center venues data for Southampton
// This file contains fitness center and wellness facility information for cruise vessels operating from Southampton
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const southamptonFitnessCenters: FitnessCenter[] = [
  {
    id: "0c1f56ea-05c2-4bf2-8305-29bd5bb1200a",
    vesselId: "sv--explorer",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the SV  Explorer. Stay active and healthy while cruising the waters near Southampton with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-247-660-1872",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "StairMaster", "Stationary Bikes", "Air Bikes", "Elliptical Machines", "Spin Bikes", "VersaClimber", "Arc Trainers", "Barbells", "Leg Curl Machine", "Weight Machines", "Shoulder Press Machine", "Leg Press Machine", "Power Rack", "Smith Machine", "Dumbbells", "TRX Suspension Trainers", "Foam Rollers", "BOSU Balls", "Battle Ropes", "Stability Balls", "Resistance Bands", "Recovery Tools", "Massage Chairs"],
    personalTrainers: ["Certified Personal Trainer", "Group Fitness Instructor", "Pilates Instructor", "Aqua Fitness Instructor"],
    amenities: ["Fitness Tracking", "Equipment Orientation", "Locker Rentals", "Personal Training Sessions", "Hair Dryers", "Towel Service", "Protein Shakes", "Toiletries", "Body Composition Analysis", "Group Fitness Classes", "Audio/Visual Entertainment", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "3449871d-47e1-45ce-aae1-e577f0d146dd",
    vesselId: "mv-southampton-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-759-303-1232",
      contactEmail: "info@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "VersaClimber", "Elliptical Machines", "Treadmills", "Rowing Machines", "Air Bikes", "Spin Bikes", "Recumbent Bikes", "Smith Machine", "Cable Machines", "Leg Press Machine", "Power Rack", "Weight Machines", "Lat Pulldown", "Barbells", "Shoulder Press Machine", "Leg Curl Machine", "Dumbbells", "TRX Suspension Trainers", "BOSU Balls", "Kettlebells", "Foam Rollers", "Battle Ropes", "Stability Balls", "Agility Ladders", "Barre Equipment", "Stretching Stations"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Personal Training Sessions", "Fitness Tracking", "Toiletries", "Fresh Fruit Bar", "Protein Shakes", "Workout Programs", "Towel Service", "Group Fitness Classes", "Locker Rentals", "Hair Dryers", "Body Composition Analysis", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "19bbda6c-b29f-4f38-abbe-1150eee6cbe6",
    vesselId: "ly--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Southampton. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-313-826-2229",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Recumbent Bikes", "Elliptical Machines", "StairMaster", "Rowing Machines", "Air Bikes", "Stationary Bikes", "VersaClimber", "Arc Trainers", "Spin Bikes", "Leg Curl Machine", "Bench Press", "Power Rack", "Leg Press Machine", "Shoulder Press Machine", "Smith Machine", "Cable Machines", "Weight Machines", "Barbells", "Dumbbells", "Free Weights", "Medicine Balls", "Foam Rollers", "TRX Suspension Trainers", "Resistance Bands", "Yoga Mats", "Stability Balls", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist", "Aqua Fitness Instructor"],
    amenities: ["Towel Service", "Hair Dryers", "Protein Shakes", "Workout Programs", "Equipment Orientation", "Group Fitness Classes", "Fitness Consultations", "Audio/Visual Entertainment", "Water Stations", "Personal Training Sessions", "Body Composition Analysis", "Toiletries"],
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
    id: "3888507e-ca5c-4de5-baaa-acd28babcb5a",
    vesselId: "ps-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-992-335-9986",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Recumbent Bikes", "Air Bikes", "Elliptical Machines", "VersaClimber", "StairMaster", "Rowing Machines", "Treadmills", "Spin Bikes", "Arc Trainers", "Barbells", "Leg Curl Machine", "Dumbbells", "Pull-up Station", "Leg Press Machine", "Bench Press", "Smith Machine", "Free Weights", "Shoulder Press Machine", "Plyo Boxes", "TRX Suspension Trainers", "Agility Ladders", "Medicine Balls", "BOSU Balls", "Balance Boards", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Fitness Consultations", "Body Composition Analysis", "Workout Programs", "Towel Service", "Fitness Tracking", "Water Stations", "Hair Dryers", "Fresh Fruit Bar", "Audio/Visual Entertainment"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "148e4071-f88a-4827-b3bb-c65156f7dd28",
    vesselId: "my--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Southampton. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-988-310-8621",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Spin Bikes", "Air Bikes", "Treadmills", "Elliptical Machines", "StairMaster", "Stationary Bikes", "Barbells", "Power Rack", "Bench Press", "Weight Machines", "Free Weights", "Shoulder Press Machine", "Smith Machine", "Dumbbells", "Leg Press Machine", "Resistance Bands", "TRX Suspension Trainers", "Agility Ladders", "Balance Boards", "Stability Balls", "Battle Ropes", "Foam Rollers", "Medicine Balls", "Infrared Sauna", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor"],
    amenities: ["Personal Training Sessions", "Locker Rentals", "Fresh Fruit Bar", "Protein Shakes", "Audio/Visual Entertainment", "Hair Dryers", "Water Stations", "Group Fitness Classes", "Fitness Consultations", "Body Composition Analysis", "Fitness Tracking"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  }
];
