// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "7e00f4c1-8d37-440e-a92a-9aebd2d73bb5",
    category: "Magic Show",
    name: "Magic & Variety Hour",
    description: "Grand-scale illusions and spectacular magic performances",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Magic & Variety Hour performance times"
    },
    contact: {
      contactNumber: "+1-451-902-9720",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2d509526-f8e6-4c34-af8c-ad622e94935c",
      title: "Magic & Variety Hour",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Magic & Variety Hour performance times"
        }],
      performers: [        {
                "id": "b3518cea-1e59-4c4c-82a2-b3f3383ea6fc",
                "name": "Russell Holloway",
                "role": "Escape Artist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/29.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          author: "Elena Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-668",
        },
        {
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Alice Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-246",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Mark Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-852",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Blake Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-545",
        },
        {
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Melissa Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-276",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Miguel Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-142",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Madelyn Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-29",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Juan Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-1011",
        },
        {
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Joshua Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-267",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Darrell Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-926",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "d5bda82e-d9d5-4326-8db6-84c1dee44e5c",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 28,
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
    id: "7e00f4c1-8d37-440e-a92a-9aebd2d73bb5",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Magic show featuring multiple acts and variety performers",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-834-600-1868",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "169b7431-392f-4afe-bf54-791c2ca585c7",
      title: "Grand Illusion Spectacular",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "03f7fe6b-a3a8-4f58-9a39-03c51793e519",
                "name": "Zoe West",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/80.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Escape Artist",
                        "Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Nancy Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-37",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Nicholas Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-338",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Adeline Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-1037",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Maria Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-153",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Joshua Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-828",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Rebecca Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-788",
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
    id: "7e00f4c1-8d37-440e-a92a-9aebd2d73bb5",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Large-scale stage magic with elaborate props and illusions",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-492-941-6829",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "073e3635-be82-43dd-8e42-cc56cfdf02f3",
      title: "Interactive Magic",
      description: "Large-scale stage magic with elaborate props and illusions",
      tickets: {
        isRequired: true,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "f9587e5a-384d-4c78-95f7-0fb3a86b1922",
                "name": "Jonathan Sutton",
                "role": "Escape Artist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Elijah Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-940",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Michael Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-85",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Margaret Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-59",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Carl Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-858",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Marcus Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-161",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Zoe Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-728",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lawrence Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-643",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Betty Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-487",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Adeline Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-707",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "addb0e06-19a7-4086-b82f-5969cde4d30a",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 26,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: true
  },
  {
    id: "7e00f4c1-8d37-440e-a92a-9aebd2d73bb5",
    category: "Magic Show",
    name: "Magic Workshop",
    description: "Mysterious mind reading and mentalism demonstrations",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Magic Workshop performance times"
    },
    contact: {
      contactNumber: "+1-601-815-4249",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f8e62ab0-4ab3-403e-8220-ddbbc213c0f1",
      title: "Magic Workshop",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "112 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Magic Workshop performance times"
        }],
      performers: [        {
                "id": "23362f05-a296-4deb-9802-04972f92fe66",
                "name": "Nicholas Charlotte",
                "role": "Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Magician",
                        "Illusionist",
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
          author: "Nancy Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-122",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Thandiwe Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-153",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Jordan Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-607",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jane Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-535",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lerato Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-1048",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Pamela Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-585",
        },
        {
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Brandon Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-48",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Thomas Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-405",
        },
        {
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Patricia Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-245",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1e5cf43e-1ea0-43b8-85b6-eb69c804c2c4",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 39,
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
    isPopular: true
  },
  {
    id: "7e00f4c1-8d37-440e-a92a-9aebd2d73bb5",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Masterful card tricks and sleight of hand demonstrations",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-464-146-7118",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cfd0842a-e8b2-48de-b5ab-663c8051d8a1",
      title: "Escape Artist Performance",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "271375b0-42ab-4a17-b19e-068e6ff8e325",
                "name": "Samantha Curtis",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/14.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Magician",
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Layla Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-15",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Pamela Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "2",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Stella Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-35",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Eric Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-785",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Roger Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-817",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Zachary Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "0",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Margaret Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-705",
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
    isPopular: true
  },
  {
    id: "7e00f4c1-8d37-440e-a92a-9aebd2d73bb5",
    category: "Magic Show",
    name: "Close-Up Magic Experience",
    description: "Family-friendly magic show with audience participation",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Close-Up Magic Experience performance times"
    },
    contact: {
      contactNumber: "+1-218-725-6862",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cf772f05-a10b-473f-a53d-df31efa9541d",
      title: "Close-Up Magic Experience",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Close-Up Magic Experience performance times"
        }],
      performers: [        {
                "id": "4a25715e-b9e2-4ea2-b7c0-9b3484416862",
                "name": "Sophia Porter",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/67.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Christopher Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-438",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Alexa Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-439",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jonathan Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-223",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Antonio Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-1029",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jennifer Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-747",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Edward Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-1081",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Eric Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-568",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "121f4fad-83ba-4983-a44f-68f08d24e0b2",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 40,
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
    isPopular: true
  }
];
