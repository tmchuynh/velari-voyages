// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-568-566-3065",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2146b04a-1eea-4ac5-97f8-d0941b787205",
      title: "Mind Reading & Mentalism",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "919f6e5d-c192-467e-875d-b58dc23fa0bf",
                "name": "Gerald Reed",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/56.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Comedy Magician",
                        "Escape Artist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Brian Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Riley Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-74",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Christian Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-366",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Gregory Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-287",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Brenda Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-156",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Christine Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-899",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Ellie Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-792",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "ce7e2888-5a3d-40f4-9652-79dc0130024f",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 21,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-865-494-2625",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "30490f3e-15d5-4fef-9f8b-e3e416aecb57",
      title: "Family Magic Show",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "7316672e-e2af-41e0-a6ed-8a9b724ede36",
                "name": "Kinsley Foster",
                "role": "Comedy Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Escape Artist",
                        "Comedy Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Matthew Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-657",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Ella Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-483",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Brooklyn Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-922",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Amina Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-480",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Henry West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-2",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Amina Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-582",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Gabriella Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-40",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Betty Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-446",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Larry Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-705",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-881-359-2800",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "378cf74f-7159-4160-bb2a-db3884f9584a",
      title: "Comedy Magic Show",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: true,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "4f8061d9-2d74-4150-bd2e-d2abea5519cd",
                "name": "Riley Porter",
                "role": "Mentalist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/22.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Magician",
                        "Illusionist",
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Gabriel Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-813",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Dennis Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-790",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Kenneth Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-1023",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Anthony Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Sarah Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "3",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Melissa Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-756",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Amelia Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-289",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Mason Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-424",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-601-412-4290",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "744de146-df64-4e5e-92ee-79ea27d065b4",
      title: "Interactive Magic",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "103 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "68959247-613c-4379-8cf3-08a5229bfa22",
                "name": "Bryan Keller",
                "role": "Escape Artist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/68.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Magician",
                        "Escape Artist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Aaron Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-291",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Alexander Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-233",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Aaliyah Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-834",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Christian Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-893",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Gary Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-187",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Thabo Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-696",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "8cabb1eb-2a86-4135-ad0f-a0b584dbcff5",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 26,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: true
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-222-686-9232",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f8474784-80f7-44dc-b2e8-c087a94d474e",
      title: "International Magic Acts",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "2f862506-4d82-4b72-9ad8-9dfb49d67556",
                "name": "Zachary Fletcher",
                "role": "Mentalist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/61.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Dorothy Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-104",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Harold Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-922",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Zola Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-430",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Roy Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-220",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Amy Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-1066",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Nicholas Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-869",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Priya Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-311",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f32827e2-c805-4a72-ad0f-1b2530c42470",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 26,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-793-265-1266",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "93c2c87a-3716-49ee-9dfc-742fab6deb3d",
      title: "Comedy Magic Show",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "ec1c3313-4152-4376-8394-b350d85d7298",
                "name": "Thandiwe Reeves",
                "role": "Escape Artist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/57.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Magician",
                        "Comedy Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Kinsley Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-914",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Alice Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-665",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Kevin Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-28",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Bobby Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-649",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Liam Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-803",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Susan Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-116",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Priya Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-379",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Thandiwe Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-115",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-562-859-2195",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5f810255-4ccb-494e-845e-00b7333e0fad",
      title: "International Magic Acts",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "e9326ed3-e91e-414a-998c-08780dda9d21",
                "name": "Zachary Morgan",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/79.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Illusionist",
                        "Escape Artist",
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "William Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-286",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Blake Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-140",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Maya Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-947",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Aaliyah Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-523",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Jerry Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-838",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "John Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-237",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2ac07739-f796-4044-9c0a-2ebb02ece5d5",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 17,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "Large-scale stage magic with elaborate props and illusions",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-747-453-5679",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "962c815c-9ee2-4507-91d1-ba86b1679e19",
      title: "Family Magic Show",
      description: "Large-scale stage magic with elaborate props and illusions",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "63551c7e-404b-4913-9e84-f2e6c31fb22d",
                "name": "Elizabeth Parker",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/14.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Comedy Magician",
                        "Illusionist",
                        "Escape Artist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Amelia Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-608",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Javier Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-787",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Brandon Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-483",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Virginia Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-923",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Wayne Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-43",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Eugene Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-134",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Douglas West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-448",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Brooklyn Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-796",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Terry Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-1027",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Billy Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-752",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2e235e51-637b-4fe0-9ca1-fade8df2d2db",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 17,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    category: "Magic Show",
    name: "Stage Magic Extravaganza",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Stage Magic Extravaganza performance times"
    },
    contact: {
      contactNumber: "+1-758-190-6583",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9833f409-3c24-4e61-ace0-342a65eb0ffd",
      title: "Stage Magic Extravaganza",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Stage Magic Extravaganza performance times"
        }],
      performers: [        {
                "id": "9bff38d1-879a-4ca1-adce-f2e8aa5c6293",
                "name": "Dennis Palmer",
                "role": "Escape Artist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/41.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Magician",
                        "Escape Artist",
                        "Comedy Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Luis Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-938",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Jennifer Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-841",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Sarah Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-138",
        },
        {
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Nancy Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-621",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Matthew Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-738",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Larry Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-144",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  }
];
