// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "High-energy dance party with professional DJs",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-372-165-5900",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fad80925-752f-4baf-ae6e-3f849152c612",
      title: "Cocktails & Dancing",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "71 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "29784db0-da9a-4382-a370-36911a284527",
                "name": "Riley Reed",
                "role": "DJ",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/9.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Abigail Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-1033",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Kennedy Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Maria Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-1031",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Philip Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-491",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Avery Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-422",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Hannah Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-8",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Sebastian Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-911",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Nomsa Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-24",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Christine Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-334",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Luis Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-422",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "82e9cbea-8fa6-42b3-b838-2bb1e70e6770",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 15,
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
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Electronic dance music with amazing light shows",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-731-701-3082",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a977f100-f384-4296-925d-d8df01582f2f",
      title: "Dance Floor Competition",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "9159adbc-4f49-4dad-9202-adce6feb189b",
                "name": "Ryan Ellis",
                "role": "Dance Instructor",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Joan Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-119",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Nicole Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-998",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Eric Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-762",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Helen Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-465",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Paul Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-672",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Scarlett Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-584",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "209fad97-7837-428a-a5b1-ae89c493fef7",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 11,
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
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Sophisticated evening of cocktails and social dancing",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-264-535-3793",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6ca68bed-4fac-47c3-ad21-78125a41083c",
      title: "Live DJ Sets",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "6262fa41-7382-4d8b-b5e2-bae9552e7bd5",
                "name": "Steven Fox",
                "role": "MC",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "DJ",
                        "MC",
                        "Event Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Wayne Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-282",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Eleanor Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-843",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Randy Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-1036",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Gabriel Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-1077",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Donna Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-1040",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Sofia Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-1071",
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
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Electronic dance music with amazing light shows",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-500-478-1691",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "daeedeee-2422-46a6-bf88-6d2d9adb88de",
      title: "Dance Floor Competition",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "8a8429d5-901e-4877-8873-ba92a5ca98b2",
                "name": "Stephen Jennings",
                "role": "Dance Instructor",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Dance Instructor",
                        "MC",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Leah Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-61",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Julie Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-805",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Layla Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-783",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Sandra Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-492",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Pamela Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-16",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Melissa Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-824",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Elizabeth West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-948",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4d20a6b3-e85a-43f4-afcf-bc68b5ae3774",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 18,
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
    isPopular: true
  },
  {
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Neon-themed party with glow sticks and UV lighting",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-977-992-3908",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3f564af8-d374-4f98-be21-d8c58933f0ae",
      title: "Dance Floor Competition",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "252bb681-0b2b-4b2e-be5b-0b904b0abba8",
                "name": "Avery Crawford",
                "role": "Dance Instructor",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Ryan Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-554",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jessica Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-197",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Pamela Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-130",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Henry Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-494",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Douglas Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-195",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Samantha Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-501",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Thabo Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-527",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Edward Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-686",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Kennedy West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-924",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
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
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Neon-themed party with glow sticks and UV lighting",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-798-383-2279",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "40d01149-a990-42fa-a974-157498df3fed",
      title: "Retro Dance Night",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "9b03e337-32e7-4da9-9722-85332fe5372d",
                "name": "Elena Douglas",
                "role": "Lighting Technician",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "William Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-34",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Lucas Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-920",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Julie Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-571",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Charlotte Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-1059",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Sarah Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-372",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7708bb79-9c3d-4072-86cc-15166285ad0e",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 25,
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
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Neon-themed party with glow sticks and UV lighting",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-456-374-2836",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f76590dd-2005-4af1-8f51-c72935ff0967",
      title: "Electronic Dance Music",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "a63820e7-7f60-4758-9688-135acc876d23",
                "name": "Edward Marshall",
                "role": "Event Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/49.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Event Coordinator",
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
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Jeremy Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-326",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Brian Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-895",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Louis Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-29",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Pamela Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-511",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Michael Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-972",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Elizabeth Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-680",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "754e978d-849f-4495-aae2-3a9dc71331f0",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 3,
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
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Sophisticated evening of cocktails and social dancing",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-518-441-7563",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7a6a55b9-6f7c-4202-ad45-d594eaab70f2",
      title: "Live DJ Sets",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "117 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "d0bbdba0-c4e6-43d2-ba24-8744ee2c9966",
                "name": "Anna Douglas",
                "role": "MC",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/77.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
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
          author: "Adam West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-25",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Darrell Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-764",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Louis Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-936",
        },
        {
          quote: "The Live DJ Sets party was incredible! Danced until the early morning hours.",
          author: "Susan Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-615",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Alan Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-157",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Madelyn Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-941",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "720857e0-ce67-4d1b-9da5-01294b2e0db9",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
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
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      }
    ],
    isPopular: false
  },
  {
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Electronic dance music with amazing light shows",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-400-437-8252",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5a1b0ffc-38b5-4e6a-836d-7074b8d37190",
      title: "Theme Party Night",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "8c20086e-d97c-43d4-b10c-d813af8a5d8a",
                "name": "Avery Olivia",
                "role": "Lighting Technician",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/35.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Nomsa Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-691",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Peter Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-572",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Bobby Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-534",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Maya Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-1002",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Harper Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-399",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "567b5dcc-90a4-4d54-a04c-2f2fafd49017",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 11,
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
    isPopular: true
  },
  {
    id: "3e3595b6-0591-4d04-8bb9-86a0b6ba2242",
    category: "Nightclub",
    name: "Glow Party",
    description: "Professional DJs spinning the latest tracks",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-507-235-7692",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f19f5f7a-4970-4596-a0e0-f1215cfd43b5",
      title: "Glow Party",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "25476967-6847-4878-a273-575be5a15bc2",
                "name": "Edward Chambers",
                "role": "Event Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "DJ",
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
          author: "Amanda Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-754",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Naomi Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-863",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Emma Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-126",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Virginia Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-753",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jeremy Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-235",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Zachary West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-56",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Douglas Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-872",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3444e66e-48a9-4eb9-86ac-288cfd2c56f9",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 17,
              "currency": "USD"
      }
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
  }
];
