// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-988-996-1721",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2195a578-bc7b-41d4-8fbc-a56be4f081d0",
      title: "Classic Rock Karaoke",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "8225be71-775d-40cf-8be5-c929169f251e",
                "name": "Antonio Knight",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Chen Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-59",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Victor Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-210",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Harry Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-53",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Terry Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-172",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jesse Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-133",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Larry Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-269",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Genesis Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-758",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Ashley Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-235",
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
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-914-125-2518",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "41dc471c-de61-4385-8c0e-370e92b4adee",
      title: "Pop Hits Karaoke",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "a70cef8e-4f10-415b-a8f1-bd776f81bf49",
                "name": "Scarlett Stewart",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/31.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Vocal Coach",
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
          author: "Ella Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-235",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jason Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-165",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "James Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-369",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Nancy Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-850",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Brandon Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-993",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Barbara Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-585",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Michael Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-139",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5cfb0a83-93da-4b7c-b06b-0894713bf93f",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
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
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-353-134-3370",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7eae1fa5-791a-4709-af87-39a56c52af27",
      title: "Pop Hits Karaoke",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "ae12fca9-a467-4dd2-971a-1c4fb2bede17",
                "name": "Miguel Fisher",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/76.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Samantha Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-137",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Layla Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-711",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Frank Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-343",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "George Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-730",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Bryan Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-185",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Christine Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-1024",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Janet Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-488",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Raymond Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-282",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Victor Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-178",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joseph Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-576",
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
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-538-541-9635",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "75c91f8d-e82a-4585-8bed-e5815b3e47dc",
      title: "Pop Hits Karaoke",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "89 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "0339a9ae-6e6f-45c0-bd19-f7d106792818",
                "name": "Maya Graham",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/37.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Maya Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-394",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Amina Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-111",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Abigail Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-261",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "William Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-917",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jeffrey Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-627",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Amy Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-797",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Alexa Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-70",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Evelyn Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-1002",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2344a865-73f7-402d-b580-1e3c08621286",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 24,
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
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-620-188-2464",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c8a0380f-9b2d-47ec-97f6-5f1f31b82fd0",
      title: "Karaoke Superstars",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 43,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "dfccbf60-8df3-442e-8789-9487a604a6d7",
                "name": "Samuel Bennett",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/69.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Janet Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-531",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Adeline Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-236",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Eric Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Amy Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-852",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Catherine Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-1019",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Louis Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-358",
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
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    category: "Karaoke",
    name: "Duet Night",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-537-866-6091",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5950e8f9-51c5-4b8e-a856-2beeae0999ad",
      title: "Duet Night",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "231769b9-d00b-41e7-a6f1-b64a46ddbc23",
                "name": "Thandiwe Griffin",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/58.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Joan Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-276",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Eric Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-150",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Alexa Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-667",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Deborah Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-454",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Maya Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "4",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jacob Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-945",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "John Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-773",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Laura Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-989",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Roger Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-914",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Kimberly Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-1016",
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
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-473-781-8573",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1b6f6490-6e0f-4541-87b6-a7a0ea51e1f5",
      title: "Pop Hits Karaoke",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "28f4898d-64ca-4647-a881-2ad07ed36fff",
                "name": "Joe Campbell",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/9.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Zachary Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-628",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Cynthia Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-1005",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Lucas Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-931",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Diego Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-671",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Christopher Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-362",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Alan Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-610",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Anthony Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-363",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Samuel Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-922",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a2a4ceb5-0ad9-4c8c-a014-04f3a5dc38b0",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
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
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-403-296-4803",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "84b2a9b6-6ada-4885-b78e-66bb1446469b",
      title: "Karaoke Superstars",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "de180730-d138-4402-9dbe-310471f1fe51",
                "name": "Harold Hunter",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Harper Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-519",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Kennedy Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-503",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Amelia Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-695",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Oliver Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "1",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Katherine Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-917",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2659a6a7-a574-4b0f-ac50-10a740ba8353",
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
