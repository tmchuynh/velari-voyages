// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
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
      contactNumber: "+1-922-525-9552",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "26bea829-7626-48c6-a184-d9aee2f72c68",
      title: "Adult Comedy Late Night",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: true,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "ee00c8af-c39a-413e-b4d5-a4d2551db083",
                "name": "Michael Chambers",
                "role": "Storyteller",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Blake Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-971",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ronald Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-915",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Roger Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Katherine Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-751",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Jeffrey Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-1027",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Leah West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-147",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Billy Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-511",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Elizabeth Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-2",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "32b95b12-3d7e-4bd6-9903-3ccb64c040ae",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 12,
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
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Interactive comedy where the audience becomes part of the show",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-943-139-3285",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1d2a05fe-8c55-474e-8cec-acb6a30162c2",
      title: "Comedy Game Show",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "b8881a1c-0572-478c-8430-887ce9650da7",
                "name": "Angela Fox",
                "role": "Stand-Up Comedian",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Sketch Performer",
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
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Zola Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-1042",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Diego Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-609",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Adeline Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-132",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Walter Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-190",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Gary Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-755",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Noah Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-1083",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Richard Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-730",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7237ebf8-7bde-4098-83a9-6296adf04d7a",
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
    isPopular: true
  },
  {
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Comedy Magic",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Comedy Magic performance times"
    },
    contact: {
      contactNumber: "+1-834-163-3805",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7cc0db77-32f2-4cd9-a7ff-69c06bc2f2cf",
      title: "Comedy Magic",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Comedy Magic performance times"
        }],
      performers: [        {
                "id": "1d63b399-3f57-43d5-b117-65b3c05cd210",
                "name": "Carol Harper",
                "role": "Sketch Performer",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/0.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
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
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "George Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Sarah Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-227",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Barbara Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-347",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "George Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-178",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Ralph Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-289",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8f12cf8b-48f7-4dc6-84d3-b5ad885402e7",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
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
  },
  {
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Humorous storytelling and comedic monologues",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-954-728-5604",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e7b4f713-f5d9-432f-abdb-c78547bc3b6c",
      title: "Interactive Comedy",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "86 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "423a5b90-a539-4c90-ba01-09c5c1b253ed",
                "name": "Nomsa Sutton",
                "role": "Storyteller",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/50.jpg",
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
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Brian Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-49",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Maya Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-668",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Harry Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-511",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Aaliyah Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-724",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Mason Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-442",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Brenda Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-789",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Bruce Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-618",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Lily Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-502",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Charlotte Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-995",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Gerald Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-567",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "874edd9d-d272-491a-aacf-16a7e9a7bc7c",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
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
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-472-169-6156",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "92d3386f-f47f-4e5e-9b22-50606d7a6a3a",
      title: "Storytelling Comedy",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: false,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "6d376fc2-77e0-42c4-9d97-3912e622e0d1",
                "name": "Brian Griffin",
                "role": "Improv Actor",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/60.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Virginia Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-419",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Leah Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-869",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jeffrey Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-1019",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Thabo Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-244",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Aria Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-1062",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Nicole Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-402",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Amelia Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-1076",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Sophia Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-487",
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
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Hilarious roast-style comedy with guest participation",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-641-112-7713",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "15d46376-1d3d-4550-b69d-d2a6a343af0b",
      title: "Clean Comedy Showcase",
      description: "Hilarious roast-style comedy with guest participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "b9def3bc-4722-458a-b898-0b9620542d2c",
                "name": "Zoe Hudson",
                "role": "Sketch Performer",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Maya Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-379",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Aaron Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-837",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Janet Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-1024",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Oliver Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-434",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Alice Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-824",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Brandon Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Brooklyn Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-336",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Jessica Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-37",
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
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Family-friendly comedy suitable for all ages",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-850-365-2713",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6893c56f-7c7d-4972-8ee1-b0b35c46255d",
      title: "Comedy Sketch Show",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "4112079e-4bf5-4795-836c-bd99df06e9b0",
                "name": "Henry Sutton",
                "role": "Storyteller",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Melissa Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-144",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Robert Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-1053",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Nancy Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-375",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Johnny Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-163",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Joel Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-773",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "29662a13-694f-46a4-9bc6-72e96f732425",
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
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Spontaneous improvised comedy based on audience suggestions",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-967-671-6696",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "06173069-af40-421e-98e3-dae28f7a47a2",
      title: "Stand-Up Comedy Night",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "05d02f26-6653-462f-a8bc-2d6a5766a94a",
                "name": "Joseph Murray",
                "role": "Stand-Up Comedian",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Linda Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-770",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Grace Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-733",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Bryan West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-940",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Anthony Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-719",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Melissa Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-31",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Nicholas Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-406",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Barbara Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-145",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sean Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-732",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "14d3925a-335d-4411-b4d2-6c4f369879bb",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 12,
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
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Comedy Magic",
    description: "Game show format with comedic challenges and prizes",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Comedy Magic performance times"
    },
    contact: {
      contactNumber: "+1-308-556-4570",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c088b63d-a1be-4665-9a7f-07e7fd6ee3d2",
      title: "Comedy Magic",
      description: "Game show format with comedic challenges and prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Comedy Magic performance times"
        }],
      performers: [        {
                "id": "dfbfe71d-0779-4288-bc5c-df46f0ec991f",
                "name": "Aaliyah Hamilton",
                "role": "Improv Actor",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Wei Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-141",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Mason Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-918",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Layla Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-954",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Victor Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-1077",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Patrick Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-342",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Albert Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-1036",
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
    id: "fd3e2a93-1434-4258-bec8-429443f83ae3",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Humorous storytelling and comedic monologues",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-589-290-3839",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a6d32e67-af78-488c-8582-2aee92777009",
      title: "Interactive Comedy",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "101 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "ab8fbf8b-3eea-4cea-bc0c-ebfb6ca91c50",
                "name": "Melissa Foster",
                "role": "Stand-Up Comedian",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/8.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          author: "Vincent Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-934",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Justin Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-544",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Austin Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-90",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Linda Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-779",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Stephanie Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-311",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Isabella Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-1062",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Betty Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-839",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Gregory Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-923",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Mary Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-23",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "faa1e0a7-ae7d-4d6a-92ab-1ab22766dd65",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 17,
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
  }
];
