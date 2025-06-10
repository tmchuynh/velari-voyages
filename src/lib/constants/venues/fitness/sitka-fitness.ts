// Fitness center venues data for Sitka
// This file contains fitness center and wellness facility information for cruise vessels operating from Sitka
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const sitkaFitnessCenters: FitnessCenter[] = [
  {
    id: "014a83df-790f-4c61-b356-23263e220ce5",
    vesselId: "sv--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Sitka. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-555-513-5854",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Rowing Machines", "StairMaster", "Arc Trainers", "Air Bikes", "Treadmills", "Lat Pulldown", "Dumbbells", "Bench Press", "Free Weights", "Power Rack", "Pull-up Station", "Barbells", "Cable Machines", "Leg Curl Machine", "Weight Machines", "Smith Machine", "Shoulder Press Machine", "Kettlebells", "Agility Ladders", "TRX Suspension Trainers", "Medicine Balls", "Resistance Bands", "Balance Boards", "Battle Ropes", "Foam Rollers", "Recovery Tools", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist", "Corrective Exercise Specialist"],
    amenities: ["Protein Shakes", "Fitness Tracking", "Audio/Visual Entertainment", "Fitness Consultations", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  },
  {
    id: "790622bb-a382-4dbd-82fe-b13e955563d3",
    vesselId: "mv-sitka-voyager",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the MV Sitka Voyager. Stay active and healthy while cruising the waters near Sitka with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-833-668-2062",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Treadmills", "Air Bikes", "Elliptical Machines", "Rowing Machines", "Recumbent Bikes", "Stationary Bikes", "StairMaster", "VersaClimber", "Arc Trainers", "Free Weights", "Shoulder Press Machine", "Power Rack", "Bench Press", "Pull-up Station", "Dumbbells", "Leg Curl Machine", "Lat Pulldown", "Smith Machine", "Barbells", "Weight Machines", "Kettlebells", "Medicine Balls", "Agility Ladders", "Plyo Boxes", "Battle Ropes", "TRX Suspension Trainers", "Balance Boards", "Resistance Bands", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Pilates Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Protein Shakes", "Fitness Consultations", "Toiletries", "Group Fitness Classes", "Fresh Fruit Bar", "Equipment Orientation", "Fitness Tracking", "Water Stations", "Audio/Visual Entertainment", "Locker Rentals"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
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
    id: "e6cbff96-9593-4308-be31-8c9918360e2b",
    vesselId: "my--of-the-deep",
    name: "Sitka Fitness Center",
    description: "Discover wellness at sea with Sitka Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-443-595-9361",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Spin Bikes", "VersaClimber", "Air Bikes", "Elliptical Machines", "Rowing Machines", "Treadmills", "Stationary Bikes", "StairMaster", "Recumbent Bikes", "Power Rack", "Leg Curl Machine", "Smith Machine", "Dumbbells", "Weight Machines", "Leg Press Machine", "Shoulder Press Machine", "Lat Pulldown", "Pull-up Station", "Cable Machines", "Bench Press", "Barbells", "Battle Ropes", "BOSU Balls", "Plyo Boxes", "Balance Boards", "Foam Rollers", "Stability Balls", "Pilates Reformers", "Barre Equipment"],
    personalTrainers: ["Spinning Instructor", "Certified Personal Trainer", "Aqua Fitness Instructor", "Fitness Nutrition Specialist"],
    amenities: ["Water Stations", "Locker Rentals", "Protein Shakes", "Towel Service", "Toiletries", "Workout Programs", "Fitness Tracking", "Body Composition Analysis", "Audio/Visual Entertainment", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
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
  },
  {
    id: "98e5f78c-6f46-407f-8504-3e52402fc270",
    vesselId: "nb-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-213-420-4583",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Treadmills", "Air Bikes", "Arc Trainers", "VersaClimber", "Elliptical Machines", "Recumbent Bikes", "Stationary Bikes", "Spin Bikes", "Bench Press", "Smith Machine", "Leg Press Machine", "Pull-up Station", "Barbells", "Power Rack", "Leg Curl Machine", "Dumbbells", "TRX Suspension Trainers", "Kettlebells", "Stability Balls", "Resistance Bands", "Agility Ladders", "Balance Boards", "BOSU Balls", "Stretching Stations", "Barre Equipment"],
    personalTrainers: ["Senior Fitness Specialist", "Fitness Nutrition Specialist", "Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Towel Service", "Protein Shakes", "Personal Training Sessions", "Hair Dryers", "Audio/Visual Entertainment", "Locker Rentals", "Group Fitness Classes", "Toiletries", "Body Composition Analysis", "Water Stations", "Equipment Orientation", "Fitness Tracking"],
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
      }
    ],
    isPopular: false
  },
  {
    id: "96ac5cc6-ae9e-4e90-a538-85c80c43da5b",
    vesselId: "cs--gale",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-862-736-8158",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "VersaClimber", "Rowing Machines", "Elliptical Machines", "Spin Bikes", "Air Bikes", "Stationary Bikes", "Bench Press", "Free Weights", "Leg Press Machine", "Smith Machine", "Cable Machines", "Lat Pulldown", "Barbells", "Leg Curl Machine", "Power Rack", "Pull-up Station", "Dumbbells", "Weight Machines", "Foam Rollers", "Medicine Balls", "Resistance Bands", "Plyo Boxes", "Agility Ladders", "Compression Therapy", "Cryotherapy Chamber", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Aqua Fitness Instructor", "Group Fitness Instructor", "Pilates Instructor"],
    amenities: ["Audio/Visual Entertainment", "Protein Shakes", "Fresh Fruit Bar", "Towel Service", "Body Composition Analysis", "Hair Dryers", "Fitness Tracking", "Equipment Orientation", "Locker Rentals", "Fitness Consultations", "Water Stations", "Group Fitness Classes", "Personal Training Sessions"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  }
];
