// Fitness center venues data for Lisbon
// This file contains fitness center and wellness facility information for cruise vessels operating from Lisbon
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const lisbonFitnessCenters: FitnessCenter[] = [
  {
    id: "c981de8c-5f8d-4321-b79a-693e1186bddb",
    vesselId: "ts--explorer",
    name: "Lisbon Fitness Center",
    description: "Discover wellness at sea with Lisbon Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-333-686-1845",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Elliptical Machines", "Air Bikes", "Rowing Machines", "Stationary Bikes", "Treadmills", "Arc Trainers", "Lat Pulldown", "Weight Machines", "Dumbbells", "Cable Machines", "Leg Curl Machine", "Shoulder Press Machine", "Free Weights", "Barbells", "Smith Machine", "Bench Press", "Leg Press Machine", "Kettlebells", "Foam Rollers", "Medicine Balls", "Resistance Bands", "Balance Boards", "Yoga Mats", "BOSU Balls", "Agility Ladders", "Barre Equipment", "Infrared Sauna", "Massage Chairs"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fitness Consultations", "Fitness Tracking", "Hair Dryers", "Protein Shakes", "Equipment Orientation", "Group Fitness Classes", "Body Composition Analysis", "Personal Training Sessions", "Audio/Visual Entertainment", "Water Stations"],
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
    hasChildcareServices: true,
    faqs: [
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "ef564862-66f4-4353-97d5-ccc3cfb00891",
    vesselId: "ms-lisbon-voyager",
    name: "Lisbon Fitness Center",
    description: "Welcome to Lisbon Fitness Center, your premier wellness destination aboard the MS Lisbon Voyager. Stay active and healthy while cruising the waters near Lisbon with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-622-120-5984",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Spin Bikes", "Stationary Bikes", "Rowing Machines", "Arc Trainers", "StairMaster", "Recumbent Bikes", "VersaClimber", "Bench Press", "Free Weights", "Pull-up Station", "Lat Pulldown", "Shoulder Press Machine", "Weight Machines", "Barbells", "Leg Press Machine", "Dumbbells", "Power Rack", "TRX Suspension Trainers", "Plyo Boxes", "Kettlebells", "Yoga Mats", "Foam Rollers", "Medicine Balls", "Massage Chairs"],
    personalTrainers: ["Pilates Instructor", "Strength Training Specialist", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Equipment Orientation", "Group Fitness Classes", "Protein Shakes", "Fitness Tracking", "Fitness Consultations", "Towel Service", "Audio/Visual Entertainment", "Hair Dryers", "Toiletries", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
    id: "984df12e-34ce-4df4-9e04-61fdfa21bb54",
    vesselId: "rms--of-the-deep",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the RMS  of the Deep. Stay active and healthy while cruising the waters near Lisbon with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-574-200-1711",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "VersaClimber", "Spin Bikes", "Elliptical Machines", "Stationary Bikes", "StairMaster", "Air Bikes", "Arc Trainers", "Recumbent Bikes", "Power Rack", "Smith Machine", "Pull-up Station", "Shoulder Press Machine", "Lat Pulldown", "Cable Machines", "Leg Curl Machine", "Weight Machines", "Medicine Balls", "Stability Balls", "Agility Ladders", "Yoga Mats", "Kettlebells", "Foam Rollers", "TRX Suspension Trainers", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Locker Rentals", "Protein Shakes", "Hair Dryers", "Towel Service", "Water Stations", "Fitness Consultations", "Equipment Orientation", "Personal Training Sessions"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: false
  },
  {
    id: "1eeda1f5-c6f3-4c24-981b-ea7ef59531ef",
    vesselId: "ps-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-811-409-6937",
      contactEmail: "office@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Arc Trainers", "Spin Bikes", "Treadmills", "VersaClimber", "StairMaster", "Recumbent Bikes", "Free Weights", "Leg Curl Machine", "Power Rack", "Lat Pulldown", "Smith Machine", "Dumbbells", "Weight Machines", "Pull-up Station", "Barbells", "Bench Press", "Kettlebells", "Medicine Balls", "Battle Ropes", "Balance Boards", "Plyo Boxes", "Stretching Stations"],
    personalTrainers: ["Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Personal Training Sessions", "Audio/Visual Entertainment", "Water Stations", "Group Fitness Classes", "Towel Service", "Fitness Consultations", "Body Composition Analysis", "Locker Rentals", "Hair Dryers", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
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
      }
    ],
    isPopular: true
  },
  {
    id: "7f8823d8-f5d0-4a31-930f-29274712c731",
    vesselId: "cs--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Lisbon. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-663-290-7294",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "Elliptical Machines", "Recumbent Bikes", "Air Bikes", "Spin Bikes", "Arc Trainers", "Treadmills", "Stationary Bikes", "Leg Curl Machine", "Leg Press Machine", "Shoulder Press Machine", "Pull-up Station", "Power Rack", "Bench Press", "Weight Machines", "Lat Pulldown", "Cable Machines", "Barbells", "Resistance Bands", "Plyo Boxes", "TRX Suspension Trainers", "Battle Ropes", "BOSU Balls", "Balance Boards", "Yoga Mats", "Medicine Balls", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Audio/Visual Entertainment", "Workout Programs", "Protein Shakes", "Hair Dryers", "Locker Rentals", "Body Composition Analysis", "Fitness Consultations", "Fitness Tracking", "Toiletries"],
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
  }
];
