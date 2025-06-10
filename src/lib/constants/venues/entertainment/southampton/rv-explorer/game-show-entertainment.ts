// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Guess the prices of various items to win amazing prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-562-661-9750",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cb629c9f-28bf-4ad1-bd3a-1ce8e6dcc667",
      title: "Pop Culture Quiz",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: true,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "78 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "204b9221-96c1-4518-baf9-d6624bf25325",
                "name": "Terry Ellis",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/19.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Anthony Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-818",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Alexander Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-793",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Genesis Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-857",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Maya Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-110",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Dorothy Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-405",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "419ff3c1-9dd4-4b2a-bf4f-8dc0c77683eb",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
              "price": 19,
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
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-518-231-4898",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f464c3ce-0262-4a83-91cb-82cb7c3dc80e",
      title: "Wheel of Fortune",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "107 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "7c2d3020-b87b-47ce-957d-c0068f49ab68",
                "name": "Thomas West",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/73.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Johnny Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-914",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Jordan Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-286",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Emily Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "9",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Frank Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-326",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Nathan Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-969",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Brian Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-131",
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
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-671-688-2322",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f28c79b8-33df-43f8-b8aa-81855ce89c51",
      title: "Family Feud at Sea",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "dcfd70f3-18b2-439b-8bc7-00c9a6615924",
                "name": "Logan Parker",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/40.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Elena Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-114",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Adam Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Matthew Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-372",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Laura Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-768",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "James Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-169",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Samuel Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-1079",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Claire Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-17",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Michael Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-100",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jack Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-636",
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
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    category: "Game Show",
    name: "Price is Right",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Price is Right performance times"
    },
    contact: {
      contactNumber: "+1-501-957-3343",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0e1ef5b1-676a-4627-ac35-83ede77cd3b1",
      title: "Price is Right",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Price is Right performance times"
        }],
      performers: [        {
                "id": "9b566b8d-9661-48dc-a8a9-6f3c59e5f563",
                "name": "David Ellis",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jonathan Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-458",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Jordan Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-1026",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brandon Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-1076",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Lawrence Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-579",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Aaron Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-414",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Stephen Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-584",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "543cc5cf-1260-4b51-b6dc-3a7bd202a94d",
              "name": "Trivia Book",
              "description": "Collection of game show questions",
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
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-904-947-3059",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5f856732-ff70-4ea5-a65a-9d60a0cf1a82",
      title: "Cruise Ship Trivia",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "ac4d3faa-16ed-43e7-a946-2c570f3b4a04",
                "name": "Christopher Lawson",
                "role": "Game Show Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/76.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Mary Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-661",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Emma Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-363",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Stephanie Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-961",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Ella Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-495",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Aaron Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-571",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Cynthia Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joshua Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-148",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Olivia Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-838",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Donna Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-575",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Donna Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-552",
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
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    category: "Game Show",
    name: "Name That Tune",
    description: "Couples test how well they know each other",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-892-810-7733",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4ac82701-a7e3-4b93-9ea7-f6d8e7a21f02",
      title: "Name That Tune",
      description: "Couples test how well they know each other",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "4f6a571e-a30e-4b91-9db3-89099d7f8f20",
                "name": "Eugene Sutton",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Brenda Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-492",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Rajesh Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-926",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Rebecca Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-617",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Amy Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-614",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Bobby Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-499",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Brandon Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-233",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Adam West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-321",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "6e47d5a2-47bd-403d-a1e9-b190fd989791",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 17,
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
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Couples test how well they know each other",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-652-183-8353",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "84766a5b-cb8e-4a49-98db-ea148b098c16",
      title: "Family Feud at Sea",
      description: "Couples test how well they know each other",
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
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "93724d1f-5feb-4f46-a441-7d00e321565b",
                "name": "Jonathan Graves",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/80.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Dennis Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-946",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Luis Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-27",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jack Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-532",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Scarlett Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-601",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Kinsley Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-483",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Emma Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-933",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "241b4db7-9564-4ce5-9594-ead81a5798b7",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
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
    isPopular: false
  },
  {
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-772-825-3582",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9bf9584d-ab22-42fa-b61d-34be60f9bcf3",
      title: "Newlywed Game",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: false,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "7c6c512e-1692-416b-8ccb-1e1def9cfb33",
                "name": "Skylar Campbell",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Christopher Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-1079",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ariana Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-70",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Blake Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-492",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Olivia Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-53",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Emily Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-269",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Ronald Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-712",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "57433268-2325-4c1b-b764-4634b6ace1da",
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
  }
];
