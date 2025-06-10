// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "e9857d30-2d4f-48e1-b139-070f2e924cee",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-400-357-9786",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dd99e618-9742-473b-8a75-e40a07946452",
      title: "Classic Rock Karaoke",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 30,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "83798c26-1624-4555-ad4d-16c4f969b96b",
                "name": "Zola Collins",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/20.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Entertainment Coordinator",
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
          author: "Jennifer Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-952",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Dylan Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-851",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Matthew Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-684",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Keith Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-324",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Bobby Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-320",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Deborah Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-571",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Janet Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "6",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Wayne Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-930",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "27ac0ade-9017-4303-942d-130408789743",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 16,
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
    id: "e9857d30-2d4f-48e1-b139-070f2e924cee",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-278-857-5746",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6bfd0c71-ba94-4228-abc2-d05177881208",
      title: "Classic Rock Karaoke",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "9b79f685-d4d7-4a40-8d04-05635d68d145",
                "name": "Eric Griffin",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Samuel Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Sarah Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-66",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Leah Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-885",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Rachel Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-929",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Robert Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-147",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Gabriel West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jane Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-792",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Hannah Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-142",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Helen Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-92",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Donna Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-189",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "1f688284-efb3-4526-b874-02d1c96458ee",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 31,
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
    id: "e9857d30-2d4f-48e1-b139-070f2e924cee",
    category: "Karaoke",
    name: "Theme Song Karaoke",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Theme Song Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-411-444-4315",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b355bfb3-96e0-4c9f-aacc-389990898193",
      title: "Theme Song Karaoke",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "6dddc8ba-02f0-42f4-876f-0bd3271a7b6f",
                "name": "Ryan Charlotte",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/25.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Javier Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-641",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Layla Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-823",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Victoria Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-279",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Aaron Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-765",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Alexander Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-434",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Alexander Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-402",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Harry Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-307",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Cynthia Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-199",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Harper Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-434",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Margaret Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-737",
        }
      ],
      hasVIPSeating: true,
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
    id: "e9857d30-2d4f-48e1-b139-070f2e924cee",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-850-721-9735",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e1c9fc23-fdd6-4415-8b2d-7dae924ebb15",
      title: "Pop Hits Karaoke",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "dbf57e0d-56cd-4ad5-995e-83657a10c8dc",
                "name": "Nicholas Hawkins",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/37.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Karaoke Host",
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Amanda Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-948",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ariana Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-391",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Layla Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-64",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Gabriel Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-13",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Randy Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-879",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jessica Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-121",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a9546e0d-4ce6-42e3-94fd-93e2dce9ba63",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 26,
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
    id: "e9857d30-2d4f-48e1-b139-070f2e924cee",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-850-608-6349",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3d3c3296-869e-4807-a972-52a283081abf",
      title: "Country Karaoke Night",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: true,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "26e0c809-d5db-4263-917e-e2910edd25fd",
                "name": "Bryan Russell",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Entertainment Coordinator",
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
          author: "Mateo Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-925",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Gabriella Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-177",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Samantha Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-199",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Henry Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-1049",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Joe Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-309",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Charlotte Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-900",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Virginia Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-366",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9fe98c81-b134-4980-9527-1fe734958e83",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 31,
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
    id: "e9857d30-2d4f-48e1-b139-070f2e924cee",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-841-506-3399",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "52991a0d-c647-4802-98da-b293db7791b3",
      title: "Karaoke Battle",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "108 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "09333ad5-a9d3-4c7c-9404-df0d0b94d89b",
                "name": "Sean Morgan",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/60.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Karaoke Host",
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
          author: "Marcus Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-68",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sean Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-317",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "David Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-523",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Donna Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-271",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Thandiwe Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-913",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3de0d75c-80a3-4f9b-8389-959bd059d18a",
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
    isPopular: true
  },
  {
    id: "e9857d30-2d4f-48e1-b139-070f2e924cee",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-472-824-7213",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "69aeb906-f16f-4db4-a95a-7c7291018d34",
      title: "Classic Rock Karaoke",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "0cd854d6-a73f-41fc-b43b-d7c5515c3fa8",
                "name": "Daniel Russell",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "DJ",
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jonathan Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-785",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Pamela Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-29",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Douglas Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-824",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Melissa Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-237",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jose Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-446",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8f634aac-bd77-4edb-9e09-0cca19304885",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 17,
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
    isPopular: true
  }
];
