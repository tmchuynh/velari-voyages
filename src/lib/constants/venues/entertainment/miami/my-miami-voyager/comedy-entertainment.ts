// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "5c581ce5-29ce-4267-9aae-8803c78c0486",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Magic tricks combined with hilarious comedy routines",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-309-766-2461",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6d39f356-9b33-4bc2-a0f5-fe27dde4d126",
      title: "Storytelling Comedy",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "7f149b40-0ddc-4c1d-9c70-f2ab45a23fd3",
                "name": "Nicole Lawson",
                "role": "Comedy Writer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Jeremy Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Joan Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-1073",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Juan Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-786",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Sophia Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-966",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Nicholas Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-87",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Luis Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-391",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Dylan Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-778",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Harold Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-832",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    isPopular: true
  },
  {
    id: "5c581ce5-29ce-4267-9aae-8803c78c0486",
    category: "Comedy",
    name: "Comedy Magic",
    description: "Humorous storytelling and comedic monologues",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Comedy Magic performance times"
    },
    contact: {
      contactNumber: "+1-512-891-9291",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d5032e95-1b34-4ff5-bdc8-bf4a07af3a22",
      title: "Comedy Magic",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: false,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Comedy Magic performance times"
        }],
      performers: [        {
                "id": "e33f2dbc-1f9b-4866-85fc-47d4bf8b817d",
                "name": "Roger Hall",
                "role": "Storyteller",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Comedy Writer",
                        "Sketch Performer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Carol Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-950",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Ella Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-195",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Brandon Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-1078",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Abigail Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-944",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Raymond Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-459",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Abigail Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-234",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Pamela Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-533",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "074b7f2a-5e07-40b5-9ba3-1132638a4dd3",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 24,
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
    isPopular: true
  },
  {
    id: "5c581ce5-29ce-4267-9aae-8803c78c0486",
    category: "Comedy",
    name: "Family Comedy Hour",
    description: "Game show format with comedic challenges and prizes",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Family Comedy Hour performance times"
    },
    contact: {
      contactNumber: "+1-551-906-7778",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f4291427-0114-4a6a-af95-dade4b8b31d3",
      title: "Family Comedy Hour",
      description: "Game show format with comedic challenges and prizes",
      tickets: {
        isRequired: true,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Family Comedy Hour performance times"
        }],
      performers: [        {
                "id": "1492aa12-b9d2-4e34-a49a-8b5792dd8ea8",
                "name": "Javier Day",
                "role": "Comedy Writer",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Storyteller",
                        "Musical Comedian",
                        "Sketch Performer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Billy Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-824",
        },
        {
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "John Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-214",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Wei Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-877",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Dorothy Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-343",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Liam Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-749",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e2ced5d2-608d-4fb1-a324-b0e44974dec5",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 22,
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
    id: "5c581ce5-29ce-4267-9aae-8803c78c0486",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-773-303-8149",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2bfc33c2-78e6-41a8-908f-205eca0f7bc6",
      title: "Storytelling Comedy",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "cd5d1b2b-9ae3-4476-a6b5-9b1d76bda4d0",
                "name": "Joshua Graves",
                "role": "Sketch Performer",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/10.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Comedy Writer",
                        "Sketch Performer",
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Pamela Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-222",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Lucas Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-775",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Amelia Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-751",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Madelyn Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-531",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Christian Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-846",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Savannah West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-396",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Sarah Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-154",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Louis Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-677",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Lawrence Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-713",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Jeremy Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-309",
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
    id: "5c581ce5-29ce-4267-9aae-8803c78c0486",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Comedy performances featuring musical parodies and songs",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-543-583-3969",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "624f87db-8f3b-4ef0-8ded-f8f632943c49",
      title: "Storytelling Comedy",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "fc0ce2f4-6b79-48a8-8bc5-eb36946586f0",
                "name": "Brenda Hudson",
                "role": "Storyteller",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/59.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Storyteller",
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Lily Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-522",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "John Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-700",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Priya Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-146",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Mason West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-982",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Rachel Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-390",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Audrey Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "1",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Samuel Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-934",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Nathan Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Stephen Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-180",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Gabriel Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-547",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "5c581ce5-29ce-4267-9aae-8803c78c0486",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Game show format with comedic challenges and prizes",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-273-487-9910",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7b6f8acb-953e-41c5-82a9-a15647e2a1f9",
      title: "Adult Comedy Late Night",
      description: "Game show format with comedic challenges and prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "7e531d30-de49-4b16-8e9c-fc86b39c0861",
                "name": "Zoe Knight",
                "role": "Storyteller",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/52.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Stand-Up Comedian",
                        "Storyteller"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Maria Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-415",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Samantha Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-649",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Christian Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-689",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Sandra Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-555",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Roy Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Douglas Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-715",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Brenda Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-686",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Willie Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-564",
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
    id: "5c581ce5-29ce-4267-9aae-8803c78c0486",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Magic tricks combined with hilarious comedy routines",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-575-248-4484",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b0132ef4-7ec6-4ac6-bdbb-1267f4f4e8ff",
      title: "Improv Comedy Show",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "62bf508e-624d-499a-a66c-3e7fcbff3efd",
                "name": "Susan Hunter",
                "role": "Musical Comedian",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/41.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Eleanor Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-169",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "Sandra Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-155",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Roy Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-593",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Stephanie Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-989",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Thomas Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-905",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Aria Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-1055",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Kinsley Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-1028",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Jeremy Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-1067",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "4cdea690-1ae6-4eeb-9f80-fd29d79398b3",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 13,
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
    id: "5c581ce5-29ce-4267-9aae-8803c78c0486",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Adults-only late-night comedy with edgier material",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-391-933-8834",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bad7f61e-29cd-4d5f-8e52-7d11023c93c1",
      title: "Storytelling Comedy",
      description: "Adults-only late-night comedy with edgier material",
      tickets: {
        isRequired: false,
        price: 43,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "1539558f-ad6a-4751-894e-80535df1d0ab",
                "name": "Joshua Gibson",
                "role": "Sketch Performer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/54.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Priya Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-425",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Deborah West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-1041",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sebastian Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Cynthia Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-357",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Caroline Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-169",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Janet Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-441",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "368f4f7d-1d8e-4c7c-a90e-e1163a9f9dd8",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 21,
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
  }
];
