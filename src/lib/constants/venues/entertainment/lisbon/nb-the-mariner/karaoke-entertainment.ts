// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "a9835fd6-e124-4fc0-8835-9b1b8abab368",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-963-495-7282",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9e880563-1d7e-44df-8a74-7dc95d0d2786",
      title: "Group Karaoke Party",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "bac4cf69-5954-43ec-9229-de83ba85f82c",
                "name": "Edward Dunn",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Gregory Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-604",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Dennis Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-733",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Gabriel Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-742",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Mary Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-425",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Marcus Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-618",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Robert Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-423",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "24d6cd45-c103-4c28-9fb7-b0703377ef2c",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 22,
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
    id: "a9835fd6-e124-4fc0-8835-9b1b8abab368",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-778-535-5619",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "428bbd79-d586-4c59-82ef-45dd98014260",
      title: "Karaoke Idol",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "dfa7ceeb-0499-4a3b-b58f-670079f3e8d1",
                "name": "Alexander Spencer",
                "role": "Karaoke Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Nancy Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-595",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Harry Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-956",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jeffrey Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-720",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Kimberly Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-127",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Donna Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-635",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Victor Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-147",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Marcus Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-844",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "93262816-7db3-4106-ac5a-74b77d1635fe",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
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
    id: "a9835fd6-e124-4fc0-8835-9b1b8abab368",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-549-624-2081",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4ec53303-a856-460c-b758-9f1a86b3272e",
      title: "Karaoke Battle",
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
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "47d19065-64ff-4a3e-bca9-b8cf67e28925",
                "name": "Lisa Russell",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/84.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Aria Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-874",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Samantha Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-5",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Louis Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-635",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Joe Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-786",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Gerald Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-418",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Terry Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-793",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Naomi Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-998",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0197be7a-dd7e-4951-903a-9b7510ba8495",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 29,
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
    id: "a9835fd6-e124-4fc0-8835-9b1b8abab368",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-794-893-3870",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c253ef7b-d93b-490b-949e-2e5d13ab0387",
      title: "Karaoke Battle",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: true,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "747f5672-b2fe-4360-bf0d-e3a5ca354844",
                "name": "Blake Hamilton",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/65.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Albert Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-1",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Benjamin Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-945",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Jessica Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-1044",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Layla Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-980",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Katherine Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-421",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Elizabeth Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-897",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Bryan Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-1044",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Douglas Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-133",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Maya Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-725",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Brooklyn Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-702",
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
  },
  {
    id: "a9835fd6-e124-4fc0-8835-9b1b8abab368",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-660-222-2594",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "173e528d-e9f6-48ce-be00-f7ceffc733c5",
      title: "Country Karaoke Night",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: false,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "dc300037-3937-4128-a50e-b5fc12627779",
                "name": "Keith Cooper",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
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
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "James Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-425",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Priya Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-946",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jonathan Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-435",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Alexa Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-583",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Ashley Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-797",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Chen Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-354",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Priya Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-107",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Cynthia Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-716",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Joshua Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-942",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Caroline Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-567",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "51a57b6d-9960-4880-a0d4-6fcccbd58707",
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
    isPopular: false
  },
  {
    id: "a9835fd6-e124-4fc0-8835-9b1b8abab368",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-917-904-9717",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d5990a50-57cb-4f15-9cce-a898819976e5",
      title: "Karaoke Idol",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "118 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "43a778f7-40ea-4ec9-a7ba-0007918b1048",
                "name": "Bruce Dean",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/41.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Zoe Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-689",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sebastian Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-773",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Evelyn Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-247",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Riley Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-450",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jennifer Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-954",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0a550383-06bd-4728-a695-d6604e639925",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
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
    id: "a9835fd6-e124-4fc0-8835-9b1b8abab368",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Showcase your singing talents and become a karaoke superstar",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-243-771-9682",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cbfdb4da-9cfa-42c7-ac15-d45ddccf0f66",
      title: "Country Karaoke Night",
      description: "Showcase your singing talents and become a karaoke superstar",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "75 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "58f3a2e6-41e7-4add-90e6-721a262d0946",
                "name": "Joel Graves",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/72.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Stella Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Donna Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-124",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Roy Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-658",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Lawrence Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-71",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Avery Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-317",
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
  }
];
