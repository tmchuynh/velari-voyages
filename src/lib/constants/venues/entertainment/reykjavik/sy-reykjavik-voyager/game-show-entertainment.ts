// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    category: "Game Show",
    name: "Team Challenge",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-396-938-1975",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c8ad14d1-0ef9-4e0d-8fad-c88288552509",
      title: "Team Challenge",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "77 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "60ff5e31-f2f0-4eab-b572-8e15da414376",
                "name": "Adeline Wallace",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/62.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gabriel Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-500",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Joshua Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-25",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Mason Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-21",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Anna Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-74",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joe Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-858",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Jane Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-956",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "James Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-556",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Katherine Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-839",
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
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-844-795-7313",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3fefbb89-c33e-4042-a0dc-15b8a61e7cbe",
      title: "Jeopardy Challenge",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "37cfe8bc-bab0-4a41-9eb4-a2c587a69a42",
                "name": "Ryan Murray",
                "role": "Assistant Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Amina Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-78",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Victor Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-250",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Ronald Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "9",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Edward Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "6",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Grace Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-713",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Stella Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-110",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Riley Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-945",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "625f2818-ea85-44bb-b0ae-69e168c4ae1a",
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
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-461-131-4398",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2291cf2b-2f04-4ac8-adee-592ee0970285",
      title: "Wheel of Fortune",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: true,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "c851a944-c635-401b-a91e-fdd4b2013fca",
                "name": "Zachary Chambers",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/9.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Aiden Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-20",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Aria Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-203",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Daniel Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-1038",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Skylar Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-264",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Nomsa Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-1015",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Bobby Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-738",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ellie Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-1064",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Samantha Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-100",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Antonio Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-757",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "ab7fc92d-e280-4147-9f2c-6e177adb0f02",
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
    isPopular: false
  },
  {
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-649-947-6229",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ef4f17a2-a91a-46b5-8c7e-9e4a4941b3cc",
      title: "Wheel of Fortune",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "68b82cdd-822b-44d3-960d-2cceb9416780",
                "name": "Louis Nash",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Jessica Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-44",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Wayne Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-445",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Maya Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-377",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Arthur Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-1074",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jonathan Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-861",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ariana Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-554",
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
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-603-378-5271",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6c085981-6bb8-463b-b635-c613fa033245",
      title: "Cruise Ship Trivia",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "60 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "2a11021f-dced-4a56-8a26-494813adf597",
                "name": "Roger West",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Mason Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-1051",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Samantha Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-858",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Miguel Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-348",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Kimberly Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-382",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Gerald Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-6",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jane Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-353",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Jack Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-974",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Billy Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-240",
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
  },
  {
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Test your knowledge with cruise ship and travel trivia",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-693-165-4255",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5a9e137e-a674-4cd5-bd8a-a27188beaec5",
      title: "Family Feud at Sea",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: false,
        price: 17,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "67 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "3a27c478-d01b-4cb2-8a2c-341a8847546e",
                "name": "Scott Ellis",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Alexander Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-587",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Joan Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-248",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ashley Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-1047",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Ella Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-632",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Lawrence Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-199",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Gabriel Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-827",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Gabriel Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-951",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jerry Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-938",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Samantha Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-514",
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
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    category: "Game Show",
    name: "Team Challenge",
    description: "Spin the wheel and solve puzzles to win prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-897-960-4589",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f62e3148-25a9-462e-8fbb-482097f99d24",
      title: "Team Challenge",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: false,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "7e4c4738-d31c-4607-bc9b-38309d2fef27",
                "name": "Sarah Charlotte",
                "role": "Trivia Expert",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/29.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Samantha Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-999",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Hannah Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-1075",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Luis Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-152",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Mary Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-581",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Liam Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-369",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Aaliyah Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-193",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jonathan Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-401",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sophia Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-27",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Noah Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-233",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "013b198a-bcb0-484b-8d8b-01050e0b67ce",
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
    isPopular: true
  },
  {
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    category: "Game Show",
    name: "Team Challenge",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-395-379-7166",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0832ab53-78d1-4f4b-9b30-dc5aa82bdc9a",
      title: "Team Challenge",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: true,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "32879b84-f16e-4e9b-aa2a-719e851753e5",
                "name": "Virginia Griffin",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/2.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Samantha Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-358",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joshua Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-391",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Timothy Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-503",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Amanda Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-489",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Laura Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-885",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Bella Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-799",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Blake Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-870",
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
  }
];
