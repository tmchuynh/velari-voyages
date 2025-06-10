// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "8c88036b-6e30-4e87-aad1-43fe2d2083f6",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Traditional folk music with modern interpretations",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-559-912-5272",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "61b4dba7-f5f7-4dde-aec6-d42336f0c0ab",
      title: "Jazz Under the Stars",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "71 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "1f4923b7-ccef-45ce-851b-7ee1e13b7dfa",
                "firstName": "Gabriella",
                "lastName": "Grant",
                "role": "Pianist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/74.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Vocalist",
                        "Drummer",
                        "Bass Player"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Julie Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-905",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! Gabriella Grant delivered an unforgettable performance.",
          author: "Victoria Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-354",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Carlos Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-902",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! Gabriella Grant delivered an unforgettable performance.",
          author: "Laura Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-798",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! Gabriella Grant delivered an unforgettable performance.",
          author: "Christopher Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-57",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Hannah Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-546",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d21c2b74-e8dc-4b28-a92d-97635ad703c9",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
              "price": 24,
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
    id: "8c88036b-6e30-4e87-aad1-43fe2d2083f6",
    category: "Live Music",
    name: "Country Roads",
    description: "Original compositions and covers by talented indie artists",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-498-436-5930",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cc308400-831b-4bb9-b5a5-07d85af58e2d",
      title: "Country Roads",
      description: "Original compositions and covers by talented indie artists",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "6fce422d-c856-4526-8fe3-b2aeb1970be6",
                "firstName": "Joshua",
                "lastName": "Porter",
                "role": "Flutist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
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
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Leah Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-140",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Amanda Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-741",
        },
        {
          quote: "The live music scene on this cruise is world-class. Joshua Porter is incredibly talented.",
          author: "Betty Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-961",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! Joshua Porter delivered an unforgettable performance.",
          author: "Jeffrey Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Bella Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-494",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jeremy Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-183",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Anna Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-472",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Priya Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-696",
        },
        {
          quote: "The live music scene on this cruise is world-class. Joshua Porter is incredibly talented.",
          author: "Charlotte Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-447",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Andrew Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-475",
        }
      ],
      hasVIPSeating: true,
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
    isPopular: false
  },
  {
    id: "8c88036b-6e30-4e87-aad1-43fe2d2083f6",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Passionate Latin music and dance performances",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-846-974-6732",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "29dd93bb-918a-4433-9a2a-73948df7c740",
      title: "Rock the Ship",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "04d1574c-a046-4b9c-ad40-0f9f35c6c218",
                "firstName": "Steven",
                "lastName": "Maxwell",
                "role": "Guitarist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Drummer",
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
          quote: "The musical talent on this ship is absolutely incredible! Steven Maxwell delivered an unforgettable performance.",
          author: "Julie Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-838",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Layla Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-180",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Ella Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-58",
        },
        {
          quote: "The live music scene on this cruise is world-class. Steven Maxwell is incredibly talented.",
          author: "Claire Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-454",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! Steven Maxwell delivered an unforgettable performance.",
          author: "Jesse Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-770",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Lawrence Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-649",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Joe Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-641",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "59df261e-9405-4775-8321-0f4ce44aed2f",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
              "price": 22,
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
    id: "8c88036b-6e30-4e87-aad1-43fe2d2083f6",
    category: "Live Music",
    name: "Latin Rhythms",
    description: "Swing and big band classics brought to life",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Latin Rhythms performance times"
    },
    contact: {
      contactNumber: "+1-729-219-5722",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d935da0b-f0ed-4d96-8eef-a7cf29c6629b",
      title: "Latin Rhythms",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Latin Rhythms performance times"
        }],
      performers: [        {
                "id": "b19a1431-f0a4-4cb0-b7ab-3cfae16590e5",
                "firstName": "Mia",
                "lastName": "Wells",
                "role": "Guitarist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "What an amazing night of music! The Latin Rhythms show exceeded all my expectations.",
          author: "Savannah Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-580",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! Mia Wells delivered an unforgettable performance.",
          author: "Ellie Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-539",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Aria Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-609",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Kyle Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-175",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Roger Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-162",
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
    id: "8c88036b-6e30-4e87-aad1-43fe2d2083f6",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Classical music meets contemporary hits in this unique performance",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-619-941-2849",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "37719c93-8be5-4d19-9728-e026da431a51",
      title: "Jazz Under the Stars",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "111 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "61700e6a-e234-4f12-860a-7d3b411e6f4d",
                "firstName": "Jose",
                "lastName": "Spencer",
                "role": "Saxophonist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/60.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Keyboardist",
                        "Flutist",
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
          author: "Luis Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-817",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Barbara Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-206",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Joan Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-123",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Johnny Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-293",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Nicholas Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-168",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Isabella Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-163",
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
    id: "8c88036b-6e30-4e87-aad1-43fe2d2083f6",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "Original compositions and covers by talented indie artists",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-427-640-1790",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8e4e46a8-fc51-4052-8567-ee8650c0e902",
      title: "Singer-Songwriter Showcase",
      description: "Original compositions and covers by talented indie artists",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "118 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "8e6d11a6-f25a-480d-b3cc-8ef9f08f965a",
                "firstName": "Steven",
                "lastName": "Bennett",
                "role": "Flutist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/70.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Vocalist",
                        "Bass Player",
                        "Saxophonist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Roger Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "8",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Eric Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-960",
        },
        {
          quote: "The live music scene on this cruise is world-class. Steven Bennett is incredibly talented.",
          author: "Samantha Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Chloe Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-749",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! Steven Bennett delivered an unforgettable performance.",
          author: "Genesis Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-1009",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Paul Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-547",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Scott Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-114",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ef1a873f-e135-4acc-ba53-85284ef67ab7",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 18,
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
    isPopular: false
  }
];
