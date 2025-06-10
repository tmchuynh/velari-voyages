// Spa venues data for Singapore
// This file contains spa and wellness center information for cruise vessels operating from Singapore
// Each spa is associated with a specific vessel and offers various wellness services

import { Spa } from "@/lib/interfaces/services/venues";

export const singaporeSpas: Spa[] = [
  {
    id: "71f9e1c5-8052-48ab-ab59-ab8336c2876b",
    vesselId: "ps--explorer",
    name: "Zen Waters Spa",
    description: "Welcome to Zen Waters Spa, an oasis of tranquility aboard the PS  Explorer. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Singapore.",
    imageUrl: "/images/spas/ocean-liner-spa.jpg",
    hours: {
      start: "08:00",
      end: "21:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-933-702-4751",
      contactEmail: "support@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 3.9,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 3.7,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.2,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.7,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.8,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 3.5,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.6,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.1,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.9,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      },
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
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
    id: "630c4fbe-70df-4fd9-91de-041dcdd62a93",
    vesselId: "rv-singapore-voyager",
    name: "Harmony Rejuvenation Center",
    description: "Welcome to Harmony Rejuvenation Center, an oasis of tranquility aboard the RV Singapore Voyager. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Singapore.",
    imageUrl: "/images/spas/ice-class-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "19:00",
      duration: "10 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-898-760-6541",
      contactEmail: "mail@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 4.2,
      },
      {
        title: "Traditional Asian Massage",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.8,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
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
        rating: 3.7,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.5,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.8,
      },
      {
        title: "Body Wrap",
        description: "Detoxifying and slimming full-body treatment",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.5,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.8,
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
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      }
    ],
  },
  {
    id: "242b9b07-e36b-4032-aae5-3ff00a7e09a9",
    vesselId: "rv-singapore-voyager",
    name: "RV Singapore Voyager Bamboo Spa",
    description: "RV Singapore Voyager Bamboo Spa provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/ice-class-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "22:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-582-966-6484",
      contactEmail: "care@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.3,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.4,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: [],
        rating: 4.5,
      },
      {
        title: "Hydrating Facial",
        description: "Intensive moisture therapy for dry and dehydrated skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.3,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.4,
      },
      {
        title: "Pedicure",
        description: "Relaxing foot treatment with nail care and massage",
        tags: [],
        rating: 4,
      },
      {
        title: "Green Tea Treatments",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 4.6,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: [],
        rating: 4.9,
      }
    ],
    isPopular: true,
    faqs: [
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      },
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      }
    ],
  },
  {
    id: "16102ff4-2176-49f5-be1c-dae0ba266de4",
    vesselId: "rv--of-the-deep",
    name: "Lotus Wellness Retreat",
    description: "Welcome to Lotus Wellness Retreat, an oasis of tranquility aboard the RV  of the Deep. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Singapore.",
    imageUrl: "/images/spas/zodiac-equipped-vessel-spa.jpg",
    hours: {
      start: "09:00",
      end: "20:00",
      duration: "11 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-964-472-6653",
      contactEmail: "ask@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.8,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: [],
        rating: 4.2,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 3.6,
      },
      {
        title: "Pedicure",
        description: "Relaxing foot treatment with nail care and massage",
        tags: [],
        rating: 4.8,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.2,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.7,
      },
      {
        title: "Green Tea Treatments",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 4.7,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 3.9,
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
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      }
    ],
  },
  {
    id: "c70b4816-924f-45d9-84d0-58d1c0d1adf9",
    vesselId: "rv--of-the-deep",
    name: "Zen Waters Spa",
    description: "Welcome to Zen Waters Spa, an oasis of tranquility aboard the RV  of the Deep. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Singapore.",
    imageUrl: "/images/spas/zodiac-equipped-vessel-spa.jpg",
    hours: {
      start: "09:00",
      end: "19:00",
      duration: "10 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-849-647-5660",
      contactEmail: "care@spa.velarivoyages.com",
    },
    services: [
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.9,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.7,
      },
      {
        title: "Traditional Asian Massage",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.7,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.3,
      },
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 3.6,
      },
      {
        title: "Pedicure",
        description: "Relaxing foot treatment with nail care and massage",
        tags: [],
        rating: 3.7,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.9,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 4.6,
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
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      }
    ],
  },
  {
    id: "070e7cad-ae9e-45e4-b856-54a2133c258d",
    vesselId: "rv-the--mariner",
    name: "Zen Spa & Wellness",
    description: "Experience ultimate relaxation at Zen Spa & Wellness, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Asia Pacific healing traditions.",
    imageUrl: "/images/spas/catamaran-spa.jpg",
    hours: {
      start: "07:00",
      end: "20:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-539-577-7314",
      contactEmail: "clientservices@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.6,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 3.6,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: [],
        rating: 4.4,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.8,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.5,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.6,
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
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      }
    ],
  },
  {
    id: "942cccf5-0b4d-4617-b6e0-cb29a96bb944",
    vesselId: "sv--gale",
    name: "Serenity Harmony Spa",
    description: "Welcome to Serenity Harmony Spa, an oasis of tranquility aboard the SV  Gale. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Singapore.",
    imageUrl: "/images/spas/polar-expedition-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "21:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-868-486-6469",
      contactEmail: "team@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.7,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 4.3,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 4.7,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 4.4,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
        rating: 3.6,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.8,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: ["recovery", "active-lifestyle"],
        rating: 4,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 3.6,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.5,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.1,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.7,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
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
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
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
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      }
    ],
  },
  {
    id: "1583e9e2-ede5-402e-b105-ea25d95fe132",
    vesselId: "sv--gale",
    name: "The Zen Sanctuary",
    description: "Welcome to The Zen Sanctuary, an oasis of tranquility aboard the SV  Gale. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Singapore.",
    imageUrl: "/images/spas/polar-expedition-ship-spa.jpg",
    hours: {
      start: "07:00",
      end: "19:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-827-416-7664",
      contactEmail: "reachus@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: ["recovery", "active-lifestyle"],
        rating: 5,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.7,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.1,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 4.6,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 3.5,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.4,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
        rating: 4.9,
      },
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
        rating: 4.3,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.6,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 3.8,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 4.7,
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
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      },
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      }
    ],
  }
];
