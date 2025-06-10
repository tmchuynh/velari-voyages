// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "f4ba3553-8900-419d-95c8-e82cd2892cc9",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-479-917-8446",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b20f9fd6-6eae-4c5e-aa37-1cce60e38319",
      title: "Deal or No Deal",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "9d690d1d-10a3-418e-8227-f28fede4fb2e",
                "name": "Kinsley Ellis",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Peter Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-797",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jason Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-743",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Valentina Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-190",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Michael Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-497",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ethan Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-533",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Terry Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-149",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Antonio Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-711",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Janet Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-187",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Aaliyah Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-501",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a9688391-8cc4-4949-9534-14dc16efed29",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 9,
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
    id: "f4ba3553-8900-419d-95c8-e82cd2892cc9",
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
      contactNumber: "+1-987-985-6273",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c17f7462-cd45-4565-a994-9f48a66be56d",
      title: "Jeopardy Challenge",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "70 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "de230617-6694-4b84-b2c4-61bdf0a8ea45",
                "name": "Zoe Graham",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/47.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Angela Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-1012",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Chen Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-20",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Robert Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-917",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Nicholas Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-195",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Nathan Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-347",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Joel Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-93",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Kyle Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-375",
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
    id: "f4ba3553-8900-419d-95c8-e82cd2892cc9",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-878-795-4751",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3f0aa995-ab3e-4f58-8746-439839b09cf9",
      title: "Pop Culture Quiz",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "73 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "81f721a3-9da8-4794-95dc-adf148269ee8",
                "name": "Chen Fletcher",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/8.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Amy Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-199",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Blake Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-949",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Benjamin Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-552",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Mia Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Nomsa Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-996",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "49dfa645-d1bd-4868-ba50-ba6f17948d4a",
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
    isPopular: true
  },
  {
    id: "f4ba3553-8900-419d-95c8-e82cd2892cc9",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-236-243-5517",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6d627caa-0af2-45a0-89d9-1d7c6f7fae1c",
      title: "Cruise Ship Trivia",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "811c46ec-ec21-4576-9a7e-dad3390302b4",
                "name": "Jane Ellis",
                "role": "Assistant Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ariana Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-627",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Donna Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-153",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Gerald Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-717",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Gary Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-767",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Albert Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-735",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Nora Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-834",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Gary Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-239",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Genesis Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-1018",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a0dd079d-f33c-4892-a4e9-b070903a6c1c",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 20,
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
    id: "f4ba3553-8900-419d-95c8-e82cd2892cc9",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-648-835-9453",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "85dfb851-eab5-4866-9aed-eb1826fa1910",
      title: "Wheel of Fortune",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "65d2dd72-3c30-4198-89c0-07c23f27e512",
                "name": "Sophia Sutton",
                "role": "Game Show Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
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
          author: "Isabella Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-623",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Gerald Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-388",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Logan Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-967",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Abigail Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-776",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Sebastian Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-803",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Layla Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-399",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Lisa Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-786",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Arthur Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-622",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Antonio Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-459",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f3060cf5-5599-490c-ac74-4d90d15a3d8a",
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
    isPopular: true
  },
  {
    id: "f4ba3553-8900-419d-95c8-e82cd2892cc9",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Test your knowledge with cruise ship and travel trivia",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-493-538-9446",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2b0157a0-fd98-48f0-a387-ce31998c214b",
      title: "Battle of the Sexes",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "904f339d-4307-49a9-b902-7b99b69f7de9",
                "name": "Sarah Bennett",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/32.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Game Show Host",
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
          author: "Caroline Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-758",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Gabriella Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-60",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Vincent Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-1049",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Russell Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-1055",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Darrell Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-382",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Katherine Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-927",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Valentina Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-212",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Jerry Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-715",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Isabella Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-130",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3893cdbf-09b3-4cf6-952d-254ac821f61c",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
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
    id: "f4ba3553-8900-419d-95c8-e82cd2892cc9",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-948-822-1674",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ae8ad9fe-e77b-454a-a76b-8359354566f4",
      title: "Family Feud at Sea",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "62a48170-a973-4801-a12c-b9f469eba1b0",
                "name": "Amelia Lawson",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Justin Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-404",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Ella Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-1025",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Eugene Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-574",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Genesis West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-459",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Timothy Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-608",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Samantha Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-1036",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Emily Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-384",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brenda Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-237",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Benjamin Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-329",
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
  }
];
