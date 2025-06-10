// Fitness center venues data for Roatan
// This file contains fitness center and wellness facility information for cruise vessels operating from Roatan
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const roatanFitnessCenters: FitnessCenter[] = [
  {
    id: "fc48c9c8-9d90-4684-9ec2-c0ee7d937f93",
    vesselId: "ts--explorer",
    name: "TS  Explorer Fitness Center",
    description: "Welcome to TS  Explorer Fitness Center, your premier wellness destination aboard the TS  Explorer. Stay active and healthy while cruising the waters near Roatan with our state-of-the-art fitness facilities. Our facility features pool area, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-761-881-1998",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Elliptical Machines", "Arc Trainers", "Air Bikes", "Treadmills", "Stationary Bikes", "StairMaster", "Free Weights", "Cable Machines", "Leg Press Machine", "Dumbbells", "Shoulder Press Machine", "Bench Press", "Smith Machine", "Pull-up Station", "Foam Rollers", "Plyo Boxes", "Stability Balls", "Agility Ladders", "BOSU Balls", "Resistance Bands", "Pilates Reformers", "Infrared Sauna", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Protein Shakes", "Audio/Visual Entertainment", "Equipment Orientation", "Toiletries", "Group Fitness Classes", "Fitness Tracking", "Body Composition Analysis", "Towel Service", "Hair Dryers", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "58e88642-392f-4bf1-bf2d-51ae7441ff31",
    vesselId: "hms-roatan-voyager",
    name: "Roatan Fitness Center",
    description: "Roatan Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-790-378-4437",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "StairMaster", "VersaClimber", "Treadmills", "Elliptical Machines", "Spin Bikes", "Stationary Bikes", "Rowing Machines", "Arc Trainers", "Bench Press", "Leg Press Machine", "Dumbbells", "Cable Machines", "Smith Machine", "Shoulder Press Machine", "Free Weights", "Barbells", "Weight Machines", "Pull-up Station", "Yoga Mats", "TRX Suspension Trainers", "Balance Boards", "Battle Ropes", "BOSU Balls", "Agility Ladders", "Pilates Reformers"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Water Stations", "Audio/Visual Entertainment", "Group Fitness Classes", "Hair Dryers", "Fitness Tracking", "Fitness Consultations", "Equipment Orientation", "Workout Programs", "Protein Shakes"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
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
    isPopular: true
  },
  {
    id: "f58db89d-96d9-4029-8e53-2c0bd2c67730",
    vesselId: "my--of-the-deep",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Roatan. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-340-617-8420",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Spin Bikes", "Air Bikes", "StairMaster", "Arc Trainers", "Treadmills", "VersaClimber", "Recumbent Bikes", "Elliptical Machines", "Leg Curl Machine", "Pull-up Station", "Power Rack", "Cable Machines", "Leg Press Machine", "Lat Pulldown", "Weight Machines", "Bench Press", "Smith Machine", "Barbells", "Dumbbells", "BOSU Balls", "Medicine Balls", "Resistance Bands", "Kettlebells", "TRX Suspension Trainers", "Stability Balls", "Agility Ladders", "Stretching Stations", "Cryotherapy Chamber", "Recovery Tools"],
    personalTrainers: ["Strength Training Specialist", "Pilates Instructor", "Spinning Instructor"],
    amenities: ["Hair Dryers", "Fresh Fruit Bar", "Locker Rentals", "Audio/Visual Entertainment", "Fitness Consultations", "Group Fitness Classes", "Body Composition Analysis", "Protein Shakes", "Equipment Orientation", "Personal Training Sessions", "Water Stations"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  },
  {
    id: "fba0e6c5-c484-48df-b13e-d091aff187c5",
    vesselId: "ms-the--mariner",
    name: "Seascape Fitness",
    description: "Seascape Fitness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-956-785-2040",
      contactEmail: "reachus@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "VersaClimber", "Elliptical Machines", "Recumbent Bikes", "Stationary Bikes", "Spin Bikes", "Rowing Machines", "StairMaster", "Air Bikes", "Bench Press", "Barbells", "Leg Curl Machine", "Lat Pulldown", "Weight Machines", "Smith Machine", "Dumbbells", "Cable Machines", "Shoulder Press Machine", "Free Weights", "Leg Press Machine", "Resistance Bands", "TRX Suspension Trainers", "Plyo Boxes", "Battle Ropes", "Balance Boards", "Foam Rollers", "Stability Balls", "Compression Therapy", "Infrared Sauna", "Pilates Reformers"],
    personalTrainers: ["Yoga Instructor", "Pilates Instructor", "Group Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fitness Consultations", "Toiletries", "Fresh Fruit Bar", "Towel Service", "Fitness Tracking", "Group Fitness Classes", "Audio/Visual Entertainment", "Water Stations", "Personal Training Sessions", "Hair Dryers", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: false
  },
  {
    id: "d991c40e-a0d4-4c85-b2e1-5a25279fecb1",
    vesselId: "rms--gale",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/eco-friendly-hybrid-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-687-162-5050",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Treadmills", "Arc Trainers", "Recumbent Bikes", "Air Bikes", "StairMaster", "Elliptical Machines", "Stationary Bikes", "VersaClimber", "Spin Bikes", "Smith Machine", "Free Weights", "Cable Machines", "Weight Machines", "Power Rack", "Dumbbells", "Leg Press Machine", "Lat Pulldown", "Resistance Bands", "TRX Suspension Trainers", "Plyo Boxes", "Foam Rollers", "BOSU Balls", "Cryotherapy Chamber", "Barre Equipment", "Massage Chairs"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor", "Certified Personal Trainer", "Corrective Exercise Specialist"],
    amenities: ["Hair Dryers", "Protein Shakes", "Locker Rentals", "Towel Service", "Water Stations", "Fitness Consultations", "Workout Programs", "Fresh Fruit Bar"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
      }
    ],
    isPopular: true
  }
];
