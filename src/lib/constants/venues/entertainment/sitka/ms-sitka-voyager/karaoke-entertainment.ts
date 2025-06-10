// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-221-592-1783",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "64a339b5-38a6-48c2-b82d-d7deda41a9c5",
      title: "Group Karaoke Party",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "9523f89f-bb12-48e2-89a8-17bc4b20c733",
                "name": "Wei Douglas",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/53.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Ethan Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-188",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Terry Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-576",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Angela Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-1031",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Joshua Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-9",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Amanda Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Peter Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
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
  },
  {
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-476-799-3650",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6d054e44-497a-4c00-b2cd-8ca3c5d0ee82",
      title: "Karaoke Superstars",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: false,
        price: 28,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "d4dd6c65-96b3-402f-81fe-3fee3bf7306c",
                "name": "Adam Hamilton",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/79.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "DJ",
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
          author: "Harper Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-373",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Carl Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-672",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Carlos Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-334",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Justin Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-18",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Amina Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-947",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Thabo Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Anthony Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-1074",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d777e005-6ccb-4536-af65-d6603ea1d4a8",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
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
    isPopular: true
  },
  {
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-883-277-4957",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9e9379bc-d1b0-4e39-ab53-3d76e9859cef",
      title: "Family Karaoke Hour",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "8abd7731-4584-496e-85a0-42f1800df41b",
                "name": "Roy Cooper",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
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
          author: "Eleanor Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-101",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jane Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-767",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Patrick Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-737",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Liam Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-1047",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Chen Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-227",
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
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-654-450-3501",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2cce1ae4-bcbb-426e-879e-ae8e09ab95d6",
      title: "International Karaoke",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "9e829481-761e-43d8-9b43-c4ee07ff38ac",
                "name": "Zola Hudson",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/11.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
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
          author: "Nathan Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-509",
        },
        {
          quote: "I finally got to sing my favorite song! The International Karaoke event was so much fun.",
          author: "Avery Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-834",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Thomas Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-22",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Zachary Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-319",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Roy Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-32",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Abigail Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-686",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Rachel Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-145",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Nicholas Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-263",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Nicholas Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-954",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "434050c9-45fe-49e7-9608-1c21da1fe62e",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 8,
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
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "Duet Night",
    description: "Sing theme songs from movies, TV shows, and musicals",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-785-125-4931",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "11d24018-b1a0-4f89-bf51-db1bc91952d9",
      title: "Duet Night",
      description: "Sing theme songs from movies, TV shows, and musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "3320513b-c4f9-4371-9d5a-fe715510b11c",
                "name": "Raymond Graves",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/26.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Lerato Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-464",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Stella Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-390",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Donna Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-613",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jose Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-923",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ralph Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-477",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "068fc288-bb21-494b-a442-ea69d5f0a842",
              "name": "Karaoke Star T-Shirt",
              "description": "Show off your karaoke skills",
              "price": 17,
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
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-280-866-5469",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d2ab9a91-c6eb-4ab5-a888-afff29b9682f",
      title: "Classic Rock Karaoke",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "1b610827-bf42-4f67-9e70-26d0007724fc",
                "name": "Gabriella Graham",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/39.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Vocal Coach",
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
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Brooklyn Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Lerato Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-115",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Christopher Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-637",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Elizabeth Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-255",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jacob Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-855",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a5856de1-708d-4d0a-a4d9-2e7f01b5098b",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
              "price": 11,
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
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Showcase your singing talents and become a karaoke superstar",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-882-724-4566",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "78560c29-4360-4b84-9755-75b314f47d3f",
      title: "Classic Rock Karaoke",
      description: "Showcase your singing talents and become a karaoke superstar",
      tickets: {
        isRequired: true,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "73 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "ba2f1e01-f9cf-48e3-b64e-5fc6d464cd7c",
                "name": "Eugene Spencer",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Lawrence Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-410",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Maria Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-465",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sophia Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-645",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Catherine West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-182",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Brenda Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-126",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Carol Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-729",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "9f5199f7-22a8-4a69-b577-58b9bad8b4ed",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
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
    isPopular: true
  },
  {
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
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
      contactNumber: "+1-310-597-1846",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2a96d52f-5a33-4163-98f4-a8d3889664ba",
      title: "Family Karaoke Hour",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "80a81d86-d493-4c65-be5f-561add87eb7b",
                "name": "Alexander Clark",
                "role": "Vocal Coach",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/54.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Zachary Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-782",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Laura Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-1027",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Benjamin Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-160",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Harry Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-117",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Ronald Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-620",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Catherine Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-75",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Angela Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-156",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Paul Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-418",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0e840618-a063-423e-9ad1-bdbd7864a7e4",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 5,
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
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-664-627-7254",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "667104f2-e055-42fc-a9a9-226228b0cfd8",
      title: "Karaoke Idol",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "9d39e18b-eae7-4e70-a7b0-66bca41c9286",
                "name": "Terry Watson",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Rebecca Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-705",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Layla Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-786",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Isabella Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-296",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Susan Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-948",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Mark Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-739",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Richard Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-1019",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Nomsa Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-157",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "afe2735e-913b-4ad6-a526-00e9965b6408",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
              "price": 13,
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
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-352-609-1210",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c1c12ef8-0ba5-4230-928d-28e5d504bc6b",
      title: "Family Karaoke Hour",
      description: "Songs in multiple languages for our international guests",
      tickets: {
        isRequired: true,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "52e54a19-6b01-49bf-8ff2-bc733c58d773",
                "name": "Isabella Montgomery",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Daniel Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-531",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Dylan Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-596",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Justin Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-420",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Eleanor Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-890",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Nomsa Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-454",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Allison Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-1071",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Skylar Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-873",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Joel Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-345",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Emily Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-90",
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
