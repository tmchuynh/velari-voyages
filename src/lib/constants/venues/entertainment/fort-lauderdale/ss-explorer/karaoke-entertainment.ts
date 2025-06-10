// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
    category: "Karaoke",
    name: "Duet Night",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-410-547-3689",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a09a219a-dc3b-4ad8-aba9-5a6241d48b22",
      title: "Duet Night",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "0d8786da-7d71-4fa9-9581-fa3b1e81515c",
                "name": "Scott Watson",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/41.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Juan Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-294",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Mark Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-276",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Ella Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-164",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Edward Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-345",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Barbara Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-447",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Chloe Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-1029",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Layla Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-687",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Paul Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-920",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Alexa Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-757",
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
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
    category: "Karaoke",
    name: "Theme Song Karaoke",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Theme Song Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-657-427-7054",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2213f7cb-6677-4307-a486-466c3f5db7d9",
      title: "Theme Song Karaoke",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: true,
        price: 28,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "2e2e2c59-b54e-4149-85b7-c257c463f7c3",
                "name": "Harold Hunter",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/51.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Matthew Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-382",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Jonathan Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-508",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Justin Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-776",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Willie Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-550",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Tyler Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-815",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Christopher Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-89",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Linda Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-20",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Joe West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-49",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Alice Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-372",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Amy Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-683",
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
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
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
      contactNumber: "+1-358-192-9168",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "95c2d959-f1b3-4015-a679-a0cd2f5b9e89",
      title: "Theme Song Karaoke",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "efd69e61-b9f3-4416-9589-b164630e300c",
                "name": "Samantha Dean",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Zoe Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-841",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Ethan Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-195",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Anna Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-320",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Stephanie Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-826",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Timothy Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-673",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Anna Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-702",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Sophia Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-511",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Rajesh Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-40",
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
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
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
      contactNumber: "+1-914-249-1178",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fa052017-d392-4357-b5c6-8a85f4e5ae65",
      title: "Classic Rock Karaoke",
      description: "Family-friendly karaoke with songs for all ages",
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
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "ebf0ec80-29e2-4a4f-941f-bc61f96d0e95",
                "name": "Bryan Warren",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Philip Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-832",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jacob Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-603",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "John Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-564",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Darrell Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-85",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jack Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-1043",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jennifer Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-225",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Roger Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-396",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Eleanor Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-752",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "7237974e-5e96-47af-b519-a8abec91eaf8",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
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
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-439-172-6806",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8934a932-a857-42a4-9df6-2aaef147f20f",
      title: "Karaoke Competition",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "119 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "5e415771-fddc-4aad-9997-daef179f012b",
                "name": "Samuel Foster",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/61.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Claire Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-822",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Aaron Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-1012",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Amanda Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-968",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Zola Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-765",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Katherine Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-644",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Chen Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-1008",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Amy Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-944",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Vincent Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-152",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Amy Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-152",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Bella Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-107",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b59f5467-84cd-4118-aaa9-9167e3a811aa",
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
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: true
  },
  {
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
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
      contactNumber: "+1-265-723-8342",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ab468cc3-547d-4683-9e46-9de768741c77",
      title: "Classic Rock Karaoke",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "46e25fa8-0d94-4d55-a03e-d1438c754568",
                "name": "Jane Carpenter",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/61.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Christopher Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-5",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Zoe Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-47",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Laura Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Benjamin Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-235",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gabriel Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-231",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Robert Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-581",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Chloe Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-727",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Joel Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-817",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Lisa Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-1001",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "383a2141-3fb2-41cd-bba7-698454b7ca40",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 16,
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
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-432-985-1600",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bd88b2dc-0e09-494b-ba0d-2cc97d934638",
      title: "Karaoke Battle",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "7cac2ca9-4dc8-4d2d-8558-d3281360dcc3",
                "name": "Thabo Curtis",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/49.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Kevin Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-266",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ryan Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-832",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Genesis Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-1020",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Linda Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-949",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joshua Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-558",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "38d41919-7e66-4c7d-a218-c95b5bdeeda1",
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
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
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
      contactNumber: "+1-692-940-4006",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a60c4363-ed1f-4659-9f46-ac31f04e818e",
      title: "Classic Rock Karaoke",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "c0371cc7-c4a6-4a38-b5a9-7e96cf67db5a",
                "name": "Sarah Hamilton",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/19.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Brandon Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-328",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Rajesh Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-740",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Alice Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-49",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Justin Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-391",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Christopher Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-890",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Mia Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-589",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Terry Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-592",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Zoe Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-46",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aac32139-2e75-4b24-b717-c2a2f48ee2f5",
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
    isPopular: true
  },
  {
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-246-128-3654",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ff0d93f2-d5fa-4976-8f83-a0c4d4ef1036",
      title: "Pop Hits Karaoke",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "a89810b0-bc17-45b1-86f2-6d870380d709",
                "name": "Benjamin Baker",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/64.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Brooklyn Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-588",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Oliver Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-150",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Gabriella Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-320",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Laura Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-71",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Catherine Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-629",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Adeline Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-892",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "9071dbb9-c000-4066-a0b3-7f772ca58940",
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
    id: "5fac1388-9961-40b0-b89e-eeb1cbc8f449",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-369-701-6844",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "07e1532a-64e3-400b-b406-662c7ce5376b",
      title: "Karaoke Superstars",
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
                "end": "02:00",
                "duration": "6 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "d7938456-f76e-4b90-906c-e288bae5c80a",
                "name": "Amina Douglas",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/72.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Darrell Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-370",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Oliver Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-56",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Marcus Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-1051",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Liam Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-256",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Sarah Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-430",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Alexa Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-191",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jack Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-346",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jesse Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-560",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Dorothy Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-403",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Zola Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-727",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
    isPopular: false
  }
];
