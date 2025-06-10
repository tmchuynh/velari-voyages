// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "fd6ca4ea-cd39-43aa-9159-02d23d37b33f",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Passionate Latin music and dance performances",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-202-807-3379",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b74db168-dc3e-43de-9e91-844d6f5af342",
      title: "Rock the Ship",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "99 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "c57cdc6c-4950-4893-aa7a-15dbc9de2971",
                "name": "Kevin Wallace",
                "role": "Pianist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/70.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
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
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Nicole Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-642",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Amy Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-505",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Keith Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-730",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Thandiwe Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-973",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Lily Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-781",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Amelia Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-938",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Caroline Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-250",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Jordan Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-734",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sandra Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-539",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
    id: "fd6ca4ea-cd39-43aa-9159-02d23d37b33f",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Passionate Latin music and dance performances",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-427-422-8422",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4b9917b0-fb1d-46bc-b70e-847c5e25616b",
      title: "Jazz Under the Stars",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "5b92613b-478a-4ee7-99bf-59fa4d311196",
                "name": "Nicole Keller",
                "role": "Pianist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Leah Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-741",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Amy Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-216",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Juan Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-730",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Ellie Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-285",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Harper Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-41",
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
    id: "fd6ca4ea-cd39-43aa-9159-02d23d37b33f",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Tribute performances honoring legendary artists",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-387-885-6346",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "673323c2-b28f-4ffc-b3da-63550401d25d",
      title: "Piano Bar Sessions",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: true,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "0b17b060-648a-4e2c-a9b1-b5c823f33f20",
                "name": "Mason Graham",
                "role": "Pianist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/24.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Mary Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-221",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Rachel Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-354",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jacob Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-943",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Harper Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-66",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Ralph Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-310",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Edward Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-410",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Diego Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-519",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2b1e6176-2cdb-4692-a660-4dba865f9e88",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
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
    isPopular: false
  },
  {
    id: "fd6ca4ea-cd39-43aa-9159-02d23d37b33f",
    category: "Live Music",
    name: "Classical Crossover",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-326-663-8073",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "63dab70c-d578-4111-bb4c-ae25909a5099",
      title: "Classical Crossover",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "92 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "56462d47-67d3-43fa-805d-ba0439bb70f0",
                "name": "Zoe Chambers",
                "role": "Violinist",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/28.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Bass Player",
                        "Violinist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Steven Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Marcus Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-303",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Christian Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-791",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Alexa Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-274",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Lily Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-190",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Ronald Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-1051",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Aaron Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-530",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "75b4a26c-4615-48fc-9b04-7cbd4b2911e0",
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
    id: "fd6ca4ea-cd39-43aa-9159-02d23d37b33f",
    category: "Live Music",
    name: "Country Roads",
    description: "Elegant piano performances in an intimate lounge setting",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-734-778-4386",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "40d850c9-f041-4e93-8d15-030c5dbaff59",
      title: "Country Roads",
      description: "Elegant piano performances in an intimate lounge setting",
      tickets: {
        isRequired: false,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "276e9753-08cb-4630-8c81-1555d48c22f4",
                "name": "James Olivia",
                "role": "Keyboardist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/21.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Kevin Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-122",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Keith Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-361",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Amina Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-201",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Angela Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Sophia Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-562",
        },
        {
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "David Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-792",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "35d3176b-4ea8-495a-913f-b05d2dec8a64",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 7,
              "currency": "USD"
      }
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
    id: "fd6ca4ea-cd39-43aa-9159-02d23d37b33f",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "High-energy rock performances featuring classic and modern hits",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-784-878-9273",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "56c7635c-4d04-4f31-958a-36842e89e04e",
      title: "Jazz Under the Stars",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "89 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "a778a075-c042-4ba5-a998-d8538622ef52",
                "name": "Harper Knight",
                "role": "Saxophonist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/51.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Jane Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-427",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Harry Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-14",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Elizabeth Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-460",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jane Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-49",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Harold Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-694",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Liam Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-87",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Samuel Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-946",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5714700a-1c98-401e-aff3-dfbf9df0467f",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 31,
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
    id: "fd6ca4ea-cd39-43aa-9159-02d23d37b33f",
    category: "Live Music",
    name: "Classical Crossover",
    description: "Traditional folk music with modern interpretations",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-407-102-1602",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "86ffbc7b-f621-4b96-a771-1338de232ab4",
      title: "Classical Crossover",
      description: "Traditional folk music with modern interpretations",
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
                "id": "2369c433-767b-412f-ae0f-8dc1079fd27c",
                "name": "Sofia Hayes",
                "role": "Bass Player",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Keyboardist",
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
          author: "Gabriel West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-702",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Layla Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-433",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Eric Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-1057",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Steven Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-778",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Zachary Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-303",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Matthew Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-977",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Valentina Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-5",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "451d5871-ae67-49ab-a4fa-d046e058f9f7",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 12,
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
  }
];
