// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Intimate close-up magic performed right before your eyes",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-584-817-3053",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "54d981ab-85fc-497d-98e1-114e0c9cf09b",
      title: "Grand Illusion Spectacular",
      description: "Intimate close-up magic performed right before your eyes",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "1fec9960-b860-4c7f-a1bd-4a04e34cf3b7",
                "name": "Catherine Knight",
                "role": "Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/57.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Leah Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-865",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Brian Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-686",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Jason Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-403",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Elijah Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-680",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Matthew Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-361",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Catherine Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-416",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Barbara Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-155",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Madelyn Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-1034",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jonathan Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-310",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Douglas Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-535",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d5a6e3a7-61a9-4b09-879d-42a417f5341b",
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
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-412-345-5628",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bf69ac40-c439-4ca8-9b52-f0653570fb3d",
      title: "Mind Reading & Mentalism",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "70 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "5547aa0f-2f93-4d29-8d29-16b3fda7eee7",
                "name": "Skylar Parker",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Gary Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-796",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Bruce Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-208",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Raymond Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-514",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Jonathan Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-199",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Alexander Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-661",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Angela Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-735",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Billy West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-654",
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
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-738-782-7908",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "29a8d40a-59f2-4e04-8c55-8f1f6a2608c9",
      title: "Family Magic Show",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "65 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "82a4bc7e-94df-463d-a4da-6582c4953154",
                "name": "Laura Dixon",
                "role": "Illusionist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/41.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Mentalist",
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
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Rachel Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-155",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Bryan Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-751",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Randy Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-439",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Brooklyn Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-941",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Linda Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-899",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jane Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-391",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0fb1755a-b6ba-40e1-86c1-da7b19b948c5",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 34,
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
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
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
      contactNumber: "+1-372-540-4819",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "053befb4-c865-41ee-9023-fc99c877e760",
      title: "Comedy Magic Show",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 36,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "0cb0de07-cd11-4f6f-bef7-8be5c45e7788",
                "name": "Christian Murray",
                "role": "Illusionist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/29.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Escape Artist",
                        "Magician",
                        "Comedy Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Raymond Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-1079",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Sandra Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-630",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Gabriel Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-589",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Abigail Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-656",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Donna Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-638",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Joan Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-286",
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
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    category: "Magic Show",
    name: "Stage Magic Extravaganza",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Stage Magic Extravaganza performance times"
    },
    contact: {
      contactNumber: "+1-813-721-3528",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f198c879-88fa-4456-86e2-83691342fbbb",
      title: "Stage Magic Extravaganza",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Stage Magic Extravaganza performance times"
        }],
      performers: [        {
                "id": "15b949cb-4a98-4104-883d-0be7b61defa8",
                "name": "Brandon Grant",
                "role": "Comedy Magician",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/65.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Jesse Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-510",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Jessica Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-37",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Angela Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-659",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Aaliyah Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-276",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Christine Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Christian West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-116",
        },
        {
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Stephanie West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-856",
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
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-510-264-6599",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "aef16659-5aea-46da-a267-12d19d4efe0e",
      title: "Comedy Magic Show",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "32a07aa0-3352-497f-ae6a-b4e82c06f8cb",
                "name": "Harry Harper",
                "role": "Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/74.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Victoria Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-734",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Kennedy Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-910",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Nicholas Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-998",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Samuel Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-788",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Audrey Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-860",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Amina Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-227",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Andrew Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-57",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7a85b811-861f-4e26-9d71-94e997aed8be",
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
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    category: "Magic Show",
    name: "Close-Up Magic Experience",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Close-Up Magic Experience performance times"
    },
    contact: {
      contactNumber: "+1-719-257-7856",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0e1b83a4-1274-40c3-8d32-7f7041b91721",
      title: "Close-Up Magic Experience",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: true,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Close-Up Magic Experience performance times"
        }],
      performers: [        {
                "id": "5b82dc49-cad9-4bc2-85cb-6da9196c1830",
                "name": "Darrell Morgan",
                "role": "Escape Artist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/10.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Illusionist",
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
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Carlos Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-1010",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Bryan Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-81",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Carl Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-678",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Oliver Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-47",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Anna Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-303",
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
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-412-815-5047",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "01e286c1-f944-43b8-a845-f2f49f35df9d",
      title: "Comedy Magic Show",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "eb9e9aa1-156c-4e38-8592-94457f567059",
                "name": "Zachary Hudson",
                "role": "Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Claire Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-905",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Carlos Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-90",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Emma Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-708",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Abigail Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-970",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Miguel Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-862",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Joan Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-126",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Elijah Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-322",
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
    isPopular: true
  },
  {
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-771-955-5200",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cec08b5d-b5db-4f33-956f-5fdf7271c453",
      title: "Escape Artist Performance",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "94 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "3fc249cd-19c6-480d-a859-f79396508d01",
                "name": "Gabriel Graham",
                "role": "Comedy Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Jennifer Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-464",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Isabella Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-648",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Layla Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-88",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Ryan Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-584",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Chloe Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-33",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Carol Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-147",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Catherine Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Barbara Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-672",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Samantha Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Maria Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-987",
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
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      }
    ],
    isPopular: false
  }
];
