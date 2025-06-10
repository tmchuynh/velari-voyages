// Live Music entertainment shows
// This file contains live music entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const liveMusicEntertainment: Entertainment[] = [
  {
    id: "75308642-420f-4c78-81f6-6fb2ede9a63e",
    category: "Live Music",
    name: "Country Roads",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-926-211-5389",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "47e4eed0-8f56-4add-8cee-31bf7eb919c0",
      title: "Country Roads",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "403f3dff-5b9e-406f-926b-1189165b49e4",
                "name": "Raymond Chambers",
                "role": "Vocalist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Caroline Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-350",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Amelia Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-165",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Dorothy Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-678",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Juan Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-558",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Scarlett Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-318",
        },
        {
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Gabriel Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-286",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5ce3269d-0d9b-47a8-87ef-f4b35289201f",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
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
    isPopular: false
  },
  {
    id: "75308642-420f-4c78-81f6-6fb2ede9a63e",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Soulful blues performances that will move your heart",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-955-945-1253",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "86de49cf-8adc-4902-8215-634e7157357e",
      title: "Big Band Revival",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "a166f571-9f9d-43b0-b40e-8fbe6846b048",
                "name": "Maya Parker",
                "role": "Pianist",
                "bio": "Professional vocalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Nathan Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-1046",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Eleanor Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-833",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Wayne Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-522",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Sarah Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-896",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Christopher Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-278",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Catherine Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-855",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Layla Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-473",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Nancy Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-856",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Patricia Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Andrew Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-316",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "dc9fdc97-074b-44f3-946f-78616e9f612c",
              "name": "Concert T-Shirt",
              "description": "Official performance t-shirt with tour dates",
              "price": 33,
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
    id: "75308642-420f-4c78-81f6-6fb2ede9a63e",
    category: "Live Music",
    name: "Country Roads",
    description: "Soulful blues performances that will move your heart",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-305-650-3319",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "600b94e7-0d93-499d-b243-aee1d62f25bf",
      title: "Country Roads",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: false,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "40479cfd-b144-4b1e-86a3-6281b9e921da",
                "name": "Isabella Sutton",
                "role": "Pianist",
                "bio": "Professional drummer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/14.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Grace Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-733",
        },
        {
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Stephen Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-827",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Priya Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-41",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Ashley Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Christian Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-916",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1ee35662-4fb2-4eee-99b6-5ff0cb0bc629",
              "name": "Music Playlist Download",
              "description": "Digital download of tonight's setlist",
              "price": 6,
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
    id: "75308642-420f-4c78-81f6-6fb2ede9a63e",
    category: "Live Music",
    name: "Tribute Bands Night",
    description: "Unplugged acoustic sessions featuring talented singer-songwriters",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Tribute Bands Night performance times"
    },
    contact: {
      contactNumber: "+1-514-948-4631",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a9eb78da-4087-45d4-9ad3-4ecc0c051f02",
      title: "Tribute Bands Night",
      description: "Unplugged acoustic sessions featuring talented singer-songwriters",
      tickets: {
        isRequired: true,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Tribute Bands Night performance times"
        }],
      performers: [        {
                "id": "bc52cd07-7f76-44be-978f-8d03b950a103",
                "name": "Walter Olivia",
                "role": "Violinist",
                "bio": "Professional guitarist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Aria Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-370",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Mia Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-1079",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Sofia Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-583",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Amanda Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-330",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Antonio Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-538",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Hannah Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-657",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Genesis West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-336",
        },
        {
          quote: "What an amazing night of music! The Tribute Bands Night show exceeded all my expectations.",
          author: "Liam Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-928",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Barbara Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-861",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Elijah West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-120",
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
    id: "75308642-420f-4c78-81f6-6fb2ede9a63e",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Classical music meets contemporary hits in this unique performance",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-426-557-7115",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "00f259ed-3962-4f35-aaeb-44609f018798",
      title: "Big Band Revival",
      description: "Classical music meets contemporary hits in this unique performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "24aeb9fa-e3ee-49b8-b7ab-be3c56725c58",
                "name": "Amanda Maxwell",
                "role": "Drummer",
                "bio": "Professional pianist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/14.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Jack Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Margaret Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-253",
        },
        {
          quote: "The acoustics were perfect and the musicians were phenomenal. Highly recommend!",
          author: "Laura Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-501",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Michael Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-939",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Johnny Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-594",
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
  },
  {
    id: "75308642-420f-4c78-81f6-6fb2ede9a63e",
    category: "Live Music",
    name: "Country Roads",
    description: "Soulful blues performances that will move your heart",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Country Roads performance times"
    },
    contact: {
      contactNumber: "+1-294-763-4413",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d16f15af-b51e-4c44-af15-d8046118bb68",
      title: "Country Roads",
      description: "Soulful blues performances that will move your heart",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Country Roads performance times"
        }],
      performers: [        {
                "id": "d534dbc3-ba91-4c41-8c2c-e7aa18e75556",
                "name": "Sean Cooper",
                "role": "Bass Player",
                "bio": "Professional trumpeter with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/38.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Bass Player",
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Gabriella Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-847",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Skylar Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-747",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Roy Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "What an amazing night of music! The Country Roads show exceeded all my expectations.",
          author: "Kinsley Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-740",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Lawrence Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-348",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Elizabeth Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-611",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "bc8f5777-50b4-4047-a296-e6bc4096f772",
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
    id: "75308642-420f-4c78-81f6-6fb2ede9a63e",
    category: "Live Music",
    name: "Big Band Revival",
    description: "Passionate Latin music and dance performances",
    image: "/images/entertainment/live-music-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Big Band Revival performance times"
    },
    contact: {
      contactNumber: "+1-496-901-8278",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "975bf369-0ea3-416e-9a78-95ba9c4bbf55",
      title: "Big Band Revival",
      description: "Passionate Latin music and dance performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Big Band Revival performance times"
        }],
      performers: [        {
                "id": "3e1f43b1-4a16-40cc-9bd3-526c1f8f901f",
                "name": "Dorothy Spencer",
                "role": "Violinist",
                "bio": "Professional keyboardist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/56.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
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
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Kevin Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-518",
        },
        {
          quote: "The live music scene on this cruise is world-class. undefined undefined is incredibly talented.",
          author: "Patricia Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-829",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Christopher Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-974",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Anthony Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-454",
        },
        {
          quote: "I've been to many concerts, but this intimate setting made it extra special.",
          author: "Mark Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-933",
        },
        {
          quote: "This was the highlight of my cruise! Such professional and entertaining performers.",
          author: "Noah Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-588",
        },
        {
          quote: "What an amazing night of music! The Big Band Revival show exceeded all my expectations.",
          author: "Diego Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-691",
        },
        {
          quote: "The musical talent on this ship is absolutely incredible! undefined undefined delivered an unforgettable performance.",
          author: "Eugene Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-87",
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
  }
];
