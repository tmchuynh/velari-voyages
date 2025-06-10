// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Classical music meets contemporary hits in this unique performance",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-587-987-5487",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f99f7a8d-ba7f-4983-a70e-1d86fdc8627c",
      title: "Jazz Under the Stars",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "a5e7dfff-554f-4647-a867-9ed78beafc56",
                "name": "Philip Reeves",
                "role": "Flutist",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/20.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Bass Player",
                        "Flutist",
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
          author: "Kimberly Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-369",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Robert Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-718",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Deborah Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-1061",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Maya Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-130",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Riley Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-498",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Linda Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-804",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Diego Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-798",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Liam Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-864",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Savannah Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-215",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Ellie Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-859",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "eecd7c3e-2b59-40fa-8731-1f003bbda8e1",
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
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Country music favorites performed with authentic style",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-428-120-7155",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "47a049aa-63e0-45fd-930a-206feaf57b8f",
      title: "Jazz Under the Stars",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "a4c6eb81-97dc-47de-9cbe-0ca3684fc49b",
                "name": "Willie Hunter",
                "role": "Saxophonist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          author: "Maria Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-624",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Joshua Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-767",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Betty Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-823",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lisa Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-152",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Juan Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-856",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Daniel Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-87",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Dylan Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-789",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Carol Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-1074",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Nicole Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-886",
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
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Passionate Latin music and dance performances",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-287-260-5631",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5c320674-2faf-47c0-bad4-df2c4a561162",
      title: "Acoustic Nights",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "929df523-9c51-4f72-919c-54c6cf2eec2f",
                "name": "Deborah Spencer",
                "role": "Trumpeter",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/48.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gregory West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-690",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Gary Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-679",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lawrence Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-715",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Philip Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-422",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Christopher Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-495",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Brenda Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-993",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Sophia Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-791",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Rajesh Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-768",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Ashley Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-374",
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
    isPopular: true
  },
  {
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Soulful blues performances that will move your heart",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-834-668-6669",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7ac737d7-5cd8-4253-b1a6-d1efc1e6be0d",
      title: "Piano Bar Sessions",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "02524df1-3b9a-424c-93fc-7281087414a6",
                "name": "Christine Foster",
                "role": "Pianist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Bass Player",
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
          author: "Rebecca Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-309",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Stella Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-794",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Joseph Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-33",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Christian Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Andrew Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-110",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Steven Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-908",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7c6a8f20-0885-4fd6-9bee-a66024510db3",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 28,
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
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Classical Crossover",
    description: "High-energy rock performances featuring classic and modern hits",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-568-592-5830",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fe8ffbc2-6c3d-4023-aea0-f51b62d91d12",
      title: "Classical Crossover",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "fec54594-f75b-4dd0-8a8c-2d5b823736d8",
                "name": "Michael Lawson",
                "role": "Drummer",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Violinist",
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
          author: "Sofia Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-186",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Kinsley Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-463",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Leah Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-722",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Frank Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-909",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Javier Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-898",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Rajesh Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-855",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Melissa Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-944",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Maya Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-219",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "60a1cbc9-77a5-4c63-9dee-d072b0ca5ad6",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 23,
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
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Tribute performances honoring legendary artists",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-959-402-9545",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4c4cd609-769e-4ae7-a61a-b2f4247e1130",
      title: "Rock the Ship",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: true,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "527b097c-64fa-45d4-b636-e6ba276a56a8",
                "name": "Chen Hayes",
                "role": "Violinist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Scarlett Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-511",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Frank Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-319",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Frank Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-8",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Michael Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-203",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Victoria Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-303",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Bryan Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-1053",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Claire Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-504",
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
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Classical music meets contemporary hits in this unique performance",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-585-214-3289",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "17fd0990-7adb-4e3c-a30c-d969ab522a93",
      title: "Rock the Ship",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "112 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "c07ff1a4-5bae-41c0-ac18-c6bf40aed9b2",
                "name": "Ethan Palmer",
                "role": "Saxophonist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Bass Player",
                        "Pianist",
                        "Saxophonist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Diego Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-1053",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Kevin Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-736",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Allison Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-890",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Isabella Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-40",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Carl Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-935",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Skylar Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-192",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Genesis Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-832",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Zola Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-1080",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Billy Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-177",
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
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Swing and big band classics brought to life",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-425-301-9044",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2e7b85ad-8fc9-45ce-84ca-f6a40ff519d4",
      title: "Acoustic Nights",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "452155bb-fda3-4e07-969c-2af722ca2a47",
                "name": "Vincent Hayes",
                "role": "Pianist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
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
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Aaliyah Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-485",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Sophia Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-946",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Sandra Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-980",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Alice Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-771",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Mason Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-386",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Layla Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-230",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Johnny Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-499",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Layla Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-151",
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
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Swing and big band classics brought to life",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-253-444-4293",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "112a7fac-4026-4482-bb46-33f2fb0a1540",
      title: "Tribute Bands Night",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "07e74c03-3ee7-4e31-8eeb-27d198f9f0c1",
                "name": "Patricia Parker",
                "role": "Pianist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/82.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Drummer",
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
          author: "Mark Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Allison Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-129",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Walter Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-551",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Justin Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-529",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Michael Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-472",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Frank Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Anna Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-117",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Willie Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Patrick Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-283",
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
    id: "a9995293-ad62-4b8a-a051-2a0a2df166f6",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Soulful blues performances that will move your heart",
    imageUrl: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-562-126-9778",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cf02ed5d-99bd-4b94-bb1f-147069e48863",
      title: "Jazz Under the Stars",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "13c4402d-9011-4edb-9941-bab892fcc941",
                "name": "Bobby Maxwell",
                "role": "Violinist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Thabo Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-683",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Dorothy Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-652",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Gregory Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-41",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Julie Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-815",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Jane Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-121",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Gabriel Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-829",
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
  }
];
