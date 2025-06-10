// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "dfe3841f-c260-49bf-8286-6c1a6c288b0c",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Dance to your own beat with wireless headphone technology",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-764-576-5912",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e8762bbf-3366-4814-afcf-6fa5d633fd4c",
      title: "Electronic Dance Music",
      description: "Dance to your own beat with wireless headphone technology",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "9a7e50c0-5c84-4c9f-a031-cad50bd6018a",
                "name": "Bella Jennings",
                "role": "Event Coordinator",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/30.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Event Coordinator",
                        "Dance Instructor",
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
          author: "Joan Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-439",
        },
        {
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Samuel Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-628",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Darrell Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-646",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Samuel Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-463",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Sean Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-454",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Patricia Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-978",
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
    isPopular: true
  },
  {
    id: "dfe3841f-c260-49bf-8286-6c1a6c288b0c",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Exclusive VIP nightclub experience with premium service",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-610-670-4989",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2e1a0d7f-27bc-46f1-9f58-71320ec1b7bb",
      title: "Latin Dance Club",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "e280911b-9bfd-4554-80e3-737fa67aabbf",
                "name": "Keith Marshall",
                "role": "Lighting Technician",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/16.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Event Coordinator",
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
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Peter Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Aaron Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-307",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Stella Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-41",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Douglas Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-1057",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Gary Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-807",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Grace Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-133",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Helen Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-1065",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Gabriel Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-695",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Gabriel Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-414",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ff67bc0c-ab22-4af0-a420-3db7ac79e675",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 6,
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
    id: "dfe3841f-c260-49bf-8286-6c1a6c288b0c",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Sophisticated evening of cocktails and social dancing",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-477-862-4145",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "26fa90de-77d0-4da5-880b-0b82d454ecff",
      title: "Dance Floor Competition",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "dc0573c1-50e3-44f6-93ea-bd97f4c03fe5",
                "name": "Kyle Bennett",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/6.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          author: "Jeremy Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-246",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Harry Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Angela Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-872",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jesse Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-438",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Maya Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-427",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Timothy Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-554",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Carol Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-359",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jesse Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-235",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Adam Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-529",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "edcf6297-3c06-404d-9d0c-c2150c87c61d",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 13,
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
    id: "dfe3841f-c260-49bf-8286-6c1a6c288b0c",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Themed dance parties with costumes and special decorations",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-689-513-5476",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7ea0c609-e8b9-4d31-90e5-3fbd7ac395ad",
      title: "Dance Floor Competition",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "1e156dec-605c-4953-b861-b0d2024ca5c8",
                "name": "Paul Spencer",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/33.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Avery Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-905",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Carlos Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-222",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Michael Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-922",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Scott Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-218",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Samantha Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-1014",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Virginia Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-984",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Joshua Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-837",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Charlotte Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-82",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d65fbf0f-3578-4f84-abeb-aa55fe04beb2",
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
    id: "dfe3841f-c260-49bf-8286-6c1a6c288b0c",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Sophisticated evening of cocktails and social dancing",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-933-905-1187",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "03983c79-de22-41d8-8072-98b056b4ed48",
      title: "Retro Dance Night",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "0198b049-5483-439b-8948-643c678e3880",
                "name": "Thomas Dixon",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/51.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The Retro Dance Night party was incredible! Danced until the early morning hours.",
          author: "Lucas Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Wayne Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-321",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Alexa Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "The Retro Dance Night party was incredible! Danced until the early morning hours.",
          author: "Victor Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-9",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Ariana Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-239",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Nora Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-77",
        },
        {
          quote: "The Retro Dance Night party was incredible! Danced until the early morning hours.",
          author: "Donna Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-337",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6003d8b2-bfb8-479c-b475-52f60b9b0154",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 11,
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
    id: "dfe3841f-c260-49bf-8286-6c1a6c288b0c",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-334-616-5734",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "33ba85fa-1cff-4dc1-b55f-97b09122f4e8",
      title: "Latin Dance Club",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "103 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "9ce41b20-30ce-4d74-a9a2-73e731ff3cbe",
                "name": "Gabriel Graham",
                "role": "Lighting Technician",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
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
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Elijah West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-346",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Mia Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-523",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Richard Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-720",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Joel Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-774",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Zachary Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-684",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Virginia Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-930",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0cb8cd65-800e-4103-9b3a-7c17b36d1c98",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 8,
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
    id: "dfe3841f-c260-49bf-8286-6c1a6c288b0c",
    category: "Nightclub",
    name: "Glow Party",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-223-753-9169",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6d6c5ed6-4e24-442f-94b7-05e41e6a46f9",
      title: "Glow Party",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "c030cbda-96cf-4800-939c-19247741feb9",
                "name": "Eugene Chambers",
                "role": "Event Coordinator",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/71.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Sarah Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-51",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Ariana Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-860",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Gregory Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-342",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Alexander Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-122",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Rebecca Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-935",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Roger Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-430",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Emily Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-1067",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "48d8e1cc-7977-495f-a3e4-88a79f87b728",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 28,
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
    isPopular: false
  }
];
