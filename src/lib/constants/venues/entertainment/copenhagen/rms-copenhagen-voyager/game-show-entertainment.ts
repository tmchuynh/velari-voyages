// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Test your knowledge with cruise ship and travel trivia",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-213-384-4182",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ac583b4d-3d48-45ec-a8b1-f7de41b409aa",
      title: "Wheel of Fortune",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "bcab90fb-c53d-439b-980e-95596f4df3f6",
                "name": "Aiden Gibson",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Kyle Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-829",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Roger Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-182",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Alexander Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-244",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Luis Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-973",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Aaliyah Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-536",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jordan Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-384",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f6b8e538-ffb9-45e3-be32-e613eaaf2c15",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 17,
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
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-561-298-4974",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7b647a7a-57cb-41ac-9362-62e872e97f36",
      title: "Deal or No Deal",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "95572b1c-4ffb-4972-8991-271b1e76318c",
                "name": "Eric Harper",
                "role": "Assistant Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/2.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Game Show Host",
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Arthur Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Sarah Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-158",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Kimberly Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-576",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gabriel Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-328",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Marcus Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-69",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Mark Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-363",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Liam Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-224",
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
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      }
    ],
    isPopular: true
  },
  {
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-847-725-7079",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1b55a583-ee2c-4c62-aa5e-940fd2d37412",
      title: "Deal or No Deal",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "a8eae225-ab49-4428-b563-73ffc535c89a",
                "name": "Roger Payne",
                "role": "Trivia Expert",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
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
          author: "Rajesh Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-216",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sandra Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-1010",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Isabella Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-885",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Robert Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-1016",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Ethan Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-269",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Stephen Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Amanda Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-53",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b5410457-20f7-4be1-bd48-dc06d5f6a958",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 5,
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
    isPopular: false
  },
  {
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Family teams compete in this classic game show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-634-444-3002",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "449b4973-a867-40a6-86eb-d5f3a164bc14",
      title: "Jeopardy Challenge",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: true,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "ca8d7146-f699-4625-81e9-496327954f93",
                "name": "Terry Gardner",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/64.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Game Show Host",
                        "Trivia Expert",
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Susan Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-308",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Matthew Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-236",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Helen Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-277",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Elizabeth Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-246",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gary Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-546",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Grace Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-409",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Chloe Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-953",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Aiden Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-41",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Priya Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-687",
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
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-535-215-2017",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ea2f2d66-ea17-4f7e-9a72-c5ee688a6493",
      title: "Jeopardy Challenge",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "2bf2b106-760a-4133-b02e-67cef14dd69b",
                "name": "Victoria Campbell",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/9.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Julie Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-568",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Julie Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-15",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Eric Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-917",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Elizabeth Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-732",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Dennis Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-415",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c35e9cbc-78fa-4d0d-bd0f-806d1980eeb4",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 12,
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
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Guess the prices of various items to win amazing prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-793-986-4712",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fd1f1063-da98-492d-9e55-9c740ae94f7d",
      title: "Battle of the Sexes",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "dd4c5763-2636-4248-b783-b6c97d26c254",
                "name": "Jordan Nash",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          quote: "What a fun interactive experience! The Battle of the Sexes got everyone involved.",
          author: "Gerald Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-731",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Gabriella Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-423",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Billy Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-749",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Roger Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-62",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Noah Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-962",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Roy Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-577",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Isabella Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-367",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Kennedy West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-471",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joseph Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-982",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Edward Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-599",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "514a8edb-8990-456b-aa41-b0c9d2123016",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 24,
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
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Couples test how well they know each other",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-639-293-7709",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8aa4a733-6229-407e-aecd-d80ccc0076da",
      title: "Cruise Ship Trivia",
      description: "Couples test how well they know each other",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "a0f27fc6-f895-4458-a9c3-c99fbef56888",
                "name": "Douglas Harper",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/53.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Assistant Host",
                        "Trivia Expert",
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Diego West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-1071",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Deborah Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-932",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Edward Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-824",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Gerald Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-76",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jane Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-245",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Ellie Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-909",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Leah Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-502",
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
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-297-215-3263",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6f8d802d-b24f-4e8d-998e-1d7318b48e48",
      title: "Family Feud at Sea",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "c1ee3340-3cfc-44ad-ac59-73a358531102",
                "name": "Maya Graves",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/61.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Sophia Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-276",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Philip Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-269",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Daniel Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-964",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Aiden Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Alice Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-877",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jesse Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-267",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7e8baf40-03ff-4a2b-862d-c5656ecaa062",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
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
    isPopular: false
  },
  {
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-306-929-5334",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5010c8a1-3153-47ab-b68a-11232265922c",
      title: "Pop Culture Quiz",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "414376dc-6ac7-44a3-989c-2a65c682ad56",
                "name": "Sophia Hayes",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/70.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Julie Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-259",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Kenneth Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-824",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Oliver Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-545",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Helen Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-1065",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Luis Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-681",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Margaret Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-1079",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Angela Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-938",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Luis Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-215",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1b1c3afd-126a-4159-b7f9-336781942360",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 6,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      },
      {
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      },
      {
        question: "How do I participate in game shows?",
        answer: "Most game shows accept volunteer participants from the audience. Some may require advance sign-up at Guest Services.",
      }
    ],
    isPopular: true
  }
];
