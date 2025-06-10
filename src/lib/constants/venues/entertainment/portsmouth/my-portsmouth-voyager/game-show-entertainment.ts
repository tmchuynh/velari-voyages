// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-393-904-4799",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "25b09dd8-342e-4435-b080-b6fa385914c8",
      title: "Wheel of Fortune",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "e3f3b227-57a8-4ba7-a092-f75605b808f3",
                "name": "Adeline Porter",
                "role": "Assistant Host",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/65.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Bruce Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-116",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Alexander Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-266",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Pamela Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-702",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Larry Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-444",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Lisa Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-769",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Ellie Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-209",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Catherine Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-992",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Kinsley West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-269",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Stella Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-268",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Richard Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-711",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9b3a58bd-821e-439f-a9ff-681f68b2b682",
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
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Price is Right",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Price is Right performance times"
    },
    contact: {
      contactNumber: "+1-805-147-4666",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2172f4ca-0ae3-4425-be3a-37e90bfe2031",
      title: "Price is Right",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: true,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Price is Right performance times"
        }],
      performers: [        {
                "id": "acc7ca94-c273-4675-9d93-a33ed8ab1f20",
                "name": "Carol Carpenter",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/13.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Raymond Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-212",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Ella Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-339",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Chen Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-576",
        },
        {
          quote: "What a fun interactive experience! The Price is Right got everyone involved.",
          author: "Jack Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-109",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Jeffrey Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-994",
        },
        {
          quote: "What a fun interactive experience! The Price is Right got everyone involved.",
          author: "Harry Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-514",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Austin Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-693",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Aiden Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-754",
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
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Name That Tune",
    description: "Guess the song from just a few notes in this musical game",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-459-461-5174",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d99343a0-9371-4144-8eef-86922161c0e8",
      title: "Name That Tune",
      description: "Guess the song from just a few notes in this musical game",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "98b88b89-9030-4777-994a-2bb400b248c1",
                "name": "Lerato Watson",
                "role": "Trivia Expert",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/51.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Trivia Expert",
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
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Adam Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-421",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Frank Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-691",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Joshua Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-307",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Rajesh Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-699",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Joe Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-593",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Terry Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-545",
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
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-659-328-2366",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9259f068-46a0-4edc-a2e6-8449b162f1b7",
      title: "Newlywed Game",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "112 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "b8f52f46-a0ab-4466-9972-221fd1bdbede",
                "name": "Betty Hall",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/3.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Elizabeth Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "1",
        },
        {
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Isabella West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-911",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Nancy Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-333",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Priya Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-825",
        },
        {
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Thomas Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-871",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "James Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-7",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Maya Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-432",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "James Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-835",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Joseph Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-143",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Lerato Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-171",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0584155c-6208-4675-8081-2b1f9d20c247",
              "name": "Winner's Certificate",
              "description": "Personalized participation certificate",
              "price": 17,
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
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Price is Right",
    description: "Men vs. women in hilarious trivia and challenge competitions",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Price is Right performance times"
    },
    contact: {
      contactNumber: "+1-617-587-7678",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "523119cf-d4fa-49f2-a6f0-c23cfa20fcd1",
      title: "Price is Right",
      description: "Men vs. women in hilarious trivia and challenge competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Price is Right performance times"
        }],
      performers: [        {
                "id": "530a1949-68d7-4680-b9d5-41ee78f009ed",
                "name": "Keith Chambers",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/19.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
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
          quote: "What a fun interactive experience! The Price is Right got everyone involved.",
          author: "Naomi Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-923",
        },
        {
          quote: "What a fun interactive experience! The Price is Right got everyone involved.",
          author: "Anthony Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-647",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Harry Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-79",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Logan Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-425",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Genesis Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-939",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jason Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-189",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "William Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-358",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1d01fa9a-8464-47ed-b7f5-03af1ceaa4fd",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
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
    isPopular: true
  },
  {
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Spin the wheel and solve puzzles to win prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-613-275-8613",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a56c0629-4263-452c-9513-725e8f1d2ae3",
      title: "Newlywed Game",
      description: "Spin the wheel and solve puzzles to win prizes",
      tickets: {
        isRequired: false,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "b277c1cd-7067-48c4-b3b2-088ef9f0008d",
                "name": "Alexa Knight",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/42.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Laura Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-291",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Alexander Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-745",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Savannah Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-508",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Richard Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-637",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Luis Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-966",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Ella Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-363",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Sebastian Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-294",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Abigail Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-991",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "17af8fac-afd1-4ad0-b02e-1c778109d302",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 21,
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
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Team-based challenges combining trivia and physical tasks",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-702-425-2477",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c4f5b73d-6691-44a9-ac35-d178d35e6841",
      title: "Newlywed Game",
      description: "Team-based challenges combining trivia and physical tasks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "117 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "08b52957-9e41-4e2d-a5c5-d1d9b7df30b4",
                "name": "Kevin Nash",
                "role": "Entertainment Coordinator",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/78.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Ryan Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-791",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "James Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-272",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Terry Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-535",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Kinsley Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-464",
        },
        {
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Susan Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-345",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Ellie Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-402",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Joe Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-977",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "87045b52-85cc-40e0-9fc4-64f815f448f2",
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
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-323-713-2184",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d481fd50-76c5-4848-b60f-fe9d3c5ee6c1",
      title: "Cruise Ship Trivia",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "8770bfaf-06cb-449b-8ae4-ae7ef4231516",
                "name": "Andrew Keller",
                "role": "Game Show Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/37.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Liam Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-651",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Vincent Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-898",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Roy Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-518",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "George Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-687",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Brandon Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-118",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Anna Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-76",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Darrell Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-214",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Elizabeth Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-214",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Alexander Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-400",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4289e621-bf88-48b6-bb32-955f96a97b67",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 16,
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
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    category: "Game Show",
    name: "Price is Right",
    description: "Family teams compete in this classic game show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Price is Right performance times"
    },
    contact: {
      contactNumber: "+1-467-269-9072",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "054c89bd-6eb5-4754-b0cc-5c85bb45f2d1",
      title: "Price is Right",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: false,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Price is Right performance times"
        }],
      performers: [        {
                "id": "6701f377-6913-450d-acec-3c07f71a7427",
                "name": "Alice Chambers",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/5.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Genesis Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-1021",
        },
        {
          quote: "What a fun interactive experience! The Price is Right got everyone involved.",
          author: "Christopher Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-1037",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Kyle Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-272",
        },
        {
          quote: "What a fun interactive experience! The Price is Right got everyone involved.",
          author: "Virginia Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-944",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Tyler Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-809",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "980d0d09-2fb2-4096-9576-5698b48461a8",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 18,
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
  }
];
