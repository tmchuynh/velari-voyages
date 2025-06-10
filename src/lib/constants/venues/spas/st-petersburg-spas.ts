// Spa venues data for St Petersburg
// This file contains spa and wellness center information for cruise vessels operating from St Petersburg
// Each spa is associated with a specific vessel and offers various wellness services

import { Spa } from "@/lib/interfaces/services/venues";

export const stPetersburgSpas: Spa[] = [
  {
    id: "e7adf182-878f-4252-8ce3-ea469a4a94ed",
    vesselId: "my--explorer",
    name: "Peaceful Rejuvenation Center",
    description: "Discover your personal sanctuary at Peaceful Rejuvenation Center. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/polar-expedition-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "20:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-744-630-1364",
      contactEmail: "welcome@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.6,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 4.2,
      },
      {
        title: "Gel Manicure",
        description: "Long-lasting gel polish application",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.9,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.3,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 4.4,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.4,
      }
    ],
    isPopular: false,
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
      }
    ],
  },
  {
    id: "d0be8825-84f6-434e-90c3-d730c808a50c",
    vesselId: "my--explorer",
    name: "Blissful Spa & Wellness",
    description: "Discover your personal sanctuary at Blissful Spa & Wellness. Our peaceful spa environment features state-of-the-art facilities and offers an extensive range of therapeutic treatments, perfect for unwinding during your maritime journey.",
    imageUrl: "/images/spas/polar-expedition-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "20:00",
      duration: "11 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-720-395-1769",
      contactEmail: "services@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty", "recovery"],
        rating: 4.9,
      },
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic", "recovery"],
        rating: 3.8,
      },
      {
        title: "Gel Manicure",
        description: "Long-lasting gel polish application",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.8,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.4,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.7,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: ["recovery", "active-lifestyle"],
        rating: 4.9,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic", "recovery"],
        rating: 3.6,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.6,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: ["recovery", "active-lifestyle"],
        rating: 3.7,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox", "recovery"],
        rating: 3.7,
      },
      {
        title: "Pedicure",
        description: "Relaxing foot treatment with nail care and massage",
        tags: ["recovery", "active-lifestyle"],
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
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15-30 minutes early to check in, change into your robe, and relax in our tranquil waiting area before your treatment begins.",
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
    id: "b75d36ee-814c-411b-bbf7-dcea91a77455",
    vesselId: "ss-st-petersburg-voyager",
    name: "Peaceful Waters Spa",
    description: "Peaceful Waters Spa provides a haven of serenity where guests can escape and rejuvenate. Our skilled wellness professionals offer customized treatments in a luxurious setting, ensuring every guest leaves feeling refreshed and renewed.",
    imageUrl: "/images/spas/ultra-luxury-cruise-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "21:00",
      duration: "13 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-256-361-6036",
      contactEmail: "welcome@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox", "luxury"],
        rating: 4.8,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic", "luxury"],
        rating: 4.6,
      },
      {
        title: "Eyelash Extensions",
        description: "Individual lash extensions for fuller, longer lashes",
        tags: ["luxury", "premium"],
        rating: 3.9,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic", "luxury"],
        rating: 3.6,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: ["luxury", "premium"],
        rating: 4.9,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: ["luxury", "premium"],
        rating: 4.4,
      },
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty", "luxury"],
        rating: 3.7,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: ["luxury", "premium"],
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
        question: "Do you offer treatments for men?",
        answer: "Absolutely! We offer specialized treatments for men including sports massage, men's facials, and grooming services. All our therapists are experienced in treating male clients.",
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
    id: "b6af1b6e-adf6-47e6-96f8-f6c25d56c49d",
    vesselId: "sy--of-the-deep",
    name: "Serenity Serene Spa",
    description: "Experience ultimate relaxation at Serenity Serene Spa, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Default healing traditions.",
    imageUrl: "/images/spas/mainstream-cruise-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "20:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-356-673-6227",
      contactEmail: "mail@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.6,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.2,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 3.6,
      },
      {
        title: "Sunless Tanning",
        description: "Professional spray tan application for a golden glow",
        tags: [],
        rating: 5,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 3.9,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.4,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 5,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 4.3,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.5,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations to avoid charges. Same-day cancellations and no-shows will be charged the full treatment fee.",
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
    id: "22f5cf78-d308-480b-b7c1-2aa40ccb37a8",
    vesselId: "sy--of-the-deep",
    name: "Tranquil Wellness Retreat",
    description: "Welcome to Tranquil Wellness Retreat, an oasis of tranquility aboard the SY  of the Deep. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near St Petersburg.",
    imageUrl: "/images/spas/mainstream-cruise-ship-spa.jpg",
    hours: {
      start: "07:00",
      end: "19:00",
      duration: "12 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-817-528-1038",
      contactEmail: "clientservices@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Wellness Consultation",
        description: "Personalized health and wellness guidance",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.4,
      },
      {
        title: "Manicure",
        description: "Complete nail care including shaping, cuticle care, and polish",
        tags: [],
        rating: 5,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.1,
      },
      {
        title: "Aromatherapy Massage",
        description: "Soothing massage with essential oils tailored to your mood",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Couples Massage",
        description: "Romantic side-by-side massage experience for two",
        tags: ["massage", "relaxation", "therapeutic", "couples"],
        rating: 3.8,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: [],
        rating: 4.2,
      }
    ],
    isPopular: true,
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
      }
    ],
  },
  {
    id: "8c092aeb-94fc-4eb3-86ec-144588eaf80a",
    vesselId: "ms-the--mariner",
    name: "Serenity Peaceful Spa",
    description: "Experience ultimate relaxation at Serenity Peaceful Spa, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Default healing traditions.",
    imageUrl: "/images/spas/mid-size-cruise-ship-spa.jpg",
    hours: {
      start: "09:00",
      end: "20:00",
      duration: "11 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-845-152-6173",
      contactEmail: "communications@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Purifying Facial",
        description: "Deep pore cleansing treatment for oily and acne-prone skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.1,
      },
      {
        title: "Gentleman's Facial",
        description: "Tailored facial treatment designed specifically for men",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.7,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 3.8,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
      },
      {
        title: "Anti-Aging Facial",
        description: "Advanced treatment targeting fine lines and wrinkles",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.1,
      },
      {
        title: "Hot Stone Massage",
        description: "Luxurious massage using heated volcanic stones for deep relaxation",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.7,
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
    id: "b470903b-7177-4b1d-8954-47c094e40e00",
    vesselId: "ms-the--mariner",
    name: "Serenity Blissful Spa",
    description: "Welcome to Serenity Blissful Spa, an oasis of tranquility aboard the MS The  Mariner. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near St Petersburg.",
    imageUrl: "/images/spas/mid-size-cruise-ship-spa.jpg",
    hours: {
      start: "08:00",
      end: "19:00",
      duration: "11 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-794-534-5291",
      contactEmail: "info@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Shiatsu Massage",
        description: "Japanese finger pressure massage for energy balance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Classic European Facial",
        description: "Deep cleansing and hydrating facial for all skin types",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.8,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.6,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.3,
      },
      {
        title: "Acupuncture",
        description: "Traditional Chinese medicine using fine needles for healing",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Hair Styling",
        description: "Professional hair cut, color, and styling services",
        tags: [],
        rating: 4.4,
      }
    ],
    isPopular: false,
    faqs: [
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes, we use premium, hypoallergenic products and can customize treatments for sensitive skin. Please inform us of any allergies or skin concerns when booking.",
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
    id: "6a27dcac-fb68-49f6-910c-96271891a79b",
    vesselId: "ss--gale",
    name: "Peaceful Waters Spa",
    description: "Experience ultimate relaxation at Peaceful Waters Spa, where traditional wellness meets modern luxury. Our expert therapists provide personalized treatments using premium products and techniques inspired by Default healing traditions.",
    imageUrl: "/images/spas/catamaran-spa.jpg",
    hours: {
      start: "07:00",
      end: "22:00",
      duration: "15 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-753-535-1068",
      contactEmail: "inquiries@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension and knots",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4,
      },
      {
        title: "Body Wrap",
        description: "Detoxifying and slimming full-body treatment",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 3.9,
      },
      {
        title: "Sugar Scrub",
        description: "Gentle exfoliation with natural sugar crystals",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.8,
      },
      {
        title: "Microdermabrasion",
        description: "Exfoliating treatment for smoother, brighter skin",
        tags: [],
        rating: 4.9,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.9,
      },
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.6,
      },
      {
        title: "Sports Massage",
        description: "Specialized massage for athletic recovery and performance",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.6,
      },
      {
        title: "Prenatal Massage",
        description: "Gentle, specialized massage for expecting mothers",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.7,
      },
      {
        title: "Meditation Session",
        description: "Guided meditation for stress relief and mindfulness",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.4,
      },
      {
        title: "Thai Massage",
        description: "Traditional stretching and pressure point massage",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 4.3,
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
      },
      {
        question: "Can I book treatments for multiple people?",
        answer: "Absolutely! We offer couples treatments and can coordinate group bookings. Contact us in advance to ensure availability for your preferred times.",
      }
    ],
  },
  {
    id: "4af59f5e-9c6b-4ff4-bb73-5a9825e8d23c",
    vesselId: "ss--gale",
    name: "Serenity Tranquil Spa",
    description: "Welcome to Serenity Tranquil Spa, an oasis of tranquility aboard the SS  Gale. Our world-class spa offers a comprehensive menu of rejuvenating treatments designed to restore your mind, body, and spirit while sailing the beautiful waters near St Petersburg.",
    imageUrl: "/images/spas/catamaran-spa.jpg",
    hours: {
      start: "08:00",
      end: "22:00",
      duration: "14 hours",
      description: "Daily spa hours may vary during port days and sea days",
    },
    contact: {
      contactNumber: "+1-434-353-2007",
      contactEmail: "welcome@spa.velarivoyages.com",
    },
    services: [
      {
        title: "Mud Wrap",
        description: "Purifying treatment using therapeutic mineral mud",
        tags: ["body-treatment", "exfoliation", "detox"],
        rating: 4.8,
      },
      {
        title: "Yoga Class",
        description: "Gentle yoga practice suitable for all levels",
        tags: ["wellness", "mindfulness", "holistic"],
        rating: 4.8,
      },
      {
        title: "Eyebrow Shaping",
        description: "Professional eyebrow grooming and shaping",
        tags: [],
        rating: 4.6,
      },
      {
        title: "LED Light Therapy",
        description: "Non-invasive light treatment for various skin concerns",
        tags: [],
        rating: 4.4,
      },
      {
        title: "Swedish Massage",
        description: "Classic full-body relaxation massage with gentle, flowing strokes",
        tags: ["massage", "relaxation", "therapeutic"],
        rating: 3.5,
      },
      {
        title: "Oxygen Infusion Facial",
        description: "Rejuvenating treatment that infuses pure oxygen into the skin",
        tags: ["facial", "skincare", "beauty"],
        rating: 4.7,
      },
      {
        title: "Reflexology",
        description: "Therapeutic foot massage focusing on pressure points",
        tags: [],
        rating: 4.7,
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
      }
    ],
  }
];
