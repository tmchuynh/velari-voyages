// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "0326ad8e-a78b-4450-9b6e-3deff3851b09",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-335-803-8098",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f48e1ee8-bf9b-4535-9684-c21d88674d04",
      title: "Comedy Magic Show",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "e26b6113-97f8-4e8e-9eb9-5f9c72b8c573",
                "name": "Randy Mitchell",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Mentalist",
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
          author: "Jessica Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-1041",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Roy Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-13",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Dennis Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-1007",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Amelia Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-543",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Evelyn Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-286",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Elizabeth Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-730",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "John Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-555",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Philip Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-1077",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Darrell Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-565",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Jacob Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-900",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d73cd3c5-7c66-4d2d-9f25-38b1a20090c1",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 26,
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
    isPopular: false
  },
  {
    id: "0326ad8e-a78b-4450-9b6e-3deff3851b09",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-640-679-9766",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f12456aa-8c6a-4e3f-994c-0ab1a71b0b71",
      title: "Mind Reading & Mentalism",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "01974f07-18c4-4741-b10b-94761cf7bd92",
                "name": "Liam Mason",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/76.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Comedy Magician",
                        "Escape Artist",
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
          author: "Catherine Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-857",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Nicholas Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-952",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Gary Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-147",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Patricia Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-1022",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Carol Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-324",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Adam Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Eleanor Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-25",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Kimberly Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-307",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ad2470c2-4c0f-46a4-b1d7-9a7e0e7450c5",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 33,
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
    id: "0326ad8e-a78b-4450-9b6e-3deff3851b09",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-838-721-2507",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "325581d8-3000-46ad-a204-23a52ad80dd4",
      title: "Family Magic Show",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "106 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "14b8b6dc-ca7b-410e-a7e4-9474f479f0fa",
                "name": "Patricia Bennett",
                "role": "Escape Artist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/58.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Diego Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-22",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Naomi Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-897",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Angela Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-827",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Wei Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-46",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Amanda Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-452",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Mary Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-15",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "44258e7a-2218-45a3-a048-8eb8c45f4e0e",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 20,
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
    isPopular: true
  },
  {
    id: "0326ad8e-a78b-4450-9b6e-3deff3851b09",
    category: "Magic Show",
    name: "Magic & Variety Hour",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Magic & Variety Hour performance times"
    },
    contact: {
      contactNumber: "+1-722-221-5883",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "594d10ec-4fcf-4cbe-8b15-b14d9604bba5",
      title: "Magic & Variety Hour",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Magic & Variety Hour performance times"
        }],
      performers: [        {
                "id": "b6a37d6b-6db4-42f5-9909-b7a0b33d2980",
                "name": "Sofia Jennings",
                "role": "Illusionist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/25.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Nancy Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-456",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Genesis Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-177",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Keith Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-962",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Priya Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-35",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Mateo Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-294",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Lisa Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-1073",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Darrell Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-531",
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
    isPopular: true
  },
  {
    id: "0326ad8e-a78b-4450-9b6e-3deff3851b09",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-896-426-6015",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f3913a63-2b31-4ef8-8609-4f061b126de9",
      title: "Family Magic Show",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "fa5c2ce4-a657-4ecb-bbe4-df85732b542c",
                "name": "Nomsa Reeves",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/73.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Escape Artist",
                        "Magician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ashley Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-784",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Avery Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-874",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Nancy Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-649",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Roger Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-733",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Scott Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-591",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c339f906-9875-48a5-88b4-987326a1e7ba",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 13,
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
    isPopular: false
  },
  {
    id: "0326ad8e-a78b-4450-9b6e-3deff3851b09",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Learn basic magic tricks in this hands-on workshop",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-345-923-4265",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "31611920-6a8b-40d8-bbec-7decc14408d1",
      title: "Mind Reading & Mentalism",
      description: "Learn basic magic tricks in this hands-on workshop",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "5bb29059-799e-4a8e-9308-593145108add",
                "name": "Joe Keller",
                "role": "Escape Artist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Magician",
                        "Escape Artist",
                        "Mentalist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Grace Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Katherine Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-198",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Janet Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-118",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Thabo Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-924",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Matthew Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-428",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "John Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Helen Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-267",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Jerry Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-986",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Emma Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-124",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Priya West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-910",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "70b3adb0-5b04-4de0-a124-2b348ea755cc",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 13,
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
    isPopular: false
  },
  {
    id: "0326ad8e-a78b-4450-9b6e-3deff3851b09",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-282-888-1521",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2d720251-c7ad-4b2c-8413-205c17922881",
      title: "Grand Illusion Spectacular",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: true,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "b9be03f3-2852-40e1-b4c6-e899142e51bb",
                "name": "Kennedy Charlotte",
                "role": "Illusionist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Sophia Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-641",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Emily Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Victoria Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-893",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Steven Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-95",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Stephen Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-378",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Kevin Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-251",
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
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      }
    ],
    isPopular: false
  }
];
