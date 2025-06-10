// Spa venues data for Seattle
// This file contains spa and wellness center information for cruise vessels operating from Seattle
// Each spa is associated with a specific vessel and offers various wellness services

import { Spa } from "@/lib/interfaces/services/venues";

export const seattleSpas: Spa[] = [
  {
    id: "57e793e9-40e4-48ca-af44-a49418e0e142",
    vesselId: "cs--explorer",
    name: "Summit Rejuvenation Center",
    description: "Welcome to Summit Rejuvenation Center, an oasis of tranquility aboard the CS  Explorer. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Seattle.",
    imageUrl: "/images/spas/mega-yacht-spa.jpg",
    hours: {
      start: "09:00",
      end: "22:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-754-390-6088",
      contactEmail: "welcome@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.6,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: [],
        rating: 3.9,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4,
      },
      {
        title: "Seasonal Wellness Programs",
        description: "Specialized regional treatment featuring traditional north america techniques and ingredients",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4,
      },
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.9,
      },
      {
        title: "Cellulite Treatment",
        description: "Specialized treatment targeting skin texture and firmness",
        tags: [],
        rating: 3.8,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.6,
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
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
      }
    ],
  },
  {
    id: "e4da1a1e-295f-4e03-9e9a-a7d2e5356e41",
    vesselId: "cs--explorer",
    name: "Harbor Rejuvenation Center",
    description: "Experience ultimate relaxation at Harbor Rejuvenation Center, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by North America healing traditions.",
    imageUrl: "/images/spas/mega-yacht-spa.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-488-789-4587",
      contactEmail: "info@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 3.6,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 3.9,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: [],
        rating: 4.1,
      },
      {
        title: "Seasonal Wellness Programs",
        description: "Specialized regional treatment featuring traditional north america techniques and ingredients",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.6,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 4.7,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.3,
      }
    ],
    isPopular: true,
    faqs: [
      {
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      },
      {
        question: "What should I wear to my spa appointment?",
        answer: "We provide comfortable robes, slippers, and disposable undergarments. You're welcome to undress to your comfort level - our therapists are trained to ensure your privacy and comfort throughout your treatment.",
      }
    ],
  },
  {
    id: "54201998-01b6-45e1-8deb-2dc673bc757c",
    vesselId: "ss-seattle-voyager",
    name: "Serenity Urban Spa",
    description: "Discover your personal sanctuary at Serenity Urban Spa. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/party-cruise-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "22:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-288-776-1051",
      contactEmail: "mail@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Reiki Healing",
        description: "Energy healing treatment for balance and relaxation",
        tags: [],
        rating: 4.7,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.8,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.4,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: [],
        rating: 3.5,
      },
      {
        title: "Gel Manicure",
        description: "Long-lasting gel polish application",
        tags: [],
        rating: 4.2,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.7,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.6,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: [],
        rating: 4.5,
      }
    ],
    isPopular: false,
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
      }
    ],
  },
  {
    id: "f05d23ed-5f37-4494-bb28-f5f9b37afc49",
    vesselId: "ss-seattle-voyager",
    name: "SS Seattle Voyager Coastal Spa",
    description: "Welcome to SS Seattle Voyager Coastal Spa, an oasis of tranquility aboard the SS Seattle Voyager. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Seattle.",
    imageUrl: "/images/spas/party-cruise-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "19:00",
      duration: "11 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-970-521-6893",
      contactEmail: "clientservices@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.7,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Body Wrap",
        description: "Detoxifying and slimming full-body treatment",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.3,
      },
      {
        title: "Seasonal Wellness Programs",
        description: "Specialized regional treatment featuring traditional north america techniques and ingredients",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.2,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.8,
      },
      {
        title: "Gel Manicure",
        description: "Long-lasting gel polish application",
        tags: [],
        rating: 3.8,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.8,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.4,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 3.8,
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
      }
    ],
  },
  {
    id: "cabf3b9c-9f74-4623-810e-a48f8d7ef76c",
    vesselId: "my--of-the-deep",
    name: "Urban Rejuvenation Center",
    description: "Discover your personal sanctuary at Urban Rejuvenation Center. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/ocean-liner-spa.jpg",
    hours: {
      start: "09:00",
      end: "21:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-313-455-3349",
      contactEmail: "admin@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Gel Manicure",
        description: "Long-lasting gel polish application",
        tags: [],
        rating: 4.2,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.5,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.7,
      },
      {
        title: "Body Wrap",
        description: "Detoxifying and slimming full-body treatment",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.7,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.7,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 3.6,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: [],
        rating: 4.4,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.2,
      },
      {
        title: "Hydrating Facial",
        description: "Intensive moisture therapy for dry and dehydrated skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.9,
      },
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 3.5,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: [],
        rating: 3.7,
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
    id: "669c679d-d0a0-4cb1-87c4-5cc9ff505579",
    vesselId: "my--of-the-deep",
    name: "Skyline Spa & Wellness",
    description: "Discover your personal sanctuary at Skyline Spa & Wellness. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/ocean-liner-spa.jpg",
    hours: {
      start: "08:00",
      end: "20:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-294-504-6209",
      contactEmail: "team@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.1,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: [],
        rating: 4.8,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 4.5,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
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
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
      }
    ],
  },
  {
    id: "57ecd105-e0b5-4250-b0be-11995a4ab304",
    vesselId: "my-the--mariner",
    name: "MY The  Mariner Coastal Spa",
    description: "Discover your personal sanctuary at MY The  Mariner Coastal Spa. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/zodiac-equipped-vessel-spa.jpg",
    hours: {
      start: "07:00",
      end: "20:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-834-676-2246",
      contactEmail: "feedback@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.1,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.6,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 4.4,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.7,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Native Botanical Treatments",
        description: "Specialized regional treatment featuring traditional north america techniques and ingredients",
        tags: [],
        rating: 4.4,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
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
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
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
    id: "14bee02a-d8bc-45aa-ae7e-63d056f1083d",
    vesselId: "ly--gale",
    name: "Serenity Coastal Spa",
    description: "Welcome to Serenity Coastal Spa, an oasis of tranquility aboard the LY  Gale. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near Seattle.",
    imageUrl: "/images/spas/expedition-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "22:00",
      duration: "14 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-571-197-5920",
      contactEmail: "feedback@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
        rating: 4.2,
      },
      {
        title: "Salt Scrub",
        description: "Exfoliating treatment using mineral-rich sea salts",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 3.7,
      },
      {
        title: "Native Botanical Treatments",
        description: "Specialized regional treatment featuring traditional north america techniques and ingredients",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.6,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 4,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.2,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.5,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.6,
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
  }
];
