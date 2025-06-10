// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-484-585-7170",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "67761365-b313-4233-91da-4c67867fe853",
      title: "Escape Artist Performance",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "acade9bf-0771-441a-8435-d45bc28096e7",
                "name": "Ariana Fox",
                "role": "Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/10.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          author: "Sarah Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-1034",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Sarah West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-467",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jesse Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-426",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Rajesh Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-188",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Bryan Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-531",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "William Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-6",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "006cdca1-4592-45b8-8770-4b6f801a7056",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 30,
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
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-331-597-7055",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d6d6f7f5-7d12-45f5-b559-f4a11370fac2",
      title: "International Magic Acts",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: true,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "648a03c7-c6b9-46cd-ad18-484e3446512c",
                "name": "Albert Knight",
                "role": "Illusionist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/34.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Jessica Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-21",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Sofia Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-398",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Liam Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-377",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Virginia Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-1007",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Tyler Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-65",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Joshua Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-511",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0aa8aa5f-8a42-424f-99fe-1ad3b7f35990",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 21,
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
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-504-585-5442",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ec050658-fe7d-4486-a8fe-d5c70abde9eb",
      title: "Escape Artist Performance",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "92 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "d707b079-3a28-4bef-9485-ac3b112ce852",
                "name": "Joshua Fletcher",
                "role": "Mentalist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Comedy Magician",
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Nicholas Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Jordan Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-56",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Katherine Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-778",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Claire Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-1052",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Eleanor Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-81",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7d8828e9-faed-4a5b-86bc-04a9a1c44bbb",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 35,
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
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Intimate close-up magic performed right before your eyes",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-660-108-5283",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d27907f3-bb00-426e-9932-15c3fb124000",
      title: "Mind Reading & Mentalism",
      description: "Intimate close-up magic performed right before your eyes",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "96b58001-b009-488e-b03f-e6040fddb475",
                "name": "Thomas Mason",
                "role": "Escape Artist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Laura Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-82",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Johnny Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-809",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Randy Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-38",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Brian Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-545",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Nicholas Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-248",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jose Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-170",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Amelia Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-212",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Christine Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-1077",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Jacob Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-635",
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
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-208-143-4121",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6fc7f2d2-c940-440b-967a-aef6592107f7",
      title: "Escape Artist Performance",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "66bc7468-c0ec-4f22-bf90-53a6b7e2448d",
                "name": "Elijah West",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/44.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "James Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-213",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "George Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-278",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Priya Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-437",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Jason Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Cynthia Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-8",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Melissa Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-816",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Layla Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-875",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Steven Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-882",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Allison Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-315",
        }
      ],
      hasVIPSeating: false,
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
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    category: "Magic Show",
    name: "Magic & Variety Hour",
    description: "Learn basic magic tricks in this hands-on workshop",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Magic & Variety Hour performance times"
    },
    contact: {
      contactNumber: "+1-410-835-3952",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "08a9f930-1682-4779-a8ef-865086b3d850",
      title: "Magic & Variety Hour",
      description: "Learn basic magic tricks in this hands-on workshop",
      tickets: {
        isRequired: true,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Magic & Variety Hour performance times"
        }],
      performers: [        {
                "id": "0dbf2eab-b090-4817-ba0c-2030b46d1104",
                "name": "Pamela Porter",
                "role": "Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Skylar Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-1065",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Amy Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-925",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "William Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-459",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Madelyn Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-300",
        },
        {
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Madelyn Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-435",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Harold Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-800",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Douglas Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-210",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Sean Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-779",
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
    isPopular: false
  },
  {
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-545-672-3851",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "693b941d-f84c-499d-b6b9-0ff70b5882e3",
      title: "Interactive Magic",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: true,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "1abcf134-29a8-4eff-a3f3-dc400c9dbb8f",
                "name": "Jonathan Mason",
                "role": "Illusionist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Gary Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Kenneth Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-1063",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Joshua Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Carol Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-540",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Billy Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-725",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Claire West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-620",
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
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-852-599-4757",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ce7e8285-450d-4dc5-950b-accf5b8fa7fc",
      title: "Escape Artist Performance",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "36151abb-ef51-41e1-816a-f6f21f84b972",
                "name": "Gabriella Dunn",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Illusionist",
                        "Magician",
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Genesis Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-288",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Maria Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-722",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Eleanor Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-330",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Susan Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-8",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Amelia Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-75",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Joseph Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-998",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Kevin Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-1043",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Scarlett Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-472",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Michelle Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-874",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9117d428-cf29-490f-b371-d38748278780",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 25,
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
  }
];
