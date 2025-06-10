// Fitness center venues data for Paris
// This file contains fitness center and wellness facility information for cruise vessels operating from Paris
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const parisFitnessCenters: FitnessCenter[] = [
  {
    id: "228c91b8-c0a1-49eb-a6ed-21eb5cd731b3",
    vesselId: "sv--explorer",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "23:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-624-275-8273",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "VersaClimber", "StairMaster", "Rowing Machines", "Recumbent Bikes", "Spin Bikes", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "Treadmills", "Power Rack", "Free Weights", "Shoulder Press Machine", "Cable Machines", "Leg Press Machine", "Weight Machines", "Bench Press", "Lat Pulldown", "Leg Curl Machine", "Dumbbells", "Foam Rollers", "Plyo Boxes", "Resistance Bands", "Kettlebells", "Yoga Mats", "BOSU Balls", "Balance Boards", "Infrared Sauna"],
    personalTrainers: ["Yoga Instructor", "Corrective Exercise Specialist"],
    amenities: ["Water Stations", "Body Composition Analysis", "Equipment Orientation", "Protein Shakes", "Personal Training Sessions", "Workout Programs", "Locker Rentals", "Fresh Fruit Bar"],
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
    hasNutritionCounseling: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "8d609f10-35ff-4182-acc3-77829328b029",
    vesselId: "rms-paris-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Paris. Our facility features pool area, dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-570-852-1024",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Rowing Machines", "Arc Trainers", "Elliptical Machines", "Recumbent Bikes", "VersaClimber", "Barbells", "Cable Machines", "Smith Machine", "Leg Press Machine", "Bench Press", "Lat Pulldown", "Power Rack", "Dumbbells", "Leg Curl Machine", "Shoulder Press Machine", "Plyo Boxes", "TRX Suspension Trainers", "BOSU Balls", "Battle Ropes", "Balance Boards", "Medicine Balls", "Foam Rollers", "Agility Ladders", "Infrared Sauna"],
    personalTrainers: ["Strength Training Specialist", "Senior Fitness Specialist", "Yoga Instructor"],
    amenities: ["Personal Training Sessions", "Fitness Consultations", "Workout Programs", "Audio/Visual Entertainment", "Locker Rentals", "Towel Service", "Body Composition Analysis", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: true
  },
  {
    id: "9911e629-40e3-462b-b26d-cb97dd202335",
    vesselId: "cs--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Discover wellness at sea with Maritime Wellness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-647-836-8347",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Air Bikes", "Rowing Machines", "Treadmills", "Arc Trainers", "Spin Bikes", "Recumbent Bikes", "Weight Machines", "Barbells", "Leg Press Machine", "Smith Machine", "Cable Machines", "Bench Press", "Power Rack", "Dumbbells", "Shoulder Press Machine", "BOSU Balls", "TRX Suspension Trainers", "Yoga Mats", "Stability Balls", "Battle Ropes", "Medicine Balls", "Foam Rollers", "Pilates Reformers"],
    personalTrainers: ["Group Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Audio/Visual Entertainment", "Locker Rentals", "Fitness Consultations", "Equipment Orientation", "Towel Service", "Body Composition Analysis", "Toiletries", "Water Stations", "Personal Training Sessions", "Hair Dryers"],
    is24Hours: true,
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
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: true
  },
  {
    id: "52bc2858-eb19-4721-a364-12e78c9e2639",
    vesselId: "ts-the--mariner",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-585-882-8824",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "StairMaster", "Rowing Machines", "Stationary Bikes", "Recumbent Bikes", "Elliptical Machines", "Treadmills", "Arc Trainers", "Leg Curl Machine", "Shoulder Press Machine", "Lat Pulldown", "Weight Machines", "Barbells", "Dumbbells", "Leg Press Machine", "Pull-up Station", "Foam Rollers", "Stability Balls", "BOSU Balls", "Resistance Bands", "Yoga Mats", "TRX Suspension Trainers", "Battle Ropes", "Massage Chairs", "Pilates Reformers", "Recovery Tools"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor", "Group Fitness Instructor", "Strength Training Specialist"],
    amenities: ["Fitness Tracking", "Hair Dryers", "Water Stations", "Toiletries", "Towel Service", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
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
  },
  {
    id: "958b7f4c-37a0-4e5b-bf3d-89d7da7286ea",
    vesselId: "ms--gale",
    name: "Paris Fitness Center",
    description: "Paris Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Paris. Our facility features sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-959-855-6358",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Rowing Machines", "Stationary Bikes", "VersaClimber", "Elliptical Machines", "Treadmills", "Recumbent Bikes", "Arc Trainers", "StairMaster", "Free Weights", "Bench Press", "Pull-up Station", "Cable Machines", "Leg Curl Machine", "Smith Machine", "Leg Press Machine", "Power Rack", "Lat Pulldown", "Dumbbells", "Stability Balls", "TRX Suspension Trainers", "BOSU Balls", "Foam Rollers", "Balance Boards", "Yoga Mats", "Agility Ladders", "Recovery Tools", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Towel Service", "Locker Rentals", "Group Fitness Classes", "Toiletries", "Fitness Consultations", "Fitness Tracking", "Body Composition Analysis", "Workout Programs", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  }
];
