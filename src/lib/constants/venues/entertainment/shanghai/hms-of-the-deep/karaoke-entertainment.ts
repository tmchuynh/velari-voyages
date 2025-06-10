// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "54f428ae-bec3-4f29-a5f1-82494b185b8a",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Compete for prizes in this exciting karaoke competition",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-486-975-7847",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "64119c2c-3902-49b7-a79c-840707dfac23",
      title: "Country Karaoke Night",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "100 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "560e5495-480d-4cff-a46a-eac6a314c9f2",
                "name": "Nicholas Keller",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/8.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Priya Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-392",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Linda Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-458",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Antonio Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-359",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Riley Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-226",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Nomsa Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-668",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Willie Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-111",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Stephanie Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-158",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "61299303-2303-4249-a748-d31dcdd7615e",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 24,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: false
  },
  {
    id: "54f428ae-bec3-4f29-a5f1-82494b185b8a",
    category: "Karaoke",
    name: "Theme Song Karaoke",
    description: "Team vs. team karaoke challenges and competitions",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Theme Song Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-857-131-9335",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1761ee8f-9b47-4378-9915-aa8fb8f50c4d",
      title: "Theme Song Karaoke",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "b6a57ff4-f9f2-402c-a6f5-cb3e28b095f1",
                "name": "Kyle Day",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/73.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Nicholas Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-310",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Joan Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-848",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Ralph Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-103",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Linda Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-292",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Billy Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-338",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f9c090ca-a445-4006-a65f-44d75502bbd0",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 32,
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
    id: "54f428ae-bec3-4f29-a5f1-82494b185b8a",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Sing along to today's biggest pop hits",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-629-779-2021",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2a12d70c-a813-42f1-9388-d471f0468c89",
      title: "Karaoke Competition",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "ab401ae9-b9af-4111-9155-2b4b41d9beec",
                "name": "Joel Grant",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/46.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Susan Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-1034",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Kennedy Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-210",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Adeline Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-319",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Michelle Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-171",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Lisa Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-267",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Sebastian Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-8",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Sandra Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-818",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Tyler Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-247",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "54f428ae-bec3-4f29-a5f1-82494b185b8a",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Team vs. team karaoke challenges and competitions",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-262-117-8624",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "746f8678-b7ff-48bd-8dd2-76ad5bf302da",
      title: "Karaoke Idol",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "a13b8dd6-d62f-40b0-976f-b80fca8378dc",
                "name": "Jeremy Grant",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Bruce Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-289",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jane Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-970",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Skylar Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-68",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sarah Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-672",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Mark Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-244",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Michael Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-568",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Alexa Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-671",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jennifer Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-553",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3716491e-85ac-4a90-804e-2d2e0244d0a9",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 27,
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
    id: "54f428ae-bec3-4f29-a5f1-82494b185b8a",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "American Idol-style karaoke competition with judges",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-547-974-5615",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d95cac54-b817-4d58-9c0b-09b011971ac6",
      title: "Country Karaoke Night",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "3b105dc4-9db9-4a4d-84a8-3184f65059db",
                "name": "Christian Murray",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/39.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Stephen Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-126",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Scarlett Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-800",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Wei Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-40",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Thandiwe Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-514",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Carlos Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-598",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Maya Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-97",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Luis Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-796",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Isabella Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-742",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Sandra Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-654",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    isPopular: false
  },
  {
    id: "54f428ae-bec3-4f29-a5f1-82494b185b8a",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Family-friendly karaoke with songs for all ages",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-204-590-4204",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ad71f55d-bb92-46b3-95e0-3bfd061c64e9",
      title: "International Karaoke",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "ea99f099-564b-467f-b2a4-1a4094ef113f",
                "name": "Alexander Montgomery",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Charlotte Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-902",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Audrey Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-1030",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Riley Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-912",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Cynthia Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-825",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Brooklyn Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-239",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Victor Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-1058",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "f25fb2f7-9f6d-4b56-b515-7b2385ba8a4b",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 23,
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
  }
];
