// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-965-269-8150",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "31203ee6-8bc6-4333-95f2-a6caefafa387",
      title: "Singer-Songwriter Showcase",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "df0a0121-9163-47f2-9447-b01dd8047949",
                "name": "Diego Reeves",
                "role": "Vocalist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
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
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Amina Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-450",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Gabriella Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-16",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Lisa Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Nicole Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-130",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Gabriella Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Joshua Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-708",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Nicholas Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-692",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Harry Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-377",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Deborah Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-406",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "be32af46-a145-4222-abe0-bf1135591fd6",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
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
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-984-374-2824",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "245b5cf7-c1f5-4e90-b0cf-5a6bea63e23f",
      title: "Tribute Bands Night",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "a4d87648-50d1-46cf-b087-14cd10d496a9",
                "name": "Arthur Campbell",
                "role": "Violinist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Keyboardist",
                        "Trumpeter",
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
          author: "Terry Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-209",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Catherine Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-963",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Jason Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-418",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Mason Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-110",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Randy Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-361",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Diego Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-97",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Benjamin Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-166",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Betty Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-26",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "63890024-7df2-4425-8fbf-d579d6f7adc3",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
              "price": 12,
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
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-494-852-1527",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a4b7c448-8513-416b-a027-6ed915f82bf8",
      title: "Big Band Revival",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "5f33d1b3-1680-4242-a797-5e0bdfffbd88",
                "name": "Zachary Gardner",
                "role": "Flutist",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/17.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Guitarist",
                        "Saxophonist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Adeline Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-477",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Gary Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-633",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Roger Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-536",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Ronald Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-438",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Jeffrey Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-110",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Joseph Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-176",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Noah Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-872",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Grace Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-367",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Christopher Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-406",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Scarlett Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-581",
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
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-792-593-3469",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "71ce12b6-ee35-4136-9ef8-89ec0169c836",
      title: "Rock the Ship",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "d4ec33de-82c5-4c85-b440-b5d0399e207f",
                "name": "Jessica Chambers",
                "role": "Pianist",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Diego Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-61",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Claire Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-846",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Maya Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-803",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Brian Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-585",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Savannah Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-886",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Billy Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-670",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Louis Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-936",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Joseph Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-377",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "36d2968f-97f4-4cc3-a38a-617684901a36",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 14,
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
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Classical Crossover",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Classical Crossover performance times"
    },
    contact: {
      contactNumber: "+1-977-300-2080",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "72d3015a-3405-4d62-87f8-98790cf179a0",
      title: "Classical Crossover",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "26903c54-6f15-42e6-b4f3-55f7ee0d95fd",
                "name": "Billy Nash",
                "role": "Bass Player",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Bass Player",
                        "Drummer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Sofia Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-985",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Mia Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-216",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Marcus Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-349",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Chen Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-252",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Russell Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-124",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Paul Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-12",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Rebecca Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-977",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Terry Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-1025",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Priya Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-169",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Alexander Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-744",
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
    isPopular: true
  },
  {
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-711-702-2773",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ef5f5a0c-345f-459f-9a60-5f0c1ec9baf4",
      title: "Singer-Songwriter Showcase",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "b7f7e8de-50b2-410a-95ff-fc991d8d3080",
                "name": "Lily Cooper",
                "role": "Guitarist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Austin Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-429",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sophia Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-351",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Javier Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-894",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Stella Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-480",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "John Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-43",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Helen Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-1036",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Lawrence Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-269",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Angela Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-495",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d3d7ca82-aae9-4aac-b3e9-26a99467e891",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 30,
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
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-276-660-6335",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d9e00569-7325-4b59-9d12-f29e21695a68",
      title: "Singer-Songwriter Showcase",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "a4498be2-f422-413e-a4de-186b67bae667",
                "name": "Mia Hunter",
                "role": "Violinist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/9.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Thandiwe Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Terry Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-257",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Gabriel Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-915",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Dennis Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-957",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jane Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-116",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Richard Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-105",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Brooklyn Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-214",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Eleanor Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-792",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "25065765-5b8f-45ba-ab7b-d4158de4a134",
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
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-732-754-3724",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8b8fcfcc-19f6-43ac-9526-e9386f686602",
      title: "Piano Bar Sessions",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "bd8e68e5-16aa-48de-907e-4e84712a793b",
                "name": "Sophia Graham",
                "role": "Guitarist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/1.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Elena Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-105",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Roger Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-407",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Patricia Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-807",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Sarah Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-219",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Johnny Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-424",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Jane Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-367",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e862f6e2-f0a2-40ab-9967-2df17baaeccf",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 19,
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
    id: "10e35105-59f2-4f05-a064-136cf2f82d89",
    category: "Live Music",
    name: "Piano Bar Sessions",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Piano Bar Sessions performance times"
    },
    contact: {
      contactNumber: "+1-415-636-4948",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2119d0cf-d245-4b6b-8be1-39faa64ce573",
      title: "Piano Bar Sessions",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: false,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Piano Bar Sessions performance times"
        }],
      performers: [        {
                "id": "764c3167-b2db-4ea3-b227-012297026cd3",
                "name": "Rajesh Maxwell",
                "role": "Bass Player",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/80.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Drummer",
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
          author: "Eleanor Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-858",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gregory Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-1055",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Diego West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-938",
        },
        {
          quote: "What an amazing night of music! The Piano Bar Sessions show exceeded all my expectations.",
          author: "Luis Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-479",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kennedy Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-110",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Juan Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-490",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "William Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-888",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8bffff03-eb29-412d-b147-cf00092edf94",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 11,
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
    isPopular: false
  }
];
