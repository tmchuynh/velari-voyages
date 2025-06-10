// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "28e38583-70d6-406e-9552-a952784e38eb",
    category: "Nightclub",
    name: "Glow Party",
    description: "High-energy dance party with professional DJs",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-671-298-4730",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0e26e98f-e1a2-43ad-8843-f6d88a630ea6",
      title: "Glow Party",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: false,
        price: 17,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "b3e6d7ce-047a-4e8b-975d-515d5ffa1951",
                "name": "Scarlett Maxwell",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Timothy Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-974",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Joel Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-476",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Aaliyah Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-99",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Christopher Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-847",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Louis Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-634",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Victor Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-168",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1cc408cf-49af-4383-89d0-5fea6308a424",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 19,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: true
  },
  {
    id: "28e38583-70d6-406e-9552-a952784e38eb",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Elegant masquerade ball with formal attire",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-843-693-3961",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f05b9d4c-b14d-4d69-a49b-0c1a26e729b1",
      title: "Cocktails & Dancing",
      description: "Elegant masquerade ball with formal attire",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "74 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "02f8ece9-fa4c-4ebd-857c-c5ae2e723221",
                "name": "Sarah Lawson",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/61.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Marcus Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-951",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Thomas West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-197",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Brenda Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-1020",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Rebecca Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-402",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Amina Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-393",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "540c4fb6-5ba6-4d17-8f98-81072a1cfddd",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 20,
              "currency": "USD"
      }
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
    id: "28e38583-70d6-406e-9552-a952784e38eb",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Classic hits from the 70s, 80s, and 90s",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-713-765-1747",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2c6a0762-59cb-485a-928b-8097601b0a90",
      title: "Masquerade Ball",
      description: "Classic hits from the 70s, 80s, and 90s",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "aea13d32-8c65-47bd-82e1-5e8104f6e682",
                "name": "Alexander Charlotte",
                "role": "MC",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/9.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Liam Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-84",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Layla Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-252",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Melissa Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-188",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Douglas Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-317",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Logan Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-1039",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Deborah Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-195",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "George Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Janet Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-506",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Lerato Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-767",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "082d1e90-2a0e-41ee-ac5e-492970665f98",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 22,
              "currency": "USD"
      }
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
    id: "28e38583-70d6-406e-9552-a952784e38eb",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Exclusive VIP nightclub experience with premium service",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-218-579-8474",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f4927c38-57c1-43aa-9436-de10571b604e",
      title: "Dance Floor Competition",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: true,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "c1165b78-a893-47f0-b80a-7bdf881f9294",
                "name": "Nicholas Graham",
                "role": "DJ",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/51.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Randy Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-178",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Gary Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Willie Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Victoria Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-821",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jeffrey Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-819",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Brandon Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-550",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "28e38583-70d6-406e-9552-a952784e38eb",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Neon-themed party with glow sticks and UV lighting",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-811-259-2333",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b18fda58-5cfe-4baa-92eb-2a1e3ef13b08",
      title: "Theme Party Night",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "e49d708c-c9c0-4a3d-956a-0e94ca715f56",
                "name": "Lucas Holloway",
                "role": "Event Coordinator",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Dance Instructor",
                        "MC",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Kenneth Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-516",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Ethan Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-881",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Gerald Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-1079",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Justin Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-401",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Henry Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-837",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d49291fa-dfcd-4349-b077-a4d2718b1c7b",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 22,
              "currency": "USD"
      }
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
    id: "28e38583-70d6-406e-9552-a952784e38eb",
    category: "Nightclub",
    name: "Silent Disco",
    description: "Sophisticated evening of cocktails and social dancing",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Silent Disco performance times"
    },
    contact: {
      contactNumber: "+1-959-630-4787",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3148a19e-19c5-4c0b-919c-70c9b82fcfe2",
      title: "Silent Disco",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Silent Disco performance times"
        }],
      performers: [        {
                "id": "d101cee2-eb2c-46f4-b189-9ed4048c3a25",
                "name": "Alexander Cooper",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/10.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "MC",
                        "Dance Instructor",
                        "Event Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Christopher Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-300",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Gerald Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-766",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Elena Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-380",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Timothy Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-491",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Kyle Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "8",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Ellie Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-832",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jose Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-88",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Gary Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-777",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Daniel Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-972",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e19aface-e991-4687-95b8-ebbdfaf319a4",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 23,
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
    id: "28e38583-70d6-406e-9552-a952784e38eb",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Classic hits from the 70s, 80s, and 90s",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-382-617-1957",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "df0a9941-1b20-4688-9e84-29236920d6b0",
      title: "Live DJ Sets",
      description: "Classic hits from the 70s, 80s, and 90s",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "1925d575-6e83-40eb-ad46-8a863042117a",
                "name": "Nomsa Hawkins",
                "role": "MC",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/23.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Dance Instructor",
                        "MC",
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
          author: "Victor Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-729",
        },
        {
          quote: "The Live DJ Sets party was incredible! Danced until the early morning hours.",
          author: "Gregory Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-116",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Bryan Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-1080",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Ryan Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-867",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Bobby Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-1044",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Charlotte Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-421",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Gabriella Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-140",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Alice Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-98",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a2296523-8e12-45d3-a147-4b558d71301c",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 19,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: false
  }
];
