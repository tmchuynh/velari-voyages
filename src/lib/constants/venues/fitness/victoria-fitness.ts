// Fitness center venues data for Victoria
// This file contains fitness center and wellness facility information for cruise vessels operating from Victoria
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const victoriaFitnessCenters: FitnessCenter[] = [
  {
    id: "609949c0-c368-4379-b46b-4424c29cd824",
    vesselId: "fv--explorer",
    name: "FV  Explorer Fitness Center",
    description: "FV  Explorer Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Victoria. Our facility features dedicated yoga studio, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/superyacht-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-374-842-2970",
      contactEmail: "inquiries@fitness.velarivoyages.com",
    },
    equipment: ["Stationary Bikes", "Air Bikes", "Spin Bikes", "Rowing Machines", "StairMaster", "Elliptical Machines", "Treadmills", "Arc Trainers", "VersaClimber", "Power Rack", "Weight Machines", "Leg Curl Machine", "Cable Machines", "Barbells", "Dumbbells", "Bench Press", "Smith Machine", "Medicine Balls", "Plyo Boxes", "Yoga Mats", "Kettlebells", "BOSU Balls", "Stability Balls", "Battle Ropes", "Cryotherapy Chamber", "Barre Equipment", "Pilates Reformers"],
    personalTrainers: ["Fitness Nutrition Specialist", "Corrective Exercise Specialist", "Spinning Instructor", "Certified Personal Trainer"],
    amenities: ["Hair Dryers", "Personal Training Sessions", "Protein Shakes", "Fitness Tracking", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Equipment Orientation", "Locker Rentals", "Body Composition Analysis", "Fitness Consultations", "Toiletries"],
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
    hasChildcareServices: false,
    faqs: [
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
    id: "10fe879e-b972-4b1c-8cfd-f229ab63063b",
    vesselId: "mv-victoria-voyager",
    name: "Victoria Fitness Center",
    description: "Victoria Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Victoria. Our facility features pool area, group fitness classes.",
    imageUrl: "/images/fitness/mega-yacht-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-987-967-3653",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Recumbent Bikes", "Rowing Machines", "VersaClimber", "Arc Trainers", "Stationary Bikes", "Elliptical Machines", "Air Bikes", "Spin Bikes", "Leg Curl Machine", "Weight Machines", "Power Rack", "Lat Pulldown", "Bench Press", "Barbells", "Dumbbells", "Free Weights", "Pull-up Station", "Leg Press Machine", "Smith Machine", "Cable Machines", "Kettlebells", "Plyo Boxes", "Medicine Balls", "BOSU Balls", "Resistance Bands", "Battle Ropes", "Infrared Sauna"],
    personalTrainers: ["Strength Training Specialist", "Yoga Instructor", "Senior Fitness Specialist"],
    amenities: ["Workout Programs", "Fitness Tracking", "Towel Service", "Fitness Consultations", "Fresh Fruit Bar", "Audio/Visual Entertainment", "Toiletries", "Body Composition Analysis", "Protein Shakes", "Equipment Orientation"],
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
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "6adb9d93-8378-4ea5-b771-100d5e25f676",
    vesselId: "mv--of-the-deep",
    name: "Velari Fitness & Wellness",
    description: "Discover wellness at sea with Velari Fitness & Wellness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features pool area, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/adults-only-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "21:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-759-253-7221",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Arc Trainers", "Stationary Bikes", "Elliptical Machines", "VersaClimber", "Air Bikes", "Treadmills", "StairMaster", "Spin Bikes", "Cable Machines", "Leg Press Machine", "Free Weights", "Power Rack", "Bench Press", "Lat Pulldown", "Shoulder Press Machine", "Weight Machines", "Pull-up Station", "Dumbbells", "Leg Curl Machine", "Kettlebells", "Medicine Balls", "Battle Ropes", "TRX Suspension Trainers", "Yoga Mats", "Pilates Reformers", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Strength Training Specialist", "Yoga Instructor", "Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Water Stations", "Equipment Orientation", "Fitness Tracking", "Toiletries", "Body Composition Analysis", "Group Fitness Classes", "Workout Programs", "Personal Training Sessions", "Hair Dryers", "Fresh Fruit Bar", "Locker Rentals"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
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
    isPopular: true
  },
  {
    id: "2ca5a3a2-2188-4aa6-b143-95ca1419bda0",
    vesselId: "sv-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, nutrition counseling.",
    imageUrl: "/images/fitness/chartered-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-478-748-1058",
      contactEmail: "help@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Air Bikes", "StairMaster", "Arc Trainers", "Stationary Bikes", "VersaClimber", "Elliptical Machines", "Weight Machines", "Smith Machine", "Power Rack", "Pull-up Station", "Dumbbells", "Shoulder Press Machine", "Bench Press", "Free Weights", "Leg Press Machine", "Lat Pulldown", "Barbells", "Kettlebells", "Balance Boards", "Resistance Bands", "Yoga Mats", "Foam Rollers", "Plyo Boxes", "BOSU Balls", "Recovery Tools", "Barre Equipment"],
    personalTrainers: ["Certified Personal Trainer", "Pilates Instructor", "Spinning Instructor"],
    amenities: ["Equipment Orientation", "Toiletries", "Water Stations", "Locker Rentals", "Fresh Fruit Bar", "Personal Training Sessions", "Towel Service", "Audio/Visual Entertainment", "Workout Programs"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: false,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
    isPopular: false
  },
  {
    id: "fe6cc281-8c58-4e74-a4ed-7be3d0f3523a",
    vesselId: "fv--gale",
    name: "Horizon Health Club",
    description: "Horizon Health Club combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Victoria. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/short-hop-ferry-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-968-413-8622",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Air Bikes", "Spin Bikes", "VersaClimber", "Arc Trainers", "Recumbent Bikes", "StairMaster", "Weight Machines", "Free Weights", "Dumbbells", "Smith Machine", "Leg Curl Machine", "Barbells", "Cable Machines", "Lat Pulldown", "Kettlebells", "Yoga Mats", "Foam Rollers", "Medicine Balls", "Stability Balls", "Plyo Boxes", "Cryotherapy Chamber"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Yoga Instructor"],
    amenities: ["Fitness Tracking", "Locker Rentals", "Group Fitness Classes", "Towel Service", "Personal Training Sessions", "Water Stations", "Toiletries", "Body Composition Analysis", "Fitness Consultations", "Fresh Fruit Bar", "Hair Dryers"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: true
  }
];
