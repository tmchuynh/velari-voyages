// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "f6db78a6-7c37-41af-ad58-3a792501ce2d",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Humorous storytelling and comedic monologues",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-750-446-7977",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2bcd2d91-621b-4096-9ff4-2da678433d70",
      title: "Storytelling Comedy",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "69 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "cd2e732f-505a-4e2f-ae85-a1db9c06a77d",
                "firstName": "Samuel",
                "lastName": "Sutton",
                "role": "Improv Actor",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/2.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
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
          author: "Zoe Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-759",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Valentina Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-597",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Amy Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-733",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Samantha Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-461",
        },
        {
          quote: "I laughed until my sides hurt! Samuel Sutton is hilarious and so entertaining.",
          author: "Jordan Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-137",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Maya Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-298",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Terry Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-739",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Christopher Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-1035",
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
    id: "f6db78a6-7c37-41af-ad58-3a792501ce2d",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Spontaneous improvised comedy based on audience suggestions",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-966-338-2130",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c957511e-43d0-4b85-8e07-7cee135ea0c0",
      title: "Stand-Up Comedy Night",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "0c1408d2-cf6a-4af4-887d-779e13c74602",
                "firstName": "Virginia",
                "lastName": "Gibson",
                "role": "Storyteller",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/43.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
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
          quote: "I laughed until my sides hurt! Virginia Gibson is hilarious and so entertaining.",
          author: "Amelia Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-482",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Mary Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-910",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Scott Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-276",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Lisa Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-1052",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Christian Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "3",
        },
        {
          quote: "Best comedy show I've seen in years! Virginia Gibson had perfect timing.",
          author: "Lucas Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-145",
        },
        {
          quote: "I laughed until my sides hurt! Virginia Gibson is hilarious and so entertaining.",
          author: "Mason Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-923",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Olivia Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-860",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0d5d4601-69c9-4bf8-a596-4dfc0b353f72",
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
    id: "f6db78a6-7c37-41af-ad58-3a792501ce2d",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Comedy sketches and parodies performed by talented actors",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-765-698-9779",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0d9ff889-c525-43ae-a620-5508cc4c269c",
      title: "Storytelling Comedy",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "85 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "78fdfaee-c6e4-42a2-a76d-dac67d1d3b93",
                "firstName": "Christopher",
                "lastName": "Chambers",
                "role": "Storyteller",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Grace Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-151",
        },
        {
          quote: "I laughed until my sides hurt! Christopher Chambers is hilarious and so entertaining.",
          author: "Priya Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-549",
        },
        {
          quote: "I laughed until my sides hurt! Christopher Chambers is hilarious and so entertaining.",
          author: "Samantha Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-546",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Abigail Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-950",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Adam Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-700",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Timothy Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-769",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Mason Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-1025",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Rebecca Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-1078",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Betty Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-216",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "af62cfa5-9d09-4280-969f-28a8ca8f689b",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
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
    id: "f6db78a6-7c37-41af-ad58-3a792501ce2d",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Adults-only late-night comedy with edgier material",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-695-259-9100",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "156bd7aa-b438-4123-b3b2-2a2f1f1ea504",
      title: "Interactive Comedy",
      description: "Adults-only late-night comedy with edgier material",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "81 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "a533a54c-9750-4fac-872b-f867d5d71e16",
                "firstName": "Elena",
                "lastName": "Jennings",
                "role": "Storyteller",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Gabriel Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-588",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Zachary Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-551",
        },
        {
          quote: "Best comedy show I've seen in years! Elena Jennings had perfect timing.",
          author: "Lily Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-453",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Bruce Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-600",
        },
        {
          quote: "Best comedy show I've seen in years! Elena Jennings had perfect timing.",
          author: "Victoria Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-277",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Tyler Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-1009",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Olivia Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-560",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f2c5e0ae-0fe2-44cc-ab8e-3710d601d147",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 12,
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
    id: "f6db78a6-7c37-41af-ad58-3a792501ce2d",
    category: "Comedy",
    name: "Comedy Roast",
    description: "Comedy sketches and parodies performed by talented actors",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Comedy Roast performance times"
    },
    contact: {
      contactNumber: "+1-205-838-2436",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "775deb16-72c4-4513-a750-73a930621314",
      title: "Comedy Roast",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Comedy Roast performance times"
        }],
      performers: [        {
                "id": "6d908696-8927-492c-a70a-b6fb26f68e59",
                "firstName": "Adam",
                "lastName": "Hamilton",
                "role": "Sketch Performer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Improv Actor",
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
          author: "Frank Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-723",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Robert Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-404",
        },
        {
          quote: "Best comedy show I've seen in years! Adam Hamilton had perfect timing.",
          author: "Jeffrey Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-323",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Aaron Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-51",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Sarah Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-1034",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Richard Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-919",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Nancy Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-949",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Alice Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-968",
        },
        {
          quote: "The Comedy Roast show was the perfect way to end our evening. Great comedy!",
          author: "Brenda Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-609",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ashley Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-497",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "98b58f96-450d-4d2f-be2b-7578be2f02b9",
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
    isPopular: true
  },
  {
    id: "f6db78a6-7c37-41af-ad58-3a792501ce2d",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Comedy sketches and parodies performed by talented actors",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-949-839-3652",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "83c4efbc-ec6e-4daf-b161-3886737f421f",
      title: "Interactive Comedy",
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
                "end": "23:00",
                "duration": "3 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "6d707752-6311-435c-9908-2ec21d7af8cd",
                "firstName": "Virginia",
                "lastName": "Charlotte",
                "role": "Musical Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Billy Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-961",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Rajesh Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-1054",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Evelyn Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-745",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Christine Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-545",
        },
        {
          quote: "Best comedy show I've seen in years! Virginia Charlotte had perfect timing.",
          author: "Joshua Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-700",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fe87f9f1-1bdf-4ef0-9643-0b412126c36c",
              "name": "Comedian's Joke Book",
              "description": "Collection of original jokes and stories",
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
    id: "f6db78a6-7c37-41af-ad58-3a792501ce2d",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Interactive comedy where the audience becomes part of the show",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-511-875-7051",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bd94b1b1-9ea9-48ca-b19f-ea99ee3fe897",
      title: "Clean Comedy Showcase",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "73f41c67-42e7-475a-9fdf-46b266e2b982",
                "firstName": "Caroline",
                "lastName": "Montgomery",
                "role": "Musical Comedian",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/61.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Best comedy show I've seen in years! Caroline Montgomery had perfect timing.",
          author: "Larry Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-210",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Joshua Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-375",
        },
        {
          quote: "Best comedy show I've seen in years! Caroline Montgomery had perfect timing.",
          author: "Isabella Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-818",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Roger Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-724",
        },
        {
          quote: "I laughed until my sides hurt! Caroline Montgomery is hilarious and so entertaining.",
          author: "Cynthia Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-515",
        },
        {
          quote: "Best comedy show I've seen in years! Caroline Montgomery had perfect timing.",
          author: "Timothy Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-823",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Miguel Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-187",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Blake Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-910",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Priya Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-579",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "65f85a30-c97b-4313-b40b-502f55dc7019",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 23,
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
    id: "f6db78a6-7c37-41af-ad58-3a792501ce2d",
    category: "Comedy",
    name: "Family Comedy Hour",
    description: "Interactive comedy where the audience becomes part of the show",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Family Comedy Hour performance times"
    },
    contact: {
      contactNumber: "+1-595-912-4814",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "edaa2934-9ca6-48b2-919a-c7e422ee0dec",
      title: "Family Comedy Hour",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "94 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Family Comedy Hour performance times"
        }],
      performers: [        {
                "id": "e9b110b0-1a85-4959-ab78-0ee1d031ccc5",
                "firstName": "Matthew",
                "lastName": "Mitchell",
                "role": "Comedy Writer",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Musical Comedian",
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Kenneth Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-913",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Arthur Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-777",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Gabriel Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-596",
        },
        {
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "Richard Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-190",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Charlotte Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-601",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Anthony Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-245",
        },
        {
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "Sean Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-335",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0b5ea8dc-d2cd-4e48-afd8-3c5086e52bd8",
              "name": "Comedian's Joke Book",
              "description": "Collection of original jokes and stories",
              "price": 14,
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
