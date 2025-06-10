// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "06bc4175-1349-49fc-a73a-8519c74fa5f9",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-752-611-6525",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9fa85647-1662-4b4d-bcad-47a72d6c4e5e",
      title: "Jeopardy Challenge",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "114 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "02f16da6-6f58-4a75-8d4a-dba29b1eaac0",
                "name": "Catherine Graham",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/16.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Amelia Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Amy Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-203",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Jeffrey Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-599",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Benjamin Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-104",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "John Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-632",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Diego Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-722",
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
    isPopular: true
  },
  {
    id: "06bc4175-1349-49fc-a73a-8519c74fa5f9",
    category: "Game Show",
    name: "Team Challenge",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Team Challenge performance times"
    },
    contact: {
      contactNumber: "+1-977-398-2195",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b5852253-152d-4307-88e8-71a76f4497f2",
      title: "Team Challenge",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: true,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Team Challenge performance times"
        }],
      performers: [        {
                "id": "d6e751f3-712d-4e43-bbee-1b32402d3477",
                "name": "Matthew Day",
                "role": "Assistant Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/59.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Alexander Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-959",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Joan Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-19",
        },
        {
          quote: "What a fun interactive experience! The Team Challenge got everyone involved.",
          author: "Gregory Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-693",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Margaret Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-61",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Allison Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-569",
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
    id: "06bc4175-1349-49fc-a73a-8519c74fa5f9",
    category: "Game Show",
    name: "Family Feud at Sea",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Family Feud at Sea performance times"
    },
    contact: {
      contactNumber: "+1-631-977-4524",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "011db5bb-b2ef-4e69-a001-22a6616d40d7",
      title: "Family Feud at Sea",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "60 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Family Feud at Sea performance times"
        }],
      performers: [        {
                "id": "766a85f0-4396-4aa4-8e3d-a7f1e5fe260f",
                "name": "Chen Harper",
                "role": "Assistant Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Trivia Expert",
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
          author: "Aaron Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-488",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Alan Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-549",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Katherine Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-1068",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Janet Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-927",
        },
        {
          quote: "What a fun interactive experience! The Family Feud at Sea got everyone involved.",
          author: "Roger Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-246",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "William Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-115",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Andrew Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-262",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "696460bd-25ce-4ce1-9716-483a4d3a309d",
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
    isPopular: false
  },
  {
    id: "06bc4175-1349-49fc-a73a-8519c74fa5f9",
    category: "Game Show",
    name: "Cruise Ship Trivia",
    description: "Make deals and take risks in this suspenseful game show",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Cruise Ship Trivia performance times"
    },
    contact: {
      contactNumber: "+1-540-268-5636",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "58662ad5-24d6-40ac-9920-e7b344b9088d",
      title: "Cruise Ship Trivia",
      description: "Make deals and take risks in this suspenseful game show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Cruise Ship Trivia performance times"
        }],
      performers: [        {
                "id": "79806ae0-3f87-4b7f-ae06-3e3eaee73ba5",
                "name": "Avery Jennings",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
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
          author: "Nancy Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-822",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Alexander Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-37",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "Ellie Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Leah Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-779",
        },
        {
          quote: "What a fun interactive experience! The Cruise Ship Trivia got everyone involved.",
          author: "George Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-996",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Bobby Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-44",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Bella Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-13",
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
    id: "06bc4175-1349-49fc-a73a-8519c74fa5f9",
    category: "Game Show",
    name: "Price is Right",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Price is Right performance times"
    },
    contact: {
      contactNumber: "+1-761-492-6791",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b575b6fd-70f7-43b3-8359-84bec8bb0156",
      title: "Price is Right",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "111 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Price is Right performance times"
        }],
      performers: [        {
                "id": "1c8114a0-9009-4fb6-b671-9308c08d2a0e",
                "name": "Cynthia Carpenter",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/8.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Olivia Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-376",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Peter Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-875",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Christine Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-206",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Randy Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-410",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Douglas Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-996",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Gary Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-449",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2fe46a2a-34ad-47f4-b807-236b9a75a3c5",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 5,
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
    id: "06bc4175-1349-49fc-a73a-8519c74fa5f9",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Guess the prices of various items to win amazing prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-958-748-7464",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "219d2c35-5e26-4d5a-8195-787a13dcdd6b",
      title: "Quiz Night Championship",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: true,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "0919ce2d-3829-4c02-985d-a5e6cb38401e",
                "name": "Chloe Fox",
                "role": "Entertainment Coordinator",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/82.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Oliver Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-1083",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Paul Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-391",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Alexander Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-1058",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Janet Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-267",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Thomas Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-205",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Oliver Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Carlos Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-151",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Emily Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-185",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Maya Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-1065",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Johnny Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-662",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ce8b14e2-8edd-47e9-9b9f-caa9e0644a50",
              "name": "Game Show T-Shirt",
              "description": "Contestant t-shirt from the show",
              "price": 22,
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
    id: "06bc4175-1349-49fc-a73a-8519c74fa5f9",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Guess the prices of various items to win amazing prizes",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-575-243-6180",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a898b314-ed96-4f06-b287-dbcb3b860baf",
      title: "Quiz Night Championship",
      description: "Guess the prices of various items to win amazing prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "7789ad84-8f6f-4451-81b7-b42b3e296ec1",
                "name": "Ralph Sutton",
                "role": "Trivia Expert",
                "bio": "Professional assistant host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Rebecca Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-362",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Jane Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-224",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Bella Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-140",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Robert Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-161",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Alexander Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-915",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Janet Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-972",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Valentina Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-963",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a589f61b-6e8e-4185-a9d2-d354b0686144",
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
