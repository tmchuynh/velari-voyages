// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "4bb49fe0-84d2-4126-86aa-8839f43da71b",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-277-878-7896",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b3bef721-2026-4a00-9e99-615d035b08e6",
      title: "Singer-Songwriter Showcase",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "69 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "23329332-4d6a-4838-974f-b92ddb717b11",
                "name": "Amanda Dean",
                "role": "Drummer",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Bass Player",
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Keith Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-687",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Leah Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-459",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Kennedy Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-372",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ella Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-251",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gabriel Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-392",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Julie Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-1017",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Vincent Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-713",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Bella Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-924",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Margaret Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-206",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
    id: "4bb49fe0-84d2-4126-86aa-8839f43da71b",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-482-394-6505",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a85462a4-01c4-44dc-9ac9-aed3ab8a4794",
      title: "Tribute Bands Night",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "7257a014-9815-4a32-939f-ba437d7e4920",
                "name": "Sofia Coleman",
                "role": "Pianist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/18.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Rajesh Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-1075",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "George Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-834",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Barbara Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "8",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Bella Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-939",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Katherine Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-497",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "e6b090f2-fa9f-45d3-9f64-4c36a9ff0470",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 29,
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
    id: "4bb49fe0-84d2-4126-86aa-8839f43da71b",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-869-364-9625",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2b9eea9b-186d-40fc-96c0-7ec897b439c9",
      title: "Acoustic Nights",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "a50c82b3-9da0-42d3-ab30-710ac3a4dde8",
                "name": "Bobby Knight",
                "role": "Violinist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Emily Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-751",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jennifer Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-123",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Jeffrey Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-793",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Sarah Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-468",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Janet Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-560",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Bobby Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-394",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Wayne Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-955",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Nora Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-1051",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Deborah Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-155",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Cynthia Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-642",
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
    id: "4bb49fe0-84d2-4126-86aa-8839f43da71b",
    category: "Live Music",
    name: "Classical Crossover",
    description: "Original compositions and covers by talented indie artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-817-226-3098",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "23d30074-760a-43ac-9273-d2cf459d8720",
      title: "Classical Crossover",
      description: "Original compositions and covers by talented indie artists",
      tickets: {
        isRequired: false,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "78 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "041cc0ea-f13c-4cb1-9cca-18e280d00795",
                "name": "Valentina West",
                "role": "Keyboardist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/64.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Pianist",
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
          author: "Diego West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-786",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Michael Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Darrell Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-369",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Priya Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-659",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ryan Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-419",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "76ce3889-f127-4c54-8aac-1403d8b0edf6",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 5,
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
    id: "4bb49fe0-84d2-4126-86aa-8839f43da71b",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-648-761-6197",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b3ab99c3-f52b-4d2c-b2a1-06fbfde2f858",
      title: "Rock the Ship",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "70 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "472309c9-1703-4f4c-ac73-e896d5326e65",
                "name": "Walter Murray",
                "role": "Keyboardist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/78.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "George Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-512",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Frank Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-615",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Andrew Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-799",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Billy Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-961",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Arthur Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-533",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Louis Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-38",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Michael Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-822",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Isabella Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-995",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kimberly Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-340",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Catherine Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-353",
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
    id: "4bb49fe0-84d2-4126-86aa-8839f43da71b",
    category: "Live Music",
    name: "Rock the Ship",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-399-130-8898",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8f0a1124-66b5-414e-88f3-4b2ef72e5310",
      title: "Rock the Ship",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "aa0242a9-0daa-40bc-9437-0b521ac662eb",
                "name": "Daniel Day",
                "role": "Keyboardist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Flutist",
                        "Vocalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "David Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-743",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Brian Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-684",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Peter Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-339",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Catherine Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-601",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jeffrey Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-390",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Frank Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-792",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d609adec-0681-43bf-841d-8feab38063c5",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 29,
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
  }
];
