// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "56ff45d6-db9c-4adb-aeda-5b59b70ca4dd",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-558-737-4789",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bcce1f1e-fd43-4d9a-a7e8-9ca695daafd1",
      title: "International Karaoke",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "35ecac40-d566-4584-9e00-272b508620ab",
                "name": "Claire Mason",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/83.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Vocal Coach",
                        "DJ",
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
          author: "Robert Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-445",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jose Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-634",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Nancy Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-968",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jacob Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-511",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Mary Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-959",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Rachel Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-1073",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Cynthia Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-753",
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
    id: "56ff45d6-db9c-4adb-aeda-5b59b70ca4dd",
    category: "Karaoke",
    name: "Theme Song Karaoke",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Theme Song Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-426-323-2038",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "48a043a2-543b-4088-90a1-11e770732a71",
      title: "Theme Song Karaoke",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "82 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "c977e879-0965-42f6-ba87-bf6a4c4190c0",
                "name": "Ethan West",
                "role": "Karaoke Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/78.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Nathan Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-25",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Linda Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-201",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Aiden Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-423",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Genesis Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-176",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Isabella Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-71",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Roy Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-592",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Katherine Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-1002",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: false
  },
  {
    id: "56ff45d6-db9c-4adb-aeda-5b59b70ca4dd",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-335-493-7020",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "030ae976-9155-431e-8455-90d2be24dced",
      title: "Karaoke Battle",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: true,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "c632bf2f-d89d-4037-8476-27fe89741f09",
                "name": "Barbara Cooper",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Entertainment Coordinator",
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
          author: "Larry Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-980",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Samuel Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-246",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Ethan Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-67",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Sofia Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-710",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Mary Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-686",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aaab0635-af31-4a15-a386-461f373667a7",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 23,
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
    id: "56ff45d6-db9c-4adb-aeda-5b59b70ca4dd",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-677-730-8765",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f15a12c6-d237-42e9-80c2-a55b11c1e2b6",
      title: "Family Karaoke Hour",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "aca60f3a-4c4b-4455-becf-8daee9b35fb2",
                "name": "Adam Palmer",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Alan Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-1056",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Douglas Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-714",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Louis Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-577",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Brian Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-664",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Tyler Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-309",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Joe Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-536",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Elijah Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-1077",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Andrew Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-831",
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
    id: "56ff45d6-db9c-4adb-aeda-5b59b70ca4dd",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-455-573-9771",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d7f634a2-e277-450f-a08e-6392abf67671",
      title: "Karaoke Competition",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "aa121e73-d59e-4c04-952d-fd1539a2f775",
                "name": "Albert Stewart",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Catherine Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-587",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Antonio Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-506",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Maya Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-826",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Catherine Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-267",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Michael Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-660",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Oliver Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-129",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Rebecca Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-1074",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: false
  },
  {
    id: "56ff45d6-db9c-4adb-aeda-5b59b70ca4dd",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-841-327-2092",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dbfb8a9a-3395-4a42-8e76-0eceffc34268",
      title: "International Karaoke",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "6df59e1f-6b48-4f53-987e-fc04d813a99e",
                "name": "Scott Reed",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Ariana Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-410",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Keith Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-997",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jeremy Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-585",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Skylar Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-500",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Isabella Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-413",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Madelyn Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-522",
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
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: false
  },
  {
    id: "56ff45d6-db9c-4adb-aeda-5b59b70ca4dd",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-816-188-8582",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "14f64bad-ed19-4458-b3f9-6104c7a2126c",
      title: "Pop Hits Karaoke",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "4edddfcd-0aa1-4452-8c03-0fefb7fc8d92",
                "name": "Liam Chambers",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Gabriel Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-326",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Andrew Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-29",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Layla Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-76",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Noah Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-208",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Willie Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-216",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joshua Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-6",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Patrick Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-35",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Wei Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-537",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "84dadc4f-856d-47da-8230-54f32dbeca31",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 11,
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
