// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "5c4e7c12-a830-4458-b280-674516d4f221",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-787-225-2518",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "08bdc0e8-7e09-46db-8d58-1d077e4e39dd",
      title: "Interactive Magic",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "05c01ba4-a718-4860-ba8c-ef5943ff8b1c",
                "name": "Matthew Reeves",
                "role": "Escape Artist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/68.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          author: "Alice Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-48",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Antonio Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-313",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Gabriella Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-293",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Zoe Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-1005",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Keith Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-129",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Nicholas Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-736",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Darrell Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-460",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "11bd4605-e752-46b5-9d93-455b23f211fe",
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
    id: "5c4e7c12-a830-4458-b280-674516d4f221",
    category: "Magic Show",
    name: "Magic Workshop",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Magic Workshop performance times"
    },
    contact: {
      contactNumber: "+1-509-161-9067",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8a63eb8b-079b-4704-ba43-c946da92f99c",
      title: "Magic Workshop",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Magic Workshop performance times"
        }],
      performers: [        {
                "id": "8471a554-87a3-41bb-a2dc-63d2ff87b425",
                "name": "Stephen Bennett",
                "role": "Escape Artist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Mentalist",
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
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Anna Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-663",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Stephanie Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-535",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Ethan Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-260",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Samantha Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-462",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Evelyn Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-849",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Scarlett Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-1029",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Aaliyah Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-382",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Samuel Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-192",
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
    id: "5c4e7c12-a830-4458-b280-674516d4f221",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-299-808-7186",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c1522e97-9435-4c74-8c78-1d3f3896b008",
      title: "Escape Artist Performance",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "5014bbd7-b71d-43f6-acb3-fef6d690f09b",
                "name": "Eleanor Fletcher",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/79.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Stella Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Roy Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-925",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Joel Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-957",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Dennis Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-1050",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Anna Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-1075",
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
    id: "5c4e7c12-a830-4458-b280-674516d4f221",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "Thrilling escape artist performances and stunts",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-790-869-6791",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4e1556a4-ef31-4233-954f-9658710af452",
      title: "Family Magic Show",
      description: "Thrilling escape artist performances and stunts",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "04060156-a602-4a04-91c0-1c2bd065d805",
                "name": "Rachel Crawford",
                "role": "Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/70.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Aaliyah Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-702",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Kennedy Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-935",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Dylan Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-888",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Henry Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-255",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Jessica Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-612",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Dorothy Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-1059",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Keith Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-70",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Brooklyn Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-34",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Lerato Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-44",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "01e77709-874c-499c-a663-b982031cda88",
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
    isPopular: false
  },
  {
    id: "5c4e7c12-a830-4458-b280-674516d4f221",
    category: "Magic Show",
    name: "Card Magic Mastery",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Card Magic Mastery performance times"
    },
    contact: {
      contactNumber: "+1-875-342-6685",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0a1a0c18-c195-46ce-b41e-24337267f0b0",
      title: "Card Magic Mastery",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Card Magic Mastery performance times"
        }],
      performers: [        {
                "id": "38d9c247-ba71-4cfd-b8bf-c8a1c38731bc",
                "name": "Russell Harper",
                "role": "Escape Artist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/49.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The Card Magic Mastery show left me speechless. True artistry and skill on display.",
          author: "Amy Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-197",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Sophia Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-1032",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Joan Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-127",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Nancy Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-10",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Dylan Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-195",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Mia Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-113",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Samantha Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-104",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2370de45-48e3-4149-b1e8-5689e66ea3ac",
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
  },
  {
    id: "5c4e7c12-a830-4458-b280-674516d4f221",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-622-306-2918",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a816820f-c13f-4195-8be1-a9ab75c14a86",
      title: "Grand Illusion Spectacular",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "0b0a55b9-8bac-4581-beec-1d49567bf928",
                "name": "George Wallace",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/71.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
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
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Nomsa Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-253",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Sarah Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-221",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Wei Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-115",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Virginia Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-804",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Bella Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-167",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Mary Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-629",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Elijah Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "6",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Betty Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-366",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Layla Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-436",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Brooklyn Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-1038",
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
    isPopular: true
  }
];
