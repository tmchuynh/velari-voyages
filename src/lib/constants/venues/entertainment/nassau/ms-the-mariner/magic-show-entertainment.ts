// Magic Show entertainment shows
// This file contains magic show entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const magicShowEntertainment: Entertainment[] = [
  {
    id: "1a56b46d-7c9f-4167-b2f9-b9f01d43b60d",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-561-999-9288",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "752baaf5-11dd-490f-ac1f-39c13c9a22e7",
      title: "Comedy Magic Show",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "57e55462-818e-44f9-8417-d1ecfd89d3db",
                "name": "Oliver Bennett",
                "role": "Comedy Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Sophia Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-187",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Zoe Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-970",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Nancy Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-131",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Genesis Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-566",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Aaliyah Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-682",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Lerato Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-179",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Ella Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-349",
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
    id: "1a56b46d-7c9f-4167-b2f9-b9f01d43b60d",
    category: "Magic Show",
    name: "International Magic Acts",
    description: "Magic combined with hilarious comedy routines",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "International Magic Acts performance times"
    },
    contact: {
      contactNumber: "+1-518-384-1800",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ec74cb83-6e12-42e4-beb1-fc5e048fa6ee",
      title: "International Magic Acts",
      description: "Magic combined with hilarious comedy routines",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "International Magic Acts performance times"
        }],
      performers: [        {
                "id": "d7be50b4-e7b3-4321-b0cd-5dd0a62baa9a",
                "name": "Grace Cooper",
                "role": "Magician",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/79.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Louis Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-905",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "David Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-813",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Skylar Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-841",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Steven Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-219",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Bruce Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-371",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Allison Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-811",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Antonio Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-622",
        },
        {
          quote: "The International Magic Acts show left me speechless. True artistry and skill on display.",
          author: "Liam Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-473",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Janet Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-336",
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
    id: "1a56b46d-7c9f-4167-b2f9-b9f01d43b60d",
    category: "Magic Show",
    name: "Escape Artist Performance",
    description: "World-class magicians from around the globe",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Escape Artist Performance performance times"
    },
    contact: {
      contactNumber: "+1-433-776-3577",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f088e4ef-196a-418d-9b2a-3d1bbe7b7f0c",
      title: "Escape Artist Performance",
      description: "World-class magicians from around the globe",
      tickets: {
        isRequired: false,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Escape Artist Performance performance times"
        }],
      performers: [        {
                "id": "1997c681-e22c-41a0-b225-9ec7981b851e",
                "name": "Savannah Spencer",
                "role": "Illusionist",
                "bio": "Professional illusionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/31.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Jeremy Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-822",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Eleanor Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-829",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Billy Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-160",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Robert Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-651",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Elizabeth Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-96",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Sophia Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-270",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Eugene Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-706",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Melissa Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-58",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Nicholas Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-731",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Sandra Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-27",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b1faeb9b-73e0-40b0-99b5-f6945fad3164",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 33,
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
    id: "1a56b46d-7c9f-4167-b2f9-b9f01d43b60d",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "Grand-scale illusions and spectacular magic performances",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-767-465-4689",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "176c9393-52e7-433d-9f45-87069f037d5a",
      title: "Family Magic Show",
      description: "Grand-scale illusions and spectacular magic performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "115 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "1df2d856-031a-4bd0-92c6-1a21400250f5",
                "name": "Jose Hayes",
                "role": "Illusionist",
                "bio": "Professional mentalist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/37.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Comedy Magician",
                        "Escape Artist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Ellie Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-574",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Alan Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-344",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Sean Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-797",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Priya Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-569",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Ashley Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-1081",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Randy Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-718",
        },
        {
          quote: "The Family Magic Show show left me speechless. True artistry and skill on display.",
          author: "Keith Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-679",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Betty Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-794",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "01f266c3-0f0b-4596-8829-051c7857745f",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
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
    isPopular: true
  },
  {
    id: "1a56b46d-7c9f-4167-b2f9-b9f01d43b60d",
    category: "Magic Show",
    name: "Comedy Magic Show",
    description: "Thrilling escape artist performances and stunts",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Comedy Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-531-309-8857",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "14a85058-b1dc-4f41-9f0e-579b5d0b237a",
      title: "Comedy Magic Show",
      description: "Thrilling escape artist performances and stunts",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Comedy Magic Show performance times"
        }],
      performers: [        {
                "id": "b2ba42b7-6527-42cc-a715-b8abbc8e4b5c",
                "name": "Gabriella Montgomery",
                "role": "Illusionist",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/51.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
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
          author: "Roy Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-171",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Nathan Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-806",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Diego Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-225",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Alexa Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-938",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "Vincent Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-739",
        },
        {
          quote: "The Comedy Magic Show show left me speechless. True artistry and skill on display.",
          author: "John Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-304",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Kyle Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-966",
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
    id: "1a56b46d-7c9f-4167-b2f9-b9f01d43b60d",
    category: "Magic Show",
    name: "Grand Illusion Spectacular",
    description: "Mysterious mind reading and mentalism demonstrations",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Grand Illusion Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-764-113-3922",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6f955fe0-0b35-4477-b210-c45169324fc1",
      title: "Grand Illusion Spectacular",
      description: "Mysterious mind reading and mentalism demonstrations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Grand Illusion Spectacular performance times"
        }],
      performers: [        {
                "id": "00f099fc-c136-4256-92e2-38c77d15b8fa",
                "name": "Charlotte Mason",
                "role": "Comedy Magician",
                "bio": "Professional escape artist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/78.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Eric Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-610",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Christopher Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-142",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Carlos Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-796",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Terry Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Cynthia Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-930",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Sarah Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-746",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Walter Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-467",
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
    id: "1a56b46d-7c9f-4167-b2f9-b9f01d43b60d",
    category: "Magic Show",
    name: "Family Magic Show",
    description: "Interactive magic where guests become part of the performance",
    image: "/images/entertainment/magic-show-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Family Magic Show performance times"
    },
    contact: {
      contactNumber: "+1-812-105-9012",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "88cf571c-0d18-4e25-bbf3-de44fd310bac",
      title: "Family Magic Show",
      description: "Interactive magic where guests become part of the performance",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Family Magic Show performance times"
        }],
      performers: [        {
                "id": "683fb02f-2d33-4441-8b9f-3c0958b1fd76",
                "name": "Scarlett Curtis",
                "role": "Magician",
                "bio": "Professional magician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Jeremy Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-58",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Barbara Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-1056",
        },
        {
          quote: "Family-friendly magic that amazed adults and children alike. Fantastic performance!",
          author: "Diego Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-427",
        },
        {
          quote: "I was skeptical about magic shows, but this completely changed my mind.",
          author: "Bruce Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-409",
        },
        {
          quote: "I still can't figure out how undefined undefined did those tricks! Absolutely mind-blowing.",
          author: "Eric Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-905",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Christine Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-633",
        },
        {
          quote: "The close-up magic was incredible. undefined undefined has such talented hands.",
          author: "Arthur Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-557",
        },
        {
          quote: "Interactive magic that made me feel like part of the show. Truly special experience.",
          author: "Lawrence Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-793",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "11c6810e-1fb3-49cb-8d1d-5ef3de111c65",
              "name": "Magic Trick Set",
              "description": "Learn basic magic tricks at home",
              "price": 26,
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
  }
];
