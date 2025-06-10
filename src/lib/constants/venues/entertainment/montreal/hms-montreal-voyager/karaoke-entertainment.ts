// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Showcase your singing talents and become a karaoke superstar",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-547-853-9512",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a15c4623-850f-40ee-8ec3-83499f534453",
      title: "Pop Hits Karaoke",
      description: "Showcase your singing talents and become a karaoke superstar",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "4f4f3c2f-e7ca-4544-8976-58cfedf9ec9d",
                "name": "Audrey Clark",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/18.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Evelyn Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-661",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Liam Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-336",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Justin Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-621",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Vincent Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-20",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Isabella Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-702",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Harry Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-252",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    category: "Karaoke",
    name: "Duet Night",
    description: "Showcase your singing talents and become a karaoke superstar",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-476-472-8355",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "44e4b18b-d737-469c-8492-9fa5b935b295",
      title: "Duet Night",
      description: "Showcase your singing talents and become a karaoke superstar",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "33a336b2-7e3e-49f7-8fa2-4ed936ab2161",
                "name": "Susan Hunter",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/56.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          author: "Angela Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-431",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Maria Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-807",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Caroline Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-404",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Valentina Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-433",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Sarah Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-219",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    category: "Karaoke",
    name: "Duet Night",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-973-387-2368",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6c0a99e0-3055-427c-b3c6-178e9beb05cf",
      title: "Duet Night",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "62 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "623fc15e-7d21-4bef-a97f-11df386d3988",
                "name": "Pamela Grant",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Katherine Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-1007",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Valentina Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-703",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Gabriel Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-908",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Wayne Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Emma Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-378",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Stephen Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-1055",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Joe Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-412",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2e7731ea-6149-40da-afe9-09d00a67ac9c",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 28,
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
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-876-853-9069",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c0f7caaa-daaa-4837-afee-dbf912646fe5",
      title: "International Karaoke",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "773902d0-0eb3-4650-bfc3-52a1777aa0cb",
                "name": "Angela Grant",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Karaoke Host",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I finally got to sing my favorite song! The International Karaoke event was so much fun.",
          author: "Logan Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-453",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Keith Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-1010",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Benjamin Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-85",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jack Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-773",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Wei Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-841",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Harry West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-1001",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sean Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-302",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "9fbe39d1-7ef6-4cc6-9bc7-9f488b7a37bd",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 16,
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
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    category: "Karaoke",
    name: "Duet Night",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-945-624-5184",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6be559be-f049-4036-9c1d-9204dcf692d8",
      title: "Duet Night",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "92 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "802cae62-8674-4688-9377-5556ab0ae39b",
                "name": "Sophia Griffin",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/10.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Karaoke Host",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Deborah Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-525",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Lisa Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-352",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Nomsa Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-765",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Johnny Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-45",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Alice Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-258",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Rebecca Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-295",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Mia Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-771",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Claire Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-42",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
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
  },
  {
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-879-614-3649",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "eda22042-cb43-4c4d-baad-1211dd04b27c",
      title: "Group Karaoke Party",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: false,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "bc5327d1-6bbd-4318-b072-5b02147744dd",
                "name": "Nora Wells",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Karaoke Host",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Joshua Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-448",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Kenneth Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-148",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Victoria Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-342",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "John Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-658",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Kevin Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-425",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Zoe Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-268",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Lisa Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-629",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "011f260d-c1a0-46cd-8d72-e3292e7be3f3",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 30,
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
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-908-326-4771",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "50550932-d00d-45d7-bbaa-e8b6242b5c37",
      title: "Karaoke Superstars",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "5c489c49-6be0-42e8-ac3c-50d58f664997",
                "name": "Johnny Payne",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gabriel Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-125",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Isabella Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-671",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Adam Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-439",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Gregory Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-899",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jonathan West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-1061",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jeremy Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-920",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e6acb3bd-84a4-4f5c-aa0b-09f41c5dc817",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 20,
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
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-406-966-3495",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b7fce884-40fd-4635-bf10-5a47afb1b9a1",
      title: "Group Karaoke Party",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "efed1b7a-39fd-4054-9a10-ddcfba0e6d10",
                "name": "Brian Curtis",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Vocal Coach",
                        "Karaoke Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Antonio Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-375",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Kennedy Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-734",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Michelle Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-6",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Caroline Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-226",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Linda Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-625",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "George Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-252",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Elizabeth Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-965",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5a8f2935-113e-4923-8224-8699eb4c821f",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 30,
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
