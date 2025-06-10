// Game Show entertainment shows
// This file contains game show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const gameShowEntertainment: Entertainment[] = [
  {
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
    category: "Game Show",
    name: "Battle of the Sexes",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Battle of the Sexes performance times"
    },
    contact: {
      contactNumber: "+1-275-169-1776",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d1072ef4-9790-4743-8ce1-b7d52cca5125",
      title: "Battle of the Sexes",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Battle of the Sexes performance times"
        }],
      performers: [        {
                "id": "6df82b6e-b063-49c0-a2c5-67dc0a236f66",
                "name": "Victor Marshall",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/51.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Patricia Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-674",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Roger Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-217",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Kimberly Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-395",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Nathan Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-685",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Christopher Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-686",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Matthew Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-917",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Hannah Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-221",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Roger Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-48",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Stephanie Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-798",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e687ae6b-164e-4ae5-8358-5780ba557126",
              "name": "Game Show Pen Set",
              "description": "Official game show writing instruments",
              "price": 19,
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
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
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
      contactNumber: "+1-316-222-9768",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "44014cf6-cd06-450b-a25b-4f6cabeef2d2",
      title: "Quiz Night Championship",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "108 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "424617db-fb0c-4a25-bdc6-2ed0c998cf87",
                "name": "Richard Reeves",
                "role": "Assistant Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/68.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Assistant Host",
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
          author: "Maria Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-616",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Matthew Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-455",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Abigail Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-1000",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Allison Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-885",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Alice Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-505",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Patricia Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-825",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Lerato Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-156",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Leah Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-461",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Wayne Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-644",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c8b02594-beee-4dda-bdc1-a58fa67b3c1e",
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
    isPopular: false
  },
  {
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Test your knowledge with cruise ship and travel trivia",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-553-396-2193",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "663a06cf-ffd1-4c2e-8e6d-d45ffa86a2a4",
      title: "Wheel of Fortune",
      description: "Test your knowledge with cruise ship and travel trivia",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "55fb5207-544a-4fb8-84c3-66070bea34aa",
                "name": "Pamela Porter",
                "role": "Assistant Host",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Brooklyn Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Genesis Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-150",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Layla Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-607",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Thomas Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-660",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Noah Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-139",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Matthew Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-530",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Oliver Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-891",
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
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
    category: "Game Show",
    name: "Jeopardy Challenge",
    description: "Family teams compete in this classic game show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Jeopardy Challenge performance times"
    },
    contact: {
      contactNumber: "+1-593-443-7208",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0e112ac7-2406-42de-a258-a153d3e0980e",
      title: "Jeopardy Challenge",
      description: "Family teams compete in this classic game show format",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Jeopardy Challenge performance times"
        }],
      performers: [        {
                "id": "783bf30e-4d8a-43a4-aa0b-b530affb9cea",
                "name": "Emily Fox",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/72.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Jennifer Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-961",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Bryan Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-1039",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Emma Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-704",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Roger Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-106",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Joshua Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-874",
        },
        {
          quote: "What a fun interactive experience! The Jeopardy Challenge got everyone involved.",
          author: "Sophia Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-478",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Gary Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-1009",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Nora Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-158",
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
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
    category: "Game Show",
    name: "Quiz Night Championship",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Quiz Night Championship performance times"
    },
    contact: {
      contactNumber: "+1-769-936-1869",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4b3f2678-099e-4c06-83c9-3908bd966f6e",
      title: "Quiz Night Championship",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: true,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Quiz Night Championship performance times"
        }],
      performers: [        {
                "id": "7df4a8d7-5118-4904-918b-29fe3c759372",
                "name": "Matthew Hawkins",
                "role": "Assistant Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Bella Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-838",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Thandiwe Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-947",
        },
        {
          quote: "What a fun interactive experience! The Quiz Night Championship got everyone involved.",
          author: "Sarah Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-286",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Catherine Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-668",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Philip Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-184",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Joel Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-809",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Larry Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-532",
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
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
    category: "Game Show",
    name: "Name That Tune",
    description: "Test your knowledge of current pop culture trends",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Name That Tune performance times"
    },
    contact: {
      contactNumber: "+1-360-940-5524",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "64ce902c-aff2-4d58-a411-91083b451a3a",
      title: "Name That Tune",
      description: "Test your knowledge of current pop culture trends",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Name That Tune performance times"
        }],
      performers: [        {
                "id": "db874755-2938-4942-899f-5607487502e6",
                "name": "Hannah Grant",
                "role": "Trivia Expert",
                "bio": "Professional game show host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/68.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Nicholas Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-46",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Brandon Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-631",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Eleanor Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-749",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Samantha Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-610",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Samantha Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-422",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Kennedy Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-869",
        },
        {
          quote: "This game show brought out everyone's competitive spirit. So much fun!",
          author: "Jonathan Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-806",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Riley Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-939",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Christian Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "What a fun interactive experience! The Name That Tune got everyone involved.",
          author: "Christian Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "0",
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
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
    category: "Game Show",
    name: "Wheel of Fortune",
    description: "Answer questions in this classic quiz show format",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Wheel of Fortune performance times"
    },
    contact: {
      contactNumber: "+1-394-463-2612",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "df373557-020c-4085-adee-7662d2d2c7b4",
      title: "Wheel of Fortune",
      description: "Answer questions in this classic quiz show format",
      tickets: {
        isRequired: false,
        price: 17,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Wheel of Fortune performance times"
        }],
      performers: [        {
                "id": "07de1716-7161-47b0-9988-fb508ca4949f",
                "name": "Oliver Marshall",
                "role": "Game Show Host",
                "bio": "Professional trivia expert with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
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
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Hannah Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-64",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Carl Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-229",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Emma Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-733",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Daniel Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-453",
        },
        {
          quote: "What a fun interactive experience! The Wheel of Fortune got everyone involved.",
          author: "Joan Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-630",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b72cbcbc-96ef-4d98-88cd-c144d0410769",
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
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
    category: "Game Show",
    name: "Newlywed Game",
    description: "Ultimate trivia competition across multiple categories",
    image: "/images/entertainment/game-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Newlywed Game performance times"
    },
    contact: {
      contactNumber: "+1-285-541-9654",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5bfb7dd4-973c-4e5a-97ae-a755849d18d6",
      title: "Newlywed Game",
      description: "Ultimate trivia competition across multiple categories",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Newlywed Game performance times"
        }],
      performers: [        {
                "id": "1a69de8c-f083-49d7-a6d5-f8c701c8b0d8",
                "name": "Eugene Graham",
                "role": "Assistant Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/74.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Ashley Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-335",
        },
        {
          quote: "Great family entertainment. Everyone from kids to grandparents enjoyed it.",
          author: "Zoe Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-78",
        },
        {
          quote: "I won a prize and had such a great time! The host undefined undefined was energetic and engaging.",
          author: "Mark Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-549",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Carol Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-2",
        },
        {
          quote: "Interactive entertainment at its best! The whole audience was participating.",
          author: "Priya Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-965",
        },
        {
          quote: "The trivia was challenging but fair. Loved testing my knowledge!",
          author: "Nicholas Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-978",
        },
        {
          quote: "What a fun interactive experience! The Newlywed Game got everyone involved.",
          author: "Jane Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-7",
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
  }
];
