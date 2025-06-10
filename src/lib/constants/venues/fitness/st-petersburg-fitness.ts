// Fitness center venues data for St Petersburg
// This file contains fitness center and wellness facility information for cruise vessels operating from St Petersburg
// Each fitness center is associated with a specific vessel and offers comprehensive wellness amenities

import { FitnessCenter } from "@/lib/interfaces/services/venues";

export const stPetersburgFitnessCenters: FitnessCenter[] = [
  {
    id: "5c401907-cef9-4539-8af5-410c540c0c4c",
    vesselId: "my--explorer",
    name: "St Petersburg Fitness Center",
    description: "Discover wellness at sea with St Petersburg Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, group fitness classes.",
    imageUrl: "/images/fitness/polar-expedition-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-804-125-9597",
      contactEmail: "services@fitness.velarivoyages.com",
    },
    equipment: ["Treadmills", "Recumbent Bikes", "Elliptical Machines", "Arc Trainers", "Stationary Bikes", "Rowing Machines", "VersaClimber", "StairMaster", "Spin Bikes", "Air Bikes", "Bench Press", "Free Weights", "Power Rack", "Shoulder Press Machine", "Dumbbells", "Barbells", "Weight Machines", "Lat Pulldown", "Cable Machines", "Leg Curl Machine", "Leg Press Machine", "Pull-up Station", "Foam Rollers", "Resistance Bands", "TRX Suspension Trainers", "Battle Ropes", "Medicine Balls", "Agility Ladders", "Balance Boards", "Pilates Reformers", "Compression Therapy"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist", "Corrective Exercise Specialist", "Pilates Instructor"],
    amenities: ["Workout Programs", "Hair Dryers", "Equipment Orientation", "Water Stations", "Body Composition Analysis", "Audio/Visual Entertainment", "Towel Service", "Protein Shakes", "Fitness Tracking", "Fresh Fruit Bar", "Fitness Consultations"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: false,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: false,
    hasFitnessAssessments: false,
    hasChildcareServices: true,
    faqs: [
      {
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
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
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
      },
      {
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  },
  {
    id: "b0257398-7390-4a97-82c0-9b532963fcd5",
    vesselId: "ss-st-petersburg-voyager",
    name: "Maritime Wellness Center",
    description: "Maritime Wellness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/ultra-luxury-cruise-ship-fitness-center.jpg",
    hours: {
      start: "00:00",
      end: "23:59",
      duration: "24 hours",
      description: "24-hour access available for all guests",
    },
    contact: {
      contactNumber: "+1-897-690-3096",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Air Bikes", "Recumbent Bikes", "VersaClimber", "Spin Bikes", "Arc Trainers", "StairMaster", "Rowing Machines", "Stationary Bikes", "Elliptical Machines", "Treadmills", "Smith Machine", "Pull-up Station", "Lat Pulldown", "Bench Press", "Free Weights", "Cable Machines", "Weight Machines", "Dumbbells", "Barbells", "Kettlebells", "Medicine Balls", "Battle Ropes", "TRX Suspension Trainers", "Yoga Mats", "Agility Ladders", "Stretching Stations", "Compression Therapy", "Recovery Tools", "Barre Equipment", "Infrared Sauna", "Cryotherapy Chamber"],
    personalTrainers: ["Group Fitness Instructor", "Strength Training Specialist", "Senior Fitness Specialist"],
    amenities: ["Equipment Orientation", "Workout Programs", "Group Fitness Classes", "Fitness Tracking", "Water Stations", "Audio/Visual Entertainment", "Protein Shakes", "Fresh Fruit Bar", "Fitness Consultations", "Personal Training Sessions", "Body Composition Analysis"],
    is24Hours: true,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: true,
    hasDanceStudio: false,
    hasGroupClasses: true,
    hasNutritionCounseling: true,
    hasHealthScreenings: false,
    hasFitnessAssessments: true,
    hasChildcareServices: true,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "What should I bring to work out?",
        answer: "We recommend bringing workout clothes, athletic shoes, and a water bottle. Towels are provided, and we have shower facilities available.",
      }
    ],
    isPopular: true
  },
  {
    id: "4131bebd-3928-4ec9-861b-aa5144dbeada",
    vesselId: "sy--of-the-deep",
    name: "Aqua Fitness Center",
    description: "Aqua Fitness Center combines cutting-edge fitness equipment with stunning ocean views. Enjoy a motivating workout environment while sailing the beautiful waters around St Petersburg. Our facility features pool area, dedicated yoga studio, sauna facilities, group fitness classes.",
    imageUrl: "/images/fitness/mainstream-cruise-ship-fitness-center.jpg",
    hours: {
      start: "06:00",
      end: "22:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-741-532-5259",
      contactEmail: "care@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Treadmills", "Arc Trainers", "StairMaster", "Recumbent Bikes", "Air Bikes", "Rowing Machines", "Stationary Bikes", "Spin Bikes", "Free Weights", "Dumbbells", "Barbells", "Pull-up Station", "Shoulder Press Machine", "Leg Press Machine", "Smith Machine", "Cable Machines", "Stability Balls", "Balance Boards", "TRX Suspension Trainers", "Battle Ropes", "Medicine Balls", "Plyo Boxes", "Massage Chairs", "Pilates Reformers"],
    personalTrainers: ["Certified Personal Trainer", "Strength Training Specialist", "Group Fitness Instructor", "Spinning Instructor"],
    amenities: ["Fitness Tracking", "Hair Dryers", "Towel Service", "Workout Programs", "Protein Shakes", "Fresh Fruit Bar", "Group Fitness Classes", "Locker Rentals", "Fitness Consultations", "Body Composition Analysis", "Toiletries", "Equipment Orientation"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: true,
    hasYogaStudio: true,
    hasCyclingStudio: false,
    hasPilatesStudio: true,
    hasDanceStudio: true,
    hasGroupClasses: true,
    hasNutritionCounseling: false,
    hasHealthScreenings: true,
    hasFitnessAssessments: false,
    hasChildcareServices: false,
    faqs: [
      {
        question: "Is there a fee to use the fitness center?",
        answer: "Access to the fitness center is complimentary for all guests. Some personal training sessions and specialized classes may have an additional charge.",
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
        question: "Is the fitness center suitable for beginners?",
        answer: "Absolutely! Our fitness center welcomes all fitness levels. Our staff can provide equipment orientation and beginner-friendly workout suggestions.",
      }
    ],
    isPopular: false
  },
  {
    id: "6a1638f5-3205-438f-9027-82d0826f79b6",
    vesselId: "ms-the--mariner",
    name: "St Petersburg Fitness Center",
    description: "Discover wellness at sea with St Petersburg Fitness Center. Our fully equipped fitness center provides everything you need to stay fit and energized during your cruise adventure. Our facility features dedicated yoga studio, sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/mid-size-cruise-ship-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "21:00",
      duration: "16 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-508-741-9750",
      contactEmail: "customerservice@fitness.velarivoyages.com",
    },
    equipment: ["Elliptical Machines", "Treadmills", "Recumbent Bikes", "Stationary Bikes", "StairMaster", "Spin Bikes", "Arc Trainers", "Rowing Machines", "VersaClimber", "Smith Machine", "Weight Machines", "Leg Press Machine", "Lat Pulldown", "Barbells", "Pull-up Station", "Cable Machines", "Shoulder Press Machine", "Bench Press", "Dumbbells", "Power Rack", "Leg Curl Machine", "Yoga Mats", "Plyo Boxes", "Kettlebells", "Medicine Balls", "Foam Rollers", "Stability Balls", "Infrared Sauna"],
    personalTrainers: ["Certified Personal Trainer", "Senior Fitness Specialist"],
    amenities: ["Towel Service", "Hair Dryers", "Protein Shakes", "Water Stations", "Personal Training Sessions", "Fresh Fruit Bar", "Fitness Tracking", "Audio/Visual Entertainment"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: true,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
    hasDanceStudio: true,
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
        question: "Are personal trainers available?",
        answer: "Yes, certified personal trainers are available for one-on-one sessions and small group training. Advance booking is recommended.",
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
    isPopular: true
  },
  {
    id: "dc0c2f8c-ca97-4746-baec-491dc2225560",
    vesselId: "ss--gale",
    name: "Oceanview Fitness Center",
    description: "Oceanview Fitness Center offers a comprehensive fitness experience with modern equipment and professional guidance. Whether you're maintaining your routine or starting a new fitness journey, we're here to support your wellness goals. Our facility features sauna facilities, group fitness classes, nutrition counseling.",
    imageUrl: "/images/fitness/catamaran-fitness-center.jpg",
    hours: {
      start: "05:00",
      end: "22:00",
      duration: "17 hours",
      description: "Fitness center hours may vary based on itinerary and port days",
    },
    contact: {
      contactNumber: "+1-848-764-3129",
      contactEmail: "hi@fitness.velarivoyages.com",
    },
    equipment: ["Spin Bikes", "Rowing Machines", "Recumbent Bikes", "Stationary Bikes", "Arc Trainers", "Air Bikes", "StairMaster", "VersaClimber", "Bench Press", "Smith Machine", "Shoulder Press Machine", "Leg Curl Machine", "Lat Pulldown", "Weight Machines", "Cable Machines", "Leg Press Machine", "Free Weights", "Dumbbells", "Barbells", "Plyo Boxes", "Agility Ladders", "Stability Balls", "Kettlebells", "TRX Suspension Trainers", "Medicine Balls", "Massage Chairs", "Recovery Tools"],
    personalTrainers: ["Senior Fitness Specialist", "Strength Training Specialist", "Certified Personal Trainer"],
    amenities: ["Towel Service", "Water Stations", "Fitness Tracking", "Toiletries", "Personal Training Sessions", "Group Fitness Classes", "Fitness Consultations", "Fresh Fruit Bar", "Protein Shakes", "Body Composition Analysis"],
    is24Hours: false,
    hasLockerRooms: true,
    hasSauna: true,
    hasSteamRoom: false,
    hasPool: false,
    hasYogaStudio: false,
    hasCyclingStudio: true,
    hasPilatesStudio: false,
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
        question: "What safety measures are in place?",
        answer: "Our fitness center follows strict safety protocols, with regular equipment maintenance and trained staff available to assist guests.",
      },
      {
        question: "Can I store my belongings while working out?",
        answer: "Yes, we have secure lockers available. We also recommend not bringing valuables to the fitness center.",
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
        question: "Do you offer group fitness classes?",
        answer: "We offer a variety of group fitness classes including yoga, pilates, and cardio sessions. Check the daily schedule for times and locations.",
      }
    ],
    isPopular: false
  }
];
