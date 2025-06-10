// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-537-224-9333",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d7103352-0355-4d75-a438-a57588a2ecd4",
      title: "Big Band Revival",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "87 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "591d1ea9-4e7c-4af2-a817-bd08803266ed",
                "name": "Eugene Holloway",
                "role": "Keyboardist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/59.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Pianist",
                        "Drummer",
                        "Guitarist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Randy Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-295",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lisa Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-780",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Rachel Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-745",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Chen Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-692",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Layla Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-560",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Anthony Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-831",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Andrew Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-921",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7ae016d8-18d3-4c11-8bf3-69b824d21c49",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 25,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      }
    ],
    isPopular: true
  },
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-540-816-7861",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "186e1d85-cb7a-45db-ba0e-e1de8e404d31",
      title: "Acoustic Nights",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "64 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "cc2eb987-e273-4bee-aa41-7a9940d6f6f4",
                "name": "Margaret Harper",
                "role": "Trumpeter",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/62.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Bass Player",
                        "Saxophonist",
                        "Keyboardist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Raymond Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Louis Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-421",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Emily Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-693",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Johnny Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-649",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Luis Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-25",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Roger Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-614",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Terry Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-328",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Peter Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-93",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Carl Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-551",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Alexander Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-55",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7ba0187f-9b0c-4c99-89ad-c3070ffb1f43",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 14,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      }
    ],
    isPopular: false
  },
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-771-739-5126",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d0a98b3e-e155-4c7e-b879-991e014b3359",
      title: "Rock the Ship",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "88a9e2ca-af49-4ba3-aad4-ceaa7922da41",
                "name": "Riley Clark",
                "role": "Flutist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/50.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Flutist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Brenda Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-1053",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Sophia Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-886",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Allison Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Anna Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-815",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Alexander Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-263",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Isabella Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-589",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5d9fd751-cd68-4c34-a6f7-ba581960e404",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 35,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      }
    ],
    isPopular: false
  },
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-519-947-6149",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0c3ac968-1809-43bf-a3a4-9ba4def6de4e",
      title: "Acoustic Nights",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "87b12b1b-c810-40c4-819c-ee368044b8cc",
                "name": "Carlos Russell",
                "role": "Keyboardist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Violinist",
                        "Vocalist",
                        "Trumpeter"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Mateo Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-917",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Matthew Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-134",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Alexander Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-855",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Victoria Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-29",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Joe Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-681",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Maya Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-219",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      }
    ],
    isPopular: false
  },
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    category: "Live Music",
    name: "Classical Crossover",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-801-866-4631",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2461c99c-1de7-4f78-9bc1-2283971d1437",
      title: "Classical Crossover",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "60 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "048263b0-46a4-445f-bbe3-6f280fb750bf",
                "name": "Liam Mason",
                "role": "Vocalist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/60.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Guitarist",
                        "Vocalist",
                        "Trumpeter"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Valentina Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-425",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "David Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-766",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Madelyn Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-399",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Patrick Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-532",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Lisa Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-320",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Andrew Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-248",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Zoe Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-642",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Jeffrey Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-377",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Jack Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-1050",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "907cbf7b-c3cf-4062-9e96-0b95538f5b33",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
              "price": 14,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      }
    ],
    isPopular: false
  },
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-415-404-6170",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "be58de19-93e2-4851-bd2e-bb06a082d220",
      title: "Piano Bar Sessions",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "dfa89a99-2936-44b8-9642-e431a94c7129",
                "name": "Deborah Baker",
                "role": "Vocalist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/19.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Drummer",
                        "Keyboardist",
                        "Vocalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Larry Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-1041",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Gabriella Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-1061",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Gabriel Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-521",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Mason Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-475",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Betty Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-4",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      },
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      }
    ],
    isPopular: true
  },
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-275-858-9636",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1b5134e4-c3f0-4b6d-af4f-072ee7e89053",
      title: "Acoustic Nights",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "2aca8d4c-e061-426a-972a-cdfe5d7f61bb",
                "name": "Michelle Bennett",
                "role": "Pianist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Pianist",
                        "Keyboardist",
                        "Flutist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Alan Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-493",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Lerato Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-899",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Alexa Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-125",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jose Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-894",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Vincent Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-1058",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Kennedy Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-1078",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Antonio Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-257",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Christopher Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-799",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kennedy Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-732",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Arthur Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-155",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4711ea80-8798-47a9-baff-7a4235dc7a76",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 20,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      }
    ],
    isPopular: false
  },
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    category: "Live Music",
    name: "Country Roads",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-714-994-1855",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d10c023f-d0f4-4930-9943-6bc8bc34d06c",
      title: "Country Roads",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 43,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "105 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "9f370549-0dc6-4a28-953e-90c0a0b98f05",
                "name": "Priya Porter",
                "role": "Pianist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Guitarist",
                        "Flutist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Chen Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-798",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Roy Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-952",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Christian Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-296",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Brenda Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-1041",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Samuel Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-61",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      }
    ],
    isPopular: true
  }
];
