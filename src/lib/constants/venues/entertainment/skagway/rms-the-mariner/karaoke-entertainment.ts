// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "59b82e50-a7bb-4324-8ade-30507f6c0a1f",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-607-168-3758",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "370b73b4-1475-49cd-85f1-508bb8c65095",
      title: "Karaoke Superstars",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "95 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "b580f1bb-45d9-4579-a19c-7e1028559c18",
                "name": "Virginia Grant",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/78.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "DJ",
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Samantha Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-340",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Brandon Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-532",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Zola Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-1000",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Alice Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Evelyn Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-482",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Brandon Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-159",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Mark Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-1082",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1087f61f-ac8f-4985-938b-a9bed0c9a9aa",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 18,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  },
  {
    id: "59b82e50-a7bb-4324-8ade-30507f6c0a1f",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-914-624-5268",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f82da8be-ae01-4434-aaca-1ed2b7fc1b0b",
      title: "Pop Hits Karaoke",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "119 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "af1bb3cd-9d63-47e5-a0ee-32fcfa7c6dbc",
                "name": "Alice Fisher",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Karaoke Host",
                        "DJ",
                        "Vocal Coach"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Catherine Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-55",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Amina Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-198",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Liam Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-769",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jordan Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-877",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Aria Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-390",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Skylar Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-734",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Janet Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-752",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "b2e686ad-70cb-4d3d-bdef-212cece747bc",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 33,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      }
    ],
    isPopular: false
  },
  {
    id: "59b82e50-a7bb-4324-8ade-30507f6c0a1f",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-599-382-7038",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ae1cd785-f73c-4a3d-b48a-61edc53b2e10",
      title: "Karaoke Idol",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "1d7e2180-ed64-4236-99a0-c1967fffaad2",
                "name": "Joe Stewart",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Karaoke Host",
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Virginia Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-897",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Aiden Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-422",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Gabriel Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-609",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Charlotte Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-153",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Jessica Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-264",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Terry Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-831",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Bobby Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-555",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Aria Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-875",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Katherine Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-44",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "233b8066-d0e3-4735-ad40-edffacdfa975",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 20,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      }
    ],
    isPopular: true
  },
  {
    id: "59b82e50-a7bb-4324-8ade-30507f6c0a1f",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-686-896-3990",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a7115e1b-824d-41ce-bf98-3c32a555caad",
      title: "Pop Hits Karaoke",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: true,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "d17372f9-803a-4dbc-92ee-c4bc6c371dc5",
                "name": "Louis Day",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Karaoke Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Julie Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-805",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Liam Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-529",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Michael Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-133",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Virginia Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-874",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Peter Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-761",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Terry Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Henry Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-635",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Sophia Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-588",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ronald Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-198",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "dc9c05cd-1bc9-4213-85f4-a80e49608c63",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 19,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  },
  {
    id: "59b82e50-a7bb-4324-8ade-30507f6c0a1f",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-723-621-3036",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "df223698-250d-4d61-ab4d-a80f9952e297",
      title: "Family Karaoke Hour",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "c833a84d-e482-4322-8e66-261d226b551a",
                "name": "Genesis Crawford",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/30.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Karaoke Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Edward Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-623",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Elizabeth Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Ethan Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-993",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Amanda Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-196",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Julie Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-949",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Lisa Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-197",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Layla Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-819",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b3ce6a55-e0ce-48de-a828-e10c2a9f1ff9",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
              "price": 19,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: true
  },
  {
    id: "59b82e50-a7bb-4324-8ade-30507f6c0a1f",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-381-927-9405",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7753e2ed-dd9a-4a7c-b89c-7d73bd3d848d",
      title: "Karaoke Competition",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "7c77414e-d94a-4b9a-acda-bd2c7526125f",
                "name": "Nicole Graham",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/59.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Entertainment Coordinator",
                        "Vocal Coach",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ashley Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-397",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Riley Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Lisa Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-281",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Peter Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-146",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Chen Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-638",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Victoria Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-386",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "99b07cac-c4c5-4a64-9a2a-185e30ed05db",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 35,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: true
  },
  {
    id: "59b82e50-a7bb-4324-8ade-30507f6c0a1f",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-714-589-5517",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2ba5c5e9-58c0-4381-80cd-aa9d775f2d72",
      title: "Karaoke Idol",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "b25b8629-bb08-46c2-9c03-f72c02f8bb61",
                "name": "Kyle Fletcher",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/69.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Vocal Coach"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Edward Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-746",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Lisa Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-530",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Samantha Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-481",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Dennis Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-607",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Nancy Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-194",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Maria Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-318",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  }
];
