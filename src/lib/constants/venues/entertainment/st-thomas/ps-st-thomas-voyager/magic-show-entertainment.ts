// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "0dde19e1-77ac-4442-adfc-59454a0243e4",
    category: "Magic Show",
    name: "Magic Workshop",
    description: "Learn basic magic tricks in this hands-on workshop",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Magic Workshop performance times"
    },
    contact: {
      contactNumber: "+1-448-609-4747",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "00c067da-c0e2-4c1b-a7a7-0ab5c0da5245",
      title: "Magic Workshop",
      description: "Learn basic magic tricks in this hands-on workshop",
      tickets: {
        isRequired: true,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "62 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Magic Workshop performance times"
        }],
      performers: [        {
                "id": "d227e181-ec44-448c-9ea2-99e0d2ec4c51",
                "name": "Antonio Dean",
                "role": "Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Comedy Magician",
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
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Bryan Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-807",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Gregory Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-226",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Joel Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-819",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Liam Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-783",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Dennis Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-995",
        },
        {
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Ethan Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-707",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3ff8a4a6-1210-43cf-9643-4d11e3cc3b9b",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 27,
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
    id: "0dde19e1-77ac-4442-adfc-59454a0243e4",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Learn basic magic tricks in this hands-on workshop",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-439-980-1345",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d77f00ac-323e-419f-aefb-2c27c8f27ae8",
      title: "Comedy Magic Show",
      description: "Learn basic magic tricks in this hands-on workshop",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "62 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "31dc1665-0f40-4250-94f7-6187e012d13e",
                "name": "Chen Morgan",
                "role": "Mentalist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/34.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Magician",
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
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Virginia Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-447",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Sofia Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-376",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Naomi Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-782",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jeffrey Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-965",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Gabriel Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-1039",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Alan Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-111",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Richard Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-714",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Nicholas Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-23",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Joel Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-464",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d253ca8d-e55e-423c-9ea4-7144c52a651f",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 22,
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
    isPopular: true
  },
  {
    id: "0dde19e1-77ac-4442-adfc-59454a0243e4",
    category: "Magic Show",
    name: "Magic Workshop",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Magic Workshop performance times"
    },
    contact: {
      contactNumber: "+1-944-588-6314",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a39c4094-35f8-4b08-8061-d94a06f34b83",
      title: "Magic Workshop",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Magic Workshop performance times"
        }],
      performers: [        {
                "id": "e6b3f681-37d7-44ae-8b2a-63b40853423d",
                "name": "Walter Wallace",
                "role": "Mentalist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Harold Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-821",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Zola Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-103",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Angela Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-863",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Russell Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-1023",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Barbara Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-789",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Emily Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-868",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Angela Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-80",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Abigail Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-679",
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
    id: "0dde19e1-77ac-4442-adfc-59454a0243e4",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Thrilling escape artist performances and stunts",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-688-503-7560",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6aa823e0-051e-4bc6-b5b5-2940e15e933c",
      title: "International Magic Acts",
      description: "Thrilling escape artist performances and stunts",
      tickets: {
        isRequired: true,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "2d5ae0db-e39a-4209-86e1-13cb0874fe97",
                "name": "Elizabeth Jennings",
                "role": "Illusionist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/14.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
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
          author: "Michelle Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-389",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Adeline Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-619",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Dylan Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-445",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Jack Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-384",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Edward Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-251",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Chen Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Raymond Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-457",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a5012e3f-efe8-403b-ba0a-383cbc5ad640",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 9,
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
    id: "0dde19e1-77ac-4442-adfc-59454a0243e4",
    category: "Magic Show",
    name: "Magic & Variety Hour",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Magic & Variety Hour performance times"
    },
    contact: {
      contactNumber: "+1-907-272-3444",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6d4fe3d7-a1e3-42fa-9069-26bb4ad5be83",
      title: "Magic & Variety Hour",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "90 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Magic & Variety Hour performance times"
        }],
      performers: [        {
                "id": "9de072d1-9d48-490f-9483-cd54c03e5511",
                "name": "Thabo Baker",
                "role": "Illusionist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/42.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Magician",
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
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Mason Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-588",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Charlotte Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-252",
        },
        {
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Oliver Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-1026",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Brandon Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-845",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Bruce Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-297",
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
    isPopular: true
  },
  {
    id: "0dde19e1-77ac-4442-adfc-59454a0243e4",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-972-680-9552",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3c8a946b-e9c9-4177-a198-d753713b0060",
      title: "International Magic Acts",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "5817c032-2611-432a-853d-3e36ebeaf31b",
                "name": "Elijah Ellis",
                "role": "Illusionist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/74.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Thabo Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-105",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Eleanor Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-417",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Helen Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-294",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Samantha Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-282",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Matthew Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-341",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Marcus Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-481",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "55196320-6078-4f73-a0ee-05afe9b4ecf7",
              "name": "Performance Photo",
              "description": "Photo with the magician",
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
    isPopular: false
  }
];
