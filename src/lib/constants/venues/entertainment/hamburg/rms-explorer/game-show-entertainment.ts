// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Spin the wheel and solve puzzles to win prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-356-327-6949",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4923c8a2-a308-4252-8748-0216243fd5be",
      title: "Battle of the Sexes",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "98 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "00171e07-14fc-4c95-8e9c-79817e1aaa48",
                "name": "Brian Coleman",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/17.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
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
          author: "Valentina Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-375",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joan Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-792",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Nomsa Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-326",
        },
        {
          quote: "What a fun interactive experience! The Battle of the Sexes got everyone involved.",
          author: "Vincent Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-37",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sandra Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-980",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1c1d6e73-df6e-4fc0-8156-671e3256342b",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 17,
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
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-766-328-7965",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4aff8c8b-f257-4904-8c4c-513da06f478a",
      title: "Pop Culture Quiz",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "118 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "1d5f96b3-174e-4aa7-9e7d-bd861453c668",
                "name": "Elijah Hayes",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/25.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Trivia Expert",
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Lisa Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-710",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Gabriel Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-578",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Dorothy Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-218",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Terry Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-982",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Christian Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-103",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Susan Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-665",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Katherine Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-520",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Aiden Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-810",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f02a1077-7370-40a8-a348-9f495c9ff096",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 20,
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
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Pop Culture Quiz",
    description: "Guess the prices of various items to win amazing prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Pop Culture Quiz performance times"
    },
    contact: {
      contactNumber: "+1-638-814-2869",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "02ba51a6-6dbd-49aa-96c1-2ff1a932f753",
      title: "Pop Culture Quiz",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Pop Culture Quiz performance times"
        }],
      performers: [        {
                "id": "f3acb317-4565-436a-a6ce-aa5780cebac4",
                "name": "Gregory Warren",
                "role": "Game Show Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/79.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Christine Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-893",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Alexander Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-882",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Daniel Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-732",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Michael Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-13",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Zachary West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-187",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Joseph Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-695",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Elijah Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-102",
        },
        {
          quote: "What a fun interactive experience! The Pop Culture Quiz got everyone involved.",
          author: "Richard Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-24",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Maya Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-440",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "39a87a93-3c63-4e48-8659-1309c56672a8",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 24,
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
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-644-141-4872",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e1a9565e-3a99-41df-91c8-a4d326a3dddb",
      title: "Deal or No Deal",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: false,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "7b8a57da-8bbf-495d-93d5-91778a111a30",
                "name": "Linda Crawford",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/49.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Dennis Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-157",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Avery Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-395",
        },
        {
          quote: "What a fun interactive experience! The Deal or No Deal got everyone involved.",
          author: "Julie Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-1023",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Sarah Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-954",
        },
        {
          quote: "What a fun interactive experience! The Deal or No Deal got everyone involved.",
          author: "Ellie Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-784",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Maya Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-437",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Keith Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "5",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "46802926-fae1-49dc-ac02-f7762fc82fb9",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 11,
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
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Name That Tune",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-944-247-3183",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e73cd9f9-17e1-44f7-8cd0-782e3cbfd93f",
      title: "Name That Tune",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "a4c66c70-612a-4a47-9d00-f83d733cce48",
                "name": "Amelia Bennett",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/35.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joshua Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-830",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Ryan Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-620",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Avery Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-957",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Brooklyn Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-455",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Matthew Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-759",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Barbara Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-898",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Jesse Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-663",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "b6372bcd-6e36-43cb-90f7-e60cd6dfc28c",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 3,
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
    isPopular: true
  },
  {
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Test your knowledge with cruise ship and travel trivia",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-397-136-8579",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e824050a-3fd7-4da8-865e-bb1feddf33de",
      title: "Family Feud at Sea",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "ce03fa20-f01b-479d-8a52-76b6f0ef5941",
                "name": "Lisa Dean",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/35.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Naomi Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-108",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Sofia Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-512",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Liam Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-450",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Riley Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-109",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Louis Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-565",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Jordan Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-906",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jessica Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-787",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Brooklyn Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-352",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Laura Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-604",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Ella Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-212",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "5c8875ae-ef86-4c8e-b14e-378ec6a69094",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 11,
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
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Deal or No Deal",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Deal or No Deal performance times"
    },
    contact: {
      contactNumber: "+1-891-498-4167",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9dd186fc-8121-4815-ac5d-f0471f153b50",
      title: "Deal or No Deal",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Deal or No Deal performance times"
        }],
      performers: [        {
                "id": "59b69b4b-002e-4cba-ad65-7e101993c8ea",
                "name": "Johnny Charlotte",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Bruce Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-88",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Ryan Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-1019",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Caroline Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-908",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Dorothy Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-1073",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Ariana Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-756",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Mateo Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-722",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Priya Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-192",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Dennis Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-591",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Dennis Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-892",
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
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Team Challenge",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-768-270-1698",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "aa94c42a-cc6d-429c-88da-8be4830809f1",
      title: "Team Challenge",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "82423933-e678-49cd-b618-848a5b5e9fdf",
                "name": "Gary Collins",
                "role": "Entertainment Coordinator",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/61.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Bryan Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-244",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Isabella Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-627",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Isabella Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-917",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Thabo Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-402",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Luis Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-439",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Gerald Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-881",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Jacob Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-219",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Julie Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-111",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Mateo Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-14",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Rajesh Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-619",
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
    id: "a98d3635-0cba-4d4b-9132-e13235cdd174",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Couples test how well they know each other",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-796-280-7850",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5559c723-6592-4d22-ad85-d23fa6bf743d",
      title: "Newlywed Game",
      description: "Couples test how well they know each other",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "ad8938a7-4113-4792-b16f-bb3b258372d5",
                "name": "Vincent Henderson",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/25.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Patrick Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-633",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "David Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Liam Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-169",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Andrew Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Kimberly Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-288",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Lerato Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Samuel Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-345",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "54c45328-b05d-4754-9532-32e610575eb7",
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
    isPopular: false
  }
];
