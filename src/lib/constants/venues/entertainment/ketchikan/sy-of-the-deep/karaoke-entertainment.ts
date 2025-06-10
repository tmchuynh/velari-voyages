// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "80362e4e-41eb-4152-bfed-15dcd623a169",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-221-198-3335",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cf950cd5-3575-4d4c-8a1a-0b181d691c26",
      title: "Group Karaoke Party",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "6d1fe9e0-22e8-4457-b90c-95fcc5458a4c",
                "name": "Sophia Hunter",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
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
          author: "Antonio Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-769",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Joshua Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-878",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Anthony Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-741",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Nathan Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-960",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Patricia Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-282",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Keith Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-194",
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
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  },
  {
    id: "80362e4e-41eb-4152-bfed-15dcd623a169",
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
      contactNumber: "+1-220-658-7190",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8f819ba8-b515-4229-aee6-4abf1b777f95",
      title: "Family Karaoke Hour",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "ec7ea1a4-8365-4fa5-b41c-114e13731135",
                "name": "Aria Crawford",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/57.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Steven Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-665",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Brooklyn Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-1075",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Bobby Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-762",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Chen Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-754",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Stella Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-245",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Harper Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-1019",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Lerato Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-893",
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
    id: "80362e4e-41eb-4152-bfed-15dcd623a169",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-571-263-9857",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a6ec8aba-adf8-4d17-be07-7e1cc1360e2b",
      title: "Karaoke Superstars",
      description: "Sing along to today's biggest pop hits",
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
                "id": "9ca1b39d-c0ef-49e3-8f30-64e11f287793",
                "name": "Ronald Gardner",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Matthew Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-204",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joel Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-729",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Lily Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-848",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Lawrence Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-653",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Ellie Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-384",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Rebecca Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-760",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Julie Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-1020",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4bd4c198-52fa-4659-8bf4-5b3fee63192f",
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
    id: "80362e4e-41eb-4152-bfed-15dcd623a169",
    category: "Karaoke",
    name: "Duet Night",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-782-499-6881",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bff418f0-90a7-438a-ac02-7dfae6324226",
      title: "Duet Night",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "f57e8184-00f9-4c23-b408-56952599757a",
                "name": "Gary Collins",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Marcus Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-302",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Steven Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-735",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Brian Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-612",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Bruce Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-5",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Roger Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-760",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Matthew Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-839",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ralph Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-864",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Victor Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-856",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Darrell West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-709",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Carlos Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-1040",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fe0cd88d-88a8-4fcd-a9e2-2824177eb2b9",
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
    id: "80362e4e-41eb-4152-bfed-15dcd623a169",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-361-998-6126",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "33c3a662-5fa1-4a48-9f48-5d708688593a",
      title: "Karaoke Superstars",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "40435fac-529d-4593-9a54-665e9b1d6fef",
                "name": "Grace Hayes",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/49.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Raymond Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Sophia Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-1",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Bruce Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-121",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Lawrence Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-472",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Caroline Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-143",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Alexander Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-713",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Javier Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-530",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f7ba243e-270a-4c18-98f7-96a83a59a04d",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
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
    id: "80362e4e-41eb-4152-bfed-15dcd623a169",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-939-283-4336",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ebec7c6f-de9e-4d2c-b231-3686e9d4b71d",
      title: "Karaoke Superstars",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "faa65044-da05-474d-ab41-47d631de84b1",
                "name": "Keith Palmer",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/56.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Cynthia Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-498",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Adeline Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-743",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Amelia Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-267",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Isabella Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-594",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jose Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-200",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Keith Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-826",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Superstars event was so much fun.",
          author: "Angela Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-625",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Paul Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-960",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Justin Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-664",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Frank Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-865",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9c5fc8f4-a8d7-41ab-81e8-0c1be4543883",
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
    isPopular: true
  },
  {
    id: "80362e4e-41eb-4152-bfed-15dcd623a169",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-314-136-4867",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fdfc70c3-ca31-4d6e-9e13-526c386f64f5",
      title: "International Karaoke",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "80e9b446-0773-458d-9c19-13b10ddf9fba",
                "name": "Virginia Collins",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Jacob Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-127",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Antonio Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "7",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Amina Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-590",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Susan Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-112",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Willie Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-926",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jennifer Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-882",
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
    id: "80362e4e-41eb-4152-bfed-15dcd623a169",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Showcase your singing talents and become a karaoke superstar",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-504-845-5749",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "597262fb-a1e2-4e71-a82d-28ef2deec4e2",
      title: "Country Karaoke Night",
      description: "Showcase your singing talents and become a karaoke superstar",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "dde9272d-738d-4b53-a03d-199945c2c8f2",
                "name": "Riley Dunn",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Matthew Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-418",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "James Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-415",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Ryan Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-9",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sofia Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-945",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Thabo Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-500",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Amina Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-908",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "George Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-916",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Logan Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-948",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Emma Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-1018",
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
