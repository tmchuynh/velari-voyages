// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    category: "Game Show",
    name: "Name That Tune",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-799-278-8627",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5da2d609-5327-4998-8f9c-d0b8ca004b0b",
      title: "Name That Tune",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "b8de49be-c8d7-42e1-92df-3da20e65e2f1",
                "name": "Bella Fox",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gabriella Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-900",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Kevin Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-1052",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Frank Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-550",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Christian Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-818",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Eric Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-290",
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
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-539-535-4092",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "76c57d0c-360c-4089-b082-8d824d41bd75",
      title: "Cruise Ship Trivia",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "bdd90b3d-4a22-4633-8fd2-ebba10a99b93",
                "name": "Brenda Spencer",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/78.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Assistant Host",
                        "Trivia Expert",
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
          author: "George Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-909",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joshua Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-923",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Gregory Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-255",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Mark Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-264",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Darrell Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-703",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "77de3058-d984-4d59-8ad5-fa0c78050e77",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 22,
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
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-920-399-2312",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ffd8ae9b-631e-4639-bab2-808feb35c7b7",
      title: "Family Feud at Sea",
      description: "Answer questions in this classic quiz show format",
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
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "a1914ee0-051e-49a6-b0f2-5f19db08aca3",
                "name": "Angela Price",
                "role": "Game Show Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Joshua Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-231",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Angela Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-615",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Larry Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-821",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "George Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-520",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Barbara Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-278",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Olivia Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-663",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Stella Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-152",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Daniel Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-979",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Carl Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-1016",
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
    isPopular: true
  },
  {
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    category: "Game Show",
    name: "Name That Tune",
    description: "Test your knowledge with cruise ship and travel trivia",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-373-773-4821",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c351e1d6-b6cf-4803-a242-9c215b2d711e",
      title: "Name That Tune",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "1bf75a5f-57fa-41da-9445-931609b97478",
                "name": "Christopher Mitchell",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/46.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Matthew Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-357",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Philip Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-99",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Nora Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-753",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Abigail Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-105",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Justin Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-102",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "William Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-792",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Charlotte Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-1038",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Victor Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-701",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sarah Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-599",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "e233aae4-ca4d-409a-8371-bb9099a1bf7a",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
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
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    category: "Game Show",
    name: "Team Challenge",
    description: "Family teams compete in this classic game show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-443-670-9050",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "006b4eb3-d4c4-4f26-a69b-93e2578180e5",
      title: "Team Challenge",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "83 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "aa3890a4-f369-42e3-966a-7e3ed12f6882",
                "name": "Lisa Henderson",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/83.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Game Show Host",
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Christopher Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-851",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Stella Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-311",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Jeffrey Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-332",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Stephanie Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Bruce Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-80",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brian Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Mark Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-445",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Carlos Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-147",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Robert Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-546",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aaeff111-210b-475c-8e6c-049acf49b09a",
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
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-406-174-6599",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "10585c73-8571-4ee8-a127-8a179e2a9e9b",
      title: "Quiz Night Championship",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "63 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "cd06c73c-20e9-44b8-b189-2295e83e2423",
                "name": "Wayne Palmer",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/48.jpg",
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
          author: "Kenneth Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-280",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joshua Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-160",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Zola Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-1071",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Ellie Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "5",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Joel Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-345",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Sarah Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-1065",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4126773d-a2b9-4634-8e2d-cf44d6b2723f",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 7,
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
  },
  {
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-447-888-4314",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f42aeecf-a8ef-42ed-be58-6e9984519e78",
      title: "Newlywed Game",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "6a160d43-eea9-4313-8994-1e8f5073241c",
                "name": "Marcus Stewart",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/24.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Mark Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-650",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jane Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-874",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brenda Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-506",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Evelyn Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-434",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Liam Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "3",
        },
        {
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Steven Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-165",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f9ab2f34-3b55-40bb-81c3-77c75211d0f3",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
              "price": 7,
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
  },
  {
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    category: "Game Show",
    name: "Name That Tune",
    description: "Guess the prices of various items to win amazing prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-370-981-9603",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "23e31cff-a6e8-4106-8403-12bc31476dba",
      title: "Name That Tune",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "c081c9ec-3421-4f99-9a17-1889fd638c8e",
                "name": "Valentina Foster",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/63.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Samantha Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-636",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Willie Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-529",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Julie Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-945",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Bryan Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-9",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Bobby Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-56",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Mark Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-236",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Claire Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-147",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Peter Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-378",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
