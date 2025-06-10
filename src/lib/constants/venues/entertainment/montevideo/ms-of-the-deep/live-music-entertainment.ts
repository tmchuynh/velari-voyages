// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "5c0ba8b1-f381-4652-b3cd-eddad7046be4",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Original compositions and covers by talented indie artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-398-375-1087",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d1107efa-cc68-4346-869a-3bbc87d832c2",
      title: "Jazz Under the Stars",
      description: "Original compositions and covers by talented indie artists",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "b72fb1e6-38aa-46dc-86c4-31c8b4df47d7",
                "name": "Willie Spencer",
                "role": "Keyboardist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Savannah Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-835",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Eleanor Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-326",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ethan Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-551",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Paul Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-139",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Nathan Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-983",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Isabella West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-879",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Joe Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-395",
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
  },
  {
    id: "5c0ba8b1-f381-4652-b3cd-eddad7046be4",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-380-364-6570",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "911f9a19-0bdb-415c-bddf-395e0f94ae94",
      title: "Jazz Under the Stars",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "1f0b1159-666e-4513-a0b1-4f61dc44af0c",
                "name": "Mary Stewart",
                "role": "Violinist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/3.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Benjamin Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-632",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Rebecca Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Layla Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-1059",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Thabo Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-687",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Brenda Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-745",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Joshua Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-298",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Scott Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-654",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Betty Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-183",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Laura Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-333",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Frank Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-174",
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
    isPopular: false
  },
  {
    id: "5c0ba8b1-f381-4652-b3cd-eddad7046be4",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-843-453-4920",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c299e492-bd9f-401c-8f79-daf09d05bfdf",
      title: "Rock the Ship",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "99cd54e4-9eb0-4537-920d-0d1556d50391",
                "name": "Lucas Fisher",
                "role": "Guitarist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Keyboardist",
                        "Drummer",
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
          author: "Eric Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-851",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Joan Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-47",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Dorothy Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-514",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Joseph Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-755",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Noah Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-1036",
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
    id: "5c0ba8b1-f381-4652-b3cd-eddad7046be4",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-793-644-2859",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "baa8e5b2-abe9-403c-b559-caafb12f2c4f",
      title: "Acoustic Nights",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: true,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "a928343d-e03d-43fd-9fab-2477dd4df37a",
                "name": "William Crawford",
                "role": "Saxophonist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Keyboardist",
                        "Trumpeter",
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
          author: "Linda Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-584",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Liam Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-709",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Sandra Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-1001",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Caroline Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-410",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Aaliyah Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-373",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Leah Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-576",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Sarah Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-88",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Brenda Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-868",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Aria Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Evelyn Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-891",
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
    isPopular: false
  },
  {
    id: "5c0ba8b1-f381-4652-b3cd-eddad7046be4",
    category: "Live Music",
    name: "Classical Crossover",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-416-356-2324",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "583f3827-c996-4a23-af83-1f2c1a715cad",
      title: "Classical Crossover",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "12ac414b-efc5-4a66-bba3-c721ea92012c",
                "name": "Melissa Grant",
                "role": "Guitarist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/10.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Zola Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-155",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Patricia Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-320",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Scarlett Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-486",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Walter Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-933",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Alexander Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-489",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Jennifer Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-574",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "James Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-916",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Leah Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-193",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Albert Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-386",
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
    id: "5c0ba8b1-f381-4652-b3cd-eddad7046be4",
    category: "Live Music",
    name: "Latin Rhythms",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Latin Rhythms performance times"
    },
    contact: {
      contactNumber: "+1-732-892-8399",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "73539b42-c6b4-4f13-a8c1-2cb1a11879a3",
      title: "Latin Rhythms",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "110 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Latin Rhythms performance times"
        }],
      performers: [        {
                "id": "171d8017-ea0a-4134-ba70-1ece19bc835d",
                "name": "Wei Day",
                "role": "Guitarist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/32.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Violinist",
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sebastian Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-1034",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Mia Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-599",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Donna Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-800",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Noah Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-283",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Randy Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-422",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Isabella Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-201",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Aaliyah Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-589",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ralph West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-969",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Aaliyah Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-793",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "07079c2a-aeb4-471e-8549-7140a9653fca",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 8,
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
    id: "5c0ba8b1-f381-4652-b3cd-eddad7046be4",
    category: "Live Music",
    name: "Country Roads",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-830-390-2513",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "66289706-89a6-4f91-8417-0006097e7973",
      title: "Country Roads",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "87191e93-b811-477d-adfb-6dfe09b29515",
                "name": "Deborah Gardner",
                "role": "Flutist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Audrey Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-231",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Philip Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-461",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Mark Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-776",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Dylan Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-971",
        },
        {
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Naomi Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-1032",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Kyle Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-532",
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
  },
  {
    id: "5c0ba8b1-f381-4652-b3cd-eddad7046be4",
    category: "Live Music",
    name: "Folk & Americana",
    description: "Elegant piano performances in an intimate lounge setting",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-271-902-5018",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a1b2de68-48c4-4730-9402-dd00f1f843e6",
      title: "Folk & Americana",
      description: "Elegant piano performances in an intimate lounge setting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "2305cc2f-95c8-4df6-9bf5-c89947e0a67f",
                "name": "Margaret Reeves",
                "role": "Guitarist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/33.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          author: "Harry Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-987",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Benjamin Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-633",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Javier Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-656",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Betty Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-118",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Christopher Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-731",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Billy Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-813",
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
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      },
      {
        question: "Are the live music venues suitable for all ages?",
        answer: "Yes, our live music performances welcome guests of all ages unless specifically noted as adults-only events.",
      }
    ],
    isPopular: true
  }
];
