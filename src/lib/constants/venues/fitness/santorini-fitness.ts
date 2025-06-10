// Fitness center venues data for Santorini
// This file contains fitness center and wellness facility information for cruise vessels operating from Santorini
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const santoriniFitnessCenters: FitnessCenter[] = [
  {
    id: "1c05a795-0020-4b0d-a178-245e1a389375",
    vesselId: "ss--explorer",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Santorini. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-608-417-1708",
      contactEmail: "connect@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Stationary Bikes", "Rowing Machines", "Elliptical Machines", "Treadmills", "StairMaster", "Air Bikes", "Arc Trainers", "Dumbbells", "Pull-up Station", "Weight Machines", "Free Weights", "Shoulder Press Machine", "Power Rack", "Leg Curl Machine", "Lat Pulldown", "Bench Press", "Smith Machine", "Leg Press Machine", "Barbells", "Resistance Bands", "Yoga Mats", "Balance Boards", "BOSU Balls", "Agility Ladders", "TRX Suspension Trainers", "Pilates Reformers", "Barre Equipment", "Compression Therapy"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Personal Training Sessions", "Locker Rentals", "Water Stations", "Audio/Visual Entertainment", "Equipment Orientation", "Toiletries", "Workout Programs", "Group Fitness Classes"],
    is24Hours: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "78a14b92-92dc-4cf0-888b-5c6efc3aaf6b",
    vesselId: "nx-santorini-voyager",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the NX Santorini Voyager. Stay active and healthy while cruising the waters near Santorini with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-421-762-2012",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Recumbent Bikes", "Air Bikes", "VersaClimber", "Stationary Bikes", "Spin Bikes", "Rowing Machines", "StairMaster", "Arc Trainers", "Free Weights", "Weight Machines", "Leg Curl Machine", "Bench Press", "Dumbbells", "Cable Machines", "Leg Press Machine", "Barbells", "Power Rack", "Agility Ladders", "Yoga Mats", "Kettlebells", "BOSU Balls", "TRX Suspension Trainers", "Resistance Bands", "Medicine Balls", "Battle Ropes", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Fresh Fruit Bar", "Equipment Orientation", "Protein Shakes", "Workout Programs", "Water Stations", "Personal Training Sessions", "Body Composition Analysis", "Toiletries", "Hair Dryers"],
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "863a96cc-29d5-463a-acc3-bb07559aaaa3",
    vesselId: "nb--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the NB  of the Deep. Stay active and healthy while cruising the waters near Santorini with our state-of-the-art fitness facilities. Our facility features pool area, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-871-194-9886",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Treadmills", "Recumbent Bikes", "StairMaster", "Arc Trainers", "Spin Bikes", "Elliptical Machines", "Stationary Bikes", "Rowing Machines", "Dumbbells", "Free Weights", "Shoulder Press Machine", "Leg Curl Machine", "Leg Press Machine", "Bench Press", "Barbells", "Pull-up Station", "Weight Machines", "Cable Machines", "Plyo Boxes", "TRX Suspension Trainers", "Battle Ropes", "Medicine Balls", "Yoga Mats", "Resistance Bands", "Foam Rollers", "Stability Balls", "Recovery Tools", "Compression Therapy", "Barre Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Fitness Nutrition Specialist", "Aqua Fitness Instructor"],
    amenities: ["Workout Programs", "Towel Service", "Audio/Visual Entertainment", "Locker Rentals", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    isPopular: false
  },
  {
    id: "b2c06572-8438-420e-aeb8-122f1f9c5700",
    vesselId: "rv-the--mariner",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the RV The  Mariner. Stay active and healthy while cruising the waters near Santorini with our state-of-the-art fitness facilities. Our facility features steam room.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-951-233-6773",
      contactEmail: "admin@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Spin Bikes", "Arc Trainers", "Stationary Bikes", "Elliptical Machines", "Treadmills", "Rowing Machines", "VersaClimber", "Recumbent Bikes", "StairMaster", "Dumbbells", "Weight Machines", "Lat Pulldown", "Leg Press Machine", "Bench Press", "Power Rack", "Barbells", "Cable Machines", "Pull-up Station", "Foam Rollers", "TRX Suspension Trainers", "Plyo Boxes", "Battle Ropes", "Stability Balls", "Medicine Balls", "Resistance Bands", "Kettlebells", "Recovery Tools"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Group Fitness Instructor"],
    amenities: ["Towel Service", "Water Stations", "Fresh Fruit Bar", "Equipment Orientation", "Group Fitness Classes", "Locker Rentals", "Personal Training Sessions", "Toiletries", "Hair Dryers", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "2aaf79f9-8422-40a0-b2eb-774edbc2a72f",
    vesselId: "rms--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-391-494-9801",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Elliptical Machines", "StairMaster", "VersaClimber", "Treadmills", "Recumbent Bikes", "Spin Bikes", "Arc Trainers", "Barbells", "Power Rack", "Leg Curl Machine", "Leg Press Machine", "Dumbbells", "Free Weights", "Smith Machine", "Bench Press", "Shoulder Press Machine", "Cable Machines", "Resistance Bands", "Agility Ladders", "Foam Rollers", "Battle Ropes", "Yoga Mats", "Balance Boards", "Pilates Reformers", "Compression Therapy", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Group Fitness Classes", "Fitness Tracking", "Water Stations", "Towel Service", "Hair Dryers", "Toiletries", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  }
];
