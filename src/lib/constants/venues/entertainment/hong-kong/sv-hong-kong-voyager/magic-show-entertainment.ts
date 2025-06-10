// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Intimate close-up magic performed right before your eyes",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-450-454-2561",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "46488057-b563-4f90-af99-337faf887386",
      title: "Mind Reading & Mentalism",
      description: "Intimate close-up magic performed right before your eyes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "33ce6fd1-9d75-4cb6-a259-d2c594d0ea38",
                "name": "Hannah Hayes",
                "role": "Escape Artist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/23.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Escape Artist",
                        "Magician",
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
          author: "Christopher Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-479",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Eugene Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-357",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Samantha Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-312",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Adam Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-1044",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Aiden Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-94",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "72931005-5336-4cc4-b473-fae56635e911",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 37,
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
    isPopular: true
  },
  {
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Magic & Variety Hour",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Magic & Variety Hour performance times"
    },
    contact: {
      contactNumber: "+1-762-628-5160",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "44543794-9558-4ab7-ae69-3920cba998a7",
      title: "Magic & Variety Hour",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Magic & Variety Hour performance times"
        }],
      performers: [        {
                "id": "ef266370-3f58-4222-b99c-473b24c50699",
                "name": "Ryan Fisher",
                "role": "Mentalist",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/48.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Isabella Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-358",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Gabriel Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-201",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Jason Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-770",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Sofia Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-569",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Luis Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-985",
        },
        {
          quote: "The Magic & Variety Hour show left me speechless. True artistry and skill on display.",
          author: "Harold Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-138",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Kimberly Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
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
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      }
    ],
    isPopular: true
  },
  {
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-870-614-2474",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6153386b-2b98-4813-ac62-de61c7ded74c",
      title: "Escape Artist Performance",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "cb569699-918e-43ae-843e-66fb7c4e2b03",
                "name": "Sophia Fisher",
                "role": "Escape Artist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
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
          author: "Skylar Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-715",
        },
        {
          quote: "The Escape Artist Performance show left me speechless. True artistry and skill on display.",
          author: "Sebastian Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-457",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Vincent Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-612",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Lucas Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-737",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Liam Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-671",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Isabella Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Nomsa Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-767",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Paul Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-564",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Elizabeth Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-786",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f470c562-6497-4d7b-b8b3-bc0f10854bb0",
              "name": "Magician's Wand",
              "description": "Replica of the magician's wand",
              "price": 22,
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
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Magic Workshop",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Magic Workshop performance times"
    },
    contact: {
      contactNumber: "+1-591-959-9742",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "86f23a13-8f6d-4730-8213-0d96bc065927",
      title: "Magic Workshop",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "68 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Magic Workshop performance times"
        }],
      performers: [        {
                "id": "0f327eec-5cc2-420d-ace5-464746a4c7d2",
                "name": "Kimberly Hunter",
                "role": "Comedy Magician",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          author: "Andrew Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-783",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Sandra Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-755",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Gregory Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-518",
        },
        {
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Johnny Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-286",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Brandon Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-292",
        },
        {
          quote: "The Magic Workshop show left me speechless. True artistry and skill on display.",
          author: "Joshua Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-829",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lisa Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-306",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Stella Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-795",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Luis Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-1010",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Kevin Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-212",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "facb33a3-5956-4e18-a64a-03ba9d3c601a",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 39,
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
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Card Magic Mastery",
    description: "Magic show featuring multiple acts and variety performers",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Card Magic Mastery performance times"
    },
    contact: {
      contactNumber: "+1-528-978-4008",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5b3e5c92-a7e5-4c2c-9dd5-278c27b29041",
      title: "Card Magic Mastery",
      description: "Magic show featuring multiple acts and variety performers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "96 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Card Magic Mastery performance times"
        }],
      performers: [        {
                "id": "d57474af-edb6-45ef-8bfe-8d67be09fdc2",
                "name": "Jack Marshall",
                "role": "Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Stephanie Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-989",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Sarah Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-844",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Joshua Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-448",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Sophia Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Joel Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-81",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Hannah Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-279",
        },
        {
          quote: "The Card Magic Mastery show left me speechless. True artistry and skill on display.",
          author: "Brenda Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-460",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Jeffrey West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-891",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Michael Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-171",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "db85d7ad-c258-42bb-8c8b-94271ed801ef",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 24,
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
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-918-293-8504",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1b619638-d4d4-498b-a1bc-3454adf8be70",
      title: "Escape Artist Performance",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "108 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "69a4fa5b-771c-4aba-a620-074c2e849173",
                "name": "Joel Baker",
                "role": "Comedy Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Bryan Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-144",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "George Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-150",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Lisa Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-191",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Melissa Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-943",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Mark Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-377",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Donna Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Randy Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-65",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4b792c19-ea29-4ac7-beb5-f7a36721470e",
              "name": "Performance Photo",
              "description": "Photo with the magician",
              "price": 18,
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
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Stage Magic Extravaganza",
    description: "Masterful card tricks and sleight of hand demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Stage Magic Extravaganza performance times"
    },
    contact: {
      contactNumber: "+1-220-917-1007",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a6699aaa-bba4-4978-be43-36c3efbd864c",
      title: "Stage Magic Extravaganza",
      description: "Masterful card tricks and sleight of hand demonstrations",
      tickets: {
        isRequired: true,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Stage Magic Extravaganza performance times"
        }],
      performers: [        {
                "id": "7519dcc8-7fbc-483c-9456-82f2353e75fe",
                "name": "Hannah Reed",
                "role": "Magician",
                "bio": "Professional comedy magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/42.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Magician",
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
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Elena Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-67",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Nicholas Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-973",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Alexander Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-1001",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Gabriella Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-225",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Darrell Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-685",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Sean Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-320",
        },
        {
          quote: "The Stage Magic Extravaganza show left me speechless. True artistry and skill on display.",
          author: "Adeline Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-251",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Emma Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-910",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Gregory Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-432",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "628ab8dc-05cd-4d21-9082-7771385dc81e",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 36,
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
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Family-friendly magic show with audience participation",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-817-498-1620",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dafadfc6-fc1e-4885-a40c-6acdcd64cd22",
      title: "Mind Reading & Mentalism",
      description: "Family-friendly magic show with audience participation",
      tickets: {
        isRequired: false,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "116 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "a2e5b93e-2806-4c01-9609-060a0da78887",
                "name": "Ariana Russell",
                "role": "Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/31.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Escape Artist",
                        "Mentalist",
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
          author: "Alexander Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-486",
        },
        {
          quote: "The Mind Reading & Mentalism show left me speechless. True artistry and skill on display.",
          author: "Roy Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-91",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Adam Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-694",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Eugene Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-388",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ariana Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-512",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "7baf96f7-8306-4785-bf86-41211c5a8134",
              "name": "Magic Book",
              "description": "Beginner's guide to magic tricks",
              "price": 28,
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
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Mind Reading & Mentalism",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Mind Reading & Mentalism performance times"
    },
    contact: {
      contactNumber: "+1-485-860-2796",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "47740469-08ec-4b46-8b9f-d126618047c6",
      title: "Mind Reading & Mentalism",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Mind Reading & Mentalism performance times"
        }],
      performers: [        {
                "id": "b67780f9-1338-42c3-b821-0ab8da05d621",
                "name": "Patrick Price",
                "role": "Escape Artist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          author: "Janet Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-1035",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Zoe Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-603",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Maya Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-459",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Bryan Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-110",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Carlos Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-505",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Victor Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-203",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Oliver Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-289",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Elizabeth Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-277",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "93a16e8d-53b1-4a7e-9103-1618b00397c8",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 37,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are magic shows suitable for young children?",
        answer: "Most of our magic shows are family-friendly and designed to entertain guests of all ages.",
      },
      {
        question: "Can I learn magic tricks during the cruise?",
        answer: "Some magicians offer workshops or sell beginner magic sets. Check with entertainment staff for availability.",
      },
      {
        question: "Will I be called on stage during the magic show?",
        answer: "Some magic shows include audience participation. Participation is always voluntary - you can simply indicate if you'd prefer not to participate.",
      }
    ],
    isPopular: false
  },
  {
    id: "6628215c-59d0-483c-b930-7f4d3cded846",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Large-scale stage magic with elaborate props and illusions",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-618-628-4765",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ed7be2db-dae0-4b94-817c-351c064249e5",
      title: "Grand Illusion Spectacular",
      description: "Large-scale stage magic with elaborate props and illusions",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "2beb76d1-32e5-4586-b972-0b7b7d743ce0",
                "name": "Douglas Coleman",
                "role": "Escape Artist",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Thabo Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-538",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Thomas Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-758",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Angela Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-382",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Robert Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-463",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Roy Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Dylan Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-489",
        },
        {
          quote: "The Grand Illusion Spectacular show left me speechless. True artistry and skill on display.",
          author: "Gary Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-176",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4a9fecd0-e3e8-47d5-8fce-7c1b7c2a1087",
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
  }
];
