// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-799-888-3098",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "99e18f49-cae2-4049-88e5-5fcc6c8b59ab",
      title: "Pop Hits Karaoke",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "108 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "ff927a53-9525-4d61-9f6c-46a5ac73e8b6",
                "name": "Catherine Henderson",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/59.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "George Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-542",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Alexander Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-166",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Christian Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-309",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Claire Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Madelyn Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-166",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Darrell Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Vincent Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-75",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ed5f229a-8b9b-49cd-a5a7-72c993e4c6fb",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
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
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-709-654-9708",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ffe75e50-5955-44fe-b773-1e3242c929b0",
      title: "Family Karaoke Hour",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "a7afe54b-f8db-4747-bf08-19189aee0bc6",
                "name": "Juan Graves",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Entertainment Coordinator",
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Robert Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-601",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ellie Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-710",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Richard Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-20",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jerry Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-123",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Catherine Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-71",
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
    isPopular: true
  },
  {
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-241-521-2597",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c81737ff-8f86-4bac-afe7-0499eb9beee6",
      title: "Classic Rock Karaoke",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "78b61de2-aca2-4bdc-8786-6c4952e48734",
                "name": "Aiden Watson",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Ella Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-318",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Helen Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-898",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Alexander Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-931",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Luis Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-638",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Valentina Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Gregory Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-482",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Genesis Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-284",
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
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-890-389-9386",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "69b6372c-bcf0-420e-a4f3-11112cc34a64",
      title: "Karaoke Superstars",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "5fe73897-c115-462f-9917-00835a405d64",
                "name": "Aaron Fletcher",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Margaret Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-387",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Thabo Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-778",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Harold Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-16",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Eugene Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-766",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Harold Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-454",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Julie Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-359",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "de1d0521-516a-430d-b34d-27565787b9b6",
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
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-991-954-3439",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1d0fccc2-8f95-4a3f-aaa9-84078693beb0",
      title: "Karaoke Competition",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 17,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "1e0d34f7-035c-4a23-a564-5d445584e3dd",
                "name": "Jennifer Keller",
                "role": "Karaoke Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Skylar West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-90",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Benjamin Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-759",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jeffrey Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-672",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Caroline Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-542",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Joan Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-245",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b1bcde14-5351-4b07-8365-9673b1221635",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 15,
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
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-597-956-7814",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "943a7b9f-89b8-4eb3-bc30-8247476c8c3c",
      title: "Karaoke Battle",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: false,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "104 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "28cd9f3c-47a4-4591-abfd-567dc8441423",
                "name": "John Porter",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Richard Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-170",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Timothy Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-322",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Aria Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-662",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Elizabeth Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-338",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Michelle Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Anna Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-306",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Ryan Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-1052",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Antonio Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-908",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Miguel Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-842",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c66bbb7d-88eb-412e-a19f-a45acba815cc",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 14,
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
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-871-330-1291",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4cc00ed4-998e-4d8f-ac7e-acecf98385f6",
      title: "Karaoke Idol",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: true,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "57329112-e351-499b-9e98-4fdaeff87e1e",
                "name": "Austin Collins",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/34.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Liam Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-431",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Alexa Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-141",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Miguel Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-743",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Dorothy Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-991",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jeremy Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-882",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "865afe27-9f16-4422-8c9c-766cb34fea18",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
              "price": 18,
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
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-645-391-3698",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a58c4ced-8d3c-44c3-b165-eb0708181e44",
      title: "Pop Hits Karaoke",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "73e1f73f-89d5-4fae-ac59-555e6bc96e7c",
                "name": "Maria Palmer",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Entertainment Coordinator",
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
          author: "Douglas Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-924",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Lerato Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-146",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "James Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-647",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Catherine Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-1",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joe Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-788",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Rebecca Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-1041",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Wayne Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-510",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Allison Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-474",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jose Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-399",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b87a9a2a-84e7-4ad7-8d51-6fc02b3d7c3b",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 28,
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
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-787-571-9470",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d6eba193-4904-47b5-9ab2-6b880cfb16a9",
      title: "Karaoke Idol",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "108 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "dd844604-ab64-4f9a-bf2a-e13e69a35bfe",
                "name": "Philip Payne",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/34.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
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
          author: "Isabella Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-92",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Alexander Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-33",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ellie Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-638",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Melissa Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-730",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Diego Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-932",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Rebecca Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-269",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Emma Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-74",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Dennis Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-852",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Gabriel Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-946",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b573fdd3-cbff-47f0-9e91-90d0726be4d1",
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
    id: "ef0ab1e9-0111-4575-b3f5-86b5dedbc908",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-532-819-6497",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b9ba5c80-3049-4ff3-8197-472d258713ad",
      title: "Karaoke Superstars",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "116 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "42ebb146-51fd-4e27-a8ce-b2bb4e839848",
                "name": "Gerald Dunn",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/39.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Vincent Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-882",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jeremy Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-150",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sean Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-148",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Katherine Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-737",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Maria Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-631",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Emma Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-830",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Christian Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-529",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7385bec7-c752-40a9-8cd4-5f910a762ef5",
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
