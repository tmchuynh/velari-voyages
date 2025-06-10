// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "6275ef1e-3c40-4b7a-9116-c16331c58e99",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Country music favorites perfect for karaoke",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-424-851-5941",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4e9c074f-5a61-4197-a0a9-a9fe78076e78",
      title: "Pop Hits Karaoke",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "32c98152-95d0-49a7-ad15-66d628a78dce",
                "name": "Jeffrey Gibson",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Elena Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-278",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Philip Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-389",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Gregory Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-649",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Raymond Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-392",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Aria Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-12",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Kevin Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-1003",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Joe Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-820",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c4b38b7a-68b6-4007-b219-7a70842251e2",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 35,
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
    id: "6275ef1e-3c40-4b7a-9116-c16331c58e99",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Country music favorites perfect for karaoke",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-788-707-6858",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "59a52c24-b95b-491f-bb20-2d430d9e4974",
      title: "International Karaoke",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "6399ce74-53c5-474d-8838-324c459d6e24",
                "name": "Sean Hamilton",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Nathan Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-1067",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Patricia Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-689",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Nathan Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-591",
        },
        {
          quote: "I finally got to sing my favorite song! The International Karaoke event was so much fun.",
          author: "Wei Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-119",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Aiden Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-1042",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "John Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-576",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1d21efd4-c4a1-4ca2-98da-27d88c009264",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 27,
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
    id: "6275ef1e-3c40-4b7a-9116-c16331c58e99",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Sing along to today's biggest pop hits",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-629-205-7593",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "360b0b64-99b2-496e-8b98-1005bc749ec0",
      title: "Country Karaoke Night",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "780985ff-f21b-4122-9b96-e7e444f37c75",
                "name": "Joel Dunn",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/26.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Kyle Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-523",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Justin Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-982",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Kimberly Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-927",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Chloe Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-485",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Mateo Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-801",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Bruce Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-211",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Rebecca Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-407",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Noah Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-442",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Joe Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-42",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Justin Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-608",
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
    id: "6275ef1e-3c40-4b7a-9116-c16331c58e99",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Sing theme songs from movies, TV shows, and musicals",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-502-381-2745",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c1d923aa-2982-4d79-98b8-a119a73ecb3a",
      title: "Pop Hits Karaoke",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "518d1f92-fd61-4c72-8ffa-360c2acb38a2",
                "name": "Dorothy Crawford",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/62.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Vocal Coach",
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Daniel Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-1016",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Wei Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-902",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Julie Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-596",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "James Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Brenda Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-831",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Gabriel Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-829",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Amanda Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-848",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Edward Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-73",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Gerald Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-52",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b20cf1bb-3368-44ef-a4bd-76ea7f658290",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 21,
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
    id: "6275ef1e-3c40-4b7a-9116-c16331c58e99",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Partner up for duet performances of your favorite songs",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-221-790-1568",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3f5bd619-092c-4b51-a52d-987306c80f7c",
      title: "Karaoke Battle",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "0a94b888-6898-45f7-9971-ad1590b2856e",
                "name": "Steven Payne",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Zola Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-277",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Albert Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-254",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Ethan Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-745",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Naomi Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-558",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Rebecca Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-670",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Hannah Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-132",
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
    id: "6275ef1e-3c40-4b7a-9116-c16331c58e99",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Sing theme songs from movies, TV shows, and musicals",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-597-278-6506",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bddfb2a5-87dd-4cb1-ab36-b4dbc2636dd6",
      title: "Country Karaoke Night",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: true,
        price: 36,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "599ebfb8-04eb-4ca1-b7d5-801b3b22dc89",
                "name": "Matthew Knight",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Gary Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-536",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Charlotte Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-620",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jason Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-233",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gerald Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-240",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Luis Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-68",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "bc81ad90-17e0-41f5-a822-e26810c62aa4",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 14,
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
    id: "6275ef1e-3c40-4b7a-9116-c16331c58e99",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Partner up for duet performances of your favorite songs",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-308-737-7363",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8aa8638e-0eef-4241-bc95-ef75f5f21ac3",
      title: "Country Karaoke Night",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "8c025647-0f09-4b34-9af1-9ace43a327b8",
                "name": "Ronald Murray",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joel Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-254",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Arthur Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-1005",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Richard Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-225",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Aaron Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-939",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Rajesh Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-422",
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
    id: "6275ef1e-3c40-4b7a-9116-c16331c58e99",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "American Idol-style karaoke competition with judges",
    imageUrl: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-269-493-6705",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4cd4f4e1-5fdd-439e-a7f7-f58909ffa671",
      title: "Family Karaoke Hour",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: true,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "5b80570e-5b74-4369-be64-6cd11a893089",
                "name": "Linda Dean",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Aaron Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-595",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Peter Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-412",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jose Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-1004",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Angela Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Allison Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-991",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Steven Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-668",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Patricia Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-210",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Nicholas Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-675",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b57d029f-9846-4ffe-bea2-7a6af20c7de9",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
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
  }
];
