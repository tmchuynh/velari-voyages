// Spa venues data for Lima
// This file contains spa and wellness center information for cruise vessels operating from Lima
// Each spa is associated with a specific vessel and offers various wellness services

import { Spa } from "@/lib/interfaces/services/venues";

export const limaSpas: Spa[] = [
  {
    id: "6b8f8c43-3038-4024-9512-29109b27c37b",
    vesselId: "hms--explorer",
    name: "Andes Spa & Wellness",
    description: "Experience ultimate relaxation at Andes Spa & Wellness, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by South America healing traditions.",
    imageUrl: "/images/spas/mega-yacht-spa.jpg",
    hours: {
      start: "09:00",
      end: "22:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-842-139-5026",
      contactEmail: "hello@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 4,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.2,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 4.7,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.7,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.7,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 3.8,
      }
    ],
    isPopular: true,
    faqs: [
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      }
    ],
  },
  {
    id: "7aba554e-171e-47f9-ad41-eb84fbe585d8",
    vesselId: "hms--explorer",
    name: "HMS  Explorer Vista Spa",
    description: "Experience ultimate relaxation at HMS  Explorer Vista Spa, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by South America healing traditions.",
    imageUrl: "/images/spas/mega-yacht-spa.jpg",
    hours: {
      start: "09:00",
      end: "19:00",
      duration: "10 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-257-192-5103",
      contactEmail: "clientservices@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Andean Stone Treatments",
        description: "Specialized regional treatment featuring traditional south america techniques and ingredients",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.2,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: [],
        rating: 3.9,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.6,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      },
      {
        title: "Amazonian Plant Therapies",
        description: "Specialized regional treatment featuring traditional south america techniques and ingredients",
        tags: [],
        rating: 4,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.3,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 3.6,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      }
    ],
  },
  {
    id: "e877ad90-f2c4-4080-b101-bf56ceb4cb0e",
    vesselId: "ss-lima-voyager",
    name: "Tropical Wellness Retreat",
    description: "Experience ultimate relaxation at Tropical Wellness Retreat, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by South America healing traditions.",
    imageUrl: "/images/spas/chartered-vessel-spa.jpg",
    hours: {
      start: "08:00",
      end: "21:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-522-168-3204",
      contactEmail: "general@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.6,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.7,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.2,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 3.9,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 3.9,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 3.8,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.9,
      },
      {
        title: "Pedicure",
        description: "Relaxing foot treatment with nail care and massage",
        tags: [],
        rating: 3.7,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: [],
        rating: 4.4,
      }
    ],
    isPopular: true,
    faqs: [
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      },
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      }
    ],
  },
  {
    id: "657202f5-067f-4b5f-b62d-80f57261a1bb",
    vesselId: "hms--of-the-deep",
    name: "Vista Waters Spa",
    description: "Welcome to Vista Waters Spa, an oasis of tranquility aboard the HMS  of the Deep. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Lima.",
    imageUrl: "/images/spas/expedition-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "22:00",
      duration: "14 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-958-306-4878",
      contactEmail: "hi@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.8,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.7,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.7,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
        rating: 4.7,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.7,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.9,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 4.4,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.4,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.6,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.2,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      }
    ],
  },
  {
    id: "7a38e33c-c03d-4c19-a681-5cb50be688b4",
    vesselId: "hms--of-the-deep",
    name: "Amazonia Spa & Wellness",
    description: "Experience ultimate relaxation at Amazonia Spa & Wellness, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by South America healing traditions.",
    imageUrl: "/images/spas/expedition-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "20:00",
      duration: "11 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-224-760-4385",
      contactEmail: "reachus@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 4.6,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
        rating: 4.6,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 4.8,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.8,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.6,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.8,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.5,
      },
      {
        title: "Body Wrap",
        description: "Detoxifying and slimming full-body treatment",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 3.7,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 3.8,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 3.6,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.5,
      },
      {
        title: "Hydrating Facial",
        description: "Intensive moisture therapy for dry and dehydrated skin",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 4.5,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      }
    ],
  },
  {
    id: "2e15481e-6230-406f-9b22-3c5bb1fdbb56",
    vesselId: "hms-the--mariner",
    name: "Patagonia Wellness Retreat",
    description: "Patagonia Wellness Retreat provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/ocean-liner-spa.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-693-823-3301",
      contactEmail: "reception@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Hydrating Facial",
        description: "Intensive moisture therapy for dry and dehydrated skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.4,
      },
      {
        title: "Pedicure",
        description: "Relaxing foot treatment with nail care and massage",
        tags: [],
        rating: 4.4,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.1,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 4.2,
      }
    ],
    isPopular: true,
    faqs: [
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      }
    ],
  },
  {
    id: "49e933d6-2a6c-4dae-b7a3-96077278dbcf",
    vesselId: "hms-the--mariner",
    name: "The Andes Sanctuary",
    description: "Experience ultimate relaxation at The Andes Sanctuary, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by South America healing traditions.",
    imageUrl: "/images/spas/ocean-liner-spa.jpg",
    hours: {
      start: "09:00",
      end: "22:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-750-738-2269",
      contactEmail: "hello@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: [],
        rating: 4.7,
      },
      {
        title: "Amazonian Plant Therapies",
        description: "Specialized regional treatment featuring traditional south america techniques and ingredients",
        tags: [],
        rating: 4.7,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.3,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.8,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 3.6,
      }
    ],
    isPopular: true,
    faqs: [
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      }
    ],
  },
  {
    id: "82ae80d2-08cd-464e-b724-d6b0e2e559e6",
    vesselId: "hms--gale",
    name: "The Patagonia Sanctuary",
    description: "The Patagonia Sanctuary provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/luxury-cruise-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "19:00",
      duration: "11 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-508-961-2142",
      contactEmail: "reachus@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty", "luxury"],
        rating: 5,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic", "luxury"],
        rating: 3.7,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: ["luxury", "premium"],
        rating: 4.6,
      },
      {
        title: "Amazonian Plant Therapies",
        description: "Specialized regional treatment featuring traditional south america techniques and ingredients",
        tags: ["luxury", "premium"],
        rating: 4.4,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic", "luxury"],
        rating: 4.4,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: ["luxury", "premium"],
        rating: 4.9,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: ["luxury", "premium"],
        rating: 4,
      },
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic", "luxury"],
        rating: 4.3,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      }
    ],
  }
];
