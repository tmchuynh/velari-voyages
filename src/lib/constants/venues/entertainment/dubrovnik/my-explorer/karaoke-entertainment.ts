// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "f63fa9e3-ed8d-4a61-a177-a9c77e29ba3a",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-972-497-8219",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2e81c1e3-e3cc-4ce3-9321-4b462ee6385b",
      title: "Group Karaoke Party",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "af9854f4-2dfd-4ba2-ac5a-f344949200cb",
                "name": "Susan Hayes",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Randy Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-721",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Sebastian Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-552",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Brenda Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-595",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Mateo Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-847",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Kyle Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-13",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Harper Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-468",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "David Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-21",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Roy Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-979",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sandra Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-652",
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
    id: "f63fa9e3-ed8d-4a61-a177-a9c77e29ba3a",
    category: "Karaoke",
    name: "Duet Night",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-929-919-3697",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cefdb1c5-5b43-4f7c-98c5-4d18458e43bc",
      title: "Duet Night",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "e636bab4-dd2e-4b0b-a093-09897c2dceb5",
                "name": "Douglas Hudson",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          author: "Jason West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-212",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Wei Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-487",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jose Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-575",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Victor Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-771",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Sophia Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Maya Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-413",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d0fb28c0-db37-4bcc-a0d6-1387c8be500c",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 26,
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
    id: "f63fa9e3-ed8d-4a61-a177-a9c77e29ba3a",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-331-188-8736",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1441283f-1427-408f-8a9a-966e8bf0db5b",
      title: "Classic Rock Karaoke",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: true,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "85c0914c-4bf5-4c2f-b313-7b30cb6e20f3",
                "name": "Nora Reed",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/8.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
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
          author: "Alexa Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-870",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Alan Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-745",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Zachary Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-6",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Tyler Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-40",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Henry Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-178",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sofia Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-988",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Rebecca Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-1041",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Adeline Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-786",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Albert Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-542",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Amanda Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-626",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4d144e27-a72a-4ac6-ac55-32e31926c485",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 20,
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
    id: "f63fa9e3-ed8d-4a61-a177-a9c77e29ba3a",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-327-790-9587",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2396ec69-caba-403b-8c99-518651caaff3",
      title: "Family Karaoke Hour",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "67 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "ec56c066-31cb-4c3a-b7d1-c8609a94e0d8",
                "name": "Barbara Crawford",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/29.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Amina Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-211",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Javier Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-105",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Logan Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-1048",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Julie Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-56",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Cynthia Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-145",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Robert Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-834",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "John Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-516",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Hannah Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-711",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Brooklyn Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-209",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Wei Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-527",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c946d210-40bd-4981-8b67-f0b5449c7afe",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 29,
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
    id: "f63fa9e3-ed8d-4a61-a177-a9c77e29ba3a",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-897-984-3973",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e4bde2f0-8b41-436b-a410-f4d5152a682b",
      title: "Group Karaoke Party",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "461f429c-d115-4bbf-bc4f-add8d7472c37",
                "name": "Sophia Keller",
                "role": "Karaoke Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/61.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Entertainment Coordinator",
                        "Karaoke Host",
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
          author: "Frank Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-536",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Vincent Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-787",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jason Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-478",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Chloe Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "0",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Sarah Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-895",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Pamela Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-856",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Alexander Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-462",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c66cfe5c-db81-4067-a95a-a1dfa804ac85",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 7,
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
    id: "f63fa9e3-ed8d-4a61-a177-a9c77e29ba3a",
    category: "Karaoke",
    name: "Duet Night",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-310-364-7885",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5942f960-fb46-4bf8-8403-471096746308",
      title: "Duet Night",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "87 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "3f2e49bb-9ff7-4665-a90f-4b112d59e14b",
                "name": "Anthony Carpenter",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/65.jpg",
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Chloe Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-1009",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Joshua Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-372",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Christian Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-33",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Nicholas Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-797",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Carol Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-398",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Steven Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-859",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Lerato Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-876",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Amina Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-688",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Maya Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-134",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "678ef222-317d-426e-9c61-b6c8a7fdc02d",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 21,
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
    id: "f63fa9e3-ed8d-4a61-a177-a9c77e29ba3a",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-249-434-4305",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "838d6015-bd83-4ee3-95a6-60b5aa671765",
      title: "Family Karaoke Hour",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: true,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "55c927d4-6d31-4479-b27d-3b858e23ba95",
                "name": "Alexander Coleman",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Madelyn Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-723",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Katherine Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Joshua Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-311",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Aria Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-59",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Brooklyn Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-237",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jack Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-754",
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
    isPopular: true
  }
];
