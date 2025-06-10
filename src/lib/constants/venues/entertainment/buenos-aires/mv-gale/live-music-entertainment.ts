// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "66e709bf-6f5d-4478-86df-ac6ce928a474",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-731-675-5234",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9cb352fb-3171-454e-9005-7bffb0206073",
      title: "Tribute Bands Night",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "6f4375ab-99dc-4aed-9982-52b9eacb4eca",
                "name": "Thomas Hayes",
                "role": "Saxophonist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Vocalist",
                        "Guitarist",
                        "Pianist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Victor Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-358",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Stella Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-160",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Catherine Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-570",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Chen Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-172",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Kenneth Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-44",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Larry Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-831",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Harper Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-996",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Rajesh Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-249",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ariana Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-88",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a7d04a6e-fb68-4d01-b760-4e70754bc7ed",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 7,
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
    id: "66e709bf-6f5d-4478-86df-ac6ce928a474",
    category: "Live Music",
    name: "Latin Rhythms",
    description: "Original compositions and covers by talented indie artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Latin Rhythms performance times"
    },
    contact: {
      contactNumber: "+1-827-171-2999",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e9ce5602-4a82-4b88-89e3-0cd623e24bba",
      title: "Latin Rhythms",
      description: "Original compositions and covers by talented indie artists",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "113 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Latin Rhythms performance times"
        }],
      performers: [        {
                "id": "c08d2d19-8382-46e9-9b17-6f6904fa85b7",
                "name": "Blake Nash",
                "role": "Violinist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Keyboardist",
                        "Violinist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Latin Rhythms show exceeded all my expectations.",
          author: "Jacob Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-730",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Grace Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-127",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Christopher Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-175",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Kimberly Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-636",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Billy Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-396",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Donna Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-388",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Sophia Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-896",
        },
        {
          quote: "What an amazing night of music! The Latin Rhythms show exceeded all my expectations.",
          author: "Jerry Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-598",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "f1e0e90b-38ba-4943-ae10-3af526d53aa4",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 28,
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
    id: "66e709bf-6f5d-4478-86df-ac6ce928a474",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-621-145-7681",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c39d5f66-2c6e-462b-b8f6-abe46204391e",
      title: "Big Band Revival",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "2f30da74-0999-4399-ac16-8dce6fa81d39",
                "name": "James Fisher",
                "role": "Pianist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/44.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Patrick Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-724",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Abigail Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-770",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Bruce Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-34",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Ariana Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-845",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Paul Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-850",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Scarlett Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-678",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sophia Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-592",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Caroline Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-911",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Noah Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-434",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sean Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-905",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8ab20fbb-ab9d-4e4a-8d52-6d85a29fa40d",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 6,
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
    id: "66e709bf-6f5d-4478-86df-ac6ce928a474",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-357-410-5580",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b80491d4-2ba2-437f-9608-cf1ae19383cd",
      title: "Blues & Soul",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "74 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "56fe2d1d-a47e-486f-990a-7f01481178e8",
                "name": "Sebastian Campbell",
                "role": "Trumpeter",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/33.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Robert Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-623",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Linda Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-525",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Scarlett West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-888",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Michelle Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-156",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Rajesh Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-984",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Albert Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-972",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Isabella Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-513",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Claire Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-518",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Alan Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-230",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ashley Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-727",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "5912cc97-c957-4073-a254-e7a8c30352a3",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
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
    isPopular: true
  },
  {
    id: "66e709bf-6f5d-4478-86df-ac6ce928a474",
    category: "Live Music",
    name: "Folk & Americana",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-716-520-9271",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2855754d-85be-4658-a881-cefece0e35ea",
      title: "Folk & Americana",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "4cd61396-bcd4-484a-91df-705d6b9a8711",
                "name": "Sean Day",
                "role": "Drummer",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/38.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Saxophonist",
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Walter Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-851",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Amy Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-512",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Stephanie Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-16",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Randy Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Barbara Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-667",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Louis Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-258",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "24b59123-4d4a-44db-8e45-8b1e566a55d4",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 24,
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
    id: "66e709bf-6f5d-4478-86df-ac6ce928a474",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-382-762-3016",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "960d7f31-930a-4e57-b4ac-377c9fbd74ce",
      title: "Jazz Under the Stars",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 28,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "6503945d-d81f-49a4-88b6-c8aeaa154f76",
                "name": "Tyler Holloway",
                "role": "Trumpeter",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Vocalist",
                        "Guitarist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Dorothy Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-149",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Bruce Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-1020",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kyle Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-664",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Nicholas Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-299",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Joan Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-387",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Timothy Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-352",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Zola Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-856",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Brooklyn Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-1042",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4b5bea68-66d2-4d11-9f93-ca2f5dd93dbb",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
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
  }
];
