// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "c335b7dd-6a26-41ea-afff-0c386538d811",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Clean, wholesome comedy perfect for the entire family",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-545-547-3044",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ddd0672b-c1e0-43df-8182-5a1b11191113",
      title: "Clean Comedy Showcase",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "99 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "94ec2006-9e85-4d57-bb73-9cbe61aa5c16",
                "name": "Evelyn Cooper",
                "role": "Comedy Writer",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/13.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Sebastian Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-192",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Lisa Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-988",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Vincent Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-455",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Anna Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-259",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Thandiwe Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-867",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Gabriel Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-11",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "4bf2ff08-d80a-403f-9518-0793c282ff14",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 23,
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
    id: "c335b7dd-6a26-41ea-afff-0c386538d811",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Family-friendly comedy suitable for all ages",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-582-508-7839",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0e644f7d-50b0-4dd5-89f0-33f015035bbe",
      title: "Storytelling Comedy",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: true,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "4f0e0bd3-5de7-464c-93cd-dfe44c3c7d70",
                "name": "Lawrence Warren",
                "role": "Comedy Writer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Wayne Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-948",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Blake Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-573",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Liam Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-630",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Janet Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-283",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Rachel Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-883",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Ariana Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-266",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Luis Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-1061",
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
    isPopular: false
  },
  {
    id: "c335b7dd-6a26-41ea-afff-0c386538d811",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Humorous storytelling and comedic monologues",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-920-527-1522",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c3b636eb-2c21-41bc-b2f3-f583104ae1e9",
      title: "Storytelling Comedy",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "adfdf274-e861-4604-a090-029e1ddc5fc9",
                "name": "Chloe Harper",
                "role": "Sketch Performer",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/19.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Improv Actor",
                        "Stand-Up Comedian",
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
          author: "Ella Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-402",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Frank Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-994",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Anna Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-631",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Nicholas Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-644",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Roy Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-495",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Charlotte Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-787",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Sarah Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-291",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a4201da8-4dfb-4ab9-95ef-1f78a3f01a30",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 21,
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
    id: "c335b7dd-6a26-41ea-afff-0c386538d811",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Hilarious roast-style comedy with guest participation",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-908-999-5266",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "992f6b17-e2a7-4678-838c-995fa9901fb8",
      title: "Comedy Sketch Show",
      description: "Hilarious roast-style comedy with guest participation",
      tickets: {
        isRequired: false,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "71 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "f016aa8f-b65e-49a8-add9-6106b5c43e3f",
                "name": "Scott Griffin",
                "role": "Musical Comedian",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/9.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Anthony Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-79",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Noah Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-186",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Dylan Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-125",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Rebecca Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-404",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Luis Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-691",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Eleanor Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-148",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jennifer Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-1057",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8a9a5a8c-c944-4c33-ac39-8c171a354ee8",
              "name": "Comedian's Joke Book",
              "description": "Collection of original jokes and stories",
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
    id: "c335b7dd-6a26-41ea-afff-0c386538d811",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Family-friendly comedy suitable for all ages",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-767-976-1913",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "98f69b48-b3bf-4153-a535-96472f5e2040",
      title: "Interactive Comedy",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "3d63c670-4901-439e-896e-ac962fdb57bf",
                "name": "Mia Stewart",
                "role": "Musical Comedian",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/73.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Aaron Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-1019",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Carl Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-161",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Steven Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-164",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Carol Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-929",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Evelyn Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-293",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Johnny Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-156",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Savannah Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-615",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Valentina Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-587",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Sarah Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-956",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Philip Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-701",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3e42f8b2-300f-4fa7-a394-ce344e466705",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
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
    id: "c335b7dd-6a26-41ea-afff-0c386538d811",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Game show format with comedic challenges and prizes",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-401-201-9861",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cd63d9bf-703d-42a5-aafb-b2382a2bb55b",
      title: "Storytelling Comedy",
      description: "Game show format with comedic challenges and prizes",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "ad25613c-adc3-4a08-836e-5c962e32c8b8",
                "name": "Nora Stewart",
                "role": "Stand-Up Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/30.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Lucas Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-244",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Richard Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-440",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Aaron Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-889",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Kevin Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-766",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Joan Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-230",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Anthony Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-940",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Madelyn Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-426",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Antonio Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-647",
        }
      ],
      hasVIPSeating: true,
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
    id: "c335b7dd-6a26-41ea-afff-0c386538d811",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Magic tricks combined with hilarious comedy routines",
    imageUrl: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-681-479-8214",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "423b13ca-64d6-427e-8459-7ee830907521",
      title: "Clean Comedy Showcase",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "005547ad-4047-4eea-983a-bfddacf22a47",
                "name": "Isabella Henderson",
                "role": "Comedy Writer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/42.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Laura Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-1013",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Caroline Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-19",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Thabo Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-279",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Mark Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-839",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ella Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-540",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Kenneth Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-557",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5259c061-f403-4806-882c-601c90d3bce5",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 18,
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
