// Fitness center venues data for Montevideo
// This file contains fitness center and wellness facility information for cruise vessels operating from Montevideo
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const montevideoFitnessCenters: FitnessCenter[] = [
  {
    id: "05f9575e-39ce-46fa-b117-bc1db9fc82a2",
    vesselId: "cs--explorer",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/ocean-liner-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-943-491-7193",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "VersaClimber", "Spin Bikes", "Stationary Bikes", "Recumbent Bikes", "StairMaster", "Air Bikes", "Dumbbells", "Power Rack", "Leg Curl Machine", "Free Weights", "Weight Machines", "Barbells", "Pull-up Station", "Cable Machines", "Leg Press Machine", "Shoulder Press Machine", "Agility Ladders", "Resistance Bands", "Kettlebells", "Foam Rollers", "Yoga Mats", "Balance Boards", "Massage Chairs"],
    personalTrainers: ["Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Protein Shakes", "Equipment Orientation", "Body Composition Analysis", "Group Fitness Classes", "Toiletries", "Workout Programs", "Fitness Tracking", "Audio/Visual Entertainment", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
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
    id: "7e7aeb26-ac0f-4ceb-b8bc-79127056c6b4",
    vesselId: "my-montevideo-voyager",
    name: "Seascape Fitness",
    description: "Seascape Fitness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Montevideo. Our facility features steam room, group fitness classes.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-409-261-6117",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Treadmills", "StairMaster", "VersaClimber", "Arc Trainers", "Air Bikes", "Elliptical Machines", "Stationary Bikes", "Free Weights", "Dumbbells", "Pull-up Station", "Smith Machine", "Leg Curl Machine", "Barbells", "Cable Machines", "Bench Press", "Plyo Boxes", "Battle Ropes", "Medicine Balls", "BOSU Balls", "Stability Balls", "Yoga Mats", "TRX Suspension Trainers", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Audio/Visual Entertainment", "Towel Service", "Water Stations", "Personal Training Sessions", "Fitness Tracking", "Fresh Fruit Bar", "Body Composition Analysis", "Toiletries", "Hair Dryers", "Protein Shakes", "Workout Programs", "Equipment Orientation"],
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
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
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
    id: "6c652af5-fb4a-49f5-ab0e-377dcc346350",
    vesselId: "my--of-the-deep",
    name: "MY  of the Deep Fitness Center",
    description: "MY  of the Deep Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Montevideo. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-235-860-5550",
      contactEmail: "communications@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "StairMaster", "Arc Trainers", "Rowing Machines", "Treadmills", "Elliptical Machines", "Recumbent Bikes", "Air Bikes", "Leg Press Machine", "Pull-up Station", "Leg Curl Machine", "Cable Machines", "Bench Press", "Free Weights", "Dumbbells", "Barbells", "Weight Machines", "Lat Pulldown", "Plyo Boxes", "Resistance Bands", "TRX Suspension Trainers", "BOSU Balls", "Kettlebells", "Pilates Reformers", "Stretching Stations"],
    personalTrainers: ["Corrective Exercise Specialist", "Senior Fitness Specialist", "Certified Personal Trainer", "Fitness Nutrition Specialist"],
    amenities: ["Workout Programs", "Group Fitness Classes", "Locker Rentals", "Hair Dryers", "Protein Shakes", "Audio/Visual Entertainment", "Toiletries", "Water Stations", "Fitness Consultations", "Towel Service", "Personal Training Sessions", "Fresh Fruit Bar"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "fdbdaa7f-9fc9-4a70-8fc3-dab6dde8ec46",
    vesselId: "rv-the--mariner",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room, nutrition counseling.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-764-825-1911",
      contactEmail: "hello@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Spin Bikes", "VersaClimber", "Arc Trainers", "Rowing Machines", "Recumbent Bikes", "Barbells", "Bench Press", "Dumbbells", "Smith Machine", "Lat Pulldown", "Leg Curl Machine", "Weight Machines", "Leg Press Machine", "Power Rack", "Free Weights", "Pull-up Station", "Agility Ladders", "Balance Boards", "Kettlebells", "Foam Rollers", "Plyo Boxes", "Recovery Tools", "Stretching Stations", "Cryotherapy Chamber"],
    personalTrainers: ["Aqua Fitness Instructor", "Spinning Instructor", "Pilates Instructor", "Senior Fitness Specialist"],
    amenities: ["Fitness Tracking", "Equipment Orientation", "Hair Dryers", "Protein Shakes", "Group Fitness Classes", "Personal Training Sessions", "Water Stations", "Fresh Fruit Bar", "Fitness Consultations", "Body Composition Analysis", "Toiletries", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "acac37ff-5bcb-4ab4-8824-11868adf058a",
    vesselId: "mv--gale",
    name: "Montevideo Fitness Center",
    description: "Montevideo Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-840-399-7560",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Air Bikes", "Rowing Machines", "Treadmills", "Elliptical Machines", "Stationary Bikes", "Free Weights", "Weight Machines", "Leg Press Machine", "Pull-up Station", "Power Rack", "Bench Press", "Dumbbells", "Cable Machines", "Smith Machine", "Shoulder Press Machine", "Resistance Bands", "Kettlebells", "TRX Suspension Trainers", "Medicine Balls", "BOSU Balls", "Infrared Sauna", "Compression Therapy"],
    personalTrainers: ["Strength Training Specialist", "Senior Fitness Specialist"],
    amenities: ["Personal Training Sessions", "Water Stations", "Toiletries", "Towel Service", "Fresh Fruit Bar", "Group Fitness Classes", "Fitness Tracking", "Workout Programs", "Hair Dryers"],
    is24Hours: true,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      }
    ],
    isPopular: true
  }
];
