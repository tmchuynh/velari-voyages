// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Team Challenge",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-563-295-3218",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ed3dd7be-e3c0-4665-9934-89f37566dfe5",
      title: "Team Challenge",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "5374dac7-b9b1-401b-b289-dc4daa86d1e9",
                "name": "Joseph Payne",
                "role": "Assistant Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/71.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Aaron Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-722",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Cynthia Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-973",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Mateo Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-391",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Nomsa Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-54",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Mary Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-487",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Helen Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-1053",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Philip Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-636",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Lucas Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-575",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9078da73-fe01-42a8-932f-d961195a7b44",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 22,
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
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-536-436-6914",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1fd04675-e977-4067-8333-2905ce1bcf9c",
      title: "Quiz Night Championship",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: false,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "2fdc38fc-2b1f-4720-b7d1-3dde4cf645a8",
                "name": "Mark Wells",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/37.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Entertainment Coordinator",
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
          author: "Genesis Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-281",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Scarlett Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-1046",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Rachel Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-361",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "John Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-511",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "John Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-1023",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Marcus Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-689",
        }
      ],
      hasVIPSeating: false,
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
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Price is Right",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Price is Right performance times"
    },
    contact: {
      contactNumber: "+1-654-530-2374",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4b3c8f37-a8db-4f59-899f-b56dc340da0d",
      title: "Price is Right",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Price is Right performance times"
        }],
      performers: [        {
                "id": "c577854d-cd64-4d2b-9a0a-c22ecf0b6d29",
                "name": "Linda Ellis",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/0.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jennifer Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-82",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Brandon West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-890",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Michael Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-981",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Bella Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-679",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Kevin Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-603",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Keith Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-186",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jesse Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-150",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ef8f809b-7340-4f58-acbd-6b21a984a5f3",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 21,
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
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-756-185-7530",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0ddbc752-cb3a-4e22-b982-c930a645fc85",
      title: "Wheel of Fortune",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "1f0050d9-d35e-4323-ae06-fa65142a87c0",
                "name": "Noah Wallace",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/25.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Entertainment Coordinator",
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brenda Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-99",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Matthew Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-421",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Abigail Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-381",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Matthew Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-859",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Oliver Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-937",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Sandra Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Zola Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-17",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Nomsa Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-1011",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Victor Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-193",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Gabriel Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-504",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "61c46263-d459-43ab-9f92-7163c61d784a",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
              "price": 22,
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
    isPopular: false
  },
  {
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-378-178-8394",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "362be086-7bff-45f6-a44a-00dde2ca1f8b",
      title: "Jeopardy Challenge",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "f824928e-8de1-4975-adbd-38c91572d56f",
                "name": "Nancy Curtis",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/46.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          author: "Mia Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-1036",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Alice Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-119",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Mateo Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Skylar Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-586",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Matthew Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-124",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Adeline Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-967",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9322fb41-e61e-4c3c-a258-87195289d9ac",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 13,
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
    isPopular: false
  },
  {
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-414-419-1569",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "98f8cb7e-048d-4c28-b8ee-2724c11756d6",
      title: "Pop Culture Quiz",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "79587e6b-70aa-4fee-b277-b12d88425ad8",
                "name": "Sandra Coleman",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Alice Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-453",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Katherine Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-765",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Sarah Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-304",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Stella Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-816",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Vincent Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-431",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Noah Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-720",
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
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Spin the wheel and solve puzzles to win prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-735-887-9754",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d79137d9-204a-43aa-97b1-0d7b786f29c9",
      title: "Battle of the Sexes",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "3b328c98-cc44-47ab-a539-d24e477ea111",
                "name": "Dennis Ellis",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/61.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Christopher Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-315",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "David Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-805",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Harold Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-858",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Oliver West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-182",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Aiden Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-340",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sarah Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-1012",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brandon Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-439",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5ecf2d4a-70ae-4288-8ef6-a53d8d9bf4fb",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 22,
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
    isPopular: false
  },
  {
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Spin the wheel and solve puzzles to win prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-383-790-6337",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7e5ba312-851a-4b7c-9e02-845a6ec53b37",
      title: "Deal or No Deal",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "2a7ab629-e232-42b9-b9e2-bb0ba8fd40ba",
                "name": "Gabriel Hamilton",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/19.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Nancy Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-853",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "David Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-473",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Lawrence Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-428",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Zola Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-15",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Chloe Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-484",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Aiden Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-623",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Kyle Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-176",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "31b33c49-703b-4d5b-bd7b-944b330b4145",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 20,
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
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-563-360-9761",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "47f70b35-62dc-4c9b-889d-d897b1dba75a",
      title: "Deal or No Deal",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "36997e97-cb07-40ca-a698-a4d2f7e5623a",
                "name": "Julie Dixon",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/29.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Trivia Expert",
                        "Entertainment Coordinator",
                        "Assistant Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Margaret Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-488",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Ronald Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-169",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Lisa Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-128",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jacob Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-62",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Gabriel Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-401",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Rajesh Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-78",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Dorothy Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-381",
        }
      ],
      hasVIPSeating: true,
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
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-480-876-9450",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "83c01822-2b06-4308-aa40-8bef2a529615",
      title: "Jeopardy Challenge",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "dcc56eff-561b-433a-8bdb-dd415edb4e45",
                "name": "Benjamin Clark",
                "role": "Assistant Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Wayne Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-790",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Olivia Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-973",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Anthony Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-406",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Julie Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-327",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Christine Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-259",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Patrick Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-338",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Roy Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-994",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Stephanie Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-1004",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Joel Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-360",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e4f0b8be-60a8-432e-94d8-a30eed3a9aa4",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 10,
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
    isPopular: true
  }
];
