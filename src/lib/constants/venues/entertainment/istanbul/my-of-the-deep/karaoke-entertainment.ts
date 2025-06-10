// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "85ed5347-b705-43f5-9f13-fa76f211e45b",
    category: "Karaoke",
    name: "Karaoke Competition",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Competition performance times"
    },
    contact: {
      contactNumber: "+1-818-416-6307",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7ce673d3-c490-4dc2-9e2c-65507c174cd1",
      title: "Karaoke Competition",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Karaoke Competition performance times"
        }],
      performers: [        {
                "id": "579ea9cb-e5b3-4208-9b4d-9231a6b9ee58",
                "name": "Jesse Sutton",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/51.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Jonathan Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-447",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Dorothy Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-452",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Elena Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-338",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Joshua Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-140",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Nomsa Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-438",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2ebcc2b5-3ced-4da7-9d2e-216be67aac50",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 25,
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
    id: "85ed5347-b705-43f5-9f13-fa76f211e45b",
    category: "Karaoke",
    name: "Theme Song Karaoke",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Theme Song Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-325-958-7409",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7cd1a5a2-aafc-4c92-bd45-4c1a053c4821",
      title: "Theme Song Karaoke",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Theme Song Karaoke performance times"
        }],
      performers: [        {
                "id": "e8cb16bc-cba6-42c9-9ab5-4435becd6edd",
                "name": "Elena Dean",
                "role": "Entertainment Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "John Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-343",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Jeffrey Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-879",
        },
        {
          quote: "I finally got to sing my favorite song! The Theme Song Karaoke event was so much fun.",
          author: "Leah Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-230",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Amelia Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-262",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Samantha Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-890",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Chen Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-982",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Sophia Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-96",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Maria Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-895",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
  },
  {
    id: "85ed5347-b705-43f5-9f13-fa76f211e45b",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-547-594-1173",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e51056a1-d203-4f78-b3b1-472023966155",
      title: "Family Karaoke Hour",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "114 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "c11863d5-94bc-481e-97ab-3d5fa6184201",
                "name": "Antonio Dunn",
                "role": "Karaoke Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
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
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Anna Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-221",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Lerato Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-383",
        },
        {
          quote: "I finally got to sing my favorite song! The Family Karaoke Hour event was so much fun.",
          author: "Lucas Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-472",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ellie West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-21",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Larry Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-5",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Eric Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-983",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Nicholas Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-824",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "27319216-4106-43b4-b4f7-c1b6e0e296d2",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 21,
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
    id: "85ed5347-b705-43f5-9f13-fa76f211e45b",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-648-669-4861",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "30103b81-831c-4c6f-9743-f34a5e8cd7f0",
      title: "Classic Rock Karaoke",
      description: "Partner up for duet performances of your favorite songs",
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
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "3efb0d3f-4f78-4757-8cc5-7f7e6d5d8d1e",
                "name": "Kimberly Sutton",
                "role": "Entertainment Coordinator",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/36.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Patrick Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-189",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ashley Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-490",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Frank Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-486",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "William West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-254",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Wei Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-17",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Rajesh Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-1015",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Savannah Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-501",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Gary Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-787",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Darrell Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-13",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d13a915b-d74f-4567-b1e2-b8a8b94e0160",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
              "price": 23,
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
    id: "85ed5347-b705-43f5-9f13-fa76f211e45b",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-591-906-5780",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f7dd6d5f-c8b7-4254-947a-ed8ac8c58e91",
      title: "Karaoke Idol",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "e3b2c9d9-7549-420f-a528-ea1d4c4d478f",
                "name": "Jeffrey Sutton",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/24.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
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
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Sophia Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-302",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Matthew Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-311",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Genesis Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-596",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Lucas Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-1036",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Zola Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-230",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Rachel Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-494",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Stephen Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-474",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Roger Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-944",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Joshua Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-544",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Aria Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-642",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "441ea7ab-7d85-4af4-ba5e-af91c9a67f5b",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 34,
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
    id: "85ed5347-b705-43f5-9f13-fa76f211e45b",
    category: "Karaoke",
    name: "International Karaoke",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "International Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-992-800-8507",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "902a6591-7d3f-45ff-82d8-cc6a657569e4",
      title: "International Karaoke",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "65 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "International Karaoke performance times"
        }],
      performers: [        {
                "id": "0938d180-4f96-4db9-a189-98d1c0d71e18",
                "name": "Charlotte Holloway",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/2.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Roger Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-23",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Juan Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-917",
        },
        {
          quote: "I finally got to sing my favorite song! The International Karaoke event was so much fun.",
          author: "Virginia Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Austin Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-416",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Nancy Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-171",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Elena Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-546",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "abc980bb-c90c-4ce5-a2ad-f94c0fe55856",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 34,
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
  }
];
