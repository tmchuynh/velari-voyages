// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-552-388-8777",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1f2074e1-496d-4576-b9f5-99005d9cdb4d",
      title: "Acoustic Nights",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "9753e3ba-a1cf-49b4-9a8e-97733c4a8b30",
                "name": "Joshua Porter",
                "role": "Trumpeter",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/71.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Diego Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-682",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Miguel Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-975",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Harper Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-304",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Alexa Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-945",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Jane Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-608",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Lawrence Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-966",
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
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-966-689-4602",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2b44319c-3f49-475d-8365-df8f1c3c71ef",
      title: "Blues & Soul",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
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
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "82739f3b-5dfd-418c-811f-eaa82b177691",
                "name": "Olivia Russell",
                "role": "Keyboardist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/35.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Trumpeter",
                        "Vocalist",
                        "Flutist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Alice Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-230",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Larry Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-366",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Daniel Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-62",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Jennifer Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-437",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Harry Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "7",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Scarlett Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-755",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Lucas West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-56",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Luis Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Claire Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-1011",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Nancy Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-633",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "49dadcf5-3a2b-4d3d-b795-3c4f650cfeee",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
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
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-316-848-6202",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "50d6bafa-f292-4329-aa3d-e4862ad194d9",
      title: "Blues & Soul",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "3ae19ce7-56c0-405c-ae41-5cc1b9717a4c",
                "name": "Richard Marshall",
                "role": "Violinist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Drummer",
                        "Guitarist",
                        "Trumpeter"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Alice Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-777",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Adeline Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-758",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Claire Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-843",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Lisa Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-700",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Catherine Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-263",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Amelia Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-233",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Mia Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-538",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Elizabeth Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-596",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Ariana Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-253",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "2ce4bd0d-5978-4669-a9f4-04d1d66bcdcb",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 15,
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
  },
  {
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-313-703-3846",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "72e2fec1-80eb-4d2f-abe1-8899290efae5",
      title: "Tribute Bands Night",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "c4f0bb22-9960-418d-9fee-a6a0a100097d",
                "name": "Kimberly Palmer",
                "role": "Drummer",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/36.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Violinist",
                        "Vocalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Melissa Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-614",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Maya Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Chloe Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-559",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Nomsa Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-873",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Matthew Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-676",
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
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Country Roads",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-599-730-1969",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "433e33a4-8fad-46bc-a2a5-3689aefb14a6",
      title: "Country Roads",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "68 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "a2abc51f-c9ef-41f8-8afe-63faef68f466",
                "name": "Roger Hudson",
                "role": "Vocalist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/11.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Bass Player",
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
          author: "Brooklyn Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-172",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Lucas Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-138",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Douglas Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-80",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Henry Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-394",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Lily Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-911",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Larry Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-761",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Thandiwe Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-549",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "825d9a93-748b-4dd1-b078-4495b650423b",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 21,
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
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-295-894-4461",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4eab3770-87d4-4ace-86d8-ed40e9cb4493",
      title: "Blues & Soul",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "4aa324bb-04b9-40a1-9634-6025a001b9e3",
                "name": "Antonio Bennett",
                "role": "Guitarist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Drummer",
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
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Adeline Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-380",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Patricia Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Julie Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-624",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Carlos Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-811",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Leah Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-440",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Caroline Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-549",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Harold Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-256",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "04fc014b-b29b-427f-9d4f-53cb8ef7183f",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 30,
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
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Blues & Soul",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-472-970-9759",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "00542634-bb01-43bd-be09-df014958603e",
      title: "Blues & Soul",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: true,
        price: 36,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "117 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "61a39911-588c-4b44-8312-4b3c477afc88",
                "name": "Christopher Crawford",
                "role": "Guitarist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Bass Player",
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
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Valentina Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-923",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Scott Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-934",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jesse West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-319",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Kyle Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-57",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Kyle Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-533",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Isabella Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-451",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Daniel Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-517",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gary Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-106",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a3d9aec3-7d14-4024-b806-7b2f27004e40",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 17,
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
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Country Roads",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-515-417-8471",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f5a73229-97ff-4c00-8473-060f5fb61017",
      title: "Country Roads",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "d297d98f-bb90-4bcb-98b2-7fa66dfd0b3a",
                "name": "Jose Morgan",
                "role": "Trumpeter",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Saxophonist",
                        "Violinist",
                        "Flutist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Sophia Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-366",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Lerato Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-504",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Nicholas Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-1003",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Marcus Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-137",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Blake Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-411",
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
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
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
      contactNumber: "+1-814-617-9779",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c6bbdc25-f60e-4ff0-a349-bad96c5af944",
      title: "Folk & Americana",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "3a8bb901-f153-4575-babe-9beb2b5f94f8",
                "name": "John Carpenter",
                "role": "Pianist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/59.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
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
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Rebecca Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-442",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Charlotte Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-359",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Deborah Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-699",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Charlotte Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Alice Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-478",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b35ce245-3446-4c0a-988f-143fafa6ad05",
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
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-274-948-9242",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "32f55571-4f3d-4425-b65a-c58514c82b29",
      title: "Blues & Soul",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "15a30ca0-b97b-471b-a46a-89715bee0556",
                "name": "Terry Grant",
                "role": "Saxophonist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/20.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Victoria Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-43",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Michelle Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-53",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Tyler Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-41",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Carlos Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-1061",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Christopher West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-284",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Mia Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-936",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Jeffrey Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Abigail Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-979",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Patricia Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-994",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Roger Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-1042",
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
    isPopular: false
  }
];
