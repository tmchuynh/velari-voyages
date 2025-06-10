// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "9b573689-ebd4-4835-83ea-b1e91aa4cb84",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-683-536-4892",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a7ee617e-fc25-40d3-8c3e-32e0ecb3cf85",
      title: "Battle of the Sexes",
      description: "Guess the song from just a few notes in this musical game",
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
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "816efb46-e80f-460b-9fa8-5726e1adeb06",
                "name": "Ralph Lawson",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/10.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Amanda Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-97",
        },
        {
          quote: "What a fun interactive experience! The Battle of the Sexes got everyone involved.",
          author: "Willie Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-371",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Anna Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-88",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joan Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Alexa Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-352",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Mary Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-118",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jeffrey Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-1035",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Timothy Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-271",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "45aa3fcc-cee9-496c-9056-de04992d767c",
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
    id: "9b573689-ebd4-4835-83ea-b1e91aa4cb84",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-423-452-3829",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f5fdb510-e152-416c-8f2c-7fea4510da3f",
      title: "Cruise Ship Trivia",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "d493b12f-7886-4a07-9d9c-6a8eee1adc1d",
                "name": "Ralph Price",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Emma Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-482",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Brenda Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-488",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Priya Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-812",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Oliver Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-140",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Jeremy Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-739",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Samantha Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Jordan Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-308",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "James Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-718",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Emma Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-650",
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
    isPopular: true
  },
  {
    id: "9b573689-ebd4-4835-83ea-b1e91aa4cb84",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-744-224-3139",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f0a33b0d-401a-402a-9f37-6ae25124f094",
      title: "Battle of the Sexes",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "ccea42e2-f26f-447c-a2f3-8d910eabe185",
                "name": "Samantha Henderson",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Aaron Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-7",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jennifer Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-590",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joseph Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-192",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Dennis Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-518",
        },
        {
          quote: "What a fun interactive experience! The Battle of the Sexes got everyone involved.",
          author: "Valentina Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-687",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Helen Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-847",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Mark Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-348",
        },
        {
          quote: "What a fun interactive experience! The Battle of the Sexes got everyone involved.",
          author: "Adam Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-201",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Genesis Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-736",
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
    id: "9b573689-ebd4-4835-83ea-b1e91aa4cb84",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Spin the wheel and solve puzzles to win prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-428-108-7184",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "beda90aa-64ce-40b3-9a8b-6b2e8ab731cb",
      title: "Wheel of Fortune",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "117 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "e7a53f27-0879-41d5-b2d4-beb443dca56a",
                "name": "Scarlett Graham",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/79.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Timothy Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-78",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Bobby Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-856",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Thabo Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-780",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Catherine Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-1061",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Alexa Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-851",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "George Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-382",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Carlos Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-452",
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
    id: "9b573689-ebd4-4835-83ea-b1e91aa4cb84",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-469-445-3935",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "db6056f4-9065-43d4-91b3-60dca2ca25c2",
      title: "Newlywed Game",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "84 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "d6a91d6d-81c7-4904-bb8f-73cac2d76084",
                "name": "Barbara Hamilton",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Charlotte Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-682",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Kevin Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-303",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Joel Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-25",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Johnny Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-271",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Carl Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-285",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Maya Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-944",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Lawrence Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-287",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Linda Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-576",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Lucas Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-368",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Stephen Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-422",
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
    id: "9b573689-ebd4-4835-83ea-b1e91aa4cb84",
    category: "Game Show",
    name: "Price is Right",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Price is Right performance times"
    },
    contact: {
      contactNumber: "+1-890-420-8821",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d6c6a06d-843b-4e42-a362-e33d6da68cd9",
      title: "Price is Right",
      description: "Men vs. women in hilarious trivia and challenge competitions",
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
                "description": "Price is Right performance times"
        }],
      performers: [        {
                "id": "6a2ed625-b60c-45d4-9a9a-4102b41a17f9",
                "name": "Marcus Marshall",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/17.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Ashley Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-955",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Nathan Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-283",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Albert Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-486",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Caroline Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-449",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Dylan Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-842",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Emma Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-434",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sophia Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-251",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Aaliyah Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-452",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Willie Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-1012",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "64ab6662-3967-48cf-bb1d-486e848643f2",
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
  }
];
