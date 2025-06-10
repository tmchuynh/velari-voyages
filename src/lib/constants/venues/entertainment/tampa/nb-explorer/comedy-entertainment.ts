// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-684-668-7928",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a65c9b75-b37c-475d-8f49-9f743ad9e68c",
      title: "Comedy Game Show",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "283682eb-fcd5-4b32-9331-29268947ef9e",
                "name": "George Fisher",
                "role": "Storyteller",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Storyteller",
                        "Improv Actor",
                        "Stand-Up Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Larry Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-724",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Nicholas Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-327",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Aria Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-32",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Timothy Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-291",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Sarah Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-307",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3c8cc0e6-dcd9-4307-a6f8-c60bfe685429",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 10,
              "currency": "USD"
      }
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
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    category: "Comedy",
    name: "Comedy Roast",
    description: "Humorous storytelling and comedic monologues",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Comedy Roast performance times"
    },
    contact: {
      contactNumber: "+1-579-627-3910",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2e6d427a-a826-492b-ac46-7944a5022e57",
      title: "Comedy Roast",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Comedy Roast performance times"
        }],
      performers: [        {
                "id": "a20a9e3d-8036-45e2-b1b7-4000f142e7b1",
                "name": "Kimberly Watson",
                "role": "Stand-Up Comedian",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/78.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Storyteller",
                        "Comedy Writer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Stephen Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-457",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Billy Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-752",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Larry Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-42",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Sarah Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-583",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Emma Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-39",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b5fe06e4-d948-4f8d-8e04-e96e6f2344cd",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 19,
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
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Adults-only late-night comedy with edgier material",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-305-550-7723",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3ac8a75c-5875-471a-9dbd-67603706ee2f",
      title: "Clean Comedy Showcase",
      description: "Adults-only late-night comedy with edgier material",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "38843a07-8c5d-465d-9a5c-811b2d4b7a8e",
                "name": "Jane Hall",
                "role": "Storyteller",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/8.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Catherine Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-536",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Mason Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-319",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Amanda Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-1013",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sophia Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-141",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Savannah Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Catherine Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-1024",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Wayne Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-21",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jack Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-136",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Spontaneous improvised comedy based on audience suggestions",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-583-939-9172",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "63f324db-d632-42c1-8c05-728f6c662f45",
      title: "Comedy Sketch Show",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "0748e36e-e582-4537-9b2b-7a2dd4d2d272",
                "name": "Jane Wells",
                "role": "Improv Actor",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/30.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
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
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Diego Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-1005",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Johnny Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-209",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Logan Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-632",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Johnny Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-737",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Priya Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-1058",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Dylan Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-470",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Bella Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-904",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Julie Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-992",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Alice Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-1040",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Eric Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-415",
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
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Interactive comedy where the audience becomes part of the show",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-201-840-8370",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "088644ae-c639-46a8-bab9-b82b1139bbf0",
      title: "Improv Comedy Show",
      description: "Interactive comedy where the audience becomes part of the show",
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
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "e1bb224b-1464-412f-9329-9fa73e993170",
                "name": "Grace Mason",
                "role": "Improv Actor",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Musical Comedian",
                        "Stand-Up Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Savannah Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-615",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Brian Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-367",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Russell Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-72",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Ariana Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-593",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "Dorothy Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-303",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f813880f-2df5-4627-be40-5bb193843b11",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 30,
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
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    category: "Comedy",
    name: "Musical Comedy",
    description: "Adults-only late-night comedy with edgier material",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Musical Comedy performance times"
    },
    contact: {
      contactNumber: "+1-910-990-3489",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1e787c41-d44f-454f-a6f4-3c5b69205f24",
      title: "Musical Comedy",
      description: "Adults-only late-night comedy with edgier material",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Musical Comedy performance times"
        }],
      performers: [        {
                "id": "78aa57e6-2837-4d38-a05a-80825ea0ec88",
                "name": "Ariana Gibson",
                "role": "Sketch Performer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/20.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Eleanor Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-625",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Miguel Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-561",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Cynthia Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-927",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Eugene Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-1075",
        },
        {
          quote: "The Musical Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Terry Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Miguel Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-708",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Ralph Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-525",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Jordan Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-1041",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Scarlett Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-668",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Christopher Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-1017",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "db175542-dedd-49e2-84b8-068560c5f357",
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
    isPopular: true
  },
  {
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Comedy performances featuring musical parodies and songs",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-500-641-5485",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bd7c5caa-d119-4016-80ff-33dd0d4dc0b9",
      title: "Adult Comedy Late Night",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "fca248d3-2c6f-4c16-8211-c4088254edb6",
                "name": "Alexander Porter",
                "role": "Stand-Up Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Catherine Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-554",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Brooklyn Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-816",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Oliver Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-994",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Brenda Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-747",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Brian Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-859",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Jason Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-212",
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
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Family-friendly comedy suitable for all ages",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-703-886-9798",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "98852d5d-8bf1-41a5-96b7-09b19770b9b7",
      title: "Interactive Comedy",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "69 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "aac69146-8cc2-4966-8f8e-344c69dae98d",
                "name": "Christopher Wells",
                "role": "Comedy Writer",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/11.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Hannah Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-318",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Matthew Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-366",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Matthew Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-749",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Jennifer Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-109",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Stephen Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-325",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "James Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-251",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Samantha Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-874",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b0ba0bd3-b452-49e7-8ea9-583098572a7d",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
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
  }
];
