// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "c76e09a7-4773-42b2-86c7-3a3d8ad59cc0",
    category: "Karaoke",
    name: "Duet Night",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-549-583-5434",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fb865b4d-daf3-4129-b888-c3dbef149572",
      title: "Duet Night",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "be57da32-8156-4817-bedc-518eb8f2c0f8",
                "name": "Scarlett Hayes",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/80.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gary Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-83",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Laura Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Alexander Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-947",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Charlotte Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-540",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Melissa Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-733",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Isabella Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-190",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Stephen Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-18",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Antonio Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-650",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Darrell Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-68",
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
    isPopular: true
  },
  {
    id: "c76e09a7-4773-42b2-86c7-3a3d8ad59cc0",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-667-331-8184",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "66508291-0c86-4fe5-8922-aa3b5367a1f4",
      title: "Karaoke Battle",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "4752bc84-b6f5-4555-9819-159958fa25e8",
                "name": "Avery Day",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Karaoke Host",
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
          author: "Claire Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-663",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "George Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-1053",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Wayne Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-82",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Amy Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-408",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Richard Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-655",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Scott Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-970",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Gregory Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-332",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Sophia Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-345",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "932ea12d-1e90-4d99-9590-4e73bf7b5399",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
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
    isPopular: false
  },
  {
    id: "c76e09a7-4773-42b2-86c7-3a3d8ad59cc0",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-505-317-5862",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "775560a6-6540-44b6-9910-149120d6bf9a",
      title: "Karaoke Competition",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "10bcda56-dffe-4575-98a1-500de65e573e",
                "name": "Raymond Holloway",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Zola Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-939",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Stella Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-162",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Vincent Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-415",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "David Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-1084",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Nicole Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-1031",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jesse Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-985",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Adam Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-550",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e04d72a3-6323-403d-a2c0-219ac50a158d",
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
  },
  {
    id: "c76e09a7-4773-42b2-86c7-3a3d8ad59cc0",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-948-837-9885",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3fa2f7f0-dce4-4cf1-8286-19a1ac20a8dd",
      title: "Karaoke Battle",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "a1b69005-09d9-4f1a-a130-58e5821084d8",
                "name": "Patricia Douglas",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/70.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Anna Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-80",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Naomi Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-618",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Alan Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-756",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Christine Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-724",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Walter Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-45",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Zola Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-525",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Oliver Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Paul Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-242",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cd1ae8c7-567c-4304-bf89-d58b899e89cb",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
              "price": 19,
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
    id: "c76e09a7-4773-42b2-86c7-3a3d8ad59cc0",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-304-611-2370",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f82d4a2b-f20a-4aac-abe1-1fa577c7b706",
      title: "Family Karaoke Hour",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "4d8a21ad-db31-4c48-b35d-710be984a4bc",
                "name": "Ella Griffin",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/70.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Karaoke Host",
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
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Aria Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-47",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Mark Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-755",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ariana Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-229",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Wei Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-326",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Kenneth Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-992",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "3b8ee3fd-6409-4d19-936b-0eab710c83dc",
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
    id: "c76e09a7-4773-42b2-86c7-3a3d8ad59cc0",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-291-611-9198",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "81e8d1e1-ac17-410a-987a-3061e470c18f",
      title: "Classic Rock Karaoke",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "96 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "92880bcb-4db1-40f5-85a5-f83e7eec6dc5",
                "name": "Layla Morgan",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/71.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Sandra Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-133",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Liam Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-121",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Brandon Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-602",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Kimberly Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-954",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Maya West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-993",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Eleanor Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-784",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Mark Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Nora Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-572",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Vincent Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-359",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Adeline Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-8",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7cd24fd6-c3ce-45d5-88f1-54eda64db141",
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
    id: "c76e09a7-4773-42b2-86c7-3a3d8ad59cc0",
    category: "Karaoke",
    name: "Duet Night",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-760-440-1810",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "85b12bf1-44a1-476c-884f-194eebd4d03c",
      title: "Duet Night",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "74 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "17f5bfbd-a021-43ff-8f3a-893910544e23",
                "name": "Anthony Mitchell",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Michelle Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-7",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Wayne Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "2",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Christine Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-971",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Amy Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-452",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Claire Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-1082",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a488a576-1a1d-47a4-885c-490da89e201d",
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
    isPopular: false
  }
];
