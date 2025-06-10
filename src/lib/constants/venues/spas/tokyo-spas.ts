// Spa venues data for Tokyo
// This file contains spa and wellness center information for cruise vessels operating from Tokyo
// Each spa is associated with a specific vessel and offers various wellness services

import { Spa } from "@/lib/interfaces/services/venues";

export const tokyoSpas: Spa[] = [
  {
    id: "b30b2b6c-02c1-4087-9e96-296d10637af6",
    vesselId: "hms--explorer",
    name: "The Serenity Sanctuary",
    description: "Welcome to The Serenity Sanctuary, an oasis of tranquility aboard the HMS  Explorer. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Tokyo.",
    imageUrl: "/images/spas/ice-class-ship-spa.jpg",
    hours: {
      start: "07:00",
      end: "19:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-245-494-5627",
      contactEmail: "help@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 4.5,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.3,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 3.9,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.5,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 3.8,
      },
      {
        title: "Jade Stone Therapy",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 3.7,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.8,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.4,
      },
      {
        title: "Traditional Asian Massage",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.7,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 4.8,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.8,
      }
    ],
    isPopular: false,
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
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      }
    ],
  },
  {
    id: "774f579e-3c38-4ab2-ab4c-5f51a4600a60",
    vesselId: "cs-tokyo-voyager",
    name: "Lotus Rejuvenation Center",
    description: "Lotus Rejuvenation Center provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/eco-friendly-hybrid-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "21:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-560-318-8440",
      contactEmail: "team@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Jade Stone Therapy",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 4.6,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.4,
      },
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.8,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 3.7,
      },
      {
        title: "Green Tea Treatments",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 4.4,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: [],
        rating: 4.1,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 3.9,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.5,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox"],
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
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
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
  },
  {
    id: "dbcf1e17-f515-4a8d-9145-876e8a33706b",
    vesselId: "ts--of-the-deep",
    name: "Harmony Wellness Retreat",
    description: "Harmony Wellness Retreat provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/short-hop-ferry-spa.jpg",
    hours: {
      start: "07:00",
      end: "20:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-796-554-5557",
      contactEmail: "communications@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Hydrating Facial",
        description: "Intensive moisture therapy for dry and dehydrated skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.6,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.9,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: [],
        rating: 4.6,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 5,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.8,
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
    id: "2d2a1af0-bfd1-4914-b0b3-26ae949c1c42",
    vesselId: "sy-the--mariner",
    name: "SY The  Mariner Bamboo Spa",
    description: "Discover your personal sanctuary at SY The  Mariner Bamboo Spa. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/adults-only-ship-spa.jpg",
    hours: {
      start: "07:00",
      end: "20:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-388-873-8444",
      contactEmail: "communications@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.4,
      },
      {
        title: "Green Tea Treatments",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: [],
        rating: 4.7,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
      },
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 3.6,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.6,
      },
      {
        title: "Gel Manicure",
        description: "Long-lasting gel polish application",
        tags: [],
        rating: 4.6,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
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
        rating: 3.6,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.4,
      }
    ],
    isPopular: true,
    faqs: [
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
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
    id: "45993b03-7836-48b9-8f87-9536fe0a72c3",
    vesselId: "sy-the--mariner",
    name: "Lotus Spa & Wellness",
    description: "Experience ultimate relaxation at Lotus Spa & Wellness, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Asia Pacific healing traditions.",
    imageUrl: "/images/spas/adults-only-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "22:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-855-703-2629",
      contactEmail: "customerservice@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.3,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.5,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.7,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 3.7,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: [],
        rating: 3.7,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.3,
      }
    ],
    isPopular: false,
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
    id: "81f3ef34-bbbf-4d67-9bd2-195533d0c0f1",
    vesselId: "hms--gale",
    name: "Serenity Waters Spa",
    description: "Serenity Waters Spa provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/family-cruise-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "22:00",
      duration: "14 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-638-377-1975",
      contactEmail: "reception@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.9,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic", "family-friendly"],
        rating: 4.5,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: ["family-friendly"],
        rating: 4.7,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic", "family-friendly"],
        rating: 4.8,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox", "family-friendly"],
        rating: 4.5,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: ["family-friendly"],
        rating: 4,
      },
      {
        title: "Traditional Asian Massage",
        description: "Specialized regional treatment featuring traditional asia pacific techniques and ingredients",
        tags: ["massage", "relaxation", "therapeutic", "family-friendly"],
        rating: 4.8,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: ["family-friendly"],
        rating: 3.9,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: ["family-friendly"],
        rating: 4.5,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic", "family-friendly"],
        rating: 4.2,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
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
  }
];
