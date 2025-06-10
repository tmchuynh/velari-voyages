// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "a42fcd6c-773a-413b-a170-f0dfcf029f3a",
    category: "Live Music",
    name: "Latin Rhythms",
    description: "Traditional folk music with modern interpretations",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Latin Rhythms performance times"
    },
    contact: {
      contactNumber: "+1-574-850-4759",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ea755390-3390-408b-9a3a-c2c2ca28851b",
      title: "Latin Rhythms",
      description: "Traditional folk music with modern interpretations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Latin Rhythms performance times"
        }],
      performers: [        {
                "id": "3675ef32-c1ce-4c8a-bb12-6cf77f20226f",
                "name": "Hannah Lawson",
                "role": "Bass Player",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/0.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Melissa Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-858",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Peter Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Thomas Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Riley Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-628",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Evelyn Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-545",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Gabriel Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-667",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Andrew Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-760",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Marcus Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-237",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Stephanie Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-22",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7378cb36-9e4b-458b-be9b-d12b508e5b16",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 17,
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
    id: "a42fcd6c-773a-413b-a170-f0dfcf029f3a",
    category: "Live Music",
    name: "Rock the Ship",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-378-638-8733",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9b2b43c0-25b4-4901-a58d-3dfd51c8d9a0",
      title: "Rock the Ship",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "91 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "f6a2dc56-3260-48f6-bb02-d181132f6dac",
                "name": "Nicole Crawford",
                "role": "Flutist",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Adeline Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-510",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Sarah Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-727",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Juan Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-812",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Jeremy Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-385",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Margaret Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Thabo Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-262",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Mark Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-645",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Linda Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-1061",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Laura Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-732",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "15dd3468-bad1-490c-b56c-45f259f1a1c3",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 25,
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
    id: "a42fcd6c-773a-413b-a170-f0dfcf029f3a",
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
      contactNumber: "+1-789-344-1686",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "26aaf4f0-6c07-4b40-b6c2-1f0d4526daf7",
      title: "Classical Crossover",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "66 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Classical Crossover performance times"
        }],
      performers: [        {
                "id": "d28772cf-20ff-4b24-87d2-89ba36159e14",
                "name": "Christine Mason",
                "role": "Guitarist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Saxophonist",
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
          author: "Claire Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-255",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Nicole Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-427",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Matthew Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-80",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Emma Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-605",
        },
        {
          quote: "What an amazing night of music! The Classical Crossover show exceeded all my expectations.",
          author: "Daniel Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-508",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Amina Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-775",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Harry Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-846",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Benjamin Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-790",
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
    id: "a42fcd6c-773a-413b-a170-f0dfcf029f3a",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Elegant piano performances in an intimate lounge setting",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-416-836-8901",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2db9996c-2140-406b-9919-a186318c3017",
      title: "Rock the Ship",
      description: "Elegant piano performances in an intimate lounge setting",
      tickets: {
        isRequired: false,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "113 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "3be02a70-7b2d-48d5-b698-8269e54a6329",
                "name": "Peter Coleman",
                "role": "Pianist",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/72.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Drummer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Walter Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-312",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Eleanor Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-525",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Donna Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-454",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Gabriella Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-947",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gabriel Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-1039",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Barbara Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-95",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Elena Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-386",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Johnny Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-547",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d1987c75-3361-43ad-9d5b-7a9d4a79be26",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 25,
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
    id: "a42fcd6c-773a-413b-a170-f0dfcf029f3a",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Soulful blues performances that will move your heart",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-901-914-1855",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "98133318-05ba-4725-9c92-8e120410327a",
      title: "Big Band Revival",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "8a1f96e3-0623-4911-81d7-5975c06e263c",
                "name": "Aria Douglas",
                "role": "Drummer",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          author: "Blake Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-548",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Amina Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-1049",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Terry Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-506",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Evelyn Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-779",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Alexander Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-49",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Raymond Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-952",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Henry Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-780",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Priya Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-566",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ca67e43c-8764-4f88-83ed-bf2e9c9e013e",
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
    id: "a42fcd6c-773a-413b-a170-f0dfcf029f3a",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-830-992-6747",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c7a96768-129b-4866-8f1a-664103af6f6a",
      title: "Acoustic Nights",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "e349dde2-f19b-4068-be9f-cec2ceb5d708",
                "name": "George Dunn",
                "role": "Guitarist",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Pianist",
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
          author: "Isabella Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-975",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Genesis Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-142",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Juan Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-531",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Thomas Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-900",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Aria Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-779",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Cynthia Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-1071",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Catherine Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-533",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6bad6b4e-684c-42df-b822-6ef72f35df7e",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 35,
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
  }
];
