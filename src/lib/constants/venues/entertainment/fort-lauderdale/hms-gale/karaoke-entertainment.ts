// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-323-666-2165",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c2d38ff8-2546-4230-8300-69f56dc6c3ef",
      title: "Country Karaoke Night",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "97e511f6-2366-4ce7-8b4a-ca08e16fd71e",
                "name": "Frank Knight",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/40.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          author: "Jack Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-280",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Avery Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-34",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Catherine Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-9",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Joe Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-766",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Peter Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-606",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Nora Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-649",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Nicole Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-221",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "George Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-691",
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
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-866-523-2939",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2a9633bd-2825-417c-af69-a03a5c01d137",
      title: "Family Karaoke Hour",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "a0a31bf1-1aa3-410a-9fdd-0199379ff30a",
                "name": "Paul Ellis",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/20.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "James Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-717",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jack Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-31",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Zola Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-131",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Helen Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-156",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Christian Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-912",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Harry Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-644",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Thomas Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-221",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Priya Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-978",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Stephanie Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-678",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "James Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-293",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8d60ec3f-a8ea-4ba0-bdee-77b2982ca181",
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
    isPopular: true
  },
  {
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-710-785-6772",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cd2cd539-ce2a-4cfb-a8a2-8b6f21fce9c0",
      title: "Karaoke Idol",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "66 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "8cdacd00-2106-4ea4-9e2c-40a2b906b9c1",
                "name": "Ariana West",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/71.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Gerald Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-201",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Ashley Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-619",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sophia Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-137",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Antonio Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-908",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Aiden Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-1065",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Isabella Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-658",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Patricia Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-993",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Jeremy Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-310",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Gary Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-278",
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
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-786-220-5079",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ff960240-a7a2-4c5d-9973-2f30ef2dcf70",
      title: "Country Karaoke Night",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "577a4bc2-9558-41ba-8bd0-f86e759a3bfc",
                "name": "Sarah Grant",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/26.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Alexander Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-971",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ellie Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-465",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Joel Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-751",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Pamela Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-783",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Stella Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-159",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Madelyn Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-965",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Alexa Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-440",
        },
        {
          quote: "I finally got to sing my favorite song! The Country Karaoke Night event was so much fun.",
          author: "Bobby Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-538",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Angela Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-483",
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
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-704-749-8356",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "833deb27-9555-4baf-8ce8-d4cf72baef3f",
      title: "Family Karaoke Hour",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "63a1e581-9e5e-4379-85ac-c25000126e05",
                "name": "Billy Holloway",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
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
          author: "Virginia Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-341",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Philip Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-962",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Aiden Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-407",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jeremy Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-510",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Gregory Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-87",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Abigail Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-199",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Emily Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-826",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a3796a07-1988-4352-8602-33c6740a0b59",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
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
  },
  {
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-240-581-2796",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1b0681ba-8425-4779-8f65-b39e3952c301",
      title: "Group Karaoke Party",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "51924271-e2da-4e80-891b-f5ddcbb28d10",
                "name": "Emily Porter",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/4.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jacob West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-552",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Thabo Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-999",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Blake Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-584",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Gabriella Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-213",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Emily Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-991",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Ariana Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-333",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Victor Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Nancy Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-479",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Juan Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-517",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Nicole Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-354",
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
    isPopular: true
  },
  {
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
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
      contactNumber: "+1-759-211-9417",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cb5a1ba7-e280-4953-a07e-b0bd02b4ed87",
      title: "Karaoke Idol",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "89 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "6782b091-27ee-479f-8041-162e2231dd9d",
                "name": "Terry Wells",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Ryan Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-131",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Blake Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-920",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Anthony Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-953",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Brenda Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-803",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Joan Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-198",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Layla Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Valentina Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-752",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Alice Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-736",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Lisa Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-1040",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7175235a-c61a-42e1-9bdf-254f86c8ee00",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 30,
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
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-759-414-6047",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b9259a1a-bb40-452d-8914-5b79a94ab3a2",
      title: "Group Karaoke Party",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "fb1cd1c2-6a58-4553-88af-d69ebdba58d7",
                "name": "Maya Chambers",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/52.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Rebecca Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-882",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jason Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-702",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Ronald Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-180",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Valentina Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-576",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Ariana Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-102",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Philip Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-69",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Aria Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-419",
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
    isPopular: true
  }
];
