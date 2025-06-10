// Fitness center venues data for George Town
// This file contains fitness center and wellness facility information for cruise vessels operating from George Town
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const georgeTownFitnessCenters: FitnessCenter[] = [
  {
    id: "2d069100-7212-4841-9f5d-c22dd607730d",
    vesselId: "cs--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-630-185-2674",
      contactEmail: "mail@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Treadmills", "Arc Trainers", "Spin Bikes", "VersaClimber", "StairMaster", "Recumbent Bikes", "Leg Press Machine", "Free Weights", "Lat Pulldown", "Power Rack", "Leg Curl Machine", "Bench Press", "Pull-up Station", "Dumbbells", "Foam Rollers", "Kettlebells", "Battle Ropes", "Plyo Boxes", "Resistance Bands", "Balance Boards", "Pilates Reformers", "Compression Therapy", "Stretching Stations", "Barre Equipment"],
    personalTrainers: ["Aqua Fitness Instructor", "Corrective Exercise Specialist", "Certified Personal Trainer"],
    amenities: ["Toiletries", "Fitness Tracking", "Fitness Consultations", "Towel Service", "Locker Rentals", "Workout Programs", "Water Stations", "Protein Shakes", "Body Composition Analysis", "Fresh Fruit Bar", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "157e4a1f-79bd-43ce-9f70-54fecdf10871",
    vesselId: "mv-george-town-voyager",
    name: "Horizon Health Club",
    description: "Horizon Health Club offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-995-229-7117",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Arc Trainers", "StairMaster", "Rowing Machines", "Treadmills", "Stationary Bikes", "Spin Bikes", "Air Bikes", "Recumbent Bikes", "Free Weights", "Leg Press Machine", "Power Rack", "Shoulder Press Machine", "Smith Machine", "Lat Pulldown", "Pull-up Station", "Dumbbells", "Cable Machines", "Weight Machines", "Bench Press", "Barbells", "Kettlebells", "Stability Balls", "BOSU Balls", "Yoga Mats", "Medicine Balls", "Compression Therapy", "Cryotherapy Chamber", "Recovery Tools"],
    personalTrainers: ["Yoga Instructor", "Fitness Nutrition Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Water Stations", "Locker Rentals", "Body Composition Analysis", "Equipment Orientation", "Hair Dryers", "Fitness Tracking", "Workout Programs", "Toiletries", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "939cf697-fd69-40a0-a8f9-1d58077f1819",
    vesselId: "cs--of-the-deep",
    name: "CS  of the Deep Fitness Center",
    description: "CS  of the Deep Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around George Town. Our facility features pool area, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-341-928-9339",
      contactEmail: "feedback@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Recumbent Bikes", "Stationary Bikes", "Arc Trainers", "VersaClimber", "Elliptical Machines", "Bench Press", "Leg Curl Machine", "Lat Pulldown", "Dumbbells", "Weight Machines", "Power Rack", "Leg Press Machine", "Smith Machine", "Kettlebells", "Battle Ropes", "Yoga Mats", "BOSU Balls", "Medicine Balls", "TRX Suspension Trainers", "Compression Therapy", "Massage Chairs"],
    personalTrainers: ["Yoga Instructor", "Strength Training Specialist", "Corrective Exercise Specialist", "Senior Fitness Specialist"],
    amenities: ["Fitness Consultations", "Towel Service", "Protein Shakes", "Fresh Fruit Bar", "Body Composition Analysis", "Water Stations", "Workout Programs", "Personal Training Sessions", "Toiletries", "Locker Rentals", "Group Fitness Classes", "Hair Dryers"],
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
      }
    ],
    isPopular: true
  },
  {
    id: "1d6f5384-1df9-4a02-bea9-ea20fa0864f8",
    vesselId: "nx-the--mariner",
    name: "Aqua Fitness Center",
    description: "Welcome to Aqua Fitness Center, your premier wellness destination aboard the NX The  Mariner. Stay active and healthy while cruising the waters near George Town with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "23:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-387-565-9057",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Arc Trainers", "Spin Bikes", "Treadmills", "Rowing Machines", "Air Bikes", "Elliptical Machines", "StairMaster", "VersaClimber", "Smith Machine", "Cable Machines", "Weight Machines", "Leg Press Machine", "Barbells", "Leg Curl Machine", "Pull-up Station", "Dumbbells", "Free Weights", "Foam Rollers", "Kettlebells", "Agility Ladders", "BOSU Balls", "Medicine Balls", "Plyo Boxes", "Stability Balls", "Resistance Bands", "Stretching Stations", "Cryotherapy Chamber"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Body Composition Analysis", "Towel Service", "Protein Shakes", "Fresh Fruit Bar", "Equipment Orientation", "Locker Rentals", "Group Fitness Classes", "Personal Training Sessions", "Hair Dryers"],
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
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "a5fd9859-0508-45ae-aac2-1ae00f94d5d9",
    vesselId: "rv--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features group fitness classes.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-396-799-6834",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Arc Trainers", "Air Bikes", "Elliptical Machines", "Rowing Machines", "Treadmills", "StairMaster", "Spin Bikes", "VersaClimber", "Recumbent Bikes", "Smith Machine", "Leg Press Machine", "Cable Machines", "Pull-up Station", "Weight Machines", "Power Rack", "Leg Curl Machine", "Barbells", "Bench Press", "Dumbbells", "Lat Pulldown", "Kettlebells", "Agility Ladders", "TRX Suspension Trainers", "Resistance Bands", "Medicine Balls", "Plyo Boxes", "Balance Boards", "Foam Rollers", "Recovery Tools", "Stretching Stations"],
    personalTrainers: ["Senior Fitness Specialist", "Pilates Instructor"],
    amenities: ["Fitness Consultations", "Fitness Tracking", "Locker Rentals", "Personal Training Sessions", "Equipment Orientation", "Hair Dryers", "Body Composition Analysis", "Toiletries", "Water Stations", "Protein Shakes", "Workout Programs", "Towel Service"],
    is24Hours: true,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  }
];
