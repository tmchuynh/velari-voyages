// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "e5c1bf1c-23f9-4575-b1f1-f224dce5a64d",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Themed dance parties with costumes and special decorations",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-963-131-6977",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ef2a80e1-5852-4c2d-afc9-9fe9cf81eaf1",
      title: "Dance Floor Competition",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "eaf57c59-99aa-431d-bf79-4be3078461ef",
                "name": "Thomas Gardner",
                "role": "Event Coordinator",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Peter Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-625",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Peter Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-946",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Roy Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-311",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Virginia Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-836",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Samuel Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-103",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c942c74f-5fb3-4536-bb5c-12dc9031a7b9",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 11,
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
    isPopular: true
  },
  {
    id: "e5c1bf1c-23f9-4575-b1f1-f224dce5a64d",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Sophisticated evening of cocktails and social dancing",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-651-629-7663",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d653a8a1-2faf-4929-9079-c1f4faed93e2",
      title: "Live DJ Sets",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: true,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "70be24a5-95ae-4246-879e-cf1e7d836e62",
                "name": "Wayne Griffin",
                "role": "Dance Instructor",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/80.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Carol Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-433",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Raymond Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-27",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Ella Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-425",
        },
        {
          quote: "The Live DJ Sets party was incredible! Danced until the early morning hours.",
          author: "Naomi Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-1010",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Christian Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-293",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jason Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-722",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Samantha Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-279",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Christopher Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-959",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Douglas Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-90",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3da8097c-963d-4b89-990e-bf4e76374346",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 16,
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
    id: "e5c1bf1c-23f9-4575-b1f1-f224dce5a64d",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-975-989-1486",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "328d157d-43a6-4f9d-8b0e-12998ddb49d7",
      title: "Theme Party Night",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "51724fc5-df57-4117-ae74-0fbc219a3fc5",
                "name": "Anthony Jennings",
                "role": "MC",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/56.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Dance Instructor",
                        "Event Coordinator",
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
          author: "Linda Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-106",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Jerry Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-10",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Samantha Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-938",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Daniel Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-545",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Kinsley Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-861",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Walter Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-1048",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Eleanor Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-312",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Margaret Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-553",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "175d242d-4d72-440f-9be9-a7751f1e981c",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
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
    id: "e5c1bf1c-23f9-4575-b1f1-f224dce5a64d",
    category: "Nightclub",
    name: "Glow Party",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-631-441-5705",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c086c0c5-7cf3-4cef-adc6-8e251f0f1c37",
      title: "Glow Party",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "668067de-a4a0-43f5-89ce-e34e5450afe8",
                "name": "Peter Henderson",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/72.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "MC",
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Lily Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-100",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Randy Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-746",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "George Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-201",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Allison Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-400",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Julie Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-950",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Thabo Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-482",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Virginia Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-708",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Janet Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Alan Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-941",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Katherine Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-84",
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
    isPopular: false
  },
  {
    id: "e5c1bf1c-23f9-4575-b1f1-f224dce5a64d",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Electronic dance music with amazing light shows",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-392-379-6013",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b09aa034-b2d6-4961-9c1b-72d7a546f3c4",
      title: "VIP Club Experience",
      description: "Electronic dance music with amazing light shows",
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
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "5101160b-8aca-4706-bef6-4326123d2f98",
                "name": "Madelyn Bennett",
                "role": "Event Coordinator",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          author: "Jerry Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-118",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Claire Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-1068",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Nathan Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-23",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Scarlett Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-231",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Brian Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-470",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "85fe85da-3852-498d-b189-a15753db5a24",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 18,
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
    id: "e5c1bf1c-23f9-4575-b1f1-f224dce5a64d",
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
      contactNumber: "+1-204-535-2389",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "25419ae4-ae15-43d5-84f1-722350ed8547",
      title: "Latin Dance Club",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "462387f3-a2b1-4f1d-8b61-e5d4821a1375",
                "name": "Donna Collins",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          author: "Janet Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-216",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jeffrey Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-415",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Brenda Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-675",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Lisa Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-32",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Richard Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-1069",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Nicholas Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-945",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b59b4679-0a34-4a56-a16f-133c04b40a0d",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 16,
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
    id: "e5c1bf1c-23f9-4575-b1f1-f224dce5a64d",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Elegant masquerade ball with formal attire",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-292-721-9085",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "946454a3-83f9-40fa-915d-9429dc2f7643",
      title: "Theme Party Night",
      description: "Elegant masquerade ball with formal attire",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "746ab1dc-e51c-404a-84b0-ad625b89c377",
                "name": "Johnny Foster",
                "role": "DJ",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/9.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jesse Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-236",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Carlos Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-891",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Lucas Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-589",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Betty Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-932",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Amanda Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-76",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Walter Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-1016",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Rachel Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-1057",
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
    id: "e5c1bf1c-23f9-4575-b1f1-f224dce5a64d",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Classic hits from the 70s, 80s, and 90s",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-621-872-7066",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "88e13a4d-e79d-44b0-b52f-28f8676f90d5",
      title: "DJ Dance Party",
      description: "Classic hits from the 70s, 80s, and 90s",
      tickets: {
        isRequired: false,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "101 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "d852293d-f8f6-4229-8799-c476f32a171a",
                "name": "Elena Hunter",
                "role": "DJ",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/41.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Ryan Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-30",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Kenneth Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-427",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Liam Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-950",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Liam Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-801",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Abigail Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-998",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Grace Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-975",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "33cf6295-085f-4261-9ba9-baff417b0627",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 20,
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
  }
];
