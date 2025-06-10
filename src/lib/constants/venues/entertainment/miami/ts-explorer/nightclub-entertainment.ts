// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Electronic dance music with amazing light shows",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-316-512-5706",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "eda3f11f-3316-47b9-bdb8-a84a820824d2",
      title: "Masquerade Ball",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "358cc9f7-5add-43ba-a963-96b28d698e8c",
                "name": "Isabella Russell",
                "role": "MC",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Sean Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-1058",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Elijah Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-990",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Timothy Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-172",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jonathan Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-418",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Raymond Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-1042",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Kennedy Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-248",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1ecf2a2f-8d8b-42b7-9f10-8bbf56d2c2e1",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 18,
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
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-238-854-2280",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4d875ae9-4137-48ab-9a4b-b822bf2bf0be",
      title: "VIP Club Experience",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "d0968496-22d1-49c0-b2ec-33a33743e890",
                "name": "Cynthia Cooper",
                "role": "Event Coordinator",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/73.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
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
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Lisa Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-257",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Anna Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Eric Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-921",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Alexander Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-298",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Lisa Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-1036",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Zoe Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-1076",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jordan Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-164",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b67e6626-d717-4825-a4ea-206b455aabc1",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 21,
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
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-655-324-6514",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dcc1cf3e-b1d8-4140-8ff8-b1af40c34d6e",
      title: "Theme Party Night",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: true,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "61 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "b1c8b4da-70cf-4e7e-bcb8-ad6481880ffe",
                "name": "Audrey Knight",
                "role": "Lighting Technician",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Harold Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-301",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Wayne Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-656",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Ronald Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-745",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Andrew Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-1039",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Donna Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-278",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Elijah Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-466",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Leah Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-831",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Brian Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-906",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Andrew Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-1023",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Russell Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-1034",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1a28ca82-d8b8-4ca6-ade7-34611eed2b0e",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 9,
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
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-229-849-7410",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5d9bad17-74ef-4fe2-83ec-1c096bb6e905",
      title: "Retro Dance Night",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "29ff1d53-cdb6-4f7d-9b76-5153806b2a3d",
                "name": "Layla Baker",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/23.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Brooklyn West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-686",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Savannah Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-948",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Stephen Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-826",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Paul Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-977",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Paul Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-73",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Justin Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-486",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Nicole Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-809",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Bobby Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-26",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Gary Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-198",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Adam Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-344",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d05d92d8-ffc7-4199-a832-bbcf54cfe31f",
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
    isPopular: true
  },
  {
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-852-279-6407",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8c2f4442-1c32-49ee-9174-6acb5648f836",
      title: "Latin Dance Club",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "02d235f5-29d0-47ca-9d42-f6fb829ea7c9",
                "name": "Michelle Reed",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/33.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Event Coordinator",
                        "Lighting Technician",
                        "Dance Instructor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Philip Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-718",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Terry Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-604",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Zoe Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-294",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Daniel Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-77",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Michelle Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-86",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Albert Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-235",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Scott Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-509",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Catherine Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-203",
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
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
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
      contactNumber: "+1-384-920-2797",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3e501aed-62b4-44fd-abee-9f5ce88e0634",
      title: "Glow Party",
      description: "Dance to your own beat with wireless headphone technology",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "1a67e680-57ff-438f-b7c7-f265cefae086",
                "name": "Joshua Cooper",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/34.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "DJ",
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
          author: "Barbara Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-965",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Angela Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-737",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Barbara Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-950",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Wei Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-991",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Riley Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-714",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Wei Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-116",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Justin Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-208",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Riley Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-763",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Nora Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-687",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Virginia Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-575",
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
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-923-948-2544",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "de87702c-3a47-467f-8d16-4bcea5b13e74",
      title: "Masquerade Ball",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "34ffab3d-2ca7-4e93-8ae2-2f1754b4730d",
                "name": "Victor Grant",
                "role": "Event Coordinator",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Event Coordinator",
                        "DJ",
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
          author: "Brooklyn Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-230",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Amina Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-285",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Peter Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-385",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Joe Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-60",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Deborah Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-90",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Nathan Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-1076",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Nathan Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-166",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Ariana West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-642",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Carol Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-377",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Bruce Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-712",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "099b7c4d-3f38-43c2-8bdc-ad193f1d7384",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 23,
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
  },
  {
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Electronic dance music with amazing light shows",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-684-588-8150",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e0efed4f-4156-41bc-9df7-bbc08cd427ce",
      title: "Theme Party Night",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "9ef3ef5e-e87b-4d5e-b3a7-a28d44890d37",
                "name": "Mary Reed",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/66.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Lighting Technician",
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Sophia Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-370",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Justin Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-487",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Victor Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-698",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Rachel Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-215",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Dorothy Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-930",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Kennedy Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-621",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Harold Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-817",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ca4ce9aa-11c8-4a91-b41e-76b572dc1a54",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 5,
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
  },
  {
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-951-849-8183",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8d190e80-8df7-4bed-99be-d92df2702ac1",
      title: "Cocktails & Dancing",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "65 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "72c136d5-2d68-4036-a02a-2fe089f823a3",
                "name": "Billy Charlotte",
                "role": "Event Coordinator",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "MC",
                        "DJ",
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
          author: "Savannah Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-749",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Grace Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-731",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Brandon Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-409",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Roger Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-150",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Christine Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-206",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Logan Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-877",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Rajesh Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-892",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Betty Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-621",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jennifer Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-726",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Mateo Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-9",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a7e6e419-9490-4f53-b027-ab80cb5fa611",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 24,
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
    isPopular: true
  },
  {
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-639-807-9431",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "de752166-bbe8-41c5-b11e-57ab86a802e0",
      title: "Electronic Dance Music",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: false,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "72d4a5dc-4d59-45b9-9c0d-4d988c7adc50",
                "name": "Ashley Graves",
                "role": "Dance Instructor",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/0.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jacob Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-134",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Ralph Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-182",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Carlos Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-801",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Antonio Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-430",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jose Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-1027",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jeremy Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-320",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Andrew Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-899",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jordan Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-1028",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "065d62be-dac4-429d-958c-1d4c55eeb9cc",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 29,
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
  }
];
