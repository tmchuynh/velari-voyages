// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "Close-Up Magic Experience",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Close-Up Magic Experience performance times"
    },
    contact: {
      contactNumber: "+1-640-140-7957",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b5e4ae95-43dd-41a7-bf07-cdc6e7424de7",
      title: "Close-Up Magic Experience",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Close-Up Magic Experience performance times"
        }],
      performers: [        {
                "id": "b2ecf684-4a13-4aeb-9cac-f4ef6045ae88",
                "name": "Kennedy Henderson",
                "role": "Mentalist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Genesis Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-729",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Kenneth Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-1047",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Maria Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-1010",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Evelyn Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-464",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Louis Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-319",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Evelyn Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-261",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Albert Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-25",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Peter Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-249",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "bd1e298d-a338-4dee-b454-642a610e42c1",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 24,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-867-668-8963",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b8ba99c4-803d-405c-92cc-b0be05b56fc8",
      title: "Mind Reading & Mentalism",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "f9c6dd9d-9541-43e0-a7c3-be5799f7afe8",
                "name": "Charlotte Douglas",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/41.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Dylan Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-226",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Skylar Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-481",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Maria Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-690",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Emily Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-795",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Tyler Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-293",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ed300fb2-13bb-440a-8424-1136d240843f",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 33,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "Card Magic Mastery",
    description: "Intimate close-up magic performed right before your eyes",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Card Magic Mastery performance times"
    },
    contact: {
      contactNumber: "+1-662-469-6295",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "891d1ff3-fc36-457c-88d1-8304afa4e925",
      title: "Card Magic Mastery",
      description: "Intimate close-up magic performed right before your eyes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Card Magic Mastery performance times"
        }],
      performers: [        {
                "id": "8c3d8f54-6e3c-4c92-adc2-944a2fe407a5",
                "name": "Frank Charlotte",
                "role": "Mentalist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Magician",
                        "Escape Artist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Samuel Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-717",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Robert Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-464",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Barbara Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-694",
        },
        {
          quote: "The Card Magic Mastery show left me speechless. True artistry and skill on display.",
          author: "Oliver Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-831",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Amy Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-616",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "James Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-320",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-977-296-1486",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7a7b70ba-c66a-494e-907e-0c7f066a3395",
      title: "Grand Illusion Spectacular",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "afc7b1df-f282-49a4-9dc8-6795d1002786",
                "name": "Marcus Mason",
                "role": "Illusionist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Ashley Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-923",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Helen Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-683",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Olivia Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-943",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Terry Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-669",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Elena Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-819",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Jerry Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-747",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Ralph Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-335",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Helen Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-961",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Allison Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-714",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e8184a12-bb05-4c13-a699-3ae36a5a4c73",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 15,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-824-631-9725",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a5b65b3c-4364-4b34-914e-4b84ce688701",
      title: "International Magic Acts",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "671b531e-fe0f-489e-a3a5-980264ef7e6f",
                "name": "Dennis Charlotte",
                "role": "Comedy Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Comedy Magician",
                        "Escape Artist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Christopher Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-931",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Gregory Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-354",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Caroline Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-971",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Benjamin Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-729",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Antonio Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-1003",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Kennedy Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-605",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Nomsa Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-715",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Pamela Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-653",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Intimate close-up magic performed right before your eyes",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-795-105-2471",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "140236e9-5db9-46fb-afcb-38d788fd1627",
      title: "International Magic Acts",
      description: "Intimate close-up magic performed right before your eyes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "cc8ccad1-3460-4f31-9a4d-4773f6a655a2",
                "name": "Tyler Price",
                "role": "Mentalist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/33.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Illusionist",
                        "Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Savannah Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-957",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Cynthia Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-366",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Linda Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-1052",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Oliver Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-238",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Stephen Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-689",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Emily Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-101",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Javier Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-569",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Lucas Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-646",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7c39021a-faeb-4af0-b536-2e33856c369a",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 31,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Large-scale stage magic with elaborate props and illusions",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-699-973-9234",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a0caef4a-1dd9-4067-a4d6-7ac4e5840acf",
      title: "International Magic Acts",
      description: "Large-scale stage magic with elaborate props and illusions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "2bc94551-0588-461d-a42f-0f547b86b23f",
                "name": "Ashley Jennings",
                "role": "Mentalist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/77.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Magician",
                        "Comedy Magician",
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Linda Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-110",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Bruce Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-628",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Liam Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-475",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Grace Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-165",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Laura Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-326",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Tyler Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-279",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7337b261-9fef-475d-9574-9a3ad981115c",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 36,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "Magic & Variety Hour",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Magic & Variety Hour performance times"
    },
    contact: {
      contactNumber: "+1-394-473-9401",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "377ab504-58a5-49f3-8be4-1b153162df6f",
      title: "Magic & Variety Hour",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Magic & Variety Hour performance times"
        }],
      performers: [        {
                "id": "f8f7c542-777c-45d3-9c74-341e748c88be",
                "name": "Gary Hall",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Comedy Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Randy Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-485",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Victoria Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-689",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Isabella Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-706",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Henry Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-260",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Albert Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-877",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e7048e72-235c-4eef-a6ec-6765692c920b",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 19,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Thrilling escape artist performances and stunts",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-641-177-7027",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c23b2bbb-e73a-481f-94b2-e8d2f91eb04d",
      title: "Grand Illusion Spectacular",
      description: "Thrilling escape artist performances and stunts",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "efcb26e1-7a9a-4f08-aa78-948cf8e52cbd",
                "name": "Scott Russell",
                "role": "Mentalist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Escape Artist",
                        "Mentalist",
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Patrick Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-927",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Helen Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-206",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Sarah Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-961",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Wayne Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-618",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Diego Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-280",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Priya Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-392",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Carlos Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-258",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Gabriella Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-395",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  }
];
