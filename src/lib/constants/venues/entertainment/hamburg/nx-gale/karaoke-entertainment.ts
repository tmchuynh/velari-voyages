// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
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
      contactNumber: "+1-563-990-5434",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ff89c3c7-4bc0-4fab-acb3-697835ac81e1",
      title: "Group Karaoke Party",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "cd1be725-b3f1-4113-83a5-f257262e518c",
                "name": "Bruce Gardner",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Linda Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-144",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Noah Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-218",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Margaret Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-896",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Robert Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-677",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Sean Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-1027",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Melissa Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-4",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Philip Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-700",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Ronald Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-1050",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d08b5707-2255-4a28-a041-5d4b3e7cd28d",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 32,
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
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Songs in multiple languages for our international guests",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-919-460-4722",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9d72d05c-a389-420d-9ee2-1905b10bb6c6",
      title: "Karaoke Competition",
      description: "Songs in multiple languages for our international guests",
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
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "f11f7cac-4114-455f-b9a7-13991e66f22e",
                "name": "Liam West",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Maya Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-661",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Aaron Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-916",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Johnny Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-624",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Eugene Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-592",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Steven Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-326",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Robert Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-36",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Nicholas Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-478",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Audrey Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-993",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c76ab87a-44ac-492c-b2e4-7c16fd50a90e",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 21,
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
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-687-720-7787",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a86a8108-f325-490e-95f3-ad90b2c9c820",
      title: "Family Karaoke Hour",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: true,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "d3dbd2e6-88bc-4b42-9729-050e91b44254",
                "name": "Kyle Keller",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/65.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Kennedy West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-771",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Laura Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-406",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jason Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-777",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Juan Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-874",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Oliver Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-1064",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Zola Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-816",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Thandiwe Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-310",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Zoe Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-234",
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
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-475-684-3717",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ad1c786f-b3c7-4542-a49b-efcba951aac4",
      title: "Group Karaoke Party",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "dba6e31d-74ba-4df2-a6c1-581c1bec4ce1",
                "name": "Paul Marshall",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Abigail Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-212",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Henry Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-700",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Samuel Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-1025",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Mateo Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-158",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Priya Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-1077",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Louis Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-342",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ronald Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-877",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jose Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-50",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4519e600-f536-4823-9fda-83a2a72061d4",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 6,
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
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-746-741-9702",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bf111deb-1413-47d9-8c03-805841234aad",
      title: "Karaoke Competition",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "119 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "e8137d26-721e-4423-9652-60d9260cd7e8",
                "name": "Cynthia Montgomery",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Christopher Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-678",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Patrick Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-1060",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Liam Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-220",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Amina Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-301",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Melissa Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-516",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Vincent Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-493",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Angela Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-876",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Jason Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-1051",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "8094ec91-badf-4a19-9890-3b7a415c7d67",
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
    isPopular: false
  },
  {
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-758-492-6654",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3d8a4a44-ca1a-4f4e-83e4-5192514ada52",
      title: "Pop Hits Karaoke",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "68 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "bc495430-dda6-4efa-9210-ce105c788b15",
                "name": "Michael Harper",
                "role": "Entertainment Coordinator",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Lisa Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-391",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Catherine Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-817",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Brandon Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-799",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Matthew Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-655",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Skylar Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-567",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Harper Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-46",
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
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-716-854-2048",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "841bee2c-a671-48f6-b7a4-d0e2ef753bea",
      title: "International Karaoke",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "113 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "98efd229-6d57-404d-bd68-12f1606e129a",
                "name": "Olivia Curtis",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/48.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          author: "Nicholas Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-742",
        },
        {
          quote: "I finally got to sing my favorite song! The International Karaoke event was so much fun.",
          author: "Zachary Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-547",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jack Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-187",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Virginia Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-730",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Anthony Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-349",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Maya Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-257",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Dennis Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-98",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Madelyn Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-548",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Pamela Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-159",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Leah Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-388",
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
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-679-804-1480",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "67699178-021c-444c-987e-e59a3aae2c80",
      title: "Karaoke Superstars",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "55a119d4-610b-4fe7-8d47-6b0f69804aa1",
                "name": "George Wells",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Aiden Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-843",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Victoria Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-595",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Benjamin Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-209",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Nicholas Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-692",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Mia Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-98",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Angela Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-43",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a9743bc4-62dd-4a9b-aab8-f542f875aa66",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 20,
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
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    category: "Karaoke",
    name: "Theme Song Karaoke",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Theme Song Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-917-760-9112",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4636c891-c3fa-4013-b65a-c0b4648e2d48",
      title: "Theme Song Karaoke",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "0b3cf183-a8c6-4b83-b193-9ccb36e9f5f1",
                "name": "Elizabeth Russell",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/71.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ethan Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-723",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Douglas Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-166",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Timothy Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-937",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Maya Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-785",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Matthew Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-155",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Scott Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-638",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Carlos Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-296",
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
