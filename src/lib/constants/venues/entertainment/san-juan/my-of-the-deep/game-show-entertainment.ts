// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "40dad60e-c0b5-43dd-b08e-3bc6c07acaa8",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Family teams compete in this classic game show format",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-671-806-7945",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "aafff392-21a6-460a-b7c1-ac144089d713",
      title: "Deal or No Deal",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "40ad1b37-f1df-481a-8fe6-0759f8b666c6",
                "name": "Melissa Wallace",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/19.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Alexander Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "5",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Willie Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-980",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Sarah Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-862",
        },
        {
          quote: "What a fun interactive experience! The Deal or No Deal got everyone involved.",
          author: "Blake Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-460",
        },
        {
          quote: "What a fun interactive experience! The Deal or No Deal got everyone involved.",
          author: "George Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-190",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Elizabeth Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-73",
        },
        {
          quote: "What a fun interactive experience! The Deal or No Deal got everyone involved.",
          author: "Nomsa Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-1064",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Carol Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-420",
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
    id: "40dad60e-c0b5-43dd-b08e-3bc6c07acaa8",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Guess the prices of various items to win amazing prizes",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-984-373-1503",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6179f6cd-7c55-45bf-932b-b0ad7b9e0b21",
      title: "Cruise Ship Trivia",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: false,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "53f4dcff-ad16-4ad0-a516-7089b5022c49",
                "name": "Harper Baker",
                "role": "Entertainment Coordinator",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Abigail Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-469",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Elena Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-76",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sarah Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-927",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Liam Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-777",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Katherine Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-837",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Billy Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-39",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Joe Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-1028",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Logan Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-265",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sean Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-443",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "George Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-154",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "42a7006d-0404-41e0-9474-9144b4058843",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
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
    id: "40dad60e-c0b5-43dd-b08e-3bc6c07acaa8",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Make deals and take risks in this suspenseful game show",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-410-103-8580",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "706ba4a0-8cb5-47ff-8e5c-03570629533c",
      title: "Quiz Night Championship",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "93 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "0eb9cbdb-f903-4acc-91b1-4b0fc85e005f",
                "name": "Oliver Mitchell",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/58.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
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
          author: "Logan Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-1083",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Rachel Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-440",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Albert Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-405",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Rebecca Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-1069",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Roger Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-598",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aea86d8d-c654-4973-924a-ee931f6b1094",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 27,
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
    id: "40dad60e-c0b5-43dd-b08e-3bc6c07acaa8",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Guess the song from just a few notes in this musical game",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-932-703-6311",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "73ae56f4-4817-481a-b411-c481806d7b1f",
      title: "Newlywed Game",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "7f8e1441-d348-4b2b-bb5d-a67b6b2ac6ef",
                "name": "Audrey Montgomery",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/28.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Thandiwe Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-316",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Sandra Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-449",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Andrew Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-560",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jordan Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-208",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Darrell Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-643",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Helen Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-640",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "William Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-190",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jessica Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-90",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2cc2ddd1-6e5b-48da-8542-3ac51d1492ff",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
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
    id: "40dad60e-c0b5-43dd-b08e-3bc6c07acaa8",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Guess the song from just a few notes in this musical game",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-628-383-7147",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "710c8e56-7851-4d86-bcc7-a30619144ca4",
      title: "Pop Culture Quiz",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "81 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "9e4d98bc-5ea7-4e9b-947f-102ed7579113",
                "name": "Mary Baker",
                "role": "Entertainment Coordinator",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/17.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Diego Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-342",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Angela Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-971",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "John Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-850",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Liam Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-528",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Philip Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-664",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Eugene Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-729",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Willie Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-799",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Virginia Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "8",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ralph Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-398",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f3ce9766-455d-44d1-b2fe-f15acbb0c789",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 28,
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
    id: "40dad60e-c0b5-43dd-b08e-3bc6c07acaa8",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Family teams compete in this classic game show format",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-215-146-9253",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b76392e6-27a4-43fe-b2a0-9e7a6b892089",
      title: "Family Feud at Sea",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "84fdea8e-ba3a-4575-91ad-d12e78d7e88c",
                "name": "Mason Price",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/68.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Ariana Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-302",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Eugene Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-277",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Carlos Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-501",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Donna Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-206",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Peter Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-878",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3f2f46e5-057b-4a5d-bb26-3a9594e99617",
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
    id: "40dad60e-c0b5-43dd-b08e-3bc6c07acaa8",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Test your knowledge of current pop culture trends",
    imageUrl: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-974-439-4650",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "59ff571c-9c68-456e-b66c-1952aad02b4e",
      title: "Pop Culture Quiz",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: true,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "3b103ef1-6493-4054-be1a-b8941b856f83",
                "name": "Noah Chambers",
                "role": "Game Show Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/44.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Gregory Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-79",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Ashley Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-191",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Rachel Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-188",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Hannah Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-516",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Olivia Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-999",
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
        question: "Can children participate in game shows?",
        answer: "We have family game shows that welcome participants of all ages, as well as adult-only competitions.",
      },
      {
        question: "Are there prizes for winners?",
        answer: "Yes! Game show winners receive various prizes including cruise credits, merchandise, and special experiences.",
      }
    ],
    isPopular: false
  }
];
