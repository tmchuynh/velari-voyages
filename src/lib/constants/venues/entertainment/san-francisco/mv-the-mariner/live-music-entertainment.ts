// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "b53bf507-3381-4591-9060-6c2607891651",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-301-945-6565",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fe8c84de-31ef-4ff4-b791-e77cea1a639f",
      title: "Big Band Revival",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "65b2df2b-de13-46ee-bbc5-3cb49963bbee",
                "name": "Susan Hunter",
                "role": "Pianist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/84.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Pianist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Kevin Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-435",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Aiden Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-830",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Nicole Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-264",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Sarah Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-2",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Ariana Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-319",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Justin Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Tyler Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-1055",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Barbara Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-563",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "de0f9003-6f59-4bb6-8e12-b0fa1b31fc9c",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 25,
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
    isPopular: true
  },
  {
    id: "b53bf507-3381-4591-9060-6c2607891651",
    category: "Live Music",
    name: "Folk & Americana",
    description: "Soulful blues performances that will move your heart",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-570-721-8711",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ea0af467-dc45-478a-a4c4-bd843c119cdd",
      title: "Folk & Americana",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: true,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "f8ef7de8-7084-4a1c-9332-cb796528aa63",
                "name": "Amina Murray",
                "role": "Trumpeter",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/48.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
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
          author: "Amanda Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-281",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Virginia Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-768",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Laura Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-1013",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Avery Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-315",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Joan Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-195",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Ryan Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-1082",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Rajesh Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-623",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "David Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-947",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Roy Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-241",
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
    isPopular: false
  },
  {
    id: "b53bf507-3381-4591-9060-6c2607891651",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "Elegant piano performances in an intimate lounge setting",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-325-814-2753",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "301794b5-5c43-4528-b7e5-a3df7df70b6b",
      title: "Singer-Songwriter Showcase",
      description: "Elegant piano performances in an intimate lounge setting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "5b58de60-3be3-4e47-9c61-7e74e8409f2a",
                "name": "Louis Douglas",
                "role": "Bass Player",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Pianist",
                        "Violinist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Peter Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-896",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Anthony Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-442",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Eugene Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-525",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Deborah Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-1044",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Austin Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-184",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Charlotte Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-109",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Andrew Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-306",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d5b6a7fa-d190-41ef-8c90-3d6b874841a9",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 26,
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
    id: "b53bf507-3381-4591-9060-6c2607891651",
    category: "Live Music",
    name: "Folk & Americana",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-469-466-8108",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "382354ac-b59b-4c50-b099-197f266b390d",
      title: "Folk & Americana",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "d027dc8e-bdb0-44ba-803f-56860dc29896",
                "name": "Sean Curtis",
                "role": "Guitarist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Aiden Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-600",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Tyler Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-496",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lily Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-202",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Jerry Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-509",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "William Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-796",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Maya Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-408",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Rachel Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-328",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Nicholas Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-46",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Elizabeth Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-803",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Joseph West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-448",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "342c3dff-946b-4454-a051-d480ab5c34b5",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
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
  },
  {
    id: "b53bf507-3381-4591-9060-6c2607891651",
    category: "Live Music",
    name: "Classical Crossover",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-847-849-9477",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4a88b37a-87a5-46bf-b01c-18712583b836",
      title: "Classical Crossover",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "92 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "16f2e679-846b-495a-b180-a9e105d1d7ac",
                "name": "Gabriella Murray",
                "role": "Drummer",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/47.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Pianist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Alexander Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-230",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Juan West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-451",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kinsley Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-130",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Ella Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-1044",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Thandiwe Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Aaron Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-110",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Alice Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-591",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Ronald Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-759",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jane Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-148",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Savannah Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-602",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fa090cbe-bb15-4118-a8c4-a09a501ff893",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 32,
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
    id: "b53bf507-3381-4591-9060-6c2607891651",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-427-822-4561",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "38477be1-2751-46f6-8149-333a94f72c26",
      title: "Piano Bar Sessions",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "b1f5ae66-9028-4407-80c4-45a2ab3afffd",
                "name": "Thabo Sutton",
                "role": "Violinist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/76.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Keyboardist",
                        "Pianist",
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
          author: "Arthur Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-376",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Dorothy Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-26",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Christopher Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-772",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Kyle Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-309",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Matthew Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Philip Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-689",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Nora Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-779",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Brenda Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-775",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gabriel Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-651",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "25ae99ab-014a-4dfe-bcdf-ef0526e02863",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 18,
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
