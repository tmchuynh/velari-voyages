// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "48fe885d-8d0d-479e-b581-35a33a238176",
    category: "Comedy",
    name: "Family Comedy Hour",
    description: "Comedy performances featuring musical parodies and songs",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Family Comedy Hour performance times"
    },
    contact: {
      contactNumber: "+1-340-717-1175",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4d92a249-9eb3-4f1f-bb76-35c547a49fc5",
      title: "Family Comedy Hour",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "76 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Family Comedy Hour performance times"
        }],
      performers: [        {
                "id": "176c7978-5d92-4d59-ba44-db02a9872e5c",
                "firstName": "Angela",
                "lastName": "Clark",
                "role": "Storyteller",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/45.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Sketch Performer",
                        "Storyteller",
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best comedy show I've seen in years! Angela Clark had perfect timing.",
          author: "Jose Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-1026",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Gabriella Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-582",
        },
        {
          quote: "Best comedy show I've seen in years! Angela Clark had perfect timing.",
          author: "Dennis Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-601",
        },
        {
          quote: "Best comedy show I've seen in years! Angela Clark had perfect timing.",
          author: "Gary Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-599",
        },
        {
          quote: "Best comedy show I've seen in years! Angela Clark had perfect timing.",
          author: "Pamela Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-28",
        },
        {
          quote: "I laughed until my sides hurt! Angela Clark is hilarious and so entertaining.",
          author: "Stella Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-657",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Randy Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-847",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: true
  },
  {
    id: "48fe885d-8d0d-479e-b581-35a33a238176",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Adults-only late-night comedy with edgier material",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-965-531-5799",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "558d352d-0b83-4908-a420-83c294f9eef7",
      title: "Comedy Game Show",
      description: "Adults-only late-night comedy with edgier material",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "10a6130e-c8eb-4c00-8fd9-588b0f2c3e7b",
                "firstName": "Ariana",
                "lastName": "Baker",
                "role": "Stand-Up Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/66.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Stand-Up Comedian",
                        "Improv Actor",
                        "Comedy Writer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! Ariana Baker is hilarious and so entertaining.",
          author: "Luis Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-1082",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Lucas Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-135",
        },
        {
          quote: "I laughed until my sides hurt! Ariana Baker is hilarious and so entertaining.",
          author: "George Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-282",
        },
        {
          quote: "I laughed until my sides hurt! Ariana Baker is hilarious and so entertaining.",
          author: "Anna Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-801",
        },
        {
          quote: "Best comedy show I've seen in years! Ariana Baker had perfect timing.",
          author: "Abigail Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-563",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Chloe Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-543",
        },
        {
          quote: "Best comedy show I've seen in years! Ariana Baker had perfect timing.",
          author: "Helen Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Adam Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-996",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Samantha Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-484",
        },
        {
          quote: "I laughed until my sides hurt! Ariana Baker is hilarious and so entertaining.",
          author: "Andrew Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-10",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a7459980-30fb-484a-bc72-3b102d13409f",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 22,
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
    id: "48fe885d-8d0d-479e-b581-35a33a238176",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Adults-only late-night comedy with edgier material",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-833-148-4552",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9f849b6c-6cc7-4c54-b5e1-73e8ca13adde",
      title: "Adult Comedy Late Night",
      description: "Adults-only late-night comedy with edgier material",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "72ec8e57-5f3d-4a4d-aa90-baa7b3d78255",
                "firstName": "John",
                "lastName": "Charlotte",
                "role": "Stand-Up Comedian",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Improv Actor",
                        "Comedy Writer",
                        "Stand-Up Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Eleanor Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-424",
        },
        {
          quote: "Best comedy show I've seen in years! John Charlotte had perfect timing.",
          author: "Javier Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-937",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Kimberly Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-1061",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Lerato Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-188",
        },
        {
          quote: "I laughed until my sides hurt! John Charlotte is hilarious and so entertaining.",
          author: "Timothy Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-750",
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
    isPopular: true
  },
  {
    id: "48fe885d-8d0d-479e-b581-35a33a238176",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Interactive comedy where the audience becomes part of the show",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-359-396-8746",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7c5a4033-a1c7-45f3-b715-7dd5d6aba6e9",
      title: "Interactive Comedy",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "42492cb5-eda3-4210-8d8f-03088b547116",
                "firstName": "Liam",
                "lastName": "Jennings",
                "role": "Sketch Performer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/39.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Sketch Performer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best comedy show I've seen in years! Liam Jennings had perfect timing.",
          author: "Carol Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-256",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Gabriella Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-108",
        },
        {
          quote: "I laughed until my sides hurt! Liam Jennings is hilarious and so entertaining.",
          author: "Sebastian Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-949",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Allison Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-571",
        },
        {
          quote: "Best comedy show I've seen in years! Liam Jennings had perfect timing.",
          author: "Justin Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-480",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Allison Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-35",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Lucas Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-436",
        },
        {
          quote: "Best comedy show I've seen in years! Liam Jennings had perfect timing.",
          author: "Sarah Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-67",
        },
        {
          quote: "I laughed until my sides hurt! Liam Jennings is hilarious and so entertaining.",
          author: "Ryan Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-444",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "90755d54-95c9-41d1-bedf-8e4cd658115a",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 11,
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
    id: "48fe885d-8d0d-479e-b581-35a33a238176",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Clean, wholesome comedy perfect for the entire family",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-678-334-2801",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cca53a5b-5f47-420b-ab0a-97b5bb793f19",
      title: "Comedy Sketch Show",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: true,
        price: 30,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "3c142a9b-900c-4e85-b3ff-e03ad52a82a2",
                "firstName": "Rachel",
                "lastName": "Marshall",
                "role": "Improv Actor",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Storyteller",
                        "Sketch Performer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Barbara Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-147",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Jesse Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-840",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Scarlett Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-905",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Amina Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-609",
        },
        {
          quote: "Best comedy show I've seen in years! Rachel Marshall had perfect timing.",
          author: "Ariana Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-626",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Bella Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-1075",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Sophia Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-321",
        },
        {
          quote: "Best comedy show I've seen in years! Rachel Marshall had perfect timing.",
          author: "Maria Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-737",
        },
        {
          quote: "Best comedy show I've seen in years! Rachel Marshall had perfect timing.",
          author: "Gary Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-81",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2bc6b620-80e0-4a0a-8f31-7b44c3532aad",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 15,
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
    id: "48fe885d-8d0d-479e-b581-35a33a238176",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Family-friendly comedy suitable for all ages",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-974-746-2312",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "743c3de8-3046-4e05-955c-761520c124e5",
      title: "Comedy Game Show",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "f2160c89-0553-4fca-96f5-e636b78212e9",
                "firstName": "Samantha",
                "lastName": "Marshall",
                "role": "Storyteller",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/51.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Adeline Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-556",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Skylar Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-56",
        },
        {
          quote: "I laughed until my sides hurt! Samantha Marshall is hilarious and so entertaining.",
          author: "Layla Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-836",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Victoria Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-1041",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Daniel Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-882",
        },
        {
          quote: "Best comedy show I've seen in years! Samantha Marshall had perfect timing.",
          author: "Betty Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-604",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Madelyn Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-976",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Emily Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-87",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Carol Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-671",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: false
  }
];
