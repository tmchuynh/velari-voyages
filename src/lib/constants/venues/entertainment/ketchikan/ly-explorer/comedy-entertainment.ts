// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "7dc49e49-3c23-4ff5-92aa-a05c5c922412",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Hilarious roast-style comedy with guest participation",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-200-569-4138",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7eb4f8dc-3bd6-4742-a09c-2fe5a27e8618",
      title: "Clean Comedy Showcase",
      description: "Hilarious roast-style comedy with guest participation",
      tickets: {
        isRequired: true,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "ea9e34c7-7008-46d7-bace-d2e4b3a19290",
                "name": "George Hall",
                "role": "Musical Comedian",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Sketch Performer",
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Janet Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-731",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Virginia Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-467",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Kimberly Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-214",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Lily Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-165",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Kyle Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-987",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jessica Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-973",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Bryan Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-4",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Willie Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-438",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Henry Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-194",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4d193994-227a-449f-94ce-4bfec874352b",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 17,
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
    id: "7dc49e49-3c23-4ff5-92aa-a05c5c922412",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Hilarious roast-style comedy with guest participation",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-514-912-1498",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "83454567-0975-40df-95eb-4f670eabe92f",
      title: "Interactive Comedy",
      description: "Hilarious roast-style comedy with guest participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "843fc827-3966-4be1-801e-97e4ba2202cd",
                "name": "Lily Day",
                "role": "Stand-Up Comedian",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/83.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          author: "Isabella Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-572",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Luis Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-206",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Ellie Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-105",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Skylar Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-65",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Adeline Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-608",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Bobby Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-422",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ariana Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-837",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Savannah Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-702",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "707e5900-c00d-446d-9163-5a51bca84dbc",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 17,
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
    id: "7dc49e49-3c23-4ff5-92aa-a05c5c922412",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-891-374-3482",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "28a31987-745e-4bd8-b7b7-ecf32dafa3cd",
      title: "Comedy Sketch Show",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "37134ac4-2d1b-4850-8676-e4a527eedb3e",
                "name": "Nathan Wells",
                "role": "Stand-Up Comedian",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Storyteller",
                        "Sketch Performer",
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
          author: "Darrell Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-243",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Chen Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-106",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Christopher Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-104",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Amelia Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Donna Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-920",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Naomi Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-149",
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
    id: "7dc49e49-3c23-4ff5-92aa-a05c5c922412",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-736-428-6401",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6e05eab2-a450-4de0-b312-8d2bd8c4ec16",
      title: "Storytelling Comedy",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "df57b5eb-cb1c-407f-b2fb-40057095a75f",
                "name": "Amina Campbell",
                "role": "Stand-Up Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/84.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          author: "Nancy Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-22",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Philip Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Bella Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-129",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Gerald Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-297",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Naomi Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-494",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Ashley Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-395",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Patrick Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "4",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Sandra Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-1076",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Louis Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-93",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a6c3ae5e-ec69-4ece-b2d5-7a199f2465c0",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 20,
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
    isPopular: true
  },
  {
    id: "7dc49e49-3c23-4ff5-92aa-a05c5c922412",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Family-friendly comedy suitable for all ages",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-868-698-9597",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e24a84fb-9ea1-4bc3-8e24-2b21bfdad9bb",
      title: "Interactive Comedy",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "add34a18-07d2-4b00-87a8-4b2a835c8053",
                "name": "Albert Fox",
                "role": "Sketch Performer",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Storyteller",
                        "Improv Actor",
                        "Sketch Performer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Gerald Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-465",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Helen Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-472",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Jeffrey Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-798",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Jacob Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-634",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Amy Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-988",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Jesse Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-1020",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6d330e7f-c2fc-47ec-a0ee-630b8ff83398",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
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
    isPopular: true
  },
  {
    id: "7dc49e49-3c23-4ff5-92aa-a05c5c922412",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-356-115-8843",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "adb27379-131f-451e-befc-d7ecf9293575",
      title: "Adult Comedy Late Night",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "120 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "d5640e5a-8d0c-400e-a474-a32982d47941",
                "name": "Dennis Campbell",
                "role": "Comedy Writer",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/68.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Roy Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-458",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Stephen Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-56",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Dennis Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-168",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Naomi Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-699",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Mark Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-1031",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Eleanor Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-26",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Russell Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-1004",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "William Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-461",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6add1b9d-3fe3-4080-84c8-e4715b4093a8",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
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
    isPopular: false
  }
];
