// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "ef26396d-8789-4163-b199-3c3d6cfe33a6",
    category: "Magic Show",
    name: "Close-Up Magic Experience",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Close-Up Magic Experience performance times"
    },
    contact: {
      contactNumber: "+1-630-134-6485",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6aa036de-9014-4dff-ba75-2ab0b5abab78",
      title: "Close-Up Magic Experience",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Close-Up Magic Experience performance times"
        }],
      performers: [        {
                "id": "22961676-b8bb-4b39-8ebe-cc3760109ab3",
                "name": "Chen Fox",
                "role": "Escape Artist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/72.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
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
          author: "Elizabeth Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-425",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Ariana Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-558",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Nora Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-554",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Priya Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-335",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Thandiwe Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-377",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Alexa Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-169",
        },
        {
          quote: "The Close-Up Magic Experience show left me speechless. True artistry and skill on display.",
          author: "Darrell Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-787",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Oliver Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-449",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Darrell Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-1057",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Terry Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-92",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "326f9219-3db9-4632-8262-1743d842f976",
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
    isPopular: false
  },
  {
    id: "ef26396d-8789-4163-b199-3c3d6cfe33a6",
    category: "Magic Show",
    name: "Magic & Variety Hour",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Magic & Variety Hour performance times"
    },
    contact: {
      contactNumber: "+1-959-653-8855",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1ba39418-dfc4-4616-a78f-128547f81602",
      title: "Magic & Variety Hour",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "63 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Magic & Variety Hour performance times"
        }],
      performers: [        {
                "id": "e511c138-6a31-4a95-85ce-9103b87c615b",
                "name": "Cynthia Watson",
                "role": "Mentalist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/82.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Amina Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-1055",
        },
        {
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Virginia Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-745",
        },
        {
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Carol Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-514",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Jessica Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Bella Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-56",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
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
    id: "ef26396d-8789-4163-b199-3c3d6cfe33a6",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-502-737-1267",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "03e6aa2e-9eea-4209-8d1b-7f9b7a25f468",
      title: "Escape Artist Performance",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: true,
        price: 28,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "b1658396-9897-4969-b6b2-42e00dccbfd8",
                "name": "Paul Parker",
                "role": "Comedy Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/30.jpg",
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
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Stephen Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-921",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Samantha Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Caroline Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-237",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Gary Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-216",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Juan Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-267",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Nicole Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-762",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Ronald Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-130",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Naomi Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-241",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Victoria Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-597",
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
    id: "ef26396d-8789-4163-b199-3c3d6cfe33a6",
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
      contactNumber: "+1-614-213-7904",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8d0f1851-504d-4389-bf5c-1d6b11192982",
      title: "Card Magic Mastery",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Card Magic Mastery performance times"
        }],
      performers: [        {
                "id": "e4774c88-8dd0-4a46-beca-3a996c1b9069",
                "name": "Skylar Nash",
                "role": "Escape Artist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/32.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Maya Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-895",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Keith Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-28",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ralph Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-606",
        },
        {
          quote: "The Card Magic Mastery show left me speechless. True artistry and skill on display.",
          author: "Marcus Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-537",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Carl Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-1047",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3e9d8960-f931-4813-a826-2aa5fb1f0ca3",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 17,
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
    id: "ef26396d-8789-4163-b199-3c3d6cfe33a6",
    category: "Magic Show",
    name: "Card Magic Mastery",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Card Magic Mastery performance times"
    },
    contact: {
      contactNumber: "+1-808-259-4228",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "52cb6eea-8707-4ab1-8863-5a72e1a03847",
      title: "Card Magic Mastery",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Card Magic Mastery performance times"
        }],
      performers: [        {
                "id": "aa194100-1a85-47c1-ad87-dd508cbc1ac0",
                "name": "Timothy Murray",
                "role": "Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/11.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Liam Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-866",
        },
        {
          quote: "The Card Magic Mastery show left me speechless. True artistry and skill on display.",
          author: "Ryan Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-908",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Lawrence Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-800",
        },
        {
          quote: "The Card Magic Mastery show left me speechless. True artistry and skill on display.",
          author: "Zola Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-268",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Sebastian Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-796",
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
    id: "ef26396d-8789-4163-b199-3c3d6cfe33a6",
    category: "Magic Show",
    name: "Stage Magic Extravaganza",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Stage Magic Extravaganza performance times"
    },
    contact: {
      contactNumber: "+1-441-619-7241",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a9e02266-0386-42ac-a2c2-538db4df9363",
      title: "Stage Magic Extravaganza",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: true,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Stage Magic Extravaganza performance times"
        }],
      performers: [        {
                "id": "5d17a8b1-b422-4067-a92f-7e561f24b223",
                "name": "Laura Porter",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/32.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Wei Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-901",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Brandon Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-740",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Russell Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-916",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Elena Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-186",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Olivia Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-193",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Melissa Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-414",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ec1246da-32fb-4ae0-b45d-83d307e8bbe2",
              "name": "Performance Photo",
              "description": "Photo with the magician",
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
