// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-673-109-4835",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "13755c9d-6ed5-48e1-ba9f-fe3e7b45d456",
      title: "Newlywed Game",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "6883417e-052b-46f4-b1a4-82d6af7c44b5",
                "name": "Eric Grant",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/59.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Joe Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-231",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Elijah Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-251",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Wei Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-130",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Sophia Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-1032",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Lerato Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-628",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Laura Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-468",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "David Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-965",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Adam Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-777",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fdbe9cf7-0f86-4734-8b47-6856b72d9560",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 16,
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
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-524-548-6295",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "832e16c5-0140-4b72-b732-0ce21ddca677",
      title: "Cruise Ship Trivia",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "70 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "68b7bbec-c1c4-4f3e-b2a1-0f856a706d09",
                "name": "Joseph Sutton",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Terry Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-782",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Mateo Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "0",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jose Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-488",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Tyler Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-522",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Brenda Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-657",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Ellie Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-752",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Carlos Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-844",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Nicholas Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-877",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Gregory Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Rebecca Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-485",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "6a4d4d4b-81da-4e13-b6f9-5a9bf242c51b",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 15,
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
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Couples test how well they know each other",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-644-246-2480",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "92b33186-32e5-4806-9d16-f289f54e8cdc",
      title: "Battle of the Sexes",
      description: "Couples test how well they know each other",
      tickets: {
        isRequired: true,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "80 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "d1962164-4bb8-47fb-ad11-7377cb1e0c06",
                "name": "Maya Fox",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/66.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Juan Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-216",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Liam Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-389",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Andrew Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-984",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jessica Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-463",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Catherine Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-621",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fb6c18fa-698d-4ec6-b672-9c6adc7c2608",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 8,
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
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    category: "Game Show",
    name: "Name That Tune",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-424-408-1871",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a11c9e99-3109-4e96-b425-840ba73d7dde",
      title: "Name That Tune",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "96354359-240b-4872-9e34-8ef02ab8a570",
                "name": "Avery Maxwell",
                "role": "Game Show Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/13.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
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
          author: "Gabriella Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-534",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Ella Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-493",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Emma Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-431",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Gerald Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-190",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Leah Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-429",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Carlos Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-451",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Lawrence Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-464",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4600959a-b2d9-4a6d-be00-e78fb837ddb5",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
              "price": 7,
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
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
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
      contactNumber: "+1-640-315-7176",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "af1f26cb-b69e-4224-9157-25d20827cc5d",
      title: "Battle of the Sexes",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "5b1a9c06-a3e3-4c38-a1a9-99016e5be55d",
                "name": "Nicholas Wallace",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/32.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          quote: "What a fun interactive experience! The Battle of the Sexes got everyone involved.",
          author: "Valentina Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-395",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Alexander Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-563",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Kyle Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-253",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Anthony Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-978",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Samantha Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-797",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Sarah Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-389",
        },
        {
          quote: "What a fun interactive experience! The Battle of the Sexes got everyone involved.",
          author: "Rebecca Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-1027",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Michelle Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-303",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Christopher Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-808",
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
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-638-802-6257",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d6b3418b-06bb-46a2-8ee7-34bfdc386188",
      title: "Quiz Night Championship",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "d8994188-8bda-4242-849c-e41b2fce6ead",
                "name": "Helen Hawkins",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/23.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Nomsa Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-314",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Nora Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-1027",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Larry Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-334",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Edward Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-816",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Maya Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-766",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Benjamin Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-921",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Sarah Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-1026",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "dde4ffa8-2210-4b5d-82db-4d1c723764fa",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
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
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Spin the wheel and solve puzzles to win prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-615-311-2539",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "eec9e231-bc47-46ca-9eb9-37e56ae57528",
      title: "Cruise Ship Trivia",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "105 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "60d7fd21-05c4-41dd-9d87-0455ba1ab31e",
                "name": "Jeffrey Reeves",
                "role": "Assistant Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/57.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Roy Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-852",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Kenneth Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-476",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jessica Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-661",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Allison Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-824",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Lucas Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-751",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "647a1c2d-07e7-454d-b0ee-41889d41aa04",
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
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Spin the wheel and solve puzzles to win prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-256-228-5451",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ca6f85a4-1d52-454c-a202-5504703649e4",
      title: "Battle of the Sexes",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "9010af93-9f4e-40cb-afec-39080956e974",
                "name": "Adeline Parker",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Christopher Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-236",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Alexa Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-115",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Charlotte Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-536",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Kenneth Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-725",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Isabella Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Ellie Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-482",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Mark Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-749",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "103e8e65-409d-4252-80f7-c81a9b30b0f5",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
              "price": 21,
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
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    category: "Game Show",
    name: "Name That Tune",
    description: "Family teams compete in this classic game show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-310-156-5834",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e175ec5c-961f-4267-bf7d-f5602a0fc9b1",
      title: "Name That Tune",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: true,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "104 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "e42a79f7-b86d-494d-a520-33ab3da78fad",
                "name": "Samuel Collins",
                "role": "Assistant Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/33.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "George Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-735",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Sebastian Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-568",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Jeremy Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-1042",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Amanda Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-189",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Walter Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-219",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Harry Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-662",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Claire Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-381",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Olivia West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-708",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Virginia Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-952",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Cynthia Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-39",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "bc5198a8-4e64-432a-a769-c0ced54b838a",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 15,
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
