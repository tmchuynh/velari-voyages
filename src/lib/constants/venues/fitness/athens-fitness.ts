// Fitness center venues data for Athens
// This file contains fitness center and wellness facility information for cruise vessels operating from Athens
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const athensFitnessCenters: FitnessCenter[] = [
  {
    id: "94108026-933a-43e9-8c73-117c12710566",
    vesselId: "rms--explorer",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-949-351-4852",
      contactEmail: "team@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Recumbent Bikes", "Air Bikes", "Rowing Machines", "Arc Trainers", "Stationary Bikes", "Treadmills", "StairMaster", "Bench Press", "Dumbbells", "Free Weights", "Barbells", "Cable Machines", "Weight Machines", "Leg Curl Machine", "Smith Machine", "Power Rack", "Leg Press Machine", "Foam Rollers", "Stability Balls", "BOSU Balls", "Agility Ladders", "Balance Boards", "Pilates Reformers", "Compression Therapy", "Massage Chairs", "Stretching Stations", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Senior Fitness Specialist", "Aqua Fitness Instructor", "Fitness Nutrition Specialist", "Group Fitness Instructor"],
    amenities: ["Protein Shakes", "Locker Rentals", "Fresh Fruit Bar", "Toiletries", "Group Fitness Classes", "Towel Service", "Fitness Consultations", "Workout Programs", "Fitness Tracking", "Water Stations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
    id: "a0363527-912c-4458-b359-977e9f1e2f16",
    vesselId: "my-athens-voyager",
    name: "Velari Fitness & Wellness",
    description: "Welcome to Velari Fitness & Wellness, your premier wellness destination aboard the MY Athens Voyager. Stay active and healthy while cruising the waters near Athens with our state-of-the-art fitness facilities. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-575-233-5682",
      contactEmail: "general@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Air Bikes", "Rowing Machines", "Spin Bikes", "Arc Trainers", "Stationary Bikes", "StairMaster", "VersaClimber", "Elliptical Machines", "Treadmills", "Leg Curl Machine", "Barbells", "Dumbbells", "Leg Press Machine", "Free Weights", "Pull-up Station", "Lat Pulldown", "Power Rack", "Smith Machine", "Shoulder Press Machine", "Cable Machines", "Plyo Boxes", "Kettlebells", "BOSU Balls", "TRX Suspension Trainers", "Stability Balls", "Medicine Balls", "Agility Ladders", "Barre Equipment", "Cryotherapy Chamber", "Stretching Stations"],
    personalTrainers: ["Senior Fitness Specialist", "Yoga Instructor", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Audio/Visual Entertainment", "Water Stations", "Towel Service", "Body Composition Analysis", "Hair Dryers", "Equipment Orientation", "Group Fitness Classes", "Locker Rentals", "Protein Shakes", "Toiletries", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    isPopular: true
  },
  {
    id: "9b72f1fa-cf84-46e6-85be-ad6c41fe7fbb",
    vesselId: "ps--of-the-deep",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Athens. Our facility features pool area, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/resort-style-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-240-295-8049",
      contactEmail: "welcome@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Rowing Machines", "VersaClimber", "Air Bikes", "StairMaster", "Spin Bikes", "Elliptical Machines", "Recumbent Bikes", "Stationary Bikes", "Weight Machines", "Smith Machine", "Lat Pulldown", "Power Rack", "Free Weights", "Leg Curl Machine", "Leg Press Machine", "Pull-up Station", "Dumbbells", "Shoulder Press Machine", "TRX Suspension Trainers", "Battle Ropes", "Plyo Boxes", "Stability Balls", "Medicine Balls", "BOSU Balls", "Balance Boards", "Kettlebells", "Recovery Tools", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Pilates Instructor", "Yoga Instructor"],
    amenities: ["Towel Service", "Fitness Consultations", "Protein Shakes", "Water Stations", "Fresh Fruit Bar", "Hair Dryers", "Audio/Visual Entertainment", "Workout Programs", "Group Fitness Classes", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "23a0750b-02e5-4499-b1c0-08c1d08ea409",
    vesselId: "rms-the--mariner",
    name: "Velari Fitness & Wellness",
    description: "Velari Fitness & Wellness combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Athens. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/small-ocean-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-357-547-3395",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Recumbent Bikes", "Elliptical Machines", "Treadmills", "Rowing Machines", "StairMaster", "Spin Bikes", "Free Weights", "Bench Press", "Cable Machines", "Lat Pulldown", "Smith Machine", "Leg Press Machine", "Shoulder Press Machine", "Weight Machines", "Power Rack", "Pull-up Station", "Dumbbells", "Barbells", "Kettlebells", "Medicine Balls", "Plyo Boxes", "Agility Ladders", "Foam Rollers", "Stability Balls", "Battle Ropes", "Recovery Tools"],
    personalTrainers: ["Strength Training Specialist", "Aqua Fitness Instructor"],
    amenities: ["Body Composition Analysis", "Hair Dryers", "Group Fitness Classes", "Toiletries", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Equipment Orientation", "Protein Shakes", "Personal Training Sessions", "Water Stations"],
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
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: false
  },
  {
    id: "21a3e163-3518-4a2b-9ce5-876d28695884",
    vesselId: "cs--gale",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Athens. Our facility features dedicated yoga studio.",
    imageUrl: "/images/fitness/ice-class-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "23:00",
      duration: "18 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-971-677-3755",
      contactEmail: "reception@fitness.velarivoyages.com",
    },
    equipment: ["VersaClimber", "Rowing Machines", "Stationary Bikes", "Spin Bikes", "StairMaster", "Arc Trainers", "Weight Machines", "Dumbbells", "Power Rack", "Barbells", "Pull-up Station", "Smith Machine", "Leg Curl Machine", "Lat Pulldown", "Shoulder Press Machine", "Bench Press", "Free Weights", "Leg Press Machine", "Kettlebells", "Balance Boards", "TRX Suspension Trainers", "Foam Rollers", "Medicine Balls", "Stretching Stations", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Fitness Nutrition Specialist", "Yoga Instructor"],
    amenities: ["Hair Dryers", "Body Composition Analysis", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Towel Service", "Water Stations", "Fitness Consultations", "Fitness Tracking", "Personal Training Sessions", "Toiletries"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  }
];
