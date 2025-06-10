// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "191f9134-0193-4219-b818-1309a41ff3a0",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-259-627-5033",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8c51078c-6163-4c9a-b889-d5e5750c68ad",
      title: "Rock the Ship",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: true,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "82d2da3e-0091-4b7b-8f84-b662322e50b2",
                "name": "Bruce Reeves",
                "role": "Bass Player",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Christian Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-873",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Katherine Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-88",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gerald Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-604",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Justin Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-630",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Frank Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-489",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jessica Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-664",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Wei Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-523",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Kinsley Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-104",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Randy Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-255",
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
    id: "191f9134-0193-4219-b818-1309a41ff3a0",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-774-995-2062",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b1c5dd3f-0599-442b-bf13-afe9343b16a5",
      title: "Blues & Soul",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "e54bb047-1db0-478f-95c3-219ee2105519",
                "name": "Samantha Chambers",
                "role": "Pianist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/64.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Pianist",
                        "Trumpeter",
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
          author: "James Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-1015",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Skylar Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-526",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sean Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-1066",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sophia Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-275",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Brandon Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-356",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Lisa Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-313",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "872396c5-cdfb-4196-9f74-bedb56147df6",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
              "price": 10,
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
    id: "191f9134-0193-4219-b818-1309a41ff3a0",
    category: "Live Music",
    name: "Folk & Americana",
    description: "Soulful blues performances that will move your heart",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-272-525-1807",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "007b560f-1499-477d-948d-075b5235a41a",
      title: "Folk & Americana",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "227996d2-53ce-49ac-b469-c4f8682553a0",
                "name": "William Porter",
                "role": "Keyboardist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/82.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kenneth Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-97",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Christian Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-551",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Alan Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-176",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Victor Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-1000",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Savannah Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-227",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Maya Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-443",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Victoria Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-323",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Russell Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-786",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Dennis West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-180",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Jennifer Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-93",
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
    id: "191f9134-0193-4219-b818-1309a41ff3a0",
    category: "Live Music",
    name: "Latin Rhythms",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Latin Rhythms performance times"
    },
    contact: {
      contactNumber: "+1-413-404-6154",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c5fac4d5-799d-4343-b4ef-2d4dfdc710c3",
      title: "Latin Rhythms",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Latin Rhythms performance times"
        }],
      performers: [        {
                "id": "bc62324c-6235-497a-964b-8d0139fb0111",
                "name": "Elijah Russell",
                "role": "Flutist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/27.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Bass Player"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Latin Rhythms show exceeded all my expectations.",
          author: "Jack Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-801",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sarah Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-951",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lerato Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Eric Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-1006",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Lawrence Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-443",
        },
        {
          quote: "What an amazing night of music! The Latin Rhythms show exceeded all my expectations.",
          author: "Emily Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-58",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lerato Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-570",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Madelyn Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-811",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Samantha Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-238",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Harper Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-452",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f44a2244-6765-403f-a90f-0420e755f671",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
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
    id: "191f9134-0193-4219-b818-1309a41ff3a0",
    category: "Live Music",
    name: "Latin Rhythms",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Latin Rhythms performance times"
    },
    contact: {
      contactNumber: "+1-721-880-1144",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1decb171-da28-4f34-8c50-f79cdcc5675f",
      title: "Latin Rhythms",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Latin Rhythms performance times"
        }],
      performers: [        {
                "id": "8465679a-dd84-4f8b-a8ad-19889dfd29e8",
                "name": "Roy Curtis",
                "role": "Drummer",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
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
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Richard Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-996",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Walter Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-309",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Kimberly Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-420",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Jeremy Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-486",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Jane Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-674",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "57f06312-3645-4fe5-ab06-42d1e15de09d",
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
    id: "191f9134-0193-4219-b818-1309a41ff3a0",
    category: "Live Music",
    name: "Country Roads",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-749-871-1851",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "22121923-6bee-4c8b-8bfb-0723c68edefb",
      title: "Country Roads",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: false,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "44d8fe04-e04f-439b-af56-d319702f069a",
                "name": "Douglas Cooper",
                "role": "Guitarist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/54.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Maya Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-59",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Benjamin Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-473",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Timothy Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-562",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Keith Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-798",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Juan Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-548",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Patricia Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-81",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Scarlett Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-407",
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
    id: "191f9134-0193-4219-b818-1309a41ff3a0",
    category: "Live Music",
    name: "Rock the Ship",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-792-838-1776",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "16b64a57-0df9-47ca-a9fa-e7326766238d",
      title: "Rock the Ship",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "105 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "820b6703-c3f4-4b1f-a293-72c2fda78c1c",
                "name": "Emily Foster",
                "role": "Drummer",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/22.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          author: "Johnny Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-909",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Douglas Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-985",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Ashley Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-172",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Kyle Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-83",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Joshua Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-379",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Vincent Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-705",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Betty Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-1028",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Thandiwe Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-762",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aa456038-a1f1-4e70-849f-bd5905768f29",
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
  }
];
