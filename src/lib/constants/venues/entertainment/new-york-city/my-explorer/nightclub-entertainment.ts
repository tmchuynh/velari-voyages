// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "Glow Party",
    description: "Dance to your own beat with wireless headphone technology",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-773-834-7160",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cb7036eb-c773-4e53-8fcb-d9ec52b5a2f8",
      title: "Glow Party",
      description: "Dance to your own beat with wireless headphone technology",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "89 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "4cf58166-d58f-4759-8d92-778cdb81b99a",
                "name": "Virginia Crawford",
                "role": "Event Coordinator",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/49.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Event Coordinator",
                        "Dance Instructor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "George West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-1062",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Willie Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-684",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Thomas Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-756",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Mason Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-225",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Madelyn Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-572",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Joseph Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-970",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "afa74b76-b7dd-4cc9-8088-d93767a3144e",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 12,
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
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-826-540-6681",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c4ba3c18-8a0d-48a0-a012-aea585177422",
      title: "Retro Dance Night",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "14ec8918-9b79-44e7-b81c-8d9c80b76176",
                "name": "Layla Fisher",
                "role": "Event Coordinator",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Event Coordinator",
                        "MC",
                        "Dance Instructor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Naomi Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-136",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Ralph Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-1058",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "William Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-342",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Andrew Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-805",
        },
        {
          quote: "The Retro Dance Night party was incredible! Danced until the early morning hours.",
          author: "Helen Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-140",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Luis Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-1026",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Jacob Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-151",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Sean Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-560",
        },
        {
          quote: "The Retro Dance Night party was incredible! Danced until the early morning hours.",
          author: "Jason Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-862",
        },
        {
          quote: "The Retro Dance Night party was incredible! Danced until the early morning hours.",
          author: "Riley Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-624",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "16e0ef3d-4715-43c2-814e-ec1fb9d52156",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 21,
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
  },
  {
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-270-449-2121",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2cf417bf-58ec-421a-a8f2-3aadf3600318",
      title: "Latin Dance Club",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "f7fb8dcc-cc75-4a56-9057-05ceea508905",
                "name": "Savannah Jennings",
                "role": "DJ",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Dance Instructor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Brandon Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-330",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Brooklyn Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-160",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Timothy Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-842",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Katherine Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-494",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Carol Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-56",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Angela Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-128",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      }
    ],
    isPopular: false
  },
  {
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-438-735-2716",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "40cf541b-22a9-4ee3-99f0-4eb0eea571ed",
      title: "Electronic Dance Music",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "98 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "3c5a3e5d-74cc-4e3f-98c3-bce59f8b86ee",
                "name": "Margaret Lawson",
                "role": "Dance Instructor",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Cynthia Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-1082",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "George Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-342",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Chen Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-184",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Chloe Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-173",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Benjamin Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-505",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Douglas Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-298",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Edward Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-1076",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Kenneth Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-497",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Miguel Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-196",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ef67f911-f20c-4d53-8ae2-6f0412b346ac",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 14,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      }
    ],
    isPopular: false
  },
  {
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Themed dance parties with costumes and special decorations",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-638-654-2949",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a6002c8a-52e9-47dc-adbe-db9137734e37",
      title: "Cocktails & Dancing",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: true,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "c3d595ff-afb4-4ed0-a87d-1ca662a17f85",
                "name": "Joshua Watson",
                "role": "DJ",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Dance Instructor",
                        "Event Coordinator",
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
          author: "Nicholas Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-686",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Nicole Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-958",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Dorothy Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-509",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Alexander Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-478",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Madelyn West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-826",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Rachel Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-804",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Sophia Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-906",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4254c726-0adf-402a-a96b-832681aebe43",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 30,
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
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "Glow Party",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-326-558-5799",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6d1d3207-0a29-424b-a0eb-c02d77f2f939",
      title: "Glow Party",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: true,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "6f412ff5-056b-4114-a679-25e0272dbc0a",
                "name": "Nathan Knight",
                "role": "DJ",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Eric Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-406",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Roger Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-495",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Elena Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-1039",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Dennis Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-588",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Jose Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-319",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1917babd-13b1-4c76-b09d-295210bafb1a",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 19,
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
    isPopular: false
  },
  {
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "High-energy dance party with professional DJs",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-421-874-8885",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "72d340d1-5de6-4a76-bcc7-2f833402e780",
      title: "Latin Dance Club",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "6679ef43-72fe-41f4-816b-4fb89ded147b",
                "name": "Randy Hunter",
                "role": "MC",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/57.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Wayne Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-904",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Eric Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-107",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Ashley Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-578",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Raymond Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-632",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "William Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-616",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Joan Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-882",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Darrell Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-497",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d51b959e-09e0-4534-a0a2-2b5c3e1e37ea",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 14,
              "currency": "USD"
      }
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
    isPopular: true
  },
  {
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Themed dance parties with costumes and special decorations",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-733-962-9489",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d658d5a1-9cfa-4870-9417-268905a1116a",
      title: "DJ Dance Party",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "aa62955e-1d32-4111-935c-8f011a28eae7",
                "name": "Hannah Lawson",
                "role": "Dance Instructor",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/75.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Wayne Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-553",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jane Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-754",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Aaliyah West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-865",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Amina Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-243",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Maya Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-480",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Sarah Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-776",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Deborah Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-286",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Wei Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-1049",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Dylan Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-426",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Wei Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-825",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5c67a39d-703d-4aa5-a6df-ad6155c2e959",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 5,
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
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-443-412-7166",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "73ff9c34-573c-4616-8502-03ff42f61529",
      title: "VIP Club Experience",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "707f8e75-bdb9-429e-8501-3f5fc2b385b5",
                "name": "Michelle Curtis",
                "role": "Dance Instructor",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/29.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Lighting Technician",
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
          author: "Alexa Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-501",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jordan Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-207",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Joseph Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-900",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jason Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-511",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Michael Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-409",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Evelyn Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-300",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "John Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-917",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Ronald Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-828",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Alexander Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-177",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Peter Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-637",
        }
      ],
      hasVIPSeating: true,
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
    isPopular: true
  },
  {
    id: "781ab2d0-be77-46aa-8b4c-19ac34fa92fe",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-377-135-2833",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "65cda34c-9504-4dea-aafa-c6011222d15b",
      title: "Electronic Dance Music",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "f37f0b87-e517-4856-9865-3f3b748a1b1a",
                "name": "Eleanor Morgan",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Lighting Technician",
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Terry Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-304",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Adeline Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-79",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Vincent Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-913",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Emily Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-320",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "John Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-959",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Billy Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-173",
        },
        {
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Layla Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-289",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Bella Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-817",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Sophia Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-75",
        },
        {
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Ronald Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-1018",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "00df9e41-8611-4461-b4ad-be28ed22a3d8",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 6,
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
    isPopular: true
  }
];
