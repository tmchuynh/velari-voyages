// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Humorous storytelling and comedic monologues",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-600-547-4799",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "33f81f2c-d2c6-449a-baf3-b1103666e9c9",
      title: "Improv Comedy Show",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "45862c94-e64f-4ffd-856f-b3da0af3dce8",
                "name": "Louis Coleman",
                "role": "Stand-Up Comedian",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/70.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Stand-Up Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Willie Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ariana Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-623",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Sofia Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-828",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Bryan Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-831",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Matthew Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-594",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b690933a-bc6a-436e-b9cb-74c815472f3e",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 26,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Musical Comedy",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Musical Comedy performance times"
    },
    contact: {
      contactNumber: "+1-702-254-3117",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "41030d3b-1990-4aaf-833c-0770b3d5c69d",
      title: "Musical Comedy",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: true,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Musical Comedy performance times"
        }],
      performers: [        {
                "id": "aeeacdf6-92a3-45d9-ad5a-4add60ad76d4",
                "name": "Adeline Carpenter",
                "role": "Storyteller",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Storyteller",
                        "Stand-Up Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Amina Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-465",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Christopher Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-829",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Julie Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-838",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Patricia Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-1053",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Lerato Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-720",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Gabriel Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-90",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Elena Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-481",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Skylar Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-646",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Joseph Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-772",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7df65d64-05c9-4a60-855e-436a966847c8",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 16,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: false
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-288-285-2529",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1efa0c7c-2ada-4d87-8ba2-b0c089a89fb1",
      title: "Adult Comedy Late Night",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: true,
        price: 30,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "96944286-c800-46d9-8e2b-f5cf688529af",
                "name": "Allison Stewart",
                "role": "Storyteller",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/18.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Stand-Up Comedian",
                        "Improv Actor",
                        "Storyteller"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Willie Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-209",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Sandra Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-799",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Kenneth West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-337",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Rajesh Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-88",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Keith Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-671",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Bruce Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-119",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Susan Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-758",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Savannah Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-694",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Grace Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-730",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Jose Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-755",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "63cc7bfe-c7d7-4948-91e3-3c4fb0c905c1",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 24,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Musical Comedy",
    description: "Hilarious roast-style comedy with guest participation",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Musical Comedy performance times"
    },
    contact: {
      contactNumber: "+1-323-708-2183",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "12db329c-4d96-498b-a464-12cf633a6eb5",
      title: "Musical Comedy",
      description: "Hilarious roast-style comedy with guest participation",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Musical Comedy performance times"
        }],
      performers: [        {
                "id": "79f7802e-a29a-4e27-b26c-23ccb5be2d38",
                "name": "Gabriel Gardner",
                "role": "Comedy Writer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/73.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Musical Comedian",
                        "Storyteller"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Vincent Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-66",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Ellie Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-130",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Billy Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-1008",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Chloe Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Abigail Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-736",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Madelyn Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-163",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Lisa Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-114",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Scarlett Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-261",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Helen Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-496",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5ad64271-fa0c-4635-a477-c6d83a014663",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 27,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Magic tricks combined with hilarious comedy routines",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-925-500-6633",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6a9d616c-443c-4f47-bb6b-9a5a3d395984",
      title: "Improv Comedy Show",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "fcd7398b-e63a-42a6-b6ef-efc29cb3437a",
                "name": "Patricia Hayes",
                "role": "Stand-Up Comedian",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Stand-Up Comedian",
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Nicholas Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-937",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Samantha Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-210",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jordan Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-739",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Kimberly Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-452",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Mark Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-746",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0ad6a1df-e2c3-4132-ab97-cbb6c1719bc8",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 21,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: false
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-699-779-3588",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4c2c7048-b222-46dd-a385-4e3d9f94abdd",
      title: "Adult Comedy Late Night",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "8a31a611-9bf6-44a9-9e3b-8595bfcb5289",
                "name": "Jessica Marshall",
                "role": "Storyteller",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/49.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Stand-Up Comedian",
                        "Improv Actor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Louis Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-340",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Rajesh Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-872",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Bella Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-760",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Jack Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "2",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Deborah Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-976",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Zola Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-367",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Ella Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-845",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Thandiwe Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-609",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ariana Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-295",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Miguel Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-646",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "13f5be8e-98b9-481a-83c4-285802b53ab5",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 15,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: false
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Game show format with comedic challenges and prizes",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-280-140-7386",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "034bcb7d-0e67-4edc-a78e-a4cc0cf7f7d4",
      title: "Stand-Up Comedy Night",
      description: "Game show format with comedic challenges and prizes",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "72d9a311-c643-40f5-be0b-fafee5f1ad0e",
                "name": "Michelle West",
                "role": "Musical Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/77.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Stand-Up Comedian",
                        "Sketch Performer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Nomsa Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-943",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Rebecca Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-477",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Samantha Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-886",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Ronald Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-671",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sandra Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-718",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      }
    ],
    isPopular: false
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-529-835-5424",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5ee0de9c-4530-4dc3-aa51-9c5fd87520e4",
      title: "Interactive Comedy",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "bae92ecb-6528-4d5a-ace3-24c36d97ee6f",
                "name": "Christopher Holloway",
                "role": "Improv Actor",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/54.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Musical Comedian",
                        "Sketch Performer",
                        "Storyteller"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Jeremy Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-572",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Brenda Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-869",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Scarlett Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-388",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Scarlett Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-828",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Grace Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-809",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Luis Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-624",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Zachary Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-70",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Matthew Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-127",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "935aab86-bfe3-4c74-92d1-33c492f86031",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 10,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Magic tricks combined with hilarious comedy routines",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-965-246-6847",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "38c7654e-fc6d-4ebc-96a9-bc81d0c6d309",
      title: "Improv Comedy Show",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "75 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "60dedd4d-d15f-4bff-b799-b200f1387791",
                "name": "Benjamin Gardner",
                "role": "Sketch Performer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/10.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Musical Comedian",
                        "Sketch Performer",
                        "Comedy Writer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Jerry Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-475",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "Kimberly Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-565",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Betty Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-714",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "Emily Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-538",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "Antonio Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-974",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d729fc13-30d8-4b2e-956b-a3be399d79f8",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 18,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      }
    ],
    isPopular: true
  },
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    category: "Comedy",
    name: "Comedy Magic",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Comedy Magic performance times"
    },
    contact: {
      contactNumber: "+1-850-800-1833",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e68bf341-f03d-4d55-a948-3359f1e01824",
      title: "Comedy Magic",
      description: "Comedy sketches and parodies performed by talented actors",
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
                "description": "Comedy Magic performance times"
        }],
      performers: [        {
                "id": "74cdd139-f375-4608-9fe5-b256282c6dc4",
                "name": "Joan Reed",
                "role": "Stand-Up Comedian",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/75.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Stand-Up Comedian",
                        "Improv Actor",
                        "Storyteller"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Pamela Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Margaret Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-447",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Eleanor Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-225",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Abigail Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-491",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Wayne Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-214",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Timothy Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "9",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Abigail Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-721",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      }
    ],
    isPopular: false
  }
];
