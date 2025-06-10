// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "aff47719-56f8-4cd6-b9f1-8d67ab37781e",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Masterful card tricks and sleight of hand demonstrations",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-945-662-7111",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "59d592ff-18bb-46c8-a864-5812eb3502ca",
      title: "Comedy Magic Show",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "c1313f3a-00dd-4458-b63c-dbe8cbe96137",
                "name": "Austin Coleman",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Walter Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-152",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Maya Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Timothy Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-757",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Nora Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Billy Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-617",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "David Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-886",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lawrence Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-35",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c25d8f1e-b6cc-4dad-a753-d30275193d12",
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
    id: "aff47719-56f8-4cd6-b9f1-8d67ab37781e",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Family-friendly magic show with audience participation",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-288-208-9029",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "aec42c76-4ba5-485f-937a-328cc76d1a5c",
      title: "Escape Artist Performance",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "90 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "29268b94-c978-4ee7-b8de-4ceabee3d63a",
                "name": "Brenda Dunn",
                "role": "Illusionist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/79.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Catherine Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-481",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Katherine West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-987",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Richard Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-628",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Chloe Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-1059",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Joan Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-1036",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ashley Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-744",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Kinsley Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-167",
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
    id: "aff47719-56f8-4cd6-b9f1-8d67ab37781e",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Mysterious mind reading and mentalism demonstrations",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-532-382-5944",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8471b42c-d4e5-4487-ac58-94319527616c",
      title: "Interactive Magic",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "c0c0dd8e-cf9a-4db7-ae17-20fd53ab9c04",
                "name": "Hannah Day",
                "role": "Illusionist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/34.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Mary Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-184",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Jack Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-1016",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Michelle Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-204",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Katherine Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-767",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Austin Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-421",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Susan Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Mateo Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-603",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Ronald Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-105",
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
    id: "aff47719-56f8-4cd6-b9f1-8d67ab37781e",
    category: "Magic Show",
    name: "Stage Magic Extravaganza",
    description: "Mysterious mind reading and mentalism demonstrations",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Stage Magic Extravaganza performance times"
    },
    contact: {
      contactNumber: "+1-358-136-3065",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b7fb8fb5-ef82-4293-8982-0b028dfab15a",
      title: "Stage Magic Extravaganza",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Stage Magic Extravaganza performance times"
        }],
      performers: [        {
                "id": "cb0ab775-4469-4b8b-b58e-aa1400799e05",
                "name": "Joshua Hall",
                "role": "Comedy Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Genesis Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-573",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Charlotte Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-753",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "David Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-1011",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Anna Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-955",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Sandra Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-73",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Dennis Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-794",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Joshua Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Riley Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-987",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Kyle Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-769",
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
    id: "aff47719-56f8-4cd6-b9f1-8d67ab37781e",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Masterful card tricks and sleight of hand demonstrations",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-751-882-1360",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "56ad0202-b116-4cbd-b26f-778c7003afa7",
      title: "Interactive Magic",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "7d4abf8e-27df-47ee-9764-eeee6ea7c417",
                "name": "Valentina Hall",
                "role": "Illusionist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Isabella Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-520",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Isabella Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-380",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Bryan Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-823",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Chloe Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-910",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Maya Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-196",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c592c95e-39d2-4c52-b7dd-d5fc984b5ba9",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 36,
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
    id: "aff47719-56f8-4cd6-b9f1-8d67ab37781e",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Masterful card tricks and sleight of hand demonstrations",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-913-454-6858",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "77069c20-e3ff-420d-ad55-0e7f9a02e1e3",
      title: "Interactive Magic",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "7b9f0180-5b94-4c15-9eea-3d4c6e7657b9",
                "name": "Donna Warren",
                "role": "Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/66.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Rajesh Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-978",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Lily Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-1016",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Richard Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-290",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Paul Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-394",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Mason Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-804",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Sarah Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-980",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Scarlett Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-416",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Patrick Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-819",
        },
        {
          quote: "The Interactive Magic show left me speechless. True artistry and skill on display.",
          author: "Ellie Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-113",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Scarlett Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-955",
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
    id: "aff47719-56f8-4cd6-b9f1-8d67ab37781e",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Thrilling escape artist performances and stunts",
    imageUrl: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-428-652-9450",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0ed851bb-3f0f-4121-a564-0b6aefc52370",
      title: "Escape Artist Performance",
      description: "Thrilling escape artist performances and stunts",
      tickets: {
        isRequired: true,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "8afc29c1-7a92-403f-bf99-daf797d2c110",
                "name": "Christine Douglas",
                "role": "Comedy Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Sean Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-903",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Walter Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-807",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Peter Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-977",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Avery Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-342",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Sandra Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-706",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Catherine Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-298",
        }
      ],
      hasVIPSeating: true,
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
  }
];
