// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-351-798-7383",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "67eb5be9-84c7-4f15-a4fe-aa87e88daa02",
      title: "Jeopardy Challenge",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "69 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "87251649-1fec-41c4-9b47-097234b46a35",
                "name": "Mark Sutton",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Tyler Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-424",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Sophia Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-102",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Dennis Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-171",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Maria Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-351",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Luis Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-180",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gabriel Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-43",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Patricia Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-1041",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Ellie Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-647",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Cynthia Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-542",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Bryan Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-134",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "81d39d47-02ac-41ac-ac97-bbdb7fceee1c",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 14,
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
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-869-911-9323",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6d659bd3-36bf-4e64-a859-73c0b1ddb0de",
      title: "Deal or No Deal",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "60 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "92383345-d21a-4bce-910d-4d69c938bd0b",
                "name": "Matthew Maxwell",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          author: "Ryan Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-189",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Javier Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-244",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brooklyn Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-838",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Darrell Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-997",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Bella Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-847",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Helen Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-72",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Lawrence Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Scott Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-935",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ashley Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-1023",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Nancy Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-979",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0f07d52b-05a7-4e42-8159-ebd2d22c56b9",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
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
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-588-798-7835",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "42c03eb4-ad11-451c-a0ae-413f18cf858b",
      title: "Quiz Night Championship",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: true,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "26b7d7f7-d33c-4e2e-99da-032031431387",
                "name": "Raymond Gibson",
                "role": "Trivia Expert",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/40.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Entertainment Coordinator",
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Virginia Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-409",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Nicholas Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-167",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Sean Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-636",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Hannah Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-124",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Roy Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "0",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Keith Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-890",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e132f08e-2d5c-4734-ab35-cc64b15c6e51",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 11,
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
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-630-532-6793",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "129653f3-9b02-415e-8a73-a47c8f5ca655",
      title: "Jeopardy Challenge",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: true,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "96 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "598cfff0-03e3-4ac4-84dc-3afd4945f306",
                "name": "Jonathan Bennett",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/61.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Laura Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-470",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jesse Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-802",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "David Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-989",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Jessica Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-538",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Sandra Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-196",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Robert Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-1026",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Nicholas Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-138",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Aria Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-487",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Sofia Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-785",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Joan Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-892",
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
    isPopular: false
  },
  {
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    category: "Game Show",
    name: "Team Challenge",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-203-482-5392",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "501e1821-dfa0-461e-aa01-39152b7b32d0",
      title: "Team Challenge",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "b7378802-db50-4db0-8167-45ee4fd4f088",
                "name": "Bryan Grant",
                "role": "Assistant Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Harry Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-71",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Jordan Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-496",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Ellie Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-308",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Kennedy Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-331",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Noah Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-285",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c0c7ab9c-4b2c-4f16-a6ff-bb9d6c49d3db",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 7,
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
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-939-216-1663",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7e76486a-4b8c-42ef-b252-abfc22f164f9",
      title: "Cruise Ship Trivia",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "122f7fd5-e9b3-4c4a-9ea7-8e1d770156e1",
                "name": "Julie Carpenter",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/82.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Elijah Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-279",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Madelyn Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-976",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Chloe Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-975",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Samantha Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-988",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Hannah Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-625",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "George Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ryan Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-87",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Miguel Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-402",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Eleanor Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-952",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "554b65f7-6d78-44c8-ab59-ea0b4717d4e4",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 23,
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
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    category: "Game Show",
    name: "Team Challenge",
    description: "Guess the prices of various items to win amazing prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-609-664-8623",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2e6cde62-f730-4b47-8dd6-93520b505f37",
      title: "Team Challenge",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "89f44215-c67a-466b-ac82-baec9ece55e0",
                "name": "Jordan Morgan",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Entertainment Coordinator",
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
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Dylan Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Thabo Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-242",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Alice Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-781",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Sophia Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-122",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Kenneth Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-160",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Nomsa Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Catherine Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-120",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Walter Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-518",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Juan Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-703",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Roger Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-944",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "93c29187-38e5-4b9e-b2ae-b6f1626c04f9",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 9,
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
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-906-406-3499",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b29d4192-75fe-4602-a810-dc9450b307a9",
      title: "Wheel of Fortune",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "c6ba65e9-318d-4a1f-83cd-752e01600910",
                "name": "Gabriel Lawson",
                "role": "Entertainment Coordinator",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/69.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Aiden Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-203",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Claire Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-824",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Wei Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-733",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Pamela Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-896",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Javier Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-189",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Allison Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-906",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Louis Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-96",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Kevin Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-279",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Donna Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-200",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Sarah Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-354",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "58ed3425-b1b7-46a5-bf8f-d1b4e63538ca",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 10,
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
  }
];
