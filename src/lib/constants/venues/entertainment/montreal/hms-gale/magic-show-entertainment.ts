// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-505-338-6610",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8388eb3a-94e7-4b70-8b47-b8992fc4b592",
      title: "Comedy Magic Show",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "83 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "ab82b139-0487-440b-b8e0-687fe450c238",
                "name": "Nathan Jennings",
                "role": "Illusionist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Darrell Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-989",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Kevin Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-1009",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Eugene Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-43",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Gabriel Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-312",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Madelyn Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-678",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Joseph Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-608",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Maria Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-108",
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
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "Card Magic Mastery",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Card Magic Mastery performance times"
    },
    contact: {
      contactNumber: "+1-490-245-5528",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ea9141a6-7bc9-43df-a7e5-feb02bbcc4e1",
      title: "Card Magic Mastery",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Card Magic Mastery performance times"
        }],
      performers: [        {
                "id": "14fabf9e-0643-4bf9-adad-0b8482ecf59d",
                "name": "Victor Warren",
                "role": "Mentalist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/11.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Peter Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-791",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Thabo Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-186",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Jonathan Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-867",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Allison Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-619",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Nicole Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-140",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Zola Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-764",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Juan Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-636",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Sean West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-394",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Ella Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-394",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Melissa Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-857",
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
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-952-574-5016",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8c4c6c2f-6d12-4ad9-8b2c-f940cedc0cfa",
      title: "Mind Reading & Mentalism",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "e131a601-9a71-4645-a80e-b0ec09c69e8d",
                "name": "Christopher Keller",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Claire Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-202",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Carl Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-109",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lisa Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-431",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lerato Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-1029",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Peter Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-776",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Kevin Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-303",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Priya Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-968",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Brooklyn Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-533",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Samantha Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-243",
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
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
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
      contactNumber: "+1-206-582-4169",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e5924e47-7503-4811-b028-688105ed0362",
      title: "Grand Illusion Spectacular",
      description: "Intimate close-up magic performed right before your eyes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "9536c3b9-cc54-45c1-b00a-1c10e4788132",
                "name": "Sophia Marshall",
                "role": "Illusionist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Bobby Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-689",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Luis Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-631",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Patricia Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-268",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Diego Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-567",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Diego Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-321",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Benjamin Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-96",
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
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-397-219-5246",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "20225725-8552-49a9-b203-d56d282a4dfb",
      title: "Mind Reading & Mentalism",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "9a8808d7-9105-4f60-b0e5-f06474337937",
                "name": "Mary Hunter",
                "role": "Illusionist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/63.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
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
          author: "Barbara Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-253",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Isabella Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-177",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Oliver Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-300",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Harry Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-50",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Daniel Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-688",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Ellie Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-537",
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
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-285-531-8907",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "164ce3dd-ee9d-4d5b-8c73-11e186865bbe",
      title: "International Magic Acts",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "a09304ef-c501-430c-a8db-c7a8616289b1",
                "name": "Matthew Marshall",
                "role": "Illusionist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/20.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
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
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Noah Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-709",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Isabella Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-20",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Dennis Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-978",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Claire Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-314",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Donna West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-684",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ella Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-550",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Adam Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-936",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Gerald Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-834",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Christine Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-1036",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Maya Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-1079",
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
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "Card Magic Mastery",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Card Magic Mastery performance times"
    },
    contact: {
      contactNumber: "+1-707-425-4461",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6457b394-873b-486e-a9ce-8ef28533d662",
      title: "Card Magic Mastery",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: true,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "110 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Card Magic Mastery performance times"
        }],
      performers: [        {
                "id": "7a6d4a7c-70f3-44d7-980b-dd60f7b06fd2",
                "name": "Skylar Hudson",
                "role": "Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Ryan Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-56",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Larry Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-709",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Ashley Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-268",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Willie Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-1061",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Aaron Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-430",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Savannah Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-1045",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Helen Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-181",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Brenda Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-103",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f5606f84-832a-424f-973c-9765a9b7e5cc",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 27,
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
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-548-366-8470",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d14a52f3-5a1f-4d6d-89a0-1c926a7fd4d1",
      title: "Comedy Magic Show",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "d7db8c77-2658-4ca3-a0c1-ad0c2daca640",
                "name": "Oliver Griffin",
                "role": "Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Comedy Magician",
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
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Brooklyn Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-665",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Angela Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-395",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Tyler Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-611",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Brooklyn Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-823",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Edward Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-99",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Alexander Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-8",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "John Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-389",
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
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-449-202-8695",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6c72af32-fcf5-4287-a740-955620f54c0d",
      title: "Escape Artist Performance",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "5c05ce6a-9824-4ce5-9b65-cfdeec5a93a0",
                "name": "Arthur Dixon",
                "role": "Comedy Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/6.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Victoria Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-538",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Brandon Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-867",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Richard Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-12",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Mia Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-362",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Willie Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Chen Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-338",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Michael Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-908",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Matthew Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-528",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Sebastian Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-277",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Katherine Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-603",
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
  },
  {
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-719-975-1660",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "975f4559-3a74-41b9-a402-1071cf7a4f19",
      title: "Mind Reading & Mentalism",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "30f7f214-ea28-477b-97a3-f6080e36ec6a",
                "name": "Oliver Parker",
                "role": "Comedy Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Russell Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-490",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Amina Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-261",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Joel Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-540",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Samantha Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-677",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Emma Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-921",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "74aefcc7-6c77-40c8-8414-194305953c4f",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 26,
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
