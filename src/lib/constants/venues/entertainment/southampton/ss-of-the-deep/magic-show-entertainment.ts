// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "a296012f-b738-4c4a-9872-97451c9e26d7",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Learn basic magic tricks in this hands-on workshop",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-647-271-2563",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6c787898-7afc-4b18-8604-2e498bcb0a0d",
      title: "Interactive Magic",
      description: "Learn basic magic tricks in this hands-on workshop",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "69 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "e637d569-505d-4a84-96da-4629f5381cd8",
                "name": "Jason Cooper",
                "role": "Mentalist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/2.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Illusionist",
                        "Comedy Magician",
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
          author: "Andrew Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-1014",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Michael Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-643",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Maya Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-289",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Margaret Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-982",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Patrick Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-163",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Elijah Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-578",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Louis Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-502",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ryan Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-414",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Walter Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-532",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Johnny Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-7",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "7000f776-8282-485c-a533-cf92e66907c3",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 26,
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
    id: "a296012f-b738-4c4a-9872-97451c9e26d7",
    category: "Magic Show",
    name: "Close-Up Magic Experience",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Close-Up Magic Experience performance times"
    },
    contact: {
      contactNumber: "+1-343-155-7490",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "54bec374-d821-41f5-a0d6-222822a03a5a",
      title: "Close-Up Magic Experience",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Close-Up Magic Experience performance times"
        }],
      performers: [        {
                "id": "76e4ac17-3ade-4f2a-9239-1c912939b421",
                "name": "Mateo Griffin",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Escape Artist",
                        "Mentalist",
                        "Comedy Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Zola Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-70",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Scott Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Melissa Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-641",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Evelyn Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-675",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Blake Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Jane Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-903",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Ashley Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-516",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Wei Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-711",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2eba0277-b602-4a65-ab1f-95986963f51a",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 23,
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
    isPopular: true
  },
  {
    id: "a296012f-b738-4c4a-9872-97451c9e26d7",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-301-642-9086",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "91aad0bf-d4df-4e06-81d3-8d220a65f48f",
      title: "International Magic Acts",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "96 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "418167bf-d4dd-456f-9a1b-8ce5b4b7dcf8",
                "name": "Gary Curtis",
                "role": "Mentalist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/60.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Valentina Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-825",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Adeline Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-1033",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Samantha Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-897",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Walter Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-165",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Zola Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Wayne Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Zachary Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-370",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Douglas Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Jacob Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-284",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4c91515b-83f0-4284-b126-9f01f7bfadee",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 34,
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
    id: "a296012f-b738-4c4a-9872-97451c9e26d7",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-898-314-4070",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d8de3e73-200b-4985-907e-7772feb6e3a5",
      title: "Mind Reading & Mentalism",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "fce8ae1e-c1fb-4d70-a32a-cbd9ed27bc79",
                "name": "Billy Holloway",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/37.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Jack Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-531",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Terry Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-469",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Chen Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-902",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Carlos Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-1006",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Logan Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-331",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Blake Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-919",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c4b54bc4-8171-4e6d-a316-0b6eb50cba23",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 18,
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
    id: "a296012f-b738-4c4a-9872-97451c9e26d7",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-239-318-6850",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e8129efb-3033-4b1a-b557-329f93e0d7f7",
      title: "International Magic Acts",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "65 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "2f1b4587-366a-4e41-9e08-77a5269d7d9f",
                "name": "Julie Graham",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/73.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Magician",
                        "Illusionist",
                        "Comedy Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Antonio Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-693",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Zachary Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-832",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Virginia Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-513",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Adam Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-226",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Gerald Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-201",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Matthew Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-499",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Noah Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-611",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Zola Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-787",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    isPopular: true
  },
  {
    id: "a296012f-b738-4c4a-9872-97451c9e26d7",
    category: "Magic Show",
    name: "Stage Magic Extravaganza",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Stage Magic Extravaganza performance times"
    },
    contact: {
      contactNumber: "+1-244-626-1841",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1a144a10-8b10-42b9-98a5-fa5970838704",
      title: "Stage Magic Extravaganza",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Stage Magic Extravaganza performance times"
        }],
      performers: [        {
                "id": "41ed0a86-fd4e-4fd3-b172-2a760eac9152",
                "name": "Austin West",
                "role": "Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/76.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Nancy Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-736",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Linda Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-75",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Alan Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-385",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Samantha Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-189",
        },
        {
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Julie Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-117",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Nicholas Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-984",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "William Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-737",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Susan Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-799",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "567f3712-071a-4b95-99ef-46cfdc065785",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 22,
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
    id: "a296012f-b738-4c4a-9872-97451c9e26d7",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Large-scale stage magic with elaborate props and illusions",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-328-279-3488",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e234638e-e3b1-4c3a-9070-414da4533703",
      title: "Mind Reading & Mentalism",
      description: "Large-scale stage magic with elaborate props and illusions",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "eaaee741-2d46-4b0d-b8a9-d187464afd3d",
                "name": "Kenneth Bennett",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Paul Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-808",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Paul Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-885",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Elizabeth Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-407",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ella Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-809",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Joel Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-640",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Avery Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-245",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Joan Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-1062",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Rebecca Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-45",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "834f8280-7021-49dd-bea8-5e0c00a89608",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 32,
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
