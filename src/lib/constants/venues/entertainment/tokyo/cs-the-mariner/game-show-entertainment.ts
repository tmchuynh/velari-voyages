// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Ultimate trivia competition across multiple categories",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-742-614-1550",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cf673d43-f4e8-4027-8f84-cfffbd195a97",
      title: "Jeopardy Challenge",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "110 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "3ecd278b-9218-4898-be17-36bb49a24219",
                "name": "Harper Baker",
                "role": "Entertainment Coordinator",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Roy Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-464",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Priya Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-1002",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Amelia Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-388",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Linda Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-656",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Edward Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-842",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Johnny Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-882",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Gary Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-807",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "59f6a38e-52d7-4589-9346-d23e4b8c15b4",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
              "price": 20,
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
    isPopular: false
  },
  {
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Test your knowledge with cruise ship and travel trivia",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-606-928-3228",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7ce50eef-0e4b-4ab2-b292-446b38d72bd8",
      title: "Cruise Ship Trivia",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "d0277ceb-5396-45ba-9853-733008da0ce2",
                "name": "Cynthia Parker",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/65.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Douglas Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Maya Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-407",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jennifer Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-261",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Brandon Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-501",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Maya Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-364",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Blake Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-279",
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
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Make deals and take risks in this suspenseful game show",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-579-512-6057",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5889ac83-1fce-4926-9223-6d88b32e581c",
      title: "Cruise Ship Trivia",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "36090e5f-bc17-46f5-87af-8a058ada44b2",
                "name": "Anthony West",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/73.jpg",
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
          author: "Layla Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-468",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Evelyn Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-108",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Elena Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-406",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Philip Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-369",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Aiden Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Steven Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-89",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Sarah Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-347",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Kyle Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-390",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5164123c-8107-476a-b9ca-e89d2b42618c",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 10,
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
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Couples test how well they know each other",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-637-247-2633",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "38db334e-baa3-4f37-96e7-759ab17a6ca9",
      title: "Quiz Night Championship",
      description: "Couples test how well they know each other",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "8180f94d-af74-412d-81e5-5186e5cb83f3",
                "name": "Evelyn Day",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
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
          author: "Jason Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-801",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Christopher Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-168",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joseph Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-829",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Genesis Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-903",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Frank Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-383",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Russell Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "3",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Rebecca Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-243",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b847e4fb-0d21-4dd0-8070-6957cce39a4b",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
              "price": 17,
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
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Guess the prices of various items to win amazing prizes",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-832-726-4137",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "57e0dc27-931e-4fd4-983a-91a16f4767f1",
      title: "Deal or No Deal",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: false,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "41a69074-026a-4bb4-9b05-24c15f9c3734",
                "name": "Olivia Campbell",
                "role": "Trivia Expert",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/67.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Jacob Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-60",
        },
        {
          quote: "What a fun interactive experience! The Deal or No Deal got everyone involved.",
          author: "Nicholas Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-960",
        },
        {
          quote: "What a fun interactive experience! The Deal or No Deal got everyone involved.",
          author: "Gerald Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-95",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Tyler Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-533",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jessica Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-117",
        },
        {
          quote: "What a fun interactive experience! The Deal or No Deal got everyone involved.",
          author: "Deborah Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-14",
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
    isPopular: true
  },
  {
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Spin the wheel and solve puzzles to win prizes",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-228-689-4176",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "49df64a8-53f5-4d53-8a52-e35e740583be",
      title: "Jeopardy Challenge",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "998907af-4467-4516-898e-1f313485cd54",
                "name": "Dylan Hawkins",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          author: "Chloe Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-267",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ella Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-77",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Dennis Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-854",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Allison Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-621",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Helen Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-854",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Henry Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-185",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Sophia Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-1007",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Darrell Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-308",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Henry West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-87",
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
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Ultimate trivia competition across multiple categories",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-908-192-4761",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7f300ffd-da16-4cd4-a52a-ac9bf859cf76",
      title: "Pop Culture Quiz",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: false,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "a99bcb7a-8718-433b-bc65-7d03a05b12e5",
                "name": "Andrew Dean",
                "role": "Trivia Expert",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/44.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Antonio Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-527",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Joshua Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-41",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Roy Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-552",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Catherine Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-842",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Carl Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-607",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Sophia Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-452",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Ronald Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-745",
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
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-436-482-4918",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dee4864d-100d-4de6-aa51-cb863491b91e",
      title: "Quiz Night Championship",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "10d78e21-7d79-4978-a5c9-0d23fe5568f4",
                "name": "Christopher Spencer",
                "role": "Entertainment Coordinator",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/27.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Assistant Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Kennedy Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-490",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Wayne Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-378",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Carol Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-994",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Eugene Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-804",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Kimberly Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-500",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Nicole Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-120",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Rajesh Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-328",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Arthur Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-944",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Deborah Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-576",
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
    id: "a5cba168-0130-4cf5-a4c2-59ef4c646c90",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Test your knowledge with cruise ship and travel trivia",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-354-384-8830",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "73fee283-00fe-4a61-8f3c-33add821b86a",
      title: "Newlywed Game",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: true,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "b0da9039-4ef9-4c21-8bff-1da3fc9803a8",
                "name": "Christopher Hunter",
                "role": "Trivia Expert",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/58.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Larry Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-231",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Russell Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-700",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Nicole Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-508",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Dorothy Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-451",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Rebecca Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-796",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Ronald Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-202",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jonathan Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-273",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Grace Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-168",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "4b7265b7-6bf7-49c7-b5c9-7b076eab2298",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 25,
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
  }
];
