// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "7393c74a-f8e4-4f68-a2d2-1f06ebc0c42a",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Dance to your own beat with wireless headphone technology",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-695-913-8715",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e4bbca4c-5a5a-44b7-b1d5-49fc28fa840c",
      title: "Cocktails & Dancing",
      description: "Dance to your own beat with wireless headphone technology",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "15bfeff0-bed1-448e-9e32-69c6980acdf9",
                "name": "Gregory Douglas",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Event Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Adam Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-974",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jane Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-570",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jason Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-122",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Peter Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-709",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Sebastian Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-224",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      }
    ],
    isPopular: false
  },
  {
    id: "7393c74a-f8e4-4f68-a2d2-1f06ebc0c42a",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-407-308-7624",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "21a02067-0e93-449d-b301-b6f4163f48b1",
      title: "DJ Dance Party",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "399ab498-bf1a-4354-bca4-527cfecb5240",
                "name": "Sofia Spencer",
                "role": "DJ",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/29.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Gabriel Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-252",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Margaret Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Zachary Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-931",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Stephanie Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-165",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Christine Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-168",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Justin Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-370",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Brian Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-67",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Nicholas Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-82",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8fe56ff2-9d21-41c7-98d7-2be484e8fa90",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 17,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: false
  },
  {
    id: "7393c74a-f8e4-4f68-a2d2-1f06ebc0c42a",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-447-762-6457",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0af1d2b0-16cb-405d-80b4-9478ec46f023",
      title: "DJ Dance Party",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "5f656223-69b9-4ba5-8a7d-4af3699c29ff",
                "name": "Sebastian Olivia",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/46.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "MC",
                        "Dance Instructor",
                        "Lighting Technician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Aaliyah Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-525",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Joe Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-801",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Ethan Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-485",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Cynthia Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-90",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Amy Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-244",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Victor Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-508",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Deborah Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-13",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Adeline Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-219",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Elena Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-653",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Alice Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-32",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      }
    ],
    isPopular: false
  },
  {
    id: "7393c74a-f8e4-4f68-a2d2-1f06ebc0c42a",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-735-133-5441",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4a3b4538-6b6e-4c76-9031-c54dda5bf163",
      title: "DJ Dance Party",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "549f6cbe-01d7-4471-b74c-bf5f4345c36b",
                "name": "Maria Bennett",
                "role": "MC",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "DJ",
                        "MC",
                        "Event Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Betty Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-660",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Abigail Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-178",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Elena Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-145",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "James Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-446",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Isabella Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-618",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jason Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-422",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Nora Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-471",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Alexander Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-846",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Julie Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-705",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Joe Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-813",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      }
    ],
    isPopular: false
  },
  {
    id: "7393c74a-f8e4-4f68-a2d2-1f06ebc0c42a",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Electronic dance music with amazing light shows",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-631-549-2880",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "77462cfd-c494-4e3e-8be7-fea37eede184",
      title: "Live DJ Sets",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "31f1575d-6a77-4d39-a354-c947785965dd",
                "name": "Allison Coleman",
                "role": "Event Coordinator",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/57.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Dance Instructor",
                        "DJ",
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Walter Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-829",
        },
        {
          quote: "The Live DJ Sets party was incredible! Danced until the early morning hours.",
          author: "Jack Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-943",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jerry Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-725",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Kennedy Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-324",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Austin Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-1064",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "079fcc5b-0180-41e5-990c-f5c8842dc90c",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 24,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: false
  },
  {
    id: "7393c74a-f8e4-4f68-a2d2-1f06ebc0c42a",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Sophisticated evening of cocktails and social dancing",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-905-398-1745",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0292dd1a-eda7-4491-befc-e65953c63f68",
      title: "Cocktails & Dancing",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "0323d6ec-c5bf-4391-9bea-0a47b55fb931",
                "name": "Kenneth Spencer",
                "role": "Event Coordinator",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Event Coordinator",
                        "Lighting Technician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Patrick Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-217",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Angela Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-370",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Antonio Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-885",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Avery Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-209",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Scarlett Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-50",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Carlos Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-158",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Gerald Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-349",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Samuel Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-971",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f2eb40cb-7ea9-4b2c-ac2c-1cc5d73cc92f",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 14,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      }
    ],
    isPopular: true
  }
];
