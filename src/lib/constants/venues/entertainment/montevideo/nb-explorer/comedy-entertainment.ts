// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "bd1813f0-d6fb-4d2b-bdc5-9c3703130617",
    category: "Comedy",
    name: "Musical Comedy",
    description: "Interactive comedy where the audience becomes part of the show",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Musical Comedy performance times"
    },
    contact: {
      contactNumber: "+1-386-713-7101",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d38ac72f-9301-495a-a76d-b657946e0c5b",
      title: "Musical Comedy",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: false,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Musical Comedy performance times"
        }],
      performers: [        {
                "id": "c412ce7c-ba66-4624-b03d-9ac9a3bef6be",
                "name": "Kevin Fox",
                "role": "Storyteller",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/38.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Storyteller",
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
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Sophia Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-1061",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Eleanor Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-608",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Rebecca Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-840",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Steven Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-20",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Savannah Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "6",
        },
        {
          quote: "The Musical Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Daniel Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-645",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Bryan Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-383",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Marcus Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "5",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Sofia Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-472",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "54e648bb-a446-44f4-b964-1cce945e5de4",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 29,
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
    id: "bd1813f0-d6fb-4d2b-bdc5-9c3703130617",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Comedy performances featuring musical parodies and songs",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-731-553-5141",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1d777fa3-7303-4d1e-81cf-f76810e9d301",
      title: "Comedy Game Show",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "cea9e30d-b6fb-485b-b135-ff1e9d3957ce",
                "name": "Scarlett Porter",
                "role": "Musical Comedian",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "David Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-598",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Leah Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-363",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Adam Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-634",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Walter Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-868",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Priya Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-72",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Raymond Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-343",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Gerald Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-78",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Helen Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-980",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Joshua Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-125",
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
    id: "bd1813f0-d6fb-4d2b-bdc5-9c3703130617",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Family-friendly comedy suitable for all ages",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-728-380-6854",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "520e063d-be3f-4f06-967e-a42968981e24",
      title: "Storytelling Comedy",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "610ec687-cb6e-4299-b5ea-5075032e151e",
                "name": "Nicole Day",
                "role": "Storyteller",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/42.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Betty Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-666",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Olivia Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-504",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Alexa Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-288",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Willie Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-572",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Zoe Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-790",
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
    isPopular: true
  },
  {
    id: "bd1813f0-d6fb-4d2b-bdc5-9c3703130617",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-841-442-9961",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ea8ef90a-7a5f-4daf-ab02-e61b969c60cb",
      title: "Improv Comedy Show",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "851e93f0-5ffe-4d06-9f08-7d7a7eed8d78",
                "name": "Alexander Reeves",
                "role": "Storyteller",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/82.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Stand-Up Comedian",
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
          author: "Elizabeth Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-752",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "John Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-32",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Philip Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-880",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Peter Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-541",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jeffrey Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-422",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Victoria Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-992",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "99052887-7e93-4a52-9af3-c2a2ce2ceac2",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 16,
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
    id: "bd1813f0-d6fb-4d2b-bdc5-9c3703130617",
    category: "Comedy",
    name: "Comedy Roast",
    description: "Family-friendly comedy suitable for all ages",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Comedy Roast performance times"
    },
    contact: {
      contactNumber: "+1-208-132-3648",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9291d280-5e56-42e9-b59d-cdc26cc255b1",
      title: "Comedy Roast",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "109 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Comedy Roast performance times"
        }],
      performers: [        {
                "id": "87fb2183-0001-4ee7-ad03-d66b92bfa45d",
                "name": "Louis Morgan",
                "role": "Improv Actor",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Comedy Writer",
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Valentina Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-57",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Tyler Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-637",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Amina Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-706",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ralph Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-760",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Harold Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-500",
        },
        {
          quote: "The Comedy Roast show was the perfect way to end our evening. Great comedy!",
          author: "Arthur Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-1059",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Lerato Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-953",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Philip Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-735",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Lisa Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-17",
        },
        {
          quote: "The Comedy Roast show was the perfect way to end our evening. Great comedy!",
          author: "Linda Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-911",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4e051c03-0d72-4a84-ac89-acc8891289fe",
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
  },
  {
    id: "bd1813f0-d6fb-4d2b-bdc5-9c3703130617",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Comedy performances featuring musical parodies and songs",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-833-796-3273",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7068f901-4cff-44bb-8096-2ebc2d3b1ecb",
      title: "Clean Comedy Showcase",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "9ca3ac4d-5883-43b4-9881-a7b4a2437202",
                "name": "Nora Olivia",
                "role": "Comedy Writer",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/35.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Sean Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-666",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Mia Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-341",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Chen Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-113",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Frank Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-422",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Henry Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-767",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Emily Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-542",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Christian Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-75",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Gabriel Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-952",
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
