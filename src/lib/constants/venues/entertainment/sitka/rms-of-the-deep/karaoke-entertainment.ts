// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Duet Night",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-608-937-4616",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c9c4600e-6013-47fd-8774-97e28a7932dd",
      title: "Duet Night",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "ddd68d87-d036-4546-b0bb-9e89c47b45ef",
                "name": "Victoria Dixon",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/62.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jeremy Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-480",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Victor Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-582",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Amy Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-782",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Alexander Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-379",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jane Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "9",
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
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-783-487-7136",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "54776a4a-6814-42c3-a58c-b61f5890d7c2",
      title: "Group Karaoke Party",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "59d0023d-cafd-442c-b043-cd541dd9fee6",
                "name": "Aaron Olivia",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Scott Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-1020",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Kinsley Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-305",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Aaliyah Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-85",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Lawrence Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-869",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Robert Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-611",
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
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-293-293-6079",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1b9115f4-63ec-4913-b08e-6ba513fd652a",
      title: "Classic Rock Karaoke",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "c79eb75e-9eb6-487e-bcff-69c86ff301db",
                "name": "Lerato Chambers",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/23.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Benjamin Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-474",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Lisa Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-761",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "John Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-782",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Keith Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-59",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ethan Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-22",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Richard Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-571",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Adeline Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-217",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Cynthia Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-285",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Julie Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-248",
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
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Duet Night",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-982-555-8163",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a63a51c8-8a79-4070-9134-f88d1c3b079e",
      title: "Duet Night",
      description: "American Idol-style karaoke competition with judges",
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
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "2d3ae5b7-964c-4326-90bd-2aaf7dc60775",
                "name": "Genesis Payne",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Gabriella Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-607",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Elizabeth Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-236",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Evelyn Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-677",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Luis Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Patricia Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-924",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "James Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-203",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e97e90d7-6742-42bd-a96c-8b1db9138888",
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
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-531-292-6797",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "aec4e4fa-de68-48d7-82fc-cdbceb9b50b7",
      title: "Group Karaoke Party",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: true,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "fabf93d6-14cd-44a9-919d-1a6c141442fc",
                "name": "Jessica Graves",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/82.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Terry Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-520",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Genesis Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-186",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Brian Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-1034",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Justin Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-666",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Benjamin Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-82",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Adam Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-426",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Rajesh Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-861",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "87bbd3bf-aeb1-4057-9c46-9579f844d800",
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
    isPopular: false
  },
  {
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-881-457-8571",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bff9567d-d601-48f2-9fc7-dbaaf840b976",
      title: "Karaoke Idol",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: true,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "0ec0d376-42a8-41d6-8e84-a6676a46bdac",
                "name": "Amelia Hawkins",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/46.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Louis Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-1076",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Kyle Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-447",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Matthew Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-326",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Blake Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-473",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Lisa Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-929",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Ethan Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-860",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0063b6af-8ad6-40e5-8c3e-ac9fd3ae76c5",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
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
    isPopular: false
  },
  {
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-413-239-7837",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3f22c2bb-3bb4-44f0-b6bc-640cd3551460",
      title: "Family Karaoke Hour",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: true,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "110 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "5b38f960-266b-4733-8fa2-24d437193f74",
                "name": "Donna Warren",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/36.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Evelyn Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-427",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Gerald Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-344",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Nicole Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-174",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Christian Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-903",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Richard Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-714",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Emily Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-750",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cfcaa1d1-6456-48a2-8e17-49df084feced",
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
    isPopular: true
  },
  {
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Showcase your singing talents and become a karaoke superstar",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-501-501-4286",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cabdc766-24ff-4698-9941-9009325d59c1",
      title: "International Karaoke",
      description: "Showcase your singing talents and become a karaoke superstar",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "a793783a-8b62-4c54-b427-48d1a65b4baa",
                "name": "Thomas Watson",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/51.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Nicholas West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-414",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "David Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-589",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Angela Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-20",
        },
        {
          quote: "I finally got to sing my favorite song! The International Karaoke event was so much fun.",
          author: "Angela Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-1033",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Victor Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-50",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Elena Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-809",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Billy Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-1008",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Katherine Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-430",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jeremy Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-528",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "12cf031e-a387-46f4-84ad-3d5fd7a4c60f",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 28,
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
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-641-211-1540",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "446378e8-e08c-435d-a8a8-a74c7eaade9e",
      title: "Family Karaoke Hour",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: true,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "120 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "ec76ccb2-25ed-42ca-b24f-202aa310cbbb",
                "name": "Aaliyah Watson",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/41.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Betty Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-580",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Blake Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-773",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Isabella Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-21",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jacob Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-386",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Aiden West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-891",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Carol Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-968",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f6de4335-a735-4b91-aeea-95ef6d5c812f",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 28,
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
    id: "20b595ed-8c6d-4015-882c-93140a039458",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-804-389-8464",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ce4b4377-1fc7-4a3c-b493-f84b0b2e67e7",
      title: "Group Karaoke Party",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "110 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "289daba3-6416-4eca-b9a7-e1eb2c172949",
                "name": "Julie Dixon",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/70.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Aaron Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-556",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Wayne Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-779",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Christian Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-270",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Claire Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-842",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Zachary Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-671",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Linda Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-304",
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
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: false
  }
];
