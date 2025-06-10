// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "High-energy dance party with professional DJs",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-371-251-5681",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "272a88de-11df-40c3-a471-7de8b82b8ee8",
      title: "Cocktails & Dancing",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "a089f598-604a-40a9-8859-eafb0c77eccb",
                "name": "Stella Wallace",
                "role": "Dance Instructor",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/28.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Lighting Technician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Zachary Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-1080",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Kenneth Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-742",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Russell Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-603",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Jordan Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-24",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Michael Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-42",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: false
  },
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Dance to your own beat with wireless headphone technology",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-253-294-5160",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "07a6f35e-21ac-4307-b041-c346a5043a18",
      title: "Retro Dance Night",
      description: "Dance to your own beat with wireless headphone technology",
      tickets: {
        isRequired: false,
        price: 19,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "7c05fc2e-3e2e-446f-b82d-fde080b2cfcb",
                "name": "Isabella Campbell",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Dance Instructor",
                        "MC",
                        "Lighting Technician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Bryan Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-99",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Mason Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-746",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Brandon Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-346",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Terry Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-379",
        },
        {
          quote: "The Retro Dance Night party was incredible! Danced until the early morning hours.",
          author: "Richard Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-166",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "David Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-907",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: false
  },
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Themed dance parties with costumes and special decorations",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-427-839-4167",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3df1bfdd-7365-4f98-b820-06d1190a6303",
      title: "VIP Club Experience",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: false,
        price: 30,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "bfa27e78-1cf2-408d-9a32-d587d081b729",
                "name": "Liam Knight",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "DJ",
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jason Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-152",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Tyler Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-280",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Nicholas Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-23",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Gary Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-536",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Anna Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-752",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "780688f2-7186-41cf-b0a7-0b8432eebcf1",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 22,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: false
  },
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-832-351-2678",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "96b908b2-ea3e-4c41-92c8-136b72f87db5",
      title: "Live DJ Sets",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: false,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "120 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "6fb28ded-43ce-40c5-9c24-3a0893dd4be7",
                "name": "Kenneth West",
                "role": "DJ",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/48.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Event Coordinator",
                        "Dance Instructor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Amanda Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-336",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Roy Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-213",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Christopher Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-1064",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Isabella Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-656",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Betty Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-127",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Samantha Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-654",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Genesis Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-431",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Ellie Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-700",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Stephanie Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-404",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      }
    ],
    isPopular: false
  },
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "Glow Party",
    description: "Dance to your own beat with wireless headphone technology",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-318-328-1323",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f6bce616-efc5-4640-83d4-95f1fe923f15",
      title: "Glow Party",
      description: "Dance to your own beat with wireless headphone technology",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "6f07ad79-6bd6-4d22-9d3b-6e291c37f34d",
                "name": "Wei Day",
                "role": "MC",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/80.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Event Coordinator",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Susan Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-24",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jason Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-665",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jack Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-637",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Avery Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-820",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Vincent Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-17",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Rachel Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-1082",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Larry Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-397",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Kevin Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-379",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Kinsley Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "2",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "920b4304-b317-4d02-a7a0-1041f2113697",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 5,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: true
  },
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Classic hits from the 70s, 80s, and 90s",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-454-215-2147",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2551c28b-1344-4962-9504-10f052e2e0ee",
      title: "Cocktails & Dancing",
      description: "Classic hits from the 70s, 80s, and 90s",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "96 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "a162fc9e-7212-4ada-bc10-8ab5fe28b985",
                "name": "Miguel Douglas",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/38.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Lighting Technician",
                        "Dance Instructor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Olivia Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-480",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Keith Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-789",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Douglas Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-442",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Rachel Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-51",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Christine Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-268",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Chen Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-494",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "85812bcf-78dd-4c35-8c69-1c3d7544d809",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 20,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      }
    ],
    isPopular: false
  },
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-699-487-5432",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "477d2a31-ba88-4a2a-bf99-6ec6572d3292",
      title: "Latin Dance Club",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "625f617e-b3fd-446d-abe6-cbe69b0f0cdf",
                "name": "Claire Warren",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/76.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Lighting Technician",
                        "DJ",
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Audrey Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-199",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Layla Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-882",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Nicholas Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-814",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Jason Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-211",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Maya Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-830",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Sandra Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-81",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Chloe Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-1043",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Gregory Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-657",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      }
    ],
    isPopular: false
  },
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "High-energy dance party with professional DJs",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-804-615-3104",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dd13d920-c7bf-4b89-bb62-aab9aeaad490",
      title: "DJ Dance Party",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "111 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "d5a5b828-9dac-4535-80a7-1bb4331eb838",
                "name": "Eric Harper",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "MC",
                        "Lighting Technician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Eric Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-799",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Alexa Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-509",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Janet Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-512",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Amelia Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-199",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Gregory Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-340",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Maya Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-186",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      }
    ],
    isPopular: false
  },
  {
    id: "9233114a-07a6-44a2-8e3f-6942a3022113",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Exclusive VIP nightclub experience with premium service",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-745-537-7017",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9fc62444-0de8-46e0-bb6c-6db2a71f806f",
      title: "VIP Club Experience",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "9ff1a9a6-53fb-4ba6-b8f7-7fcd138405eb",
                "name": "Riley Graham",
                "role": "Lighting Technician",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/65.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "DJ",
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Thabo Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-1010",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Carl Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-383",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Alexander Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-336",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Ryan Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-333",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Nora Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-869",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      }
    ],
    isPopular: true
  }
];
