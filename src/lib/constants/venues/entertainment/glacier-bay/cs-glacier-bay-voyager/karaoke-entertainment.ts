// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "2558be35-9065-4bc1-8d35-9614fc4d10b1",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "03:00",
          "duration": "7 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-880-295-5286",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c8505c5c-1db5-4633-9565-825e6666fae7",
      title: "Group Karaoke Party",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "03:00",
                "duration": "7 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "ab341b7a-587d-45cd-bc46-273cdca31575",
                "name": "Scott Campbell",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Ethan Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-407",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Ronald Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-1000",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Joshua Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-341",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Nathan Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-82",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Samuel Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-10",
        },
        {
          quote: "I finally got to sing my favorite song! The Group Karaoke Party event was so much fun.",
          author: "Eric Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Amy Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-67",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Jose Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-1036",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Rajesh Hudson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-1065",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "74dcd71e-8775-4a44-837b-4577ad6ba1a6",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
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
    id: "2558be35-9065-4bc1-8d35-9614fc4d10b1",
    category: "Karaoke",
    name: "Karaoke Superstars",
    description: "Rock out to classic rock anthems and power ballads",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Karaoke Superstars performance times"
    },
    contact: {
      contactNumber: "+1-916-894-5751",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a92b98d6-5468-4139-a809-88348df3d9aa",
      title: "Karaoke Superstars",
      description: "Rock out to classic rock anthems and power ballads",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Karaoke Superstars performance times"
        }],
      performers: [        {
                "id": "0dff8385-e608-4ac8-9742-4f90b9a66a90",
                "name": "Jessica Harper",
                "role": "Vocal Coach",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/52.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "DJ",
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Douglas Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-651",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "George Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-470",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Randy Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-238",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Henry Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-489",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Adeline Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-362",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Richard Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-378",
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
    isPopular: false
  },
  {
    id: "2558be35-9065-4bc1-8d35-9614fc4d10b1",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Compete for prizes in this exciting karaoke competition",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-672-274-9422",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "db8bb584-590b-4b7f-a0f8-7eebe08aa647",
      title: "Karaoke Idol",
      description: "Compete for prizes in this exciting karaoke competition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "ccadd17d-0a49-4c7c-9a72-4c185831f293",
                "name": "Michelle Crawford",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/0.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
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
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Joel Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-130",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Aaliyah Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-28",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "William Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-371",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Ethan Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-408",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Billy Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-474",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Thandiwe Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-649",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Lisa Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-749",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Roy Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-510",
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
    isPopular: true
  },
  {
    id: "2558be35-9065-4bc1-8d35-9614fc4d10b1",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-543-661-5103",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bdcb8eaa-0217-4895-8dc8-245c1e76e79a",
      title: "Karaoke Battle",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "ab47a0a9-38e3-4a82-9118-104ee0137a4b",
                "name": "Wayne Foster",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/56.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Stephen Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-971",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Battle event was so much fun.",
          author: "Jose Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-916",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Brian Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-829",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Jeffrey Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Nicholas Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-609",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Lisa Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-158",
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
    id: "2558be35-9065-4bc1-8d35-9614fc4d10b1",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Country music favorites perfect for karaoke",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-641-341-3839",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "aa5090b3-bfb6-4c2b-9cc6-c021ed4158f3",
      title: "Country Karaoke Night",
      description: "Country music favorites perfect for karaoke",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "9d1e6648-1ffd-4ae2-b75d-92c59fde262c",
                "name": "Johnny Gardner",
                "role": "Karaoke Host",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Vocal Coach",
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
          author: "Samuel Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-755",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Tyler Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-954",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Kyle Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-450",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jordan Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Bryan Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-288",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Timothy Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-823",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Bruce Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-623",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Samuel Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-877",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Dylan Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-1029",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "398351f7-8290-4e29-b599-c5b0e82308f5",
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
    isPopular: false
  },
  {
    id: "2558be35-9065-4bc1-8d35-9614fc4d10b1",
    category: "Karaoke",
    name: "Duet Night",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "02:00",
          "duration": "7 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-537-228-8125",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3114bc35-9576-4dd7-a4d0-3aeeec9f9de0",
      title: "Duet Night",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "60 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "02:00",
                "duration": "7 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "5ced6816-5041-421d-ac7d-480520241274",
                "name": "Tyler Mason",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Victor Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-776",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Katherine Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-674",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Christopher Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-513",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Brandon Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-774",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Skylar Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-113",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Joshua Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-875",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Carol Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-449",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Lawrence Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-685",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Randy Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-536",
        },
        {
          quote: "I finally got to sing my favorite song! The Duet Night event was so much fun.",
          author: "Maya Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-552",
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
  }
];
