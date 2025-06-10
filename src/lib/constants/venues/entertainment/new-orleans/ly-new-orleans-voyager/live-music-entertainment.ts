// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-534-314-9896",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "abf7d283-993a-4f0e-93e5-ec737d124c94",
      title: "Jazz Under the Stars",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "1216141e-fe7c-42e1-9e05-309622205b71",
                "name": "Nathan Wells",
                "role": "Flutist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/66.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Emma Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-884",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Chen Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-717",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Maya Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-690",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Gary Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-980",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Harold Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-152",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Julie Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-1071",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Madelyn Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-698",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Laura Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-222",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Isabella Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-591",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Jerry Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-391",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "16266bde-cc8c-43b5-8cab-0629ff8ae6a8",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 32,
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
  },
  {
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-604-327-8747",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a482da59-c656-485e-96db-b1291b832bb5",
      title: "Blues & Soul",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "cbe2dc58-ce15-4de5-a8d3-90e8291529f2",
                "name": "Marcus Gibson",
                "role": "Saxophonist",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Philip Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-413",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Naomi Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-694",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Isabella Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-291",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Henry Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-255",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Sandra Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-996",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lisa Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-23",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Claire Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-445",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sophia Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-680",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Jeffrey Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-65",
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
        question: "Do I need tickets for live music performances?",
        answer: "Most live music performances are complimentary for all guests. Some special concerts may require tickets which can be reserved at Guest Services.",
      },
      {
        question: "Can I request songs from the performers?",
        answer: "Many of our live music acts accept requests! Feel free to approach the performers during breaks or submit requests to the entertainment desk.",
      }
    ],
    isPopular: true
  },
  {
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-284-835-2872",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bf080655-81f1-4c9a-be18-d2d4b4940474",
      title: "Jazz Under the Stars",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 30,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "1ea05d3d-307f-4ddb-a091-368c81162d2f",
                "name": "Angela Morgan",
                "role": "Trumpeter",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/2.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Saxophonist",
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
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Dennis Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-884",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Maya Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-1012",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Timothy Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-728",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Thabo Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-382",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Isabella Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-705",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Jesse Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-639",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Brandon Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-432",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Dorothy Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-896",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Avery Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-113",
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
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Blues & Soul",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-295-326-4610",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1b420dfc-7c4f-4904-beeb-7923ad195437",
      title: "Blues & Soul",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "9a0d9b92-5561-4217-837f-b3b7cc74bdc2",
                "name": "Victoria West",
                "role": "Bass Player",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/72.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Saxophonist",
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
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Mateo Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-496",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Gabriel Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-454",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Elizabeth Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-1071",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Randy Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-125",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Arthur Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-949",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "John Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-649",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Richard Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-272",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Zola Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-505",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Scarlett Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-608",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Oliver Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-351",
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
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-984-107-3997",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b48d3ff1-5d86-4a3c-913f-eebd954d1842",
      title: "Tribute Bands Night",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "68 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "90ab6cb2-23cc-4cdc-886b-39814828bb85",
                "name": "Stephen Fox",
                "role": "Vocalist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Christian Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-699",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Brenda Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ryan Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-925",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sarah Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-578",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Isabella Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-855",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Darrell Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-361",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Richard Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-683",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Joel Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-758",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sarah Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-410",
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
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Blues & Soul",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Blues & Soul performance times"
    },
    contact: {
      contactNumber: "+1-940-256-5290",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ecf734c9-4d77-4ba9-8369-fa563aa7a98b",
      title: "Blues & Soul",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Blues & Soul performance times"
        }],
      performers: [        {
                "id": "feaa6a16-1e4b-440a-8f82-4727c2199edc",
                "name": "Joseph Reeves",
                "role": "Flutist",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/17.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Keyboardist",
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
          author: "Richard Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-121",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Benjamin Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-702",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Julie Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-246",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Harry Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-779",
        },
        {
          quote: "What an amazing night of music! The Blues & Soul show exceeded all my expectations.",
          author: "Matthew Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-452",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f2eb9b7d-73c8-4101-8275-4e81ea3378b4",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 13,
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
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-623-742-2747",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3fbfce72-f6e1-4eb0-bcf8-032267e9a59d",
      title: "Acoustic Nights",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: false,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "4d1af3e4-1465-4cf8-b3d2-66f5f6da2304",
                "name": "Elijah Charlotte",
                "role": "Flutist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/32.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Vincent Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jennifer Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-1073",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Adam Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-151",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Charlotte Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-449",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Sarah Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-673",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Ella Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-63",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Johnny Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-241",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Grace Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-898",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0467744c-7c87-4c55-92bf-533cce27087d",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
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
    isPopular: true
  },
  {
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Folk & Americana",
    description: "Swing and big band classics brought to life",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Folk & Americana performance times"
    },
    contact: {
      contactNumber: "+1-614-270-1933",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c2c9138f-715a-4c3d-bd5f-8a14d861f0f0",
      title: "Folk & Americana",
      description: "Swing and big band classics brought to life",
      tickets: {
        isRequired: true,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Folk & Americana performance times"
        }],
      performers: [        {
                "id": "22e92bd8-77e2-4885-83bb-1f92112010b0",
                "name": "Bobby Price",
                "role": "Drummer",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/24.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Saxophonist",
                        "Drummer",
                        "Trumpeter"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Elena Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-117",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Darrell Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-839",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sandra Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-236",
        },
        {
          quote: "What an amazing night of music! The Folk & Americana show exceeded all my expectations.",
          author: "Ronald Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-154",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kenneth Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-856",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Maria Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "8",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sarah Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-885",
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
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Country music favorites performed with authentic style",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-299-620-3623",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "669eef21-3cde-40f5-a15e-4607a6839968",
      title: "Rock the Ship",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "6f2e409d-4e06-451b-8901-5f55bb4beafb",
                "name": "Walter Jennings",
                "role": "Trumpeter",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/57.jpg",
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
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Chloe Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-500",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Harry Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-38",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Kenneth Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-973",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Bella Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-995",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Matthew Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-68",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Andrew West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-817",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Bella Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-52",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Nicole Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-686",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Anthony Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-1024",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "36601d49-36c5-4973-9175-7a750cfdcbfe",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 35,
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
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-251-521-2004",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c0c09671-235c-4a07-9068-a6ac40f87a3f",
      title: "Tribute Bands Night",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: true,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "1d8723df-a986-49fb-a47f-09a73180487d",
                "name": "Christopher Douglas",
                "role": "Violinist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Vocalist",
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Daniel Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-542",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Melissa Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-662",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Susan Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-919",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Rachel Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-1046",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Sandra Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-503",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Nomsa Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-939",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Aaron Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-313",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Carlos Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-57",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Victor Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-641",
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
  }
];
