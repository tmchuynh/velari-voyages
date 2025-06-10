// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "ed254bb5-9eaf-49be-8938-e8a449210ed8",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Soulful blues performances that will move your heart",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-646-359-5666",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1f23b34a-5e79-4822-b24f-49f1c7b8ec62",
      title: "Blues & Soul",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "c7d3dfa0-d449-4f05-9fc3-57bea028e8d2",
                "name": "Benjamin Wells",
                "role": "Violinist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/48.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Bass Player",
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Harold Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-411",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Terry Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-806",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Gerald Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-847",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Patrick Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-806",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kennedy Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-820",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Lawrence Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-574",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Nancy West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-675",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Nomsa Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-153",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Dorothy Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-868",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "George Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-586",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "33234541-add1-4f7b-871d-0d15fa7ef237",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
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
    id: "ed254bb5-9eaf-49be-8938-e8a449210ed8",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Elegant piano performances in an intimate lounge setting",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-206-465-5495",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f79e1baf-2790-41e9-bd1e-8d992908be64",
      title: "Tribute Bands Night",
      description: "Elegant piano performances in an intimate lounge setting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "a50887cb-7943-4647-95a3-0d752b7cef33",
                "name": "Layla Dunn",
                "role": "Drummer",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Vocalist",
                        "Saxophonist",
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
          author: "Ellie Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-191",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Riley Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-1078",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Barbara Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-1003",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Jose Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-107",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Donna Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-612",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Donna Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-667",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Richard Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-260",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9548e4eb-6019-4cd0-861f-5e8d25f67c05",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 9,
              "currency": "USD"
      }
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
    id: "ed254bb5-9eaf-49be-8938-e8a449210ed8",
    category: "Live Music",
    name: "Latin Rhythms",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Latin Rhythms performance times"
    },
    contact: {
      contactNumber: "+1-304-817-7864",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "eb4c08a0-b09d-47d3-ada8-a530e1b642a1",
      title: "Latin Rhythms",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Latin Rhythms performance times"
        }],
      performers: [        {
                "id": "3256906c-c4df-40fc-91a9-e0f933bf8b7f",
                "name": "Elizabeth Curtis",
                "role": "Flutist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/42.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Pianist",
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Layla Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-214",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Lerato Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-692",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Helen Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-970",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Wei Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Thabo Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-142",
        },
        {
          quote: "What an amazing night of music! The Latin Rhythms show exceeded all my expectations.",
          author: "Aiden Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-1042",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Wei Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-664",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Dorothy Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-751",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Jacob Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-890",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8a311d3a-a3f8-4eee-9cf1-3dc98e21e461",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 15,
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
    id: "ed254bb5-9eaf-49be-8938-e8a449210ed8",
    category: "Live Music",
    name: "Folk & Americana",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-929-977-9590",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d0db82b7-8fa1-4e2c-adbc-c2b3b1e108a0",
      title: "Folk & Americana",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "77 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "ca627768-3303-4bc1-93ae-97ef772d98e0",
                "name": "Joel Day",
                "role": "Drummer",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Keyboardist",
                        "Drummer",
                        "Flutist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Sophia Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-1058",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Timothy Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-1018",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Miguel Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-415",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Randy Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-115",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Gabriella Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-662",
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
    id: "ed254bb5-9eaf-49be-8938-e8a449210ed8",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-944-608-5714",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "90d80579-3db2-4594-b413-a02db9d4dfa3",
      title: "Acoustic Nights",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "9b30b15a-32c2-4e12-8633-e3591d328a1d",
                "name": "Isabella Carpenter",
                "role": "Drummer",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/68.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Drummer",
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
          author: "Madelyn Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-615",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Willie Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-656",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Thabo Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-600",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Claire Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-149",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Albert Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-327",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ella Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-84",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Larry Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-35",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Willie Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-584",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Naomi Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-926",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b542dbb3-a850-4349-acd3-04cef888805f",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 15,
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
    id: "ed254bb5-9eaf-49be-8938-e8a449210ed8",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-242-478-2933",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c8d5743e-2232-4f60-a936-f68640a42090",
      title: "Tribute Bands Night",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "238a8c5d-9eb6-4bec-97ba-d42dbfa531b9",
                "name": "Blake Clark",
                "role": "Flutist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/70.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Pianist",
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
          author: "David Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-943",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Joan Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-699",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Benjamin Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-551",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Avery Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-429",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Samantha Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-585",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Keith Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-498",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Helen West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-46",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Louis Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-43",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "b96d6edd-665f-48b1-9262-8d4a209c2494",
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
    isPopular: true
  },
  {
    id: "ed254bb5-9eaf-49be-8938-e8a449210ed8",
    category: "Live Music",
    name: "Classical Crossover",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-526-536-3263",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "899642c8-27fa-443f-b0c5-a24d4f6f4c10",
      title: "Classical Crossover",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "a4407ba0-1b9f-41e3-9718-3082884df1c5",
                "name": "Lily Holloway",
                "role": "Violinist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/45.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
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
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Melissa Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-91",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Peter Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-651",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Michelle West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-650",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Charlotte Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-895",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Gregory Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-1034",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Madelyn Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-1051",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "298c0311-60f7-436d-8223-0d47bff7364f",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 12,
              "currency": "USD"
      }
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
  }
];
