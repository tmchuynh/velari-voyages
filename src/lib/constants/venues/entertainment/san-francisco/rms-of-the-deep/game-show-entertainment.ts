// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "3c80861b-e5e1-4464-9e44-9d25afad5d4a",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-536-310-4834",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1e317fb9-4839-40ae-8b9a-3f4540da9ec8",
      title: "Battle of the Sexes",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "f1230e31-25dd-4c64-b435-c297f5057f05",
                "name": "Jordan Fox",
                "role": "Trivia Expert",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Entertainment Coordinator",
                        "Trivia Expert"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What a fun interactive experience! The Battle of the Sexes got everyone involved.",
          author: "Allison Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-398",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Sofia Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-569",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Priya Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-461",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Naomi Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-569",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "James Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-1011",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Christopher Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-136",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gregory Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-252",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "39618fcc-cde0-4443-b98d-23b5468394b3",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 4,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      },
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      }
    ],
    isPopular: true
  },
  {
    id: "3c80861b-e5e1-4464-9e44-9d25afad5d4a",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-543-632-2239",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6d312423-e14a-4383-8364-eb9289272d91",
      title: "Newlywed Game",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "15cd59cb-56aa-4bc3-a0ae-0966b316d736",
                "name": "Gabriel Maxwell",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Assistant Host",
                        "Game Show Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Dorothy Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-586",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Thomas Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-38",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Kennedy Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-904",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Blake Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-500",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Stephanie Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-232",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Victor Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-585",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "09a3f721-5852-4ca5-b04b-6e78740eb104",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 15,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      },
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      }
    ],
    isPopular: true
  },
  {
    id: "3c80861b-e5e1-4464-9e44-9d25afad5d4a",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-738-503-7170",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e604b708-7377-4e6c-8f9d-0a56d62377d4",
      title: "Cruise Ship Trivia",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: true,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "8e31338b-b48d-40d4-b875-532fcda67268",
                "name": "Rachel Price",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/20.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Trivia Expert",
                        "Assistant Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Melissa Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-606",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Carol Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-867",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jacob Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-69",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Brooklyn Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-649",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Oliver Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Lisa Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-1042",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Randy Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-1002",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Brian Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-318",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Harold Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-747",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      },
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      }
    ],
    isPopular: true
  },
  {
    id: "3c80861b-e5e1-4464-9e44-9d25afad5d4a",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-495-273-6700",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "db9a100f-03ce-48d1-af3b-83b272a28f91",
      title: "Family Feud at Sea",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "3de4363a-3ec2-48a3-97b9-369e7389e3e3",
                "name": "Randy Campbell",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Game Show Host",
                        "Assistant Host",
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Dylan Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-239",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Deborah Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-700",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Billy Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-1042",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Valentina Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-1043",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Amy Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-80",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Rachel Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-637",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Charlotte Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-780",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Juan Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-419",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Roger Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-1081",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      },
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      }
    ],
    isPopular: false
  },
  {
    id: "3c80861b-e5e1-4464-9e44-9d25afad5d4a",
    category: "Game Show",
    name: "Team Challenge",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-601-731-2668",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8533df2f-b418-4bb8-b889-967662848bfb",
      title: "Team Challenge",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "18dce1d2-e482-4450-9790-d9ddd34ff4fc",
                "name": "Elizabeth Henderson",
                "role": "Entertainment Coordinator",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/31.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Entertainment Coordinator",
                        "Trivia Expert"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Dennis Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-225",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Christopher Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-757",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Alan Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-200",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Diego Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-119",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Adeline Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-396",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Albert Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-113",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Isabella Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-390",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Alexander Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-1057",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      },
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      }
    ],
    isPopular: false
  },
  {
    id: "3c80861b-e5e1-4464-9e44-9d25afad5d4a",
    category: "Game Show",
    name: "Team Challenge",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-346-939-8668",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c8233af2-6ff2-4cff-89ab-a546eda224ef",
      title: "Team Challenge",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: true,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "a58b95cc-5311-4e43-9919-8d820b780cf9",
                "name": "Cynthia Watson",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/64.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Game Show Host",
                        "Assistant Host",
                        "Trivia Expert"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Savannah Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-262",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Christopher Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-86",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Leah Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-507",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Terry Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-548",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Matthew Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-565",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Bryan Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-913",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      },
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      }
    ],
    isPopular: true
  }
];
