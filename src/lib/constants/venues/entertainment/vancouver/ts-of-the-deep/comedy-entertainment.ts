// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "0af189c1-ee30-4ef0-95a0-418289130cde",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Family-friendly comedy suitable for all ages",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-999-988-5322",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a0ca9312-f4b0-45ae-8a88-647bfe5c954c",
      title: "Comedy Game Show",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "67 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "a2f94f95-d3ab-4755-90ca-27b1d8a2f6e5",
                "name": "Janet Curtis",
                "role": "Sketch Performer",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/63.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Stand-Up Comedian",
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Logan Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-281",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Sebastian Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-977",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Alexander Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-434",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Alexander Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-287",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Maria Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-409",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Sophia Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-566",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "519da93b-5c7e-4ba5-a8a9-5897f34443f1",
              "name": "Comedian's Joke Book",
              "description": "Collection of original jokes and stories",
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
    isPopular: true
  },
  {
    id: "0af189c1-ee30-4ef0-95a0-418289130cde",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Game show format with comedic challenges and prizes",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-661-200-8103",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "80ebd990-15de-438e-91cb-002ba9bb830a",
      title: "Comedy Sketch Show",
      description: "Game show format with comedic challenges and prizes",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "8d32fcfd-95e3-42a0-ae39-39ea772c9e21",
                "name": "Timothy Fox",
                "role": "Storyteller",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Sketch Performer",
                        "Comedy Writer",
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
          author: "Austin Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-99",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Tyler Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-677",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Chloe Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-114",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Richard Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-7",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Robert Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-1042",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Rajesh Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-191",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Christine Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-807",
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
    id: "0af189c1-ee30-4ef0-95a0-418289130cde",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Spontaneous improvised comedy based on audience suggestions",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-929-636-6541",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d9654f29-9ee4-4e74-8428-9cfe6c1da8bf",
      title: "Comedy Game Show",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "114 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "4ccb00f7-1a8b-47e4-bc7a-13cbceeb882f",
                "name": "Noah Graham",
                "role": "Comedy Writer",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/10.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Comedy Writer",
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
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Isabella Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-257",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sandra Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-705",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Aaliyah Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-342",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Oliver Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-240",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Lisa Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-365",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Janet Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-385",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "926ff2f4-aa7d-4dd8-a6b7-93e58a035e0f",
              "name": "Comedian's Joke Book",
              "description": "Collection of original jokes and stories",
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
    id: "0af189c1-ee30-4ef0-95a0-418289130cde",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-778-912-3736",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0d8732a2-752e-4701-9161-74b144a189c1",
      title: "Comedy Sketch Show",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "0e7946a0-acd6-487a-9044-d8d971e600f8",
                "name": "Samantha Palmer",
                "role": "Stand-Up Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/47.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Randy Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-466",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Tyler Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-960",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Miguel Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-796",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Steven Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-552",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Eleanor Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-900",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Harold Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-519",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "0af189c1-ee30-4ef0-95a0-418289130cde",
    category: "Comedy",
    name: "Musical Comedy",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Musical Comedy performance times"
    },
    contact: {
      contactNumber: "+1-661-418-7196",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f55489f6-625b-48ab-a704-f819a2ab3a10",
      title: "Musical Comedy",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Musical Comedy performance times"
        }],
      performers: [        {
                "id": "55026705-b5f2-4581-aa76-7b6190947696",
                "name": "Matthew Marshall",
                "role": "Musical Comedian",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Sketch Performer",
                        "Comedy Writer",
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Brooklyn Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-857",
        },
        {
          quote: "The Musical Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Dorothy Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-388",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Alexa Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-797",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Allison Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-773",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Alexa Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-802",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Richard Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-138",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Jordan Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-401",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Pamela Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-970",
        },
        {
          quote: "The Musical Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Naomi Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-890",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "ab0a566b-3084-4649-837b-548b5ff35a49",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 14,
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
    id: "0af189c1-ee30-4ef0-95a0-418289130cde",
    category: "Comedy",
    name: "Comedy Roast",
    description: "Interactive comedy where the audience becomes part of the show",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Comedy Roast performance times"
    },
    contact: {
      contactNumber: "+1-255-824-2999",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "603b8fb2-23de-4e08-b9e0-c706530fe67f",
      title: "Comedy Roast",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: true,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Comedy Roast performance times"
        }],
      performers: [        {
                "id": "f7ccec4e-6be6-4308-8c1d-aefeca9cd280",
                "name": "Mia Charlotte",
                "role": "Storyteller",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Stand-Up Comedian",
                        "Sketch Performer",
                        "Improv Actor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ronald Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-942",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Lily Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-1053",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Thabo Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-116",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Joseph Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sebastian Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-412",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sebastian Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-1066",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ella Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-541",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Lucas Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-590",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Madelyn Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-919",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Kimberly Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-130",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "98720528-f9ed-4b02-a29a-a3993eb301c1",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 18,
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
    id: "0af189c1-ee30-4ef0-95a0-418289130cde",
    category: "Comedy",
    name: "Comedy Roast",
    description: "Comedy performances featuring musical parodies and songs",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Comedy Roast performance times"
    },
    contact: {
      contactNumber: "+1-376-675-7081",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "abafd73a-9216-463c-bba2-dc4878ef8642",
      title: "Comedy Roast",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Comedy Roast performance times"
        }],
      performers: [        {
                "id": "58955eb5-e6d5-400e-9027-a7fd21b71455",
                "name": "Rachel Palmer",
                "role": "Musical Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/22.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Juan Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-307",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Jessica Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-267",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Samuel Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-488",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Stephen Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-771",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Frank Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-783",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Logan Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-229",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Andrew Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-620",
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
  }
];
