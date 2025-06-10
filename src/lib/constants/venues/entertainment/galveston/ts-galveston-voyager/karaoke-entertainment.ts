// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-911-265-6195",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "23e6a080-baf3-4ab0-a828-ee4a1f50d049",
      title: "Karaoke Competition",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "61591bab-9451-407e-b01e-df5ba40b9a12",
                "name": "Riley Fox",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/9.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Julie Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-307",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Competition event was so much fun.",
          author: "Sarah Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-653",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Brandon Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-91",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ralph Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-942",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Isabella Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-367",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Luis Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-78",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Julie Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-446",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "James Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-556",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Patrick Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-682",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6bf85fa8-d792-4ce1-9132-fe810086f287",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 28,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      }
    ],
    isPopular: false
  },
  {
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Showcase your singing talents and become a karaoke superstar",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-749-969-3554",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4b10b10b-d4b2-41a9-9554-a4802ef15dd2",
      title: "Group Karaoke Party",
      description: "Showcase your singing talents and become a karaoke superstar",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "7d491b25-9bd4-440e-a319-89e4f835f4ca",
                "name": "Thomas Cooper",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Ralph Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-118",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jack Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-959",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Leah Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-561",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Brooklyn West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-890",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Tyler Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-364",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Bella Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-249",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Darrell Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-988",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Kimberly Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-509",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Gabriella Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-787",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Katherine Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-928",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7d0115d4-aa7b-4ecb-af8b-c5a0b35a4f09",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 26,
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
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    category: "Karaoke",
    name: "Pop Hits Karaoke",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Pop Hits Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-891-622-5396",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9f25d8d2-aeee-444c-ac4a-e9fce3aa37fb",
      title: "Pop Hits Karaoke",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Pop Hits Karaoke performance times"
        }],
      performers: [        {
                "id": "65e33ac0-0040-4d76-bf4f-27580097d68e",
                "name": "Alan Payne",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/19.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Angela Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-72",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Linda Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-641",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Bruce Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Charlotte Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-102",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Kimberly Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-687",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Donna Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-704",
        },
        {
          quote: "I finally got to sing my favorite song! The Pop Hits Karaoke event was so much fun.",
          author: "Nomsa Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-326",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Roy Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-354",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Katherine Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-903",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e2b3c223-06fe-4629-b944-7fe6859df2d8",
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
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-721-720-1338",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9069cca4-7276-4845-ac79-d5bb2381f416",
      title: "Classic Rock Karaoke",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: true,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "40b50205-119a-4d79-ac7d-5007fd7ffccf",
                "name": "Zachary Parker",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joshua Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-861",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Grace Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "0",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Christine Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jordan Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-332",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Sarah Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-246",
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
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-799-136-4968",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "30b4a7a7-4f81-4664-91c0-a855aeef229c",
      title: "International Karaoke",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "a88243c9-dc1b-49ac-b481-0f6306409fca",
                "name": "Ellie Dunn",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Elena Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-255",
        },
        {
          quote: "I finally got to sing my favorite song! The International Karaoke event was so much fun.",
          author: "Sarah Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-614",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jonathan Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-118",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Donna Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-133",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Johnny Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-969",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ellie Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-521",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Jordan Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Juan Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-839",
        },
        {
          quote: "I finally got to sing my favorite song! The International Karaoke event was so much fun.",
          author: "Christian Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-285",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Samantha Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-1015",
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
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-391-232-8918",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a4a21f37-d5ad-449c-a51a-0607cb37655a",
      title: "Karaoke Idol",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "0ad8f83e-27fb-4afc-8b8a-e64bf2fe9018",
                "name": "Marcus Douglas",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/40.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Christine Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-705",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Victor Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-517",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Stephen Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-684",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Chloe Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-630",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Louis Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-974",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Philip Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-878",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Kevin Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-704",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "James Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-111",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Sebastian Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-198",
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
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-596-364-4742",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1fa33f9a-2e4a-436e-adb7-30e5341cd523",
      title: "Karaoke Battle",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "0bee6b35-c51b-4810-a9c9-c246fb8ae441",
                "name": "Jacob Warren",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/38.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Kenneth Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "5",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Anthony Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-324",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Dorothy Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-666",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Julie Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-458",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Harold Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-444",
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
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      }
    ],
    isPopular: false
  },
  {
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Sing along to today's biggest pop hits",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-981-210-4281",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d07089b9-809e-4c52-934c-d58a415bd539",
      title: "Family Karaoke Hour",
      description: "Sing along to today's biggest pop hits",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "6bcf51b1-eb14-4aec-bba0-9e40fac45dc3",
                "name": "Thabo Palmer",
                "role": "Karaoke Host",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/73.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Eric Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-428",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Vincent Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-582",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Sophia Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-1055",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Ashley Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-729",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Bryan Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-860",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Justin Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-944",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Harry Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-85",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Aaliyah Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-283",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Kinsley Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-358",
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
