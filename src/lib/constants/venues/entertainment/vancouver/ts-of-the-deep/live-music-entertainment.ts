// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-857-701-4545",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9b524a71-51d0-4005-b1e6-d70921a96c7b",
      title: "Blues & Soul",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: true,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "66 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "fdc77ce7-107c-4d49-959d-7074124abb48",
                "name": "Nicole Gardner",
                "role": "Guitarist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/26.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Drummer",
                        "Pianist",
                        "Bass Player"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Joe Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-500",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Amina Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-1035",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Victoria Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-802",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Sophia Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-719",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Gabriel Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-115",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Amanda Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-433",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Kenneth Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-129",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Joshua Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-620",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Carol Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-483",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "16079948-d74a-47ed-9577-717366863fb3",
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
    isPopular: false
  },
  {
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-220-848-7286",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d66c9f54-0020-4dd3-9b87-4776f25678f4",
      title: "Piano Bar Sessions",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "67 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "b2260627-7118-4320-9a39-4fb702b90104",
                "name": "Edward Reed",
                "role": "Drummer",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Bass Player",
                        "Trumpeter",
                        "Keyboardist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Nicholas Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-174",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Walter Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-524",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Madelyn Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-185",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sophia Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-455",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Eugene Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-672",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Audrey Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-561",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "072acfe4-4d1d-4f41-8b16-ab5f66dc9857",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 16,
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
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-711-923-4969",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0ee69b07-2dab-4fa4-b076-2d6cb8a8e6af",
      title: "Blues & Soul",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "7e427183-585d-4290-a24e-9944c5f3f6e6",
                "name": "Zachary Nash",
                "role": "Saxophonist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/38.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Trumpeter",
                        "Drummer",
                        "Pianist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Eric Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-468",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Helen Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-481",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Wei Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-342",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Randy Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-338",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Elijah Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-177",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Alice Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-506",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Mary Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-705",
        }
      ],
      hasVIPSeating: true,
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
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-270-507-1424",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1e54cc13-74ae-48d7-a666-557de499538b",
      title: "Piano Bar Sessions",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: false,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "68 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "5247d962-a3be-495f-9895-c0a4e11a3281",
                "name": "Adeline Curtis",
                "role": "Keyboardist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Trumpeter",
                        "Saxophonist",
                        "Flutist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Matthew Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-486",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Ethan Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-849",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Priya Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-176",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Bobby Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Charlotte Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-258",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Frank Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-860",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Mia Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-945",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Brandon Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-446",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Kimberly Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-215",
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
    isPopular: true
  },
  {
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-344-659-6824",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0dd0cd1c-d3f5-45ee-8813-55fa2062126c",
      title: "Blues & Soul",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "13aa66f6-5a3e-4b45-a722-42a3606b62fb",
                "name": "Joan Bennett",
                "role": "Bass Player",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/56.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Guitarist",
                        "Saxophonist",
                        "Drummer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Johnny Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-329",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Naomi Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-376",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Aiden Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-768",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Barbara Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-848",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Layla Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-92",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Layla Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-66",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Noah Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-714",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Richard Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-276",
        }
      ],
      hasVIPSeating: true,
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
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Latin Rhythms",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Latin Rhythms performance times"
    },
    contact: {
      contactNumber: "+1-554-987-1488",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "30f3aed6-559f-4339-9b2b-e6fc686ad579",
      title: "Latin Rhythms",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Latin Rhythms performance times"
        }],
      performers: [        {
                "id": "a6d8f9af-c9c0-4896-a13d-b72fb7099ffa",
                "name": "Sebastian Griffin",
                "role": "Vocalist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Pianist",
                        "Vocalist",
                        "Bass Player"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jordan Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-132",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Logan Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-1037",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Nathan Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-391",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Melissa Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-481",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Jordan Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-487",
        },
        {
          quote: "What an amazing night of music! The Latin Rhythms show exceeded all my expectations.",
          author: "Laura Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-237",
        },
        {
          quote: "What an amazing night of music! The Latin Rhythms show exceeded all my expectations.",
          author: "Christine Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-44",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Philip Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-172",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "2990664b-8a7c-46e4-ade3-d0a448500478",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 11,
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
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Folk & Americana",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-499-532-1313",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b18adfc9-17f1-4aa5-a02a-11fd9d4c6b9b",
      title: "Folk & Americana",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: true,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "7e2db952-c4ac-4ba8-9b7e-b9bf8182c78e",
                "name": "Christopher Reed",
                "role": "Flutist",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/71.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Keyboardist",
                        "Drummer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Robert Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-946",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Samantha Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-763",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Donna Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-564",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Zoe Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-1060",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Logan Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-889",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Tyler Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-632",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Harry Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-202",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Joe Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-858",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Grace Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-110",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b1922990-9775-4567-8093-9b4ba2e73385",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 30,
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
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-375-728-3066",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4b6b8c5e-3b7d-47c6-ae47-d750bf2ab77a",
      title: "Piano Bar Sessions",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "96 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "8ee78da4-de81-425a-99b1-25ff9e0b0703",
                "name": "Sophia Lawson",
                "role": "Violinist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/1.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Drummer",
                        "Vocalist",
                        "Saxophonist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Dennis Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-38",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Maya Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-1081",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Brooklyn Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-558",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Antonio Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-224",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Carol Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-545",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Sandra Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-463",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Logan Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-77",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "3fc0434c-65bb-4154-80d5-118047ea2c9c",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 27,
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
    isPopular: true
  },
  {
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-233-639-3949",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "04e3b7fc-06f4-4cec-9dc9-830d965ff5e5",
      title: "Piano Bar Sessions",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "c8086a5e-4418-4ce4-95d8-8dcf4f7b6b94",
                "name": "Albert Coleman",
                "role": "Saxophonist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/16.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Allison Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-229",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Hannah Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-1009",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Jordan Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-751",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Maya Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-110",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Frank Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-877",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Patricia Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Randy Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-674",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Nathan Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-724",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Naomi Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-35",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c0152f98-0e7e-45f1-9c3b-8a4919b1012a",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 28,
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
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    category: "Live Music",
    name: "Classical Crossover",
    description: "Elegant piano performances in an intimate lounge setting",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-444-823-3321",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "276d65cf-7c5c-41d4-95cb-60b738e4fc87",
      title: "Classical Crossover",
      description: "Elegant piano performances in an intimate lounge setting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "60c213aa-8a2a-486b-828d-27f8f5aefcfb",
                "name": "Nathan Gardner",
                "role": "Saxophonist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Guitarist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Jonathan Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-863",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Matthew Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-665",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Ariana Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-843",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Betty Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "10",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Jeffrey Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-699",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e0bc6b98-ee59-4d4b-86ad-a41e76435926",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
              "price": 16,
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
  }
];
