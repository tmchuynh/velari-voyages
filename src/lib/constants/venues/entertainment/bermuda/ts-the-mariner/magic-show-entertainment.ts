// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-244-481-8471",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1284be93-a2fe-4b72-9b81-15afd445d810",
      title: "Interactive Magic",
      description: "Grand-scale illusions and spectacular magic performances",
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
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "9686e3eb-3e11-48e7-bd63-4ec1aaab90ac",
                "name": "Nancy Parker",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/10.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Johnny Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-639",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Kyle Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-418",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Peter Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Aiden Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-8",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Catherine Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-554",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Joseph Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-793",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Ella Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-499",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b5337b3d-1971-446b-a09e-1eb597679003",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 22,
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
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Thrilling escape artist performances and stunts",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-616-524-6984",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "744a8bb8-dfb7-48cd-b12c-c1fc62b5b507",
      title: "Mind Reading & Mentalism",
      description: "Thrilling escape artist performances and stunts",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "2dab162f-74b7-4750-9c24-40d55ff19eef",
                "name": "Justin Harper",
                "role": "Illusionist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/65.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Comedy Magician",
                        "Escape Artist",
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Oliver Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-917",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Noah Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-468",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Christian Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-992",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Thabo Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Hannah Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-566",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Nathan Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-189",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Sandra Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-879",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0fa05d95-81ac-4bc0-9697-19314b96020f",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 20,
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
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-681-376-1455",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7c2d1758-ec37-4b6f-83ee-a71fa8ea9f72",
      title: "Comedy Magic Show",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "117 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "3556655e-97fb-4512-b042-f38d852da2f0",
                "name": "Alexa Payne",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/67.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Magician",
                        "Escape Artist",
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Anna Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-697",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Randy Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-60",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Stella Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-449",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Maya Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-319",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Richard Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-635",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Thabo Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "9",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Noah Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-821",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Thandiwe Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-279",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Jason Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-303",
        }
      ],
      hasVIPSeating: true,
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
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-910-950-7314",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "16faba76-2365-42f0-be18-8e441356ff8a",
      title: "Family Magic Show",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "930e1df6-cef7-43c9-a1ee-d41c33f0c569",
                "name": "Jennifer Fletcher",
                "role": "Escape Artist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/31.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
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
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Brandon Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-561",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Skylar Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-991",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Grace Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-531",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Kevin Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-50",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Riley Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-102",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Victor Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-76",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "befe0049-f325-4a5b-9b4a-3b895b2896e1",
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
    isPopular: false
  },
  {
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Close-Up Magic Experience",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Close-Up Magic Experience performance times"
    },
    contact: {
      contactNumber: "+1-781-948-2056",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "efd8331f-59ba-4ff1-a23a-3cef3a9970d1",
      title: "Close-Up Magic Experience",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Close-Up Magic Experience performance times"
        }],
      performers: [        {
                "id": "16b14e6c-e997-476f-9f5c-ac617e6935e7",
                "name": "Madelyn Hunter",
                "role": "Mentalist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/2.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Maya Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-730",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Jeremy Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-911",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Samantha Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-70",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Stella Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-919",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "William Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-928",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Gary Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-917",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Alexa Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-397",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Gary Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-921",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Dylan Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-852",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Sandra Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-706",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
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
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Thrilling escape artist performances and stunts",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-984-442-5317",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f0107f1a-40dd-4743-a4af-eaa1d4db0af2",
      title: "Grand Illusion Spectacular",
      description: "Thrilling escape artist performances and stunts",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "88 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "6b9495f4-12fc-44a5-b8d6-6ab0aa6b4831",
                "name": "Deborah Day",
                "role": "Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/84.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Escape Artist",
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
          author: "Robert Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-1032",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Joe Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-903",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Sebastian Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-1048",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Sandra Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "2",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Olivia Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-663",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d2c165e4-834d-4663-9c66-88b213521caa",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 39,
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
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-719-841-7344",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "426686cc-7cba-4a17-bf05-a98fd16d9df9",
      title: "Comedy Magic Show",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "f1eff45f-f475-4168-8296-c7885ef8110c",
                "name": "Nicholas Dean",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Ariana Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-429",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Harold Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-497",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Gabriella Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-377",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Samuel Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-125",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Jeremy Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-191",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Gabriella Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-189",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Dennis Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Skylar Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-16",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "35634307-f6e8-491c-b87d-b81fb944f8c1",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 38,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      }
    ],
    isPopular: false
  },
  {
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Stage Magic Extravaganza",
    description: "Thrilling escape artist performances and stunts",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Stage Magic Extravaganza performance times"
    },
    contact: {
      contactNumber: "+1-300-147-5373",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "922cca89-8030-4383-8f10-868e900dc4d9",
      title: "Stage Magic Extravaganza",
      description: "Thrilling escape artist performances and stunts",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Stage Magic Extravaganza performance times"
        }],
      performers: [        {
                "id": "7c50ff0b-59ce-4646-89fd-6b973cacc8ec",
                "name": "Joe Hamilton",
                "role": "Mentalist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/69.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Escape Artist",
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Carl Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-368",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Zola Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-701",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Larry Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-745",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Joel Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-498",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Stephanie Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-398",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Samuel Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-146",
        },
        {
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Rajesh Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-850",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Christine Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-322",
        },
        {
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Angela Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-204",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "54a3dead-e997-4e96-9f71-0f7342c2d3b7",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 23,
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
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "Magic Workshop",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Magic Workshop performance times"
    },
    contact: {
      contactNumber: "+1-532-401-6756",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "625cfaa4-8865-4979-b017-c4303b1271db",
      title: "Magic Workshop",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Magic Workshop performance times"
        }],
      performers: [        {
                "id": "828d2453-db19-4b44-ae45-632deb07074e",
                "name": "Laura Fletcher",
                "role": "Illusionist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/28.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Sarah Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-279",
        },
        {
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Noah Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-1080",
        },
        {
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Alice West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-383",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Jesse Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-1050",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Catherine Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-405",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Zola Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-857",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Willie Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-152",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Amelia Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-874",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e7443902-0c60-42be-b497-2e630868c070",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 16,
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
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-614-495-1161",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "69bca046-a4b3-4e33-9cf8-691a382c7ef3",
      title: "International Magic Acts",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "0248501d-63e1-410d-80e3-da1c25588eb8",
                "name": "Harper Gardner",
                "role": "Illusionist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lily Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-635",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Hannah Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-532",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Madelyn Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-651",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Anna Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-300",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Jason Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-231",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Matthew Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-107",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Jennifer Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-464",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Vincent Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-662",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f3547bce-d83f-4235-8222-438791bff5ec",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 18,
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
    isPopular: true
  }
];
