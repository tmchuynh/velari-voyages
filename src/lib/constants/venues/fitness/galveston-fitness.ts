// Fitness center venues data for Galveston
// This file contains fitness center and wellness facility information for cruise vessels operating from Galveston
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const galvestonFitnessCenters: FitnessCenter[] = [
  {
    id: "a341132a-849c-4316-b023-b1cfcb3090f2",
    vesselId: "nb--explorer",
    name: "NB  Explorer Fitness Center",
    description: "Discover wellness at sea with NB  Explorer Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-425-750-4884",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "Elliptical Machines", "Treadmills", "VersaClimber", "Air Bikes", "Stationary Bikes", "Spin Bikes", "StairMaster", "Arc Trainers", "Smith Machine", "Cable Machines", "Leg Curl Machine", "Power Rack", "Weight Machines", "Bench Press", "Shoulder Press Machine", "Barbells", "Dumbbells", "Leg Press Machine", "Free Weights", "Balance Boards", "TRX Suspension Trainers", "Stability Balls", "Plyo Boxes", "BOSU Balls", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Spinning Instructor"],
    amenities: ["Personal Training Sessions", "Towel Service", "Fresh Fruit Bar", "Water Stations", "Protein Shakes", "Hair Dryers", "Fitness Consultations", "Locker Rentals", "Equipment Orientation", "Audio/Visual Entertainment"],
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
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    id: "f624d83b-a36d-408a-9311-682dace155b5",
    vesselId: "cs-galveston-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Galveston. Our facility features dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-632-665-5353",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Recumbent Bikes", "Rowing Machines", "Air Bikes", "Stationary Bikes", "Spin Bikes", "Elliptical Machines", "Arc Trainers", "Treadmills", "Leg Press Machine", "Weight Machines", "Leg Curl Machine", "Power Rack", "Dumbbells", "Smith Machine", "Barbells", "Pull-up Station", "Cable Machines", "Shoulder Press Machine", "Free Weights", "Yoga Mats", "Resistance Bands", "Balance Boards", "Foam Rollers", "Battle Ropes", "Barre Equipment", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Equipment Orientation", "Water Stations", "Personal Training Sessions", "Group Fitness Classes", "Locker Rentals", "Toiletries", "Towel Service", "Hair Dryers", "Fitness Consultations", "Protein Shakes", "Workout Programs", "Fresh Fruit Bar"],
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "c6384f74-93f1-4a03-ab31-9bc56381f570",
    vesselId: "mv--of-the-deep",
    name: "Horizon Health Club",
    description: "Welcome to Horizon Health Club, your premier wellness destination aboard the MV  of the Deep. Stay active and healthy while cruising the waters near Galveston with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-863-956-6574",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "Elliptical Machines", "Arc Trainers", "Stationary Bikes", "Rowing Machines", "Air Bikes", "VersaClimber", "StairMaster", "Recumbent Bikes", "Leg Press Machine", "Pull-up Station", "Power Rack", "Weight Machines", "Dumbbells", "Shoulder Press Machine", "Cable Machines", "Free Weights", "Barbells", "Smith Machine", "Battle Ropes", "Plyo Boxes", "Foam Rollers", "TRX Suspension Trainers", "Resistance Bands", "Kettlebells", "Cryotherapy Chamber", "Pilates Reformers", "Barre Equipment", "Stretching Stations", "Recovery Tools", "Infrared Sauna"],
    personalTrainers: ["Pilates Instructor", "Yoga Instructor", "Corrective Exercise Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Group Fitness Classes", "Fitness Tracking", "Personal Training Sessions", "Toiletries", "Locker Rentals", "Body Composition Analysis", "Equipment Orientation", "Towel Service"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
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
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  },
  {
    id: "b08cdbd2-3e25-4d2d-886f-c14af82455c1",
    vesselId: "ts-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Welcome to Oceanview Fitness Center, your premier wellness destination aboard the TS The  Mariner. Stay active and healthy while cruising the waters near Galveston with our state-of-the-art fitness facilities. Our facility features pool area, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-692-828-9166",
      contactEmail: "ask@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "Air Bikes", "StairMaster", "Spin Bikes", "Arc Trainers", "Weight Machines", "Pull-up Station", "Shoulder Press Machine", "Leg Curl Machine", "Lat Pulldown", "Barbells", "Power Rack", "Cable Machines", "Dumbbells", "Leg Press Machine", "Free Weights", "Smith Machine", "BOSU Balls", "Kettlebells", "Agility Ladders", "Resistance Bands", "Yoga Mats", "TRX Suspension Trainers", "Stability Balls", "Stretching Stations"],
    personalTrainers: ["Senior Fitness Specialist", "Fitness Nutrition Specialist", "Corrective Exercise Specialist"],
    amenities: ["Fitness Consultations", "Hair Dryers", "Audio/Visual Entertainment", "Equipment Orientation", "Protein Shakes", "Group Fitness Classes", "Personal Training Sessions", "Workout Programs", "Body Composition Analysis", "Locker Rentals", "Water Stations", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    isPopular: false
  },
  {
    id: "c7125629-5937-4bb7-8611-3b0b8c32d3c8",
    vesselId: "nb--gale",
    name: "Galveston Fitness Center",
    description: "Galveston Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Galveston. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-582-185-1202",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Arc Trainers", "Spin Bikes", "Recumbent Bikes", "Air Bikes", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Cable Machines", "Leg Curl Machine", "Free Weights", "Smith Machine", "Leg Press Machine", "Shoulder Press Machine", "Bench Press", "Dumbbells", "Stability Balls", "Kettlebells", "Medicine Balls", "Resistance Bands", "BOSU Balls", "Plyo Boxes", "Foam Rollers", "Pilates Reformers"],
    personalTrainers: ["Corrective Exercise Specialist", "Strength Training Specialist"],
    amenities: ["Audio/Visual Entertainment", "Group Fitness Classes", "Hair Dryers", "Fresh Fruit Bar", "Locker Rentals", "Towel Service", "Personal Training Sessions", "Fitness Consultations", "Protein Shakes", "Body Composition Analysis", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  }
];
