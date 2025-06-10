// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "e9c2aae0-b64b-4176-aa9f-803b8177cf54",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-621-452-9570",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "827a4812-a3a0-4dbe-a0ea-39c1e22d678c",
      title: "Big Band Revival",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "81 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "ac8a6d69-c03b-498b-8c50-2b0e5c637708",
                "name": "Alexa Keller",
                "role": "Guitarist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Melissa Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-1047",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Samantha Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-183",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "David Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-221",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Lawrence Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-26",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Zoe Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-677",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Dorothy Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-273",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ce725850-1998-41fd-b32a-fda25c481b0d",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
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
    isPopular: false
  },
  {
    id: "e9c2aae0-b64b-4176-aa9f-803b8177cf54",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "An intimate evening of smooth jazz melodies under the starlit sky",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-328-525-4573",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "78775ca2-e02d-46a0-9bbc-75c846717989",
      title: "Acoustic Nights",
      description: "An intimate evening of smooth jazz melodies under the starlit sky",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "a33851fe-d7cd-4639-a516-66b338e4ea0e",
                "name": "Billy Hunter",
                "role": "Drummer",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/59.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Violinist",
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
          author: "Amelia Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-102",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Savannah Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-520",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Rebecca Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-79",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Audrey Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-552",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Logan Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-141",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Matthew Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-404",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Joshua Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-262",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Ellie Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-5",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Eric Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-908",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Edward Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-842",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "40a88b2d-d8b5-46c6-9571-567e2852d90e",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 9,
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
    id: "e9c2aae0-b64b-4176-aa9f-803b8177cf54",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-893-406-6890",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fd1b3dbe-f3de-4213-ac25-e241b7e488bb",
      title: "Singer-Songwriter Showcase",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "343cb360-8789-4ec1-bc4d-98c84cefa9af",
                "name": "Donna Crawford",
                "role": "Drummer",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/37.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Flutist",
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
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Joan Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-277",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Adeline Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-723",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Jason Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-698",
        },
        {
          quote: "What an amazing night of music! The Singer-Songwriter Showcase show exceeded all my expectations.",
          author: "Sofia Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-796",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sean Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-902",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a5cb3b7f-7b18-45dd-991d-4d2cdec64c56",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 15,
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
    id: "e9c2aae0-b64b-4176-aa9f-803b8177cf54",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-647-100-8628",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4b36c77d-1c80-4239-96b4-9497c989ec41",
      title: "Big Band Revival",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "78 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "ef9a8772-8513-45cf-9bf4-f79083bdaf2f",
                "name": "Skylar Payne",
                "role": "Bass Player",
                "bio": "Professional flutist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Violinist",
                        "Trumpeter",
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
          author: "Alexa Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Bruce Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-660",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Bobby Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-152",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Jeremy Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-719",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Maria Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-971",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Juan Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-670",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Aiden Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-91",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2c939381-cb49-446a-83f8-078f56c89289",
              "name": "Live Album CD",
              "description": "Recording of tonight's performance",
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
    id: "e9c2aae0-b64b-4176-aa9f-803b8177cf54",
    category: "Live Music",
    name: "Rock the Ship",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-966-129-9063",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1f45d368-fc61-45a6-a3f2-a474c49f851c",
      title: "Rock the Ship",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "6f1c4de0-48b0-4665-8fc4-b2c97cdf9c1d",
                "name": "Scarlett Harper",
                "role": "Drummer",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/48.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Raymond Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-150",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Samantha West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-127",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Catherine Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-455",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Brian Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-50",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Avery West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-750",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Elena Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-318",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Edward Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-339",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Brooklyn Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-239",
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
    isPopular: false
  },
  {
    id: "e9c2aae0-b64b-4176-aa9f-803b8177cf54",
    category: "Live Music",
    name: "Big Band Revival",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-806-936-3282",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c40a03fa-bd50-4480-8ed3-85186a8e607f",
      title: "Big Band Revival",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: true,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "530e972e-e242-4fcd-b134-335fc859e193",
                "name": "Angela Hudson",
                "role": "Keyboardist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Nicholas Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-549",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Isabella Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-1031",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Abigail Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-787",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Javier Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-2",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Mary Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-1009",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "George Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-1057",
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
    id: "e9c2aae0-b64b-4176-aa9f-803b8177cf54",
    category: "Live Music",
    name: "Jazz Under the Stars",
    description: "Original compositions and covers by talented indie artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Jazz Under the Stars performance times"
    },
    contact: {
      contactNumber: "+1-883-603-8784",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3fa27d75-682f-401a-b4ea-12c226bb44b6",
      title: "Jazz Under the Stars",
      description: "Original compositions and covers by talented indie artists",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Jazz Under the Stars performance times"
        }],
      performers: [        {
                "id": "e9b5761a-4311-410c-96f9-8b0dcb7cd5ae",
                "name": "Mark Hamilton",
                "role": "Saxophonist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/60.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Pianist",
                        "Drummer",
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
          author: "Laura Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-723",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Emily Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-989",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Marcus Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-128",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Walter Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-549",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Linda Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-592",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Lucas Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-674",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Justin Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-168",
        },
        {
          quote: "What an amazing night of music! The Jazz Under the Stars show exceeded all my expectations.",
          author: "Keith Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-151",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Harry Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-66",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Valentina Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-622",
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
