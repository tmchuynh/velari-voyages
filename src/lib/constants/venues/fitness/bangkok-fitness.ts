// Fitness center venues data for Bangkok
// This file contains fitness center and wellness facility information for cruise vessels operating from Bangkok
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const bangkokFitnessCenters: FitnessCenter[] = [
  {
    id: "88b9ca44-236f-4a82-a806-b5f1fcaaa12f",
    vesselId: "cs--explorer",
    name: "Seascape Fitness",
    description: "Discover wellness at sea with Seascape Fitness. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, steam room, group fitness classes.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-507-206-9393",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Recumbent Bikes", "VersaClimber", "Treadmills", "Elliptical Machines", "Arc Trainers", "Air Bikes", "StairMaster", "Rowing Machines", "Power Rack", "Weight Machines", "Pull-up Station", "Shoulder Press Machine", "Smith Machine", "Dumbbells", "Free Weights", "Barbells", "Lat Pulldown", "Leg Press Machine", "Bench Press", "Cable Machines", "BOSU Balls", "Plyo Boxes", "TRX Suspension Trainers", "Medicine Balls", "Foam Rollers", "Kettlebells", "Stretching Stations", "Cryotherapy Chamber"],
    personalTrainers: ["Yoga Instructor", "Spinning Instructor", "Aqua Fitness Instructor"],
    amenities: ["Water Stations", "Workout Programs", "Toiletries", "Fitness Tracking", "Protein Shakes", "Fitness Consultations", "Audio/Visual Entertainment", "Fresh Fruit Bar", "Personal Training Sessions", "Towel Service", "Locker Rentals", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: true,
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
      }
    ],
    isPopular: false
  },
  {
    id: "ab197a1a-289c-42c3-a8cc-3ddcd044f547",
    vesselId: "ss-bangkok-voyager",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features dedicated yoga studio, sauna facilities, nutrition counseling.",
    imageUrl: "/images/fitness/river-cruise-ship-fitness-center.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-575-359-3878",
      contactEmail: "contact@fitness.velarivoyages.com",
    },
    equipment: ["Rowing Machines", "Recumbent Bikes", "Stationary Bikes", "StairMaster", "Air Bikes", "Elliptical Machines", "Spin Bikes", "VersaClimber", "Treadmills", "Arc Trainers", "Cable Machines", "Weight Machines", "Power Rack", "Smith Machine", "Lat Pulldown", "Barbells", "Shoulder Press Machine", "Bench Press", "Leg Curl Machine", "Agility Ladders", "Foam Rollers", "TRX Suspension Trainers", "Yoga Mats", "Kettlebells", "BOSU Balls", "Infrared Sauna", "Stretching Stations"],
    personalTrainers: ["Senior Fitness Specialist", "Fitness Nutrition Specialist"],
    amenities: ["Towel Service", "Fitness Tracking", "Water Stations", "Protein Shakes", "Group Fitness Classes", "Fitness Consultations", "Toiletries", "Audio/Visual Entertainment", "Hair Dryers", "Fresh Fruit Bar", "Equipment Orientation", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: false,
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      },
      {
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      }
    ],
    isPopular: false
  },
  {
    id: "b4304548-a2ae-4e6b-a419-7ad6a7e16a6f",
    vesselId: "nx--of-the-deep",
    name: "Seascape Fitness",
    description: "Welcome to Seascape Fitness, your premier wellness destination aboard the NX  of the Deep. Stay active and healthy while cruising the waters near Bangkok with our state-of-the-art fitness facilities. Our facility features dedicated yoga studio, steam room, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/family-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-477-850-1944",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Elliptical Machines", "Spin Bikes", "StairMaster", "Arc Trainers", "VersaClimber", "Air Bikes", "Recumbent Bikes", "Stationary Bikes", "Cable Machines", "Free Weights", "Bench Press", "Leg Press Machine", "Pull-up Station", "Smith Machine", "Shoulder Press Machine", "Leg Curl Machine", "Dumbbells", "Barbells", "Battle Ropes", "Medicine Balls", "TRX Suspension Trainers", "Foam Rollers", "Balance Boards", "Compression Therapy"],
    personalTrainers: ["Yoga Instructor", "Aqua Fitness Instructor", "Corrective Exercise Specialist"],
    amenities: ["Locker Rentals", "Water Stations", "Equipment Orientation", "Fitness Tracking", "Towel Service", "Audio/Visual Entertainment", "Fitness Consultations", "Group Fitness Classes"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
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
        question: "What are the fitness center operating hours?",
        answer: "Our fitness center is typically open from early morning to late evening. Hours may vary based on port days and itinerary.",
      },
      {
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "dac2639f-9418-489f-bc63-6de9cd6e7ef8",
    vesselId: "mv-the--mariner",
    name: "Oceanview Fitness Center",
    description: "Discover wellness at sea with Oceanview Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities.",
    imageUrl: "/images/fitness/zodiac-equipped-vessel-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-813-383-3307",
      contactEmail: "support@fitness.velarivoyages.com",
    },
    equipment: ["Recumbent Bikes", "Spin Bikes", "Arc Trainers", "Treadmills", "VersaClimber", "Elliptical Machines", "Stationary Bikes", "StairMaster", "Rowing Machines", "Barbells", "Dumbbells", "Weight Machines", "Lat Pulldown", "Cable Machines", "Shoulder Press Machine", "Smith Machine", "Leg Curl Machine", "Pull-up Station", "Bench Press", "Kettlebells", "Foam Rollers", "Medicine Balls", "Balance Boards", "Stability Balls", "BOSU Balls", "Battle Ropes", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Pilates Instructor", "Corrective Exercise Specialist"],
    amenities: ["Fitness Tracking", "Towel Service", "Water Stations", "Body Composition Analysis", "Personal Training Sessions", "Toiletries", "Audio/Visual Entertainment", "Workout Programs"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
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
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "c3c1ba8c-d368-42fb-b302-a6acf3b949a0",
    vesselId: "fv--gale",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around Bangkok. Our facility features pool area, dedicated yoga studio, steam room.",
    imageUrl: "/images/fitness/party-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-834-352-5547",
      contactEmail: "clientservices@fitness.velarivoyages.com",
    },
    equipment: ["StairMaster", "Treadmills", "Spin Bikes", "VersaClimber", "Air Bikes", "Arc Trainers", "Stationary Bikes", "Rowing Machines", "Shoulder Press Machine", "Cable Machines", "Power Rack", "Dumbbells", "Leg Press Machine", "Free Weights", "Smith Machine", "Pull-up Station", "Leg Curl Machine", "Kettlebells", "Resistance Bands", "TRX Suspension Trainers", "Foam Rollers", "Medicine Balls", "Yoga Mats", "Plyo Boxes", "Battle Ropes", "Massage Chairs"],
    personalTrainers: ["Pilates Instructor", "Spinning Instructor", "Corrective Exercise Specialist", "Yoga Instructor"],
    amenities: ["Personal Training Sessions", "Fresh Fruit Bar", "Hair Dryers", "Body Composition Analysis", "Fitness Consultations", "Equipment Orientation", "Locker Rentals", "Water Stations", "Fitness Tracking", "Toiletries"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: true,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: false,
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
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
      }
    ],
    isPopular: false
  }
];
