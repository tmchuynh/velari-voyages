// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-249-339-3482",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e0fa9047-f312-426d-8d0e-03bd9f5d73d2",
      title: "Newlywed Game",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "120 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "8e030655-59e6-4646-a675-7a8b85ef5c6b",
                "name": "Julie Clark",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/84.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
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
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Philip Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-92",
        },
        {
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Jordan Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-181",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jonathan Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-48",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Mia Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-827",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Bruce Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-1014",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Helen West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-619",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Madelyn Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-633",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "18178367-604b-4de0-9083-f8d17d0cf6a5",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 16,
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
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
      contactNumber: "+1-250-191-3450",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "75ed428d-6511-4234-9243-fa6906a88ad1",
      title: "Deal or No Deal",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "95 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "5360ff9f-ef40-4947-bd25-626121760f39",
                "name": "Daniel Grant",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/72.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          author: "James Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-157",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Alice Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-965",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Willie Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-560",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Skylar Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-846",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Olivia Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-37",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Eric Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-469",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-919-716-7945",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f3d50618-e04d-469e-92a0-8827420d3ffc",
      title: "Wheel of Fortune",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "69f299e6-3835-4fc5-b607-2ae217b9715d",
                "name": "Lerato Lawson",
                "role": "Game Show Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/49.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Blake Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-357",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Oliver West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-821",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Kenneth Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-673",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Jason Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-958",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Kennedy Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-568",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Justin Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-228",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Johnny Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-91",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2dbeee09-6fff-41d7-9193-a458ab8faf7f",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 6,
              "currency": "USD"
      }
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Test your knowledge with cruise ship and travel trivia",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-711-763-9265",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "89b391d2-5ea7-4fd2-9f26-6fa6206f9dfe",
      title: "Cruise Ship Trivia",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "e6216594-0401-4e56-a2ed-c521dfdcd237",
                "name": "Sean Russell",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Kennedy Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-155",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Sofia Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-388",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Betty Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-150",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Leah Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-438",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Gabriel Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-567",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Larry Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-772",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Juan Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-723",
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Guess the prices of various items to win amazing prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-756-643-2271",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2381be40-3b57-4d0d-aac1-953be1cef5b5",
      title: "Cruise Ship Trivia",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "75 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "a263e0fa-0115-45a9-9192-274ca3ae2533",
                "name": "Adam Nash",
                "role": "Assistant Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/57.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Trivia Expert",
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
          author: "Albert Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-535",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Walter Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-743",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Paul Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-132",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Kenneth Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-992",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Stephen Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-439",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Kyle Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-367",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Wei Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-653",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Willie Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-522",
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-766-827-7609",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c62f38f7-5ad7-4286-be26-a0589230085d",
      title: "Pop Culture Quiz",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "083ccb47-ded8-486a-884d-958e5403d1fa",
                "name": "James Fisher",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Darrell Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-867",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Amina Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-1016",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Cynthia Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-848",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Ariana Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-578",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Bruce Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-658",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "688c8e6d-c8f1-4a3f-aadc-fbeef68fac4c",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 13,
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    category: "Game Show",
    name: "Team Challenge",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-918-533-5372",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "51510395-bc0b-4112-b79b-6744e9ca1411",
      title: "Team Challenge",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "94 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "4c8342e8-8be6-4a79-a98a-706fd3cdadd4",
                "name": "Victoria Graham",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/10.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Trivia Expert",
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
          author: "Naomi Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-613",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Larry Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Aiden Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-923",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Janet Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-773",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Barbara Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-366",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Larry Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-23",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Samuel Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-614",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Layla Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-369",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1d5d95df-ff41-4bf7-b1f9-2269c2de6da7",
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
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
      contactNumber: "+1-875-167-4355",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3699c393-2f73-40e4-9fd6-ed0019ead565",
      title: "Cruise Ship Trivia",
      description: "Couples test how well they know each other",
      tickets: {
        isRequired: true,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "a1fe241c-2ad8-4e0e-9a02-e489bf81bb71",
                "name": "Abigail Wells",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/23.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Nicholas Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-53",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Logan Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-84",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Christian Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-17",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Logan Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-868",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Gerald Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-113",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Zachary Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-1074",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brian Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-637",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Christian Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-29",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Scott Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-102",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jason Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-211",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "33a51d45-413a-4d5b-b198-a89f37708599",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 8,
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    category: "Game Show",
    name: "Price is Right",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Price is Right performance times"
    },
    contact: {
      contactNumber: "+1-890-208-3435",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "691ad4bf-2eb7-4a97-9b66-1b4006d6161c",
      title: "Price is Right",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Price is Right performance times"
        }],
      performers: [        {
                "id": "4b9f6aaf-b608-4abf-beb8-520164ceb3d7",
                "name": "Mark Dunn",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Wei Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "10",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Katherine Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-459",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "John Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-240",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Amy Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-145",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Robert Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-208",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Deborah Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-302",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Ronald Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-409",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jerry Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-674",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Stella Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-173",
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
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-308-682-8011",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "846f5d3d-a5d1-45ea-b944-0d877266b689",
      title: "Wheel of Fortune",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "85 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "e1ffc292-9fc2-4d94-acfa-1004ed8bc7d5",
                "name": "Logan Fletcher",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/74.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Savannah Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-534",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Louis Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-348",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Savannah Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-345",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Gabriel Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-437",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Carol Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-1069",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Richard Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-950",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Christine Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-948",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9e6b8527-a964-4e85-99af-d8b308b52b11",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 5,
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
