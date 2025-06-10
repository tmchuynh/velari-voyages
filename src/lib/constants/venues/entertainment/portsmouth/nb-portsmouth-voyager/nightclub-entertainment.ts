// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-345-131-3930",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3610f594-c891-4587-87b7-a0f474d1cc7e",
      title: "Dance Floor Competition",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "b8980ddd-2e1e-4122-8182-328ae4f957c6",
                "name": "Alexander Palmer",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/56.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
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
          author: "Avery Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-41",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Bella Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-417",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Alice Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-978",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Lawrence Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-255",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Jessica Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-336",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Valentina Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-380",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2813f6b9-6e1d-4bfc-af7d-484983c7f8ab",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 25,
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
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    category: "Nightclub",
    name: "Silent Disco",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Silent Disco performance times"
    },
    contact: {
      contactNumber: "+1-867-316-2697",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bd96f223-2fc6-46f3-8944-8e03c246a65d",
      title: "Silent Disco",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Silent Disco performance times"
        }],
      performers: [        {
                "id": "ad5b5d98-4ec5-4138-9ca9-e390d2151a6c",
                "name": "Bruce Reeves",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Kyle Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-988",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Ariana Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-697",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Brian Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-175",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Carol Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Zachary Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-120",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Noah Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-268",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Michelle Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-309",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-330-658-7868",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8b684d1e-c5d7-4696-8e1f-1128621858e4",
      title: "Latin Dance Club",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: true,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "d15aaa97-4384-4683-99e3-af9f3cc7c527",
                "name": "Layla Graham",
                "role": "Dance Instructor",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/10.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Event Coordinator",
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Roger Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Charlotte Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-508",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Zachary Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-451",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Johnny Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-145",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jessica Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-171",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Ashley Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-473",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Samantha Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-227",
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
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-438-308-7555",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3e9c31f3-fb40-4208-a964-19a9e0885c9e",
      title: "Latin Dance Club",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: false,
        price: 43,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "64f92528-7010-411f-9fad-cb12e8d8a05f",
                "name": "Gabriella Knight",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Bobby Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-716",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Valentina Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-468",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Ella Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-22",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jordan Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-777",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Albert Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-134",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Katherine Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-770",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Gary Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-546",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Rajesh Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-977",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Ashley Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-454",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Thabo Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-781",
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
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-225-541-7267",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bc745376-e9bd-4542-87e9-a7a78ba8ae21",
      title: "Cocktails & Dancing",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "14d74581-5870-4610-8ad2-c38455cedc94",
                "name": "Ronald Coleman",
                "role": "Dance Instructor",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Linda Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-1045",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Louis Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-773",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Roy Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Daniel Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-202",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Peter Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-34",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Stella Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-104",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Steven Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-117",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Amanda Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-561",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "424c5d32-5816-4781-a47c-a1c9eec9aac9",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 27,
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
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Themed dance parties with costumes and special decorations",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-721-485-8861",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0c1909fd-ac7b-43e3-8809-1fd133b2d997",
      title: "Masquerade Ball",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "305ebd18-cf9c-4786-8be2-46d477dbaaae",
                "name": "Priya Porter",
                "role": "Event Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Lighting Technician",
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Chen Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-499",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Lily Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-312",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Emily Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Antonio Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-164",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Eugene Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-952",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Donna Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-88",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jerry Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-749",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Victoria Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-935",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Brenda Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-706",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Peter Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-1073",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "14bbf544-28c3-4f42-bbc2-99d2afd43dbd",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 13,
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
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    category: "Nightclub",
    name: "Glow Party",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-398-210-2003",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "870b9811-8cec-481e-a9c7-5ecbe30d9a27",
      title: "Glow Party",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "67f584c0-7c29-43fd-af8f-2bef6c80074a",
                "name": "Philip Mason",
                "role": "MC",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/27.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Ryan Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-827",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Sofia Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-682",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Amina Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-35",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Edward Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-70",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Caroline Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-397",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Liam Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-455",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Ethan Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-537",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Susan Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-1026",
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
    isPopular: true
  },
  {
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-682-208-7909",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e961107a-e9c0-4f7b-b312-1b51b63aae48",
      title: "Masquerade Ball",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "589abcb5-3727-42e7-85bc-765d9ac1e16d",
                "name": "Harry Mitchell",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/16.jpg",
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Ella Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-318",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Kenneth West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-169",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Laura Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-1043",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Juan Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-379",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Edward Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-936",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Mason Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-1001",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "c5b078fa-6cab-4901-845c-d160bb2ac858",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 19,
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
  }
];
