// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Adults-only late-night comedy with edgier material",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-222-369-2228",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bcd90fd8-509d-4d15-b28a-48a2e5f589eb",
      title: "Comedy Sketch Show",
      description: "Adults-only late-night comedy with edgier material",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "bb756a17-6fb3-4458-85a4-6d826429d083",
                "name": "Sean Payne",
                "role": "Musical Comedian",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Gerald Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-342",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Aaliyah Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-917",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Lerato Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-954",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Adam Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-587",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Elena Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-155",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Carlos West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-867",
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
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Game show format with comedic challenges and prizes",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-262-682-1283",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3a40b9c3-0aac-4e5a-9124-6729ba744d21",
      title: "Stand-Up Comedy Night",
      description: "Game show format with comedic challenges and prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "1ea4843d-36ef-4d28-9f14-ec491d689d22",
                "name": "Samantha Jennings",
                "role": "Sketch Performer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/22.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Musical Comedian",
                        "Improv Actor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Nancy Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-517",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Nicholas Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-245",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Jane Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-488",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Donna Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-105",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Angela Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-311",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Scott Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Eleanor Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-945",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Jordan Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-118",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "56d224f8-42d6-4889-a2fd-751d98c8460c",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 19,
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
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Magic tricks combined with hilarious comedy routines",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-487-164-7810",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f70ae3ff-7a91-47d9-b7ad-b41fb5bc2c8c",
      title: "Comedy Sketch Show",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "252e18f8-e2b4-4cea-b4ce-1b6192c2d43d",
                "name": "Jordan Carpenter",
                "role": "Comedy Writer",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/77.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Claire Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-742",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Terry Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Evelyn Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-430",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Darrell Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-620",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Albert Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-26",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Kinsley Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-767",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Dorothy Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-535",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Claire Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-506",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Juan Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-589",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Javier Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-778",
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
    isPopular: false
  },
  {
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Spontaneous improvised comedy based on audience suggestions",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-954-120-6566",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "42a5ccb1-426a-4e5a-b36b-90a2b53b540d",
      title: "Stand-Up Comedy Night",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "28e7304f-3184-45f3-936f-a3d889e1faab",
                "name": "Eugene Chambers",
                "role": "Storyteller",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/76.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Anna Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-426",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Amina Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-663",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Emily Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-814",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Javier Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-834",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Deborah Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-609",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Larry Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-762",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Kyle Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-683",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Arthur Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-861",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Christian Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-623",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8fc4499d-cb86-412d-9d4d-45fa1a231891",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 24,
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
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Spontaneous improvised comedy based on audience suggestions",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-787-175-6233",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "63ec1c19-6247-41c7-b3f6-eb5039b8c34b",
      title: "Comedy Sketch Show",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "bbf7f930-77ea-4263-8f9e-0fc37b0d07f2",
                "name": "Ella Coleman",
                "role": "Storyteller",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/50.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Sketch Performer",
                        "Comedy Writer",
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
          author: "Olivia Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-449",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Zoe Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-764",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Willie Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-362",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Marcus Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-739",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Linda Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-568",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Harold Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-1043",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Ryan Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-212",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jonathan Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-930",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "efa9819b-6a70-49ce-9878-11372c027165",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
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
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Family Comedy Hour",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Family Comedy Hour performance times"
    },
    contact: {
      contactNumber: "+1-290-645-7411",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c08aeb33-8ac0-4801-8611-051241b821cf",
      title: "Family Comedy Hour",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: true,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Family Comedy Hour performance times"
        }],
      performers: [        {
                "id": "55a2d6a0-17eb-4b60-bfa1-0963e15a9463",
                "name": "Bobby Lawson",
                "role": "Musical Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/82.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "John Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-743",
        },
        {
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "Jerry Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-488",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Walter Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-133",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Matthew Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-662",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Leah Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-673",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Riley Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-361",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Caroline Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-315",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Claire Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-919",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Valentina Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-980",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Mason Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-964",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "45a79e7e-caaf-4208-aaa4-2f5d90438cec",
              "name": "Comedian's Joke Book",
              "description": "Collection of original jokes and stories",
              "price": 11,
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
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Spontaneous improvised comedy based on audience suggestions",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-973-213-1042",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1d6d8e86-0174-4ee5-8b78-87262b0bbcd0",
      title: "Adult Comedy Late Night",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: true,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "35161aef-95dd-47d3-9c8a-10b5be1ffb8c",
                "name": "Audrey Clark",
                "role": "Improv Actor",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/3.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          author: "Alan Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-267",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Rachel Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-508",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Alan Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-953",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Olivia Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-190",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Samuel Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-527",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f7de4dbd-f9e3-4058-ba7f-8297e77cfeeb",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
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
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Family Comedy Hour",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Family Comedy Hour performance times"
    },
    contact: {
      contactNumber: "+1-571-347-7329",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "62be66d8-da6d-499a-9814-f981e81fd9be",
      title: "Family Comedy Hour",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Family Comedy Hour performance times"
        }],
      performers: [        {
                "id": "49d9896f-587b-40b6-94b9-ed04c3be131a",
                "name": "Madelyn Foster",
                "role": "Musical Comedian",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/28.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "George Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-863",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Lerato Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-893",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Chloe Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-447",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Bella Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-377",
        },
        {
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "Justin Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-101",
        },
        {
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "Aaliyah Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-452",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Layla Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-1040",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Joseph Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-294",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Stephen Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-248",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Blake Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-893",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "46f6bb27-0c5a-430e-9f54-e3ffddfa90e3",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 20,
              "currency": "USD"
      }
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
  },
  {
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Game show format with comedic challenges and prizes",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-291-941-2086",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6f5613d4-052d-4202-8e70-b6736cb5a830",
      title: "Interactive Comedy",
      description: "Game show format with comedic challenges and prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "cb52f27c-cfb5-4700-a7f8-b0de377682af",
                "name": "Nora Cooper",
                "role": "Storyteller",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/62.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Benjamin Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-150",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jesse Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-836",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Zola Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-108",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Thandiwe Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Sandra Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-1062",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Liam Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-341",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Emma Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-16",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Adeline Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-72",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Johnny Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-625",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "99676760-fa0b-45d5-b709-68d34576f8cf",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 19,
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
  }
];
