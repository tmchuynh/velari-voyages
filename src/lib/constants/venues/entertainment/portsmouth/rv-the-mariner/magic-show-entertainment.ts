// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "384ce9aa-86da-4af1-bae7-1096c32132bb",
    category: "Magic Show",
    name: "Close-Up Magic Experience",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Close-Up Magic Experience performance times"
    },
    contact: {
      contactNumber: "+1-402-438-7047",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ee3e7acc-0d3a-4665-bc7d-f228d3c5d5a3",
      title: "Close-Up Magic Experience",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Close-Up Magic Experience performance times"
        }],
      performers: [        {
                "id": "7899c13a-da2c-40e9-9917-be6bdd278fa9",
                "name": "Emily Reed",
                "role": "Mentalist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/22.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Comedy Magician",
                        "Mentalist",
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
          author: "Jane Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-995",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Lily Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-46",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Gary Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-489",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Robert Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-1072",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "John Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-487",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Emily Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-471",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Terry Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-1043",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Frank Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-123",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Steven Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-317",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Frank Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-707",
        }
      ],
      hasVIPSeating: true,
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
    id: "384ce9aa-86da-4af1-bae7-1096c32132bb",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-538-326-5400",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e3d442f8-0e3a-4866-ab71-08e352af09a4",
      title: "Comedy Magic Show",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "a1392560-bf95-41f0-9c0c-2402734d180f",
                "name": "Samuel Parker",
                "role": "Mentalist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Jack Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-1059",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Victor Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-588",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Harold Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-1018",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Zola Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-179",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Catherine Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-710",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Daniel Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-965",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Thandiwe Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-1032",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Nora Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-1024",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "324b0b9d-38cf-4ff5-9ce4-87fc9c35a1a1",
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
    isPopular: true
  },
  {
    id: "384ce9aa-86da-4af1-bae7-1096c32132bb",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Large-scale stage magic with elaborate props and illusions",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-381-750-2935",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "637d7fd3-7cd3-4bc2-adb9-0433791da280",
      title: "Escape Artist Performance",
      description: "Large-scale stage magic with elaborate props and illusions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "28eb04f9-8f81-4781-9a63-b422e9f0f0d1",
                "name": "Thandiwe Crawford",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/2.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "James Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-527",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Eleanor Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-391",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Avery Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-2",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Adeline Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-650",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Eric Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-463",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Juan Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-469",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Joe Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-612",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Adam Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-578",
        }
      ],
      hasVIPSeating: true,
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
    id: "384ce9aa-86da-4af1-bae7-1096c32132bb",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-402-576-9242",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "99efe354-68c6-4d1e-8a76-1c9a33707c0f",
      title: "Escape Artist Performance",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "71 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "353dac89-7a63-4910-ae1d-15d69748414e",
                "name": "Isabella Maxwell",
                "role": "Escape Artist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
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
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Ellie Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-402",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jane Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-954",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Scarlett Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-1027",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Brian Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-212",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Randy Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-224",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Austin Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-20",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Catherine Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-62",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Logan Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-220",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Matthew Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-162",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Maria Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-298",
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
    id: "384ce9aa-86da-4af1-bae7-1096c32132bb",
    category: "Magic Show",
    name: "Magic Workshop",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Magic Workshop performance times"
    },
    contact: {
      contactNumber: "+1-715-686-9894",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "65b3f771-8164-4ffe-ab2e-9feea6408af6",
      title: "Magic Workshop",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Magic Workshop performance times"
        }],
      performers: [        {
                "id": "77c7199b-b09c-43f3-acc1-3cbd6e5a7177",
                "name": "Gabriel Baker",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/69.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Scarlett Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Alexander Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-803",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Aria Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-276",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Barbara Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-363",
        },
        {
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Russell Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-944",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Sofia Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-371",
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
    id: "384ce9aa-86da-4af1-bae7-1096c32132bb",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-263-607-9391",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9e58c869-2a55-46ac-9d64-d3c3cea6d0dc",
      title: "Grand Illusion Spectacular",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "40ef2f80-38b9-4322-9ff1-6ed0586096b7",
                "name": "Jesse Clark",
                "role": "Comedy Magician",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Priya Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-393",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Rajesh Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-651",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Walter Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-544",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Virginia Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-990",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Elena Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-28",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Amy Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-784",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ethan West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-689",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Ronald Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-502",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Maria Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-641",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e9483063-8b75-4f71-8a2e-064eca2c2033",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 18,
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
    isPopular: false
  },
  {
    id: "384ce9aa-86da-4af1-bae7-1096c32132bb",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-551-568-2348",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2eb10b3f-9f2c-4edb-88bd-b71994a075b4",
      title: "Comedy Magic Show",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "43952acf-49c1-4087-86a3-15f9ee4fe096",
                "name": "Roger Gardner",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Aaron Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-725",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Zachary Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-156",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Aaron Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-828",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "David Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-708",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ronald Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-281",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Lawrence Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-987",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Kinsley Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-165",
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
    id: "384ce9aa-86da-4af1-bae7-1096c32132bb",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-325-270-6847",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b66ac32a-f67c-4796-8940-c0d5f5e07a09",
      title: "Escape Artist Performance",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "8caa1588-fcda-45f7-bc8d-1c280fa99f38",
                "name": "Kennedy Grant",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/45.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Miguel Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-724",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Olivia Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-121",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Catherine Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-84",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lisa Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-378",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Scarlett Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-231",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Aaron West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-379",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Lawrence Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-643",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Priya Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-928",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Daniel Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-549",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Nancy Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-945",
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
  }
];
