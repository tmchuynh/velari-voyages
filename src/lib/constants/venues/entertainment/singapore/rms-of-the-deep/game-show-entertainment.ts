// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "1113073f-b851-4fbc-b8ff-6fc7ccdd65b4",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-207-972-1418",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fe866e76-cc78-4248-a89f-2c9c5fd67cfc",
      title: "Wheel of Fortune",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "1358733a-f8e2-48c6-8218-9050199bfb05",
                "name": "Alexander Spencer",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Game Show Host",
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
          author: "Louis Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-545",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "William Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-15",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Mateo Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-364",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Douglas Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-440",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Eleanor Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-782",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Samantha Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-295",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Elizabeth Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-759",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Rachel Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-886",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Harold Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-594",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Julie Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-219",
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
    id: "1113073f-b851-4fbc-b8ff-6fc7ccdd65b4",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-771-216-5987",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3b288ba4-a0fb-4d41-b002-f424a8b95c2e",
      title: "Pop Culture Quiz",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: true,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "d715168a-9267-442d-b7a1-48ca52cf622f",
                "name": "Henry Maxwell",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/59.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Assistant Host",
                        "Entertainment Coordinator",
                        "Game Show Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Joseph Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-102",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "George Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-1068",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Caroline Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-433",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Paul Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-695",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Melissa Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-323",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Skylar Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-195",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Antonio Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-962",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Miguel Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-95",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c860d8b2-c062-4d65-83b2-c49a4600d387",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
              "price": 14,
              "currency": "USD"
      }
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
    id: "1113073f-b851-4fbc-b8ff-6fc7ccdd65b4",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Family teams compete in this classic game show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-257-188-1164",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "aaefb9ed-fdf5-447c-97a1-5c493e105d0b",
      title: "Cruise Ship Trivia",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "feb636ef-0bf5-421e-ae69-485187cddf16",
                "name": "Catherine Lawson",
                "role": "Game Show Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/52.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Carl Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-490",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Victoria Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-350",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Laura Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-602",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gabriella Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-293",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Pamela Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-274",
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
    id: "1113073f-b851-4fbc-b8ff-6fc7ccdd65b4",
    category: "Game Show",
    name: "Team Challenge",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-822-244-3782",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b1d8a923-c7c6-4775-b057-e4a166d07040",
      title: "Team Challenge",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 30,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "49e76302-1c30-4654-a2ed-bdf32e870c77",
                "name": "Naomi Douglas",
                "role": "Game Show Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/75.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Kevin Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-93",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Jordan Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-159",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Kennedy Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-945",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Liam Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-666",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Kinsley Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-957",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Patrick Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-613",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Helen Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-380",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Naomi Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-57",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Aaron Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-555",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      },
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      }
    ],
    isPopular: false
  },
  {
    id: "1113073f-b851-4fbc-b8ff-6fc7ccdd65b4",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Family teams compete in this classic game show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-533-247-3089",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8fa895a9-5e17-4614-ae50-74731478dde3",
      title: "Family Feud at Sea",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: false,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "60 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "ef627046-ca93-4d7c-b841-02c987875893",
                "name": "Sarah Mason",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Game Show Host",
                        "Assistant Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Terry Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-21",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Chloe Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-711",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Pamela Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-585",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Bella Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-760",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Rajesh Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-774",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gregory Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-1076",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Austin Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-898",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jordan Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-900",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "44de2810-2d66-4b6d-b2fa-d43f5b9afe6e",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 6,
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
    id: "1113073f-b851-4fbc-b8ff-6fc7ccdd65b4",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-213-447-8595",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b55221af-bdfe-4b44-8bb4-de09cc592a2b",
      title: "Jeopardy Challenge",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "16286e1e-41f6-4130-9042-f97a7ec06d5e",
                "name": "Mia Reed",
                "role": "Assistant Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/5.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Trivia Expert"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Avery Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-1030",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Arthur Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-103",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Nicholas Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-1079",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Lisa Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-843",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Jesse Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-664",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9b0df4a1-b428-4b3d-b243-b75c202303be",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 16,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      },
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      },
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      }
    ],
    isPopular: false
  }
];
