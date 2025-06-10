// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-436-518-4486",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0a3e6e89-b6ab-43f5-bb66-6df4cef64fc7",
      title: "Rock the Ship",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: false,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "6b61a1ee-8a39-48b7-aa06-3d596ed072ea",
                "name": "Jack Palmer",
                "role": "Flutist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/49.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Violinist",
                        "Keyboardist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Joan Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-301",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kennedy Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-512",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Chen Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "8",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Catherine Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-217",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sebastian Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-584",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Scarlett Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-820",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sofia Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-247",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Priya Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-789",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6dd48964-8759-4242-b786-38417b85423d",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 20,
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
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Elegant piano performances in an intimate lounge setting",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-639-827-6128",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9063a050-f498-45b1-a175-7e2e9245c25a",
      title: "Acoustic Nights",
      description: "Elegant piano performances in an intimate lounge setting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "76 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "9f5d95ba-5b76-4976-a73f-e84e0c2b0c96",
                "name": "Nathan Montgomery",
                "role": "Saxophonist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/73.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Bass Player",
                        "Violinist",
                        "Saxophonist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "David Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-648",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Joe Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-390",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Larry Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-159",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Richard Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-996",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Christopher Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-989",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Benjamin Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-936",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Lisa Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-732",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Mason Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-700",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ad8fc66b-7dc1-44ef-a289-cc0493d0fc6c",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 8,
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
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Folk & Americana",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-310-186-8197",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fb9bcaec-ed5f-4dc6-a6c5-4946c6c8e210",
      title: "Folk & Americana",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "76a04a86-5f90-4213-9fe5-01f54d05ea91",
                "name": "Blake Spencer",
                "role": "Saxophonist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Keyboardist",
                        "Violinist",
                        "Drummer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Abigail Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-192",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sarah Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-968",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Samantha Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-20",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Isabella Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-491",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Arthur Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-344",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Christian West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Nora West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-1022",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      },
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      }
    ],
    isPopular: true
  },
  {
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-215-866-4771",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5149ef81-5dd5-48d8-84c5-60f2ce4b09b2",
      title: "Acoustic Nights",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "3d963924-c59d-48bb-a4f3-5adeb3034dcf",
                "name": "Randy Holloway",
                "role": "Flutist",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Luis Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-1071",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Betty Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-540",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Thandiwe Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Chloe Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-252",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Samantha Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-360",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Michael Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-833",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Genesis Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-1048",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Zoe Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-262",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Alexander Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-826",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Classical Crossover",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-212-222-4079",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0695bfda-080c-4fa2-8545-36581ce0751d",
      title: "Classical Crossover",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: true,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "32430de0-62d9-4a5a-a113-5ec031832908",
                "name": "Louis Fletcher",
                "role": "Saxophonist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Vocalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Carl Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-684",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gabriel Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-428",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Amanda Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-733",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Laura Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-1052",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Juan West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-795",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Jeffrey Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-511",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Sophia Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-1022",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Thabo Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-18",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Louis West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-801",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Audrey Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-828",
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
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "Soulful blues performances that will move your heart",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-829-703-9249",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8e6181e5-a242-4739-b162-079c498d5232",
      title: "Singer-Songwriter Showcase",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: true,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "22a50aac-8c34-497e-8e6f-73d84c157e90",
                "name": "Christian Payne",
                "role": "Bass Player",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/64.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Guitarist",
                        "Vocalist",
                        "Keyboardist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Valentina Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-232",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lucas Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-813",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Carlos Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-727",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Maria Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-488",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Harry Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-178",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Zoe Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-952",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sarah Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-883",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Edward Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-1017",
        }
      ],
      hasVIPSeating: true,
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
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-991-361-4080",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "41371808-ca7d-411a-8854-b6db1368ef05",
      title: "Singer-Songwriter Showcase",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "a3b3380d-2965-45a9-84ce-92808285e0d8",
                "name": "Katherine Knight",
                "role": "Keyboardist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/49.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Saxophonist",
                        "Guitarist",
                        "Bass Player"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Jessica Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-354",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Bella Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-315",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Matthew Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-368",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Brian Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-208",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Thabo Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-304",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Walter Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-951",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Matthew Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-805",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Benjamin Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-289",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9531e0f3-fc26-4736-8e25-cbecf8d01250",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 20,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      },
      {
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      },
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      }
    ],
    isPopular: false
  },
  {
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-493-424-9732",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e875f07a-0948-44cb-b2ba-fcd92f38db32",
      title: "Acoustic Nights",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: true,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "5b63b723-ca73-4b4d-8def-6fed34249202",
                "name": "Jeffrey Collins",
                "role": "Guitarist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/79.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Violinist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Juan Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-1013",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Melissa Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-573",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Lily Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-723",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Rachel Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-327",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Joe Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-7",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Raymond Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-1067",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Janet Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-200",
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
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      }
    ],
    isPopular: false
  },
  {
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-421-682-1546",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7791b344-9d48-40bf-95a8-a69e7ac20ed1",
      title: "Acoustic Nights",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "f99c49bb-c35d-4157-adfe-9fe29f446195",
                "name": "Brian Curtis",
                "role": "Trumpeter",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/68.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Vocalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Pamela Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-589",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Russell Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-873",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Betty Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-866",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Henry Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-951",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Victoria Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-758",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
  }
];
