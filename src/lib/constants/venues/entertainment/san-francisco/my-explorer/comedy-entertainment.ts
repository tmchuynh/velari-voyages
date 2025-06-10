// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Family-friendly comedy suitable for all ages",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-308-811-2513",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f2582d56-0d65-4458-a503-f7d6220bc05f",
      title: "Stand-Up Comedy Night",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "efef91ec-96c3-4efc-a0a8-11fb5e1c6fbb",
                "name": "Chloe Dean",
                "role": "Storyteller",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Musical Comedian",
                        "Comedy Writer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Gerald Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-962",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "William Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-28",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Harold Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-586",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Maya Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-178",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Claire Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-468",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Elena Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-116",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Kimberly Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-910",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Skylar Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-443",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e63cf465-0602-4b51-9a18-fbb7e89906ab",
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
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Hilarious roast-style comedy with guest participation",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-700-678-9877",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c399a621-9972-4177-8071-515d3ba57a4a",
      title: "Comedy Sketch Show",
      description: "Hilarious roast-style comedy with guest participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "e2787065-09f7-48d8-afb6-941dee2d38aa",
                "name": "Jerry Gardner",
                "role": "Storyteller",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/17.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Stephanie Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-499",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Jennifer Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Jerry Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-685",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Nicole Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-724",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Kinsley Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-718",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Nicholas Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-940",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Virginia Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-300",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e943a89b-634b-4cf6-becd-3b9523c26f8d",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
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
    isPopular: false
  },
  {
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Family-friendly comedy suitable for all ages",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-820-912-3638",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "58124c60-5911-41af-9567-a6e566ebfc34",
      title: "Comedy Sketch Show",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "db4aa98e-c2aa-4c71-8690-f0f6b6f3c9be",
                "name": "John Hawkins",
                "role": "Sketch Performer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Musical Comedian",
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
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Anna Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-528",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Lisa Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-576",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Zola Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-986",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Harold Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-294",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Wayne Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-466",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Jose Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-876",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Carol Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-866",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Marcus Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-879",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Stephen Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-585",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Genesis Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-48",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "45e57093-1d44-446a-b710-87d86b9cfd2e",
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
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      }
    ],
    isPopular: false
  },
  {
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-902-648-4859",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "58948192-e3cd-49a4-8d00-1f1643f67d3d",
      title: "Interactive Comedy",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "3f42a344-4ea1-4f12-b6db-eabdd3535809",
                "name": "Valentina Marshall",
                "role": "Comedy Writer",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Juan Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Helen Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-536",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Julie Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Alice Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-767",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Kyle Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "7",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "5e07188a-9fcb-4fea-8f7e-beb71920a718",
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
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Hilarious roast-style comedy with guest participation",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-409-596-4915",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "72f39828-143b-4c5c-92ba-e64d6a40cd17",
      title: "Improv Comedy Show",
      description: "Hilarious roast-style comedy with guest participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "897d5f85-1ca8-4f6d-8b90-4d2d8b92174a",
                "name": "Roger Lawson",
                "role": "Musical Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/21.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Rebecca Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-148",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Mia Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-104",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Roy Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-670",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Bryan Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-1053",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Ryan Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-664",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Isabella Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-435",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Carl Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-269",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "Stella Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-193",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Keith Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-881",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a860e932-ad59-44c0-b90b-cd27b772041b",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 20,
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
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Comedy Magic",
    description: "Magic tricks combined with hilarious comedy routines",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Comedy Magic performance times"
    },
    contact: {
      contactNumber: "+1-847-191-1748",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7f25d915-b31a-4534-b887-bd0595f5cb90",
      title: "Comedy Magic",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "68 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Comedy Magic performance times"
        }],
      performers: [        {
                "id": "5957b8c5-0d65-434b-a0ad-6b101185144a",
                "name": "Leah Gibson",
                "role": "Storyteller",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/13.jpg",
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
          author: "Lerato Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-955",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Austin Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-237",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Paul Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-572",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Chen Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-288",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Jason Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-699",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e35d1225-18bf-4d5b-8994-2c723263629a",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 25,
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
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-919-231-5351",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4dfaa937-1c56-4d55-a586-f706188326d2",
      title: "Storytelling Comedy",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "ea6104e7-bed9-4274-8ca3-47ac7ea0be47",
                "name": "Marcus Reeves",
                "role": "Stand-Up Comedian",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Roger Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-911",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Joshua Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-402",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Priya Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-859",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Dylan Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-578",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Valentina Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Alexander Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-197",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d59426f7-ed4b-4f1c-bf8f-35776a307478",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 16,
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
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Comedy performances featuring musical parodies and songs",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-224-267-3778",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9fe76db3-430f-422e-ab3a-a89aaf32409a",
      title: "Adult Comedy Late Night",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "57aafb30-f1a5-46ff-8a69-f2b3b8383ebe",
                "name": "Keith Harper",
                "role": "Sketch Performer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/66.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Kinsley Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-260",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Alexander Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-935",
        },
        {
          quote: "The Adult Comedy Late Night show was the perfect way to end our evening. Great comedy!",
          author: "Lucas Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-985",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Emma Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-616",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Antonio Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-607",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Alexa Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-488",
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
    isPopular: true
  },
  {
    id: "e1ebb9cd-295b-4448-9b3b-79f076e90c05",
    category: "Comedy",
    name: "Adult Comedy Late Night",
    description: "Clean, wholesome comedy perfect for the entire family",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Adult Comedy Late Night performance times"
    },
    contact: {
      contactNumber: "+1-244-777-7464",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fa032887-54a2-4614-81c6-1ca584148217",
      title: "Adult Comedy Late Night",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Adult Comedy Late Night performance times"
        }],
      performers: [        {
                "id": "479325fa-b401-4238-8356-a21ac1293eee",
                "name": "Lily Hawkins",
                "role": "Comedy Writer",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
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
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Lily Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-484",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Jack Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-138",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Gerald Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-725",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Mason Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-255",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Lerato Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-449",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Tyler Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-465",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Brian Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-820",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Aria Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-441",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "eb3d0fa6-d015-4e4e-99b8-97d6f0be911b",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
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
  }
];
