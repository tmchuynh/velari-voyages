// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-749-131-7874",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b99c6f08-8e93-414c-8693-0bbb46a89b99",
      title: "International Magic Acts",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "f4b31398-e405-43f6-86c5-b9ce9647f439",
                "name": "Brooklyn Hall",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/39.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Comedy Magician",
                        "Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Sean Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-523",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Gerald Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-1020",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Rebecca Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-342",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Terry Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-1082",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Dennis Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-56",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      }
    ],
    isPopular: true
  },
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "Interactive Magic",
    description: "Intimate close-up magic performed right before your eyes",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Interactive Magic performance times"
    },
    contact: {
      contactNumber: "+1-983-728-5247",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c3c8e7bd-b9c3-45a9-b74f-5d95d8a61798",
      title: "Interactive Magic",
      description: "Intimate close-up magic performed right before your eyes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Interactive Magic performance times"
        }],
      performers: [        {
                "id": "53d39d68-5bb7-47ec-b1e7-b6af1b524014",
                "name": "Amy Henderson",
                "role": "Escape Artist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/34.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Mentalist",
                        "Comedy Magician",
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Caroline Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-13",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Maya Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-218",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Zachary Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-781",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Gabriel Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-417",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Bella Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-395",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f5c16ecd-4850-49ab-af01-372a2e2ec513",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 38,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "Card Magic Mastery",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Card Magic Mastery performance times"
    },
    contact: {
      contactNumber: "+1-874-387-1625",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9d7f9145-0257-422f-b611-769b0ed86961",
      title: "Card Magic Mastery",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "79 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Card Magic Mastery performance times"
        }],
      performers: [        {
                "id": "0405154d-2557-4238-8cc6-596ba9bfdf5e",
                "name": "Aaron Clark",
                "role": "Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Magician",
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Victor Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-491",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Daniel Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-582",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Charlotte Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-901",
        },
        {
          quote: "The Card Magic Mastery show left me speechless. True artistry and skill on display.",
          author: "Stephanie Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-929",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Mia Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-932",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Lucas Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-358",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Alexa Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-879",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Aria West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-244",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Alan Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-201",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Joshua Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-362",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b119272c-9b77-4d19-bad1-875a3e08b035",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 30,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "Learn basic magic tricks in this hands-on workshop",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-961-947-8268",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "78d23bc8-6eef-42b1-8c25-bec3cfdbe69c",
      title: "Family Magic Show",
      description: "Learn basic magic tricks in this hands-on workshop",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "67381f4a-2878-4cce-85ed-f6afb49fb046",
                "name": "Alan Hudson",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/65.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Mentalist",
                        "Illusionist",
                        "Comedy Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "George Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-307",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Janet Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-678",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Valentina Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-1075",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Miguel Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-87",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Ariana Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-684",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Steven Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-15",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Deborah Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-315",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "394a9429-aa2f-44cd-8076-807faa95ec2d",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 29,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: true
  },
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "Close-Up Magic Experience",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Close-Up Magic Experience performance times"
    },
    contact: {
      contactNumber: "+1-258-960-9776",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dba6b9dd-326a-4d38-a34d-133aeb2dae72",
      title: "Close-Up Magic Experience",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Close-Up Magic Experience performance times"
        }],
      performers: [        {
                "id": "10188a18-02d7-4f09-948e-910056c81f3b",
                "name": "Layla Baker",
                "role": "Mentalist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/3.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Illusionist",
                        "Comedy Magician",
                        "Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Elena Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-183",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Roy Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-374",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Joel Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-875",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Genesis Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-317",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Noah Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-1044",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Brandon Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-1071",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Nathan Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-642",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Frank Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-141",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Philip Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-937",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Large-scale stage magic with elaborate props and illusions",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-758-583-3968",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "033d9254-92ff-4168-b1a1-b7b4ebd46861",
      title: "Comedy Magic Show",
      description: "Large-scale stage magic with elaborate props and illusions",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "8d763870-dd3a-4485-8ed8-cc4d496b6d5c",
                "name": "Brandon Carpenter",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/54.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Magician",
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Joshua Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-383",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Sebastian Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-417",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Kennedy Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-531",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Sophia Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-139",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "John Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-950",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  },
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-708-521-1821",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2a1f07f4-cf01-4d94-bdfb-4eb3219833ad",
      title: "Grand Illusion Spectacular",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "5bd902ab-622c-4a4a-b2f0-9d4cad3d4646",
                "name": "Bobby Fox",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Comedy Magician",
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Thandiwe Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-17",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Chloe Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-374",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Leah Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-623",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Caroline Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-994",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Rebecca Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-627",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Ashley Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-448",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5ccc2b4d-5f36-4071-b738-9d9615256309",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 26,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: false
  },
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-230-924-5538",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0fe55bf8-7ccb-4f9f-bb15-911aba9eb6ca",
      title: "Grand Illusion Spectacular",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "115 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "66e90983-f466-48f1-8124-05d3a151d386",
                "name": "Nicholas Wallace",
                "role": "Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Mentalist",
                        "Magician",
                        "Illusionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Deborah Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-965",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Blake Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-453",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Donna Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-618",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Michael Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-654",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Elena Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-975",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Keith Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Kinsley Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-230",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Joe Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-231",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Austin Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-232",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Eric Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-574",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  },
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-340-269-4823",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "74802f1e-1385-411d-86ad-9837a48ae706",
      title: "Comedy Magic Show",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: true,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "522e11f1-3d13-4ae2-9c78-5e90c66e6589",
                "name": "Raymond Fletcher",
                "role": "Illusionist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/40.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Magician",
                        "Illusionist",
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Marcus Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-512",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Bobby Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-53",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Sarah Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-461",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Grace Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-532",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Avery Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-224",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Ariana Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-1018",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Jack Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-431",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      }
    ],
    isPopular: true
  }
];
