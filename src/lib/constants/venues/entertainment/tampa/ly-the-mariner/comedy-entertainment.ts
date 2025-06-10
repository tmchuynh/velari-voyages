// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Humorous storytelling and comedic monologues",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-821-249-3929",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ac1c7f4e-0255-4bc1-9f68-6d6a77e36942",
      title: "Comedy Sketch Show",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: true,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "66cf4e8e-c24f-46a8-8274-bcf69faa1c25",
                "name": "Kennedy Maxwell",
                "role": "Storyteller",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Dylan Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-301",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Mateo Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-258",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Audrey Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-760",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Victoria Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-404",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Aria Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-344",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Zachary Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "7",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Nicole Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-182",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "46558b5e-2712-40e3-9ff0-9a8129ef8d63",
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
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Magic tricks combined with hilarious comedy routines",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-214-122-4982",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9aa94efc-88fe-45b8-9d16-e53180328f5a",
      title: "Improv Comedy Show",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 36,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "94b66238-079f-4ee2-bea2-4f4d5b360384",
                "name": "Blake West",
                "role": "Sketch Performer",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/33.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
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
          author: "Helen Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-795",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "Alexander Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-23",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Bruce Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-1045",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Maya Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-673",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Christopher Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-412",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Mateo Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-176",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Melissa Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-355",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Brooklyn Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-95",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "adac88e9-35b2-420e-bbec-8b331dbb8e21",
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
    isPopular: true
  },
  {
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Family Comedy Hour",
    description: "Family-friendly comedy suitable for all ages",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Family Comedy Hour performance times"
    },
    contact: {
      contactNumber: "+1-615-471-6482",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "620cb1ea-e8cf-46ba-ac8d-64f3c1b26914",
      title: "Family Comedy Hour",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Family Comedy Hour performance times"
        }],
      performers: [        {
                "id": "1870de8f-d47e-4b18-b326-e0a5810c53ab",
                "name": "Kinsley Douglas",
                "role": "Improv Actor",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/73.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Priya Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-819",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Zoe Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-1067",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "William Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-560",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "George Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-796",
        },
        {
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "Priya Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-1012",
        },
        {
          quote: "The Family Comedy Hour show was the perfect way to end our evening. Great comedy!",
          author: "Benjamin Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-546",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "David Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-969",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Samantha West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-1061",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Benjamin Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-765",
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
    isPopular: false
  },
  {
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-241-482-4670",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8d25725c-f36c-4235-89e5-c4117736c50f",
      title: "Clean Comedy Showcase",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "2b99f933-4edb-41a0-b815-26743df160a1",
                "name": "Scarlett Ellis",
                "role": "Musical Comedian",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/47.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
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
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Ryan Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-43",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Ronald Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-371",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Dylan Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-310",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Naomi Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-964",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Nicholas Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-797",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Alexander Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "1",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Mary Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-831",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Claire Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-802",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Rachel Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-411",
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
    isPopular: true
  },
  {
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Hilarious roast-style comedy with guest participation",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-836-435-9109",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "714a72d2-30b9-4566-bf37-cef7b03ba29e",
      title: "Stand-Up Comedy Night",
      description: "Hilarious roast-style comedy with guest participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "6bd370be-d6dd-4764-ba34-2d397ad50dd4",
                "name": "Alan Murray",
                "role": "Comedy Writer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/53.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
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
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Alice Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Joan Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-649",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Katherine Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-542",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Lisa Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-70",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sarah Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-877",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9207cad7-6acf-43f3-85fa-951051638ac3",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
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
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Spontaneous improvised comedy based on audience suggestions",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-279-320-2899",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3284e5ee-be23-4d58-a5af-2238a1ad8f20",
      title: "Comedy Game Show",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "39cef328-11d4-4c3d-afc1-fdbbe2c79719",
                "name": "Juan Carpenter",
                "role": "Storyteller",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Allison Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-907",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Rachel Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-739",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Rachel Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-199",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Carlos Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-685",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Christopher Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-668",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Adam Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-1008",
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
    isPopular: false
  },
  {
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Spontaneous improvised comedy based on audience suggestions",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-445-378-5348",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b35a72f8-8b73-4613-a8ea-1e07134ef156",
      title: "Interactive Comedy",
      description: "Spontaneous improvised comedy based on audience suggestions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "fddc6750-19be-489a-8ca5-5989dcaff9a1",
                "name": "Sophia Fletcher",
                "role": "Musical Comedian",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Bobby Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-772",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Charlotte Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-909",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Jessica West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-769",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Thabo Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-470",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Elena Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-1048",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Claire Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-509",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Julie Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-271",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Priya Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-374",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Benjamin Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-505",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8de4f66b-7a92-4e23-b27f-ea906851ab63",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
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
    isPopular: true
  },
  {
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-914-644-5604",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0d3d2682-4e1e-4a8a-9ef4-3ebbbeec3ac0",
      title: "Clean Comedy Showcase",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "b957d914-8945-4156-bc36-7b3a478b9a28",
                "name": "Caroline Ellis",
                "role": "Storyteller",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/4.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Nora Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-976",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Adam Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-387",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Nancy Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-240",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Angela Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-63",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Dylan Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-334",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Aria Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-630",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Ralph Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-67",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Jennifer Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-407",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Liam Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-754",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2970bd23-72d2-48d2-8b0c-3d0ca2fccff2",
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
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Interactive comedy where the audience becomes part of the show",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-557-173-1820",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ccaa8e7c-92e0-4cf3-9b29-a94c2cc5d892",
      title: "Stand-Up Comedy Night",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "d262df26-b023-41ac-9874-185078692c67",
                "name": "Riley Holloway",
                "role": "Comedy Writer",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/37.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Bella Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-572",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Bobby Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-226",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Susan Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-442",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "John Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-284",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Eleanor Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-829",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Ella Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-653",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "96004f28-4635-4f05-b5e0-b8198db4282e",
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
  }
];
