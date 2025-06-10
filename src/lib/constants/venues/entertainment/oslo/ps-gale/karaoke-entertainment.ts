// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-873-455-3320",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bda5feed-1121-4e54-9f7a-db8a0701d8ef",
      title: "Classic Rock Karaoke",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "4cf95055-1680-4490-901b-deeb42c9c902",
                "name": "Bryan Harper",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Michelle Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-953",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Dorothy West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-295",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Sean Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-416",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Jonathan Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-811",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Wei Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-150",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Joe Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-108",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Jose Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-204",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Olivia Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-563",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Virginia Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-764",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Nora Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-109",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "94810922-fd7d-448a-8cbd-7154208f643e",
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
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: true
  },
  {
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-581-713-9837",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "659f169c-8b44-415b-bd24-4771e90ae0bd",
      title: "Family Karaoke Hour",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "ab3b0243-5dcf-4feb-99d3-477d26f650f4",
                "name": "Isabella Warren",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
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
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Leah Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-76",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jessica Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-316",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Thomas Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-929",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Philip Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-655",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Louis Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-348",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Philip Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-295",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gary Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-859",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a52ab207-cb6b-4331-9b40-f653e73b9727",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 13,
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
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    category: "Karaoke",
    name: "Theme Song Karaoke",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Theme Song Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-691-716-6726",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f0e16016-1999-4835-a04b-93a8cc0c1fe9",
      title: "Theme Song Karaoke",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "106 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "98f1dd57-dd23-4671-8166-ba6334cbe59e",
                "name": "Miguel Day",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/41.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Karaoke Host",
                        "Entertainment Coordinator",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Timothy Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-474",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Cynthia Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-418",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Andrew Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-998",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Linda Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-967",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gabriella Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-846",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Emma Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-491",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Douglas Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-587",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Kinsley West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-208",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Daniel Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-195",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "James Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-913",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "199dec80-5fb7-491e-9a12-1b3ad0541a4b",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 22,
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
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-859-737-8285",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "38ba846f-3af7-459c-ade5-d84a39b49404",
      title: "Classic Rock Karaoke",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "40b89a25-20e9-47fb-9e3c-f4d24a48bbeb",
                "name": "Cynthia Reeves",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/28.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Brenda Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-350",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Joshua Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-214",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Zola Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-888",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Thomas Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-109",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Abigail Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-261",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Amanda Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-755",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5c848c29-eb63-45f0-9ad2-981b6c90f88a",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 25,
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
    isPopular: true
  },
  {
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-544-508-9789",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "88bd3408-da63-49b8-95f4-6ac23862f5e2",
      title: "Country Karaoke Night",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "61 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "4ecb04d5-452e-47d2-8917-78d22f8432bc",
                "name": "Isabella Foster",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Jose Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-24",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Tyler Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-702",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Alexander Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-1058",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Andrew Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-290",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Thomas Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Nancy Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-19",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Lisa Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-968",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Samuel Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-1031",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Cynthia Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-1031",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6bd5a39f-0db7-4e26-a50b-06e5617e300e",
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
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-630-692-7910",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1b5360d1-bb5c-4338-9ea5-d22f83f3eaa5",
      title: "Karaoke Superstars",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "17c0062a-59e2-4a73-9a0f-7c8a09c380c2",
                "name": "Joseph Lawson",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/16.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Bruce Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-409",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Laura Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-713",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Billy Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-1009",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Joshua Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-782",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Ellie Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-325",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Kimberly Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-66",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Rajesh Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-198",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Mateo Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-240",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joseph Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-946",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "383f511f-ecaa-47dc-9d31-09cd1a6557b4",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 15,
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
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    category: "Karaoke",
    name: "Theme Song Karaoke",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Theme Song Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-655-185-1267",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f5466ea4-7450-49bf-b3f8-84d36aff4b77",
      title: "Theme Song Karaoke",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "21be99d0-e102-48a3-91c9-bf11dfd78b22",
                "name": "Jose Campbell",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/17.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Victor Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-374",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Ralph Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Bobby Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-361",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Harper Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-598",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Roger Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-915",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Priya Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-61",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Kennedy Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-624",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gregory Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-599",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Wayne Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-424",
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
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-637-719-2380",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5b55bdbf-37ae-4d7e-ae64-482b5a497e1e",
      title: "Karaoke Competition",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "8ab9e71d-13e8-4b8d-8db3-c77c929437bf",
                "name": "Andrew Dunn",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Vocal Coach",
                        "Entertainment Coordinator",
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
          author: "Jack Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-316",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Carlos Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-659",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Aaliyah Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-731",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Mia Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-408",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Raymond Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-15",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Chloe Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-1011",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Sarah Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-240",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Marcus Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-384",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Catherine Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-702",
        }
      ],
      hasVIPSeating: true,
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
  }
];
