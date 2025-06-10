// Spa venues data for Auckland
// This file contains spa and wellness center information for cruise vessels operating from Auckland
// Each spa is associated with a specific vessel and offers various wellness services

import { Spa } from "@/lib/interfaces/services/venues";

export const aucklandSpas: Spa[] = [
  {
    id: "9a77208b-3590-4cfc-8540-87a0d4e4c56c",
    vesselId: "sy--explorer",
    name: "The Serenity Sanctuary",
    description: "Welcome to The Serenity Sanctuary, an oasis of tranquility aboard the SY  Explorer. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Auckland.",
    imageUrl: "/images/spas/catamaran-spa.jpg",
    hours: {
      start: "07:00",
      end: "20:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-946-661-5183",
      contactEmail: "help@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.7,
      },
      {
        title: "Hydrating Facial",
        description: "Intensive moisture therapy for dry and dehydrated skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.4,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: [],
        rating: 3.8,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.5,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.9,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 4.6,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 5,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 4.2,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      }
    ],
  },
  {
    id: "d5ad36bf-f81b-4879-befb-a2bf7b8e34a3",
    vesselId: "ss-auckland-voyager",
    name: "SS Auckland Voyager Bamboo Spa",
    description: "Discover your personal sanctuary at SS Auckland Voyager Bamboo Spa. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/superyacht-spa.jpg",
    hours: {
      start: "07:00",
      end: "19:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-716-480-2793",
      contactEmail: "connect@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 3.6,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.6,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 4.1,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.1,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 4,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 4.8,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.6,
      }
    ],
    isPopular: true,
    faqs: [
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      },
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      }
    ],
  },
  {
    id: "ed9e9a96-e5bc-48ab-9fba-ee4dabc9a0dc",
    vesselId: "ps--of-the-deep",
    name: "Serenity Spa & Wellness",
    description: "Experience ultimate relaxation at Serenity Spa & Wellness, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Asia Pacific healing traditions.",
    imageUrl: "/images/spas/resort-style-ship-spa.jpg",
    hours: {
      start: "07:00",
      end: "19:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-352-418-8407",
      contactEmail: "ask@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.8,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 5,
      },
      {
        title: "Jade Stone Therapy",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 4.6,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 3.6,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Body Wrap",
        description: "Detoxifying and slimming full-body treatment",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.8,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.4,
      }
    ],
    isPopular: true,
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
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      }
    ],
  },
  {
    id: "06d67f5e-466e-4ce2-8f1e-7e60c7cdc80a",
    vesselId: "ss-the--mariner",
    name: "Serenity Serenity Spa",
    description: "Experience ultimate relaxation at Serenity Serenity Spa, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Asia Pacific healing traditions.",
    imageUrl: "/images/spas/boutique-cruise-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "20:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-984-138-5278",
      contactEmail: "team@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 3.6,
      },
      {
        title: "Hydrating Facial",
        description: "Intensive moisture therapy for dry and dehydrated skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.8,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Pedicure",
        description: "Relaxing foot treatment with nail care and massage",
        tags: [],
        rating: 4.6,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 5,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      }
    ],
  },
  {
    id: "eddc8993-0059-4303-9275-c3a3f9e325a7",
    vesselId: "ss-the--mariner",
    name: "The Bamboo Sanctuary",
    description: "The Bamboo Sanctuary provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/boutique-cruise-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "22:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-375-558-6953",
      contactEmail: "hello@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.5,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 3.6,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 5,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.6,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.5,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: [],
        rating: 4.7,
      },
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.7,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 3.9,
      },
      {
        title: "Hydrating Facial",
        description: "Intensive moisture therapy for dry and dehydrated skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.7,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      }
    ],
  },
  {
    id: "3bad8e9d-a016-4589-860f-3488ac51a620",
    vesselId: "ss--gale",
    name: "Harmony Rejuvenation Center",
    description: "Discover your personal sanctuary at Harmony Rejuvenation Center. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/expedition-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "19:00",
      duration: "10 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-477-513-8381",
      contactEmail: "connect@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.7,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 4.6,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 4.5,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 4.8,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.7,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      },
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      }
    ],
  },
  {
    id: "c7e9decb-c61e-43b3-b685-fb05c4513ac0",
    vesselId: "ss--gale",
    name: "Serenity Zen Spa",
    description: "Experience ultimate relaxation at Serenity Zen Spa, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Asia Pacific healing traditions.",
    imageUrl: "/images/spas/expedition-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "21:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-380-652-6407",
      contactEmail: "feedback@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 3.8,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 3.6,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.7,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.8,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
        rating: 4.6,
      },
      {
        title: "Pedicure",
        description: "Relaxing foot treatment with nail care and massage",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.4,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 4.9,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      }
    ],
  }
];
