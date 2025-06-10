// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Elegant masquerade ball with formal attire",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-393-268-4392",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ac81894b-0fcb-4254-a1a0-7d3d2be1c254",
      title: "Retro Dance Night",
      description: "Elegant masquerade ball with formal attire",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "8f760759-1f1d-408b-b3ad-4e7aebcc4d37",
                "name": "Kyle Foster",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/41.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
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
          author: "Luis Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-437",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Robert Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-265",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Roger Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-1063",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Jason Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-1009",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Timothy Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-223",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Benjamin Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-50",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Valentina Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-810",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Kyle Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-826",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Evelyn Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-126",
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
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Glow Party",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-999-573-6555",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "169c3da9-cec2-43bc-a92c-a5b0a69e2b12",
      title: "Glow Party",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "b7a3afd9-5dc4-4051-b27b-2514b162e00b",
                "name": "Kimberly Ellis",
                "role": "MC",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/77.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Philip Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-859",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Gabriel Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-357",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jonathan Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-828",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Rajesh Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-749",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Roy Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-417",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Benjamin Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-556",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4d668378-4fce-41a0-b0d9-2d79d0edf3b1",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 15,
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
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-974-126-4052",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "93b4ac54-0862-453b-8b6a-044582d26299",
      title: "Electronic Dance Music",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "70400612-9e3a-4165-8a50-46a3c16125f9",
                "name": "Sebastian Stewart",
                "role": "Dance Instructor",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/65.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Event Coordinator",
                        "Dance Instructor",
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
          author: "Kenneth Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-102",
        },
        {
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Roy Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-573",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "John West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-461",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Brian Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-750",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Tyler Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-730",
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
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-831-802-3264",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a1affb45-bdf3-4406-b8ed-b17acac83ea1",
      title: "Masquerade Ball",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "00f6f772-2f2c-4514-ab19-3d42a4e61393",
                "name": "Anthony Hunter",
                "role": "Lighting Technician",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/56.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Lighting Technician",
                        "Event Coordinator",
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Leah Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-129",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Mary Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-640",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Angela Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-764",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Philip Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Harper Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-530",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Joseph Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-119",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Harold Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-758",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Brandon Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-331",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0bbc29ff-44ac-4f25-83a4-38041008edd1",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 11,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      },
      {
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What is the dress code for the nightclub?",
        answer: "Smart casual to formal attire is required. No swimwear, tank tops, or flip-flops are permitted.",
      }
    ],
    isPopular: false
  },
  {
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-755-604-2034",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f636a96e-c718-4c89-af38-85e2a815aae9",
      title: "Retro Dance Night",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "93 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "b9acebcb-1de0-475c-a5c5-b079cce9157c",
                "name": "Logan Crawford",
                "role": "Event Coordinator",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Elizabeth Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-596",
        },
        {
          quote: "The Retro Dance Night party was incredible! Danced until the early morning hours.",
          author: "Maya Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-885",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Maya Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-153",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Donna Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-617",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Victoria Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-243",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Glow Party",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-394-697-4824",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "63ff0161-a8ca-452e-ad73-20474f46842f",
      title: "Glow Party",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "b3554374-85a4-458b-8b8d-a4b0e77ca99f",
                "name": "Brandon Nash",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Lighting Technician",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Isabella Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-985",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Nicholas Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-281",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Peter Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-178",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Patrick Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-527",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Layla Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-197",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Alexander Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-329",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Harry Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-545",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "6ee1b302-1136-440c-9a20-9408300de1a9",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 10,
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
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-622-536-4504",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "931b7609-3758-462f-b26f-557484402c03",
      title: "Cocktails & Dancing",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: true,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "73 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "6a53a0f7-66fe-400f-88dc-45d0ea215cd9",
                "name": "Patrick Baker",
                "role": "MC",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/71.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "DJ",
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
          author: "Lerato Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-6",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Thomas Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-958",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Pamela Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-707",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Elena Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-216",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Claire Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-1075",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Julie Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-1022",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1e99e186-bb1a-4e58-ad09-d365c65a4352",
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
    isPopular: true
  },
  {
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Glow Party",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-777-864-1875",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "75ec6580-50f6-433b-9f66-ae83666ad1e1",
      title: "Glow Party",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "d1aef69b-c04e-44a3-9b1c-9fefbd15cc69",
                "name": "Amina Nash",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/13.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Willie Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-868",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Frank Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-296",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Brian Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-426",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Thabo Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-903",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Nancy Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-14",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Peter Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-1029",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b3d002ec-62ce-4e6d-ad29-e7ae89cddc93",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 18,
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
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Electronic dance music with amazing light shows",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-961-459-5119",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "226b96e9-63eb-402d-9030-04d735f7e5be",
      title: "DJ Dance Party",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 17,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "c05d0ada-4015-449e-aae7-140ed96db340",
                "name": "Logan Cooper",
                "role": "Event Coordinator",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/2.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Event Coordinator",
                        "Dance Instructor",
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Olivia Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-444",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Jesse Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-167",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Stephanie Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-156",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Evelyn Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-528",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Brooklyn Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-161",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Marcus Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-739",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Alexa Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-44",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Melissa Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-774",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Joshua Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-862",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Brandon Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-656",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8f880ced-a819-46c2-8cf3-9a82140e3935",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 8,
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
    id: "1dd35f5b-81a2-4b72-b997-0dfce03de8c9",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Neon-themed party with glow sticks and UV lighting",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-257-275-7646",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9c176e29-71b1-4d95-a701-123e29c20462",
      title: "Dance Floor Competition",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "4c65bff5-911e-40e3-9fe9-cb481f973990",
                "name": "Margaret Dean",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/37.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "DJ",
                        "Dance Instructor",
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
          author: "Nicholas Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-68",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Philip Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-1011",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Patricia Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-137",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Michelle Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-893",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Audrey Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-983",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Charlotte Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-612",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Thabo Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-996",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Nora Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-360",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Kennedy Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-779",
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
        question: "Is there a minimum age for the nightclub?",
        answer: "The nightclub welcomes guests 18 and older. Some special events may be 21+.",
      },
      {
        question: "What are the nightclub operating hours?",
        answer: "Nightclub hours vary by itinerary but typically open after dinner and close in the early morning hours.",
      }
    ],
    isPopular: false
  }
];
