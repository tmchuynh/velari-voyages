// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "aeffbe42-84c5-4cb7-9904-474ade8e6c2e",
    category: "Live Music",
    name: "Rock the Ship",
    description: "High-energy rock performances featuring classic and modern hits",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Rock the Ship performance times"
    },
    contact: {
      contactNumber: "+1-962-898-5752",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ff0cdabb-6d4f-470b-a199-e8a724def54e",
      title: "Rock the Ship",
      description: "High-energy rock performances featuring classic and modern hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Rock the Ship performance times"
        }],
      performers: [        {
                "id": "e4594331-2906-452a-8615-09df7a898524",
                "name": "Aaron Reeves",
                "role": "Bass Player",
                "bio": "Professional saxophonist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/69.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Elijah Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-28",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Benjamin Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-865",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Roy Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-564",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Zola Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-845",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Samuel Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-242",
        },
        {
          quote: "What an amazing night of music! The Rock the Ship show exceeded all my expectations.",
          author: "Joel Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-910",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Nicholas Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-1083",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Kennedy Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Dennis Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-655",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Claire Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-279",
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
    id: "aeffbe42-84c5-4cb7-9904-474ade8e6c2e",
    category: "Live Music",
    name: "Country Roads",
    description: "Elegant piano performances in an intimate lounge setting",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-606-161-4899",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e6b5fb44-cd41-4b75-9bce-d10c107cc7ee",
      title: "Country Roads",
      description: "Elegant piano performances in an intimate lounge setting",
      tickets: {
        isRequired: false,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "6ae58c1c-9e00-4c4d-b491-f89ea2d36087",
                "name": "Matthew Sutton",
                "role": "Saxophonist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          author: "Carol Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-80",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Alexa Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-890",
        },
        {
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Julie Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-88",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Sofia Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-498",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Anna Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-497",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Rajesh Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-1039",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Audrey Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-423",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7361a45b-f9aa-4e99-968e-bbe8d479feb6",
              "name": "Artist Poster",
              "description": "Signed poster of the performing artist",
              "price": 23,
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
    id: "aeffbe42-84c5-4cb7-9904-474ade8e6c2e",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Tribute performances honoring legendary artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-766-829-7729",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c46a15e4-4de2-42f3-a5b6-b9eee34b2c48",
      title: "Acoustic Nights",
      description: "Tribute performances honoring legendary artists",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "ddd37f06-7f53-4f0d-b80d-96c745ea797d",
                "name": "Michael Ellis",
                "role": "Vocalist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/62.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Flutist",
                        "Vocalist",
                        "Violinist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Elena Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-440",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Sebastian Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-989",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Alexander Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-417",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Christopher Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-540",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jeffrey Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-362",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Anthony Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-115",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Billy Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Nancy Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-164",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Anna Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-352",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Edward Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-709",
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
    isPopular: false
  },
  {
    id: "aeffbe42-84c5-4cb7-9904-474ade8e6c2e",
    category: "Live Music",
    name: "Acoustic Nights",
    description: "Original compositions and covers by talented indie artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Acoustic Nights performance times"
    },
    contact: {
      contactNumber: "+1-409-977-8982",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0d9540cf-dfba-47d8-b644-2c478595e526",
      title: "Acoustic Nights",
      description: "Original compositions and covers by talented indie artists",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "f71df901-c23b-43ca-8523-3ce6e698fbff",
                "name": "Virginia Campbell",
                "role": "Violinist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Drummer",
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
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Jessica Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-660",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Mason Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-990",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Emily Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-294",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Raymond Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-493",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Christopher Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-609",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Elizabeth Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-748",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Brooklyn Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-24",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "74eeda86-68fc-429a-bc13-44615bc50af2",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 22,
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
    id: "aeffbe42-84c5-4cb7-9904-474ade8e6c2e",
    category: "Live Music",
    name: "Singer-Songwriter Showcase",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Singer-Songwriter Showcase performance times"
    },
    contact: {
      contactNumber: "+1-291-133-6927",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dcacdf4e-65aa-4193-b2eb-e3b7d894f52d",
      title: "Singer-Songwriter Showcase",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Singer-Songwriter Showcase performance times"
        }],
      performers: [        {
                "id": "8a1fb598-5ea9-4f6c-9b52-893adf08a649",
                "name": "Thandiwe Henderson",
                "role": "Vocalist",
                "bio": "Professional violinist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/68.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Keyboardist",
                        "Flutist",
                        "Pianist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Jack Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-524",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Gerald Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-918",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Lily Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-563",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Catherine Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-35",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Cynthia Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-263",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Henry Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-760",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Joan Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-943",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "113e1bd3-2ac1-4c6c-9498-09c9631e6c42",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 34,
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
    id: "aeffbe42-84c5-4cb7-9904-474ade8e6c2e",
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
      contactNumber: "+1-780-201-8882",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "93999af1-ea7d-47da-b353-dc5c26784266",
      title: "Acoustic Nights",
      description: "Country music favorites performed with authentic style",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Acoustic Nights performance times"
        }],
      performers: [        {
                "id": "6e80235f-2950-421e-bdfd-7b5c88bc675a",
                "name": "Russell Hudson",
                "role": "Keyboardist",
                "bio": "Professional bass player with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Drummer",
                        "Keyboardist",
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
          author: "Brian Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-415",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Valentina Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-581",
        },
        {
          quote: "What an amazing night of music! The Acoustic Nights show exceeded all my expectations.",
          author: "Julie Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-89",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Abigail Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-1011",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Thomas Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-708",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Sarah Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-994",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Rachel Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-863",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Janet Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-530",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sean Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-693",
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
    id: "aeffbe42-84c5-4cb7-9904-474ade8e6c2e",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Original compositions and covers by talented indie artists",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-534-148-8744",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3f277343-6296-41fd-9e10-49ccd7a4c6a2",
      title: "Tribute Bands Night",
      description: "Original compositions and covers by talented indie artists",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "84abfa41-3964-4265-81b8-75b7317b98bb",
                "name": "Diego Harper",
                "role": "Flutist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/76.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Violinist",
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
          author: "Zachary Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-261",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Alice Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-522",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Justin Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-998",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Avery Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-168",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Susan Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-932",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Billy Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-529",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aca0af9e-7ee1-4ee6-a930-25cfa7348d63",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 31,
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
