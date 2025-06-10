// Spa venues data for Shanghai
// This file contains spa and wellness center information for cruise vessels operating from Shanghai
// Each spa is associated with a specific vessel and offers various wellness services

import { Spa } from "@/lib/interfaces/services/venues";

export const shanghaiSpas: Spa[] = [
  {
    id: "396321b8-9a87-4a78-9db9-c38e2a44acc6",
    vesselId: "cs--explorer",
    name: "The Zen Sanctuary",
    description: "The Zen Sanctuary provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/chartered-vessel-spa.jpg",
    hours: {
      start: "08:00",
      end: "20:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-590-396-9059",
      contactEmail: "care@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.8,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 3.9,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: [],
        rating: 4.5,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.9,
      },
      {
        title: "Traditional Asian Massage",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.5,
      },
      {
        title: "Gel Manicure",
        description: "Long-lasting gel polish application",
        tags: [],
        rating: 4.4,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.8,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.4,
      }
    ],
    isPopular: true,
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
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      }
    ],
  },
  {
    id: "a7014221-1ab8-422e-aaa9-4909b758f09c",
    vesselId: "nx-shanghai-voyager",
    name: "Lotus Wellness Retreat",
    description: "Welcome to Lotus Wellness Retreat, an oasis of tranquility aboard the NX Shanghai Voyager. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Shanghai.",
    imageUrl: "/images/spas/ice-class-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "20:00",
      duration: "11 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-643-180-7669",
      contactEmail: "info@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Body Wrap",
        description: "Detoxifying and slimming full-body treatment",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.9,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.9,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 4.8,
      },
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.1,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.6,
      },
      {
        title: "Jade Stone Therapy",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 4.8,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 3.6,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.9,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: [],
        rating: 4.2,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
      },
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      }
    ],
  },
  {
    id: "348b78fe-b0ef-495c-a15a-c47a9c31906c",
    vesselId: "ms--of-the-deep",
    name: "Bamboo Spa & Wellness",
    description: "Discover your personal sanctuary at Bamboo Spa & Wellness. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/catamaran-spa.jpg",
    hours: {
      start: "08:00",
      end: "20:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-380-994-3038",
      contactEmail: "clientservices@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.5,
      },
      {
        title: "Body Wrap",
        description: "Detoxifying and slimming full-body treatment",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.1,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: [],
        rating: 3.6,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.1,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: [],
        rating: 4,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.2,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.8,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      }
    ],
    isPopular: true,
    faqs: [
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
      }
    ],
  },
  {
    id: "6aaccecc-01e5-4dc3-a68c-9887f25339d8",
    vesselId: "ms--of-the-deep",
    name: "Serenity Spa & Wellness",
    description: "Experience ultimate relaxation at Serenity Spa & Wellness, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Asia Pacific healing traditions.",
    imageUrl: "/images/spas/catamaran-spa.jpg",
    hours: {
      start: "07:00",
      end: "20:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-606-966-8857",
      contactEmail: "hello@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.2,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Jade Stone Therapy",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.8,
      },
      {
        title: "Traditional Asian Massage",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4,
      }
    ],
    isPopular: true,
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
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      }
    ],
  },
  {
    id: "bee2caa5-e9cb-4921-9dcb-e2d90f30dffe",
    vesselId: "mv-the--mariner",
    name: "Bamboo Wellness Retreat",
    description: "Welcome to Bamboo Wellness Retreat, an oasis of tranquility aboard the MV The  Mariner. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Shanghai.",
    imageUrl: "/images/spas/family-cruise-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "21:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-406-483-4674",
      contactEmail: "mail@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox", "family-friendly"],
        rating: 4.2,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty", "family-friendly"],
        rating: 4.2,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic", "family-friendly"],
        rating: 5,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty", "family-friendly"],
        rating: 4.9,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic", "family-friendly"],
        rating: 4.3,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: ["family-friendly"],
        rating: 3.5,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty", "family-friendly"],
        rating: 4.1,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty", "family-friendly"],
        rating: 4,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: ["family-friendly"],
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
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      }
    ],
  },
  {
    id: "dbe6349f-784b-4865-a40e-8cee47d8aac8",
    vesselId: "nb--gale",
    name: "The Lotus Sanctuary",
    description: "Discover your personal sanctuary at The Lotus Sanctuary. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/family-cruise-ship-spa.jpg",
    hours: {
      start: "07:00",
      end: "21:00",
      duration: "14 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-905-686-3968",
      contactEmail: "reception@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty", "family-friendly"],
        rating: 3.9,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic", "family-friendly"],
        rating: 4.7,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: ["family-friendly"],
        rating: 3.8,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: ["family-friendly"],
        rating: 3.6,
      },
      {
        title: "Jade Stone Therapy",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: ["family-friendly"],
        rating: 4.1,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox", "family-friendly"],
        rating: 4.6,
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
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      }
    ],
  }
];
